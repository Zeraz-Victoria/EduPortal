import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, TabId } from './components/Navbar';
import { CatalogoView } from './components/CatalogoView';
import { PrestamosView } from './components/PrestamosView';
import { ComputadorasView } from './components/ComputadorasView';
import { SociosView } from './components/SociosView';
import { KioscoView } from './components/KioscoView';
import { AsistenteIAView } from './components/AsistenteIAView';
import { ReportesView } from './components/ReportesView';
import { SuperAdminView } from './components/SuperAdminView';
import { AuthModal } from './components/AuthModal';
import { storageService } from './services/storageService';
import { authService } from './services/authService';
import { Libro, Prestamo, Socio, Computadora, EstadisticasBiblioteca, UsuarioSaaS, EscuelaSaaS } from './types';
import { CheckCircle, AlertCircle, X, ShieldAlert } from 'lucide-react';

interface BibliotecaAppProps {
  onBack: () => void;
}

export const BibliotecaApp: React.FC<BibliotecaAppProps> = ({ onBack }) => {
  const [tabActiva, setTabActiva] = useState<TabId>('catalogo');
  
  // Estado SaaS / Autenticación
  const [usuarioActivo, setUsuarioActivo] = useState<UsuarioSaaS | null>(null);
  const [escuelaActiva, setEscuelaActiva] = useState<EscuelaSaaS | null>(null);
  const [escuelas, setEscuelas] = useState<EscuelaSaaS[]>([]);
  const [modalAuthAbierto, setModalAuthAbierto] = useState(false);

  // Datos aislados por escuela
  const [libros, setLibros] = useState<Libro[]>([]);
  const [prestamos, setPrestamos] = useState<Prestamo[]>([]);
  const [socios, setSocios] = useState<Socio[]>([]);
  const [computadoras, setComputadoras] = useState<Computadora[]>([]);
  const [estadisticas, setEstadisticas] = useState<EstadisticasBiblioteca>({
    totalTitulos: 0,
    totalEjemplares: 0,
    ejemplaresDisponibles: 0,
    prestamosActivos: 0,
    prestamosVencidos: 0,
    totalSocios: 0,
    pcsDisponibles: 0,
    totalPcs: 0
  });

  const [toastMensaje, setToastMensaje] = useState<{ texto: string; tipo: 'exito' | 'error' } | null>(null);
  const [libroPrestarSel, setLibroPrestarSel] = useState<Libro | null>(null);

  const mostrarToast = (texto: string, tipo: 'exito' | 'error' = 'exito') => {
    setToastMensaje({ texto, tipo });
    setTimeout(() => {
      setToastMensaje(null);
    }, 3500);
  };

  // 1. Inicializar sesión o cargar escuela por defecto
  useEffect(() => {
    const sesion = authService.getSesion();
    const todasEscuelas = storageService.getEscuelas();
    setEscuelas(todasEscuelas);

    if (sesion) {
      setUsuarioActivo(sesion);
      const esc = todasEscuelas.find(e => e.id === sesion.institucionId) || todasEscuelas[0];
      setEscuelaActiva(esc);
    } else {
      // Cargar primera escuela como espacio predeterminado
      const esc = todasEscuelas[0] || null;
      setEscuelaActiva(esc);
      const defaultUser: UsuarioSaaS = {
        id: 'usr-demo-01',
        usuario: 'carlos.mendoza@escuela.edu.mx',
        email: 'carlos.mendoza@escuela.edu.mx',
        nombreCompleto: 'Prof. Carlos Mendoza',
        rol: 'director',
        institucionId: esc ? esc.id : 'esc-101',
        nombreEscuela: esc ? esc.nombre : 'Escuela Telesecundaria Cuauhtémoc',
        esSuperAdmin: false
      };
      setUsuarioActivo(defaultUser);
      authService.setSesion(defaultUser);
    }
  }, []);

  // 2. Cargar datos específicos del tenant activo
  const cargarDatosTenant = useCallback(() => {
    const escuelaId = escuelaActiva ? escuelaActiva.id : 'esc-101';
    const l = storageService.getLibros(escuelaId);
    const p = storageService.getPrestamos(escuelaId);
    const s = storageService.getSocios(escuelaId);
    const c = storageService.getComputadoras(escuelaId);
    const e = storageService.getEstadisticas(escuelaId);
    const todasEsc = storageService.getEscuelas();

    setLibros(l);
    setPrestamos(p);
    setSocios(s);
    setComputadoras(c);
    setEstadisticas(e);
    setEscuelas(todasEsc);
  }, [escuelaActiva]);

  useEffect(() => {
    cargarDatosTenant();
  }, [cargarDatosTenant]);

  const activeEscuelaId = escuelaActiva ? escuelaActiva.id : 'esc-101';

  // Manejadores de autenticación
  const handleLoginExitoso = (usuario: UsuarioSaaS) => {
    setUsuarioActivo(usuario);
    const todasEsc = storageService.getEscuelas();
    setEscuelas(todasEsc);

    if (usuario.esSuperAdmin || usuario.rol === 'superadmin') {
      setTabActiva('superadmin');
      mostrarToast(`Bienvenido al Portal SuperAdmin, ${usuario.nombreCompleto}`);
    } else {
      const esc = todasEsc.find(e => e.id === usuario.institucionId) || todasEsc[0];
      setEscuelaActiva(esc);
      setTabActiva('catalogo');
      mostrarToast(`Sesión iniciada con éxito en ${usuario.nombreEscuela}`);
    }
  };

  const handleCerrarSesion = () => {
    authService.cerrarSesion();
    setUsuarioActivo(null);
    mostrarToast('Has cerrado sesión correctamente.');
    setModalAuthAbierto(true);
  };

  // SuperAdmin: Switch Tenant (Administrar como escuela específica)
  const handleSeleccionarEscuelaDesdeSuperAdmin = (escuela: EscuelaSaaS) => {
    setEscuelaActiva(escuela);
    setTabActiva('catalogo');
    mostrarToast(`Espacio de trabajo cambiado a: ${escuela.nombre}`);
  };

  // Handlers CRUD aislados por escuela
  const handleGuardarLibro = (libro: Libro) => {
    const updated = storageService.saveLibro(libro, activeEscuelaId);
    setLibros(updated);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
    mostrarToast(`Libro "${libro.titulo}" guardado en el catálogo.`);
  };

  const handleEliminarLibro = (id: string) => {
    const updated = storageService.deleteLibro(id, activeEscuelaId);
    setLibros(updated);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
    mostrarToast('Libro retirado del catálogo.');
  };

  const handleIniciarPrestamoDesdeLibro = (libro: Libro) => {
    setLibroPrestarSel(libro);
    setTabActiva('prestamos');
  };

  const handleCrearPrestamo = (nuevo: Omit<Prestamo, 'id' | 'codigoPrestamo'>) => {
    const res = storageService.createPrestamo(nuevo, activeEscuelaId);
    setPrestamos(res.prestamos);
    setLibros(res.libros);
    setSocios(res.socios);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
    setLibroPrestarSel(null);
    mostrarToast(`¡Préstamo de "${nuevo.libroTitulo}" registrado con éxito!`);
  };

  const handleDevolverPrestamo = (prestamoId: string) => {
    const res = storageService.devolverPrestamo(prestamoId, activeEscuelaId);
    setPrestamos(res.prestamos);
    setLibros(res.libros);
    setSocios(res.socios);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
    mostrarToast('Devolución registrada correctamente. Ejemplar reincorporado al estante.');
  };

  const handleAsignarPC = (pcId: string, socioId: string, socioNombre: string, minutos: number = 60) => {
    const updated = storageService.asignarComputadora(pcId, socioId, socioNombre, minutos, activeEscuelaId);
    setComputadoras(updated);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
    mostrarToast(`Estación asignada a ${socioNombre}.`);
  };

  const handleLiberarPC = (pcId: string) => {
    const updated = storageService.liberarComputadora(pcId, activeEscuelaId);
    setComputadoras(updated);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
    mostrarToast('Estación de cómputo liberada.');
  };

  const handleCambiarEstadoPC = (pcId: string, estado: 'disponible' | 'en_uso' | 'mantenimiento') => {
    const updated = storageService.cambiarEstadoPC(pcId, estado, activeEscuelaId);
    setComputadoras(updated);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
  };

  const handleGuardarSocio = (socio: Socio) => {
    const updated = storageService.saveSocio(socio, activeEscuelaId);
    setSocios(updated);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
    mostrarToast(`Lector "${socio.nombre}" guardado.`);
  };

  const handleEliminarSocio = (id: string) => {
    const updated = storageService.deleteSocio(id, activeEscuelaId);
    setSocios(updated);
    setEstadisticas(storageService.getEstadisticas(activeEscuelaId));
    mostrarToast('Socio eliminado.');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-500 selection:text-white">
      
      {/* Barra de Navegación Principal */}
      <Navbar
        tabActiva={tabActiva}
        onCambiarTab={setTabActiva}
        estadisticas={estadisticas}
        onVolverPortal={onBack}
        usuarioActivo={usuarioActivo}
        escuelaActiva={escuelaActiva}
        onAbrirAuth={() => setModalAuthAbierto(true)}
        onCerrarSesion={handleCerrarSesion}
      />

      {/* Contenedor Principal de Vistas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {tabActiva === 'catalogo' && (
          <CatalogoView
            libros={libros}
            onGuardarLibro={handleGuardarLibro}
            onEliminarLibro={handleEliminarLibro}
            onIniciarPrestamo={handleIniciarPrestamoDesdeLibro}
          />
        )}

        {tabActiva === 'prestamos' && (
          <PrestamosView
            prestamos={prestamos}
            libros={libros}
            socios={socios}
            onCrearPrestamo={handleCrearPrestamo}
            onDevolverPrestamo={handleDevolverPrestamo}
            libroSeleccionadoParaPrestar={libroPrestarSel}
            onLimpiarSeleccionLibro={() => setLibroPrestarSel(null)}
          />
        )}

        {tabActiva === 'computadoras' && (
          <ComputadorasView
            computadoras={computadoras}
            socios={socios}
            onAsignarPC={handleAsignarPC}
            onLiberarPC={handleLiberarPC}
            onCambiarEstadoPC={handleCambiarEstadoPC}
          />
        )}

        {tabActiva === 'socios' && (
          <SociosView
            socios={socios}
            onGuardarSocio={handleGuardarSocio}
            onEliminarSocio={handleEliminarSocio}
          />
        )}

        {tabActiva === 'kiosco' && (
          <KioscoView
            libros={libros}
            prestamos={prestamos}
            socios={socios}
            computadoras={computadoras}
            onVolverAdmin={() => setTabActiva('catalogo')}
            onAsignarPC={handleAsignarPC}
          />
        )}

        {tabActiva === 'ia' && (
          <AsistenteIAView
            catalogo={libros}
            onIniciarPrestamo={handleIniciarPrestamoDesdeLibro}
          />
        )}

        {tabActiva === 'reportes' && (
          <ReportesView
            estadisticas={estadisticas}
            libros={libros}
            prestamos={prestamos}
            onRecargarTodo={cargarDatosTenant}
          />
        )}

        {tabActiva === 'superadmin' && (
          <SuperAdminView
            escuelas={escuelas}
            onActualizarEscuelas={cargarDatosTenant}
            onSeleccionarEscuela={handleSeleccionarEscuelaDesdeSuperAdmin}
          />
        )}

      </main>

      {/* Modal de Autenticación / Registro / SuperAdmin */}
      <AuthModal
        abierto={modalAuthAbierto}
        onCerrar={() => setModalAuthAbierto(false)}
        onLoginExitoso={handleLoginExitoso}
      />

      {/* Floating Toast Notification */}
      {toastMensaje && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-800 text-xs font-bold animate-in slide-in-from-bottom-5">
          {toastMensaje.tipo === 'exito' ? (
            <CheckCircle className="text-emerald-400" size={16} />
          ) : (
            <AlertCircle className="text-rose-400" size={16} />
          )}
          <span>{toastMensaje.texto}</span>
          <button 
            onClick={() => setToastMensaje(null)} 
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      )}

    </div>
  );
};

export default BibliotecaApp;
