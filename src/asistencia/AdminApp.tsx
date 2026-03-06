import React, { useState, useEffect } from 'react';
import { LogOut, Users, BarChart3, CalendarDays, School, Settings, ArrowLeft } from 'lucide-react';
import AdminAlumnos from './components/AdminAlumnos';
import AdminReportes from './components/AdminReportes';
import AdminCalendario from './components/AdminCalendario';
import AdminAcademico from './components/AdminAcademico';
import AdminAjustes from './components/AdminAjustes';

interface AdminAppProps {
    onBack: () => void;
    onLogout: () => void;
    token: string;
    role: string;
}

export default function AdminApp({ onBack, onLogout, token, role }: AdminAppProps) {
    const [activeTab, setActiveTab] = useState<'alumnos' | 'reportes' | 'calendario' | 'academico' | 'ajustes'>('alumnos');
    const [schoolName, setSchoolName] = useState('Panel Director');

    // Basic API wrapper
    const api = async (endpoint: string, method = 'GET', body: any = null) => {
        const headers: any = { 'Authorization': `Bearer ${token}` };
        if (body) {
            headers['Content-Type'] = 'application/json';
        }
        const res = await fetch(`http://localhost:3002${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null
        });

        if (res.headers.get('content-type')?.includes('application/json')) {
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Server error');
            return data;
        }
        if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
        return true;
    };

    useEffect(() => {
        const storedName = localStorage.getItem('asistencia_nombreEscuela');
        if (storedName) setSchoolName(storedName);
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'alumnos':
                return <AdminAlumnos api={api} />;
            case 'reportes':
                return <AdminReportes token={token} />;
            case 'calendario':
                return <AdminCalendario api={api} />;
            case 'academico':
                return <AdminAcademico api={api} />;
            case 'ajustes':
                return <AdminAjustes api={api} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
            {/* Sidebar */}
            <nav className="w-full md:w-64 bg-slate-800 text-slate-50 flex flex-col p-5 flex-shrink-0">
                <h1 className="text-xl font-bold mb-8 pb-4 border-b border-white/10 text-center">{schoolName}</h1>

                <ul className="flex-1 flex flex-col gap-2">
                    <NavItem active={activeTab === 'alumnos'} onClick={() => setActiveTab('alumnos')} icon={<Users size={18} />} label="Alumnos" />
                    <NavItem active={activeTab === 'reportes'} onClick={() => setActiveTab('reportes')} icon={<BarChart3 size={18} />} label="Reportes" />
                    <NavItem active={activeTab === 'calendario'} onClick={() => setActiveTab('calendario')} icon={<CalendarDays size={18} />} label="Calendario" />
                    <NavItem active={activeTab === 'academico'} onClick={() => setActiveTab('academico')} icon={<School size={18} />} label="Académico" />
                    <NavItem active={activeTab === 'ajustes'} onClick={() => setActiveTab('ajustes')} icon={<Settings size={18} />} label="Ajustes" />
                </ul>

                <div className="mt-8 pt-4 border-t border-white/10 space-y-2">
                    <button onClick={onBack} className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft size={16} /> Salir del Sistema
                    </button>
                    <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                        <LogOut size={16} /> Cerrar Sesión
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {renderContent()}
            </main>
        </div>
    );
}

const NavItem = ({ active, onClick, icon, label }: any) => (
    <li>
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
        >
            {icon} {label}
        </button>
    </li>
);

