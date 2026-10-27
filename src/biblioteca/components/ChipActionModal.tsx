import React, { useState } from 'react';
import { 
  CreditCard, 
  BookOpen, 
  Monitor, 
  RotateCcw, 
  CheckCircle, 
  Clock, 
  Plus, 
  X, 
  UserCheck, 
  Sparkles, 
  AlertCircle,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { Socio, Prestamo, Computadora, Libro } from '../types';
import { reproducirSonido } from '../services/chipService';

interface ChipActionModalProps {
  abierto: boolean;
  onCerrar: () => void;
  socio: Socio | null;
  prestamosDelSocio: Prestamo[];
  computadoraDelSocio: Computadora | null;
  computadorasDisponibles: Computadora[];
  librosDisponibles: Libro[];
  onDevolverPrestamo: (prestamoId: string) => void;
  onAsignarPC: (pcId: string, socioId: string, socioNombre: string, minutos?: number) => void;
  onLiberarPC: (pcId: string) => void;
  onCrearPrestamoRapido: (libroId: string, socio: Socio, dias?: number) => void;
}

export const ChipActionModal: React.FC<ChipActionModalProps> = ({
  abierto,
  onCerrar,
  socio,
  prestamosDelSocio,
  computadoraDelSocio,
  computadorasDisponibles,
  librosDisponibles,
  onDevolverPrestamo,
  onAsignarPC,
  onLiberarPC,
  onCrearPrestamoRapido
}) => {
  const [modoPrestar, setModoPrestar] = useState(false);
  const [libroSeleccionadoId, setLibroSeleccionadoId] = useState('');
  const [diasPrestamo, setDiasPrestamo] = useState(7);
  const [minutosPC, setMinutosPC] = useState(60);

  if (!abierto || !socio) return null;

  const handleDevolver = (prestamoId: string) => {
    reproducirSonido('devolver');
    onDevolverPrestamo(prestamoId);
  };

  const handleAsignarComputadora = (pcId: string) => {
    reproducirSonido('asignar');
    onAsignarPC(pcId, socio.id, socio.nombre, minutosPC);
  };

  const handleLiberarComputadora = (pcId: string) => {
    reproducirSonido('devolver');
    onLiberarPC(pcId);
  };

  const handleConfirmarPrestamo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!libroSeleccionadoId) return;
    reproducirSonido('exito');
    onCrearPrestamoRapido(libroSeleccionadoId, socio, diasPrestamo);
    setModoPrestar(false);
    setLibroSeleccionadoId('');
  };

  const prestamosActivos = prestamosDelSocio.filter(p => p.estado !== 'devuelto');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[92vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera con Chip NFC Identificado */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100">
          <div className="flex items-center gap-4">
            {socio.fotoUrl ? (
              <img 
                src={socio.fotoUrl} 
                alt={socio.nombre} 
                className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-500 shadow-sm"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center font-black text-2xl shadow-md shadow-teal-500/20">
                {socio.nombre.charAt(0)}
              </div>
            )}

            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide bg-teal-50 text-teal-700 border border-teal-200">
                  <CreditCard size={12} />
                  <span>Chip Reconocido</span>
                </span>
                {socio.nfcUid && (
                  <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    UID: {socio.nfcUid}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                {socio.nombre}
              </h2>

              <p className="text-xs text-slate-500 font-medium">
                <span className="font-bold text-slate-700">{socio.gradoGrupo}</span> · Matrícula: <span className="font-mono text-slate-600">{socio.matricula}</span> · {socio.rol === 'docente' ? 'Docente' : 'Alumno'}
              </p>
            </div>
          </div>

          <button
            onClick={onCerrar}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenido Modular con Scroll */}
        <div className="py-5 overflow-y-auto space-y-6 flex-1 pr-1">
          
          {/* SECCIÓN 1: PRÉSTAMOS DE LIBROS ACTIVOS */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-wide">
                <BookOpen size={16} className="text-teal-600" />
                <span>Libros en Posesión ({prestamosActivos.length})</span>
              </div>

              {!modoPrestar && (
                <button
                  onClick={() => setModoPrestar(true)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 hover:bg-teal-50 px-2.5 py-1 rounded-lg transition-colors"
                >
                  <Plus size={14} />
                  <span>Prestar otro libro</span>
                </button>
              )}
            </div>

            {/* Formulario rápido para prestar nuevo libro */}
            {modoPrestar && (
              <form onSubmit={handleConfirmarPrestamo} className="p-4 bg-teal-50/50 rounded-2xl border border-teal-200 text-xs font-medium space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between font-bold text-teal-900">
                  <span>Seleccionar libro para prestar con chip:</span>
                  <button type="button" onClick={() => setModoPrestar(false)} className="text-slate-400 hover:text-slate-700">
                    <X size={14} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-slate-600 font-bold mb-1">Título del Libro</label>
                    <select
                      value={libroSeleccionadoId}
                      onChange={(e) => setLibroSeleccionadoId(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:border-teal-500"
                    >
                      <option value="">-- Elige un ejemplar disponible --</option>
                      {librosDisponibles.map(l => (
                        <option key={l.id} value={l.id}>
                          {l.titulo} ({l.ejemplaresDisponibles} disp.) - {l.nivel}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 font-bold mb-1">Días de préstamo</label>
                    <select
                      value={diasPrestamo}
                      onChange={(e) => setDiasPrestamo(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:border-teal-500"
                    >
                      <option value={3}>3 días</option>
                      <option value={7}>7 días (1 semana)</option>
                      <option value={14}>14 días (2 semanas)</option>
                      <option value={30}>30 días (1 mes)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setModoPrestar(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-200 rounded-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-lg shadow-xs"
                  >
                    Confirmar Préstamo
                  </button>
                </div>
              </form>
            )}

            {prestamosActivos.length === 0 ? (
              <div className="p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-200 text-center text-xs text-slate-500">
                Este alumno no tiene libros pendientes de devolución en este momento.
              </div>
            ) : (
              <div className="space-y-2">
                {prestamosActivos.map((p) => {
                  const esVencido = p.estado === 'vencido';
                  return (
                    <div 
                      key={p.id}
                      className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-teal-200 transition-colors shadow-2xs"
                    >
                      <div className="space-y-1 max-w-[70%]">
                        <div className="font-bold text-slate-900 text-xs truncate">
                          {p.libroTitulo}
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2">
                          <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                            {p.codigoPrestamo}
                          </span>
                          <span>·</span>
                          <span className={esVencido ? 'text-rose-600 font-bold' : 'text-slate-600'}>
                            Entrega: {p.fechaDevolucionEsperada}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDevolver(p.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-black rounded-xl transition-all"
                        title="Registrar devolución inmediata del libro con el chip"
                      >
                        <RotateCcw size={14} />
                        <span>Devolver Libro</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* SECCIÓN 2: CENTRO DE CÓMPUTO */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-wide">
              <Monitor size={16} className="text-teal-600" />
              <span>Acceso a Computadoras</span>
            </div>

            {computadoraDelSocio ? (
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-900 font-bold text-xs">
                    <Laptop size={16} className="text-teal-600" />
                    <span>Estación en uso: {computadoraDelSocio.nombre} ({computadoraDelSocio.modelo})</span>
                  </div>
                  <p className="text-[11px] text-teal-700 mt-0.5">
                    Tiempo de uso asignado: {computadoraDelSocio.tiempoLimiteMinutos || 60} minutos
                  </p>
                </div>

                <button
                  onClick={() => handleLiberarComputadora(computadoraDelSocio.id)}
                  className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all"
                >
                  Liberar Computadora
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <p className="text-xs text-slate-600 font-medium">
                  El alumno no tiene computadora asignada. Puedes asignarle una terminal libre con su chip:
                </p>

                {computadorasDisponibles.length === 0 ? (
                  <p className="text-xs text-amber-700 font-bold">
                    ⚠️ Todas las computadoras se encuentran ocupadas o en mantenimiento en este momento.
                  </p>
                ) : (
                  <div className="flex flex-wrap items-center gap-2">
                    {computadorasDisponibles.slice(0, 4).map(pc => (
                      <button
                        key={pc.id}
                        onClick={() => handleAsignarComputadora(pc.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-teal-600 hover:text-white text-slate-700 border border-slate-200 hover:border-teal-600 rounded-xl text-xs font-bold transition-all shadow-2xs"
                      >
                        <Monitor size={13} />
                        <span>Asignar {pc.nombre}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

        {/* Footer del Modal */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Identificación mediante chip NFC / RFID conectado a asistencia.iaparamaestros.org</span>
          <button
            onClick={onCerrar}
            className="px-4 py-2 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-all"
          >
            Listo
          </button>
        </div>

      </div>
    </div>
  );
};
