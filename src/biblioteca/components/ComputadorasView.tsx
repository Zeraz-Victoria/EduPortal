import React, { useState } from 'react';
import { 
  Monitor, 
  UserCheck, 
  Clock, 
  Power, 
  Wrench, 
  Plus, 
  CheckCircle, 
  X, 
  AlertCircle,
  Wifi,
  Sparkles
} from 'lucide-react';
import { Computadora, Socio, Prestamo, Libro } from '../types';
import { ChipScannerBar } from './ChipScannerBar';
import { ChipActionModal } from './ChipActionModal';

interface ComputadorasViewProps {
  computadoras: Computadora[];
  socios: Socio[];
  prestamos?: Prestamo[];
  libros?: Libro[];
  escuelaId?: string;
  onAsignarPC: (pcId: string, socioId: string, socioNombre: string, minutos?: number) => void;
  onLiberarPC: (pcId: string) => void;
  onCambiarEstadoPC: (pcId: string, estado: 'disponible' | 'en_uso' | 'mantenimiento') => void;
  onDevolverPrestamo?: (prestamoId: string) => void;
  onCrearPrestamoRapido?: (libroId: string, socio: Socio, dias?: number) => void;
}

export const ComputadorasView: React.FC<ComputadorasViewProps> = ({
  computadoras,
  socios,
  prestamos = [],
  libros = [],
  escuelaId = 'esc-101',
  onAsignarPC,
  onLiberarPC,
  onCambiarEstadoPC,
  onDevolverPrestamo = () => {},
  onCrearPrestamoRapido = () => {}
}) => {
  const [pcSeleccionada, setPcSeleccionada] = useState<Computadora | null>(null);
  const [socioIdSel, setSocioIdSel] = useState(socios[0]?.id || '');
  const [minutosSel, setMinutosSel] = useState<number>(60);
  const [socioChipModal, setSocioChipModal] = useState<Socio | null>(null);

  const disponiblesCount = computadoras.filter(c => c.estado === 'disponible').length;
  const enUsoCount = computadoras.filter(c => c.estado === 'en_uso').length;
  const mantenimientoCount = computadoras.filter(c => c.estado === 'mantenimiento').length;

  const handleAsignar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pcSeleccionada) return;
    const socio = socios.find(s => s.id === socioIdSel);
    if (!socio) return;

    onAsignarPC(pcSeleccionada.id, socio.id, socio.nombre, minutosSel);
    setPcSeleccionada(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Barra de Lectura de Chip NFC / RFID */}
      <ChipScannerBar
        escuelaId={escuelaId}
        onSocioIdentificado={(s) => setSocioChipModal(s)}
        sociosDisponibles={socios}
      />

      {/* Banner Superior & Métricas */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-6 shadow-sm border border-slate-700/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded bg-teal-500/20 text-teal-400">
              <Monitor size={18} />
            </span>
            <h2 className="text-xl font-black">Centro de Cómputo e Investigación Escolar</h2>
          </div>
          <p className="text-xs text-slate-300 max-w-xl">
            Control de terminales multimedia para consulta del catálogo digital, tareas escolares y proyectos NEM.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-bold">
          <div className="bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/10 text-center">
            <span className="block text-emerald-400 text-lg font-black">{disponiblesCount}</span>
            <span className="text-[10px] text-slate-300 uppercase">Disponibles</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/10 text-center">
            <span className="block text-amber-400 text-lg font-black">{enUsoCount}</span>
            <span className="text-[10px] text-slate-300 uppercase">En Uso</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/10 text-center">
            <span className="block text-slate-400 text-lg font-black">{mantenimientoCount}</span>
            <span className="text-[10px] text-slate-300 uppercase">Mantenimiento</span>
          </div>
        </div>
      </div>

      {/* Grid de Estaciones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {computadoras.map((pc) => {
          const esDisponible = pc.estado === 'disponible';
          const esEnUso = pc.estado === 'en_uso';
          const esMantenimiento = pc.estado === 'mantenimiento';

          return (
            <div
              key={pc.id}
              className={`rounded-2xl border p-5 shadow-sm transition-all duration-200 flex flex-col relative overflow-hidden bg-white ${
                esDisponible ? 'border-slate-200 hover:border-emerald-300 hover:shadow-md' :
                esEnUso ? 'border-teal-200 bg-teal-50/20' :
                'border-slate-200 opacity-75'
              }`}
            >
              {/* Barra superior de status */}
              <div className={`h-1.5 w-full absolute top-0 left-0 ${
                esDisponible ? 'bg-emerald-500' :
                esEnUso ? 'bg-amber-500' :
                'bg-slate-400'
              }`} />

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm shadow-xs ${
                    esDisponible ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    esEnUso ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    <Monitor size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base">{pc.nombre}</h3>
                    <p className="text-[11px] text-slate-400 font-medium">{pc.modelo}</p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                  esDisponible ? 'bg-emerald-100 text-emerald-800' :
                  esEnUso ? 'bg-amber-100 text-amber-800' :
                  'bg-slate-200 text-slate-700'
                }`}>
                  {esEnUso ? 'En Uso' : pc.estado}
                </span>
              </div>

              {/* Contenido / Estado actual */}
              <div className="my-3 flex-1 text-xs">
                {esEnUso ? (
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-amber-900 font-bold">
                      <UserCheck size={14} className="text-amber-600" />
                      <span>{pc.socioNombreActual}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-amber-800 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> Inicio: {pc.horaInicioUso}
                      </span>
                      <span>Límite: {pc.tiempoLimiteMinutos} min</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-500 text-xs bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex items-center gap-1.5 mb-1 font-semibold text-slate-700">
                      <Wifi size={13} className="text-emerald-500" />
                      <span>{pc.sistemaOperativo}</span>
                    </div>
                    <p className="text-[11px] text-slate-400">{pc.notas || 'Equipo libre para asignación inmediata.'}</p>
                  </div>
                )}
              </div>

              {/* Footer con Acciones */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                {esEnUso ? (
                  <button
                    onClick={() => onLiberarPC(pc.id)}
                    className="w-full flex items-center justify-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2 rounded-xl shadow-xs transition-colors"
                  >
                    <Power size={13} />
                    <span>Liberar / Finalizar Sesión</span>
                  </button>
                ) : (
                  <>
                    <button
                      disabled={esMantenimiento}
                      onClick={() => {
                        setPcSeleccionada(pc);
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold text-xs py-2 rounded-xl shadow-xs transition-colors"
                    >
                      <UserCheck size={13} />
                      <span>Asignar a Alumno</span>
                    </button>

                    <button
                      onClick={() => onCambiarEstadoPC(pc.id, esMantenimiento ? 'disponible' : 'mantenimiento')}
                      className={`p-2 rounded-xl border text-xs transition-colors ${
                        esMantenimiento ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-50 text-slate-400 hover:text-slate-700 border-slate-200'
                      }`}
                      title={esMantenimiento ? 'Marcar como Operativa' : 'Enviar a Mantenimiento'}
                    >
                      <Wrench size={14} />
                    </button>
                  </>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Modal Asignar Computadora */}
      {pcSeleccionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Asignar {pcSeleccionada.nombre}</h3>
                <p className="text-xs text-slate-500">Selecciona el estudiante o docente que ocupará el equipo.</p>
              </div>
              <button onClick={() => setPcSeleccionada(null)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAsignar} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Usuario / Socio *</label>
                <select
                  required
                  value={socioIdSel}
                  onChange={(e) => setSocioIdSel(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:border-teal-500 font-bold text-xs"
                >
                  {socios.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.nombre} ({s.matricula} · {s.gradoGrupo})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Duración Estimada de Sesión</label>
                <div className="grid grid-cols-3 gap-2">
                  {[30, 60, 90].map(mins => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setMinutosSel(mins)}
                      className={`py-2 px-3 rounded-xl border text-center font-bold text-xs transition-colors ${
                        minutosSel === mins ? 'bg-teal-50 border-teal-500 text-teal-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {mins} minutos
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setPcSeleccionada(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-md shadow-teal-600/20"
                >
                  Confirmar Asignación
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Acción Rápida con Chip Identificado */}
      <ChipActionModal
        abierto={Boolean(socioChipModal)}
        onCerrar={() => setSocioChipModal(null)}
        socio={socioChipModal}
        prestamosDelSocio={socioChipModal ? prestamos.filter(p => p.socioId === socioChipModal.id) : []}
        computadoraDelSocio={socioChipModal ? computadoras.find(c => c.socioIdActual === socioChipModal.id) || null : null}
        computadorasDisponibles={computadoras.filter(c => c.estado === 'disponible')}
        librosDisponibles={libros.filter(l => l.ejemplaresDisponibles > 0)}
        onDevolverPrestamo={onDevolverPrestamo}
        onAsignarPC={onAsignarPC}
        onLiberarPC={onLiberarPC}
        onCrearPrestamoRapido={onCrearPrestamoRapido}
      />

    </div>
  );
};
