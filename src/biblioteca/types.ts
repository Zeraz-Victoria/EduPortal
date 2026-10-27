export type CategoriaLibro = 
  | 'Libros de Texto SEP / NEM'
  | 'Lenguajes y Literatura'
  | 'Saberes y Pensamiento Científico'
  | 'Ética, Naturaleza y Sociedades'
  | 'De lo Humano y lo Comunitario'
  | 'Ficción y Novela'
  | 'Ciencia y Tecnología'
  | 'Historia y Geografía'
  | 'Guías Didácticas Docentes'
  | 'Arte y Cultura';

export type FormatoRecurso = 'fisico' | 'digital' | 'ambos';
export type NivelEscolar = '1° Secundaria' | '2° Secundaria' | '3° Secundaria' | 'Telesecundaria' | 'General' | 'Docentes';

export interface Libro {
  id: string;
  codigo: string;
  titulo: string;
  autor: string;
  categoria: CategoriaLibro;
  nivel: NivelEscolar;
  editorial?: string;
  anio: number;
  formato: FormatoRecurso;
  ejemplaresTotales: number;
  ejemplaresDisponibles: number;
  ubicacionEstante?: string;
  enlaceLecturaDigital?: string;
  descripcion: string;
  temasClave: string[];
  portadaColor?: string;
  fechaRegistro: string;
}

export type RolSocio = 'alumno' | 'docente';

export interface Socio {
  id: string;
  matricula: string;
  nombre: string;
  rol: RolSocio;
  gradoGrupo: string;
  email: string;
  telefono?: string;
  nfcUid?: string;
  prestamosActivos: number;
  fechaRegistro: string;
}

export type EstadoPrestamo = 'activo' | 'devuelto' | 'vencido';

export interface Prestamo {
  id: string;
  codigoPrestamo: string;
  libroId: string;
  libroTitulo: string;
  socioId: string;
  socioNombre: string;
  socioMatricula: string;
  socioRol: RolSocio;
  fechaPrestamo: string;
  fechaDevolucionEsperada: string;
  fechaDevolucionReal?: string;
  estado: EstadoPrestamo;
  diasAtraso?: number;
  notas?: string;
}

export type EstadoComputadora = 'disponible' | 'en_uso' | 'mantenimiento';

export interface Computadora {
  id: string;
  numero: number;
  nombre: string;
  modelo: string;
  sistemaOperativo: string;
  estado: EstadoComputadora;
  socioIdActual?: string;
  socioNombreActual?: string;
  horaInicioUso?: string;
  tiempoLimiteMinutos?: number;
  notas?: string;
}

export interface EstadisticasBiblioteca {
  totalTitulos: number;
  totalEjemplares: number;
  ejemplaresDisponibles: number;
  prestamosActivos: number;
  prestamosVencidos: number;
  totalSocios: number;
  pcsDisponibles: number;
  totalPcs: number;
}

export interface MensajeChat {
  id: string;
  remitente: 'usuario' | 'ia';
  contenido: string;
  timestamp: string;
  librosSugeridos?: Libro[];
}
