import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  School, 
  Users, 
  BookOpen, 
  DollarSign, 
  Plus, 
  Search, 
  ExternalLink, 
  CheckCircle, 
  AlertTriangle, 
  PauseCircle, 
  Trash2, 
  Edit3, 
  Key, 
  RefreshCw, 
  TrendingUp, 
  X,
  Layers,
  ArrowRight
} from 'lucide-react';
import { EscuelaSaaS, PlanSaaS, EstadoEscuelaSaaS } from '../types';
import { storageService } from '../services/storageService';

interface SuperAdminViewProps {
  escuelas: EscuelaSaaS[];
  onActualizarEscuelas: () => void;
  onSeleccionarEscuela: (escuela: EscuelaSaaS) => void;
}

export const SuperAdminView: React.FC<SuperAdminViewProps> = ({
  escuelas,
  onActualizarEscuelas,
  onSeleccionarEscuela
}) => {
  const [busqueda, setBusqueda] = useState('');
  const [filtroPlan, setFiltroPlan] = useState<string>('todos');
  const [filtroEstado, setFiltroEstado] = useState<string>('todos');
  const [modalNuevaEscuela, setModalNuevaEscuela] = useState(false);

  // Form State
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoCct, setNuevoCct] = useState('');
  const [nuevoDirector, setNuevoDirector] = useState('');
  const [nuevoEmail, setNuevoEmail] = useState('');
  const [nuevoPassword, setNuevoPassword] = useState('escuela2026');
  const [nuevoTelefono, setNuevoTelefono] = useState('');
  const [nuevoPlan, setNuevoPlan] = useState<PlanSaaS>('pro');

  // Calcular métricas
  const metricas = useMemo(() => {
    return storageService.getMetricasGlobalesSaaS();
  }, [escuelas]);

  // Estimación de ingresos recurrentes
  const ingresosEstimados = useMemo(() => {
    return escuelas.reduce((acc, esc) => {
      if (esc.estado === 'suspendida') return acc;
      if (esc.plan === 'basico') return acc + 299;
      if (esc.plan === 'pro') return acc + 1499;
      if (esc.plan === 'institucional') return acc + 2799;
      return acc;
    }, 0);
  }, [escuelas]);

  const handleCrearEscuela = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoNombre.trim() || !nuevoEmail.trim()) return;

    const nueva: EscuelaSaaS = {
      id: `esc-${Date.now()}`,
      nombre: nuevoNombre.trim(),
      claveCct: nuevoCct.trim() || undefined,
      director: nuevoDirector.trim() || 'Director del Plantel',
      email: nuevoEmail.trim().toLowerCase(),
      telefono: nuevoTelefono.trim() || undefined,
      plan: nuevoPlan,
      estado: 'activa',
      fechaRegistro: new Date().toISOString().split('T')[0]
    };

    storageService.registrarNuevaEscuela(nueva, nuevoPassword);
    onActualizarEscuelas();
    setModalNuevaEscuela(false);

    // Reset
    setNuevoNombre('');
    setNuevoCct('');
    setNuevoDirector('');
    setNuevoEmail('');
    setNuevoTelefono('');
  };

  const handleCambiarPlan = (escuelaId: string, plan: PlanSaaS) => {
    storageService.actualizarPlanEscuela(escuelaId, plan);
    onActualizarEscuelas();
  };

  const handleCambiarEstado = (escuelaId: string, estado: EstadoEscuelaSaaS) => {
    storageService.cambiarEstadoEscuela(escuelaId, estado);
    onActualizarEscuelas();
  };

  const handleEliminar = (escuela: EscuelaSaaS) => {
    if (confirm(`¿Estás seguro de eliminar el plantel "${escuela.nombre}" del SaaS? Sus datos aislados se conservarán.`)) {
      storageService.eliminarEscuela(escuela.id);
      onActualizarEscuelas();
    }
  };

  const escuelasFiltradas = useMemo(() => {
    return escuelas.filter(e => {
      const matchBusqueda = !busqueda.trim() || (
        e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        e.director.toLowerCase().includes(busqueda.toLowerCase()) ||
        e.email.toLowerCase().includes(busqueda.toLowerCase()) ||
        (e.claveCct && e.claveCct.toLowerCase().includes(busqueda.toLowerCase()))
      );

      const matchPlan = filtroPlan === 'todos' || e.plan === filtroPlan;
      const matchEstado = filtroEstado === 'todos' || e.estado === filtroEstado;

      return matchBusqueda && matchPlan && matchEstado;
    });
  }, [escuelas, busqueda, filtroPlan, filtroEstado]);

  return (
    <div className="space-y-6">
      
      {/* Encabezado SuperAdmin Matriz */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Portal Maestro SuperAdmin
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                  Acceso Dueño SaaS
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Ecosistema centralizado con sincronización en vivo con <strong className="text-teal-300">asistencia.iaparamaestros.org</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setModalNuevaEscuela(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-md transition-all"
            >
              <Plus size={16} />
              <span>Alta de Nueva Escuela</span>
            </button>
          </div>
        </div>

        {/* Tarjetas de Métricas Ejecutivas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-6 pt-6 border-t border-slate-800/80">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
              <School size={12} className="text-teal-400" />
              Escuelas Conectadas
            </span>
            <div className="text-2xl font-black text-white mt-1">{metricas.totalEscuelas}</div>
            <p className="text-[10px] text-emerald-400 mt-0.5 font-semibold">
              {metricas.escuelasActivas} activas · {metricas.escuelasPrueba} en prueba
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
              <BookOpen size={12} className="text-cyan-400" />
              Acervo Total en Red
            </span>
            <div className="text-2xl font-black text-white mt-1">{metricas.totalLibrosGlobal}</div>
            <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">Títulos en todas las bibliotecas</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
              <TrendingUp size={12} className="text-amber-400" />
              Préstamos Registrados
            </span>
            <div className="text-2xl font-black text-amber-400 mt-1">{metricas.totalPrestamosGlobal}</div>
            <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">Circulaciones activas</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
              <DollarSign size={12} className="text-emerald-400" />
              Ingresos SaaS Estimados
            </span>
            <div className="text-2xl font-black text-emerald-400 mt-1">
              ${ingresosEstimados.toLocaleString()} MXN
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">Valor mensual de suscripciones</p>
          </div>
        </div>
      </div>

      {/* Controles de Búsqueda y Filtros de Escuelas */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar escuela por nombre, CCT, director o email..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs font-medium focus:border-slate-900"
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <select
            value={filtroPlan}
            onChange={(e) => setFiltroPlan(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-700"
          >
            <option value="todos">Todos los Planes</option>
            <option value="prueba">Prueba</option>
            <option value="basico">Básico</option>
            <option value="pro">Pro NEM</option>
            <option value="institucional">Institucional</option>
          </select>

          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-700"
          >
            <option value="todos">Todos los Estados</option>
            <option value="activa">Activa</option>
            <option value="prueba">En Prueba</option>
            <option value="suspendida">Suspendida</option>
          </select>
        </div>

      </div>

      {/* Tabla de Escuelas / Tenants */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-black text-slate-900 text-base">Directorio de Planteles Registrados en el SaaS</h3>
            <p className="text-xs text-slate-500">Cada plantel cuenta con su base de datos y catálogo aislado.</p>
          </div>
          <span className="text-xs font-bold text-slate-400">
            {escuelasFiltradas.length} escuelas encontradas
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-5">Plantel / Escuela</th>
                <th className="py-3.5 px-4">Director & Contacto</th>
                <th className="py-3.5 px-4">Plan SaaS</th>
                <th className="py-3.5 px-4 text-center">Estado</th>
                <th className="py-3.5 px-4 text-center">Libros / Préstamos</th>
                <th className="py-3.5 px-5 text-right">Acciones de SuperAdmin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {escuelasFiltradas.map((esc) => {
                const esActiva = esc.estado === 'activa';
                const esPrueba = esc.estado === 'prueba';
                const esSuspendida = esc.estado === 'suspendida';

                const librosCount = storageService.getLibros(esc.id).length;
                const prestamosCount = storageService.getPrestamos(esc.id).length;

                return (
                  <tr key={esc.id} className="hover:bg-slate-50/80 transition-colors">
                    
                    {/* Plantel */}
                    <td className="py-4 px-5">
                      <div className="font-black text-slate-900 text-sm">{esc.nombre}</div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {esc.claveCct ? `CCT: ${esc.claveCct}` : `ID: ${esc.id}`}
                      </div>
                    </td>

                    {/* Contacto */}
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-800">{esc.director}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{esc.email}</div>
                    </td>

                    {/* Plan */}
                    <td className="py-4 px-4">
                      <select
                        value={esc.plan}
                        onChange={(e) => handleCambiarPlan(esc.id, e.target.value as PlanSaaS)}
                        className="bg-slate-100 hover:bg-slate-200 font-bold text-[11px] px-2.5 py-1 rounded-lg border border-slate-200 text-slate-800 uppercase"
                      >
                        <option value="prueba">Prueba</option>
                        <option value="basico">Básico ($299)</option>
                        <option value="pro">Pro NEM ($1,499)</option>
                        <option value="institucional">Institucional ($2,799)</option>
                      </select>
                    </td>

                    {/* Estado */}
                    <td className="py-4 px-4 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                        esActiva ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        esPrueba ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {esActiva && <CheckCircle size={11} />}
                        {esPrueba && <AlertTriangle size={11} />}
                        {esSuspendida && <PauseCircle size={11} />}
                        <span>{esc.estado}</span>
                      </span>
                    </td>

                    {/* Estadísticas de la escuela */}
                    <td className="py-4 px-4 text-center">
                      <span className="font-bold text-slate-800">{librosCount}</span>
                      <span className="text-slate-400 text-[10px]"> lib / </span>
                      <span className="font-bold text-teal-700">{prestamosCount}</span>
                      <span className="text-slate-400 text-[10px]"> prést.</span>
                    </td>

                    {/* Acciones */}
                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Ver como esta escuela */}
                        <button
                          onClick={() => onSeleccionarEscuela(esc)}
                          className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-xs transition-colors"
                          title="Cambiar al espacio de trabajo de este plantel"
                        >
                          <span>Administrar</span>
                          <ArrowRight size={13} />
                        </button>

                        {/* Suspender / Activar */}
                        <button
                          onClick={() => handleCambiarEstado(esc.id, esActiva ? 'suspendida' : 'activa')}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            esActiva ? 'text-amber-600 hover:bg-amber-50 border-amber-200' : 'text-emerald-600 hover:bg-emerald-50 border-emerald-200'
                          }`}
                          title={esActiva ? 'Suspender escuela' : 'Reactivar escuela'}
                        >
                          <PauseCircle size={15} />
                        </button>

                        {/* Eliminar */}
                        <button
                          onClick={() => handleEliminar(esc)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Eliminar plantel"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para Crear Escuela desde SuperAdmin */}
      {modalNuevaEscuela && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900">Dar de Alta Nuevo Plantel Escolar</h3>
                <p className="text-xs text-slate-500">Crea un espacio SaaS aislado e independiente con su propio catálogo.</p>
              </div>
              <button onClick={() => setModalNuevaEscuela(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCrearEscuela} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Nombre Oficial del Plantel *</label>
                <input
                  type="text"
                  required
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  placeholder="ej. Telesecundaria Leona Vicario"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Clave CCT</label>
                  <input
                    type="text"
                    value={nuevoCct}
                    onChange={(e) => setNuevoCct(e.target.value)}
                    placeholder="30ETV0988K"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-slate-900 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Plan de Suscripción</label>
                  <select
                    value={nuevoPlan}
                    onChange={(e) => setNuevoPlan(e.target.value as PlanSaaS)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-slate-900"
                  >
                    <option value="prueba">Prueba 30 días</option>
                    <option value="basico">Básico ($299/mes)</option>
                    <option value="pro">Pro NEM ($1,499/año)</option>
                    <option value="institucional">Institucional ($2,799/año)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Director o Encargado *</label>
                <input
                  type="text"
                  required
                  value={nuevoDirector}
                  onChange={(e) => setNuevoDirector(e.target.value)}
                  placeholder="ej. Mtra. Guillermina Morales"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Email de Acceso *</label>
                  <input
                    type="email"
                    required
                    value={nuevoEmail}
                    onChange={(e) => setNuevoEmail(e.target.value)}
                    placeholder="directora@escuela.edu.mx"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Contraseña Inicial</label>
                  <input
                    type="text"
                    value={nuevoPassword}
                    onChange={(e) => setNuevoPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-slate-900 font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalNuevaEscuela(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-bold shadow-md"
                >
                  Guardar y Activar Escuela
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
