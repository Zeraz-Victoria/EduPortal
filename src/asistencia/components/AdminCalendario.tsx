import React, { useState, useEffect } from 'react';
import { Calendar, Trash2, Bell } from 'lucide-react';

interface AdminCalendarioProps {
    api: (endpoint: string, method?: string, body?: any) => Promise<any>;
}

export default function AdminCalendario({ api }: AdminCalendarioProps) {
    const [avisos, setAvisos] = useState<any[]>([]);
    const [horario, setHorario] = useState({ entrada: '', salida: '' });

    // Add new notice forms
    const [titulo, setTitulo] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        cargarDatos();
    }, []);

    const cargarDatos = async () => {
        try {
            const respAvisos = await api('/api/avisos?institucion_id=1'); // Defaulting to 1 for MVP
            setAvisos(Array.isArray(respAvisos) ? respAvisos : []);

            const h = await api('/api/gestion/horario');
            setHorario({
                entrada: h.hora_entrada ? h.hora_entrada.substring(0, 5) : '',
                salida: h.hora_salida ? h.hora_salida.substring(0, 5) : ''
            });
        } catch (e) {
            console.error(e);
        }
    };

    const guardarHorario = async () => {
        try {
            await api('/api/gestion/horario', 'POST', { hora_entrada: horario.entrada, hora_salida: horario.salida });
            alert("Horario actualizado");
        } catch (e: any) { alert(e.message); }
    };

    const crearAviso = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api('/api/avisos', 'POST', { institucion_id: 1, titulo, mensaje });
            setTitulo(''); setMensaje('');
            cargarDatos();
        } catch (e: any) { alert(e.message); }
    };

    const borrarAviso = async (id: number) => {
        if (!confirm("¿Eliminar aviso?")) return;
        try {
            await api(`/api/avisos/${id}`, 'DELETE');
            cargarDatos();
        } catch (e: any) { alert(e.message); }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in">
            {/* Horarios */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Calendar className="text-indigo-600" /> Horario Escolar</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Hora de Entrada</label>
                        <input type="time" value={horario.entrada} onChange={e => setHorario({ ...horario, entrada: e.target.value })} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Hora de Salida</label>
                        <input type="time" value={horario.salida} onChange={e => setHorario({ ...horario, salida: e.target.value })} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
                    </div>
                    <button onClick={guardarHorario} className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-md hover:bg-indigo-700 transition">Guardar Horario</button>
                </div>
            </div>

            {/* Avisos */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Bell className="text-orange-500" /> Tablón de Avisos</h2>
                <form onSubmit={crearAviso} className="space-y-4 mb-8 bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                    <input required type="text" placeholder="Título del Aviso" value={titulo} onChange={e => setTitulo(e.target.value)}
                        className="w-full px-4 py-2 bg-white border border-orange-200 rounded-lg outline-none focus:ring-2 focus:ring-orange-400" />
                    <textarea required rows={3} placeholder="Mensaje detallado..." value={mensaje} onChange={e => setMensaje(e.target.value)}
                        className="w-full px-4 py-2 bg-white border border-orange-200 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"></textarea>
                    <button type="submit" className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg shadow hover:bg-orange-600 transition">Publicar</button>
                </form>

                <div className="space-y-3">
                    {avisos.length === 0 ? (
                        <p className="text-slate-500 text-center italic">No hay avisos activos</p>
                    ) : (
                        avisos.map(a => (
                            <div key={a.id} className="p-4 border border-slate-200 rounded-xl bg-slate-50 relative pr-12">
                                <h4 className="font-bold text-slate-800">{a.titulo}</h4>
                                <p className="text-sm text-slate-600 mt-1">{a.mensaje}</p>
                                <button onClick={() => borrarAviso(a.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-600">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
