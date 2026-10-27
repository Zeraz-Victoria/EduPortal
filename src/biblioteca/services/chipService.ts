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

/**
 * Genera todas las variantes posibles de un UID de tarjeta:
 * - Decimal de 10 dígitos (estándar de lectores USB comunes)
 * - Decimal sin ceros iniciales
 * - Hexadecimal estándar (Web NFC / teléfonos)
 * - Hexadecimal con relleno de 8 caracteres
 * - Orden de bytes invertido (Little Endian)
 */
export function getUidVariants(raw: string): string[] {
  if (!raw) return [];
  const clean = normalizarUid(raw);
  if (!clean) return [];

  const variants = new Set<string>([clean]);

  // Si es un número decimal (ej. lector USB envía 0007647141 o 1103303753)
  if (/^\d+$/.test(clean)) {
    const num = parseInt(clean, 10);
    if (!isNaN(num) && num > 0) {
      variants.add(String(num));
      variants.add(String(num).padStart(10, '0'));
      
      const hex = num.toString(16).toUpperCase();
      variants.add(hex);
      const paddedHex = hex.padStart(8, '0');
      variants.add(paddedHex);

      const rev = paddedHex.match(/../g)?.reverse().join('');
      if (rev) {
        variants.add(rev);
        const numRev = parseInt(rev, 16);
        if (!isNaN(numRev) && numRev > 0) {
          variants.add(String(numRev));
          variants.add(String(numRev).padStart(10, '0'));
        }
      }
    }
  }

  // Si es hexadecimal (ej. 04A28F7C o A1B2C3D4)
  if (/^[0-9A-F]+$/.test(clean) && clean.length >= 4) {
    const num = parseInt(clean, 16);
    if (!isNaN(num) && num > 0) {
      variants.add(String(num));
      variants.add(String(num).padStart(10, '0'));
    }
    if (clean.length % 2 === 0) {
      const rev = clean.match(/../g)?.reverse().join('');
      if (rev) {
        variants.add(rev);
        const numRev = parseInt(rev, 16);
        if (!isNaN(numRev) && numRev > 0) {
          variants.add(String(numRev));
          variants.add(String(numRev).padStart(10, '0'));
        }
      }
    }
  }

  return Array.from(variants);
}

export const chipService = {
  /**
   * Identifica un alumno o docente al pasar su tarjeta/chip
   * Busca en el padrón de socios/lectores de la escuela almacenado en EduPortal
   * reconociendo lectores USB (10 dígitos decimales) y Web NFC (Hexadecimal)
   */
  identificarChip: async (
    rawUid: string, 
    institucionId?: string
  ): Promise<{ encontrado: boolean; socio?: Socio; tipo?: 'alumno' | 'docente'; cleanUid: string; mensaje?: string }> => {
    const clean = normalizarUid(rawUid);
    if (!clean) {
      return { encontrado: false, cleanUid: '', mensaje: 'Código de chip vacío.' };
    }

    const escId = institucionId || 'esc-101';
    const sociosLocales = storageService.getSocios(escId);
    const variants = getUidVariants(clean);

    // 1. Verificación en Socios locales de la escuela activa
    const socioLocal = sociosLocales.find(s => {
      const uVariants = getUidVariants(s.nfcUid || '');
      const mVariants = getUidVariants(s.matricula || '');
      const sId = normalizarUid(s.id);
      return variants.some(v => uVariants.includes(v) || mVariants.includes(v) || sId === v);
    });

    if (socioLocal) {
      reproducirSonido('exito');
      return {
        encontrado: true,
        cleanUid: clean,
        socio: socioLocal,
        tipo: socioLocal.rol
      };
    }

    // 2. Consulta en vivo al sistema oficial de asistencia (asistencia.iaparamaestros.org)
    // Permite identificar al instante a cualquier alumno ya registrado en la escuela
    try {
      const uidsToTry = [clean, ...variants.filter(v => v !== clean)];
      for (const u of uidsToTry.slice(0, 3)) {
        const res = await fetch(`${ASISTENCIA_BASE_URL}/api/portal/history/${encodeURIComponent(u)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.alumno && data.alumno.nombre_completo) {
            const al = data.alumno;
            const nuevoSocio: Socio = {
              id: `asist-${al.id}`,
              matricula: al.matricula || `ALU-${al.id}`,
              nombre: al.nombre_completo,
              rol: 'alumno',
              gradoGrupo: al.grado ? `${al.grado} ${al.grupo || ''}`.trim() : (al.clase_id ? `Grupo #${al.clase_id}` : 'Alumno'),
              email: `${al.id}@alumno.edu.mx`,
              telefono: al.telefono_tutor || '',
              nfcUid: clean,
              prestamosActivos: 0,
              fechaRegistro: new Date().toISOString().split('T')[0]
            };

            // Guardar automáticamente en el catálogo local de socios de la biblioteca
            storageService.saveSocio(nuevoSocio, escId);
            reproducirSonido('exito');

            return {
              encontrado: true,
              cleanUid: clean,
              socio: nuevoSocio,
              tipo: 'alumno'
            };
          }
        }
      }
    } catch (err) {
      console.warn('No se pudo conectar con el servidor de asistencia en vivo:', err);
    }

    // 3. Si no está registrado en el padrón de la escuela
    reproducirSonido('error');
    return {
      encontrado: false,
      cleanUid: clean,
      mensaje: `Chip detectado (UID: ${clean}), pero aún no está asignado a ningún alumno en el sistema de asistencia.`
    };
  },

  /**
   * Vincula rápidamente un UID de chip escaneado a un alumno
   */
  asignarChipASocio: (socioId: string, rawUid: string, institucionId?: string): Socio | null => {
    const clean = normalizarUid(rawUid);
    if (!clean || !socioId) return null;
    const escId = institucionId || 'esc-101';
    const socios = storageService.getSocios(escId);
    const socio = socios.find(s => s.id === socioId);
    if (!socio) return null;

    const actualizado: Socio = {
      ...socio,
      nfcUid: clean
    };
    storageService.saveSocio(actualizado, escId);
    reproducirSonido('asignar');
    return actualizado;
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
