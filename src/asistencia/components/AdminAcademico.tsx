import React, { useState, useEffect } from 'react';
import { Trash2, Users, Layers, GraduationCap } from 'lucide-react';

interface AdminAcademicoProps {
    api: (endpoint: string, method?: string, body?: any) => Promise<any>;
}

export default function AdminAcademico({ api }: AdminAcademicoProps) {
    const [grados, setGrados] = useState<any[]>([]);
    const [grupos, setGrupos] = useState<any[]>([]);
    const [maestros, setMaestros] = useState<any[]>([]);
    const [clases, setClases] = useState<any[]>([]);

    useEffect(() => {
        cargarTodo();
    }, []);

    const cargarTodo = async () => {
        try {
            const [g, gr, m, c] = await Promise.all([
                api('/api/gestion/grados'),
                api('/api/gestion/grupos'),
                api('/api/gestion/maestros'),
                api('/api/gestion/clases')
            ]);
            setGrados(g); setGrupos(gr); setMaestros(m); setClases(c);
        } catch (e) {
            console.error(e);
        }
    };

    const handlerSimple = (url: string, payload: any) => async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api(url, 'POST', payload);
            cargarTodo();
            (e.target as HTMLFormElement).reset();
        } catch (e: any) { alert(e.message); }
    };

    const handleDelete = (tipo: string, id: number) => async () => {
        if (!confirm("¿Eliminar este elemento?")) return;
        try {
            await api(`/api/gestion/${tipo}/${id}`, 'DELETE');
            cargarTodo();
        } catch (e: any) { alert(e.message); }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 fade-in">

            {/* Grados & Grupos */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Layers size={20} className="text-indigo-600" /> Grados</h2>
                    <form onSubmit={(e) => {
                        const val = (e.currentTarget.elements.namedItem('grado') as HTMLInputElement).value;
                        handlerSimple('/api/gestion/grados', { nombre_grado: val })(e);
                    }} className="flex gap-2 mb-4">
                        <input name="grado" required type="text" placeholder="Ej: 1ro" className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
                        <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">+</button>
                    </form>
                    <ul className="divide-y divide-slate-100">
                        {grados.map(g => (
                            <li key={g.id} className="py-2 flex justify-between items-center text-slate-700">
                                {g.nombre_grado}
                                <button onClick={handleDelete('grados', g.id)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Users size={20} className="text-indigo-600" /> Grupos</h2>
                    <form onSubmit={(e) => {
                        const val = (e.currentTarget.elements.namedItem('grupo') as HTMLInputElement).value;
                        handlerSimple('/api/gestion/grupos', { nombre_grupo: val })(e);
                    }} className="flex gap-2 mb-4">
                        <input name="grupo" required type="text" placeholder="Ej: A" className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
                        <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">+</button>
                    </form>
                    <ul className="divide-y divide-slate-100">
                        {grupos.map(g => (
                            <li key={g.id} className="py-2 flex justify-between items-center text-slate-700">
                                {g.nombre_grupo}
                                <button onClick={handleDelete('grupos', g.id)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Clases */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><School size={20} className="text-indigo-600" /> Crear Clase</h2>
                <form onSubmit={(e) => {
                    const form = e.currentTarget;
                    handlerSimple('/api/gestion/clases', {
                        grado_id: (form.elements.namedItem('grado') as HTMLSelectElement).value,
                        grupo_id: (form.elements.namedItem('grupo') as HTMLSelectElement).value,
                        maestro_id: (form.elements.namedItem('maestro') as HTMLSelectElement).value || null
                    })(e);
                }} className="space-y-4 mb-6">
                    <select name="grado" required className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none">
                        <option value="">Grado...</option>{grados.map(g => <option key={g.id} value={g.id}>{g.nombre_grado}</option>)}
                    </select>
                    <select name="grupo" required className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none">
                        <option value="">Grupo...</option>{grupos.map(g => <option key={g.id} value={g.id}>{g.nombre_grupo}</option>)}
                    </select>
                    <select name="maestro" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none">
                        <option value="">Maestro Titular (Opcional)...</option>{maestros.map(m => <option key={m.id} value={m.id}>{m.nombre_completo}</option>)}
                    </select>
                    <button className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">Asignar Clase</button>
                </form>

                <h3 className="font-bold text-slate-700 mb-2 border-t pt-4">Clases Activas</h3>
                <ul className="divide-y divide-slate-100">
                    {clases.map(c => (
                        <li key={c.id} className="py-2 flex justify-between items-center text-slate-700">
                            <div>
                                <span className="font-bold mr-2">{c.nombre_grado} {c.nombre_grupo}</span>
                                <span className="text-xs text-slate-400">{c.nombre_maestro || 'Sin titular'}</span>
                            </div>
                            <button onClick={handleDelete('clases', c.id)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Maestros */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><GraduationCap size={20} className="text-indigo-600" /> Alta de Docente</h2>
                <form onSubmit={(e) => {
                    const form = e.currentTarget;
                    handlerSimple('/api/gestion/maestros', {
                        nombre_completo: (form.elements.namedItem('nom') as HTMLInputElement).value,
                        email: (form.elements.namedItem('email') as HTMLInputElement).value,
                        password: (form.elements.namedItem('pass') as HTMLInputElement).value,
                        nfc_uid: (form.elements.namedItem('nfc') as HTMLInputElement).value || null
                    })(e);
                }} className="space-y-4 mb-6">
                    <input name="nom" required type="text" placeholder="Nombre completo" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
                    <input name="email" required type="email" placeholder="Correo" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
                    <input name="pass" required type="password" placeholder="Contraseña temporal" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
                    <input name="nfc" type="text" placeholder="UID NFC (Opcional)" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none text-xs font-mono" />
                    <button className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">Registrar Docente</button>
                </form>

                <h3 className="font-bold text-slate-700 mb-2 border-t pt-4">Plantilla Docente</h3>
                <ul className="divide-y divide-slate-100">
                    {maestros.map(m => (
                        <li key={m.id} className="py-2 flex justify-between items-center text-slate-700 text-sm">
                            <div>
                                <span className="font-bold block">{m.nombre_completo}</span>
                                <span className="text-xs text-slate-400">{m.email}</span>
                            </div>
                            <button onClick={handleDelete('maestros', m.id)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
