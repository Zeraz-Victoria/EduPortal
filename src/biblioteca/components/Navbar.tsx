import React from 'react';
import { 
  Cloud, 
  BookOpen, 
  BookmarkCheck, 
  Monitor, 
  Users, 
  Sparkles, 
  Bot, 
  BarChart3, 
  ArrowLeft 
} from 'lucide-react';
import { EstadisticasBiblioteca } from '../types';

export type TabId = 'catalogo' | 'prestamos' | 'computadoras' | 'socios' | 'kiosco' | 'ia' | 'reportes';

interface NavbarProps {
  tabActiva: TabId;
  onCambiarTab: (tab: TabId) => void;
  estadisticas: EstadisticasBiblioteca;
  onVolverPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  tabActiva,
  onCambiarTab,
  estadisticas,
  onVolverPortal
}) => {
  const tabs = [
    { id: 'catalogo' as TabId, label: 'Catálogo & Libros', icon: BookOpen, badge: estadisticas.totalTitulos },
    { 
      id: 'prestamos' as TabId, 
      label: 'Préstamos', 
      icon: BookmarkCheck, 
      badge: estadisticas.prestamosActivos,
      alertBadge: estadisticas.prestamosVencidos > 0 ? estadisticas.prestamosVencidos : undefined 
    },
    { 
      id: 'computadoras' as TabId, 
      label: 'Cómputo', 
      icon: Monitor, 
      badge: `${estadisticas.pcsDisponibles}/${estadisticas.totalPcs}` 
    },
    { id: 'socios' as TabId, label: 'Lectores & Alumnos', icon: Users, badge: estadisticas.totalSocios },
    { id: 'kiosco' as TabId, label: 'Modo Kiosco', icon: Sparkles, highlight: true },
    { id: 'ia' as TabId, label: 'Bibliotecario IA', icon: Bot, isSpecial: true },
    { id: 'reportes' as TabId, label: 'Reportes & Datos', icon: BarChart3 }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Barra Superior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y Regresar */}
          <div className="flex items-center gap-3">
            <button
              onClick={onVolverPortal}
              id="btn-volver-portal"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              title="Volver a la página principal de EduPortal"
            >
              <ArrowLeft size={14} />
              <span>EduPortal</span>
            </button>

            <div className="h-6 w-px bg-slate-200" />

            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onCambiarTab('catalogo')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <Cloud size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                    Biblioteca<span className="text-teal-600">Cloud</span>
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                    SaaS Escolar
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500 leading-none mt-0.5">
                  Gestión Bibliotecaria, Kiosco y Recursos NEM
                </p>
              </div>
            </div>
          </div>

          {/* Estado del sistema & Quick Info */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Online · {estadisticas.ejemplaresDisponibles} ejemplares disponibles</span>
            </div>

            <button
              onClick={() => onCambiarTab('kiosco')}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm shadow-teal-500/25 transition-all"
            >
              <Sparkles size={14} />
              <span>Abrir Kiosco Alumnos</span>
            </button>
          </div>

        </div>

        {/* Barra de Navegación de Pestañas */}
        <nav className="flex space-x-1 overflow-x-auto py-2 no-scrollbar border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const esActiva = tabActiva === tab.id;

            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => onCambiarTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  esActiva
                    ? 'bg-teal-50 text-teal-700 border border-teal-200 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent'
                }`}
              >
                <Icon size={16} className={esActiva ? 'text-teal-600' : 'text-slate-400'} />
                <span>{tab.label}</span>

                {tab.alertBadge && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-black bg-rose-500 text-white animate-pulse">
                    {tab.alertBadge}
                  </span>
                )}

                {tab.badge !== undefined && !tab.alertBadge && (
                  <span className={`ml-1 px-1.5 py-0.2 rounded-md text-[10px] font-bold ${
                    esActiva ? 'bg-teal-200/60 text-teal-800' : 'bg-slate-200/80 text-slate-700'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
