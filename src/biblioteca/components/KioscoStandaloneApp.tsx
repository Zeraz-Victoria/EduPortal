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
  Layers, 
  ExternalLink, 
  HelpCircle,
  ScanLine,
  Loader2,
  Calendar,
  X
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

  // 3. Estado de navegación táctil del Kiosco
  const [pestana, setPestana] = useState<'catalogo' | 'computo' | 'mis_prestamos'>('catalogo');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState('');
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [esPantallaCompleta, setEsPantallaCompleta] = useState(false);
  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }));

  // 4. Modales interactivos de Chip
  const [modalPrestarLibro, setModalPrestarLibro] = useState<Libro | null>(null);
  const [modalReservarPC, setModalReservarPC] = useState<Computadora | null>(null);
  const [modalLiberarPC, setModalLiberarPC] = useState<Computadora | null>(null);

  // 5. Estado de escaneo de tarjeta NFC / RFID
  const [uidInput, setUidInput] = useState('');
  const [cargandoChip, setCargandoChip] = useState(false);
  const [mensajeChip, setMensajeChip] = useState<{ texto: string; tipo: 'exito' | 'error' | 'info' } | null>(null);
  const [alumnoIdentificado, setAlumnoIdentificado] = useState<Socio | null>(null);
  const [prestamoExitosoInfo, setPrestamoExitosoInfo] = useState<{ libro: string; fechaDev: string; alumno: string } | null>(null);

  const activeEscuelaId = escuelaActiva?.id || escuelaIdInicial || 'esc-101';

  // Reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setHoraActual(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

    // Sincronización en tiempo real con otras ventanas/pestañas de administración
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && e.key.startsWith('eduportal_biblioteca')) {
        cargarDatos();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [escuelaIdInicial]);

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
    if (!rawUid.trim()) return;
    setCargandoChip(true);
    setMensajeChip({ texto: 'Validando chip escolar con el servidor...', tipo: 'info' });

    try {
      const res = await chipService.identificarChip(rawUid, activeEscuelaId);
      
      if (!res.encontrado || !res.socio) {
        reproducirSonido('error');
        setMensajeChip({ 
          texto: res.mensaje || `Tarjeta con UID "${rawUid}" no registrada en el padrón escolar.`, 
          tipo: 'error' 
        });
        return;
      }

      const alumno = res.socio;
      setAlumnoIdentificado(alumno);

      // CASO A: Confirmar Préstamo de Libro con Chip
      if (modalPrestarLibro) {
        const fechaHoy = new Date();
        const fechaDev = new Date();
        fechaDev.setDate(fechaHoy.getDate() + 7); // 7 días de préstamo por defecto en kiosco
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
          notas: 'Solicitado directamente desde Kiosco de Autoservicio con Chip NFC'
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
        setUidInput('');
        return;
      }

      // CASO B: Reservar Computadora con Chip
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
        setMensajeChip({
          texto: `¡Estación "${modalReservarPC.nombre}" asignada con éxito a ${alumno.nombre} por 60 minutos!`,
          tipo: 'exito'
        });
        setModalReservarPC(null);
        setUidInput('');
        return;
      }

      // CASO C: Liberar Computadora con Chip
      if (modalLiberarPC) {
        const updated = storageService.liberarComputadora(modalLiberarPC.id, activeEscuelaId);
        setComputadoras(updated);
        reproducirSonido('devolver');
        setMensajeChip({
          texto: `¡Estación "${modalLiberarPC.nombre}" liberada correctamente! Gracias por usar el centro de cómputo.`,
          tipo: 'exito'
        });
        setModalLiberarPC(null);
        setUidInput('');
        return;
      }

      // CASO D: Pase de tarjeta general en el Kiosco (abrir Mis Préstamos y Devoluciones)
      setPestana('mis_prestamos');
      reproducirSonido('exito');
      setMensajeChip({
        texto: `¡Hola, ${alumno.nombre} (${alumno.gradoGrupo})! Mostrando tu estatus y libros pendientes.`,
        tipo: 'exito'
      });
      setUidInput('');

    } catch (e: any) {
      reproducirSonido('error');
      setMensajeChip({ texto: 'Error al comunicarse con la base de datos de asistencia.', tipo: 'error' });
    } finally {
      setCargandoChip(false);
    }
  };

  // Listener global para lectores USB de tarjetas (teclado HID)
  useEffect(() => {
    let buffer = '';
    let ultimoTiempo = Date.now();

    const handleKeyDown = (e: KeyboardEvent) => {
      const ahora = Date.now();
      const delta = ahora - ultimoTiempo;
      ultimoTiempo = ahora;

      if (e.key === 'Enter') {
        if (buffer.length >= 4) {
          e.preventDefault();
          const code = buffer;
          buffer = '';
          procesarChip(code);
        }
        buffer = '';
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (delta > 200 && buffer.length > 0) {
          buffer = '';
        }
        buffer += e.key;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Activar antena Web NFC en celulares Android si aplica
    let stopNfc = () => {};
    chipService.iniciarLecturaWebNFC((uid) => procesarChip(uid)).then(fn => { stopNfc = fn; });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      stopNfc();
    };
  }, [activeEscuelaId, modalPrestarLibro, modalReservarPC, modalLiberarPC]);

  // Devolución directa de libro con chip
  const handleDevolverLibroDirecto = (prestamoId: string) => {
    reproducirSonido('devolver');
    const res = storageService.devolverPrestamo(prestamoId, activeEscuelaId);
    setPrestamos(res.prestamos);
    setLibros(res.libros);
    setSocios(res.socios);
    setMensajeChip({
      texto: '¡Libro devuelto con éxito! Se ha reincorporado al estante de la biblioteca.',
      tipo: 'exito'
    });
  };

  // Filtrado exhaustivo de catálogo (título, autor, editorial, código, descripción)
  const librosFiltrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return libros.filter(l => {
      // 1. Filtro por categoría
      if (categoriaFiltro !== 'todos' && l.categoria !== categoriaFiltro) {
        return false;
      }

      // 2. Filtro solo disponibles
      if (soloDisponibles && l.ejemplaresDisponibles <= 0) {
        return false;
      }

      // 3. Filtro de búsqueda textual
      if (!q) return true;

      const coincideTitulo = l.titulo.toLowerCase().includes(q);
      const coincideAutor = l.autor.toLowerCase().includes(q);
      const coincideEditorial = l.editorial ? l.editorial.toLowerCase().includes(q) : false;
      const coincideCodigo = l.codigo.toLowerCase().includes(q);
      const coincideDescripcion = l.descripcion.toLowerCase().includes(q);
      const coincideTemas = l.temasClave.some(t => t.toLowerCase().includes(q));

      return coincideTitulo || coincideAutor || coincideEditorial || coincideCodigo || coincideDescripcion || coincideTemas;
    });
  }, [libros, busqueda, categoriaFiltro, soloDisponibles]);

  // Categorías presentes
  const categorias = [
    'todos',
    'Libros de Texto SEP / NEM',
    'Ficción y Novela',
    'Ciencia y Tecnología',
    'Historia y Geografía',
    'Lenguajes y Literatura',
    'Saberes y Pensamiento Científico',
    'Ética, Naturaleza y Sociedades',
    'De lo Humano y lo Comunitario'
  ];

  // Libros del alumno actualmente consultado
  const librosDelAlumno = useMemo(() => {
    if (!alumnoIdentificado) return [];
    return prestamos.filter(p => p.socioId === alumnoIdentificado.id && p.estado !== 'devuelto');
  }, [prestamos, alumnoIdentificado]);

  const pcDelAlumno = useMemo(() => {
    if (!alumnoIdentificado) return null;
    return computadoras.find(c => c.socioIdActual === alumnoIdentificado.id) || null;
  }, [computadoras, alumnoIdentificado]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col justify-between selection:bg-teal-500 selection:text-white">
      
      {/* 1. BARRA SUPERIOR DEL KIOSCO */}
      <header className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-500 via-emerald-400 to-teal-300 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/25">
              <Sparkles size={22} className="stroke-[2.5]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-white leading-none">
                  Kiosco<span className="text-teal-400">Escolar</span>
                </h1>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Autoservicio con Chip
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium truncate max-w-[220px] sm:max-w-md mt-0.5">
                {escuelaActiva ? escuelaActiva.nombre : 'Biblioteca Escolar Digital'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Reloj Digital */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-teal-400">
              <Clock size={14} />
              <span>{horaActual}</span>
            </div>

            {/* Pantalla Completa */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title={esPantallaCompleta ? 'Salir de pantalla completa' : 'Modo Pantalla Completa para Kiosco'}
            >
              {esPantallaCompleta ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>

            {onSalir && (
              <button
                onClick={onSalir}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Administración</span>
              </button>
            )}
          </div>

        </div>
      </header>

      {/* 2. BARRA DINÁMICA DE LECTURA DE CHIP NFC / RFID */}
      <div className="bg-gradient-to-r from-teal-900/60 via-slate-900 to-emerald-900/60 border-b border-teal-800/40 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/40">
              <ScanLine size={18} className="animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="text-xs">
              <span className="font-black text-teal-300 block">Lector de Chip Escolar Listo</span>
              <span className="text-[11px] text-slate-400">
                Acerca tu tarjeta/llavero en cualquier momento para pedir libros, usar computadoras o devolver.
              </span>
            </div>
          </div>

          {/* Formulario rápido y simulación */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <form onSubmit={(e) => { e.preventDefault(); procesarChip(uidInput); }} className="relative flex-1 md:w-64">
              <input
                type="text"
                value={uidInput}
                onChange={(e) => setUidInput(e.target.value)}
                placeholder="UID de tarjeta o código..."
                className="w-full pl-3 pr-16 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700 text-xs font-mono text-white placeholder-slate-500 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              />
              <button
                type="submit"
                disabled={cargandoChip || !uidInput.trim()}
                className="absolute right-1 top-1 bottom-1 px-2.5 bg-teal-600 hover:bg-teal-500 disabled:opacity-40 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1"
              >
                {cargandoChip ? <Loader2 size={12} className="animate-spin" /> : <CreditCard size={12} />}
                <span>Validar</span>
              </button>
            </form>

            {socios.length > 0 && (
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    procesarChip(e.target.value);
                    e.target.value = '';
                  }
                }}
                defaultValue=""
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs max-w-[130px] truncate"
                title="Simular pase de tarjeta de un alumno registrado"
              >
                <option value="" disabled>Simular chip...</option>
                {socios.slice(0, 6).map(s => (
                  <option key={s.id} value={s.nfcUid || s.matricula}>
                    {s.nombre.split(' ')[0]} ({s.gradoGrupo.split(' ')[0]})
                  </option>
                ))}
              </select>
            )}
          </div>

        </div>

        {/* Notificación de Estado */}
        {mensajeChip && (
          <div className="max-w-7xl mx-auto mt-2">
            <div className={`p-2.5 rounded-xl text-xs font-bold flex items-center justify-between gap-2 animate-in fade-in ${
              mensajeChip.tipo === 'exito' ? 'bg-emerald-950/90 text-emerald-200 border border-emerald-700/60' :
              mensajeChip.tipo === 'error' ? 'bg-rose-950/90 text-rose-200 border border-rose-700/60' :
              'bg-teal-950/90 text-teal-200 border border-teal-700/60'
            }`}>
              <div className="flex items-center gap-2">
                {mensajeChip.tipo === 'exito' ? (
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                ) : mensajeChip.tipo === 'error' ? (
                  <AlertCircle size={16} className="text-rose-400 shrink-0" />
                ) : (
                  <Loader2 size={16} className="animate-spin text-teal-400 shrink-0" />
                )}
                <span>{mensajeChip.texto}</span>
              </div>
              <button onClick={() => setMensajeChip(null)} className="text-slate-400 hover:text-white">
                <X size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 3. PESTAÑAS DE NAVEGACIÓN PRINCIPAL DEL KIOSCO */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
          
          <button
            onClick={() => setPestana('catalogo')}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2.5 text-sm font-black transition-all ${
              pestana === 'catalogo' 
                ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-500/25 scale-[1.02]' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <BookOpen size={18} />
            <span>Buscar & Pedir Libros</span>
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-black/25">
              {libros.length}
            </span>
          </button>

          <button
            onClick={() => setPestana('computo')}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2.5 text-sm font-black transition-all ${
              pestana === 'computo' 
                ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-500/25 scale-[1.02]' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Laptop size={18} />
            <span>Centro de Cómputo</span>
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-black/25">
              {computadoras.filter(c => c.estado === 'disponible').length} Libres
            </span>
          </button>

          <button
            onClick={() => setPestana('mis_prestamos')}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2.5 text-sm font-black transition-all ${
              pestana === 'mis_prestamos' 
                ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-500/25 scale-[1.02]' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <RotateCcw size={18} />
            <span>Mis Préstamos & Devolución con Chip</span>
            {alumnoIdentificado && (
              <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-black/25">
                {librosDelAlumno.length}
              </span>
            )}
          </button>

        </div>
      </div>

      {/* 4. CONTENIDO PRINCIPAL POR PESTAÑA */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 flex-1">
        
        {/* ======================================================== */}
        {/* PESTAÑA A: BÚSQUEDA Y PRÉSTAMO DE LIBROS CON CHIP         */}
        {/* ======================================================== */}
        {pestana === 'catalogo' && (
          <div className="space-y-6">
            
            {/* Buscador Exhaustivo */}
            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" size={24} />
                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar por TÍTULO, AUTOR, EDITORIAL, DESCRIPCIÓN o CÓDIGO del libro..."
                  className="w-full pl-13 pr-10 py-4 bg-slate-900/90 rounded-2xl border-2 border-slate-700 text-white placeholder-slate-500 font-bold text-base focus:border-teal-400 focus:outline-none transition-all shadow-inner"
                />
                {busqueda && (
                  <button 
                    onClick={() => setBusqueda('')} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Filtros de Categoría y Disponibilidad */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                  {categorias.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategoriaFiltro(cat)}
                      className={`px-3 py-1.5 rounded-xl transition-all capitalize ${
                        categoriaFiltro === cat 
                          ? 'bg-teal-500 text-slate-950 font-black shadow-xs' 
                          : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {cat === 'todos' ? 'Todos los Libros' : cat}
                    </button>
                  ))}
                </div>

                <label className="flex items-center gap-2 text-xs font-bold text-teal-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={soloDisponibles}
                    onChange={(e) => setSoloDisponibles(e.target.checked)}
                    className="w-4 h-4 rounded text-teal-500 focus:ring-0 bg-slate-900 border-slate-700"
                  />
                  <span>Solo ejemplares disponibles para préstamo</span>
                </label>
              </div>
            </div>

            {/* Grid de Libros */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {librosFiltrados.map((libro) => {
                const disponible = libro.ejemplaresDisponibles > 0;

                return (
                  <div
                    key={libro.id}
                    className="bg-slate-950 rounded-3xl p-6 border border-slate-800 hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between group shadow-lg"
                  >
                    <div className="space-y-3">
                      
                      {/* Tags Superiores */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-teal-950 text-teal-300 border border-teal-800/50 truncate max-w-[65%]">
                          {libro.categoria}
                        </span>
                        
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                          disponible ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'
                        }`}>
                          {disponible ? `${libro.ejemplaresDisponibles} en estante` : 'Agotado temporal'}
                        </span>
                      </div>

                      {/* Título & Autor */}
                      <div>
                        <h3 className="text-lg font-black text-white group-hover:text-teal-300 transition-colors leading-snug">
                          {libro.titulo}
                        </h3>
                        <p className="text-xs font-bold text-slate-400 mt-1">
                          {libro.autor} {libro.editorial ? `· ${libro.editorial}` : ''}
                        </p>
                      </div>

                      {/* Sinopsis / Descripción */}
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                        {libro.descripcion}
                      </p>

                      {/* Ubicación y Código */}
                      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                        <span>Código: <strong className="text-slate-300">{libro.codigo}</strong></span>
                        <span>Ubicación: <strong className="text-teal-400">{libro.ubicacionEstante || 'Estante Central'}</strong></span>
                      </div>

                    </div>

                    {/* Botón Táctil de Préstamo con Chip */}
                    <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center gap-2">
                      {disponible ? (
                        <button
                          onClick={() => {
                            setModalPrestarLibro(libro);
                            setMensajeChip({
                              texto: `Por favor acerca tu tarjeta o chip para confirmar el préstamo de "${libro.titulo}".`,
                              tipo: 'info'
                            });
                          }}
                          className="flex-1 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs rounded-2xl shadow-md shadow-teal-500/20 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                        >
                          <CreditCard size={16} />
                          <span>Pedir prestado con mi Chip</span>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="flex-1 py-3 bg-slate-900 text-slate-600 font-bold text-xs rounded-2xl cursor-not-allowed"
                        >
                          Sin ejemplares disponibles
                        </button>
                      )}

                      {libro.enlaceLecturaDigital && (
                        <a
                          href={libro.enlaceLecturaDigital}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 bg-slate-900 hover:bg-slate-800 text-teal-400 rounded-2xl transition-colors"
                          title="Leer versión oficial en línea"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

            {librosFiltrados.length === 0 && (
              <div className="p-12 text-center bg-slate-950 rounded-3xl border border-slate-800 space-y-3">
                <BookOpen size={36} className="mx-auto text-slate-600" />
                <h4 className="text-lg font-black text-white">No se encontraron libros con ese criterio</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Prueba buscando otra palabra clave, autor o borra los filtros de categoría para ver todos los ejemplares.
                </p>
                <button
                  onClick={() => { setBusqueda(''); setCategoriaFiltro('todos'); setSoloDisponibles(false); }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all"
                >
                  Restablecer Búsqueda
                </button>
              </div>
            )}

          </div>
        )}

        {/* ======================================================== */}
        {/* PESTAÑA B: CENTRO DE CÓMPUTO & RESERVA CON CHIP           */}
        {/* ======================================================== */}
        {pestana === 'computo' && (
          <div className="space-y-6">
            
            <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-white">Centro de Cómputo e Investigación</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  Acerca tu tarjeta escolar para reservar una computadora libre durante 60 minutos para proyectos escolares. Al terminar, vuelve a pasar tu chip para liberarla.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold">
                <div className="px-3.5 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300">
                  {computadoras.filter(c => c.estado === 'disponible').length} Libres
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-teal-950 border border-teal-800 text-teal-300">
                  {computadoras.filter(c => c.estado === 'en_uso').length} En Uso
                </div>
              </div>
            </div>

            {/* Grid de Computadoras */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {computadoras.map((pc) => {
                const libre = pc.estado === 'disponible';
                const enUso = pc.estado === 'en_uso';

                return (
                  <div
                    key={pc.id}
                    className={`rounded-3xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                      libre ? 'bg-slate-950 border-slate-800 hover:border-emerald-500/50' :
                      enUso ? 'bg-teal-950/20 border-teal-800/60' :
                      'bg-slate-950 border-slate-800 opacity-60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                          libre ? 'bg-emerald-500/20 text-emerald-400' : 'bg-teal-500/20 text-teal-300'
                        }`}>
                          <Laptop size={20} />
                        </div>

                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                          libre ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-teal-950 text-teal-300 border border-teal-800'
                        }`}>
                          {libre ? 'Disponible' : 'Ocupada'}
                        </span>
                      </div>

                      <h4 className="text-lg font-black text-white">{pc.nombre}</h4>
                      <p className="text-xs text-slate-400">{pc.modelo} · {pc.sistemaOperativo}</p>

                      {enUso && (
                        <div className="mt-3 p-3 bg-teal-950/40 rounded-xl border border-teal-800/40 text-xs">
                          <span className="text-[11px] text-teal-400 block font-bold">En sesión:</span>
                          <span className="font-bold text-white">{pc.socioNombreActual || 'Alumno'}</span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Tiempo asignado: 60 min</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800">
                      {libre ? (
                        <button
                          onClick={() => {
                            setModalReservarPC(pc);
                            setMensajeChip({
                              texto: `Por favor acerca tu tarjeta o chip para activar la "${pc.nombre}".`,
                              tipo: 'info'
                            });
                          }}
                          className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-2xl shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                        >
                          <CreditCard size={15} />
                          <span>Tomar prestada esta PC con Chip</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setModalLiberarPC(pc);
                            setMensajeChip({
                              texto: `Acerca la tarjeta o chip del alumno para liberar la "${pc.nombre}".`,
                              tipo: 'info'
                            });
                          }}
                          className="w-full py-2.5 bg-slate-900 hover:bg-rose-950 hover:text-rose-200 border border-slate-800 text-slate-400 font-bold text-xs rounded-2xl transition-all flex items-center justify-center gap-2"
                        >
                          <RotateCcw size={14} />
                          <span>Liberar Estación con Chip</span>
                        </button>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* PESTAÑA C: MIS PRÉSTAMOS & DEVOLUCIONES CON CHIP           */}
        {/* ======================================================== */}
        {pestana === 'mis_prestamos' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            
            <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/30">
                <CreditCard size={32} />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Devolución y Estado de Cuenta con Chip</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto mt-1">
                  Acerca tu credencial escolar al lector. La pantalla reconocerá tus datos, te mostrará tus libros en mano y podrás devolverlos en 1 solo paso.
                </p>
              </div>

              {/* Si hay alumno reconocido */}
              {alumnoIdentificado ? (
                <div className="pt-4 border-t border-slate-800 text-left space-y-6 animate-in fade-in">
                  
                  {/* Ficha del Alumno */}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-teal-400">Alumno Identificado</span>
                      <h4 className="text-lg font-black text-white">{alumnoIdentificado.nombre}</h4>
                      <p className="text-xs text-slate-400">
                        {alumnoIdentificado.gradoGrupo} · Matrícula: <strong className="font-mono text-slate-300">{alumnoIdentificado.matricula}</strong>
                      </p>
                    </div>

                    <button
                      onClick={() => setAlumnoIdentificado(null)}
                      className="text-xs text-slate-500 hover:text-white underline"
                    >
                      Consultar otro alumno
                    </button>
                  </div>

                  {/* Computadora actual si tiene */}
                  {pcDelAlumno && (
                    <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Laptop size={24} className="text-teal-400" />
                        <div>
                          <span className="text-xs font-bold text-teal-200">Tienes activa la {pcDelAlumno.nombre}</span>
                          <span className="text-[11px] text-slate-400 block">Tiempo asignado: 60 minutos</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const updated = storageService.liberarComputadora(pcDelAlumno.id, activeEscuelaId);
                          setComputadoras(updated);
                          reproducirSonido('devolver');
                          setMensajeChip({ texto: `¡${pcDelAlumno.nombre} liberada con éxito!`, tipo: 'exito' });
                        }}
                        className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                      >
                        Liberar Computadora Ahora
                      </button>
                    </div>
                  )}

                  {/* Libros en Posesión */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-black text-slate-300 uppercase tracking-wide">
                      Libros Pendientes de Devolución ({librosDelAlumno.length})
                    </h5>

                    {librosDelAlumno.length === 0 ? (
                      <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-800 text-center text-emerald-300 text-xs font-bold">
                        🎉 ¡Excelente! No tienes ningún libro pendiente de devolución actualmente.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {librosDelAlumno.map(p => (
                          <div
                            key={p.id}
                            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                          >
                            <div>
                              <span className="text-[10px] font-mono font-bold text-slate-500">{p.codigoPrestamo}</span>
                              <h6 className="text-base font-black text-white">{p.libroTitulo}</h6>
                              <p className="text-xs text-slate-400">Prestado: {p.fechaPrestamo} · Entrega límite: <strong className="text-teal-300">{p.fechaDevolucionEsperada}</strong></p>
                            </div>

                            <button
                              onClick={() => handleDevolverLibroDirecto(p.id)}
                              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 self-end sm:self-auto"
                            >
                              <RotateCcw size={15} />
                              <span>Confirmar Devolución de este Libro</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-slate-900/60 border border-dashed border-slate-800 text-slate-500 text-xs font-medium">
                  💡 Pasa tu tarjeta por el sensor USB o introduce tu UID arriba para ver tus libros prestados.
                </div>
              )}

            </div>

          </div>
        )}

      </main>

      {/* 5. MODAL DE PRÉSTAMO DE LIBRO CON CONFIRMACIÓN DE CHIP */}
      {modalPrestarLibro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-teal-500/50 shadow-2xl relative text-center space-y-5">
            
            <button
              onClick={() => setModalPrestarLibro(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-xl"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 rounded-3xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/40">
              <BookOpen size={32} />
            </div>

            <div>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Confirmación de Préstamo
              </span>
              <h3 className="text-xl font-black text-white mt-1">{modalPrestarLibro.titulo}</h3>
              <p className="text-xs text-slate-400">{modalPrestarLibro.autor} · {modalPrestarLibro.nivel}</p>
            </div>

            {/* Animación de Espera de Chip */}
            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-teal-500/60 text-center space-y-3">
              <div className="relative w-12 h-12 mx-auto flex items-center justify-center text-teal-400">
                <ScanLine size={32} className="animate-pulse" />
              </div>
              <h4 className="text-sm font-black text-white">Acerca tu tarjeta o chip escolar</h4>
              <p className="text-xs text-slate-400">
                Pasa tu credencial por el lector para confirmar el préstamo de 7 días.
              </p>

              {/* Selector de prueba rápida y campo de escáner en modal */}
              <div className="pt-2 flex items-center justify-center gap-2 max-w-sm mx-auto">
                {socios.length > 0 && (
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        procesarChip(e.target.value);
                      }
                    }}
                    defaultValue=""
                    className="px-3 py-2 bg-slate-800 border border-slate-700 text-teal-300 text-xs font-bold rounded-xl"
                  >
                    <option value="" disabled>Pase de tarjeta de prueba...</option>
                    {socios.map(s => (
                      <option key={s.id} value={s.nfcUid || s.matricula}>
                        {s.nombre} ({s.gradoGrupo})
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setModalPrestarLibro(null)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl"
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 6. MODAL DE ÉXITO DE PRÉSTAMO */}
      {prestamoExitosoInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-emerald-500/50 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-2xl font-black text-white">¡Préstamo Confirmado!</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              El libro <strong className="text-teal-300">"{prestamoExitosoInfo.libro}"</strong> ha sido prestado con éxito a <strong className="text-white">{prestamoExitosoInfo.alumno}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1">
              <span className="text-slate-400 block">Fecha límite de devolución:</span>
              <span className="text-base font-black text-emerald-400 font-mono">{prestamoExitosoInfo.fechaDev}</span>
            </div>

            <button
              onClick={() => setPrestamoExitosoInfo(null)}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
            >
              ¡Entendido, gracias!
            </button>
          </div>
        </div>
      )}

      {/* 7. MODAL DE CONFIRMACIÓN DE COMPUTADORA */}
      {modalReservarPC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-teal-500/50 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/40">
              <Laptop size={32} />
            </div>

            <h3 className="text-xl font-black text-white">Reservar {modalReservarPC.nombre}</h3>
            <p className="text-xs text-slate-400">
              {modalReservarPC.modelo} · Tiempo de sesión: 60 minutos
            </p>

            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-teal-500/60 text-center space-y-3">
              <ScanLine size={28} className="mx-auto text-teal-400 animate-pulse" />
              <h4 className="text-xs font-black text-white">Acerca tu tarjeta escolar al lector</h4>
              <p className="text-[11px] text-slate-400">Para asignarte esta máquina de inmediato por 60 minutos.</p>

              {socios.length > 0 && (
                <div className="pt-2 flex justify-center">
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        procesarChip(e.target.value);
                      }
                    }}
                    defaultValue=""
                    className="px-3 py-2 bg-slate-800 border border-slate-700 text-teal-300 text-xs font-bold rounded-xl max-w-xs"
                  >
                    <option value="" disabled>Pase de tarjeta de prueba...</option>
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
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* 8. MODAL DE LIBERAR COMPUTADORA */}
      {modalLiberarPC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-rose-500/50 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/40">
              <RotateCcw size={32} />
            </div>

            <h3 className="text-xl font-black text-white">Liberar {modalLiberarPC.nombre}</h3>
            <p className="text-xs text-slate-400">
              Actualmente en uso por: <strong className="text-white">{modalLiberarPC.socioNombreActual || 'Alumno'}</strong>
            </p>

            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-rose-500/60 text-center space-y-3">
              <ScanLine size={28} className="mx-auto text-rose-400 animate-pulse" />
              <h4 className="text-xs font-black text-white">Pasa tu chip escolar para confirmar</h4>
              <p className="text-[11px] text-slate-400">La estación quedará libre para otros compañeros.</p>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => {
                    const updated = storageService.liberarComputadora(modalLiberarPC.id, activeEscuelaId);
                    setComputadoras(updated);
                    reproducirSonido('devolver');
                    setMensajeChip({ texto: `¡Estación liberada con éxito!`, tipo: 'exito' });
                    setModalLiberarPC(null);
                  }}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Confirmar Liberación Ahora
                </button>
              </div>
            </div>

            <button
              onClick={() => setModalLiberarPC(null)}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* FOOTER DISCRETO */}
      <footer className="py-4 border-t border-slate-800/80 text-center text-xs text-slate-500">
        Biblioteca Cloud · Kiosco de Autoservicio Escolar conectado a asistencia.iaparamaestros.org
      </footer>

    </div>
  );
};
