import { Libro, Socio, Prestamo, Computadora, EstadisticasBiblioteca, EscuelaSaaS, PlanSaaS, EstadoEscuelaSaaS } from '../types';
import { LIBROS_INICIALES, SOCIOS_INICIALES, PRESTAMOS_INICIALES, COMPUTADORAS_INICIALES } from '../constants';

const ESCUELAS_STORAGE_KEY = 'eduportal_saas_escuelas_v1';
const ESCUELAS_CREDS_KEY = 'eduportal_saas_escuelas_creds_v1';

// Escuelas iniciales del ecosistema
const ESCUELAS_DEMO: EscuelaSaaS[] = [
  {
    id: 'esc-101',
    nombre: 'Escuela Telesecundaria "Cuauhtémoc"',
    claveCct: '30ETV0145X',
    director: 'Prof. Carlos Mendoza Estrada',
    email: 'carlos.mendoza@escuela.edu.mx',
    telefono: '228-814-5500',
    plan: 'pro',
    estado: 'activa',
    fechaRegistro: '2024-01-15',
    fechaVencimiento: '2027-01-15',
    totalLibros: 12,
    totalPrestamos: 4,
    totalSocios: 5
  },
  {
    id: 'esc-102',
    nombre: 'Secundaria Técnica Industrial No. 19',
    claveCct: '30DST0019Z',
    director: 'Mtra. Laura Patricia Méndez Rivas',
    email: 'laura.mendez@escuela.edu.mx',
    telefono: '228-814-5501',
    plan: 'institucional',
    estado: 'activa',
    fechaRegistro: '2024-02-10',
    fechaVencimiento: '2027-02-10',
    totalLibros: 15,
    totalPrestamos: 2,
    totalSocios: 8
  },
  {
    id: 'esc-103',
    nombre: 'Escuela Secundaria General "Benito Juárez"',
    claveCct: '30DES0052K',
    director: 'Prof. Roberto Gómez Bolaños',
    email: 'direccion@benitojuarez.edu.mx',
    telefono: '228-812-9900',
    plan: 'prueba',
    estado: 'prueba',
    fechaRegistro: '2024-09-01',
    fechaVencimiento: '2024-10-01',
    totalLibros: 10,
    totalPrestamos: 1,
    totalSocios: 3
  }
];

export const storageService = {
  // === GESTIÓN DE ESCUELAS / TENANTS (SAAS) ===
  getEscuelas: (): EscuelaSaaS[] => {
    try {
      const data = localStorage.getItem(ESCUELAS_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(ESCUELAS_STORAGE_KEY, JSON.stringify(ESCUELAS_DEMO));
        return ESCUELAS_DEMO;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al leer escuelas SaaS', e);
      return ESCUELAS_DEMO;
    }
  },

  asegurarEscuela: (escuela: EscuelaSaaS): EscuelaSaaS[] => {
    const escuelas = storageService.getEscuelas();
    const index = escuelas.findIndex(e => e.id === escuela.id);
    let updated: EscuelaSaaS[];
    if (index >= 0) {
      updated = [...escuelas];
      updated[index] = { ...updated[index], ...escuela };
    } else {
      updated = [escuela, ...escuelas];
    }
    localStorage.setItem(ESCUELAS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  registrarNuevaEscuela: (escuela: EscuelaSaaS, passwordPlano: string): EscuelaSaaS[] => {
    const escuelas = storageService.asegurarEscuela(escuela);

    // Guardar credenciales para fallback offline
    try {
      const credsData = localStorage.getItem(ESCUELAS_CREDS_KEY);
      const creds = credsData ? JSON.parse(credsData) : {};
      creds[escuela.email.toLowerCase()] = {
        password: passwordPlano,
        escuelaId: escuela.id
      };
      localStorage.setItem(ESCUELAS_CREDS_KEY, JSON.stringify(creds));
    } catch (e) {}

    // Inicializar acervo para la nueva escuela con el catálogo NEM
    storageService.getLibros(escuela.id);
    storageService.getSocios(escuela.id);
    storageService.getComputadoras(escuela.id);

    return escuelas;
  },

  buscarEscuelaPorCredencial: (identificador: string, passwordPlano: string): EscuelaSaaS | null => {
    try {
      const credsData = localStorage.getItem(ESCUELAS_CREDS_KEY);
      if (!credsData) return null;
      const creds = JSON.parse(credsData);
      const entry = creds[identificador.toLowerCase()];
      if (entry && entry.password === passwordPlano) {
        const escuelas = storageService.getEscuelas();
        return escuelas.find(e => e.id === entry.escuelaId) || null;
      }
    } catch (e) {}
    return null;
  },

  actualizarPlanEscuela: (escuelaId: string, plan: PlanSaaS): EscuelaSaaS[] => {
    const escuelas = storageService.getEscuelas();
    const updated = escuelas.map(e => e.id === escuelaId ? { ...e, plan } : e);
    localStorage.setItem(ESCUELAS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  cambiarEstadoEscuela: (escuelaId: string, estado: EstadoEscuelaSaaS): EscuelaSaaS[] => {
    const escuelas = storageService.getEscuelas();
    const updated = escuelas.map(e => e.id === escuelaId ? { ...e, estado } : e);
    localStorage.setItem(ESCUELAS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  eliminarEscuela: (escuelaId: string): EscuelaSaaS[] => {
    const escuelas = storageService.getEscuelas();
    const updated = escuelas.filter(e => e.id !== escuelaId);
    localStorage.setItem(ESCUELAS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  // === MULTI-TENANT HELPERS (AISLAMIENTO DE DATOS POR ESCUELA) ===
  getTenantKey: (base: string, escuelaId: string = 'default') => {
    const cleanId = (escuelaId || 'default').replace(/[^a-zA-Z0-9_-]/g, '');
    return `eduportal_saas_${cleanId}_${base}`;
  },

  // === LIBROS (AISLADO POR ESCUELA) ===
  getLibros: (escuelaId: string = 'esc-101'): Libro[] => {
    try {
      const key = storageService.getTenantKey('libros', escuelaId);
      const data = localStorage.getItem(key);
      if (!data) {
        // Inicializar cada nueva escuela con el catálogo de libros oficiales SEP / NEM
        localStorage.setItem(key, JSON.stringify(LIBROS_INICIALES));
        return LIBROS_INICIALES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al leer libros de localStorage', e);
      return LIBROS_INICIALES;
    }
  },

  saveLibro: (libro: Libro, escuelaId: string = 'esc-101'): Libro[] => {
    const libros = storageService.getLibros(escuelaId);
    const index = libros.findIndex(l => l.id === libro.id);
    let updated: Libro[];
    if (index >= 0) {
      updated = [...libros];
      updated[index] = libro;
    } else {
      updated = [libro, ...libros];
    }
    const key = storageService.getTenantKey('libros', escuelaId);
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
  },

  deleteLibro: (id: string, escuelaId: string = 'esc-101'): Libro[] => {
    const libros = storageService.getLibros(escuelaId);
    const updated = libros.filter(l => l.id !== id);
    const key = storageService.getTenantKey('libros', escuelaId);
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
  },

  // === SOCIOS (AISLADO POR ESCUELA) ===
  getSocios: (escuelaId: string = 'esc-101'): Socio[] => {
    try {
      const key = storageService.getTenantKey('socios', escuelaId);
      const data = localStorage.getItem(key);
      if (!data) {
        localStorage.setItem(key, JSON.stringify(SOCIOS_INICIALES));
        return SOCIOS_INICIALES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al leer socios de localStorage', e);
      return SOCIOS_INICIALES;
    }
  },

  saveSocio: (socio: Socio, escuelaId: string = 'esc-101'): Socio[] => {
    const socios = storageService.getSocios(escuelaId);
    const index = socios.findIndex(s => s.id === socio.id);
    let updated: Socio[];
    if (index >= 0) {
      updated = [...socios];
      updated[index] = socio;
    } else {
      updated = [socio, ...socios];
    }
    const key = storageService.getTenantKey('socios', escuelaId);
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
  },

  deleteSocio: (id: string, escuelaId: string = 'esc-101'): Socio[] => {
    const socios = storageService.getSocios(escuelaId);
    const updated = socios.filter(s => s.id !== id);
    const key = storageService.getTenantKey('socios', escuelaId);
    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
  },

  // === PRÉSTAMOS (AISLADO POR ESCUELA) ===
  getPrestamos: (escuelaId: string = 'esc-101'): Prestamo[] => {
    try {
      const key = storageService.getTenantKey('prestamos', escuelaId);
      const data = localStorage.getItem(key);
      let prestamos: Prestamo[] = data ? JSON.parse(data) : PRESTAMOS_INICIALES;
      if (!data) {
        localStorage.setItem(key, JSON.stringify(PRESTAMOS_INICIALES));
      }

      const hoy = new Date().toISOString().split('T')[0];
      let huboCambios = false;

      prestamos = prestamos.map(p => {
        if (p.estado === 'activo' && p.fechaDevolucionEsperada < hoy) {
          const diffMs = new Date(hoy).getTime() - new Date(p.fechaDevolucionEsperada).getTime();
          const diasAtraso = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
          huboCambios = true;
          return {
            ...p,
            estado: 'vencido',
            diasAtraso
          };
        }
        return p;
      });

      if (huboCambios) {
        localStorage.setItem(key, JSON.stringify(prestamos));
      }

      return prestamos;
    } catch (e) {
      console.error('Error al leer préstamos de localStorage', e);
      return PRESTAMOS_INICIALES;
    }
  },

  createPrestamo: (
    nuevo: Omit<Prestamo, 'id' | 'codigoPrestamo'>, 
    escuelaId: string = 'esc-101'
  ): { prestamo: Prestamo; prestamos: Prestamo[]; libros: Libro[]; socios: Socio[] } => {
    const prestamos = storageService.getPrestamos(escuelaId);
    const libros = storageService.getLibros(escuelaId);
    const socios = storageService.getSocios(escuelaId);

    const id = `prest-${Date.now()}`;
    const codigoPrestamo = `PREST-${new Date().getFullYear()}-${String(prestamos.length + 1).padStart(3, '0')}`;
    const prestamoCompleto: Prestamo = {
      ...nuevo,
      id,
      codigoPrestamo
    };

    const prestamosActualizados = [prestamoCompleto, ...prestamos];
    localStorage.setItem(storageService.getTenantKey('prestamos', escuelaId), JSON.stringify(prestamosActualizados));

    const librosActualizados = libros.map(l => {
      if (l.id === nuevo.libroId) {
        return {
          ...l,
          ejemplaresDisponibles: Math.max(0, l.ejemplaresDisponibles - 1)
        };
      }
      return l;
    });
    localStorage.setItem(storageService.getTenantKey('libros', escuelaId), JSON.stringify(librosActualizados));

    const sociosActualizados = socios.map(s => {
      if (s.id === nuevo.socioId) {
        return {
          ...s,
          prestamosActivos: s.prestamosActivos + 1
        };
      }
      return s;
    });
    localStorage.setItem(storageService.getTenantKey('socios', escuelaId), JSON.stringify(sociosActualizados));

    return {
      prestamo: prestamoCompleto,
      prestamos: prestamosActualizados,
      libros: librosActualizados,
      socios: sociosActualizados
    };
  },

  devolverPrestamo: (
    prestamoId: string, 
    escuelaId: string = 'esc-101'
  ): { prestamos: Prestamo[]; libros: Libro[]; socios: Socio[] } => {
    const prestamos = storageService.getPrestamos(escuelaId);
    const libros = storageService.getLibros(escuelaId);
    const socios = storageService.getSocios(escuelaId);

    const target = prestamos.find(p => p.id === prestamoId);
    if (!target) return { prestamos, libros, socios };

    const hoy = new Date().toISOString().split('T')[0];

    const prestamosActualizados = prestamos.map(p => {
      if (p.id === prestamoId) {
        return {
          ...p,
          estado: 'devuelto' as const,
          fechaDevolucionReal: hoy
        };
      }
      return p;
    });
    localStorage.setItem(storageService.getTenantKey('prestamos', escuelaId), JSON.stringify(prestamosActualizados));

    const librosActualizados = libros.map(l => {
      if (l.id === target.libroId) {
        return {
          ...l,
          ejemplaresDisponibles: Math.min(l.ejemplaresTotales, l.ejemplaresDisponibles + 1)
        };
      }
      return l;
    });
    localStorage.setItem(storageService.getTenantKey('libros', escuelaId), JSON.stringify(librosActualizados));

    const sociosActualizados = socios.map(s => {
      if (s.id === target.socioId) {
        return {
          ...s,
          prestamosActivos: Math.max(0, s.prestamosActivos - 1)
        };
      }
      return s;
    });
    localStorage.setItem(storageService.getTenantKey('socios', escuelaId), JSON.stringify(sociosActualizados));

    return {
      prestamos: prestamosActualizados,
      libros: librosActualizados,
      socios: sociosActualizados
    };
  },

  // === COMPUTADORAS (AISLADO POR ESCUELA) ===
  getComputadoras: (escuelaId: string = 'esc-101'): Computadora[] => {
    try {
      const key = storageService.getTenantKey('pcs', escuelaId);
      const data = localStorage.getItem(key);
      if (!data) {
        localStorage.setItem(key, JSON.stringify(COMPUTADORAS_INICIALES));
        return COMPUTADORAS_INICIALES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al leer computadoras de localStorage', e);
      return COMPUTADORAS_INICIALES;
    }
  },

  asignarComputadora: (pcId: string, socioId: string, socioNombre: string, minutos: number = 60, escuelaId: string = 'esc-101'): Computadora[] => {
    const pcs = storageService.getComputadoras(escuelaId);
    const ahora = new Date();
    const hora = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;

    const updated = pcs.map(pc => {
      if (pc.id === pcId) {
        return {
          ...pc,
          estado: 'en_uso' as const,
          socioIdActual: socioId,
          socioNombreActual: socioNombre,
          horaInicioUso: hora,
          tiempoLimiteMinutos: minutos
        };
      }
      return pc;
    });
    localStorage.setItem(storageService.getTenantKey('pcs', escuelaId), JSON.stringify(updated));
    return updated;
  },

  liberarComputadora: (pcId: string, escuelaId: string = 'esc-101'): Computadora[] => {
    const pcs = storageService.getComputadoras(escuelaId);
    const updated = pcs.map(pc => {
      if (pc.id === pcId) {
        return {
          ...pc,
          estado: 'disponible' as const,
          socioIdActual: undefined,
          socioNombreActual: undefined,
          horaInicioUso: undefined,
          tiempoLimiteMinutos: undefined
        };
      }
      return pc;
    });
    localStorage.setItem(storageService.getTenantKey('pcs', escuelaId), JSON.stringify(updated));
    return updated;
  },

  cambiarEstadoPC: (pcId: string, estado: 'disponible' | 'en_uso' | 'mantenimiento', escuelaId: string = 'esc-101'): Computadora[] => {
    const pcs = storageService.getComputadoras(escuelaId);
    const updated = pcs.map(pc => {
      if (pc.id === pcId) {
        return {
          ...pc,
          estado,
          ...(estado !== 'en_uso' ? {
            socioIdActual: undefined,
            socioNombreActual: undefined,
            horaInicioUso: undefined
          } : {})
        };
      }
      return pc;
    });
    localStorage.setItem(storageService.getTenantKey('pcs', escuelaId), JSON.stringify(updated));
    return updated;
  },

  // === ESTADÍSTICAS POR ESCUELA ===
  getEstadisticas: (escuelaId: string = 'esc-101'): EstadisticasBiblioteca => {
    const libros = storageService.getLibros(escuelaId);
    const prestamos = storageService.getPrestamos(escuelaId);
    const socios = storageService.getSocios(escuelaId);
    const pcs = storageService.getComputadoras(escuelaId);

    const totalTitulos = libros.length;
    const totalEjemplares = libros.reduce((acc, l) => acc + l.ejemplaresTotales, 0);
    const ejemplaresDisponibles = libros.reduce((acc, l) => acc + l.ejemplaresDisponibles, 0);
    const prestamosActivos = prestamos.filter(p => p.estado === 'activo').length;
    const prestamosVencidos = prestamos.filter(p => p.estado === 'vencido').length;
    const totalSocios = socios.length;
    const pcsDisponibles = pcs.filter(pc => pc.estado === 'disponible').length;
    const totalPcs = pcs.length;

    return {
      totalTitulos,
      totalEjemplares,
      ejemplaresDisponibles,
      prestamosActivos,
      prestamosVencidos,
      totalSocios,
      pcsDisponibles,
      totalPcs
    };
  },

  // === MÉTRICAS GLOBALES DEL SAAS PARA EL SUPERADMIN ===
  getMetricasGlobalesSaaS: () => {
    const escuelas = storageService.getEscuelas();
    let totalLibrosGlobal = 0;
    let totalPrestamosGlobal = 0;
    let totalSociosGlobal = 0;

    escuelas.forEach(e => {
      const libros = storageService.getLibros(e.id);
      const prestamos = storageService.getPrestamos(e.id);
      const socios = storageService.getSocios(e.id);

      totalLibrosGlobal += libros.length;
      totalPrestamosGlobal += prestamos.length;
      totalSociosGlobal += socios.length;
    });

    const escuelasActivas = escuelas.filter(e => e.estado === 'activa').length;
    const escuelasPrueba = escuelas.filter(e => e.estado === 'prueba').length;
    const escuelasSuspendidas = escuelas.filter(e => e.estado === 'suspendida').length;

    return {
      totalEscuelas: escuelas.length,
      escuelasActivas,
      escuelasPrueba,
      escuelasSuspendidas,
      totalLibrosGlobal,
      totalPrestamosGlobal,
      totalSociosGlobal,
      escuelas
    };
  },

  // === EXPORTAR / IMPORTAR / RESTABLECER ===
  exportarJSON: (escuelaId: string = 'esc-101') => {
    const backup = {
      version: '2.0-saas',
      escuelaId,
      fechaExportacion: new Date().toISOString(),
      libros: storageService.getLibros(escuelaId),
      socios: storageService.getSocios(escuelaId),
      prestamos: storageService.getPrestamos(escuelaId),
      computadoras: storageService.getComputadoras(escuelaId)
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `respaldo_biblioteca_${escuelaId}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importarJSON: (jsonData: string, escuelaId: string = 'esc-101'): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed.libros) localStorage.setItem(storageService.getTenantKey('libros', escuelaId), JSON.stringify(parsed.libros));
      if (parsed.socios) localStorage.setItem(storageService.getTenantKey('socios', escuelaId), JSON.stringify(parsed.socios));
      if (parsed.prestamos) localStorage.setItem(storageService.getTenantKey('prestamos', escuelaId), JSON.stringify(parsed.prestamos));
      if (parsed.computadoras) localStorage.setItem(storageService.getTenantKey('pcs', escuelaId), JSON.stringify(parsed.computadoras));
      return true;
    } catch (e) {
      console.error('Error al importar JSON', e);
      return false;
    }
  },

  restablecerDatos: (escuelaId: string = 'esc-101') => {
    localStorage.setItem(storageService.getTenantKey('libros', escuelaId), JSON.stringify(LIBROS_INICIALES));
    localStorage.setItem(storageService.getTenantKey('socios', escuelaId), JSON.stringify(SOCIOS_INICIALES));
    localStorage.setItem(storageService.getTenantKey('prestamos', escuelaId), JSON.stringify(PRESTAMOS_INICIALES));
    localStorage.setItem(storageService.getTenantKey('pcs', escuelaId), JSON.stringify(COMPUTADORAS_INICIALES));
  },

  exportarCSVLibros: (escuelaId: string = 'esc-101') => {
    const libros = storageService.getLibros(escuelaId);
    const headers = ['Código', 'Título', 'Autor', 'Categoría', 'Nivel', 'Año', 'Formato', 'Total Ejemplares', 'Disponibles', 'Ubicación'];
    const rows = libros.map(l => [
      `"${l.codigo}"`,
      `"${l.titulo.replace(/"/g, '""')}"`,
      `"${l.autor.replace(/"/g, '""')}"`,
      `"${l.categoria}"`,
      `"${l.nivel}"`,
      l.anio,
      `"${l.formato}"`,
      l.ejemplaresTotales,
      l.ejemplaresDisponibles,
      `"${l.ubicacionEstante || ''}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inventario_libros_${escuelaId}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
};
