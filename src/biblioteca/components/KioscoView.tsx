import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  Monitor, 
  User, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  ArrowLeft,
  BookMarked,
  Layers,
  GraduationCap
} from 'lucide-react';
import { Libro, Prestamo, Socio, Computadora } from '../types';
import { ChipScannerBar } from './ChipScannerBar';
import { reproducirSonido } from '../services/chipService';
import { RotateCcw } from 'lucide-react';

interface KioscoViewProps {
  libros: Libro[];
  prestamos: Prestamo[];
  socios: Socio[];
  computadoras: Computadora[];
  escuelaId?: string;
  onVolverAdmin: () => void;
  onAsignarPC: (pcId: string, socioId: string, socioNombre: string) => void;
  onLiberarPC?: (pcId: string) => void;
  onDevolverPrestamo?: (prestamoId: string) => void;
}

export const KioscoView: React.FC<KioscoViewProps> = ({
  libros,
  prestamos,
  socios,
  computadoras,
  escuelaId = 'esc-101',
  onVolverAdmin,
  onAsignarPC,
  onLiberarPC,
  onDevolverPrestamo
}) => {
  const [seccion, setSeccion] = useState<'catalogo' | 'mis_prestamos' | 'pcs'>('catalogo');
  const [busqueda, setBusqueda] = useState('');
  const [matriculaConsulta, setMatriculaConsulta] = useState('');
  const [socioConsultado, setSocioConsultado] = useState<Socio | null>(null);

  // Consulta de préstamos por matrícula o nombre
  const handleConsultarMatricula = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matriculaConsulta.trim()) return;

    const query = matriculaConsulta.trim().toLowerCase();
    const encontrado = socios.find(s => 
      s.matricula.toLowerCase() === query || 
      s.nombre.toLowerCase().includes(query) ||
      (s.nfcUid && s.nfcUid.toLowerCase() === query)
    );

    setSocioConsultado(encontrado || null);
  };

  const handleSocioIdentificadoConChip = (s: Socio) => {
    setSocioConsultado(s);
    setSeccion('mis_prestamos');
  };

  const handleDevolver = (prestamoId: string) => {
    if (onDevolverPrestamo) {
      reproducirSonido('devolver');
      onDevolverPrestamo(prestamoId);
    }
  };

  const pcActualDelSocio = useMemo(() => {
    if (!socioConsultado) return null;
    return computadoras.find(c => c.socioIdActual === socioConsultado.id) || null;
  }, [socioConsultado, computadoras]);

  const misPrestamosActuales = useMemo(() => {
    if (!socioConsultado) return [];
    return prestamos.filter(p => p.socioId === socioConsultado.id && p.estado !== 'devuelto');
  }, [socioConsultado, prestamos]);

  // Filtrado catálogo kiosco
  const librosKiosco = useMemo(() => {
    return libros.filter(l => {
      if (!busqueda.trim()) return true;
      const b = busqueda.toLowerCase();
      return l.titulo.toLowerCase().includes(b) || l.autor.toLowerCase().includes(b) || l.categoria.toLowerCase().includes(b);
    });
  }, [libros, busqueda]);

  const pcsLibres = computadoras.filter(pc => pc.estado === 'disponible');

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Encabezado Kiosco con botón de salida */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-teal-200 text-xs font-bold mb-2">
              <Sparkles size={14} />
              <span>Kiosco de Autoservicio para Estudiantes y Docentes</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              ¿Qué deseas consultar hoy en la Biblioteca?
            </h1>
            <p className="text-teal-100 text-xs sm:text-sm mt-1 max-w-xl">
              Busca libros disponibles, consulta tus fechas de entrega o solicita una estación de cómputo para investigar.
            </p>
          </div>

          <button
            onClick={onVolverAdmin}
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold border border-white/20 transition-all self-end sm:self-auto"
          >
            <ArrowLeft size={14} />
            <span>Volver a Administración</span>
          </button>
        </div>

        {/* Pestañas de Acción del Kiosco */}
        <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-white/15">
          <button
            onClick={() => setSeccion('catalogo')}
            className={`py-3 px-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              seccion === 'catalogo' ? 'bg-white text-teal-900 shadow-md' : 'bg-white/10 text-white hover:bg-white/15'
            }`}
          >
            <BookOpen size={18} />
            <span>Explorar Libros ({libros.length})</span>
          </button>

          <button
            onClick={() => setSeccion('mis_prestamos')}
            className={`py-3 px-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              seccion === 'mis_prestamos' ? 'bg-white text-teal-900 shadow-md' : 'bg-white/10 text-white hover:bg-white/15'
            }`}
          >
            <User size={18} />
            <span>Mis Préstamos</span>
          </button>

          <button
            onClick={() => setSeccion('pcs')}
            className={`py-3 px-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              seccion === 'pcs' ? 'bg-white text-teal-900 shadow-md' : 'bg-white/10 text-white hover:bg-white/15'
            }`}
          >
            <Monitor size={18} />
            <span>Computadoras ({pcsLibres.length} Libres)</span>
          </button>
        </div>
      </div>

      {/* SECCIÓN 1: CATÁLOGO EN KIOSCO */}
      {seccion === 'catalogo' && (
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Escribe el nombre de un libro, autor o materia..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 bg-white text-base font-bold text-slate-800 placeholder-slate-400 focus:border-teal-500 shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {librosKiosco.map(l => (
              <div key={l.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800">
                      {l.categoria}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      l.ejemplaresDisponibles > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {l.ejemplaresDisponibles > 0 ? `${l.ejemplaresDisponibles} en estante` : 'Prestado'}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-900 text-base leading-snug mb-1">{l.titulo}</h3>
                  <p className="text-xs font-semibold text-slate-500 mb-2">{l.autor}</p>
                  <p className="text-xs text-slate-600 line-clamp-2">{l.descripcion}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-500">📍 {l.ubicacionEstante || 'Solo Digital'}</span>
                  {l.enlaceLecturaDigital && (
                    <a
                      href={l.enlaceLecturaDigital}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-teal-700 hover:underline"
                    >
                      Leer Digital →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECCIÓN 2: CONSULTAR MIS PRÉSTAMOS */}
      {seccion === 'mis_prestamos' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-md mx-auto text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
              <User size={28} />
            </div>
            <h3 className="text-xl font-black text-slate-900">Consulta de Préstamos Personales</h3>
            <p className="text-xs text-slate-500">Ingresa tu número de matrícula, código de credencial o nombre.</p>

            <form onSubmit={handleConsultarMatricula} className="flex gap-2">
              <input
                type="text"
                required
                value={matriculaConsulta}
                onChange={(e) => setMatriculaConsulta(e.target.value)}
                placeholder="ej. ALU-2026-001 o Mateo"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 font-bold text-sm focus:border-teal-500"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-sm"
              >
                Buscar
              </button>
            </form>
          </div>

          {socioConsultado && (
            <div className="pt-6 border-t border-slate-100 space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <h4 className="font-bold text-base text-slate-900">{socioConsultado.nombre}</h4>
                  <p className="text-xs text-slate-500">{socioConsultado.matricula} · {socioConsultado.gradoGrupo}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-medium">Libros sin entregar</span>
                  <span className="text-lg font-black text-teal-700">{misPrestamosActuales.length}</span>
                </div>
              </div>

              {misPrestamosActuales.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-sm font-medium bg-emerald-50/50 rounded-2xl border border-emerald-100 text-emerald-800">
                  🎉 ¡Felicidades! No tienes ningún libro pendiente de devolución actualmente.
                </div>
              ) : (
                <div className="space-y-3">
                  {misPrestamosActuales.map(p => {
                    const esVencido = p.estado === 'vencido';

                    return (
                      <div
                        key={p.id}
                        className={`p-4 rounded-2xl border flex items-center justify-between ${
                          esVencido ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-white border-slate-200'
                        }`}
                      >
                        <div>
                          <span className="text-[10px] font-mono font-bold text-slate-400">{p.codigoPrestamo}</span>
                          <h5 className="font-black text-sm text-slate-900">{p.libroTitulo}</h5>
                          <p className="text-xs text-slate-500">Prestado el {p.fechaPrestamo}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Fecha Límite</span>
                            <span className={`font-mono font-bold text-sm ${esVencido ? 'text-rose-600' : 'text-slate-800'}`}>
                              {p.fechaDevolucionEsperada}
                            </span>
                            {esVencido && (
                              <span className="block text-[10px] font-bold text-rose-600">¡Vencido! Por favor entrégalo.</span>
                            )}
                          </div>

                          {onDevolverPrestamo && (
                            <button
                              onClick={() => handleDevolver(p.id)}
                              className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-xs flex items-center gap-1 transition-all"
                              title="Devolver libro"
                            >
                              <RotateCcw size={13} />
                              <span>Devolver</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* SECCIÓN 3: ESTACIONES DE CÓMPUTO */}
      {seccion === 'pcs' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="text-center max-w-lg mx-auto mb-6">
            <h3 className="text-xl font-black text-slate-900">Estaciones Multimedia para Alumnos</h3>
            <p className="text-xs text-slate-500">Selecciona una máquina disponible para comenzar tu sesión de estudio.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {computadoras.map(pc => {
              const libre = pc.estado === 'disponible';

              return (
                <div
                  key={pc.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    libre ? 'bg-emerald-50/30 border-emerald-200' : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Monitor size={24} className={libre ? 'text-emerald-600' : 'text-slate-400'} />
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      libre ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {libre ? 'Libre' : 'Ocupada'}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base">{pc.nombre}</h4>
                  <p className="text-xs text-slate-500">{pc.sistemaOperativo}</p>

                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    {libre ? (
                      <span className="text-xs text-emerald-700 font-bold block text-center">
                        ✓ Puedes solicitarla con el bibliotecario
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 block text-center">
                        Ocupada por {pc.socioNombreActual}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
