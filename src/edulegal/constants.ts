import { RiskLevel, ActionStep, LegalReference } from './types';

export const MEXICO_STATES = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
  "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México",
  "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit",
  "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
  "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

// Base normativa completa para referencia (Base de Conocimiento del Sistema)
export const LEGAL_FRAMEWORK = {
  // --- NIVEL CONSTITUCIONAL Y TRATADOS INTERNACIONALES ---
  CONST: "Constitución Política de los Estados Unidos Mexicanos (Arts. 1, 3, 4 y 31 Fracc. I, 73, 123)",
  INTL: "Convención sobre los Derechos del Niño y Convención Americana sobre Derechos Humanos (Pacto de San José)",
  CEDAW: "Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer (CEDAW)",
  BELEM_DO_PARA: "Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer (Belém do Pará)",

  // --- LEYES GENERALES Y FEDERALES ---
  LGE: "Ley General de Educación (Arts. 7, 73, 74, 128)",
  LGDNNA: "Ley General de los Derechos de Niñas, Niños y Adolescentes (Arts. 46, 47, 103, 105)",
  LGRA: "Ley General de Responsabilidades Administrativas",
  LFPED: "Ley Federal para Prevenir y Eliminar la Discriminación",
  LGAMVLV: "Ley General de Acceso de las Mujeres a una Vida Libre de Violencia",
  LGISMH: "Ley General para la Igualdad Sustantiva entre Mujeres y Hombres",

  // --- NORMATIVA Y PROTOCOLOS OFICIALES DE VERACRUZ (ACTUALIZADOS) ---
  LGIN: "Ley General para la Inclusión de las Personas con Discapacidad",
  LFRSP: "Ley Federal de Responsabilidades de los Servidores Públicos",
  RAPF: "Reglamento de Asociaciones de Padres de Familia",
  PROTOCOLO_SEV_356: "Protocolos para la Identificación, Prevención e Intervención en el Acoso Escolar, el Maltrato Infantil y Actos de Connotación Sexual para los Planteles Educativos del Estado de Veracruz (Gaceta Oficial No. Ext. 356)",
  PROTOCOLO_ACOSO_LABORAL_SEV: "Protocolo de Atención Frente a Casos de Acoso Laboral dentro de la Secretaría de Educación de Veracruz (SEV)",
  CODIGO_CONDUCTA_SEV_2026: "Código de Conducta de la Secretaría de Educación de Veracruz (Gaceta Oficial Ext. 198 de 19 de mayo de 2026)",
  CODIGO_ETICA_VER: "Código de Ética de las Personas Servidoras Públicas del Poder Ejecutivo del Estado de Veracruz",
  L303: "Ley No. 303 de Prevención y Atención del Acoso Escolar para el Estado de Veracruz de Ignacio de la Llave (Arts. 7, 12, 14, 22, 42, 46)",
  LRA_VER: "Ley de Responsabilidades Administrativas para el Estado de Veracruz de Ignacio de la Llave",
  LEEV: "Ley de Educación del Estado de Veracruz de Ignacio de la Llave",
  L573: "Ley No. 573 de los Derechos de Niñas, Niños y Adolescentes del Estado de Veracruz (Art. 6 Interés Superior de la Niñez)",
  CPV: "Código Penal para el Estado de Veracruz (Arts. 190 Bis Hostigamiento Sexual, Abuso Sexual, Violación, Violencia Familiar)",

  // Alias retrocompatibles
  PROTOCOLO_SEV: "Protocolos SEV para Acoso Escolar, Maltrato Infantil y Connotación Sexual (Gaceta Oficial Ext. 356)",
  CONVIVENCIA: "Protocolos de Convivencia Escolar y Acuerdos Escolares Vigentes"
};

export const SEV_PROTOCOLS = {
  ACOSO: {
    name: 'Acoso Escolar (Bullying)',
    consideredDocs: [
      LEGAL_FRAMEWORK.CONST,
      LEGAL_FRAMEWORK.LGDNNA,
      LEGAL_FRAMEWORK.L303,
      LEGAL_FRAMEWORK.PROTOCOLO_SEV,
      LEGAL_FRAMEWORK.CONVIVENCIA,
      LEGAL_FRAMEWORK.LEEV
    ],
    legal: [
      {
        document: LEGAL_FRAMEWORK.L303,
        article: 'Arts. 12, 14 y 42',
        description: 'Define el acoso escolar y establece la obligación de notificar a la autoridad educativa y a los padres en un plazo máximo de 24 horas.'
      },
      {
        document: LEGAL_FRAMEWORK.PROTOCOLO_SEV,
        article: 'Apartado de Acoso Escolar',
        description: 'Establece la ruta: Detección -> Notificación -> Intervención -> Seguimiento.'
      },
      {
        document: LEGAL_FRAMEWORK.LGE,
        article: 'Art. 73',
        description: 'Obligación de docentes y directivos de proteger la integridad física y mental de los educandos.'
      }
    ]
  },
  VIOLENCIA: {
    name: 'Violencia Física o Verbal',
    consideredDocs: [
      LEGAL_FRAMEWORK.CONST,
      LEGAL_FRAMEWORK.LGDNNA,
      LEGAL_FRAMEWORK.L573,
      LEGAL_FRAMEWORK.PROTOCOLO_SEV,
      LEGAL_FRAMEWORK.CONVIVENCIA,
      LEGAL_FRAMEWORK.LGIN
    ],
    legal: [
      {
        document: LEGAL_FRAMEWORK.LGDNNA,
        article: 'Art. 47',
        description: 'Derecho de NNA a una vida libre de violencia y a la integridad personal.'
      },
      {
        document: LEGAL_FRAMEWORK.L573,
        article: 'Título Segundo',
        description: 'Garantía estatal de protección contra cualquier forma de perjuicio o abuso físico o mental.'
      }
    ]
  },
  SEXUAL: {
    name: 'Connotación Sexual / Abuso (ASI)',
    consideredDocs: [
      LEGAL_FRAMEWORK.CONST,
      LEGAL_FRAMEWORK.INTL,
      LEGAL_FRAMEWORK.LGDNNA,
      LEGAL_FRAMEWORK.CPV,
      LEGAL_FRAMEWORK.PROTOCOLO_SEV,
      LEGAL_FRAMEWORK.LGAMVLV,
      LEGAL_FRAMEWORK.LFRSP
    ],
    legal: [
      {
        document: LEGAL_FRAMEWORK.PROTOCOLO_SEV,
        article: 'Ruta Crítica de ASI',
        description: 'En casos de connotación sexual, NO se investiga internamente. Se notifica de inmediato a Fiscalía y Procuraduría de Protección de NNA.'
      },
      {
        document: LEGAL_FRAMEWORK.CPV,
        article: 'Delitos contra la libertad sexual',
        description: 'Obligación de cualquier servidor público de denunciar hechos posiblemente constitutivos de delito.'
      },
      {
        document: LEGAL_FRAMEWORK.LGDNNA,
        article: 'Capítulo de Protección',
        description: 'Prioridad absoluta del Interés Superior de la Niñez ante cualquier procedimiento administrativo.'
      }
    ]
  },
  DROGAS_ARMAS: {
    name: 'Posesión de Sustancias o Armas',
    consideredDocs: [
      LEGAL_FRAMEWORK.LGDNNA,
      LEGAL_FRAMEWORK.LEEV,
      LEGAL_FRAMEWORK.PROTOCOLO_SEV,
      LEGAL_FRAMEWORK.CPV,
      LEGAL_FRAMEWORK.LGE
    ],
    legal: [
      {
        document: LEGAL_FRAMEWORK.PROTOCOLO_SEV,
        article: 'Protocolo de Seguridad Escolar',
        description: 'Resguardo de la integridad de la comunidad escolar. Revisión de pertenencias bajo protocolos de derechos humanos (Mochila Segura solo con autorización y presencia de padres).'
      }
    ]
  },
  NEGLIGENCIA: {
    name: 'Negligencia / Omisión de Cuidados',
    consideredDocs: [
      LEGAL_FRAMEWORK.LGDNNA,
      LEGAL_FRAMEWORK.L573,
      LEGAL_FRAMEWORK.RAPF,
      LEGAL_FRAMEWORK.CONST
    ],
    legal: [
      {
        document: LEGAL_FRAMEWORK.LGDNNA,
        article: 'Art. 103',
        description: 'Obligaciones de quienes ejercen la patria potestad, tutela o guarda y custodia.'
      },
      {
        document: LEGAL_FRAMEWORK.RAPF,
        article: 'Obligaciones',
        description: 'Deber de los padres de colaborar con las autoridades escolares y vigilar la conducta de sus hijos.'
      }
    ]
  },
  LEVE: {
    name: 'Falta al Reglamento Escolar',
    consideredDocs: [
      LEGAL_FRAMEWORK.LEEV,
      LEGAL_FRAMEWORK.CONVIVENCIA,
      LEGAL_FRAMEWORK.LGE
    ],
    legal: [
      {
        document: LEGAL_FRAMEWORK.CONVIVENCIA,
        article: 'Normas Internas',
        description: 'Incumplimiento de normas de disciplina que no ponen en riesgo la integridad física.'
      },
      {
        document: LEGAL_FRAMEWORK.LGE,
        article: 'Derechos y Obligaciones',
        description: 'Corresponsabilidad de los educandos en su proceso educativo.'
      }
    ]
  }
};

export const ACTIONS_TEMPLATE: Record<RiskLevel, ActionStep[]> = {
  [RiskLevel.BAJO]: [
    { role: 'Docente', actions: ['Dialogar con el alumno en privado para entender el contexto.', 'Registrar el evento en la bitácora de grupo con fecha y hora.', 'Aplicar medida formativa y restaurativa acorde al Acuerdo de Convivencia.'] },
    { role: 'Director', actions: ['Supervisar que la medida sea formativa y no punitiva.', 'Dar visto bueno a la bitácora del docente.'] },
    { role: 'Padres', actions: ['Ser notificados mediante agenda o recado escolar.', 'Reforzar valores y conducta en casa.'] }
  ],
  [RiskLevel.MEDIO]: [
    { role: 'Docente', actions: ['Intervenir inmediatamente para cesar la conducta.', 'Elaborar reporte de incidencia detallado.', 'Solicitar intervención de trabajo social o departamento de orientación.', 'Citar a padres de familia.'] },
    { role: 'Director', actions: ['Atender a padres de familia mediante entrevista formal.', 'Levantar Acta Administrativa o de Hechos según corresponda.', 'Establecer Carta Compromiso de conducta.', 'Dar seguimiento a los acuerdos establecidos.'] },
    { role: 'Padres', actions: ['Acudir obligatoriamente al citatorio escolar.', 'Firmar acuerdos de corresponsabilidad.', 'Garantizar el cumplimiento de medidas en el hogar.'] }
  ],
  [RiskLevel.ALTO]: [
    { role: 'Docente', actions: ['ACTIVAR CÓDIGO DE EMERGENCIA INMEDIATO.', 'Resguardar a la víctima y separar al agresor (sin exponerse).', 'Evitar revictimización: NO interrogar sobre detalles traumáticos.', 'Informar a la Dirección inmediatamente por escrito (Bitácora).'] },
    { role: 'Director', actions: ['Notificar de inmediato al Supervisor Escolar.', 'Notificar a la Procuraduría de Protección de NNA (DIF Municipal/Estatal).', 'Dar aviso a Fiscalía General del Estado (si hay presunción de delito).', 'Levantar Acta Circunstanciada de Hechos con testigos de asistencia.', 'NO realizar investigación ministerial, solo administrativa.'] },
    { role: 'Padres', actions: ['Presentarse de urgencia en el plantel al ser notificados.', 'Recibir los oficios de canalización a dependencias externas.', 'Acompañar al menor a las instancias correspondientes (Fiscalía, Salud, DIF).'] }
  ]
};