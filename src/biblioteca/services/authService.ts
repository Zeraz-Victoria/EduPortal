import { UsuarioSaaS, EscuelaSaaS } from '../types';
import { storageService } from './storageService';

const AUTH_STORAGE_KEY = 'eduportal_saas_auth_session';
const ASISTENCIA_API_URL = 'https://asistencia.iaparamaestros.org/api/auth/login';

export const authService = {
  // Obtener sesión activa
  getSesion: (): UsuarioSaaS | null => {
    try {
      const data = localStorage.getItem(AUTH_STORAGE_KEY);
      if (!data) return null;
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al recuperar sesión SaaS', e);
      return null;
    }
  },

  // Guardar sesión
  setSesion: (usuario: UsuarioSaaS) => {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(usuario));
  },

  // Cerrar sesión
  cerrarSesion: () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  },

  // 1. Iniciar sesión conectándose a la base de datos de asistencia.iaparamaestros.org
  loginConAsistencia: async (identificador: string, password: string): Promise<{ success: boolean; usuario?: UsuarioSaaS; error?: string }> => {
    const idTrim = identificador.trim();
    const passTrim = password.trim();

    if (!idTrim || !passTrim) {
      return { success: false, error: 'Por favor ingresa usuario y contraseña.' };
    }

    // A. Verificación de Llave Maestra / Superadmin local directo
    if ((idTrim.toLowerCase() === 'superadmin' || idTrim.toLowerCase() === 'zeraz' || idTrim.toLowerCase() === 'adrianvira') && 
        (passTrim === 'master123' || passTrim === 'admin123' || passTrim === 'zeraz2026')) {
      const superAdminUser: UsuarioSaaS = {
        id: 'super-001',
        usuario: idTrim,
        email: `${idTrim}@iaparamaestros.org`,
        nombreCompleto: 'Super Administrador (Matriz)',
        rol: 'superadmin',
        institucionId: 'global',
        nombreEscuela: 'Plataforma Central EduPortal SaaS',
        esSuperAdmin: true
      };
      authService.setSesion(superAdminUser);
      return { success: true, usuario: superAdminUser };
    }

    // B. Petición HTTP a la API oficial de asistencia.iaparamaestros.org
    try {
      const response = await fetch(ASISTENCIA_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identificador: idTrim,
          password: passTrim
        })
      });

      const data = await response.json();

      if (response.ok && data.token && data.usuario) {
        const u = data.usuario;
        const nombreEscuela = data.nombre_escuela || 'Plantel Escolar';
        const institucionId = String(u.institucion_id || 'esc-default');
        const esSuper = u.rol === 'superadmin' || u.rol === 'admin_master';

        const usuarioSaaS: UsuarioSaaS = {
          id: u.id,
          usuario: u.usuario || u.email || idTrim,
          email: u.email || `${idTrim}@asistencia.iaparamaestros.org`,
          nombreCompleto: u.nombre_completo || u.usuario || 'Docente / Directivo',
          rol: esSuper ? 'superadmin' : (u.rol === 'director' ? 'director' : 'docente'),
          institucionId,
          nombreEscuela,
          token: data.token,
          esSuperAdmin: esSuper
        };

        // Registrar o actualizar escuela en el catálogo SaaS local
        storageService.asegurarEscuela({
          id: institucionId,
          nombre: nombreEscuela,
          director: usuarioSaaS.nombreCompleto,
          email: usuarioSaaS.email,
          plan: 'pro',
          estado: 'activa',
          fechaRegistro: new Date().toISOString().split('T')[0]
        });

        authService.setSesion(usuarioSaaS);
        return { success: true, usuario: usuarioSaaS };
      } else {
        // Si la API devolvió error de credenciales
        const errorMsg = data.error || 'Credenciales incorrectas o escuela no encontrada en asistencia.iaparamaestros.org';

        // C. Intentar en base de datos local de escuelas creadas directamente en este SaaS
        const escuelaLocal = storageService.buscarEscuelaPorCredencial(idTrim, passTrim);
        if (escuelaLocal) {
          const userLocal: UsuarioSaaS = {
            id: `usr-${escuelaLocal.id}`,
            usuario: escuelaLocal.email,
            email: escuelaLocal.email,
            nombreCompleto: escuelaLocal.director,
            rol: 'director',
            institucionId: escuelaLocal.id,
            nombreEscuela: escuelaLocal.nombre,
            esSuperAdmin: false
          };
          authService.setSesion(userLocal);
          return { success: true, usuario: userLocal };
        }

        return { success: false, error: errorMsg };
      }
    } catch (netError) {
      console.warn('No se pudo conectar directamente con asistencia.iaparamaestros.org. Verificando base de datos local SaaS...', netError);

      // Verificación en base de datos SaaS local
      const escuelaLocal = storageService.buscarEscuelaPorCredencial(idTrim, passTrim);
      if (escuelaLocal) {
        const userLocal: UsuarioSaaS = {
          id: `usr-${escuelaLocal.id}`,
          usuario: escuelaLocal.email,
          email: escuelaLocal.email,
          nombreCompleto: escuelaLocal.director,
          rol: 'director',
          institucionId: escuelaLocal.id,
          nombreEscuela: escuelaLocal.nombre,
          esSuperAdmin: false
        };
        authService.setSesion(userLocal);
        return { success: true, usuario: userLocal };
      }

      return {
        success: false,
        error: 'No se pudo validar en asistencia.iaparamaestros.org. Comprueba tu conexión a internet o intenta con tus credenciales locales.'
      };
    }
  },

  // 2. Registro de nueva escuela / cuenta SaaS aislada
  crearNuevaEscuelaSaaS: async (datos: {
    nombreEscuela: string;
    claveCct?: string;
    nombreDirector: string;
    email: string;
    password: string;
    telefono?: string;
    plan?: 'prueba' | 'basico' | 'pro' | 'institucional';
  }): Promise<{ success: boolean; usuario?: UsuarioSaaS; error?: string }> => {
    try {
      const idEscuela = `esc-${Date.now()}`;
      const nuevaEscuela: EscuelaSaaS = {
        id: idEscuela,
        nombre: datos.nombreEscuela.trim(),
        claveCct: datos.claveCct?.trim() || '30EPR0000X',
        director: datos.nombreDirector.trim(),
        email: datos.email.trim().toLowerCase(),
        telefono: datos.telefono?.trim(),
        plan: datos.plan || 'prueba',
        estado: 'activa',
        fechaRegistro: new Date().toISOString().split('T')[0]
      };

      storageService.registrarNuevaEscuela(nuevaEscuela, datos.password);

      const nuevoUsuario: UsuarioSaaS = {
        id: `usr-${idEscuela}`,
        usuario: datos.email.trim().toLowerCase(),
        email: datos.email.trim().toLowerCase(),
        nombreCompleto: datos.nombreDirector.trim(),
        rol: 'director',
        institucionId: idEscuela,
        nombreEscuela: datos.nombreEscuela.trim(),
        esSuperAdmin: false
      };

      authService.setSesion(nuevoUsuario);
      return { success: true, usuario: nuevoUsuario };
    } catch (e: any) {
      return { success: false, error: e.message || 'Error al registrar la escuela.' };
    }
  },

  // 3. Login SuperAdmin con Clave Maestra
  loginSuperAdminMaster: (claveMaestra: string): boolean => {
    if (claveMaestra.trim() === 'master123' || claveMaestra.trim() === 'superadmin2026') {
      const superAdminUser: UsuarioSaaS = {
        id: 'super-001',
        usuario: 'superadmin',
        email: 'superadmin@iaparamaestros.org',
        nombreCompleto: 'Super Administrador (Matriz)',
        rol: 'superadmin',
        institucionId: 'global',
        nombreEscuela: 'Plataforma Central EduPortal SaaS',
        esSuperAdmin: true
      };
      authService.setSesion(superAdminUser);
      return true;
    }
    return false;
  }
};
