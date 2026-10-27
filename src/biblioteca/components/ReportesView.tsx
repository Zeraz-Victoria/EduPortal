import React, { useRef } from 'react';
import { 
  BarChart3, 
  Download, 
  Upload, 
  RotateCcw, 
  Printer, 
  FileSpreadsheet, 
  Database, 
  BookOpen, 
  BookmarkCheck, 
  Users, 
  Monitor,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { EstadisticasBiblioteca, Libro, Prestamo } from '../types';
import { storageService } from '../services/storageService';

interface ReportesViewProps {
  estadisticas: EstadisticasBiblioteca;
  libros: Libro[];
  prestamos: Prestamo[];
  onRecargarTodo: () => void;
}

export const ReportesView: React.FC<ReportesViewProps> = ({
  estadisticas,
  libros,
  prestamos,
  onRecargarTodo
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Calcular distribución por categorías
  const categoriasMap = libros.reduce((acc, l) => {
    acc[l.categoria] = (acc[l.categoria] || 0) + l.ejemplaresTotales;
    return acc;
  }, {} as Record<string, number>);

  const handleDescargarCSV = () => {
    storageService.exportarCSVLibros();
  };

  const handleExportarJSON = () => {
    storageService.exportarJSON();
  };

  const handleImportarJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const ok = storageService.importarJSON(content);
        if (ok) {
          alert('¡Respaldo importado correctamente!');
          onRecargarTodo();
        } else {
          alert('Error al leer el archivo de respaldo. Asegúrate de que sea un JSON válido de Biblioteca Escolar.');
        }
      }
    };
    reader.readAsText(file);
  };

  const handleRestablecer = () => {
    if (confirm('¿Estás seguro de restablecer todos los datos a la configuración inicial? Se sobreescribirán los cambios.')) {
      storageService.restablecerDatos();
      onRecargarTodo();
      alert('Datos restablecidos con éxito.');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Tarjeta de Resumen General */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
          <BarChart3 size={18} className="text-teal-600" />
          <span>Indicadores Clave del Acervo Escolar</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Títulos Registrados</span>
            <div className="text-2xl font-black text-slate-900 mt-1">{estadisticas.totalTitulos}</div>
            <p className="text-[10px] text-slate-400 mt-0.5">Obras en catálogo</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Volumen Total</span>
            <div className="text-2xl font-black text-teal-700 mt-1">{estadisticas.totalEjemplares}</div>
            <p className="text-[10px] text-slate-400 mt-0.5">Ejemplares físicos y digitales</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Disponibilidad en Sala</span>
            <div className="text-2xl font-black text-emerald-700 mt-1">
              {Math.round((estadisticas.ejemplaresDisponibles / Math.max(1, estadisticas.totalEjemplares)) * 100)}%
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">{estadisticas.ejemplaresDisponibles} para préstamo</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Préstamos en Curso</span>
            <div className="text-2xl font-black text-slate-900 mt-1">{estadisticas.prestamosActivos}</div>
            <p className="text-[10px] text-slate-400 mt-0.5">{estadisticas.prestamosVencidos} vencidos</p>
          </div>
        </div>
      </div>

      {/* Distribución por Categoría */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-sm font-black text-slate-900 mb-4">
          Distribución de Ejemplares por Campo Formativo y Categoría
        </h3>

        <div className="space-y-3">
          {Object.entries(categoriasMap).map(([cat, total]) => {
            const porcentaje = Math.round((total / Math.max(1, estadisticas.totalEjemplares)) * 100);

            return (
              <div key={cat} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">{cat}</span>
                  <span className="text-slate-500">{total} ej. ({porcentaje}%)</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-teal-600 rounded-full transition-all duration-500" 
                    style={{ width: `${porcentaje}%` }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Herramientas de Exportación y Copias de Seguridad */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Exportar Reportes */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <FileSpreadsheet size={18} className="text-emerald-600" />
            <h4 className="font-black text-slate-900 text-sm">Reportes y Hojas de Cálculo</h4>
          </div>
          <p className="text-xs text-slate-500">
            Descarga el listado completo del inventario de libros para auditoría escolar o supervisión de zona.
          </p>

          <div className="space-y-2 pt-2">
            <button
              onClick={handleDescargarCSV}
              className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded-xl transition-colors"
            >
              <Download size={14} className="text-emerald-600" />
              <span>Exportar Inventario a Excel / CSV</span>
            </button>

            <button
              onClick={() => window.print()}
              className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded-xl transition-colors"
            >
              <Printer size={14} className="text-slate-600" />
              <span>Imprimir Ficha de Estadísticas</span>
            </button>
          </div>
        </div>

        {/* Respaldo y Base de Datos */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Database size={18} className="text-teal-600" />
            <h4 className="font-black text-slate-900 text-sm">Respaldo y Restauración de Datos</h4>
          </div>
          <p className="text-xs text-slate-500">
            Guarda una copia completa de libros, socios, préstamos y computadoras en tu computadora en formato JSON.
          </p>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImportarJSON}
            accept=".json"
            className="hidden"
          />

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={handleExportarJSON}
              className="flex items-center justify-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <Download size={14} />
              <span>Descargar Respaldo</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded-xl transition-colors"
            >
              <Upload size={14} />
              <span>Restaurar Copia</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={handleRestablecer}
              className="text-[11px] text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1"
            >
              <RotateCcw size={12} />
              <span>Restablecer datos originales del acervo</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
