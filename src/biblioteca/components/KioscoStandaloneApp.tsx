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
  Zap,
  Bot,
  Send
} from 'lucide-react';
import { Libro, Prestamo, Computadora, Socio, EscuelaSaaS, MensajeChat } from '../types';
import { storageService } from '../services/storageService';
import { authService } from '../services/authService';
import { chipService, reproducirSonido } from '../services/chipService';
import { consultarBibliotecarioIA } from '../services/aiBibliotecario';

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
  const [pestana, setPestana] = useState<'catalogo' | 'computo' | 'mis_prestamos' | 'ia'>('catalogo');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState('');
  const [esPantallaCompleta, setEsPantallaCompleta] = useState(false);
  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }));

  // Chat del Bibliotecario Virtual Inteligente
  const [mensajesChatIA, setMensajesChatIA] = useState<MensajeChat[]>([
    {
      id: 'msg-welcome-kiosco',
      remitente: 'ia',
      contenido: '¡Hola! Soy tu **Bibliotecario Escolar Inteligente** 📚✨. Dime qué tema estás investigando, qué materias tienes hoy o qué tipo de lectura te gustaría descubrir.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputChatIA, setInputChatIA] = useState('');
  const [cargandoChatIA, setCargandoChatIA] = useState(false);

  const sugerenciasKiosco = [
    '¿Qué libro me recomiendas para divertirme leyendo?',
    '¿Qué materiales me sirven para mi proyecto de ciencias?',
    '¿Tienen cuentos o novelas de aventuras y misterio?',
    '¿Qué libros de historia o geografía hay disponibles?'
  ];

  const handleEnviarChatIA = async (texto: string) => {
    if (!texto.trim() || cargandoChatIA) return;
    const textoLimpio = texto.trim();
    setInputChatIA('');

    const nuevoMsgUsuario: MensajeChat = {
      id: `msg-usr-${Date.now()}`,
      remitente: 'usuario',
      contenido: textoLimpio,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMensajesChatIA(prev => [...prev, nuevoMsgUsuario]);
    setCargandoChatIA(true);

    try {
      const res = await consultarBibliotecarioIA(textoLimpio, libros);
      const nuevoMsgIA: MensajeChat = {
        id: `msg-ia-${Date.now()}`,
        remitente: 'ia',
        contenido: res.texto,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        librosSugeridos: res.librosRecomendados
      };
      setMensajesChatIA(prev => [...prev, nuevoMsgIA]);
    } catch (err) {
      setMensajesChatIA(prev => [
        ...prev,
        {
          id: `msg-err-${Date.now()}`,
          remitente: 'ia',
          contenido: 'No pude procesar tu consulta en este momento. Por favor inténtalo de nuevo.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setCargandoChatIA(false);
    }
  };

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
        mostrarToast(`¡${modalLiberarPC.nombre} liberada exitosamente con tarjeta de ${alumno.nombre}!`, 'exito');
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
    <div className="min-h-screen bg-[#070E1B] text-[#F1F5F9] font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      
      {/* Luz ambiental azul marino biblioteca */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-blue-700/20 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* 1. BARRA SUPERIOR AZUL MARINO GLASSMORPHISM */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#0B1528]/85 border-b border-blue-900/35 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Squircle & Título */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-950 via-blue-900 to-indigo-800 border border-blue-700/30 flex items-center justify-center text-blue-300 shadow-md shadow-blue-950/40">
              <BookOpen size={20} className="stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                  Biblioteca <span className="text-blue-400 font-semibold">Escolar</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-semibold text-blue-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Sensor Listo
                </span>
              </div>
              <p className="text-[11px] text-blue-200/50 font-medium truncate max-w-[200px] sm:max-w-xs mt-0.5">
                {escuelaActiva ? escuelaActiva.nombre : 'Kiosco de Autoservicio'}
              </p>
            </div>
          </div>

          {/* Selector Central: Segmented Pill Control */}
          <nav className="flex items-center p-1 rounded-full bg-[#060D1A]/80 border border-blue-900/40 backdrop-blur-xl shadow-inner">
            <button
              onClick={() => setPestana('catalogo')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                pestana === 'catalogo'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 scale-[1.02]'
                  : 'text-blue-200/70 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <BookOpen size={14} className={pestana === 'catalogo' ? 'text-white' : 'text-blue-400'} />
              <span>Libros</span>
            </button>

            <button
              onClick={() => setPestana('computo')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                pestana === 'computo'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 scale-[1.02]'
                  : 'text-blue-200/70 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Laptop size={14} className={pestana === 'computo' ? 'text-white' : 'text-blue-400'} />
              <span>Cómputo</span>
            </button>

            <button
              onClick={() => setPestana('mis_prestamos')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                pestana === 'mis_prestamos'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 scale-[1.02]'
                  : 'text-blue-200/70 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <User size={14} className={pestana === 'mis_prestamos' ? 'text-white' : 'text-blue-400'} />
              <span>Mis Préstamos</span>
              {librosDelAlumno.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center">
                  {librosDelAlumno.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setPestana('ia')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                pestana === 'ia'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 scale-[1.02]'
                  : 'text-blue-200/70 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Bot size={14} className={pestana === 'ia' ? 'text-white' : 'text-blue-400'} />
              <span>Bibliotecario IA</span>
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
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" />
                <input
                  type="text"
                  id="apple-kiosco-search"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar por título, autor, materia o código..."
                  className="w-full pl-11 pr-10 py-3.5 rounded-full bg-[#0B1528]/80 border border-blue-900/50 focus:border-blue-400 focus:bg-[#0E1C38] text-sm text-white placeholder:text-blue-300/40 backdrop-blur-xl transition-all outline-none shadow-sm"
                />
                {busqueda && (
                  <button 
                    onClick={() => setBusqueda('')} 
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-blue-300/40 hover:text-white p-1"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Cápsulas de Categorías */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
                {categorias.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaFiltro(cat)}
                    className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap ${
                      categoriaFiltro === cat
                        ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-900/40 scale-[1.02]'
                        : 'bg-[#0B1528]/60 hover:bg-[#0E1C38] text-blue-200/70 border border-blue-900/40'
                    }`}
                  >
                    {cat === 'todos' ? 'Todos' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Libros Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {librosFiltrados.map((libro) => {
                const disponible = libro.ejemplaresDisponibles > 0;

                return (
                  <div
                    key={libro.id}
                    className="group rounded-3xl p-6 bg-[#0B1528]/70 hover:bg-[#0E1C38]/90 border border-blue-900/40 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between shadow-xl relative overflow-hidden"
                  >
                    <div className="space-y-3">
                      
                      {/* Metadatos superiores */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#060D1A] text-blue-300 border border-blue-800/40 truncate max-w-[60%]">
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
                        <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                          {libro.titulo}
                        </h3>
                        <p className="text-xs text-blue-200/60 font-medium mt-1">
                          {libro.autor} {libro.editorial ? `· ${libro.editorial}` : ''}
                        </p>
                      </div>

                      {/* Sinopsis */}
                      <p className="text-xs text-blue-100/50 line-clamp-2 leading-relaxed">
                        {libro.descripcion}
                      </p>

                      {/* Ubicación y Código */}
                      <div className="pt-2 flex items-center justify-between text-[11px] text-blue-300/40 font-mono">
                        <span>Código: {libro.codigo}</span>
                        <span className="text-blue-200/70">{libro.ubicacionEstante || 'Estante Principal'}</span>
                      </div>

                    </div>

                    {/* Botón Acción Pill */}
                    <div className="pt-5 mt-4 border-t border-blue-900/40">
                      {disponible ? (
                        <button
                          onClick={() => {
                            setModalPrestarLibro(libro);
                            setChipNoRegistrado(null);
                          }}
                          className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-950/40 flex items-center justify-center gap-2 group-hover:scale-[1.01]"
                        >
                          <Zap size={14} className="fill-white stroke-white" />
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
                <BookOpen size={40} className="mx-auto text-blue-300/20" />
                <h4 className="text-base font-bold text-white">No se encontraron libros</h4>
                <p className="text-xs text-blue-200/50 max-w-sm mx-auto">
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
              <p className="text-xs text-blue-200/60">
                Selecciona una estación libre y pasa tu tarjeta escolar para activarla por 60 minutos.
              </p>
            </div>

            {/* Grid de Computadoras */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {computadoras.map((pc) => {
                const disponible = pc.estado === 'disponible';

                return (
                  <div
                    key={pc.id}
                    className={`rounded-3xl p-6 border transition-all duration-200 flex flex-col justify-between shadow-xl ${
                      disponible 
                        ? 'bg-[#0B1528]/70 hover:bg-[#0E1C38]/90 border-blue-900/40' 
                        : 'bg-[#0D182E]/90 border-amber-500/30'
                    }`}
                  >
                    <div className="space-y-3">
                      
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                          disponible ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
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
                        <p className="text-xs text-blue-200/50">{pc.modelo}</p>
                      </div>

                      {!disponible && pc.socioNombreActual && (
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-blue-900/40 text-xs space-y-1">
                          <span className="text-blue-300/50 block text-[10px] uppercase font-semibold">Usuario Activo:</span>
                          <span className="font-semibold text-white truncate block">{pc.socioNombreActual}</span>
                          <div className="flex items-center gap-1 text-[11px] text-amber-400 pt-1">
                            <Clock size={12} />
                            <span>Sesión en curso</span>
                          </div>
                        </div>
                      )}

                    </div>

                    <div className="pt-5 mt-4 border-t border-blue-900/40">
                      {disponible ? (
                        <button
                          onClick={() => setModalReservarPC(pc)}
                          className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-950/40 flex items-center justify-center gap-2"
                        >
                          <Zap size={14} className="fill-white stroke-white" />
                          <span>Usar con mi Tarjeta</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => setModalLiberarPC(pc)}
                          className="w-full py-2.5 rounded-full bg-white/[0.06] hover:bg-rose-600/30 text-white font-semibold text-xs border border-rose-500/30 transition-all flex items-center justify-center gap-2"
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
                
                {/* Perfil del Alumno */}
                <div className="p-6 rounded-3xl bg-[#0B1528]/70 border border-blue-900/40 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-500 text-white flex items-center justify-center text-xl font-black shadow-lg shadow-blue-950/50">
                      {alumnoIdentificado.nombre.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{alumnoIdentificado.nombre}</h3>
                      <p className="text-xs text-blue-200/60">{alumnoIdentificado.gradoGrupo} · Matrícula: {alumnoIdentificado.matricula}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setAlumnoIdentificado(null)}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-blue-200/70 hover:text-white transition-all"
                  >
                    Cambiar
                  </button>
                </div>

                {/* Libros en poder del alumno */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300/50 px-1">Tus Libros Prestados</h4>

                  {librosDelAlumno.length === 0 ? (
                    <div className="p-8 rounded-3xl bg-[#0B1528]/40 border border-dashed border-blue-900/40 text-center text-blue-300/40 text-xs">
                      🎉 ¡Todo al día! No tienes ningún libro pendiente por devolver.
                    </div>
                  ) : (
                    librosDelAlumno.map(p => (
                      <div
                        key={p.id}
                        className="p-5 rounded-3xl bg-[#0B1528]/70 border border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                      >
                        <div>
                          <span className="text-[10px] font-mono text-blue-300/40">{p.codigoPrestamo}</span>
                          <h5 className="text-base font-bold text-white">{p.libroTitulo}</h5>
                          <p className="text-xs text-blue-200/60">Entrega límite: <strong className="text-amber-400 font-medium">{p.fechaDevolucionEsperada}</strong></p>
                        </div>

                        <button
                          onClick={() => handleDevolverLibroDirecto(p.id)}
                          className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-950/40 transition-all flex items-center gap-1.5"
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
              /* Tarjeta de bienvenida tipo Wallet */
              <div className="p-12 rounded-[36px] bg-gradient-to-b from-[#0B1528] to-[#070E1B] border border-blue-900/40 text-center space-y-6 shadow-2xl">
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping opacity-40" />
                  <div className="w-16 h-16 rounded-2xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-300 shadow-xl">
                    <CreditCard size={28} className="stroke-[2.2]" />
                  </div>
                </div>

                <div className="space-y-1.5 max-w-sm mx-auto">
                  <h3 className="text-xl font-bold text-white">Consulta tus Préstamos</h3>
                  <p className="text-xs text-blue-200/60 leading-relaxed">
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
                      className="px-4 py-2 rounded-full bg-[#060D1A] hover:bg-[#0E1C38] border border-blue-900/50 text-blue-200/80 text-xs font-medium cursor-pointer"
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

        {/* ------------------------------------------------------------- */}
        {/* PESTAÑA D: BIBLIOTECARIO VIRTUAL INTELIGENTE */}
        {/* ------------------------------------------------------------- */}
        {pestana === 'ia' && (
          <div className="max-w-4xl mx-auto space-y-5 animate-in fade-in duration-200">
            
            {/* Banner Superior Estilo Biblioteca Escolar */}
            <div className="rounded-3xl p-6 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 border border-blue-800/40 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0 shadow-lg shadow-blue-950/50">
                  <Bot size={28} className="stroke-[2.2]" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] font-bold text-blue-200 mb-1">
                    <Sparkles size={12} className="text-blue-300" />
                    <span>Inteligencia Artificial para Alumnos & Docentes</span>
                  </div>
                  <h3 className="text-xl font-black text-white">Bibliotecario Virtual Inteligente</h3>
                  <p className="text-xs text-blue-200/80 mt-0.5">
                    Orientación sobre libros de texto SEP, proyectos de aula NEM y recomendaciones de lectura.
                  </p>
                </div>
              </div>
            </div>

            {/* Sugerencias Rápidas para el Alumno */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar text-xs">
              <span className="text-[11px] font-bold text-blue-300/50 whitespace-nowrap flex items-center gap-1">
                <Sparkles size={12} className="text-blue-400" />
                Preguntas Rápidas:
              </span>
              {sugerenciasKiosco.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleEnviarChatIA(sug)}
                  disabled={cargandoChatIA}
                  className="px-3.5 py-1.5 rounded-full bg-[#0B1528]/80 hover:bg-blue-900/40 border border-blue-900/50 hover:border-blue-500/40 text-blue-200 text-xs font-medium whitespace-nowrap transition-all shadow-xs disabled:opacity-50"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Ventana de Conversación */}
            <div className="bg-[#0B1528]/80 rounded-[32px] border border-blue-900/40 shadow-2xl p-5 sm:p-7 flex flex-col h-[540px] backdrop-blur-xl">
              
              {/* Mensajes */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-1 scroll-smooth">
                {mensajesChatIA.map((m) => {
                  const esUsuario = m.remitente === 'usuario';

                  return (
                    <div
                      key={m.id}
                      className={`flex gap-3 ${esUsuario ? 'justify-end' : 'justify-start'}`}
                    >
                      {!esUsuario && (
                        <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-300 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                          <Bot size={16} />
                        </div>
                      )}

                      <div className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed space-y-3 ${
                        esUsuario
                          ? 'bg-blue-600 text-white rounded-tr-xs shadow-md shadow-blue-900/30'
                          : 'bg-[#0E1C38] border border-blue-800/40 text-slate-100 rounded-tl-xs shadow-sm'
                      }`}>
                        <div className="whitespace-pre-line font-medium">{m.contenido}</div>

                        {/* Libros recomendados interactivos */}
                        {m.librosSugeridos && m.librosSugeridos.length > 0 && (
                          <div className="pt-2 border-t border-blue-700/30 space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block">
                              Libros Disponibles Recomendados:
                            </span>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {m.librosSugeridos.map(libro => (
                                <div
                                  key={libro.id}
                                  className="p-3 rounded-xl bg-black/40 border border-blue-500/20 hover:border-blue-400/50 transition-all flex flex-col justify-between gap-2"
                                >
                                  <div>
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/50 truncate max-w-[120px]">
                                        {libro.categoria}
                                      </span>
                                      <span className="text-[10px] font-semibold text-emerald-400">
                                        {libro.ejemplaresDisponibles} disp.
                                      </span>
                                    </div>
                                    <h5 className="font-bold text-white text-xs mt-1.5 line-clamp-1">{libro.titulo}</h5>
                                    <p className="text-[11px] text-blue-200/60 line-clamp-1">{libro.autor}</p>
                                  </div>

                                  <button
                                    onClick={() => setModalPrestarLibro(libro)}
                                    className="w-full py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-blue-950/40"
                                  >
                                    <Zap size={12} />
                                    <span>Pedir con mi Tarjeta</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <span className="text-[9px] opacity-40 block text-right">
                          {m.timestamp}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {cargandoChatIA && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-300 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <Bot size={16} />
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#0E1C38] border border-blue-800/40 text-blue-200 text-xs flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-blue-400" />
                      <span>El Bibliotecario Virtual está buscando en el catálogo...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Formulario de Envío */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEnviarChatIA(inputChatIA);
                }}
                className="mt-4 pt-4 border-t border-blue-900/40 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputChatIA}
                  onChange={(e) => setInputChatIA(e.target.value)}
                  placeholder="Pregúntale al bibliotecario (ej. '¿Qué libro me sirve para química en 3º?')..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-[#060D1A] border border-blue-900/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-xs text-white placeholder:text-blue-300/30 outline-none transition-all"
                />

                <button
                  type="submit"
                  disabled={!inputChatIA.trim() || cargandoChatIA}
                  className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-blue-950/40"
                >
                  <Send size={14} />
                  <span className="hidden sm:inline">Preguntar</span>
                </button>
              </form>

            </div>

          </div>
        )}

      </main>

      {/* ------------------------------------------------------------- */}
      {/* MODAL: CONFIRMACIÓN CON TARJETA DE LIBRO */}
      {/* ------------------------------------------------------------- */}
      {modalPrestarLibro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="bg-[#0B1528] border border-blue-500/30 rounded-[36px] p-8 max-w-md w-full shadow-2xl relative text-center space-y-6">
            
            <button
              onClick={() => {
                setModalPrestarLibro(null);
                setModalScanInput('');
              }}
              className="absolute right-5 top-5 text-blue-300/40 hover:text-white p-1 rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            {/* Animación Onda de Escaneo NFC */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-40" />
              <div className="absolute inset-1.5 rounded-full bg-blue-500/20 animate-pulse" />
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
                <ScanLine size={24} className="stroke-[2.5]" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Préstamo por 7 Días</span>
              <h3 className="text-lg font-bold text-white">{modalPrestarLibro.titulo}</h3>
              <p className="text-xs text-blue-200/60">{modalPrestarLibro.autor}</p>
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
                  className="w-full px-4 py-3 rounded-2xl bg-[#060D1A] border border-blue-800/50 focus:border-blue-400 focus:bg-[#071328] text-center font-mono text-xs text-blue-300 placeholder:text-blue-300/30 outline-none shadow-inner"
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
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs transition-all whitespace-nowrap"
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
                    className="px-3 py-1.5 rounded-full bg-[#060D1A] text-blue-300/60 hover:text-white text-[11px] font-medium border border-blue-900/40 cursor-pointer"
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
              onClick={() => {
                setModalPrestarLibro(null);
                setModalScanInput('');
              }}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="bg-[#0B1528] border border-blue-500/30 rounded-[36px] p-8 max-w-md w-full shadow-2xl relative text-center space-y-6">
            
            <button
              onClick={() => {
                setModalReservarPC(null);
                setModalScanInput('');
              }}
              className="absolute right-5 top-5 text-blue-300/40 hover:text-white p-1 rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-40" />
              <div className="absolute inset-1.5 rounded-full bg-blue-500/20 animate-pulse" />
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
                <Laptop size={26} />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Asignación de Estación</span>
              <h3 className="text-lg font-bold text-white">Reservar {modalReservarPC.nombre}</h3>
              <p className="text-xs text-blue-200/60">Sesión de 60 minutos · {modalReservarPC.modelo}</p>
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
                className="w-full px-4 py-3 rounded-2xl bg-[#060D1A] border border-blue-800/50 focus:border-blue-400 focus:bg-[#071328] text-center font-mono text-xs text-blue-300 placeholder:text-blue-300/30 outline-none"
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
                    className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
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
                    className="px-3 py-1.5 rounded-full bg-[#060D1A] text-blue-300/60 hover:text-white text-[11px] font-medium border border-blue-900/40 cursor-pointer"
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
              onClick={() => {
                setModalReservarPC(null);
                setModalScanInput('');
              }}
              className="w-full py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-white/70 hover:text-white transition-colors"
            >
              Cancelar
            </button>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL LIBERAR COMPUTADORA CON CONFIRMACIÓN DE CHIP */}
      {/* ------------------------------------------------------------- */}
      {modalLiberarPC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="bg-[#0B1528] border border-blue-500/30 rounded-[36px] p-8 max-w-md w-full shadow-2xl relative text-center space-y-6">
            
            <button
              onClick={() => {
                setModalLiberarPC(null);
                setModalScanInput('');
              }}
              className="absolute right-5 top-5 text-blue-300/40 hover:text-white p-1 rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            {/* Animación Onda de Escaneo NFC */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-40" />
              <div className="absolute inset-1.5 rounded-full bg-blue-500/20 animate-pulse" />
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
                <ScanLine size={24} className="stroke-[2.5]" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Devolución de Terminal</span>
              <h3 className="text-lg font-bold text-white">Liberar {modalLiberarPC.nombre}</h3>
              <p className="text-xs text-blue-200/60">
                {modalLiberarPC.socioNombreActual 
                  ? `Asignada a: ${modalLiberarPC.socioNombreActual}`
                  : 'Terminal en sesión activa'}
              </p>
              <p className="text-[11px] text-blue-300/70 pt-1">
                Acerca la tarjeta escolar NFC/RFID del alumno para confirmar la entrega.
              </p>
            </div>

            {/* Input con autoFocus para capturar el lector USB al 100% */}
            <div className="space-y-3 pt-1">
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
                  className="w-full px-4 py-3 rounded-2xl bg-[#060D1A] border border-blue-800/50 focus:border-blue-400 focus:bg-[#071328] text-center font-mono text-xs text-blue-300 placeholder:text-blue-300/30 outline-none shadow-inner"
                />
              </div>

              {/* Si el chip no estaba vinculado */}
              {chipNoRegistrado && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left space-y-2.5 animate-in zoom-in-95">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                    <AlertCircle size={15} />
                    <span>Tarjeta Detectada (UID: {chipNoRegistrado})</span>
                  </div>
                  <p className="text-[11px] text-amber-200/80 leading-tight">
                    Selecciona el alumno para confirmar la liberación:
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
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs transition-all whitespace-nowrap"
                    >
                      Confirmar y Liberar
                    </button>
                  </div>
                </div>
              )}

              {/* Selector de prueba con tarjeta de demostración */}
              {socios.length > 0 && (
                <div className="pt-2">
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        procesarChip(e.target.value);
                      }
                    }}
                    defaultValue=""
                    className="px-3 py-1.5 rounded-full bg-[#060D1A] text-blue-300/60 hover:text-white text-[11px] font-medium border border-blue-900/40 cursor-pointer"
                  >
                    <option value="" disabled>O pasar tarjeta de demostración...</option>
                    {socios.map(s => (
                      <option key={s.id} value={s.nfcUid || s.matricula}>
                        {s.nombre} ({s.gradoGrupo})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  const updated = storageService.liberarComputadora(modalLiberarPC.id, activeEscuelaId);
                  setComputadoras(updated);
                  reproducirSonido('devolver');
                  mostrarToast(`¡${modalLiberarPC.nombre} liberada manualmente por el docente/bibliotecario!`, 'exito');
                  setModalLiberarPC(null);
                  setModalScanInput('');
                }}
                className="text-[11px] text-blue-300/40 hover:text-rose-400 transition-colors"
              >
                Liberación manual sin chip (Docente / Bibliotecario)
              </button>

              <button
                onClick={() => {
                  setModalLiberarPC(null);
                  setModalScanInput('');
                }}
                className="w-full py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-white/70 hover:text-white transition-colors"
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL ÉXITO DE PRÉSTAMO */}
      {/* ------------------------------------------------------------- */}
      {prestamoExitosoInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="bg-[#0B1528] border border-blue-500/30 rounded-[36px] p-8 max-w-md w-full shadow-2xl text-center space-y-5">
            
            <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/30">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">¡Préstamo Confirmado!</h3>
              <p className="text-xs text-blue-200/70 leading-relaxed">
                El libro <strong className="text-blue-300">"{prestamoExitosoInfo.libro}"</strong> ha sido prestado con éxito a <strong className="text-white">{prestamoExitosoInfo.alumno}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#060D1A] border border-blue-900/50 text-xs space-y-1">
              <span className="text-blue-300/50 block text-[10px] uppercase font-semibold">Fecha límite de devolución:</span>
              <span className="text-base font-bold text-emerald-400 font-mono">{prestamoExitosoInfo.fechaDev}</span>
            </div>

            <button
              onClick={() => setPrestamoExitosoInfo(null)}
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-950/40 transition-all"
            >
              Listo
            </button>

          </div>
        </div>
      )}

      {/* Footer estilo Biblioteca Escolar */}
      <footer className="py-4 border-t border-blue-900/30 text-center text-[11px] text-blue-300/40 font-medium">
        Biblioteca Escolar · Kiosco de Autoservicio Automatizado
      </footer>

    </div>
  );
};
