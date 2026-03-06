import React, { useState, useEffect } from 'react';
import { Trash2, Edit2, UserPlus, CheckCircle, AlertCircle } from 'lucide-react';

interface AdminAlumnosProps {
    api: (endpoint: string, method?: string, body?: any) => Promise<any>;
}

export default function AdminAlumnos({ api }: AdminAlumnosProps) {
    const [alumnos, setAlumnos] = useState<any[]>([]);
    const [clases, setClases] = useState<any[]>([]);

    // Form state
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nfc, setNfc] = useState('');
    const [claseId, setClaseId] = useState('');

    const [mensaje, setMensaje] = useState<{ texto: string, tipo: 'exito' | 'error' } | null>(null);

    useEffect(() => {
        cargarDatos();
    }, []);

    const cargarDatos = async () => {
        try {
            const respAlumnos = await api('/api/alumnos');
            setAlumnos(respAlumnos);

            const respClases = await api('/api/gestion/clases');
            setClases(respClases);
        } catch (e) {
            console.error("Error loading data", e);
        }
    };

    const showMensaje = (texto: string, tipo: 'exito' | 'error') => {
        setMensaje({ texto, tipo });
        setTimeout(() => setMensaje(null), 3000);
    };

    const handleRegistrar = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api('/api/registrar', 'POST', {
                nombre_completo: nombre,
                nfc_uid: nfc,
                telefono_tutor: telefono,
                clase_id: claseId
            });
            showMensaje('Alumno registrado con éxito', 'exito');
            setNombre(''); setTelefono(''); setNfc(''); setClaseId('');
            cargarDatos();
        } catch (e: any) {
            showMensaje(e.message, 'error');
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("¿Seguro que deseas eliminar este alumno?")) return;
        try {
            await api('/api/alumnos/borrar', 'POST', { id });
            cargarDatos();
        } catch (e: any) {
            alert(e.message);
        }
    };

    return (
        <div className="space-y-8 fade-in">
            {/* Nuevo Alumno */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <UserPlus className="text-indigo-600" /> Registrar Nuevo Alumno
                </h2>

                <form onSubmit={handleRegistrar} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre Completo</label>
                            <input required type="text" value={nombre} onChange={e => setNombre(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Nombre y Apellidos" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Teléfono Tutor</label>
                            <input required type="tel" value={telefono} onChange={e => setTelefono(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="+52..." />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Clase Asignada</label>
                            <select required value={claseId} onChange={e => setClaseId(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
                                <option value="">-- Seleccionar --</option>
                                {clases.map(c => (
                                    <option key={c.id} value={c.id}>{c.nombre_grado} '{c.nombre_grupo}'</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">UID Tarjeta (NFC)</label>
                            <input required type="text" value={nfc} onChange={e => setNfc(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Escanea tarjeta..." />
                        </div>
                    </div>

                    <button type="submit" className="mt-4 px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">
                        Registrar Alumno
                    </button>

                    {mensaje && (
                        <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 font-medium ${mensaje.tipo === 'exito' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                            {mensaje.tipo === 'exito' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                            {mensaje.texto}
                        </div>
                    )}
                </form>
            </div>

            {/* Tabla Alumnos */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Directorio de Alumnos</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                                <th className="p-4 border-b border-slate-200 rounded-tl-lg">Nombre</th>
                                <th className="p-4 border-b border-slate-200">Clase</th>
                                <th className="p-4 border-b border-slate-200">UID</th>
                                <th className="p-4 border-b border-slate-200">Tutor</th>
                                <th className="p-4 border-b border-slate-200 text-right rounded-tr-lg">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.length === 0 ? (
                                <tr><td colSpan={5} className="p-4 text-center text-slate-500">No hay alumnos registrados.</td></tr>
                            ) : (
                                alumnos.map(a => (
                                    <tr key={a.id} className="hover:bg-slate-50/50 transition-colors border-b border-slate-100 last:border-0">
                                        <td className="p-4 font-medium text-slate-800">{a.nombre_completo}</td>
                                        <td className="p-4 text-slate-600">{a.nombre_grado || '-'} {a.nombre_grupo || ''}</td>
                                        <td className="p-4 text-slate-500 font-mono text-sm">{a.nfc_uid}</td>
                                        <td className="p-4 text-slate-600">{a.telefono_tutor}</td>
                                        <td className="p-4 text-right">
                                            {/* Note: Edit feature omitted for brevity in MVP migration, just using Delete for now */}
                                            <button onClick={() => handleDelete(a.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
