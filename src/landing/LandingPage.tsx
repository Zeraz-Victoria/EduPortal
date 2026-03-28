import React from 'react';
import { GraduationCap, Scale, Sparkles, ArrowRight, Zap, ShieldCheck, BookOpen, Brain, GamepadIcon, ExternalLink, Heart, AppWindow, Cloud, MonitorPlay } from 'lucide-react';

interface LandingPageProps {
    onNavigate: (route: '/' | '/eduplan' | '/edulegal' | '/simulador') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen mesh-gradient font-sans overflow-hidden">
            {/* Header */}
            <header className="glass-morphism border-b border-white/30 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-brand-600 to-purple-600 p-2 rounded-xl text-white shadow-lg">
                            <Sparkles size={18} />
                        </div>
                        <div>
                            <span className="font-black text-xl text-slate-900">EduPortal</span>
                            <span className="ml-2 text-[9px] font-black text-brand-500 uppercase tracking-widest">IA Educativa</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Sistema Activo</span>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-10 pb-0 text-center relative">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
                    Todo lo que necesita
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-purple-600 to-violet-600">
                        el docente moderno.
                    </span>
                </h1>

                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 mb-8 text-center">
                    <p className="text-base text-slate-500 leading-relaxed font-medium max-w-2xl px-4">
                        Herramientas de IA diseñadas para la Nueva Escuela Mexicana. Planea, actúa con respaldo legal y enseña de forma gamificada.
                    </p>
                </div>

                {/* Stats row */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 text-center">
                    {[
                        'NEM 2022',
                        'Marco Legal',
                        'Inteligencia Artificial',
                        'Gamificado',
                    ].map((label) => (
                        <div key={label} className="bg-white/70 backdrop-blur border border-white/60 rounded-xl px-4 py-2 shadow-sm flex items-center justify-center">
                            <div className="font-black text-sm text-slate-800 uppercase tracking-wide">{label}</div>
                        </div>
                    ))}
                </div>

                {/* Donation Button (Below badgets test) */}
                <div className="flex justify-center">
                    <a
                        href="https://gofund.me/8bb0e4fcc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
                    >
                        <Heart size={16} className="fill-white animate-pulse" />
                        <span className="text-sm font-black uppercase tracking-widest text-white">Dona Aquí</span>
                    </a>
                </div>
            </section>

            {/* Herramientas IA para Docentes */}
            <section className="max-w-6xl mx-auto px-6 pb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-100 rounded-xl text-brand-600 shadow-sm border border-brand-200/50">
                        <Brain size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 leading-tight">Herramientas IA para Docentes</h2>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">

                    {/* EduPlan AI Card */}
                    <div
                        onClick={() => onNavigate('/eduplan')}
                        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-brand-300 transition-all duration-300 flex flex-col"
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-brand-500 to-purple-500 absolute top-0 left-0" />
                        <div className="p-5 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                    <GraduationCap size={22} />
                                </div>
                                <div className="pt-1">
                                    <div className="inline-flex items-center gap-1 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-md mb-1">
                                        <Zap size={9} className="text-brand-500 fill-brand-500" />
                                        <span className="text-[8px] font-black text-brand-600 uppercase tracking-widest">Planeación Didáctica</span>
                                    </div>
                                    <h2 className="text-lg font-black text-slate-900 leading-tight">EduPlan AI</h2>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-medium mb-5 line-clamp-2">
                                Genera secuencias didácticas completas alineadas al Programa Sintético NEM 2022. ABP, STEAM, Proyectos.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><BookOpen size={12} /> Fases 1–6</span>
                                <div className="text-brand-600 text-xs font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Abrir <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* EduLegal Card */}
                    <div
                        onClick={() => onNavigate('/edulegal')}
                        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-green-300 transition-all duration-300 flex flex-col"
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-green-500 to-emerald-600 absolute top-0 left-0" />
                        <div className="p-5 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                    <Scale size={22} />
                                </div>
                                <div className="pt-1">
                                    <div className="inline-flex items-center gap-1 bg-green-50 border border-green-100 px-2 py-0.5 rounded-md mb-1">
                                        <ShieldCheck size={9} className="text-green-600" />
                                        <span className="text-[8px] font-black text-green-700 uppercase tracking-widest">Asistencia Legal</span>
                                    </div>
                                    <h2 className="text-lg font-black text-slate-900 leading-tight">EduLegal</h2>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-medium mb-5 line-clamp-2">
                                Analiza incidentes escolares con IA jurídica y genera guías basadas en los protocolos vigentes.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><ShieldCheck size={12} /> 32 entidades</span>
                                <div className="text-green-600 text-xs font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Abrir <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section >

            {/* Plataformas de Gestión y Aprendizaje */}
            < section className="max-w-6xl mx-auto px-6 pb-12" >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-sky-100 rounded-xl text-sky-600 shadow-sm border border-sky-200/50">
                        <AppWindow size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 leading-tight">Plataformas de Gestión y Aprendizaje</h2>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    {/* AprendIA Card */}
                    <div
                        onClick={() => window.open('https://aprendia.iaparamaestros.org', '_blank')}
                        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-sky-300 transition-all duration-300 flex flex-col"
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-sky-500 to-blue-600 absolute top-0 left-0" />
                        <div className="p-5 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                    <GamepadIcon size={22} />
                                </div>
                                <div className="pt-1">
                                    <div className="inline-flex items-center gap-1 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-md mb-1">
                                        <Sparkles size={9} className="text-sky-500" />
                                        <span className="text-[8px] font-black text-sky-600 uppercase tracking-widest">Plataforma Gamificada</span>
                                    </div>
                                    <h2 className="text-lg font-black text-slate-900 leading-tight">AprendIA</h2>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-medium mb-5 line-clamp-2">
                                Aula virtual gamificada con IA para la NEM. Alumnos con misiones de aprendizaje y mapas conceptuales.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Brain size={12} /> Next.js · Gemini</span>
                                <div className="text-sky-600 text-xs font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Abrir <ExternalLink size={14} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sistema Asistencia Card */}
                    <div
                        onClick={() => window.open('https://sistema-asistencia-1j2e.onrender.com', '_blank')}
                        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-orange-300 transition-all duration-300 flex flex-col"
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-amber-500 absolute top-0 left-0" />
                        <div className="p-5 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                    <ShieldCheck size={22} />
                                </div>
                                <div className="pt-1">
                                    <div className="inline-flex items-center gap-1 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-md mb-1">
                                        <Sparkles size={9} className="text-orange-600" />
                                        <span className="text-[8px] font-black text-orange-700 uppercase tracking-widest">Control Escolar</span>
                                    </div>
                                    <h2 className="text-lg font-black text-slate-900 leading-tight">Asistencia IA</h2>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-medium mb-5 line-clamp-2">
                                Sistema de control de asistencia. Credenciales NFC, notificaciones SMS y reportes automáticos PDF.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><ShieldCheck size={12} /> Hardware/Software</span>
                                <div className="text-orange-600 text-xs font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Abrir <ExternalLink size={14} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simulador Docente Card */}
                    <div
                        onClick={() => onNavigate('/simulador')}
                        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-indigo-300 transition-all duration-300 flex flex-col"
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-violet-600 absolute top-0 left-0" />
                        <div className="p-5 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                    <MonitorPlay size={22} />
                                </div>
                                <div className="pt-1">
                                    <div className="inline-flex items-center gap-1 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md mb-1">
                                        <Sparkles size={9} className="text-indigo-600" />
                                        <span className="text-[8px] font-black text-indigo-700 uppercase tracking-widest">Evaluación USICAMM</span>
                                    </div>
                                    <h2 className="text-lg font-black text-slate-900 leading-tight">Simulador Docente</h2>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-medium mb-5 line-clamp-2">
                                Practica y prepárate para las evaluaciones oficiales con simulaciones y retroalimentación inteligente.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Brain size={12} /> Cuestionarios IA</span>
                                <div className="text-indigo-600 text-xs font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Abrir <ExternalLink size={14} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Biblioteca Cloud Card */}
                    <div
                        onClick={() => window.open('https://biblioteca-cloud.onrender.com', '_blank')}
                        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-teal-300 transition-all duration-300 flex flex-col"
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 absolute top-0 left-0" />
                        <div className="p-5 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                    <Cloud size={22} />
                                </div>
                                <div className="pt-1">
                                    <div className="inline-flex items-center gap-1 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-md mb-1">
                                        <BookOpen size={9} className="text-teal-600" />
                                        <span className="text-[8px] font-black text-teal-700 uppercase tracking-widest">Recursos Digitales</span>
                                    </div>
                                    <h2 className="text-lg font-black text-slate-900 leading-tight">Biblioteca Cloud</h2>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-medium mb-5 line-clamp-2">
                                Almacenamiento centralizado y gestión en la nube de recursos bibliográficos gratuitos para consulta y descarga.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Cloud size={12} /> Repositorio Web</span>
                                <div className="text-teal-600 text-xs font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Abrir <ExternalLink size={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom note */}
                <p className="text-center text-xs text-slate-400 font-medium mt-10">
                    Portal local · AprendIA en <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">localhost:3001</code>
                </p>
            </section >
        </div >
    );
};

export default LandingPage;
