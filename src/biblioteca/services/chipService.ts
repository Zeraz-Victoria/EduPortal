/**
 * ==========================================================
 * SERVICIO: chipService.ts
 * Manejo de Chips NFC / RFID / Código de barras para:
 * 1. Préstamos y Devoluciones de Libros
 * 2. Asignación y Liberación de Computadoras
 * 3. Identificación y Kiosco de Alumnos y Docentes
 * Conectado con la base de datos de asistencia.iaparamaestros.org
 * ==========================================================
 */

import { Socio } from '../types';
import { storageService } from './storageService';
import { authService } from './authService';

const ASISTENCIA_BASE_URL = 'https://asistencia.iaparamaestros.org';

// Generador de sonidos de confirmación con Web Audio API (sin dependencias externas)
export const reproducirSonido = (tipo: 'exito' | 'error' | 'asignar' | 'devolver' = 'exito') => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    if (tipo === 'exito') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // La5
      osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } else if (tipo === 'asignar') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659.25, ctx.currentTime); // Mi5
      osc.frequency.setValueAtTime(987.77, ctx.currentTime + 0.08); // Si5
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.26);
    } else if (tipo === 'devolver') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1046.50, ctx.currentTime); // Do6
      osc.frequency.exponentialRampToValueAtTime(523.25, ctx.currentTime + 0.15); // Do5
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.26);
    } else {
      // Error
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.32);
    }
  } catch (e) {
    // Silencioso si el navegador bloquea audio antes de interacción
  }
};

export function normalizarUid(raw: string): string {
  if (!raw) return '';
  return String(raw).trim().replace(/[:\-\s\r\n\t]/g, '').toUpperCase();
}

export const chipService = {
  /**
   * Identifica un alumno o docente al pasar su tarjeta/chip
   * Busca en el padrón de socios/lectores de la escuela almacenado en EduPortal
   */
  identificarChip: async (
    rawUid: string, 
    institucionId?: string
  ): Promise<{ encontrado: boolean; socio?: Socio; tipo?: 'alumno' | 'docente'; mensaje?: string }> => {
    const clean = normalizarUid(rawUid);
    if (!clean) {
      return { encontrado: false, mensaje: 'Código de chip vacío.' };
    }

    const escId = institucionId || 'esc-101';
    const sociosLocales = storageService.getSocios(escId);

    // 1. Verificación en Socios de la escuela activa
    const socioLocal = sociosLocales.find(s => {
      const u = normalizarUid(s.nfcUid || '');
      const m = normalizarUid(s.matricula || '');
      return u === clean || m === clean || s.id === clean;
    });

    if (socioLocal) {
      reproducirSonido('exito');
      return {
        encontrado: true,
        socio: socioLocal,
        tipo: socioLocal.rol
      };
    }

    // 2. Si no está registrado en el padrón de la biblioteca
    reproducirSonido('error');
    return {
      encontrado: false,
      mensaje: `Chip UID (${clean}) no registrado en Biblioteca. Regístralo o asígnalo en la sección 'Lectores / Socios'.`
    };
  },

  /**
   * Sincroniza en 1 clic todos los alumnos matriculados en asistencia.iaparamaestros.org
   * hacia la base de datos de lectores de Biblioteca Cloud.
   */
  sincronizarAlumnosDesdeAsistencia: async (institucionId: string): Promise<{ success: boolean; total: number; mensaje: string }> => {
    try {
      const sesion = authService.getSesion();
      const token = sesion?.token;

      const headers: Record<string, string> = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const res = await fetch(`${ASISTENCIA_BASE_URL}/api/biblioteca/alumnos?institucion_id=${encodeURIComponent(institucionId)}`, {
        headers
      });

      if (!res.ok) {
        throw new Error(`Servidor respondió con código ${res.status}`);
      }

      const data = await res.json();
      if (data.success && Array.isArray(data.alumnos)) {
        let guardados = 0;
        data.alumnos.forEach((al: any) => {
          storageService.saveSocio({
            id: String(al.id),
            matricula: al.matricula || `ALU-${al.id}`,
            nombre: al.nombre,
            rol: 'alumno',
            gradoGrupo: al.gradoGrupo || 'Secundaria',
            email: al.email || `alumno${al.id}@escuela.edu.mx`,
            telefono: al.telefono || '',
            nfcUid: al.nfcUid || '',
            fotoUrl: al.fotoUrl || undefined,
            prestamosActivos: 0,
            fechaRegistro: al.fechaRegistro || new Date().toISOString().split('T')[0]
          }, institucionId);
          guardados++;
        });

        reproducirSonido('exito');
        return {
          success: true,
          total: guardados,
          mensaje: `Se sincronizaron exitosamente ${guardados} alumnos con sus chips y grupos.`
        };
      } else {
        return {
          success: false,
          total: 0,
          mensaje: data.error || 'No se recibieron alumnos del servidor.'
        };
      }
    } catch (e: any) {
      console.error('Error al sincronizar alumnos:', e);
      return {
        success: false,
        total: 0,
        mensaje: `Error al contactar con asistencia.iaparamaestros.org: ${e.message}`
      };
    }
  },

  /**
   * Escucha tarjetas NFC usando Web NFC API en navegadores móviles compatibles (Android Chrome)
   */
  iniciarLecturaWebNFC: async (onScan: (uid: string) => void): Promise<() => void> => {
    if ('NDEFReader' in window) {
      try {
        const ndef = new (window as any).NDEFReader();
        await ndef.scan();
        
        const handleReading = (event: any) => {
          const serialNumber = event.serialNumber;
          if (serialNumber) {
            onScan(serialNumber);
          }
        };

        ndef.addEventListener('reading', handleReading);

        return () => {
          try {
            ndef.removeEventListener('reading', handleReading);
          } catch (e) {}
        };
      } catch (e) {
        console.warn('Web NFC no disponible o permiso denegado:', e);
      }
    }
    return () => {};
  }
};
