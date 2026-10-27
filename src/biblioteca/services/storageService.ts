import { Libro, Socio, Prestamo, Computadora, EstadisticasBiblioteca } from '../types';
import { LIBROS_INICIALES, SOCIOS_INICIALES, PRESTAMOS_INICIALES, COMPUTADORAS_INICIALES } from '../constants';

const STORAGE_KEYS = {
  LIBROS: 'eduportal_biblioteca_libros_v1',
  SOCIOS: 'eduportal_biblioteca_socios_v1',
  PRESTAMOS: 'eduportal_biblioteca_prestamos_v1',
  PCS: 'eduportal_biblioteca_pcs_v1'
};

export const storageService = {
  // === LIBROS ===
  getLibros: (): Libro[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LIBROS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.LIBROS, JSON.stringify(LIBROS_INICIALES));
        return LIBROS_INICIALES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al leer libros de localStorage', e);
      return LIBROS_INICIALES;
    }
  },

  saveLibro: (libro: Libro): Libro[] => {
    const libros = storageService.getLibros();
    const index = libros.findIndex(l => l.id === libro.id);
    let updated: Libro[];
    if (index >= 0) {
      updated = [...libros];
      updated[index] = libro;
    } else {
      updated = [libro, ...libros];
    }
    localStorage.setItem(STORAGE_KEYS.LIBROS, JSON.stringify(updated));
    return updated;
  },

  deleteLibro: (id: string): Libro[] => {
    const libros = storageService.getLibros();
    const updated = libros.filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEYS.LIBROS, JSON.stringify(updated));
    return updated;
  },

  // === SOCIOS ===
  getSocios: (): Socio[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SOCIOS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.SOCIOS, JSON.stringify(SOCIOS_INICIALES));
        return SOCIOS_INICIALES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al leer socios de localStorage', e);
      return SOCIOS_INICIALES;
    }
  },

  saveSocio: (socio: Socio): Socio[] => {
    const socios = storageService.getSocios();
    const index = socios.findIndex(s => s.id === socio.id);
    let updated: Socio[];
    if (index >= 0) {
      updated = [...socios];
      updated[index] = socio;
    } else {
      updated = [socio, ...socios];
    }
    localStorage.setItem(STORAGE_KEYS.SOCIOS, JSON.stringify(updated));
    return updated;
  },

  deleteSocio: (id: string): Socio[] => {
    const socios = storageService.getSocios();
    const updated = socios.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEYS.SOCIOS, JSON.stringify(updated));
    return updated;
  },

  // === PRÉSTAMOS ===
  getPrestamos: (): Prestamo[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PRESTAMOS);
      let prestamos: Prestamo[] = data ? JSON.parse(data) : PRESTAMOS_INICIALES;
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.PRESTAMOS, JSON.stringify(PRESTAMOS_INICIALES));
      }

      // Actualizar automáticamente estados vencidos
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
        localStorage.setItem(STORAGE_KEYS.PRESTAMOS, JSON.stringify(prestamos));
      }

      return prestamos;
    } catch (e) {
      console.error('Error al leer préstamos de localStorage', e);
      return PRESTAMOS_INICIALES;
    }
  },

  createPrestamo: (nuevo: Omit<Prestamo, 'id' | 'codigoPrestamo'>): { prestamo: Prestamo; prestamos: Prestamo[]; libros: Libro[]; socios: Socio[] } => {
    const prestamos = storageService.getPrestamos();
    const libros = storageService.getLibros();
    const socios = storageService.getSocios();

    const id = `prest-${Date.now()}`;
    const codigoPrestamo = `PREST-${new Date().getFullYear()}-${String(prestamos.length + 1).padStart(3, '0')}`;
    const prestamoCompleto: Prestamo = {
      ...nuevo,
      id,
      codigoPrestamo
    };

    const prestamosActualizados = [prestamoCompleto, ...prestamos];
    localStorage.setItem(STORAGE_KEYS.PRESTAMOS, JSON.stringify(prestamosActualizados));

    // Decrementar ejemplares disponibles del libro
    const librosActualizados = libros.map(l => {
      if (l.id === nuevo.libroId) {
        return {
          ...l,
          ejemplaresDisponibles: Math.max(0, l.ejemplaresDisponibles - 1)
        };
      }
      return l;
    });
    localStorage.setItem(STORAGE_KEYS.LIBROS, JSON.stringify(librosActualizados));

    // Incrementar prestamosActivos del socio
    const sociosActualizados = socios.map(s => {
      if (s.id === nuevo.socioId) {
        return {
          ...s,
          prestamosActivos: s.prestamosActivos + 1
        };
      }
      return s;
    });
    localStorage.setItem(STORAGE_KEYS.SOCIOS, JSON.stringify(sociosActualizados));

    return {
      prestamo: prestamoCompleto,
      prestamos: prestamosActualizados,
      libros: librosActualizados,
      socios: sociosActualizados
    };
  },

  devolverPrestamo: (prestamoId: string): { prestamos: Prestamo[]; libros: Libro[]; socios: Socio[] } => {
    const prestamos = storageService.getPrestamos();
    const libros = storageService.getLibros();
    const socios = storageService.getSocios();

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
    localStorage.setItem(STORAGE_KEYS.PRESTAMOS, JSON.stringify(prestamosActualizados));

    // Reintegrar ejemplar disponible
    const librosActualizados = libros.map(l => {
      if (l.id === target.libroId) {
        return {
          ...l,
          ejemplaresDisponibles: Math.min(l.ejemplaresTotales, l.ejemplaresDisponibles + 1)
        };
      }
      return l;
    });
    localStorage.setItem(STORAGE_KEYS.LIBROS, JSON.stringify(librosActualizados));

    // Reducir prestamosActivos del socio
    const sociosActualizados = socios.map(s => {
      if (s.id === target.socioId) {
        return {
          ...s,
          prestamosActivos: Math.max(0, s.prestamosActivos - 1)
        };
      }
      return s;
    });
    localStorage.setItem(STORAGE_KEYS.SOCIOS, JSON.stringify(sociosActualizados));

    return {
      prestamos: prestamosActualizados,
      libros: librosActualizados,
      socios: sociosActualizados
    };
  },

  // === COMPUTADORAS ===
  getComputadoras: (): Computadora[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PCS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.PCS, JSON.stringify(COMPUTADORAS_INICIALES));
        return COMPUTADORAS_INICIALES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al leer computadoras de localStorage', e);
      return COMPUTADORAS_INICIALES;
    }
  },

  asignarComputadora: (pcId: string, socioId: string, socioNombre: string, minutos: number = 60): Computadora[] => {
    const pcs = storageService.getComputadoras();
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
    localStorage.setItem(STORAGE_KEYS.PCS, JSON.stringify(updated));
    return updated;
  },

  liberarComputadora: (pcId: string): Computadora[] => {
    const pcs = storageService.getComputadoras();
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
    localStorage.setItem(STORAGE_KEYS.PCS, JSON.stringify(updated));
    return updated;
  },

  cambiarEstadoPC: (pcId: string, estado: 'disponible' | 'en_uso' | 'mantenimiento'): Computadora[] => {
    const pcs = storageService.getComputadoras();
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
    localStorage.setItem(STORAGE_KEYS.PCS, JSON.stringify(updated));
    return updated;
  },

  // === ESTADÍSTICAS ===
  getEstadisticas: (): EstadisticasBiblioteca => {
    const libros = storageService.getLibros();
    const prestamos = storageService.getPrestamos();
    const socios = storageService.getSocios();
    const pcs = storageService.getComputadoras();

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

  // === EXPORTAR / IMPORTAR / RESTABLECER ===
  exportarJSON: () => {
    const backup = {
      version: '1.0',
      fechaExportacion: new Date().toISOString(),
      libros: storageService.getLibros(),
      socios: storageService.getSocios(),
      prestamos: storageService.getPrestamos(),
      computadoras: storageService.getComputadoras()
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `respaldo_biblioteca_cloud_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importarJSON: (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed.libros) localStorage.setItem(STORAGE_KEYS.LIBROS, JSON.stringify(parsed.libros));
      if (parsed.socios) localStorage.setItem(STORAGE_KEYS.SOCIOS, JSON.stringify(parsed.socios));
      if (parsed.prestamos) localStorage.setItem(STORAGE_KEYS.PRESTAMOS, JSON.stringify(parsed.prestamos));
      if (parsed.computadoras) localStorage.setItem(STORAGE_KEYS.PCS, JSON.stringify(parsed.computadoras));
      return true;
    } catch (e) {
      console.error('Error al importar JSON', e);
      return false;
    }
  },

  restablecerDatos: () => {
    localStorage.setItem(STORAGE_KEYS.LIBROS, JSON.stringify(LIBROS_INICIALES));
    localStorage.setItem(STORAGE_KEYS.SOCIOS, JSON.stringify(SOCIOS_INICIALES));
    localStorage.setItem(STORAGE_KEYS.PRESTAMOS, JSON.stringify(PRESTAMOS_INICIALES));
    localStorage.setItem(STORAGE_KEYS.PCS, JSON.stringify(COMPUTADORAS_INICIALES));
  },

  exportarCSVLibros: () => {
    const libros = storageService.getLibros();
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
    a.download = `inventario_libros_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
};
