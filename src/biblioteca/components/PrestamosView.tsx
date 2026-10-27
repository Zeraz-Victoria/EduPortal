import React, { useState, useMemo } from 'react';
import { 
  BookmarkCheck, 
  Plus, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  RotateCcw, 
  X, 
  BookOpen, 
  User, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Prestamo, Libro, Socio, EstadoPrestamo } from '../types';

interface PrestamosViewProps {
  prestamos: Prestamo[];
  libros: Libro[];
  socios: Socio[];
  onCrearPrestamo: (nuevo: Omit<Prestamo, 'id' | 'codigoPrestamo'>) => void;
  onDevolverPrestamo: (id: string) => void;
  libroSeleccionadoParaPrestar?: Libro | null;
  onLimpiarSeleccionLibro?: () => void;
}

export const PrestamosView: React.FC<PrestamosViewProps> = ({
  prestamos,
  libros,
  socios,
  onCrearPrestamo,
  onDevolverPrestamo,
  libroSeleccionadoParaPrestar,
  onLimpiarSeleccionLibro
}) => {
  const [filtroEstado, setFiltroEstado] = useState<'todos' | EstadoPrestamo>('todos');
  const [busqueda, setBusqueda] = useState('');
  const [modalAbierto, setModalAbierto] = useState(Boolean(libroSeleccionadoParaPrestar));

  // Form State
  const [libroIdSel, setLibroIdSel] = useState(libroSeleccionadoParaPrestar?.id || '');
  const [socioIdSel, setSocioIdSel] = useState(socios[0]?.id || '');
  const [diasPrestamo, setDiasPrestamo] = useState<number>(7);
  const [notas, setNotas] = useState('');

  // Sincronizar si viene libro preseleccionado
  React.useEffect(() => {
    if (libroSeleccionadoParaPrestar) {
      setLibroIdSel(libroSeleccionadoParaPrestar.id);
      setModalAbierto(true);
    }
  }, [libroSeleccionadoParaPrestar]);

  const librosDisponibles = useMemo(() => {
    return libros.filter(l => l.ejemplaresDisponibles > 0 || l.id === libroIdSel);
  }, [libros, libroIdSel]);

  const handleCrearPrestamo = (e: React.FormEvent) => {
    e.preventDefault();
    const libro = libros.find(l => l.id === libroIdSel);
    const socio = socios.find(s => s.id === socioIdSel);

    if (!libro || !socio) return;

    const fechaHoy = new Date();
    const fechaDev = new Date();
    fechaDev.setDate(fechaHoy.getDate() + Number(diasPrestamo));

    onCrearPrestamo({
      libroId: libro.id,
      libroTitulo: libro.titulo,
      socioId: socio.id,
      socioNombre: socio.nombre,
      socioMatricula: socio.matricula,
      socioRol: socio.rol,
      fechaPrestamo: fechaHoy.toISOString().split('T')[0],
      fechaDevolucionEsperada: fechaDev.toISOString().split('T')[0],
      estado: 'activo',
      notas: notas.trim() || undefined
    });

    setModalAbierto(false);
    setNotas('');
    if (onLimpiarSeleccionLibro) onLimpiarSeleccionLibro();
  };

  // Filtrado de préstamos
  const prestamosFiltrados = useMemo(() => {
    return prestamos.filter(p => {
      const matchEstado = filtroEstado === 'todos' || p.estado === filtroEstado;
      const matchBusqueda = !busqueda.trim() || (
        p.libroTitulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.socioNombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.socioMatricula.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.codigoPrestamo.toLowerCase().includes(busqueda.toLowerCase())
      );
      return matchEstado && matchBusqueda;
    });
  }, [prestamos, filtroEstado, busqueda]);

  const activosCount = prestamos.filter(p => p.estado === 'activo').length;
  const vencidosCount = prestamos.filter(p => p.estado === 'vencido').length;
  const devueltosCount = prestamos.filter(p => p.estado === 'devuelto').length;

  return (
    <div className="space-y-6">
      
      {/* Tarjetas de Métricas Rápidas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div 
          onClick={() => setFiltroEstado('activo')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            filtroEstado === 'activo' ? 'bg-teal-50 border-teal-300 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Préstamos Activos</span>
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
              <Clock size={16} />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{activosCount}</div>
          <p className="text-[11px] text-slate-500 mt-1">Libros actualmente en circulación</p>
        </div>

        <div 
          onClick={() => setFiltroEstado('vencido')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            filtroEstado === 'vencido' ? 'bg-rose-50 border-rose-300 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Préstamos Vencidos</span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${vencidosCount > 0 ? 'bg-rose-100 text-rose-700 animate-bounce' : 'bg-slate-100 text-slate-400'}`}>
              <AlertTriangle size={16} />
            </div>
          </div>
          <div className={`text-2xl font-black ${vencidosCount > 0 ? 'text-rose-600' : 'text-slate-900'}`}>{vencidosCount}</div>
          <p className="text-[11px] text-slate-500 mt-1">Requieren devolución inmediata</p>
        </div>

        <div 
          onClick={() => setFiltroEstado('devuelto')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            filtroEstado === 'devuelto' ? 'bg-emerald-50 border-emerald-300 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Historial Devueltos</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 size={16} />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{devueltosCount}</div>
          <p className="text-[11px] text-slate-500 mt-1">Reintegrados al acervo con éxito</p>
        </div>

      </div>

      {/* Barra de Filtros y Búsqueda */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Buscador */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            id="input-buscar-prestamos"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por libro, nombre de alumno/docente, matrícula o código..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-sm font-medium"
          />
        </div>

        {/* Filtros de Pestaña de Estado */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setFiltroEstado('todos')}
            className={`px-3 py-2 rounded-xl transition-colors ${filtroEstado === 'todos' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Todos ({prestamos.length})
          </button>
          <button
            onClick={() => setFiltroEstado('activo')}
            className={`px-3 py-2 rounded-xl transition-colors ${filtroEstado === 'activo' ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-700 hover:bg-teal-100'}`}
          >
            Activos ({activosCount})
          </button>
          <button
            onClick={() => setFiltroEstado('vencido')}
            className={`px-3 py-2 rounded-xl transition-colors ${filtroEstado === 'vencido' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-700 hover:bg-rose-100'}`}
          >
            Vencidos ({vencidosCount})
          </button>
          <button
            onClick={() => setFiltroEstado('devuelto')}
            className={`px-3 py-2 rounded-xl transition-colors ${filtroEstado === 'devuelto' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}
          >
            Devueltos ({devueltosCount})
          </button>

          <button
            onClick={() => {
              if (librosDisponibles.length > 0 && !libroIdSel) {
                setLibroIdSel(librosDisponibles[0].id);
              }
              setModalAbierto(true);
            }}
            id="btn-nuevo-prestamo"
            className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-sm shadow-teal-600/20 ml-2 whitespace-nowrap"
          >
            <Plus size={16} />
            <span>Nuevo Préstamo</span>
          </button>
        </div>

      </div>

      {/* Lista de Préstamos */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {prestamosFiltrados.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-xs">
            No se encontraron registros de préstamos con los filtros seleccionados.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Código</th>
                  <th className="py-3 px-4">Libro Prestado</th>
                  <th className="py-3 px-4">Lector / Socio</th>
                  <th className="py-3 px-4">Fecha Préstamo</th>
                  <th className="py-3 px-4">Fecha Devolución</th>
                  <th className="py-3 px-4 text-center">Estado</th>
                  <th className="py-3 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {prestamosFiltrados.map((p) => {
                  const hoy = new Date().toISOString().split('T')[0];
                  const esVencido = p.estado === 'vencido';
                  const esActivo = p.estado === 'activo';
                  const esDevuelto = p.estado === 'devuelto';

                  return (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-700">{p.codigoPrestamo}</td>
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="font-bold text-slate-900 text-sm truncate">{p.libroTitulo}</div>
                        {p.notas && <div className="text-slate-400 text-[11px] truncate italic">{p.notas}</div>}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-800">{p.socioNombre}</div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                          <span className="font-mono">{p.socioMatricula}</span>
                          <span className={`px-1.5 py-0.2 rounded text-[9px] uppercase font-bold ${
                            p.socioRol === 'docente' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {p.socioRol}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-mono text-[11px]">{p.fechaPrestamo}</td>
                      <td className="py-3.5 px-4 font-mono text-[11px]">
                        <span className={esVencido ? 'text-rose-600 font-bold' : 'text-slate-700 font-bold'}>
                          {p.fechaDevolucionEsperada}
                        </span>
                        {esVencido && (
                          <span className="block text-[10px] text-rose-500 font-bold">
                            ¡{p.diasAtraso || 1} días de retraso!
                          </span>
                        )}
                        {esDevuelto && p.fechaDevolucionReal && (
                          <span className="block text-[10px] text-emerald-600">
                            Devuelto el {p.fechaDevolucionReal}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          esActivo ? 'bg-teal-50 text-teal-700 border border-teal-200' :
                          esVencido ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                          'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}>
                          {esActivo && <Clock size={12} />}
                          {esVencido && <AlertTriangle size={12} />}
                          {esDevuelto && <CheckCircle2 size={12} />}
                          <span className="capitalize">{p.estado}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        {(esActivo || esVencido) ? (
                          <button
                            onClick={() => onDevolverPrestamo(p.id)}
                            className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs transition-colors"
                          >
                            <RotateCcw size={13} />
                            <span>Registrar Devolución</span>
                          </button>
                        ) : (
                          <span className="text-slate-400 text-[11px] font-bold italic">Concluido</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Nuevo Préstamo */}
      {modalAbierto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900">Registrar Salida / Préstamo</h3>
                <p className="text-xs text-slate-500">Asigna un ejemplar disponible a un alumno o docente.</p>
              </div>
              <button 
                onClick={() => {
                  setModalAbierto(false);
                  if (onLimpiarSeleccionLibro) onLimpiarSeleccionLibro();
                }} 
                className="text-slate-400 hover:text-slate-600"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCrearPrestamo} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Libro a Prestar *</label>
                <select
                  required
                  value={libroIdSel}
                  onChange={(e) => setLibroIdSel(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:border-teal-500 text-xs font-bold"
                >
                  <option value="" disabled>Selecciona un libro disponible...</option>
                  {librosDisponibles.map(l => (
                    <option key={l.id} value={l.id}>
                      [{l.codigo}] {l.titulo} — {l.ejemplaresDisponibles} disp.
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Lector / Socio Solicitante *</label>
                <select
                  required
                  value={socioIdSel}
                  onChange={(e) => setSocioIdSel(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:border-teal-500 text-xs font-bold"
                >
                  {socios.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.nombre} ({s.matricula} · {s.gradoGrupo})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Plazo de Devolución</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { dias: 3, label: '3 Días (Express)' },
                    { dias: 7, label: '7 Días (Semanal)' },
                    { dias: 14, label: '14 Días (Quincenal)' }
                  ].map(op => (
                    <button
                      key={op.dias}
                      type="button"
                      onClick={() => setDiasPrestamo(op.dias)}
                      className={`py-2 px-3 rounded-xl border text-center font-bold text-xs transition-colors ${
                        diasPrestamo === op.dias ? 'bg-teal-50 border-teal-500 text-teal-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {op.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Notas o Propósito de Lectura</label>
                <textarea
                  rows={2}
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  placeholder="ej. Taller de lectura, proyecto de ciencias NEM, etc."
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setModalAbierto(false);
                    if (onLimpiarSeleccionLibro) onLimpiarSeleccionLibro();
                  }}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!libroIdSel || !socioIdSel}
                  className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold shadow-md shadow-teal-600/20"
                >
                  Confirmar Préstamo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
