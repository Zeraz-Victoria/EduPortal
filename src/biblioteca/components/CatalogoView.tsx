import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  BookOpen, 
  ExternalLink, 
  Layers, 
  Filter, 
  BookMarked, 
  Tag, 
  LayoutGrid, 
  List, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  XCircle, 
  X,
  FileText
} from 'lucide-react';
import { Libro, CategoriaLibro, NivelEscolar, FormatoRecurso } from '../types';
import { CATEGORIAS_LIBROS } from '../constants';

interface CatalogoViewProps {
  libros: Libro[];
  onGuardarLibro: (libro: Libro) => void;
  onEliminarLibro: (id: string) => void;
  onIniciarPrestamo: (libro: Libro) => void;
}

export const CatalogoView: React.FC<CatalogoViewProps> = ({
  libros,
  onGuardarLibro,
  onEliminarLibro,
  onIniciarPrestamo
}) => {
  // Filtros
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSel, setCategoriaSel] = useState<string>('todas');
  const [nivelSel, setNivelSel] = useState<string>('todos');
  const [formatoSel, setFormatoSel] = useState<string>('todos');
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [vistaModo, setVistaModo] = useState<'grid' | 'tabla'>('grid');

  // Modales
  const [modalAbierto, setModalAbierto] = useState(false);
  const [libroEnEdicion, setLibroEnEdicion] = useState<Libro | null>(null);
  const [libroDetalle, setLibroDetalle] = useState<Libro | null>(null);

  // Form State
  const [formTitulo, setFormTitulo] = useState('');
  const [formAutor, setFormAutor] = useState('');
  const [formCategoria, setFormCategoria] = useState<CategoriaLibro>('Libros de Texto SEP / NEM');
  const [formNivel, setFormNivel] = useState<NivelEscolar>('1° Secundaria');
  const [formEditorial, setFormEditorial] = useState('');
  const [formAnio, setFormAnio] = useState(2024);
  const [formFormato, setFormFormato] = useState<FormatoRecurso>('ambos');
  const [formTotales, setFormTotales] = useState(5);
  const [formDisponibles, setFormDisponibles] = useState(5);
  const [formUbicacion, setFormUbicacion] = useState('');
  const [formEnlace, setFormEnlace] = useState('');
  const [formDescripcion, setFormDescripcion] = useState('');
  const [formTemas, setFormTemas] = useState('');

  const abrirModalNuevo = () => {
    setLibroEnEdicion(null);
    setFormTitulo('');
    setFormAutor('');
    setFormCategoria('Libros de Texto SEP / NEM');
    setFormNivel('1° Secundaria');
    setFormEditorial('SEP / CONALITEG');
    setFormAnio(new Date().getFullYear());
    setFormFormato('ambos');
    setFormTotales(5);
    setFormDisponibles(5);
    setFormUbicacion('Estante A');
    setFormEnlace('');
    setFormDescripcion('');
    setFormTemas('NEM, Proyectos');
    setModalAbierto(true);
  };

  const abrirModalEditar = (l: Libro) => {
    setLibroEnEdicion(l);
    setFormTitulo(l.titulo);
    setFormAutor(l.autor);
    setFormCategoria(l.categoria);
    setFormNivel(l.nivel);
    setFormEditorial(l.editorial || '');
    setFormAnio(l.anio);
    setFormFormato(l.formato);
    setFormTotales(l.ejemplaresTotales);
    setFormDisponibles(l.ejemplaresDisponibles);
    setFormUbicacion(l.ubicacionEstante || '');
    setFormEnlace(l.enlaceLecturaDigital || '');
    setFormDescripcion(l.descripcion);
    setFormTemas(l.temasClave.join(', '));
    setModalAbierto(true);
  };

  const guardarLibroHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitulo.trim() || !formAutor.trim()) return;

    const temasArray = formTemas.split(',').map(t => t.trim()).filter(Boolean);

    const libroToSave: Libro = {
      id: libroEnEdicion ? libroEnEdicion.id : `lib-${Date.now()}`,
      codigo: libroEnEdicion ? libroEnEdicion.codigo : `LIB-${Date.now().toString().slice(-5)}`,
      titulo: formTitulo.trim(),
      autor: formAutor.trim(),
      categoria: formCategoria,
      nivel: formNivel,
      editorial: formEditorial.trim() || undefined,
      anio: Number(formAnio) || 2024,
      formato: formFormato,
      ejemplaresTotales: Math.max(1, Number(formTotales)),
      ejemplaresDisponibles: Math.max(0, Math.min(Number(formTotales), Number(formDisponibles))),
      ubicacionEstante: formUbicacion.trim() || undefined,
      enlaceLecturaDigital: formEnlace.trim() || undefined,
      descripcion: formDescripcion.trim() || 'Sin descripción adicional.',
      temasClave: temasArray.length > 0 ? temasArray : ['General'],
      portadaColor: libroEnEdicion?.portadaColor || 'from-emerald-600 to-teal-800',
      fechaRegistro: libroEnEdicion?.fechaRegistro || new Date().toISOString().split('T')[0]
    };

    onGuardarLibro(libroToSave);
    setModalAbierto(false);
  };

  // Filtrado reactivo
  const librosFiltrados = useMemo(() => {
    return libros.filter(libro => {
      const matchBusqueda = !busqueda.trim() || (
        libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        libro.autor.toLowerCase().includes(busqueda.toLowerCase()) ||
        libro.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
        libro.temasClave.some(t => t.toLowerCase().includes(busqueda.toLowerCase()))
      );

      const matchCategoria = categoriaSel === 'todas' || libro.categoria === categoriaSel;
      const matchNivel = nivelSel === 'todos' || libro.nivel === nivelSel;
      const matchFormato = formatoSel === 'todos' || (
        formatoSel === 'digital' ? (libro.formato === 'digital' || libro.formato === 'ambos') :
        formatoSel === 'fisico' ? (libro.formato === 'fisico' || libro.formato === 'ambos') : true
      );
      const matchDisponibles = !soloDisponibles || libro.ejemplaresDisponibles > 0;

      return matchBusqueda && matchCategoria && matchNivel && matchFormato && matchDisponibles;
    });
  }, [libros, busqueda, categoriaSel, nivelSel, formatoSel, soloDisponibles]);

  return (
    <div className="space-y-6">
      
      {/* Barra de Filtros y Búsqueda Superior */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Buscador */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              id="input-buscar-libros"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por título, autor, código o tema clave (ej. NEM, STEAM, Biología)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-sm font-medium transition-all"
            />
            {busqueda && (
              <button
                onClick={() => setBusqueda('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Acciones y Vista */}
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setVistaModo('grid')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${vistaModo === 'grid' ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                title="Vista en tarjetas"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setVistaModo('tabla')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${vistaModo === 'tabla' ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                title="Vista en tabla"
              >
                <List size={18} />
              </button>
            </div>

            <button
              onClick={abrirModalNuevo}
              id="btn-agregar-libro"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm shadow-teal-600/25 transition-all"
            >
              <Plus size={16} />
              <span>Nuevo Libro</span>
            </button>
          </div>
        </div>

        {/* Fila de Filtros Desplegables */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
            <Filter size={12} />
            <span>Filtros:</span>
          </div>

          {/* Categoría */}
          <select
            value={categoriaSel}
            onChange={(e) => setCategoriaSel(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 focus:border-teal-500"
          >
            <option value="todas">Todas las Categorías</option>
            {CATEGORIAS_LIBROS.map(c => (
              <option key={c.nombre} value={c.nombre}>{c.nombre}</option>
            ))}
          </select>

          {/* Nivel */}
          <select
            value={nivelSel}
            onChange={(e) => setNivelSel(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 focus:border-teal-500"
          >
            <option value="todos">Todos los Grados / Niveles</option>
            <option value="1° Secundaria">1° de Secundaria</option>
            <option value="2° Secundaria">2° de Secundaria</option>
            <option value="3° Secundaria">3° de Secundaria</option>
            <option value="Telesecundaria">Telesecundaria</option>
            <option value="Docentes">Material para Docentes</option>
            <option value="General">General / Literatura</option>
          </select>

          {/* Formato */}
          <select
            value={formatoSel}
            onChange={(e) => setFormatoSel(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 focus:border-teal-500"
          >
            <option value="todos">Todos los formatos</option>
            <option value="digital">Digital (Lectura en línea / PDF)</option>
            <option value="fisico">Físico en biblioteca</option>
          </select>

          {/* Toggle Solo Disponibles */}
          <label className="flex items-center gap-1.5 cursor-pointer select-none bg-slate-50 hover:bg-slate-100 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-colors ml-auto">
            <input
              type="checkbox"
              checked={soloDisponibles}
              onChange={(e) => setSoloDisponibles(e.target.checked)}
              className="rounded text-teal-600 focus:ring-teal-500"
            />
            <span className="font-semibold text-slate-700">Solo con ejemplares disponibles</span>
          </label>
        </div>
      </div>

      {/* Contador de Resultados */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Mostrando <strong className="text-slate-800">{librosFiltrados.length}</strong> de {libros.length} títulos</span>
        {(busqueda || categoriaSel !== 'todas' || nivelSel !== 'todos' || formatoSel !== 'todos' || soloDisponibles) && (
          <button
            onClick={() => {
              setBusqueda('');
              setCategoriaSel('todas');
              setNivelSel('todos');
              setFormatoSel('todos');
              setSoloDisponibles(false);
            }}
            className="text-teal-600 hover:text-teal-800 font-bold underline"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Grid de Libros */}
      {vistaModo === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {librosFiltrados.map((libro) => {
            const disponible = libro.ejemplaresDisponibles > 0;

            return (
              <div
                key={libro.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Barra superior de color */}
                <div className={`h-2 w-full bg-gradient-to-r ${libro.portadaColor || 'from-teal-600 to-emerald-700'}`} />

                <div className="p-5 flex flex-col flex-1">
                  
                  {/* Encabezado de la Tarjeta */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {libro.codigo}
                    </span>
                    
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      disponible ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {disponible ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      {disponible ? `${libro.ejemplaresDisponibles} disp.` : 'Agotado'}
                    </span>
                  </div>

                  {/* Título y Autor */}
                  <h3 
                    onClick={() => setLibroDetalle(libro)}
                    className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 cursor-pointer leading-tight mb-1"
                  >
                    {libro.titulo}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3">{libro.autor}</p>

                  {/* Badges de Categoría y Nivel */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                      {libro.categoria}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {libro.nivel}
                    </span>
                  </div>

                  {/* Descripción breve */}
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
                    {libro.descripcion}
                  </p>

                  {/* Enlace digital si existe */}
                  {libro.enlaceLecturaDigital && (
                    <div className="mb-4">
                      <a
                        href={libro.enlaceLecturaDigital}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-600 hover:text-teal-800 hover:underline"
                      >
                        <BookOpen size={13} />
                        <span>Leer edición oficial en línea</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  )}

                  {/* Footer con Acciones */}
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-400 font-medium">
                      Total: <span className="text-slate-700 font-bold">{libro.ejemplaresTotales}</span> ej.
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => abrirModalEditar(libro)}
                        className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Editar libro"
                      >
                        <Edit3 size={15} />
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`¿Eliminar "${libro.titulo}" del catálogo?`)) {
                            onEliminarLibro(libro.id);
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Eliminar libro"
                      >
                        <Trash2 size={15} />
                      </button>

                      <button
                        disabled={!disponible}
                        onClick={() => onIniciarPrestamo(libro)}
                        className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                          disponible
                            ? 'bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-300'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        <BookMarked size={13} />
                        <span>Prestar</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Vista en Tabla */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Código</th>
                  <th className="py-3 px-4">Título y Autor</th>
                  <th className="py-3 px-4">Categoría</th>
                  <th className="py-3 px-4">Nivel</th>
                  <th className="py-3 px-4 text-center">Ejemplares</th>
                  <th className="py-3 px-4">Ubicación</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {librosFiltrados.map((libro) => (
                  <tr key={libro.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-slate-600">{libro.codigo}</td>
                    <td className="py-3 px-4">
                      <div 
                        onClick={() => setLibroDetalle(libro)}
                        className="font-bold text-slate-900 hover:text-teal-700 cursor-pointer text-sm"
                      >
                        {libro.titulo}
                      </div>
                      <div className="text-slate-500 text-[11px]">{libro.autor}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-bold">
                        {libro.categoria}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{libro.nivel}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        libro.ejemplaresDisponibles > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {libro.ejemplaresDisponibles} / {libro.ejemplaresTotales}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500">{libro.ubicacionEstante || '—'}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          disabled={libro.ejemplaresDisponibles === 0}
                          onClick={() => onIniciarPrestamo(libro)}
                          className="px-2 py-1 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded font-bold text-[11px] disabled:opacity-50"
                        >
                          Prestar
                        </button>
                        <button
                          onClick={() => abrirModalEditar(libro)}
                          className="p-1 text-slate-400 hover:text-slate-700"
                        >
                          <Edit3 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal para Agregar o Editar Libro */}
      {modalAbierto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {libroEnEdicion ? 'Editar Libro en Catálogo' : 'Añadir Nuevo Libro al Catálogo'}
                </h3>
                <p className="text-xs text-slate-500">Completa la información bibliográfica y de inventario.</p>
              </div>
              <button onClick={() => setModalAbierto(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={guardarLibroHandler} className="space-y-4 text-xs font-medium">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Título del Libro *</label>
                  <input
                    type="text"
                    required
                    value={formTitulo}
                    onChange={(e) => setFormTitulo(e.target.value)}
                    placeholder="ej. Nuestro Libro de Proyectos (1°)"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Autor o Entidad Editora *</label>
                  <input
                    type="text"
                    required
                    value={formAutor}
                    onChange={(e) => setFormAutor(e.target.value)}
                    placeholder="ej. SEP / Gabriel García Márquez"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Categoría</label>
                  <select
                    value={formCategoria}
                    onChange={(e) => setFormCategoria(e.target.value as CategoriaLibro)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                  >
                    {CATEGORIAS_LIBROS.map(c => (
                      <option key={c.nombre} value={c.nombre}>{c.nombre}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Nivel Escolar</label>
                  <select
                    value={formNivel}
                    onChange={(e) => setFormNivel(e.target.value as NivelEscolar)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                  >
                    <option value="1° Secundaria">1° Secundaria</option>
                    <option value="2° Secundaria">2° Secundaria</option>
                    <option value="3° Secundaria">3° Secundaria</option>
                    <option value="Telesecundaria">Telesecundaria</option>
                    <option value="Docentes">Docentes</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Formato</label>
                  <select
                    value={formFormato}
                    onChange={(e) => setFormFormato(e.target.value as FormatoRecurso)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                  >
                    <option value="ambos">Físico y Digital</option>
                    <option value="fisico">Solo Físico</option>
                    <option value="digital">Solo Digital (PDF/Online)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Total Ejemplares</label>
                  <input
                    type="number"
                    min="1"
                    value={formTotales}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setFormTotales(val);
                      if (formDisponibles > val) setFormDisponibles(val);
                    }}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Disponibles</label>
                  <input
                    type="number"
                    min="0"
                    max={formTotales}
                    value={formDisponibles}
                    onChange={(e) => setFormDisponibles(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Ubicación / Estante</label>
                  <input
                    type="text"
                    value={formUbicacion}
                    onChange={(e) => setFormUbicacion(e.target.value)}
                    placeholder="ej. Estante B-2"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Enlace a Lectura Digital (Opcional)</label>
                <input
                  type="url"
                  value={formEnlace}
                  onChange={(e) => setFormEnlace(e.target.value)}
                  placeholder="https://libros.conaliteg.gob.mx/..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Temas Clave (separados por coma)</label>
                <input
                  type="text"
                  value={formTemas}
                  onChange={(e) => setFormTemas(e.target.value)}
                  placeholder="ej. NEM, STEAM, Ecosistemas, Álgebra"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Resumen / Descripción Pedagógica</label>
                <textarea
                  rows={3}
                  value={formDescripcion}
                  onChange={(e) => setFormDescripcion(e.target.value)}
                  placeholder="Breve sinopsis o contenido curricular del libro..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalAbierto(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-md shadow-teal-600/20"
                >
                  {libroEnEdicion ? 'Actualizar Libro' : 'Guardar en Catálogo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Detalle Completo del Libro */}
      {libroDetalle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {libroDetalle.codigo}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-700">
                  {libroDetalle.categoria}
                </span>
              </div>
              <button onClick={() => setLibroDetalle(null)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-1 leading-tight">{libroDetalle.titulo}</h3>
            <p className="text-sm font-semibold text-slate-500 mb-4">{libroDetalle.autor}</p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 mb-4 leading-relaxed">
              {libroDetalle.descripcion}
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs mb-4">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Ubicación Física</span>
                <span className="text-slate-800 font-bold">{libroDetalle.ubicacionEstante || 'Solo Digital'}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Disponibilidad</span>
                <span className="text-emerald-700 font-bold">{libroDetalle.ejemplaresDisponibles} de {libroDetalle.ejemplaresTotales} disponibles</span>
              </div>
            </div>

            {libroDetalle.enlaceLecturaDigital && (
              <a
                href={libroDetalle.enlaceLecturaDigital}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded-xl transition-colors mb-3"
              >
                <BookOpen size={16} />
                <span>Abrir Libro Digital Oficial en Nueva Pestaña</span>
                <ExternalLink size={14} />
              </a>
            )}

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <button
                disabled={libroDetalle.ejemplaresDisponibles === 0}
                onClick={() => {
                  const target = libroDetalle;
                  setLibroDetalle(null);
                  onIniciarPrestamo(target);
                }}
                className="flex-1 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md transition-colors text-center"
              >
                {libroDetalle.ejemplaresDisponibles > 0 ? 'Iniciar Préstamo' : 'Sin Ejemplares Disponibles'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
