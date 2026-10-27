import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  Monitor, 
  User, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  RotateCcw, 
  CreditCard, 
  Laptop, 
  Maximize2, 
  Minimize2, 
  ArrowLeft, 
  ScanLine, 
  Loader2, 
  X,
  Radio,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Libro, Prestamo, Computadora, Socio, EscuelaSaaS } from '../types';
import { storageService } from '../services/storageService';
import { authService } from '../services/authService';
import { chipService, reproducirSonido } from '../services/chipService';

interface KioscoStandaloneAppProps {
  onSalir?: () => void;
  escuelaIdInicial?: string;
}

export const KioscoStandaloneApp: React.FC<KioscoStandaloneAppProps> = ({
  onSalir,
  escuelaIdInicial
}) => {
  // 1. Escuela Activa
  const [escuelas, setEscuelas] = useState<EscuelaSaaS[]>([]);
  const [escuelaActiva, setEscuelaActiva] = useState<EscuelaSaaS | null>(null);

  // 2. Datos aislados de la escuela
  const [libros, setLibros] = useState<Libro[]>([]);
  const [prestamos, setPrestamos] = useState<Prestamo[]>([]);
  const [computadoras, setComputadoras] = useState<Computadora[]>([]);
  const [socios, setSocios] = useState<Socio[]>([]);

  // 3. Navegación estilo Apple Segmented Control
  const [pestana, setPestana] = useState<'catalogo' | 'computo' | 'mis_prestamos'>('catalogo');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState('');
  const [esPantallaCompleta, setEsPantallaCompleta] = useState(false);
  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }));

  // 4. Modales de confirmación con Chip (Apple Pay style)
  const [modalPrestarLibro, setModalPrestarLibro] = useState<Libro | null>(null);
  const [modalReservarPC, setModalReservarPC] = useState<Computadora | null>(null);
  const [modalLiberarPC, setModalLiberarPC] = useState<Computadora | null>(null);

  // 5. Escaneo y vinculación de tarjetas USB / NFC
  const [cargandoChip, setCargandoChip] = useState(false);
  const [toastNotificacion, setToastNotificacion] = useState<{ texto: string; tipo: 'exito' | 'error' | 'info' } | null>(null);
  const [alumnoIdentificado, setAlumnoIdentificado] = useState<Socio | null>(null);
  const [prestamoExitosoInfo, setPrestamoExitosoInfo] = useState<{ libro: string; fechaDev: string; alumno: string } | null>(null);

  const [modalScanInput, setModalScanInput] = useState('');
  const [chipNoRegistrado, setChipNoRegistrado] = useState<string | null>(null);
  const [socioParaVincularId, setSocioParaVincularId] = useState<string>('');
  const modalInputRef = useRef<HTMLInputElement>(null);

  const activeEscuelaId = escuelaActiva?.id || escuelaIdInicial || 'esc-101';

  // Reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setHoraActual(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Autofocus en el campo del escáner al abrir cualquier modal
  useEffect(() => {
    if (modalPrestarLibro || modalReservarPC || modalLiberarPC) {
      setChipNoRegistrado(null);
      setModalScanInput('');
      setSocioParaVincularId('');
      const t = setTimeout(() => {
        modalInputRef.current?.focus();
      }, 70);
      return () => clearTimeout(t);
    }
  }, [modalPrestarLibro, modalReservarPC, modalLiberarPC]);

  // Cargar datos y sincronizar escuela
  const cargarDatos = () => {
    const todas = storageService.getEscuelas();
    setEscuelas(todas);

    const sesion = authService.getSesion();
    const targetId = escuelaIdInicial || sesion?.institucionId || todas[0]?.id || 'esc-101';
    const esc = todas.find(e => e.id === targetId) || todas[0] || null;
    setEscuelaActiva(esc);

    const eid = esc?.id || targetId;
    setLibros(storageService.getLibros(eid));
    setPrestamos(storageService.getPrestamos(eid));
    setComputadoras(storageService.getComputadoras(eid));
    setSocios(storageService.getSocios(eid));
  };

  useEffect(() => {
    cargarDatos();
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && e.key.startsWith('eduportal_biblioteca')) {
        cargarDatos();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [escuelaIdInicial]);

  // Toast temporal estilo Apple Capsule
  const mostrarToast = (texto: string, tipo: 'exito' | 'error' | 'info' = 'info') => {
    setToastNotificacion({ texto, tipo });
    setTimeout(() => {
      setToastNotificacion(null);
    }, 4500);
  };

  // Pantalla Completa
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setEsPantallaCompleta(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setEsPantallaCompleta(false)).catch(() => {});
    }
  };

  // -------------------------------------------------------------
  // PROCESAMIENTO CENTRAL DE CHIP NFC / RFID
  // -------------------------------------------------------------
  const procesarChip = async (rawUid: string) => {
    const clean = rawUid.trim();
    if (!clean) return;
    setCargandoChip(true);

    try {
      const res = await chipService.identificarChip(clean, activeEscuelaId);
      
      if (!res.encontrado || !res.socio) {
        reproducirSonido('error');
        const detectedUid = res.cleanUid || clean;
        setChipNoRegistrado(detectedUid);
        mostrarToast(`Tarjeta detectada (UID: ${detectedUid}). Por favor selecciónate en la lista para asociarla.`, 'info');
        return;
      }

      setChipNoRegistrado(null);
      const alumno = res.socio;
      setAlumnoIdentificado(alumno);

      // CASO A: Préstamo de Libro
      if (modalPrestarLibro) {
        const fechaHoy = new Date();
        const fechaDev = new Date();
        fechaDev.setDate(fechaHoy.getDate() + 7);
        const fechaDevStr = fechaDev.toISOString().split('T')[0];

        const nuevoPrestamo = {
          libroId: modalPrestarLibro.id,
          libroTitulo: modalPrestarLibro.titulo,
          socioId: alumno.id,
          socioNombre: alumno.nombre,
          socioMatricula: alumno.matricula,
          socioRol: alumno.rol,
          fechaPrestamo: fechaHoy.toISOString().split('T')[0],
          fechaDevolucionEsperada: fechaDevStr,
          estado: 'activo' as const,
          notas: 'Préstamo autoservicio Kiosco con Chip NFC'
        };

        const resPrestamo = storageService.createPrestamo(nuevoPrestamo, activeEscuelaId);
        setPrestamos(resPrestamo.prestamos);
        setLibros(resPrestamo.libros);
        setSocios(resPrestamo.socios);

        reproducirSonido('exito');
        setPrestamoExitosoInfo({
          libro: modalPrestarLibro.titulo,
          fechaDev: fechaDevStr,
          alumno: alumno.nombre
        });
        setModalPrestarLibro(null);
        setModalScanInput('');
        return;
      }

      // CASO B: Reservar Computadora
      if (modalReservarPC) {
        const updated = storageService.asignarComputadora(
          modalReservarPC.id, 
          alumno.id, 
          alumno.nombre, 
          60, 
          activeEscuelaId
        );
        setComputadoras(updated);
        reproducirSonido('asignar');
        mostrarToast(`¡${modalReservarPC.nombre} asignada a ${alumno.nombre} por 60 min!`, 'exito');
        setModalReservarPC(null);
        setModalScanInput('');
        return;
      }

      // CASO C: Liberar Computadora
      if (modalLiberarPC) {
        const updated = storageService.liberarComputadora(modalLiberarPC.id, activeEscuelaId);
        setComputadoras(updated);
        reproducirSonido('devolver');
        mostrarToast(`¡${modalLiberarPC.nombre} liberada exitosamente!`, 'exito');
        setModalLiberarPC(null);
        setModalScanInput('');
        return;
      }

      // CASO D: Pase de tarjeta en pantalla principal -> abre Mis Préstamos
      setPestana('mis_prestamos');
      reproducirSonido('exito');
      mostrarToast(`¡Hola, ${alumno.nombre.split(' ')[0]}! Aquí están tus préstamos vigentes.`, 'exito');

    } catch (e: any) {
      reproducirSonido('error');
      mostrarToast('Error al procesar tarjeta.', 'error');
    } finally {
      setCargandoChip(false);
    }
  };

  // Vinculación instantánea de una tarjeta detectada a un alumno
  const handleVincularChipYContinuar = (uid: string, socioId: string) => {
    if (!uid || !socioId) return;
    const actualizado = chipService.asignarChipASocio(socioId, uid, activeEscuelaId);
    if (actualizado) {
      cargarDatos();
      setChipNoRegistrado(null);
      setModalScanInput('');
      procesarChip(uid);
    }
  };

  // Listener global para lectores USB de tarjetas (teclado HID)
  useEffect(() => {
    let buffer = '';
    let ultimoTiempo = Date.now();
    let debounceTimer: any = null;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Si el foco ya está en el input enfocado del modal o en la barra de búsqueda, respetar su flujo
      if (e.target === modalInputRef.current) {
        return;
      }
      if (e.target instanceof HTMLInputElement && e.target.id === 'apple-kiosco-search') {
        return;
      }

      const ahora = Date.now();
      const delta = ahora - ultimoTiempo;
      ultimoTiempo = ahora;

      if (e.key === 'Enter') {
        if (buffer.length >= 3) {
          e.preventDefault();
          const code = buffer;
          buffer = '';
          procesarChip(code);
        }
        buffer = '';
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (delta > 800 && buffer.length > 0) {
          buffer = '';
        }
        buffer += e.key;

        // Auto-detección para lectores USB que no envían Enter al final
        clearTimeout(debounceTimer);
        if (buffer.length >= 7) {
          debounceTimer = setTimeout(() => {
            if (buffer.length >= 7) {
              const code = buffer;
              buffer = '';
              procesarChip(code);
            }
          }, 260);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Soporte Web NFC
    let stopNfc = () => {};
    chipService.iniciarLecturaWebNFC((uid) => procesarChip(uid)).then(fn => { stopNfc = fn; });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(debounceTimer);
      stopNfc();
    };
  }, [activeEscuelaId, modalPrestarLibro, modalReservarPC, modalLiberarPC, socios]);

  // Devolución directa de libro
  const handleDevolverLibroDirecto = (prestamoId: string) => {
    reproducirSonido('devolver');
    const res = storageService.devolverPrestamo(prestamoId, activeEscuelaId);
    setPrestamos(res.prestamos);
    setLibros(res.libros);
    setSocios(res.socios);
    mostrarToast('¡Libro devuelto con éxito! Se reincorporó al catálogo.', 'exito');
  };

  // Filtrado de catálogo
  const librosFiltrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return libros.filter(l => {
      if (categoriaFiltro !== 'todos' && l.categoria !== categoriaFiltro) {
        return false;
      }
      if (!q) return true;
      const matchTitulo = l.titulo.toLowerCase().includes(q);
      const matchAutor = l.autor.toLowerCase().includes(q);
      const matchEditorial = l.editorial ? l.editorial.toLowerCase().includes(q) : false;
      const matchCodigo = l.codigo.toLowerCase().includes(q);
      const matchDescripcion = l.descripcion.toLowerCase().includes(q);
      return matchTitulo || matchAutor || matchEditorial || matchCodigo || matchDescripcion;
    });
  }, [libros, busqueda, categoriaFiltro]);

  const categorias = [
    'todos',
    'Libros de Texto SEP / NEM',
    'Ficción y Novela',
    'Ciencia y Tecnología',
    'Historia y Geografía',
    'Lenguajes y Literatura'
  ];

  const librosDelAlumno = useMemo(() => {
    if (!alumnoIdentificado) return [];
    return prestamos.filter(p => p.socioId === alumnoIdentificado.id && p.estado !== 'devuelto');
  }, [prestamos, alumnoIdentificado]);

  return (
    <div className="min-h-screen bg-[#070709] text-[#F5F5F7] font-sans antialiased selection:bg-teal-500 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      
      {/* Luz ambiental sutil (Apple Ambient Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-teal-500/10 via-emerald-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* 1. BARRA SUPERIOR APPLE GLASSMORPHISM */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#070709]/75 border-b border-white/[0.08] px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Apple Squircle & Título */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-white/[0.12] to-white/[0.02] border border-white/[0.15] flex items-center justify-center text-teal-400 shadow-md">
              <Sparkles size={20} className="stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                  Kiosco<span className="text-teal-400 font-normal">Escolar</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sensor Listo
                </span>
              </div>
              <p className="text-[11px] text-white/40 font-medium truncate max-w-[200px] sm:max-w-xs mt-0.5">
                {escuelaActiva ? escuelaActiva.nombre : 'Biblioteca Cloud'}
              </p>
            </div>
          </div>

          {/* Selector Central: Apple Segmented Pill Control */}
          <nav className="flex items-center p-1 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl shadow-inner">
            <button
              onClick={() => setPestana('catalogo')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                pestana === 'catalogo'
                  ? 'bg-white text-black shadow-sm scale-[1.02]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <BookOpen size={14} />
              <span>Libros</span>
            </button>

            <button
              onClick={() => setPestana('computo')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                pestana === 'computo'
                  ? 'bg-white text-black shadow-sm scale-[1.02]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Laptop size={14} />
              <span>Cómputo</span>
            </button>

            <button
              onClick={() => setPestana('mis_prestamos')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                pestana === 'mis_prestamos'
                  ? 'bg-white text-black shadow-sm scale-[1.02]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <User size={14} />
              <span>Mis Préstamos</span>
              {librosDelAlumno.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-teal-500 text-black text-[10px] font-black flex items-center justify-center">
                  {librosDelAlumno.length}
                </span>
              )}
            </button>
          </nav>

          {/* Herramientas de Ventana */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/60">
              <Clock size={13} />
              <span>{horaActual}</span>
            </div>

            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-white/70 hover:text-white transition-colors"
              title={esPantallaCompleta ? 'Salir de pantalla completa' : 'Pantalla Completa'}
            >
              {esPantallaCompleta ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>

            {onSalir && (
              <button
                onClick={onSalir}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-medium text-white/80 hover:text-white transition-all"
              >
                <ArrowLeft size={13} />
                <span className="hidden sm:inline">Cerrar Kiosco</span>
              </button>
            )}
          </div>

        </div>
      </header>

      {/* Dynamic Toast estilo Apple Capsule */}
      {toastNotificacion && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-4 duration-200">
          <div className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2.5 backdrop-blur-2xl border shadow-2xl ${
            toastNotificacion.tipo === 'exito'
              ? 'bg-[#1C2C24]/90 text-emerald-300 border-emerald-500/30'
              : toastNotificacion.tipo === 'error'
              ? 'bg-[#2C1C1C]/90 text-rose-300 border-rose-500/30'
              : 'bg-[#1C1C1E]/90 text-white/90 border-white/20'
          }`}>
            {toastNotificacion.tipo === 'exito' ? <CheckCircle2 size={15} className="text-emerald-400" /> : <AlertCircle size={15} className="text-amber-400" />}
            <span>{toastNotificacion.texto}</span>
          </div>
        </div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex-1 w-full">

        {/* ------------------------------------------------------------- */}
        {/* PESTAÑA A: CATÁLOGO DE LIBROS */}
        {/* ------------------------------------------------------------- */}
        {pestana === 'catalogo' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Barra de Búsqueda Apple Search Capsule */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  id="apple-kiosco-search"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar por título, autor, materia o código..."
                  className="w-full pl-11 pr-10 py-3.5 rounded-full bg-white/[0.05] border border-white/[0.1] focus:border-teal-400/80 focus:bg-white/[0.08] text-sm text-white placeholder:text-white/40 backdrop-blur-xl transition-all outline-none shadow-sm"
                />
                {busqueda && (
                  <button 
                    onClick={() => setBusqueda('')} 
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-1"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Cápsulas de Categorías estilo Apple Music */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
                {categorias.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaFiltro(cat)}
                    className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap ${
                      categoriaFiltro === cat
                        ? 'bg-white text-black font-semibold shadow-sm scale-[1.02]'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] text-white/60 border border-white/[0.06]'
                    }`}
                  >
                    {cat === 'todos' ? 'Todos' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Libros Apple Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {librosFiltrados.map((libro) => {
                const disponible = libro.ejemplaresDisponibles > 0;

                return (
                  <div
                    key={libro.id}
                    className="group rounded-3xl p-6 bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-200 flex flex-col justify-between shadow-xl relative overflow-hidden"
                  >
                    <div className="space-y-3">
                      
                      {/* Metadatos superiores */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/[0.05] text-white/60 border border-white/[0.08] truncate max-w-[60%]">
                          {libro.categoria}
                        </span>
                        
                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                          disponible 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${disponible ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                          {disponible ? `${libro.ejemplaresDisponibles} disponible${libro.ejemplaresDisponibles > 1 ? 's' : ''}` : 'Agotado'}
                        </span>
                      </div>

                      {/* Título & Autor */}
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                          {libro.titulo}
                        </h3>
                        <p className="text-xs text-white/50 font-medium mt-1">
                          {libro.autor} {libro.editorial ? `· ${libro.editorial}` : ''}
                        </p>
                      </div>

                      {/* Sinopsis */}
                      <p className="text-xs text-white/40 line-clamp-2 leading-relaxed">
                        {libro.descripcion}
                      </p>

                      {/* Ubicación y Código */}
                      <div className="pt-2 flex items-center justify-between text-[11px] text-white/30 font-mono">
                        <span>Código: {libro.codigo}</span>
                        <span className="text-white/60">{libro.ubicacionEstante || 'Estante Principal'}</span>
                      </div>

                    </div>

                    {/* Botón Acción Apple Pill */}
                    <div className="pt-5 mt-4 border-t border-white/[0.06]">
                      {disponible ? (
                        <button
                          onClick={() => {
                            setModalPrestarLibro(libro);
                            setChipNoRegistrado(null);
                          }}
                          className="w-full py-2.5 rounded-full bg-white hover:bg-teal-400 text-black font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2 group-hover:scale-[1.01]"
                        >
                          <Zap size={14} className="fill-black stroke-black" />
                          <span>Pedir con mi Tarjeta</span>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full py-2.5 rounded-full bg-white/[0.04] text-white/30 font-medium text-xs border border-white/[0.06] cursor-not-allowed"
                        >
                          Agotado temporalmente
                        </button>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

            {librosFiltrados.length === 0 && (
              <div className="text-center py-16 space-y-3">
                <BookOpen size={40} className="mx-auto text-white/20" />
                <h4 className="text-base font-bold text-white">No se encontraron libros</h4>
                <p className="text-xs text-white/40 max-w-sm mx-auto">
                  Prueba buscando con otra palabra o selecciona otra categoría arriba.
                </p>
              </div>
            )}

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* PESTAÑA B: CENTRO DE CÓMPUTO */}
        {/* ------------------------------------------------------------- */}
        {pestana === 'computo' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="text-center max-w-lg mx-auto space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-white">Centro de Cómputo</h2>
              <p className="text-xs text-white/50">
                Selecciona una estación libre y pasa tu tarjeta escolar para activarla por 60 minutos.
              </p>
            </div>

            {/* Grid de Computadoras estilo Apple Hardware */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {computadoras.map((pc) => {
                const disponible = pc.estado === 'disponible';

                return (
                  <div
                    key={pc.id}
                    className={`rounded-3xl p-6 border transition-all duration-200 flex flex-col justify-between shadow-xl ${
                      disponible 
                        ? 'bg-white/[0.03] hover:bg-white/[0.05] border-white/[0.08]' 
                        : 'bg-amber-950/20 border-amber-500/20'
                    }`}
                  >
                    <div className="space-y-3">
                      
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                          disponible ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          <Laptop size={20} />
                        </div>

                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                          disponible 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${disponible ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                          {disponible ? 'Disponible' : 'En Uso'}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white">{pc.nombre}</h4>
                        <p className="text-xs text-white/40">{pc.modelo}</p>
                      </div>

                      {!disponible && pc.socioNombreActual && (
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs space-y-1">
                          <span className="text-white/40 block text-[10px] uppercase font-semibold">Usuario Activo:</span>
                          <span className="font-semibold text-white truncate block">{pc.socioNombreActual}</span>
                          <div className="flex items-center gap-1 text-[11px] text-amber-400 pt-1">
                            <Clock size={12} />
                            <span>Sesión en curso</span>
                          </div>
                        </div>
                      )}

                    </div>

                    <div className="pt-5 mt-4 border-t border-white/[0.06]">
                      {disponible ? (
                        <button
                          onClick={() => setModalReservarPC(pc)}
                          className="w-full py-2.5 rounded-full bg-white hover:bg-teal-400 text-black font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          <Zap size={14} className="fill-black stroke-black" />
                          <span>Usar con mi Tarjeta</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => setModalLiberarPC(pc)}
                          className="w-full py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-xs border border-white/[0.1] transition-all flex items-center justify-center gap-2"
                        >
                          <RotateCcw size={13} />
                          <span>Liberar Terminal</span>
                        </button>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* PESTAÑA C: MIS PRÉSTAMOS & DEVOLUCIONES */}
        {/* ------------------------------------------------------------- */}
        {pestana === 'mis_prestamos' && (
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
            
            {alumnoIdentificado ? (
              <div className="space-y-6">
                
                {/* Perfil del Alumno Apple Style */}
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 flex items-center justify-center text-xl font-black shadow-lg">
                      {alumnoIdentificado.nombre.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{alumnoIdentificado.nombre}</h3>
                      <p className="text-xs text-white/50">{alumnoIdentificado.gradoGrupo} · Matrícula: {alumnoIdentificado.matricula}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setAlumnoIdentificado(null)}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-white/70 hover:text-white transition-all"
                  >
                    Cambiar
                  </button>
                </div>

                {/* Libros en poder del alumno */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 px-1">Tus Libros Prestados</h4>

                  {librosDelAlumno.length === 0 ? (
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-dashed border-white/[0.08] text-center text-white/40 text-xs">
                      🎉 ¡Todo al día! No tienes ningún libro pendiente por devolver.
                    </div>
                  ) : (
                    librosDelAlumno.map(p => (
                      <div
                        key={p.id}
                        className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                      >
                        <div>
                          <span className="text-[10px] font-mono text-white/30">{p.codigoPrestamo}</span>
                          <h5 className="text-base font-bold text-white">{p.libroTitulo}</h5>
                          <p className="text-xs text-white/50">Entrega límite: <strong className="text-teal-300 font-medium">{p.fechaDevolucionEsperada}</strong></p>
                        </div>

                        <button
                          onClick={() => handleDevolverLibroDirecto(p.id)}
                          className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                        >
                          <RotateCcw size={14} />
                          <span>Devolver este Libro</span>
                        </button>
                      </div>
                    ))
                  )}
                </div>

              </div>
            ) : (
              /* Tarjeta de bienvenida tipo Apple Wallet */
              <div className="p-12 rounded-[36px] bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.1] text-center space-y-6 shadow-2xl">
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-teal-500/10 animate-ping opacity-40" />
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-teal-400 shadow-xl">
                    <CreditCard size={28} className="stroke-[2.2]" />
                  </div>
                </div>

                <div className="space-y-1.5 max-w-sm mx-auto">
                  <h3 className="text-xl font-bold text-white">Consulta tus Préstamos</h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Pasa tu tarjeta escolar por el lector en cualquier momento para ver los libros que tienes en casa y su fecha de entrega.
                  </p>
                </div>

                {socios.length > 0 && (
                  <div className="pt-2">
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          procesarChip(e.target.value);
                          e.target.value = '';
                        }
                      }}
                      defaultValue=""
                      className="px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white/70 text-xs font-medium cursor-pointer"
                    >
                      <option value="" disabled>O probar con alumno de demostración...</option>
                      {socios.map(s => (
                        <option key={s.id} value={s.nfcUid || s.matricula}>
                          {s.nombre} ({s.gradoGrupo})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </main>

      {/* ------------------------------------------------------------- */}
      {/* MODAL APPLE PAY STYLE: CONFIRMACIÓN CON TARJETA DE LIBRO */}
      {/* ------------------------------------------------------------- */}
      {modalPrestarLibro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="bg-[#1C1C1E] border border-white/[0.12] rounded-[36px] p-8 max-w-md w-full shadow-2xl relative text-center space-y-6">
            
            <button
              onClick={() => setModalPrestarLibro(null)}
              className="absolute right-5 top-5 text-white/40 hover:text-white p-1 rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            {/* Animación Onda Apple Pay */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping opacity-40" />
              <div className="absolute inset-1.5 rounded-full bg-teal-500/20 animate-pulse" />
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-xl shadow-teal-500/30">
                <ScanLine size={24} className="stroke-[2.5]" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">Préstamo por 7 Días</span>
              <h3 className="text-lg font-bold text-white">{modalPrestarLibro.titulo}</h3>
              <p className="text-xs text-white/50">{modalPrestarLibro.autor}</p>
            </div>

            {/* Input con autoFocus para capturar el lector USB al 100% */}
            <div className="space-y-3 pt-2">
              <div className="relative">
                <input
                  ref={modalInputRef}
                  type="text"
                  autoFocus
                  placeholder="Acerca tu tarjeta escolar..."
                  value={modalScanInput}
                  onChange={(e) => setModalScanInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && modalScanInput.trim().length >= 3) {
                      e.preventDefault();
                      procesarChip(modalScanInput.trim());
                      setModalScanInput('');
                    }
                  }}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.12] focus:border-teal-400 focus:bg-white/[0.08] text-center font-mono text-xs text-teal-300 placeholder:text-white/30 outline-none shadow-inner"
                />
              </div>

              {/* Si el chip no estaba vinculado aún en la biblioteca */}
              {chipNoRegistrado && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left space-y-2.5 animate-in zoom-in-95">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                    <AlertCircle size={15} />
                    <span>Tarjeta Detectada (UID: {chipNoRegistrado})</span>
                  </div>
                  <p className="text-[11px] text-amber-200/80 leading-tight">
                    Selecciona tu nombre en la lista para asociar tu tarjeta y pedir el libro:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <select
                      value={socioParaVincularId}
                      onChange={(e) => setSocioParaVincularId(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-black/60 border border-white/20 text-white text-xs font-medium outline-none"
                    >
                      <option value="">Selecciona al alumno...</option>
                      {socios.map(s => (
                        <option key={s.id} value={s.id}>{s.nombre} ({s.gradoGrupo})</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      disabled={!socioParaVincularId}
                      onClick={() => handleVincularChipYContinuar(chipNoRegistrado, socioParaVincularId)}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-teal-400 disabled:opacity-40 text-black font-bold text-xs transition-all whitespace-nowrap"
                    >
                      Vincular y Prestar
                    </button>
                  </div>
                </div>
              )}

              {socios.length > 0 && (
                <div className="pt-2">
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        procesarChip(e.target.value);
                      }
                    }}
                    defaultValue=""
                    className="px-3 py-1.5 rounded-full bg-white/[0.04] text-white/40 hover:text-white text-[11px] font-medium border border-white/[0.06] cursor-pointer"
                  >
                    <option value="" disabled>O probar con tarjeta de demostración...</option>
                    {socios.map(s => (
                      <option key={s.id} value={s.nfcUid || s.matricula}>
                        {s.nombre} ({s.gradoGrupo})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <button
              onClick={() => setModalPrestarLibro(null)}
              className="w-full py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-white/70 hover:text-white transition-colors"
            >
              Cancelar
            </button>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL RESERVAR COMPUTADORA */}
      {/* ------------------------------------------------------------- */}
      {modalReservarPC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="bg-[#1C1C1E] border border-white/[0.12] rounded-[36px] p-8 max-w-md w-full shadow-2xl relative text-center space-y-6">
            
            <button
              onClick={() => setModalReservarPC(null)}
              className="absolute right-5 top-5 text-white/40 hover:text-white p-1 rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center mx-auto">
              <Laptop size={28} />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Reservar {modalReservarPC.nombre}</h3>
              <p className="text-xs text-white/50">Sesión de 60 minutos · {modalReservarPC.modelo}</p>
            </div>

            <div className="space-y-3 pt-2">
              <input
                ref={modalInputRef}
                type="text"
                autoFocus
                placeholder="Acerca tu tarjeta escolar..."
                value={modalScanInput}
                onChange={(e) => setModalScanInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && modalScanInput.trim().length >= 3) {
                    e.preventDefault();
                    procesarChip(modalScanInput.trim());
                    setModalScanInput('');
                  }
                }}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.12] focus:border-teal-400 text-center font-mono text-xs text-teal-300 placeholder:text-white/30 outline-none"
              />

              {chipNoRegistrado && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left space-y-2 animate-in zoom-in-95">
                  <span className="text-xs font-bold text-amber-300 block">Tarjeta Detectada (UID: {chipNoRegistrado})</span>
                  <select
                    value={socioParaVincularId}
                    onChange={(e) => setSocioParaVincularId(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/20 text-white text-xs font-medium outline-none"
                  >
                    <option value="">Selecciona al alumno...</option>
                    {socios.map(s => (
                      <option key={s.id} value={s.id}>{s.nombre} ({s.gradoGrupo})</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    disabled={!socioParaVincularId}
                    onClick={() => handleVincularChipYContinuar(chipNoRegistrado, socioParaVincularId)}
                    className="w-full py-2 rounded-xl bg-white text-black font-bold text-xs"
                  >
                    Vincular y Usar Terminal
                  </button>
                </div>
              )}

              {socios.length > 0 && (
                <div className="pt-2">
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        procesarChip(e.target.value);
                      }
                    }}
                    defaultValue=""
                    className="px-3 py-1.5 rounded-full bg-white/[0.04] text-white/40 hover:text-white text-[11px] font-medium border border-white/[0.06] cursor-pointer"
                  >
                    <option value="" disabled>O probar con tarjeta de demostración...</option>
                    {socios.map(s => (
                      <option key={s.id} value={s.nfcUid || s.matricula}>
                        {s.nombre} ({s.gradoGrupo})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <button
              onClick={() => setModalReservarPC(null)}
              className="w-full py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-white/70 hover:text-white transition-colors"
            >
              Cancelar
            </button>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL LIBERAR COMPUTADORA */}
      {/* ------------------------------------------------------------- */}
      {modalLiberarPC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="bg-[#1C1C1E] border border-white/[0.12] rounded-[36px] p-8 max-w-md w-full shadow-2xl relative text-center space-y-6">
            
            <button
              onClick={() => setModalLiberarPC(null)}
              className="absolute right-5 top-5 text-white/40 hover:text-white p-1 rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center mx-auto">
              <RotateCcw size={28} />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Liberar {modalLiberarPC.nombre}</h3>
              <p className="text-xs text-white/50">Actualmente en uso por {modalLiberarPC.socioNombreActual || 'Alumno'}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  const updated = storageService.liberarComputadora(modalLiberarPC.id, activeEscuelaId);
                  setComputadoras(updated);
                  reproducirSonido('devolver');
                  mostrarToast('¡Estación liberada con éxito!', 'exito');
                  setModalLiberarPC(null);
                }}
                className="w-full py-3 rounded-full bg-white hover:bg-rose-400 text-black font-bold text-xs shadow-md transition-all"
              >
                Confirmar Liberación de Terminal
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL ÉXITO DE PRÉSTAMO */}
      {/* ------------------------------------------------------------- */}
      {prestamoExitosoInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="bg-[#1C1C1E] border border-emerald-500/30 rounded-[36px] p-8 max-w-md w-full shadow-2xl text-center space-y-5">
            
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">¡Préstamo Confirmado!</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                El libro <strong className="text-teal-300">"{prestamoExitosoInfo.libro}"</strong> ha sido prestado con éxito a <strong className="text-white">{prestamoExitosoInfo.alumno}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs space-y-1">
              <span className="text-white/40 block text-[10px] uppercase font-semibold">Fecha límite de devolución:</span>
              <span className="text-base font-bold text-emerald-400 font-mono">{prestamoExitosoInfo.fechaDev}</span>
            </div>

            <button
              onClick={() => setPrestamoExitosoInfo(null)}
              className="w-full py-3 rounded-full bg-white hover:bg-emerald-400 text-black font-bold text-xs shadow-lg transition-all"
            >
              Listo
            </button>

          </div>
        </div>
      )}

      {/* Footer minimalista Apple */}
      <footer className="py-4 border-t border-white/[0.06] text-center text-[11px] text-white/30 font-medium">
        Biblioteca Cloud · Kiosco Escolar Automatizado
      </footer>

    </div>
  );
};
