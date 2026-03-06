import React from 'react';
import { GraduationCap, Scale, Sparkles, ArrowRight, Zap, ShieldCheck, BookOpen, Brain, GamepadIcon, ExternalLink, Heart, AppWindow } from 'lucide-react';

interface LandingPageProps {
    onNavigate: (route: '/' | '/eduplan' | '/edulegal') => void;
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
            <section className="max-w-6xl mx-auto px-6 pt-10 pb-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-brand-100 px-3 py-1.5 rounded-full mb-6 shadow-sm">
                    <Brain size={12} className="text-brand-500" />
                    <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">Portal Unificado de Herramientas IA</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight mb-4">
                    Todo lo que necesita
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-purple-600 to-violet-600">
                        el docente moderno.
                    </span>
                </h1>

                <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
                    Tres herramientas de inteligencia artificial diseñadas para la Nueva Escuela Mexicana.
                    Planea, actúa con respaldo legal y enseña de forma gamificada.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 text-center">
                    {[
                        { label: 'NEM 2022', sublabel: 'Planeación oficial' },
                        { label: '7 Leyes', sublabel: 'Marco legal' },
                        { label: 'DeepSeek AI', sublabel: 'Inteligencia' },
                        { label: 'Gamificado', sublabel: 'Educación viva' },
                    ].map((s) => (
                        <div key={s.label} className="bg-white/70 backdrop-blur border border-white/60 rounded-xl px-4 py-2 shadow-sm">
                            <div className="font-black text-base text-slate-900">{s.label}</div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.sublabel}</div>
                        </div>
                    ))}
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
            </section>

            {/* Plataformas de Gestión y Aprendizaje */}
            <section className="max-w-6xl mx-auto px-6 pb-12">
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
                        onClick={() => window.open('http://localhost:3001', '_blank')}
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
                                    <Sparkles size={22} />
                                </div>
                                <div className="pt-1">
                                    <div className="inline-flex items-center gap-1 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-md mb-1">
                                        <ShieldCheck size={9} className="text-orange-600" />
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
                </div>

                {/* Donation CTA */}
                <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between text-left shadow-sm hover:shadow-md border border-rose-100 transition-all">
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-rose-400 to-pink-500 p-3 rounded-xl shadow-inner shrink-0">
                            <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-slate-900 mb-0.5">Apoya a EduPortal</h2>
                            <p className="text-slate-500 text-xs font-medium">
                                Con tu donativo voluntario, mantendremos estos servidores funcionando de forma rápida y gratuita para cientos de maestros en México.
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://gofund.me/8bb0e4fcc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 sm:mt-0 whitespace-nowrap inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-rose-500 hover:scale-105 active:scale-95 shadow-sm transition-all text-sm"
                    >
                        Donar Aquí
                        <ExternalLink size={14} />
                    </a>
                </div>

                {/* Bottom note */}
                <p className="text-center text-xs text-slate-400 font-medium mt-10">
                    Portal local · AprendIA en <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">localhost:3001</code>
                </p>
            </section>
        </div>
    );
};

export default LandingPage;
