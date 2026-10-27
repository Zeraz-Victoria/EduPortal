import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, TabId } from './components/Navbar';
import { CatalogoView } from './components/CatalogoView';
import { PrestamosView } from './components/PrestamosView';
import { ComputadorasView } from './components/ComputadorasView';
import { SociosView } from './components/SociosView';
import { KioscoView } from './components/KioscoView';
import { AsistenteIAView } from './components/AsistenteIAView';
import { ReportesView } from './components/ReportesView';
import { storageService } from './services/storageService';
import { Libro, Prestamo, Socio, Computadora, EstadisticasBiblioteca } from './types';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface BibliotecaAppProps {
  onBack: () => void;
}

export const BibliotecaApp: React.FC<BibliotecaAppProps> = ({ onBack }) => {
  const [tabActiva, setTabActiva] = useState<TabId>('catalogo');
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

  const cargarDatos = useCallback(() => {
    const l = storageService.getLibros();
    const p = storageService.getPrestamos();
    const s = storageService.getSocios();
    const c = storageService.getComputadoras();
    const e = storageService.getEstadisticas();

    setLibros(l);
    setPrestamos(p);
    setSocios(s);
    setComputadoras(c);
    setEstadisticas(e);
  }, []);

  useEffect(() => {
    cargarDatos();
  }, [cargarDatos]);

  // Handlers
  const handleGuardarLibro = (libro: Libro) => {
    const updated = storageService.saveLibro(libro);
    setLibros(updated);
    setEstadisticas(storageService.getEstadisticas());
    mostrarToast(`Libro "${libro.titulo}" guardado en el catálogo.`);
  };

  const handleEliminarLibro = (id: string) => {
    const updated = storageService.deleteLibro(id);
    setLibros(updated);
    setEstadisticas(storageService.getEstadisticas());
    mostrarToast('Libro retirado del catálogo.');
  };

  const handleIniciarPrestamoDesdeLibro = (libro: Libro) => {
    setLibroPrestarSel(libro);
    setTabActiva('prestamos');
  };

  const handleCrearPrestamo = (nuevo: Omit<Prestamo, 'id' | 'codigoPrestamo'>) => {
    const res = storageService.createPrestamo(nuevo);
    setPrestamos(res.prestamos);
    setLibros(res.libros);
    setSocios(res.socios);
    setEstadisticas(storageService.getEstadisticas());
    setLibroPrestarSel(null);
    mostrarToast(`¡Préstamo de "${nuevo.libroTitulo}" registrado con éxito!`);
  };

  const handleDevolverPrestamo = (prestamoId: string) => {
    const res = storageService.devolverPrestamo(prestamoId);
    setPrestamos(res.prestamos);
    setLibros(res.libros);
    setSocios(res.socios);
    setEstadisticas(storageService.getEstadisticas());
    mostrarToast('Devolución registrada correctamente. Ejemplar reincorporado al estante.');
  };

  const handleAsignarPC = (pcId: string, socioId: string, socioNombre: string, minutos: number = 60) => {
    const updated = storageService.asignarComputadora(pcId, socioId, socioNombre, minutos);
    setComputadoras(updated);
    setEstadisticas(storageService.getEstadisticas());
    mostrarToast(`Estación asignada a ${socioNombre}.`);
  };

  const handleLiberarPC = (pcId: string) => {
    const updated = storageService.liberarComputadora(pcId);
    setComputadoras(updated);
    setEstadisticas(storageService.getEstadisticas());
    mostrarToast('Estación de cómputo liberada.');
  };

  const handleCambiarEstadoPC = (pcId: string, estado: 'disponible' | 'en_uso' | 'mantenimiento') => {
    const updated = storageService.cambiarEstadoPC(pcId, estado);
    setComputadoras(updated);
    setEstadisticas(storageService.getEstadisticas());
  };

  const handleGuardarSocio = (socio: Socio) => {
    const updated = storageService.saveSocio(socio);
    setSocios(updated);
    setEstadisticas(storageService.getEstadisticas());
    mostrarToast(`Lector "${socio.nombre}" guardado.`);
  };

  const handleEliminarSocio = (id: string) => {
    const updated = storageService.deleteSocio(id);
    setSocios(updated);
    setEstadisticas(storageService.getEstadisticas());
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
            onRecargarTodo={cargarDatos}
          />
        )}

      </main>

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
