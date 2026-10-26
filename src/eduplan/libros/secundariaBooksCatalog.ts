// Catálogo Curricular Oficial de Libros de Texto Gratuitos (SEP - NEM) para 1°, 2° y 3° de Secundaria
// Contiene la relación exacta de proyectos integradores, tomos de proyectos y libros disciplinares con páginas verificadas.

export interface LibroItem {
  grado: string;
  libro: string;
  campo: string;
  tema_o_proyecto: string;
  paginas: string;
  pagina_inicio: number;
  resumen?: string;
}

export const SECUNDARIA_BOOKS_CATALOG: Record<string, LibroItem[]> = {
  "1": [
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 1: Así lo expresan, así lo deben sentir y pensar",
      "paginas": "págs. 36-40",
      "pagina_inicio": 36,
      "resumen": "Así lo expresan, así lo deben sentir y pensar Mediante los sentidos, las personas perciben el entorno que las rodea Esta apreciación de la realidad provoca emociones"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 2: Cada uno con sus propias palabras",
      "paginas": "págs. 40-44",
      "pagina_inicio": 40,
      "resumen": "Cada uno con sus propias palabras De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 2: Cada uno con sus propias palabras",
      "paginas": "págs. 41-45",
      "pagina_inicio": 41,
      "resumen": "Cada uno con sus propias palabras Patrick Moran, autor del libro T eaching Culture: Perspectives in Practice (p 37), escribe que: “ the words of the language,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 3: Conversar y compartir, ése es el fin",
      "paginas": "págs. 44-48",
      "pagina_inicio": 44,
      "resumen": "W Interactuar y escuchar con atención y respeto las opiniones y dudas de la W Distinguir caracteres, grafías o letras propias de cada lengua, por ejemplo, la ñ en W Reflexionar en asamblea si se puede inferir la forma de ser de una comunidad a"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 3: Conversar y compartir, ése es el fin",
      "paginas": "págs. 45-49",
      "pagina_inicio": 45,
      "resumen": "Varias personas pueden estar frente a la misma manifestación artística Sin embargo, la forma como cada una la percibe es diferente, pues intervienen las experiencias"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 4: Lenguas indígenas en México",
      "paginas": "págs. 52-56",
      "pagina_inicio": 52,
      "resumen": "No tenemos experiencia en la lectura de textos en lengua indígena; por ello, se nos dificulta realizar un esquema lingüístico sobre la"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 5: ¡La magia de interpretar el mundo!",
      "paginas": "págs. 56-60",
      "pagina_inicio": 56,
      "resumen": "Desde épocas remotas, el ser humano se ha formulado preguntas elementales acerca de su pasado, su presente y su futuro La magia, la religión, la ciencia y el arte han intentado dar"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 6: Puntos de vista diferentes",
      "paginas": "págs. 60-64",
      "pagina_inicio": 60,
      "resumen": "W Exponer la información sobre los contenidos tratados W Resolver acertivamente situaciones imprevistas W Interactuar con los asistentes"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 6: Puntos de vista diferentes",
      "paginas": "págs. 61-65",
      "pagina_inicio": 61,
      "resumen": "Resulta interesante leer sobre eventos culturales similares en comunidades hispanohablantes y anglófonas Al hacerlo, se encuentran semejanzas y diferencias relacionadas con lo que significa la diversidad"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 7: ¡Qué bonita es mi tierra!",
      "paginas": "págs. 68-72",
      "pagina_inicio": 68,
      "resumen": "La cultura está compuesta por elementos distintivos característicos de una comunidad, heredados de generación en generación Algunos son la comida, las manifestaciones culturales como"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 8: ¡Trabajos que atrapan la atención!",
      "paginas": "págs. 72-76",
      "pagina_inicio": 72,
      "resumen": "¡Trabajos que atrapan la atención! Analizar, mediante la elaboración de un objeto artesanal, diferentes productos de este tipo creados"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 9: Rasgos iguales, rasgos diferentes",
      "paginas": "págs. 76-80",
      "pagina_inicio": 76,
      "resumen": "Rasgos iguales, rasgos diferentes realizado durante el desarrollo más detalle dicho nivel y guíate"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 9: Rasgos iguales, rasgos diferentes",
      "paginas": "págs. 77-81",
      "pagina_inicio": 77,
      "resumen": "La diferencia es un rasgo esencial de toda comunidad Sin embargo, existe algo que une a las personas, les da identidad y las hace sentir orgullosas de cómo se vive"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 10: Lenguas cambiantes",
      "paginas": "págs. 84-88",
      "pagina_inicio": 84,
      "resumen": "En asamblea, lean las situaciones problemáticas presentadas y seleccionen la opción más cercana a su contexto En comunidad, comenten cuáles son las razones por las"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 11: ¡Las palabras de mi comunidad!",
      "paginas": "págs. 88-92",
      "pagina_inicio": 88,
      "resumen": "W Presentar y exponer el contenido y los resultados obtenidos W Estar preparados para resolver dudas W Escuchar las opiniones de los otros sobre su proyecto"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 11: ¡Las palabras de mi comunidad!",
      "paginas": "págs. 89-93",
      "pagina_inicio": 89,
      "resumen": "La comunicación es fundamental en todas las sociedades Por medio de la lengua, es posible transmitir emociones, conceptos e ideas del lugar al que pertenecen Asimismo,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 12: Las lenguas indígenas están vivas",
      "paginas": "págs. 92-96",
      "pagina_inicio": 92,
      "resumen": "Las lenguas indígenas están vivas Para lograr el horizonte de expectativas de este proyecto, es esencial hacer una presentación con los resultados de las"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 12: Las lenguas indígenas están vivas",
      "paginas": "págs. 93-97",
      "pagina_inicio": 93,
      "resumen": "Las lenguas indígenas están vivas Para los pueblos indígenas, las lenguas no son sólo símbolos de identidad y pertenencia a una comunidad, también son medios"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 13: Narrando soluciones colectivas a problemáticas comunitarias",
      "paginas": "págs. 100-104",
      "pagina_inicio": 100,
      "resumen": "Narrando soluciones colectivas a problemáticas comunitarias En toda comunidad, existen problemas debido a diferencias entre personas o grupos, y resolverlos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: Narrando soluciones colectivas a problemáticas comunitarias",
      "paginas": "págs. 101-105",
      "pagina_inicio": 101,
      "resumen": "Narrando soluciones colectivas a problemáticas comunitarias Las problemáticas comunitarias necesitan respuestas colectivas para resolverse, por eso es importante"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: Exponemos los problemas comunitarios",
      "paginas": "págs. 104-108",
      "pagina_inicio": 104,
      "resumen": "Exponemos los problemas comunitarios W Ofrecer una introducción acerca del proyecto donde se explique su horizonte de expectativas y el proceso para llegar a él"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: Exponemos los problemas comunitarios",
      "paginas": "págs. 105-109",
      "pagina_inicio": 105,
      "resumen": "Exponemos los problemas comunitarios Es importante que todas las personas integrantes de la comunidad identifiquen y conozcan las principales"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 15: Aprendiendo juntos es mejor",
      "paginas": "págs. 108-112",
      "pagina_inicio": 108,
      "resumen": "W Realizar una introducción del proyecto y explicar los resultados W Presentar su texto expositivo, explicando los acontecimientos y las problemáticas de la comunidad de manera objetiva y precisa"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 15: Aprendiendo juntos es mejor",
      "paginas": "págs. 109-113",
      "pagina_inicio": 109,
      "resumen": "escritura: el uso de fuentes de El aprendizaje colaborativo puede darse entre diferentes comunidades Éstas pueden aprender de las"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 1: ¡El gran centro de control!",
      "paginas": "págs. 118-122",
      "pagina_inicio": 118,
      "resumen": "Representar el sistema nervioso central en la coordinación del cuerpo con la elaboración de carteles gráficos, utilizando las constantes"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 2: ¡Mensajeros químicos que apoyan en el control!",
      "paginas": "págs. 120-124",
      "pagina_inicio": 120,
      "resumen": "Para realizar la presentación, todo debe estar muy bien organizado Por ello, consideren los siguientes puntos: W Revisar y comprender lo que van realizar Eviten memorizar"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 2: ¡Mensajeros químicos que apoyan en el control!",
      "paginas": "págs. 121-125",
      "pagina_inicio": 121,
      "resumen": "¡Mensajeros químicos que apoyan en el control! El sistema nervioso central es un gran centro de control, pero no es el único, también existen otros Ahora estudiarán"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 3: ¡Daños a los centros de control!",
      "paginas": "págs. 126-130",
      "pagina_inicio": 126,
      "resumen": "¡Daños a los centros de control! En la actualidad, las adicciones preocupan a todxs, pues causan graves problemas al organismo, particularmente"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 4: ¡Seamos responsables con nuestra vida y la vida de los demás!",
      "paginas": "págs. 132-136",
      "pagina_inicio": 132,
      "resumen": "¡Seamos responsables con nuestra vida y la vida de los demás! Es fundamental abordar los contenidos centrales de salud sexual y reproductiva relacionados con su sexualidad y"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 5: ¡Igualdad de derechos y responsabilidades!",
      "paginas": "págs. 136-140",
      "pagina_inicio": 136,
      "resumen": "Se les sugiere recabar información sobre la igualdad de género y responsabilidad compartida en la prevención del embarazo adolescente y la"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 6: ¡Elijamos con sabiduría!",
      "paginas": "págs. 140-144",
      "pagina_inicio": 140,
      "resumen": "En esta etapa de su vida, es prioritario que conozcan qué son los métodos anticonceptivos, cuáles son los más eficaces y cuáles son los que fallan más a menudo"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 7: ¡Una pandemia que permanece: la diabetes!",
      "paginas": "págs. 146-150",
      "pagina_inicio": 146,
      "resumen": "¡Una pandemia que permanece: la diabetes! En México, como en el resto del mundo, la diabetes se ha convertido en una pandemia"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 8: ¿Obesidad infantil?",
      "paginas": "págs. 150-154",
      "pagina_inicio": 150,
      "resumen": "México ocupa el primer lugar mundial en obesidad infantil La enfermedad también está presente en adultos y hasta en infantes en edad preescolar Éste es un dato preocupante,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 9: ¡Hábitos para una vida saludable!",
      "paginas": "págs. 154-158",
      "pagina_inicio": 154,
      "resumen": "¡Hábitos para una vida saludable! La esperanza de vida de un ser humano se estima en 75 años, comparado con el tiempo del origen del"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 10: ¡Con lo que contamos!",
      "paginas": "págs. 160-164",
      "pagina_inicio": 160,
      "resumen": "Los recursos naturales son aquellos productos que proporciona la naturaleza a los seres vivos para cubrir sus necesidades; por ello, en la"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 11: Los ecosistemas",
      "paginas": "págs. 164-168",
      "pagina_inicio": 164,
      "resumen": "La ecología es la ciencia que estudia las relaciones de los seres vivos con el medio que habitan Por medio de ella, comprendemos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 12: De la vida nómada a la sedentaria",
      "paginas": "págs. 168-172",
      "pagina_inicio": 168,
      "resumen": "Elijan aquella situación problemática que se identifique más con ustedes Destinen tiempo a intercambiar opiniones y analícenlas de forma comunitaria"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: ¡Un fenómeno local del planeta Tierra!",
      "paginas": "págs. 174-178",
      "pagina_inicio": 174,
      "resumen": "El título afirma que la vida, tal posibilidad de vida en otros lugares del Universo Hasta la fecha, no se"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 14: ¡Los cinco reinos de seres vivientes!",
      "paginas": "págs. 178-182",
      "pagina_inicio": 178,
      "resumen": "¡Los cinco reinos de seres vivientes! Del número total de especies que han existido, se estima que están extintas casi"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Las alas de los insectos, las aves y los murciélagos",
      "paginas": "págs. 182-186",
      "pagina_inicio": 182,
      "resumen": "Las alas de los insectos, las aves y los murciélagos Por algún ancestro en común, las alas de los murciélagos, los brazos de los seres humanos y las alas de las aves son"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 1: El espacio geográfico como producto social",
      "paginas": "págs. 190-194",
      "pagina_inicio": 190,
      "resumen": "Como integrantes de una comunidad es importante contar con un elemento que represente el espacio en donde viven y en donde puedan identificar los componentes que lo conforman"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 2: El patrimonio biocultural y su fortalecimiento",
      "paginas": "págs. 194-198",
      "pagina_inicio": 194,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que indique tu"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 2: El patrimonio biocultural y su fortalecimiento",
      "paginas": "págs. 195-199",
      "pagina_inicio": 195,
      "resumen": "El patrimonio biocultural y su fortalecimiento Los conocimientos y prácticas culturales que el ser humano ha desarrollado a lo largo del tiempo tienen una estrecha"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 3: Las dimensiones del espacio geográfico",
      "paginas": "págs. 200-204",
      "pagina_inicio": 200,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que indique tu"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 3: Las dimensiones del espacio geográfico",
      "paginas": "págs. 201-205",
      "pagina_inicio": 201,
      "resumen": "Las dimensiones del espacio geográfico Las categorías de análisis del espacio geográfico como el lugar, el paisaje, la"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 4: Dos son más peligrosos",
      "paginas": "págs. 208-212",
      "pagina_inicio": 208,
      "resumen": "La inclusión de contenidos como los procesos naturales de la Tierra y los riesgos de desastre son cruciales para la formación integral del proyecto Su revisión es fundamental para"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 4: Dos son más peligrosos",
      "paginas": "págs. 209-213",
      "pagina_inicio": 209,
      "resumen": "Existen regiones en el mundo que, por sus características y su localización, son más vulnerables a huracanes o lluvias extraordinarias que provocan desbordamientos de ríos, lagos y lagunas y, con ello,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 5: Movimiento bajo nuestros pies",
      "paginas": "págs. 212-216",
      "pagina_inicio": 212,
      "resumen": "Una vez elaborado el mapa revelador de riesgos local o nacional, preséntenlo a la comunidad escolar Consideren las siguientes sugerencias: W Reunir los elementos necesarios para llevar a cabo su presentación"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 5: Movimiento bajo nuestros pies",
      "paginas": "págs. 213-217",
      "pagina_inicio": 213,
      "resumen": "Comprender la dinámica interna del planeta resulta complicado mediante la lectura de textos, incluso si cuentan con esquemas o dibujos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 6: Reducción y prevención de desastres",
      "paginas": "págs. 218-222",
      "pagina_inicio": 218,
      "resumen": "Reducción y prevención de desastres Relacionar los tipos de riesgo y la vulnerabilidad de la población"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: De la multitud a la comunidad",
      "paginas": "págs. 226-230",
      "pagina_inicio": 226,
      "resumen": "Conocer el crecimiento de la población y cómo se distribuye en los estados del país permite que sea posible identificar las necesidades de sus habitantes"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: Paso de fronteras",
      "paginas": "págs. 232-236",
      "pagina_inicio": 232,
      "resumen": "Como integrantes de una comunidad, probablemente han estado en contacto con el fenómeno migratorio Tal vez conozcan, en su"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 9: Celebrando la riqueza cultural de México",
      "paginas": "págs. 236-240",
      "pagina_inicio": 236,
      "resumen": "Celebrando la riqueza cultural de México México es un país con una abundante diversidad cultural, la cual se refleja en su gastronomía,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 10: Los espacios económicos",
      "paginas": "págs. 244-248",
      "pagina_inicio": 244,
      "resumen": "Al comprender las implicaciones de los procesos económicos es posible tomar decisiones libres, conscientes e informadas sobre la gestión de los recursos, lo que, a su"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 11: Construir un futuro más justo",
      "paginas": "págs. 250-254",
      "pagina_inicio": 250,
      "resumen": "Existe un vínculo entre la desigualdad socioeconómica de las personas y los problemas del medio ambiente que hay en el mundo Por un lado, hay escasez de elementos esenciales para vivir como son el aire limpio y"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 12: Hacia un futuro sostenible",
      "paginas": "págs. 254-258",
      "pagina_inicio": 254,
      "resumen": "El desarrollo sostenible es una cuestión clave en la agenda global y es esencial para garantizar un futuro próspero y equitativo para todxs Además, tiene como finalidad lograr"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 1: Sin metas no hay futuro",
      "paginas": "págs. 264-268",
      "pagina_inicio": 264,
      "resumen": "Como estudiantes de T elesecundaria, día a día, toman decisiones para lograr propósitos individuales o colectivos a corto, mediano y largo plazo Para ello, conviene partir de una"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 2: Me conozco, reconozco y lo expreso",
      "paginas": "págs. 268-272",
      "pagina_inicio": 268,
      "resumen": "W Asegurar la participación de todxs W Permitir la retroalimentación en las presentaciones W Valorar el esfuerzo y las aportaciones de todxs"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 2: Me conozco, reconozco y lo expreso",
      "paginas": "págs. 269-273",
      "pagina_inicio": 269,
      "resumen": "Es importante descubrir, mediante el reconocimiento de nuestras ideas, posibilidades, intereses y deseos la pertenencia a una comunidad Reconozcan, mediante una carta familiar, las similitudes y diferencias"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 3: Un momento divertido para decidir",
      "paginas": "págs. 272-276",
      "pagina_inicio": 272,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 3: Un momento divertido para decidir",
      "paginas": "págs. 273-277",
      "pagina_inicio": 273,
      "resumen": "Una forma de promover el pensamiento estratégico y creativo es a través de actividades deportivas, donde se establezcan reglas, metas o tácticas A continuación, se presentan dos situaciones"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 4: La innovación como medio de mejora",
      "paginas": "págs. 280-284",
      "pagina_inicio": 280,
      "resumen": "La innovación como medio de mejora El desarrollo y la innovación de la tecnología han optimizado diversos procesos cotidianos, los cuales se han vuelto más eficientes,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 5: Un coloquio local",
      "paginas": "págs. 286-290",
      "pagina_inicio": 286,
      "resumen": "Es importante identificar las necesidades del lugar donde viven y las relaciones que hay entre las personas y la manera como interactúan La comunidad se encarga de prestar un servicio"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 6: Un reporte escrito de valoración",
      "paginas": "págs. 290-294",
      "pagina_inicio": 290,
      "resumen": "W Retroalimentar la participación de todxs en el coloquio W Valorar los aspectos que pueden mejorarse para futuros eventos W Dialogar acerca del trabajo colaborativo realizado"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 6: Un reporte escrito de valoración",
      "paginas": "págs. 291-295",
      "pagina_inicio": 291,
      "resumen": "Un reporte escrito de valoración Los procesos productivos del lugar donde habitan juegan un papel muy importante debido a que éstos permiten transformar los recursos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 16: ¡Arte, juego y color en el lenguaje!",
      "paginas": "págs. 14-18",
      "pagina_inicio": 14,
      "resumen": "¡Arte, juego y color en el lenguaje! Al hablar, nuestras palabras cobran vida y adquieren el poder de crear o destruir, embellecer o deformar, entretener o aburrir"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: Expresiones que nos definen",
      "paginas": "págs. 18-22",
      "pagina_inicio": 18,
      "resumen": "W C omentar cuáles fueron las experiencias durante la realización de este glosario bilingüe: qué dificultades tuvieron, cómo las resolvieron y cuál fue su horizonte de expectativas"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: Expresiones que nos definen",
      "paginas": "págs. 19-23",
      "pagina_inicio": 19,
      "resumen": "Al hablar o escribir se manifiesta una forma muy particular de ver el mundo Los gestos, las entonaciones y el estilo con el cual se construyen las frases dicen mucho de quien habla y de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 18: Hablemos de arte",
      "paginas": "págs. 22-26",
      "pagina_inicio": 22,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que indique tu"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 18: Hablemos de arte",
      "paginas": "págs. 23-27",
      "pagina_inicio": 23,
      "resumen": "Representar y dar forma a la realidad del entorno es una inquietud y una necesidad inherente a la naturaleza humana, pero ¿en qué momento esas representaciones se"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 19: Revelando la belleza oculta en letras",
      "paginas": "págs. 30-34",
      "pagina_inicio": 30,
      "resumen": "Revelando la belleza oculta en letras Muchas veces no se reconoce ni valora la capacidad expresiva y la belleza de la lengua debido al desconocimiento que existe de ella"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 20: Reconect-ARTE con tu comunidad",
      "paginas": "págs. 34-38",
      "pagina_inicio": 34,
      "resumen": "Realizar de forma individual un dibujo de algún espacio o manifestación artística del contexto en el que viven para elaborar un mural de dibujos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 21: Entre expertos: el juego es arte",
      "paginas": "págs. 38-42",
      "pagina_inicio": 38,
      "resumen": "Entre expertos: el juego es arte El arte, en todas sus manifestaciones, permite al ser humano y a los grupos sociales expresar y manifestar"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 22: Un fichero de información",
      "paginas": "págs. 46-50",
      "pagina_inicio": 46,
      "resumen": "La filología realiza la tarea de estudiar, analizar, organizar y clasificar las obras escritas para conocer y comprender su evolución e importancia"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 23: Un poemario multilingüe",
      "paginas": "págs. 50-54",
      "pagina_inicio": 50,
      "resumen": "Los textos líricos, como los poemas, implican un gran valor estético: destacan por su belleza, creatividad, simbolismo y fuerza"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 24: Después de leer, vamos a platicar",
      "paginas": "págs. 54-58",
      "pagina_inicio": 54,
      "resumen": "Después de leer, vamos a platicar Algunas personas quieren mejorar su ortografía, redacción, vocabulario y beneficiarse de la práctica constante de la lectura Existen muchas intenciones para leer: buscar información,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 25: Lo mejor de lo mejor",
      "paginas": "págs. 60-64",
      "pagina_inicio": 60,
      "resumen": "Con el paso del tiempo va quedando lo perdurable; es decir, lo que resiste, aquello que es valioso, como el arte, el cual se cuida porque cobra significado para un grupo"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 26: Dilo como sea, pero aquí coincidimos",
      "paginas": "págs. 64-68",
      "pagina_inicio": 64,
      "resumen": "Dilo como sea, pero aquí coincidimos La escultura, la danza o la música pueden coincidir en algunas características, por ejemplo: el movimiento, la armonía, el ritmo"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 27: ¡Ni fácil ni difícil!",
      "paginas": "págs. 68-72",
      "pagina_inicio": 68,
      "resumen": "Una niña o un niño aprende la lengua que se habla en su grupo social Al hablar o comunicarse, ya sea por gesticulaciones, lectura de labios, señas o sonidos, demuestra su capacidad para intercambiar"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 28: Expresa tus emociones, sentimientos e ideas",
      "paginas": "págs. 74-78",
      "pagina_inicio": 74,
      "resumen": "Expresa tus emociones, sentimientos e ideas Cuando se inicia algo nuevo e importante en la vida, se experimentan múltiples emociones"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 29: Vamos a discurrir",
      "paginas": "págs. 78-82",
      "pagina_inicio": 78,
      "resumen": "justamente es todo lo contrario de algo en los que escuchan con el fin de concientizar sobre la"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 30: Aprendiendo y jugando, jugando y recordando",
      "paginas": "págs. 82-86",
      "pagina_inicio": 82,
      "resumen": "Aprendiendo y jugando, jugando y recordando Lo lúdico hace referencia a la diversión y al juego, dos elementos que no suelen asociarse con el aprendizaje y el estudio Una de las"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 16: ¡Hay vida en cualquier lugar!",
      "paginas": "págs. 92-96",
      "pagina_inicio": 92,
      "resumen": "W Diseñarán un cronograma de actividades, tareas e insumos acorde con los tiempos disponibles para cada proyecto W Utilizarán materiales de uso común y de preferencia"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 16: ¡Hay vida en cualquier lugar!",
      "paginas": "págs. 93-97",
      "pagina_inicio": 93,
      "resumen": "Al tratarse de una actividad colectiva, es importante el apoyo de la comunidad escolar que forma parte de este proyecto Es necesario familiarizarse con las etapas para adquirir habilidades"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: La gráfica en la comprensión del pensamiento científico",
      "paginas": "págs. 98-102",
      "pagina_inicio": 98,
      "resumen": "La gráfica en la comprensión del pensamiento científico Es necesario resaltar la importancia del aprendizaje y el desarrollo de un pensamiento"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 18: Los cambios que ha sufrido la biodiversidad",
      "paginas": "págs. 102-106",
      "pagina_inicio": 102,
      "resumen": "Los cambios que ha sufrido la biodiversidad y herramientas matemáticas para del contenido, así como la teoría"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 19: ¿Cadena trófica y ecuaciones?",
      "paginas": "págs. 108-112",
      "pagina_inicio": 108,
      "resumen": "En comunidad, dialoguen acerca de la situación que consideren más adecuada y reflexionen acerca de la elaboración de la maqueta, así como su importancia en"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 20: Las matemáticas y su importancia en los ecosistemas",
      "paginas": "págs. 112-116",
      "pagina_inicio": 112,
      "resumen": "Las matemáticas y su importancia en los ecosistemas Al escuchar sobre las interacciones biológicas de competencia e interdependencia, surge la curiosidad acerca de su relación"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 21: Trazo de ciclos biogeoquímicos",
      "paginas": "págs. 116-120",
      "pagina_inicio": 116,
      "resumen": "apoyar para explicar los procesos La existencia de un problema no siempre tiene que considerarse como algo complejo Obsérvenlo como una oportunidad de aprender,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 22: La existencia de triángulos en el interior de los virus y las bacterias",
      "paginas": "págs. 122-126",
      "pagina_inicio": 122,
      "resumen": "La existencia de triángulos en el interior de los virus y las bacterias Lean las siguientes situaciones problemáticas y elijan la que se adapte a su contexto Si es necesario, modifíquenla o generen una propia"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 23: Las células animales y vegetales usan los números fraccionarios",
      "paginas": "págs. 126-130",
      "pagina_inicio": 126,
      "resumen": "Las células animales y vegetales usan los números fraccionarios T odo el entorno natural se conforma de células, como se aprendió en el contenido"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 24: ¡Los genes tienen una carga muy pesada!",
      "paginas": "págs. 130-134",
      "pagina_inicio": 130,
      "resumen": "¡Los genes tienen una carga muy pesada! las y los estudiantes a prestar ¿En alguna ocasión han escuchado la frase"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: ¡Bacterias y círculos!",
      "paginas": "págs. 136-140",
      "pagina_inicio": 136,
      "resumen": "Revisen las siguientes situaciones problemáticas Luego, decidan cuál de los textos describe mejor su posición ante la situación mencionada o redacten una propia Etapa 3"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 26: La curiosa estructura de un virus y su parecido con una figura geométrica",
      "paginas": "págs. 138-142",
      "pagina_inicio": 138,
      "resumen": "W O rganizar a la comunidad alrededor del espacio asignado para la presentación espetar los tiempos asignados para cada participante con la finalidad de asegurar la cobertura de los contenidos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 26: La curiosa estructura de un virus y su parecido con una figura geométrica",
      "paginas": "págs. 139-143",
      "pagina_inicio": 139,
      "resumen": "La curiosa estructura de un virus y su parecido con una figura geométrica Comenten en asamblea sus conocimientos acerca de la reciente pandemia por covid-19 Dialoguen"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 27: ¡Más vale prevenir! ¡No dejes de vacunarte!",
      "paginas": "págs. 142-146",
      "pagina_inicio": 142,
      "resumen": "¡Más vale prevenir! ¡No dejes de vacunarte! Desde el momento de nacer, y a lo largo de toda la vida, es necesario recibir vacunas para protegerse de diversas enfermedades Hace poco se"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 28: Entender el calentamiento global con el uso de un lenguaje algebraico",
      "paginas": "págs. 148-152",
      "pagina_inicio": 148,
      "resumen": "Lean las siguientes situaciones problemáticas y elijan la que se adapte a su contexto Si es necesario, modifíquenla o generen una propia Artes y experiencias estéticas:"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 29: Los polígonos cuantifican los daños del calentamiento global",
      "paginas": "págs. 152-156",
      "pagina_inicio": 152,
      "resumen": "Lean las siguientes situaciones problemáticas y elijan la que se adapte a su contexto Si es necesario,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 30: Contaminantes del calentamiento global con los números fraccionarios",
      "paginas": "págs. 156-160",
      "pagina_inicio": 156,
      "resumen": "Contaminantes del calentamiento global con los números fraccionarios Para continuar con los contenidos relacionados al calentamiento global,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: Cambio de suelos y de sueños",
      "paginas": "págs. 164-168",
      "pagina_inicio": 164,
      "resumen": "La interacción de los seres vivos, como los humanos, con el medio ambiente es constante Se consumen productos que vienen de la tierra, se compran, se siembran y"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: El cambio empieza por la mirada",
      "paginas": "págs. 168-172",
      "pagina_inicio": 168,
      "resumen": "El cambio empieza por la mirada El cambio climático se ve reflejado en el calentamiento global, el descongelamiento de los glaciares, la"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 15: Aquí vivimos",
      "paginas": "págs. 172-176",
      "pagina_inicio": 172,
      "resumen": "A partir de la organización sedentaria de las sociedades y de que la población ha comenzado a crecer, se han originado ciertas problemáticas, por ejemplo: demanda de más espacios"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 16: Mitos de la creación",
      "paginas": "págs. 178-182",
      "pagina_inicio": 178,
      "resumen": "Para comenzar, pueden reflexionar sobre lo siguiente: ¿quiénes estaban antes que nosotros? Conocer nuestro origen y cuestionar hacia dónde"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 17: Los huesos hablan",
      "paginas": "págs. 182-186",
      "pagina_inicio": 182,
      "resumen": "Hay evidencias materiales de seres humanos que existieron hace miles de años, éstos reciben el nombre de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 18: ¿Qué me cuenta la vestimenta?",
      "paginas": "págs. 186-190",
      "pagina_inicio": 186,
      "resumen": "Hasta aquí, seguramente han logrado identificar y diferenciar los tipos de fuentes históricas que existen De igual manera, la vestimenta se"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 19: Revisemos el pasado",
      "paginas": "págs. 194-198",
      "pagina_inicio": 194,
      "resumen": "En algún momento de la vida, los seres humanos se han preguntado sobre el origen de la humanidad, y la incertidumbre los orilló a buscar información Pronto se percataron de que la información"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 20: El juego de pelota en Mesoamérica",
      "paginas": "págs. 198-202",
      "pagina_inicio": 198,
      "resumen": "El juego de pelota en Mesoamérica Los pueblos originarios de México tenían una forma propia de ver e interpretar el mundo Derivado de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 21: La gente que vivió en el desierto",
      "paginas": "págs. 202-206",
      "pagina_inicio": 202,
      "resumen": "La gente que vivió en el desierto W R esponder las preguntas del público para aclarar cualquier duda o confusión sobre la información presentada"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 21: La gente que vivió en el desierto",
      "paginas": "págs. 203-207",
      "pagina_inicio": 203,
      "resumen": "La gente que vivió en el desierto México es un país privilegiado: su ubicación en el mundo tiene condiciones que hacen posible la existencia de bosques, selvas,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 22: El pez grande no se llena, siempre quiere comer más",
      "paginas": "págs. 210-214",
      "pagina_inicio": 210,
      "resumen": "El pez grande no se llena, siempre quiere comer más Los antiguos habitantes de estas tierras, como los pueblos de cualquier parte del mundo, tenían problemas en su organización"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 23: Respeto a la diversidad cultural",
      "paginas": "págs. 214-218",
      "pagina_inicio": 214,
      "resumen": "W R evisar que todo esté en su lugar y que se tiene la información W C omunicar de manera clara y precisa los conocimientos adquiridos gracias al archivo, fomentando la participación de los invitados para"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 23: Respeto a la diversidad cultural",
      "paginas": "págs. 215-219",
      "pagina_inicio": 215,
      "resumen": "Respeto a la diversidad cultural Seguramente, tienen conocimiento sobre los conflictos internacionales del pasado o los de la actualidad Entre"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 24: Aquí vivimos",
      "paginas": "págs. 218-222",
      "pagina_inicio": 218,
      "resumen": "xplicar cada sección del periódico mural y proporcionar ejemplos para que las ideas sean claras ar un tono de voz adecuado, exponer con claridad y"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 24: Aquí vivimos",
      "paginas": "págs. 219-223",
      "pagina_inicio": 219,
      "resumen": "La humanidad, a lo largo de su historia, ha tenido momentos de conflictividad y violencia que ejercen algunas comunidades sobre otras,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: Taller estudiantil del autoconocimiento",
      "paginas": "págs. 228-232",
      "pagina_inicio": 228,
      "resumen": "Taller estudiantil del autoconocimiento El desarrollo del ser humano tiene varias etapas que enden infancia, adolescencia, juventud, adultez y"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: Mi guía personal de prevención de riesgos",
      "paginas": "págs. 232-236",
      "pagina_inicio": 232,
      "resumen": "evisar las actividades que se realizarán en cada taller erificar que se cuenta con los materiales necesarios W R ealizar las actividades planeadas con respeto"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: Mi guía personal de prevención de riesgos",
      "paginas": "págs. 233-237",
      "pagina_inicio": 233,
      "resumen": "Mi guía personal de prevención de riesgos Como adolescentes, siempre están propensos a vivir situaciones que ponen en peligro su integridad física y emocional Por eso,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 9: Descubro mis fortalezas, debilidades y potencialidades",
      "paginas": "págs. 236-240",
      "pagina_inicio": 236,
      "resumen": "T omen en cuenta las siguientes sugerencias para finalizar su guía, de esta manera podrán asegurarse de que todo esté en orden W V erificar la información que se va a utilizar"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 9: Descubro mis fortalezas, debilidades y potencialidades",
      "paginas": "págs. 237-241",
      "pagina_inicio": 237,
      "resumen": "Descubro mis fortalezas, debilidades y potencialidades En la adolescencia es difícil identificar fortalezas y debilidades, debido a que la tarea de reconocerse como seres individuales y diferentes a"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 10: Herramientas y máquinas en mi comunidad",
      "paginas": "págs. 244-248",
      "pagina_inicio": 244,
      "resumen": "Herramientas y máquinas en mi comunidad Las herramientas y el uso de máquinas en la comunidad son importantes, ya que facilitan el desarrollo de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 11: La prevención ante riesgos",
      "paginas": "págs. 248-252",
      "pagina_inicio": 248,
      "resumen": "Al llevar a cabo actividades en la comunidad y el entorno ambiental se pueden presentar riesgos que afectan la salud, la seguridad y el medio ambiente Es importante reconocer las causas y los efectos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 12: Mi comunidad a través de un mural",
      "paginas": "págs. 252-256",
      "pagina_inicio": 252,
      "resumen": "Mi comunidad a través de un mural En las comunidades se llevan a cabo diversos procesos productivos, los cuales permiten ofrecer servicios o productos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 31: Entre lo notable y lo cotidiano",
      "paginas": "págs. 14-18",
      "pagina_inicio": 14,
      "resumen": "En comunidades, establezcan el horizonte de expectativas que guiará el proceso de trabajo Seleccionen o ajusten alguna de las propuestas de la siguiente página"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: Entre letras y pinceles: la memoria colectiva",
      "paginas": "págs. 18-22",
      "pagina_inicio": 18,
      "resumen": "Entre letras y pinceles: la memoria colectiva De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: Entre letras y pinceles: la memoria colectiva",
      "paginas": "págs. 19-23",
      "pagina_inicio": 19,
      "resumen": "Entre letras y pinceles: la memoria colectiva La memoria colectiva y su manifestación en la comunidad son fundamentales para"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 33: El arte de la memoria",
      "paginas": "págs. 22-26",
      "pagina_inicio": 22,
      "resumen": "W Introducir claramente el contenido y el propósito de la exposición W Presentar los diferentes géneros textuales y artísticos que se abordan en el contenido con ejemplos, explicaciones claras y voz audible"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 33: El arte de la memoria",
      "paginas": "págs. 23-27",
      "pagina_inicio": 23,
      "resumen": "Los acervos artísticos son importantes para la construcción de la memoria colectiva Las obras de artistas y creadores reflejan y expresan las experiencias, emociones"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 34: Diálogos efectivos",
      "paginas": "págs. 30-34",
      "pagina_inicio": 30,
      "resumen": "Como integrantes de una comunidad, es importante practicar una comunicación efectiva y respetuosa que facilite expresar pensamientos, necesidades y"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 35: Rompiendo el ciclo",
      "paginas": "págs. 34-38",
      "pagina_inicio": 34,
      "resumen": "W Realizar una asamblea donde se reflexione sobre la mesa de discusión y sus posibles mejoras con el fin de corregir las áreas de oportunidad y ofrecer una nueva versión en la presentación"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 35: Rompiendo el ciclo",
      "paginas": "págs. 35-39",
      "pagina_inicio": 35,
      "resumen": "Las expresiones de violencia se refieren a todas aquellas conductas y actitudes que afectan negativamente a las personas y generan situaciones"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 36: Uniendo esfuerzos",
      "paginas": "págs. 38-42",
      "pagina_inicio": 38,
      "resumen": "W Presentar el collage a la clase y explicar las interpretaciones y los significados detrás de las imágenes y los materiales utilizados W Invitar a la audiencia a compartir sus comentarios y opiniones,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 36: Uniendo esfuerzos",
      "paginas": "págs. 39-43",
      "pagina_inicio": 39,
      "resumen": "Con ello se cumple la finalidad Las acciones colectivas a favor de la sensibilización y erradicación de la violencia son un conjunto de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 37: Cuida tu salud, ¡pasa la voz!",
      "paginas": "págs. 46-50",
      "pagina_inicio": 46,
      "resumen": "Enfrentarse a un problema, en ocasiones, es motivo de incertidumbre; sin embargo, es necesario considerar diversas alternativas para localizar posibles soluciones Consideren lo siguiente:"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 38: Salud y costumbres: construyamos en comunidad",
      "paginas": "págs. 48-52",
      "pagina_inicio": 48,
      "resumen": "Después del trabajo de investigación, es necesario que organicen la información y diseñen la estructura e insumos de la presentación W Organizar los tiempos apoyándose en el cronograma"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 38: Salud y costumbres: construyamos en comunidad",
      "paginas": "págs. 49-53",
      "pagina_inicio": 49,
      "resumen": "Usar las variantes lingüísticas del lugar donde viven para escribir un artículo de divulgación sobre el análisis de las costumbres en la localidad, con el fin de difundir"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 39: ¡También puedes agregar tus propuestas!",
      "paginas": "págs. 52-56",
      "pagina_inicio": 52,
      "resumen": "W Realizar ejercicios de respiración para controlar los nervios W Solicitar la atención respetuosa de los oyentes W Reflexionar acerca de lo sucedido"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 39: ¡También puedes agregar tus propuestas!",
      "paginas": "págs. 53-57",
      "pagina_inicio": 53,
      "resumen": "¡También puedes agregar tus propuestas! Elaborar una historieta corta mediante la cual se despierte el interés por aprender acerca de los hábitos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 40: Un artículo de divulgación de la ciencia",
      "paginas": "págs. 60-64",
      "pagina_inicio": 60,
      "resumen": "Un artículo de divulgación de la ciencia Los artículos de divulgación científica son textos que hacen accesible el conocimiento especializado al público en general Buscan acercar la lectura y la comprensión del"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 41: ¡Una revista de mi comunidad!",
      "paginas": "págs. 62-66",
      "pagina_inicio": 62,
      "resumen": "W Intercambiar sus trabajos entre ustedes para hacer los últimos arreglos y repasar lo que expondrán Socialicen la siguiente información y verifiquen por última vez que"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 41: ¡Una revista de mi comunidad!",
      "paginas": "págs. 63-67",
      "pagina_inicio": 63,
      "resumen": "Los artículos de divulgación científica son aquellos que presentan, de manera accesible y para el público en general, información fundamentada en investigaciones Estos artículos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 42: Un diálogo guiado a la ciencia",
      "paginas": "págs. 66-70",
      "pagina_inicio": 66,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que indique tu"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 42: Un diálogo guiado a la ciencia",
      "paginas": "págs. 67-71",
      "pagina_inicio": 67,
      "resumen": "Con anterioridad, llevaron a cabo dos proyectos relacionados con la ciencia Ahora emplearán los conocimientos adquiridos para desarrollar éste y,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 43: Las manifestaciones artísticas de mi comunidad",
      "paginas": "págs. 74-78",
      "pagina_inicio": 74,
      "resumen": "Las manifestaciones artísticas de mi comunidad En cada región y estado del país existen manifestaciones culturales, pues cada comunidad expresa sus costumbres y"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 44: La canción de la empatía y la diversidad",
      "paginas": "págs. 78-82",
      "pagina_inicio": 78,
      "resumen": "La canción de la empatía y la diversidad Existen varias maneras de expresar emociones y sentimientos, por ejemplo, mediante"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 45: La semblanza de indígenas de orgullo",
      "paginas": "págs. 82-86",
      "pagina_inicio": 82,
      "resumen": "La semblanza de indígenas de orgullo Históricamente, las comunidades indígenas han sido discriminadas en los ámbitos social y político No obstante, desde hace tiempo se"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 31: Trucos ingeniosos con incógnitas",
      "paginas": "págs. 90-94",
      "pagina_inicio": 90,
      "resumen": "Trucos ingeniosos con incógnitas Resulta útil encontrar el valor de una incógnita a partir de datos que se conocen; las ecuaciones lineales pueden"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: Los modelos representan la realidad",
      "paginas": "págs. 94-98",
      "pagina_inicio": 94,
      "resumen": "Los modelos representan la realidad Investigar cómo resolver problemas planteados en una ecuación lineal y la jerarquía de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 33: Sucesiones de progresión aritmética",
      "paginas": "págs. 98-102",
      "pagina_inicio": 98,
      "resumen": "Sucesiones de progresión aritmética Percibir algo bello causa emociones, muchas veces sin comprender los principios que lo explican Las"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 34: El punto, las líneas y los ángulos",
      "paginas": "págs. 104-108",
      "pagina_inicio": 104,
      "resumen": "El punto, las líneas y los ángulos Para representar las rectas y los ángulos se utilizan signos que corresponden a su notación, los cuales"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 35: Círculo, circunferencia y esfera, ¡belleza y sencillez!",
      "paginas": "págs. 108-112",
      "pagina_inicio": 108,
      "resumen": "Círculo, circunferencia y esfera, ¡belleza y sencillez! En algunas corrientes artísticas se ha asociado a la sencillez con lo bello Parte de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 36: Hablar sobre las distancias",
      "paginas": "págs. 112-116",
      "pagina_inicio": 112,
      "resumen": "Artes y experiencias estéticas: Localizar información para que, mediante carteles ilustrados, se muestre cómo"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 37: ¡Donde hay materia, hay geometría!",
      "paginas": "págs. 118-122",
      "pagina_inicio": 118,
      "resumen": "¡Donde hay materia, hay geometría! El título de este proyecto es una frase célebre del astrónomo y matemático alemán Johannes Kepler En este proyecto se emplearán contenidos"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 38: El triángulo y los cuadriláteros",
      "paginas": "págs. 122-126",
      "pagina_inicio": 122,
      "resumen": "El triángulo y los cuadriláteros Ahora es momento de conocer el caso de los triángulos y los cuadriláteros, así como de las rectas notables que los componen"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 39: El estudio de los triángulos",
      "paginas": "págs. 126-130",
      "pagina_inicio": 126,
      "resumen": "En este proyecto revisarán la clasificación de los triángulos y los cuadriláteros Interpretar información mediante el"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 40: ¿Cuál es la importancia del microscopio?",
      "paginas": "págs. 132-136",
      "pagina_inicio": 132,
      "resumen": "¿Cuál es la importancia del microscopio? Anton van Leeuwenhoek, considerado el padre de la microbiología, realizó pequeños microscopios"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 41: ¡Éstas son las unidades vitales!",
      "paginas": "págs. 136-140",
      "pagina_inicio": 136,
      "resumen": "¡Éstas son las unidades vitales! El mundo celular microscópico que da asiento a la vida es fascinante Los orgánulos celulares"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 42: Las vacunas al rescate",
      "paginas": "págs. 140-144",
      "pagina_inicio": 140,
      "resumen": "Edward Jenner extrajo pus de la mano de una mujer que había contraído la viruela de las vacas Enseguida, el científico se"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 43: ¡Una piedra y un colibrí!",
      "paginas": "págs. 146-150",
      "pagina_inicio": 146,
      "resumen": "T odos los seres vivos son hermosos por naturaleza Cada uno cuenta con características únicas que lo hacen indispensable en los procesos biológicos, pero"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 44: ¡Bienestar y comodidad a costa de todo!",
      "paginas": "págs. 150-154",
      "pagina_inicio": 150,
      "resumen": "¡Bienestar y comodidad a costa de todo! El bienestar y la comodidad del ser humano, la mejora económica y tecnológica, además del crecimiento de las"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 45: ¡Un asunto candente que nos interesa a todxs!",
      "paginas": "págs. 154-158",
      "pagina_inicio": 154,
      "resumen": "¡Un asunto candente que nos interesa a todxs! Caminar y hacer uso de la bicicleta para recorrer distancias son prácticas sanas que contribuyen a evitar"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: ¡Las mujeres en defensa de sus derechos!",
      "paginas": "págs. 162-166",
      "pagina_inicio": 162,
      "resumen": "Llevar a cabo las tareas necesarias para elaborar el cuadro revelador puede originar algunas dificultades, puesto que requiere analizar la información que poseen sobre la historia de la participación de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 26: ¡Promovamos la igualdad!",
      "paginas": "págs. 166-170",
      "pagina_inicio": 166,
      "resumen": "Desde hace siglos, las mujeres han sido discriminadas y excluidas en diversas áreas de la vida social, educativa, política y económica Sin embargo, han luchado por la igualdad y el reconocimiento de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 27: Voces contra la violencia",
      "paginas": "págs. 170-174",
      "pagina_inicio": 170,
      "resumen": "La violencia es una problemática que afecta a todas las sociedades y en consecuencia a todas las personas de diferentes edades, incluyendo a niñas, niños y jóvenes En el contexto escolar, la"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 28: El amor a lo largo del tiempo",
      "paginas": "págs. 178-182",
      "pagina_inicio": 178,
      "resumen": "Desde la Antigüedad, en Grecia y Roma, el amor y la amistad se consideraban una forma para alcanzar la felicidad y la virtud, hasta la era moderna (entre los siglos xv y xviii), cuando la noción de la familia"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 29: ¡El quehacer de las personas a lo largo del tiempo!",
      "paginas": "págs. 182-186",
      "pagina_inicio": 182,
      "resumen": "¡El quehacer de las personas a lo largo del tiempo! Históricamente, las sociedades humanas han asignado roles sociales y actividades a las personas de acuerdo con su edad En los primeros"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 30: ¡Celebremos la diversidad cultural: valoremos nuestras diferencias!",
      "paginas": "págs. 186-190",
      "pagina_inicio": 186,
      "resumen": "La diversidad cultural ha permitido el contacto entre grupos y personas de distintas culturas Implica apertura y el conocimiento de otros saberes En las escuelas y comunidades se convive con"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 31: ¡Recordar la historia para no repetirla!",
      "paginas": "págs. 194-198",
      "pagina_inicio": 194,
      "resumen": "¡Recordar la historia para no repetirla! Investigar y analizar las causas históricas del racismo y la xenofobia, y sus consecuencias, para relacionarlas"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 32: Todas las personas construimos los derechos humanos",
      "paginas": "págs. 198-202",
      "pagina_inicio": 198,
      "resumen": "Todas las personas construimos los derechos humanos Si se quiere construir un mundo donde las normas y las leyes garanticen la convivencia y el ejercicio de los derechos humanos,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 33: ¡La interculturalidad como base para una cultura de paz!",
      "paginas": "págs. 202-206",
      "pagina_inicio": 202,
      "resumen": "Investigar sobre la interculturalidad y reflexionar acerca de los conceptos igualdad, inclusión y perspectiva de género desde una cultura de paz Posteriormente, elaborar un"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 34: Mis decisiones, mi democracia",
      "paginas": "págs. 208-212",
      "pagina_inicio": 208,
      "resumen": "Mediante la democracia se pueden construir espacios comunes para que cada integrante de la propia comunidad sea escuchado, valorado y considerado en la toma de"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 35: Nuestros representantes, ¿nos representan?",
      "paginas": "págs. 212-216",
      "pagina_inicio": 212,
      "resumen": "Nuestros representantes, ¿nos representan? La democracia es una forma de gobierno donde los integrantes de una comunidad participan en la toma de decisiones Este modelo"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 36: ¡Me expreso y participo!",
      "paginas": "págs. 216-220",
      "pagina_inicio": 216,
      "resumen": "La vida democrática, en muchas ocasiones, se percibe como externa y lejana, por lo que en la cotidianidad no se concibe la participación individual ni su incidencia en las políticas implementadas por las autoridades o los"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 13: Un plan personal de vida activa y saludable",
      "paginas": "págs. 224-228",
      "pagina_inicio": 224,
      "resumen": "Un plan personal de vida activa y saludable En la adolescencia, y en cualquier etapa de la vida, es importante llevar un estilo de vida activo y saludable"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 14: Mi plan estratégico familiar de vida activa y saludable",
      "paginas": "págs. 228-232",
      "pagina_inicio": 228,
      "resumen": "W Compartir su plan personal mediante un circuito de acción motriz con varias estaciones que se puedan realizar en diversos escenarios y momentos del día, tales como la escuela, la casa, el parque o un centro recreativo"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 14: Mi plan estratégico familiar de vida activa y saludable",
      "paginas": "págs. 229-233",
      "pagina_inicio": 229,
      "resumen": "Mi plan estratégico familiar de vida activa y saludable Dentro de la familia existen intereses, necesidades, posibilidades y potencialidades"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Un caso para reflexionar",
      "paginas": "págs. 232-236",
      "pagina_inicio": 232,
      "resumen": "W Exponer el plan estratégico familiar de forma práctica W Integrar a las familias de forma activa dentro de juegos, actividades, W Realizar comentarios y sugerencias sobre el plan de vida sana y saludable"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Un caso para reflexionar",
      "paginas": "págs. 233-237",
      "pagina_inicio": 233,
      "resumen": "El respeto a la dignidad, la libertad y la diversidad es uno de los pilares de la convivencia sana en todas las comunidades Para construir un ambiente de respeto, se"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 16: Un momento para innovar",
      "paginas": "págs. 240-244",
      "pagina_inicio": 240,
      "resumen": "Las dinámicas alternativas son aquellas que permiten generar cambios en un producto o servicio existente, ya sea para mejorarlo o para transformarlo totalmente Esto se logra gracias"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 17: Evaluación y mejora de un proceso técnico",
      "paginas": "págs. 244-248",
      "pagina_inicio": 244,
      "resumen": "Evaluación y mejora de un proceso técnico La innovación favorece la creación de nuevas ideas, productos y servicios para un bien común,"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 18: Mis sentimientos en tus sentimientos",
      "paginas": "págs. 248-252",
      "pagina_inicio": 248,
      "resumen": "Mis sentimientos en tus sentimientos A lo largo de la vida, resulta difícil distinguir las emociones y los sentimientos, incluso"
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Saberes y pensamiento científico Matemáticas Biología MateMáticas Ángulos",
      "paginas": "pág. 14",
      "pagina_inicio": 14,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Concepto de segmento",
      "paginas": "pág. 15",
      "pagina_inicio": 15,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Intersección de segmentos y formación de ángulos",
      "paginas": "pág. 19",
      "pagina_inicio": 19,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Tipos de ángulos",
      "paginas": "pág. 21",
      "pagina_inicio": 21,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Circunferencia 23 Trazo de rectas notables: radio, diámetro, cuerda, secante, tangente y arco 24 Conversión de números 27 Conversión de números decimales a fracciones",
      "paginas": "pág. 28",
      "pagina_inicio": 28,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Conversión de fracciones a números decimales",
      "paginas": "pág. 29",
      "pagina_inicio": 29,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Desigualdad del triángulo 30 Exploración de la desigualdad del triángulo 31 Ecuación lineal 33 Modela situaciones problemáticas donde se apliquen las ecuaciones lineales en su resolución 34 El cero y números negativos 39 Ubicación de los números negativos en la recta numérica",
      "paginas": "pág. 40",
      "pagina_inicio": 40,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "El círculo 42 Figuras relacionadas con los círculos",
      "paginas": "pág. 43",
      "pagina_inicio": 43,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Propiedades de los círculos",
      "paginas": "pág. 45",
      "pagina_inicio": 45,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Extensión del significado de la suma y la multiplicación 47 Propiedad conmutativa",
      "paginas": "pág. 48",
      "pagina_inicio": 48,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Propiedad asociativa",
      "paginas": "pág. 49",
      "pagina_inicio": 49,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Propiedad distributiva",
      "paginas": "pág. 51",
      "pagina_inicio": 51,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Figuras básicas 52 Trazo de figuras planas",
      "paginas": "pág. 53",
      "pagina_inicio": 53,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Identificación y cálculo de ángulos a partir de dos segmentos",
      "paginas": "pág. 55",
      "pagina_inicio": 55,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Figuras planas",
      "paginas": "pág. 58",
      "pagina_inicio": 58,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Construcción y clasificación de triángulos",
      "paginas": "pág. 59",
      "pagina_inicio": 59,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Construcción y clasificación de cuadriláteros",
      "paginas": "pág. 62",
      "pagina_inicio": 62,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fórmulas para calcular perímetro y área 65 Cálculo de perímetro y área de polígonos regulares",
      "paginas": "pág. 66",
      "pagina_inicio": 66,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo de perímetro y área de polígonos irregulares",
      "paginas": "pág. 68",
      "pagina_inicio": 68,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo de la circunferencia y área del círculo",
      "paginas": "pág. 69",
      "pagina_inicio": 69,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Introducción a la medición y el cálculo",
      "paginas": "pág. 70",
      "pagina_inicio": 70,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Concepto de longitud y segmento",
      "paginas": "pág. 71",
      "pagina_inicio": 71,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Concepto de distancia entre dos puntos",
      "paginas": "pág. 73",
      "pagina_inicio": 73,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Jerarquía de operaciones 74 Identificación de la jerarquía de operaciones",
      "paginas": "pág. 75",
      "pagina_inicio": 75,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ejemplos de la resolución de la jerarquía de operaciones",
      "paginas": "pág. 78",
      "pagina_inicio": 78,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Lenguaje algebraico 80 Situaciones de lenguaje común expresadas en el lenguaje algebraico 81 Medición y cálculo 84 Concepto de rectas paralelas",
      "paginas": "pág. 85",
      "pagina_inicio": 85,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo de la distancia de un punto a una recta",
      "paginas": "pág. 86",
      "pagina_inicio": 86,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo de la distancia entre dos rectas paralelas",
      "paginas": "pág. 88",
      "pagina_inicio": 88,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Análisis de dispersión de datos 90 Mediana, media aritmética y moda para el análisis de dispersión de datos 91 Cálculo de la frecuencia absoluta y frecuencia relativa",
      "paginas": "pág. 95",
      "pagina_inicio": 95,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Medidas de tendencia central 100 Interpretación de la mediana y la media aritmética",
      "paginas": "pág. 101",
      "pagina_inicio": 101,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "I nterpretación de la moda y el rango 105 Obtención y representación de información 108 Herramientas para recolectar información (encuestas, entrevistas y cuestionarios) 109 Uso de tablas para analizar información",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Gráficas de barras para analizar información",
      "paginas": "pág. 113",
      "pagina_inicio": 113,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Gráficas circulares para analizar información",
      "paginas": "pág. 117",
      "pagina_inicio": 117,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Operaciones básicas positivas y negativas 120 Suma y resta de fracciones y números decimales (positivos y negativos) 121 Multiplicación y división de fracciones y números decimales (positivos y negativos) 124 Porcentajes 128 Concepto y procedimientos para obtener el porcentaje",
      "paginas": "pág. 129",
      "pagina_inicio": 129,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Situaciones de caso",
      "paginas": "pág. 130",
      "pagina_inicio": 130,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Los porcentajes y su representación gráfica",
      "paginas": "pág. 134",
      "pagina_inicio": 134,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Probabilidad 136 Cálculo de la probabilidad",
      "paginas": "pág. 137",
      "pagina_inicio": 137,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Concepto de azar e incertidumbre",
      "paginas": "pág. 140",
      "pagina_inicio": 140,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Procedimientos de conteo en matemáticas",
      "paginas": "pág. 144",
      "pagina_inicio": 144,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Principio multiplicativo",
      "paginas": "pág. 145",
      "pagina_inicio": 145,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Principio aditivo",
      "paginas": "pág. 147",
      "pagina_inicio": 147,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Permutaciones",
      "paginas": "pág. 149",
      "pagina_inicio": 149,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Permutaciones con repetición",
      "paginas": "pág. 151",
      "pagina_inicio": 151,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Combinaciones",
      "paginas": "pág. 152",
      "pagina_inicio": 152,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Relaciones lineales 154 Situaciones con pendiente positiva",
      "paginas": "pág. 155",
      "pagina_inicio": 155,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Situaciones con pendiente negativa",
      "paginas": "pág. 158",
      "pagina_inicio": 158,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proporcionalidad y no proporcionalidad 159 Registro y tabulación de datos de relaciones proporcionales y no proporcionales 160 Gráficas en el plano cartesiano de datos de relaciones proporcionales y no proporcionales 164 Rectas notables 170 Trazo de rectas notables en triángulos",
      "paginas": "pág. 171",
      "pagina_inicio": 171,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Alturas y diagonales en cuadriláteros",
      "paginas": "pág. 174",
      "pagina_inicio": 174,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ecuaciones lineales 177 Ecuación de la forma Ax = B",
      "paginas": "pág. 178",
      "pagina_inicio": 178,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ecuación de la forma Ax + B = C",
      "paginas": "pág. 181",
      "pagina_inicio": 181,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ecuación de la forma Ax + B = Cx + D",
      "paginas": "pág. 182",
      "pagina_inicio": 182,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Tipos de eventos de probabilidad 183 Evento independiente",
      "paginas": "pág. 184",
      "pagina_inicio": 184,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Evento dependiente",
      "paginas": "pág. 187",
      "pagina_inicio": 187,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Evento mutuamente excluyente",
      "paginas": "pág. 188",
      "pagina_inicio": 188,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Trazo de círculos 189 Trazo de círculos a partir de distinta información",
      "paginas": "pág. 190",
      "pagina_inicio": 190,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Biología Biodiversidad local",
      "paginas": "pág. 192",
      "pagina_inicio": 192,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Importancia de la biodiversidad local",
      "paginas": "pág. 193",
      "pagina_inicio": 193,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Estado de la biodiversidad local",
      "paginas": "pág. 195",
      "pagina_inicio": 195,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Acciones para el cuidado de la biodiversidad local",
      "paginas": "pág. 197",
      "pagina_inicio": 197,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Calentamiento global 199 Concepto de calentamiento global",
      "paginas": "pág. 200",
      "pagina_inicio": 200,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Alteración de los ciclos biogeoquímicos y su relación con el calentamiento global 201 Impacto del calentamiento global en el medio ambiente y la salud",
      "paginas": "pág. 203",
      "pagina_inicio": 203,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ciclos biogeoquímicos 205 Qué es un ciclo biogeoquímico",
      "paginas": "pág. 206",
      "pagina_inicio": 206,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Particularidades del carbono y del nitrógeno",
      "paginas": "pág. 207",
      "pagina_inicio": 207,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ciclos biogeoquímicos del carbono y del nitrógeno",
      "paginas": "pág. 208",
      "pagina_inicio": 208,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Clasificación de los seres vivos",
      "paginas": "pág. 212",
      "pagina_inicio": 212,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Clasificación de organismos de acuerdo con su forma de alimentación 213 Clasificación de organismos de acuerdo con algunos aspectos de la reproducción 215 Cultura y sexualidad 217 Concepto de sexualidad",
      "paginas": "pág. 218",
      "pagina_inicio": 218,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Género y reproducción",
      "paginas": "pág. 220",
      "pagina_inicio": 220,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ecosistema local 224 Concepto de ecosistema",
      "paginas": "pág. 225",
      "pagina_inicio": 225,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Interacción entre factores bióticos y abióticos",
      "paginas": "pág. 227",
      "pagina_inicio": 227,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Competencia e interdependencia en el ecosistema",
      "paginas": "pág. 229",
      "pagina_inicio": 229,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Mantenimiento y equilibrio de los ecosistemas",
      "paginas": "pág. 231",
      "pagina_inicio": 231,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Enfermedades no transmisibles: obesidad y diabetes 234 Hábitos personales relacionados con la obesidad",
      "paginas": "pág. 235",
      "pagina_inicio": 235,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Hábitos relacionados con la diabetes",
      "paginas": "pág. 237",
      "pagina_inicio": 237,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Factores protectores en el entorno familiar y comunitario",
      "paginas": "pág. 239",
      "pagina_inicio": 239,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Acciones para reducir factores de riesgo",
      "paginas": "pág. 240",
      "pagina_inicio": 240,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Estructura y funciones básicas de la célula 241 Identificación de las estructuras básicas de la célula a partir de modelos 242 Membrana y citoplasma: funciones de nutrición e interacción",
      "paginas": "pág. 244",
      "pagina_inicio": 244,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Núcleo: reproducción y herencia",
      "paginas": "pág. 246",
      "pagina_inicio": 246,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Salud sexual 248 Cuáles son las its",
      "paginas": "pág. 249",
      "pagina_inicio": 249,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "I mportancia del condón para evitar its",
      "paginas": "pág. 254",
      "pagina_inicio": 254,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Efectividad de los métodos anticonceptivos",
      "paginas": "pág. 257",
      "pagina_inicio": 257,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Prevención o planificación del embarazo",
      "paginas": "pág. 260",
      "pagina_inicio": 260,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Observaciones microscópicas 262 Funcionamiento y propósito del microscopio",
      "paginas": "pág. 263",
      "pagina_inicio": 263,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Evolución de las observaciones microscópicas",
      "paginas": "pág. 266",
      "pagina_inicio": 266,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Concepto de célula",
      "paginas": "pág. 268",
      "pagina_inicio": 268,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Evolución del conocimiento sobre las bacterias, la célula y los virus",
      "paginas": "pág. 271",
      "pagina_inicio": 271,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Pueblos originarios 273 Conocimientos, prácticas e innovaciones de los pueblos originarios acerca de los seres vivos 274 Experiencias de los pueblos originarios asociadas al aprovechamiento y protección de los recursos naturales 277 Recursos naturales y su aprovechamiento",
      "paginas": "pág. 279",
      "pagina_inicio": 279,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Saberes y aportaciones de los pueblos originarios al aprovechamiento de los recursos naturales 280 Concepto de sustentabilidad",
      "paginas": "pág. 282",
      "pagina_inicio": 282,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Saberes y pensamiento científico (1°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Pesca, agricultura y pastoreo sustentables",
      "paginas": "pág. 284",
      "pagina_inicio": 284,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Formación cívica y ética GeoGrafía Acciones para reducir las desigualdades socioeconómicas en México y en el mundo",
      "paginas": "pág. 16",
      "pagina_inicio": 16,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Acciones para reducir la desigualdad",
      "paginas": "pág. 17",
      "pagina_inicio": 17,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Aguas oceánicas en el desarrollo económico de México",
      "paginas": "pág. 20",
      "pagina_inicio": 20,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características y dinámica de las aguas oceánicas",
      "paginas": "pág. 21",
      "pagina_inicio": 21,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Distribución de las aguas oceánicas en México",
      "paginas": "pág. 22",
      "pagina_inicio": 22,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las aguas oceánicas como recurso económico",
      "paginas": "pág. 25",
      "pagina_inicio": 25,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Alternativas de solución justas y pacíficas a los conflictos territoriales",
      "paginas": "pág. 27",
      "pagina_inicio": 27,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Luchas actuales en México por los derechos territoriales",
      "paginas": "pág. 28",
      "pagina_inicio": 28,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características dinámicas de las placas tectónicas",
      "paginas": "pág. 30",
      "pagina_inicio": 30,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Estructura interna de la Tierra",
      "paginas": "pág. 31",
      "pagina_inicio": 31,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características y distribución de las placas tectónicas en México y el mundo",
      "paginas": "pág. 32",
      "pagina_inicio": 32,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Dinámica de las placas tectónicas: movimientos convergentes, divergentes y transformantes",
      "paginas": "pág. 35",
      "pagina_inicio": 35,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Conflictos territoriales, causas y consecuencias",
      "paginas": "pág. 38",
      "pagina_inicio": 38,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Multicausalidad de los conflictos territoriales",
      "paginas": "pág. 39",
      "pagina_inicio": 39,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Consecuencias ambientales, políticas y socioeconómicas de los conflictos territoriales en México y el mundo",
      "paginas": "pág. 40",
      "pagina_inicio": 40,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Desigualdades socioeconómicas",
      "paginas": "pág. 42",
      "pagina_inicio": 42,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Causas de las desigualdades socioeconómicas en México y el mundo",
      "paginas": "pág. 43",
      "pagina_inicio": 43,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "de México y el mundo",
      "paginas": "pág. 44",
      "pagina_inicio": 44,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Distribución de las aguas continentales en México y el mundo",
      "paginas": "pág. 46",
      "pagina_inicio": 46,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Ciclo del agua y porcentaje de agua en el mundo",
      "paginas": "pág. 47",
      "pagina_inicio": 47,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Formas de agua continental: ríos, lagos y aguas subterráneas",
      "paginas": "pág. 48",
      "pagina_inicio": 48,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Distribución de aguas continentales en México y el mundo",
      "paginas": "pág. 51",
      "pagina_inicio": 51,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Distribución y conformación del relieve",
      "paginas": "pág. 54",
      "pagina_inicio": 54,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Factores internos que generan el relieve",
      "paginas": "pág. 55",
      "pagina_inicio": 55,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Formas del relieve continental y relieve oceánico",
      "paginas": "pág. 57",
      "pagina_inicio": 57,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Factores externos que modelan el relieve",
      "paginas": "pág. 59",
      "pagina_inicio": 59,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Distribución del relieve continental y oceánico",
      "paginas": "pág. 61",
      "pagina_inicio": 61,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Espacio rural y espacio urbano",
      "paginas": "pág. 65",
      "pagina_inicio": 65,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características del espacio rural Procesos de ruralización",
      "paginas": "pág. 66",
      "pagina_inicio": 66,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características del espacio urbano Procesos de urbanización",
      "paginas": "pág. 67",
      "pagina_inicio": 67,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Implicaciones sociales, económicas y ambientales de los espacios rurales y urbanos",
      "paginas": "pág. 69",
      "pagina_inicio": 69,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Identidad nacional pluricultural",
      "paginas": "pág. 71",
      "pagina_inicio": 71,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La identidad nacional pluricultural en México",
      "paginas": "pág. 72",
      "pagina_inicio": 72,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los pueblos originarios, afrodescendientes, migrantes, grupos urbanos y sociales",
      "paginas": "pág. 73",
      "pagina_inicio": 73,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Implicaciones sociales, ambientales y económicas del crecimiento de población",
      "paginas": "pág. 77",
      "pagina_inicio": 77,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Crecimiento y distribución de la población",
      "paginas": "pág. 78",
      "pagina_inicio": 78,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Composición de la población, pirámides poblacionales",
      "paginas": "pág. 81",
      "pagina_inicio": 81,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Indicadores demográficos e información estadística: los censos",
      "paginas": "pág. 83",
      "pagina_inicio": 83,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Importancia de las cuencas hidrográficas para el desarrollo económico en México",
      "paginas": "pág. 86",
      "pagina_inicio": 86,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Definición y características de las cuencas hidrográficas",
      "paginas": "pág. 87",
      "pagina_inicio": 87,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las cuencas hidrológicas de México",
      "paginas": "pág. 89",
      "pagina_inicio": 89,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Distribución de las cuencas hidrográficas en México",
      "paginas": "pág. 91",
      "pagina_inicio": 91,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las cuencas hidrográficas en el desarrollo económico",
      "paginas": "pág. 92",
      "pagina_inicio": 92,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Índice de Desarrollo Humano como herramienta para mejorar la calidad de vida",
      "paginas": "pág. 94",
      "pagina_inicio": 94,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Índice de Desarrollo Humano y sus indicadores",
      "paginas": "pág. 95",
      "pagina_inicio": 95,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "y la biodiversidad",
      "paginas": "pág. 100",
      "pagina_inicio": 100,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Diferencia entre clima y estado del tiempo",
      "paginas": "pág. 101",
      "pagina_inicio": 101,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las regiones naturales y su distribución en México y el mundo",
      "paginas": "pág. 103",
      "pagina_inicio": 103,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "la interacción de ecosistemas",
      "paginas": "pág. 108",
      "pagina_inicio": 108,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Origen y problemas del suelo",
      "paginas": "pág. 111",
      "pagina_inicio": 111,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Origen de los tipos de suelos",
      "paginas": "pág. 112",
      "pagina_inicio": 112,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "y usos del suelo",
      "paginas": "pág. 113",
      "pagina_inicio": 113,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Problemas ambientales del suelo, degradación y contaminación",
      "paginas": "pág. 115",
      "pagina_inicio": 115,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Problemáticas sociales y ambientales que afectan a la comunidad",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "a la comunidad",
      "paginas": "pág. 117",
      "pagina_inicio": 117,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Procesos productivos en los espacios económicos en México y el mundo",
      "paginas": "pág. 120",
      "pagina_inicio": 120,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Clasificación y distribución de las principales actividades económicas en México y el mundo",
      "paginas": "pág. 121",
      "pagina_inicio": 121,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Tipos de procesos productivos en los diferentes espacios económicos",
      "paginas": "pág. 124",
      "pagina_inicio": 124,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Implicaciones socioeconómicas y ambientales",
      "paginas": "pág. 126",
      "pagina_inicio": 126,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Procesos productivos en la conformación social, económica y espacial",
      "paginas": "pág. 128",
      "pagina_inicio": 128,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Procesos productivos en la conformación social, económica y distribución espacial de las sociedades",
      "paginas": "pág. 129",
      "pagina_inicio": 129,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Contradicciones y desigualdades en los procesos productivos",
      "paginas": "pág. 130",
      "pagina_inicio": 130,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "de la comunidad",
      "paginas": "pág. 132",
      "pagina_inicio": 132,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Responsabilidad: un agente de cambio ante los retos socioambientales de la comunidad",
      "paginas": "pág. 133",
      "pagina_inicio": 133,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Sismos en México",
      "paginas": "pág. 136",
      "pagina_inicio": 136,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La actividad de las placas tectónicas",
      "paginas": "pág. 137",
      "pagina_inicio": 137,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El sismo del 19 de septiembre de 1985",
      "paginas": "pág. 139",
      "pagina_inicio": 139,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El sismo del 19 de septiembre de 2017",
      "paginas": "pág. 143",
      "pagina_inicio": 143,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Una tragedia que no debe repetirse en la comunidad escolar",
      "paginas": "pág. 150",
      "pagina_inicio": 150,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Historia Acercamiento a las teorías del poblamiento del continente americano",
      "paginas": "pág. 153",
      "pagina_inicio": 153,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las diversas teorías del poblamiento de América",
      "paginas": "pág. 154",
      "pagina_inicio": 154,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características culturales de los primeros pobladores de América",
      "paginas": "pág. 157",
      "pagina_inicio": 157,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Comparación de las antiguas sociedades americanas",
      "paginas": "pág. 159",
      "pagina_inicio": 159,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las grandes culturas americanas de la Antigüedad, desde Bering hasta la Patagonia",
      "paginas": "pág. 160",
      "pagina_inicio": 160,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Cultura compartida por los pueblos americanos",
      "paginas": "pág. 166",
      "pagina_inicio": 166,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Concepciones de los pueblos indígenas y afromexicanos sobre la vida, la muerte y la tierra",
      "paginas": "pág. 170",
      "pagina_inicio": 170,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La vida y el nacimiento para los pueblos indígenas y afromexicanos",
      "paginas": "pág. 171",
      "pagina_inicio": 171,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Concepciones de los pueblos indígenas y afromexicanos sobre la muerte",
      "paginas": "pág. 172",
      "pagina_inicio": 172,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "de la naturaleza de los pueblos indígenas y afromexicanos",
      "paginas": "pág. 174",
      "pagina_inicio": 174,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Casos de defensa por el territorio de pueblos indígenas",
      "paginas": "pág. 175",
      "pagina_inicio": 175,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Cultura, poder y sociedad en Mesoamérica",
      "paginas": "pág. 176",
      "pagina_inicio": 176,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Estructura política de los centros de poder en Mesoamérica",
      "paginas": "pág. 177",
      "pagina_inicio": 177,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Comercio, circulación e intercambio de bienes en Mesoamérica",
      "paginas": "pág. 180",
      "pagina_inicio": 180,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Sistemas de escritura, numeración y calendarios en Mesoamérica",
      "paginas": "pág. 183",
      "pagina_inicio": 183,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La religión y la cosmovisión",
      "paginas": "pág. 185",
      "pagina_inicio": 185,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Etapa lítica en América",
      "paginas": "pág. 186",
      "pagina_inicio": 186,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Evidencias de los primeros habitantes del continente americano",
      "paginas": "pág. 187",
      "pagina_inicio": 187,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La evidencia lítica de los primeros pobladores de América",
      "paginas": "pág. 188",
      "pagina_inicio": 188,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La evidencia ósea de los primeros pobladores de América",
      "paginas": "pág. 189",
      "pagina_inicio": 189,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Actividades humanas en la prehistoria americana",
      "paginas": "pág. 190",
      "pagina_inicio": 190,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Historia y mitos de los pueblos en la Antigüedad",
      "paginas": "pág. 194",
      "pagina_inicio": 194,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La historia como ciencia que estudia a los hombres y a las mujeres en el tiempo",
      "paginas": "pág. 195",
      "pagina_inicio": 195,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Importancia de las fuentes históricas",
      "paginas": "pág. 197",
      "pagina_inicio": 197,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las fuentes para la historia",
      "paginas": "pág. 198",
      "pagina_inicio": 198,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Fuentes primarias y secundarias",
      "paginas": "pág. 199",
      "pagina_inicio": 199,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Lucha social por la justicia sin discriminación",
      "paginas": "pág. 201",
      "pagina_inicio": 201,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Discriminación",
      "paginas": "pág. 202",
      "pagina_inicio": 202,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El movimiento zapatista La lucha por los derechos de las mujeres y las minorías",
      "paginas": "pág. 202",
      "pagina_inicio": 202,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Maíz, una planta maravillosa",
      "paginas": "pág. 206",
      "pagina_inicio": 206,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El maíz: trabajo, descanso y rendimiento",
      "paginas": "pág. 207",
      "pagina_inicio": 207,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La cultura del maíz: aspectos civilizatorios de larga duración",
      "paginas": "pág. 208",
      "pagina_inicio": 208,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El maíz en la cosmovisión de los pueblos americanos",
      "paginas": "pág. 209",
      "pagina_inicio": 209,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Métodos de la historia",
      "paginas": "pág. 210",
      "pagina_inicio": 210,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los métodos desde la Antigüedad",
      "paginas": "pág. 211",
      "pagina_inicio": 211,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El método comparativo en historia",
      "paginas": "pág. 212",
      "pagina_inicio": 212,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La historia interpretada: un aporte para la historia científica",
      "paginas": "pág. 214",
      "pagina_inicio": 214,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Movimientos femeninos por una vida digna",
      "paginas": "pág. 216",
      "pagina_inicio": 216,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las mujeres como sujetos de derecho",
      "paginas": "pág. 217",
      "pagina_inicio": 217,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Movimientos feministas en México",
      "paginas": "pág. 220",
      "pagina_inicio": 220,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La lucha de las mujeres en México",
      "paginas": "pág. 221",
      "pagina_inicio": 221,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Mitos fundacionales de las culturas antiguas en México y el mundo",
      "paginas": "pág. 223",
      "pagina_inicio": 223,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Origen de la creación en algunas culturas",
      "paginas": "pág. 224",
      "pagina_inicio": 224,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Origen de la creación en Mesoamérica y en la región andina",
      "paginas": "pág. 227",
      "pagina_inicio": 227,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Lo común y lo diverso en los mitos",
      "paginas": "pág. 230",
      "pagina_inicio": 230,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Papel histórico de los niños y jóvenes en la historia nacional",
      "paginas": "pág. 232",
      "pagina_inicio": 232,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Actividades de los pobladores del México antiguo",
      "paginas": "pág. 233",
      "pagina_inicio": 233,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El papel de los jóvenes en el siglo xx",
      "paginas": "pág. 234",
      "pagina_inicio": 234,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los niños y su papel en la sociedad actual",
      "paginas": "pág. 235",
      "pagina_inicio": 235,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Población afromexicana",
      "paginas": "pág. 236",
      "pagina_inicio": 236,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La tercera raíz: origen de la población afromexicana",
      "paginas": "pág. 237",
      "pagina_inicio": 237,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Aportaciones sociales y culturales a la identidad mexicana",
      "paginas": "pág. 238",
      "pagina_inicio": 238,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Problemáticas contemporáneas de la población",
      "paginas": "pág. 239",
      "pagina_inicio": 239,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Políticas discriminatorias a lo largo de la historia",
      "paginas": "pág. 241",
      "pagina_inicio": 241,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El racismo y la xenofobia",
      "paginas": "pág. 242",
      "pagina_inicio": 242,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Pueblos antiguos de Aridoamérica y Oasisamérica",
      "paginas": "pág. 245",
      "pagina_inicio": 245,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (1°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Temporalidad, ubicación y manifestaciones culturales de Aridoamérica",
      "paginas": "pág. 246",
      "pagina_inicio": 246,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tecnología Aportes en la innovación",
      "paginas": "pág. 12",
      "pagina_inicio": 12,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Innovación y mejora: aportaciones personales y colectivas",
      "paginas": "pág. 13",
      "pagina_inicio": 13,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Comunicación y cultura",
      "paginas": "pág. 19",
      "pagina_inicio": 19,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La interacción con el entorno: comunicación y cultura",
      "paginas": "pág. 20",
      "pagina_inicio": 20,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El lenguaje técnico",
      "paginas": "pág. 23",
      "pagina_inicio": 23,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Signos del lenguaje técnico",
      "paginas": "pág. 24",
      "pagina_inicio": 24,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "C ódigos técnicos",
      "paginas": "pág. 25",
      "pagina_inicio": 25,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Evolución de la tecnología en el cuidado de la salud",
      "paginas": "pág. 28",
      "pagina_inicio": 28,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Evolución tecnológica",
      "paginas": "pág. 29",
      "pagina_inicio": 29,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Función de la energía",
      "paginas": "pág. 34",
      "pagina_inicio": 34,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Energía",
      "paginas": "pág. 35",
      "pagina_inicio": 35,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sist emas técnicos 38 Desarrollo tecnológico 41 Función de la energía en los sistemas técnicos 42 Identificación y prevención de riesgos",
      "paginas": "pág. 45",
      "pagina_inicio": 45,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tipos y zonas de riesgo en la casa, la escuela y la comunidad",
      "paginas": "pág. 46",
      "pagina_inicio": 46,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "P revención de riesgos 48 Prácticas culturales",
      "paginas": "pág. 53",
      "pagina_inicio": 53,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Prácticas culturales que promueven la mejora de productos",
      "paginas": "pág. 54",
      "pagina_inicio": 54,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Métodos y técnicas de investigación",
      "paginas": "pág. 58",
      "pagina_inicio": 58,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Definición de métodos y técnicas de investigación",
      "paginas": "pág. 59",
      "pagina_inicio": 59,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "A plicación de los métodos y técnicas de investigación 61 Origen y transformación de técnicas y prácticas sustentables",
      "paginas": "pág. 63",
      "pagina_inicio": 63,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Diferentes técnicas para la realización de una tarea",
      "paginas": "pág. 64",
      "pagina_inicio": 64,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "C omparación de técnicas tradicionales y actuales Prácticas sustentables 67 Procesos e innovación técnica",
      "paginas": "pág. 70",
      "pagina_inicio": 70,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Creación e innovación técnica",
      "paginas": "pág. 71",
      "pagina_inicio": 71,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Procesos para la mejora",
      "paginas": "pág. 78",
      "pagina_inicio": 78,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Procesos sociales para la mejora continua",
      "paginas": "pág. 79",
      "pagina_inicio": 79,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Eficacia, eficiencia, fiabilidad y fac tibilidad 81 Riesgos en las tecnologías",
      "paginas": "pág. 84",
      "pagina_inicio": 84,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Riesgos de origen tecnológico que limitan la igualdad de oportunidades",
      "paginas": "pág. 85",
      "pagina_inicio": 85,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "C iberseguridad: influencia de intereses, prejuicios, estereotipos y aspiraciones 88 Sistemas técnicos",
      "paginas": "pág. 90",
      "pagina_inicio": 90,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Elementos que interactúan en los sistemas técnicos 91 Formas de organización 93 Medios técnicos 95 Tecnología en la cotidianidad",
      "paginas": "pág. 97",
      "pagina_inicio": 97,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tecnología a nuestro alcance",
      "paginas": "pág. 98",
      "pagina_inicio": 98,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "P rejuicios y beneficios en el uso de la tecnología 100 Tecnologías para la comunicación",
      "paginas": "pág. 103",
      "pagina_inicio": 103,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Uso de nuevas tecnologías para estar más informados",
      "paginas": "pág. 104",
      "pagina_inicio": 104,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "F ormas de seleccionar y corroborar información",
      "paginas": "pág. 106",
      "pagina_inicio": 106,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Uso de herramientas",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Uso responsable y ético de recursos y herramientas",
      "paginas": "pág. 111",
      "pagina_inicio": 111,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "educación física Capacidades en el adolescente",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Las capacidades, habilidades y destrezas motrices en el adolescente 117 La disponibilidad corporal 120 Diversidad",
      "paginas": "pág. 124",
      "pagina_inicio": 124,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Diversidad y sentido de pertenencia",
      "paginas": "pág. 125",
      "pagina_inicio": 125,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El deporte educativo y la colaboración",
      "paginas": "pág. 129",
      "pagina_inicio": 129,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La interacción y el trabajo en equipo",
      "paginas": "pág. 130",
      "pagina_inicio": 130,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Elementos de la condición física",
      "paginas": "pág. 133",
      "pagina_inicio": 133,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Elementos de la condición física",
      "paginas": "pág. 134",
      "pagina_inicio": 134,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estilos de vida activos y saludables",
      "paginas": "pág. 137",
      "pagina_inicio": 137,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Desarrollo y práctica de hábitos activos y saludables",
      "paginas": "pág. 138",
      "pagina_inicio": 138,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La actividad física",
      "paginas": "pág. 141",
      "pagina_inicio": 141,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La actividad física y su aporte a una cultura solidaria, colaborativa, empática y de paz 142 Toma de decisiones a partir del juego",
      "paginas": "pág. 147",
      "pagina_inicio": 147,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Toma de decisiones individuales y colectivas",
      "paginas": "pág. 148",
      "pagina_inicio": 148,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "D esarrollo del pensamiento creativo y estratégico 151 TuToría y educación socioemocional Autoconocimiento e identidad",
      "paginas": "pág. 154",
      "pagina_inicio": 154,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El autodescubrimiento y la construcción de nuevas potencialidades",
      "paginas": "pág. 155",
      "pagina_inicio": 155,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La impor tancia del autoconocimiento para la construcción de la identidad personal 158 El autoconcepto y la construcción de la identidad personal 161 Autocuidado y bienestar colectivo",
      "paginas": "pág. 163",
      "pagina_inicio": 163,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Autocuidado para la construcción del proyecto de vida",
      "paginas": "pág. 164",
      "pagina_inicio": 164,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Construcción de relaciones afectivas, inclusivas y equitativas",
      "paginas": "pág. 168",
      "pagina_inicio": 168,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Emociones, estados de ánimo y sentimientos",
      "paginas": "pág. 169",
      "pagina_inicio": 169,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "R elaciones afectivas 171 Inclusión y equidad 173 Empatía",
      "paginas": "pág. 175",
      "pagina_inicio": 175,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La empatía como una herramienta para la convivencia",
      "paginas": "pág. 176",
      "pagina_inicio": 176,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Empa tía frente a la diversidad de emociones y sentimientos de las personas 178 Expresión de las emociones y los sentimientos",
      "paginas": "pág. 182",
      "pagina_inicio": 182,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Medios de expresión de las emociones y los sentimientos",
      "paginas": "pág. 183",
      "pagina_inicio": 183,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Factores de riesgo y protección de nuestro entorno",
      "paginas": "pág. 186",
      "pagina_inicio": 186,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Medidas de prevención de riesgos",
      "paginas": "pág. 187",
      "pagina_inicio": 187,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "R ecursos para afrontar los riesgos 191 Gestión de emociones",
      "paginas": "pág. 193",
      "pagina_inicio": 193,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estrategias en la gestión emocional",
      "paginas": "pág. 194",
      "pagina_inicio": 194,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "I nteligencia emocional y asertividad 196 Las habilidades socioemocionales y su desarrollo",
      "paginas": "pág. 199",
      "pagina_inicio": 199,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Autorregulación",
      "paginas": "pág. 200",
      "pagina_inicio": 200,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "A utoconocimiento 203 Empatía 205 Colaboración 207 Autonomía 209 Interacción",
      "paginas": "pág. 211",
      "pagina_inicio": 211,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Interacción social en el uso de tecnologías",
      "paginas": "pág. 212",
      "pagina_inicio": 212,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La salud en la adolescencia",
      "paginas": "pág. 216",
      "pagina_inicio": 216,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La salud es bienestar",
      "paginas": "pág. 217",
      "pagina_inicio": 217,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "S alud emocional 219 Riesgos a la salud 221 Riesgos y prevención relacionados con la violencia 222 Riesgos y prevención relacionados con las adicciones 223 Las distintas dimensiones del ser humano",
      "paginas": "pág. 225",
      "pagina_inicio": 225,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Las dimensiones biológica, psicológica y social del ser humano",
      "paginas": "pág. 226",
      "pagina_inicio": 226,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La salud in tegral 227 Dimensión biológica 228 Dimensión psicológica 229 Dimensión social",
      "paginas": "pág. 231",
      "pagina_inicio": 231,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Metas individuales que favorecen el bienestar colectivo",
      "paginas": "pág. 233",
      "pagina_inicio": 233,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Beneficios de establecer metas individuales",
      "paginas": "pág. 234",
      "pagina_inicio": 234,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "de vida 239 Elementos relevantes en el diseño de metas personales y colectivas",
      "paginas": "pág. 240",
      "pagina_inicio": 240,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto de vida y participación responsable",
      "paginas": "pág. 242",
      "pagina_inicio": 242,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Elementos clave en el diseño de un proyecto de vida",
      "paginas": "pág. 243",
      "pagina_inicio": 243,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Riesgos y recursos para enfrentarlos",
      "paginas": "pág. 246",
      "pagina_inicio": 246,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Identificar riesgos para resguardar el autocuidado",
      "paginas": "pág. 247",
      "pagina_inicio": 247,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "De lo humano y lo comunitario (1°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "R ecursos para afrontar los riesgos 247 Créditos bibliográficos",
      "paginas": "pág. 250",
      "pagina_inicio": 250,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Esp añol Comprensión lectora",
      "paginas": "pág. 12",
      "pagina_inicio": 12,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tipos de texto",
      "paginas": "pág. 13",
      "pagina_inicio": 13,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Factores que influyen en la comprensión lectora",
      "paginas": "pág. 18",
      "pagina_inicio": 18,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Estrategias para la comprensión de textos",
      "paginas": "pág. 20",
      "pagina_inicio": 20,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La comprensión de textos en una sociedad intercultural",
      "paginas": "pág. 23",
      "pagina_inicio": 23,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Creaciones literarias de la comunidad",
      "paginas": "pág. 25",
      "pagina_inicio": 25,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Manifestaciones literarias comunitarias",
      "paginas": "pág. 26",
      "pagina_inicio": 26,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La antología literaria",
      "paginas": "pág. 30",
      "pagina_inicio": 30,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Estrategias y recursos creativos para el fomento de la lectura en comunidad",
      "paginas": "pág. 32",
      "pagina_inicio": 32,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El cambio lingüístico y su valoración",
      "paginas": "pág. 36",
      "pagina_inicio": 36,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Niveles de transformación de las lenguas",
      "paginas": "pág. 37",
      "pagina_inicio": 37,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Valoración de los cambios lingüísticos como legado y patrimonio cultural",
      "paginas": "pág. 40",
      "pagina_inicio": 40,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El comentario y la exposición como recursos comunicativos",
      "paginas": "pág. 44",
      "pagina_inicio": 44,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El comentario de texto",
      "paginas": "pág. 45",
      "pagina_inicio": 45,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Características de la exposición oral y escrita",
      "paginas": "pág. 47",
      "pagina_inicio": 47,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Técnicas para la comunicación oral y escrita",
      "paginas": "pág. 50",
      "pagina_inicio": 50,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Elementos de la lengua española",
      "paginas": "pág. 53",
      "pagina_inicio": 53,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Los elementos del proceso de comunicación",
      "paginas": "pág. 54",
      "pagina_inicio": 54,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Elementos de la comunicación",
      "paginas": "pág. 56",
      "pagina_inicio": 56,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las funciones de la lengua y su uso en el entorno",
      "paginas": "pág. 58",
      "pagina_inicio": 58,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Figuras retóricas en textos literarios y orales en español",
      "paginas": "pág. 61",
      "pagina_inicio": 61,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El lenguaje connotativo y denotativo",
      "paginas": "pág. 62",
      "pagina_inicio": 62,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Figuras retóricas: comparación, metáfora, hipérbole y metonimia",
      "paginas": "pág. 63",
      "pagina_inicio": 63,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Usos de las figuras retóricas en los textos literarios orales y escritos",
      "paginas": "pág. 68",
      "pagina_inicio": 68,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Géneros literarios",
      "paginas": "pág. 72",
      "pagina_inicio": 72,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Género narrativo y sus recursos",
      "paginas": "pág. 73",
      "pagina_inicio": 73,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Género lírico",
      "paginas": "pág. 76",
      "pagina_inicio": 76,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Género dramático",
      "paginas": "pág. 80",
      "pagina_inicio": 80,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La diversidad cultural y lingüística",
      "paginas": "pág. 84",
      "pagina_inicio": 84,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La diversidad cultural y la riqueza lingüística",
      "paginas": "pág. 85",
      "pagina_inicio": 85,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Textos literarios y la diversidad cultural",
      "paginas": "pág. 86",
      "pagina_inicio": 86,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Memoria colectiva y géneros periodísticos",
      "paginas": "pág. 89",
      "pagina_inicio": 89,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La memoria colectiva de la comunidad",
      "paginas": "pág. 90",
      "pagina_inicio": 90,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Los géneros periodísticos informativos",
      "paginas": "pág. 94",
      "pagina_inicio": 94,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Textos de comunicación familiar y social",
      "paginas": "pág. 97",
      "pagina_inicio": 97,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La carta",
      "paginas": "pág. 98",
      "pagina_inicio": 98,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La biografía",
      "paginas": "pág. 101",
      "pagina_inicio": 101,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "lEngua indígEna como lEngua matErna Creaciones literarias en lenguas indígenas",
      "paginas": "pág. 103",
      "pagina_inicio": 103,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Manifestaciones literarias en lenguas indígenas",
      "paginas": "pág. 104",
      "pagina_inicio": 104,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Fomento a la lectura, uso y escritura en lenguas indígenas",
      "paginas": "pág. 108",
      "pagina_inicio": 108,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El legado lingüístico de México y América Latina",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Componentes estructurales de algunas lenguas indígenas",
      "paginas": "pág. 111",
      "pagina_inicio": 111,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Expresiones básicas en lenguas indígenas",
      "paginas": "pág. 112",
      "pagina_inicio": 112,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Expresiones culturales de las comunidades indígenas",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las costumbres y tradiciones en México y América Latina",
      "paginas": "pág. 117",
      "pagina_inicio": 117,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La identidad colectiva y las manifestaciones tradicionales",
      "paginas": "pág. 119",
      "pagina_inicio": 119,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Textos literarios sobre la ritualidad y las fiestas comunales",
      "paginas": "pág. 120",
      "pagina_inicio": 120,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las lenguas indígenas y sus recursos lingüísticos",
      "paginas": "pág. 122",
      "pagina_inicio": 122,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Formas lingüísticas",
      "paginas": "pág. 123",
      "pagina_inicio": 123,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Uso de las formas lingüísticas en los textos orales y escritos",
      "paginas": "pág. 124",
      "pagina_inicio": 124,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las relaciones sociales en las comunidades indígenas de México",
      "paginas": "pág. 127",
      "pagina_inicio": 127,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El trabajo comunitario (tequio) en los pueblos de México",
      "paginas": "pág. 128",
      "pagina_inicio": 128,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las lenguas indígenas y su influencia en la interacción",
      "paginas": "pág. 129",
      "pagina_inicio": 129,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Narraciones de distintos géneros en torno al tequio",
      "paginas": "pág. 130",
      "pagina_inicio": 130,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Lenguaje e identidad",
      "paginas": "pág. 132",
      "pagina_inicio": 132,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El lenguaje en la construcción de la identidad",
      "paginas": "pág. 133",
      "pagina_inicio": 133,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El sentido de pertenencia a través del lenguaje oral",
      "paginas": "pág. 135",
      "pagina_inicio": 135,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El papel de la oralidad en la transmisión o extinción de las lenguas indígenas",
      "paginas": "pág. 136",
      "pagina_inicio": 136,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Prácticas sociales relacionadas con la tierra como madre y como territorio",
      "paginas": "pág. 138",
      "pagina_inicio": 138,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El territorio: espacio vital de las lenguas indígenas",
      "paginas": "pág. 139",
      "pagina_inicio": 139,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La tierra: madre y territorio de las lenguas indígenas",
      "paginas": "pág. 140",
      "pagina_inicio": 140,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las narraciones de distintos géneros en torno a la tierra",
      "paginas": "pág. 141",
      "pagina_inicio": 141,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Trascendencia simbólica de la milpa en las comunidades indígenas de México",
      "paginas": "pág. 145",
      "pagina_inicio": 145,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El uso de las lenguas indígenas en la cultura agrícola",
      "paginas": "pág. 146",
      "pagina_inicio": 146,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Narraciones de distintos géneros en torno a la milpa",
      "paginas": "pág. 147",
      "pagina_inicio": 147,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La diversidad lingüística de México y América Latina",
      "paginas": "pág. 149",
      "pagina_inicio": 149,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La diversidad lingüística",
      "paginas": "pág. 150",
      "pagina_inicio": 150,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las lenguas más y menos habladas de México y América Latina",
      "paginas": "pág. 152",
      "pagina_inicio": 152,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La revitalización cultural a través de las lenguas indígenas",
      "paginas": "pág. 155",
      "pagina_inicio": 155,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La diversidad cultural y lingüística de México en peligro",
      "paginas": "pág. 157",
      "pagina_inicio": 157,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las relaciones interétnicas en la sociedad mexicana",
      "paginas": "pág. 158",
      "pagina_inicio": 158,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La tradición oral en lenguas indígenas",
      "paginas": "pág. 160",
      "pagina_inicio": 160,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La tradición escrita en lenguas indígenas",
      "paginas": "pág. 162",
      "pagina_inicio": 162,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "lEngua indígEna como sEgunda lEngua Fuentes de investigación",
      "paginas": "pág. 164",
      "pagina_inicio": 164,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tipos de fuentes de información",
      "paginas": "pág. 165",
      "pagina_inicio": 165,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Mensajes informativos: reflexión y redacción",
      "paginas": "pág. 166",
      "pagina_inicio": 166,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las prácticas culturales y la lengua indígena de México I",
      "paginas": "pág. 169",
      "pagina_inicio": 169,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Prácticas culturales de los grupos étnicos de México I",
      "paginas": "pág. 170",
      "pagina_inicio": 170,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Técnicas de investigación de recolección",
      "paginas": "pág. 172",
      "pagina_inicio": 172,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La entrevista: medio para recuperar información",
      "paginas": "pág. 174",
      "pagina_inicio": 174,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las prácticas culturales y la lengua indígena de México II",
      "paginas": "pág. 176",
      "pagina_inicio": 176,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Prácticas culturales de los grupos étnicos de México II",
      "paginas": "pág. 177",
      "pagina_inicio": 177,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La opinión crítica",
      "paginas": "pág. 179",
      "pagina_inicio": 179,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La narración de sucesos significativos de la comunidad en lenguas indígenas",
      "paginas": "pág. 181",
      "pagina_inicio": 181,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Medios de expresión en lenguas indígenas",
      "paginas": "pág. 184",
      "pagina_inicio": 184,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sensaciones e ideas a través de los lenguajes en lenguas indígenas",
      "paginas": "pág. 185",
      "pagina_inicio": 185,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Personas indígenas destacadas por contribuir a la cultura y las artes",
      "paginas": "pág. 189",
      "pagina_inicio": 189,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Semblanza: un medio para retratar",
      "paginas": "pág. 190",
      "pagina_inicio": 190,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Trascendencia lingüística en México y el mundo",
      "paginas": "pág. 192",
      "pagina_inicio": 192,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Características de las lenguas originarias de América Latina",
      "paginas": "pág. 193",
      "pagina_inicio": 193,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Formas de expresión comunes en lenguas indígenas",
      "paginas": "pág. 196",
      "pagina_inicio": 196,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El uso de la lengua indígena para expresar problemáticas sociales",
      "paginas": "pág. 199",
      "pagina_inicio": 199,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Textos literarios e informativos que aborden temas de la comunidad",
      "paginas": "pág. 200",
      "pagina_inicio": 200,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Creaciones literarias en lenguas indígenas: difusión, métodos y objetivos",
      "paginas": "pág. 203",
      "pagina_inicio": 203,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "inglés Diversidad y el punto de vista",
      "paginas": "pág. 205",
      "pagina_inicio": 205,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Exposición de un punto de vista",
      "paginas": "pág. 206",
      "pagina_inicio": 206,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Puntos de vista sobre la diversidad, la interacción y la empatía",
      "paginas": "pág. 210",
      "pagina_inicio": 210,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Expresiones de violencia en inglés",
      "paginas": "pág. 214",
      "pagina_inicio": 214,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Situaciones de violencia en los ambientes familiar y escolar",
      "paginas": "pág. 215",
      "pagina_inicio": 215,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Expresiones de rechazo a las violencias familiar, social y escolar, y su difusión",
      "paginas": "pág. 217",
      "pagina_inicio": 217,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Frases y vocablos para describir en lengua inglesa",
      "paginas": "pág. 221",
      "pagina_inicio": 221,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las características de la cultura de las personas de habla inglesa",
      "paginas": "pág. 222",
      "pagina_inicio": 222,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La identidad inglesa en frases y vocablos",
      "paginas": "pág. 225",
      "pagina_inicio": 225,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Uso de la lengua inglesa para hacer descripciones físicas",
      "paginas": "pág. 229",
      "pagina_inicio": 229,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Identificación y solución de problemas en textos de lengua inglesa",
      "paginas": "pág. 233",
      "pagina_inicio": 233,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Identificación de problemas comunitarios",
      "paginas": "pág. 234",
      "pagina_inicio": 234,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Soluciones a problemas comunitarios",
      "paginas": "pág. 236",
      "pagina_inicio": 236,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Redacción de un informe",
      "paginas": "pág. 238",
      "pagina_inicio": 238,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La interculturalidad",
      "paginas": "pág. 241",
      "pagina_inicio": 241,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Diversidad cultural e interculturalidad en México y el mundo",
      "paginas": "pág. 242",
      "pagina_inicio": 242,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Diversidad lingüística en México y el mundo",
      "paginas": "pág. 243",
      "pagina_inicio": 243,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El cómic o manga: medios para dialogar sobre la interculturalidad",
      "paginas": "pág. 245",
      "pagina_inicio": 245,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La lengua inglesa y su uso lúdico",
      "paginas": "pág. 249",
      "pagina_inicio": 249,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Juegos gramaticales de la lengua inglesa",
      "paginas": "pág. 250",
      "pagina_inicio": 250,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La tradición y comunidad en textos literarios",
      "paginas": "pág. 253",
      "pagina_inicio": 253,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tradiciones literarias: mitos, fábulas y leyendas",
      "paginas": "pág. 254",
      "pagina_inicio": 254,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Literatura contemporánea en lengua inglesa",
      "paginas": "pág. 257",
      "pagina_inicio": 257,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Medios para la promoción y difusión de la literatura",
      "paginas": "pág. 258",
      "pagina_inicio": 258,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Manifestaciones culturales y artísticas",
      "paginas": "pág. 261",
      "pagina_inicio": 261,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Manifestaciones de los pueblos de habla inglesa",
      "paginas": "pág. 262",
      "pagina_inicio": 262,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Realización de una lectura crítica",
      "paginas": "pág. 266",
      "pagina_inicio": 266,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "artEs Beneficios de las artes para la salud individual y comunitaria",
      "paginas": "pág. 268",
      "pagina_inicio": 268,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La importancia de las artes para la salud individual y comunitaria",
      "paginas": "pág. 269",
      "pagina_inicio": 269,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Expresiones artísticas que promueven la vida saludable",
      "paginas": "pág. 270",
      "pagina_inicio": 270,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cuerpo, espacio y tiempo Herramientas para el trabajo artístico",
      "paginas": "pág. 272",
      "pagina_inicio": 272,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Percepción y sentidos",
      "paginas": "pág. 273",
      "pagina_inicio": 273,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tiempo y momento",
      "paginas": "pág. 274",
      "pagina_inicio": 274,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Discapacidad e inclusión en las artes",
      "paginas": "pág. 276",
      "pagina_inicio": 276,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La discapacidad: generadora de recursos y lenguajes nuevos",
      "paginas": "pág. 277",
      "pagina_inicio": 277,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Lenguajes y experiencias artísticas desde la discapacidad",
      "paginas": "pág. 278",
      "pagina_inicio": 278,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Acciones creativas para la inclusión desde el arte",
      "paginas": "pág. 279",
      "pagina_inicio": 279,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Elementos de las artes como herramientas para la inclusión",
      "paginas": "pág. 281",
      "pagina_inicio": 281,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Códigos de las artes",
      "paginas": "pág. 282",
      "pagina_inicio": 282,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de lo cotidiano",
      "paginas": "pág. 283",
      "pagina_inicio": 283,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Soluciones creativas para la inclusión",
      "paginas": "pág. 284",
      "pagina_inicio": 284,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Elementos de las artes: códigos y lenguajes",
      "paginas": "pág. 286",
      "pagina_inicio": 286,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El intercambio de ideas en la construcción de códigos artísticos",
      "paginas": "pág. 287",
      "pagina_inicio": 287,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El arte como lenguaje: formas, colores, sonidos, espacio, tiempo y cuerpo",
      "paginas": "pág. 288",
      "pagina_inicio": 288,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La valoración de las manifestaciones culturales y artísticas de México",
      "paginas": "pág. 290",
      "pagina_inicio": 290,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Identidad personal y colectiva desde la interpretación del arte de México y el mundo",
      "paginas": "pág. 292",
      "pagina_inicio": 292,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Elementos para interpretar el arte como patrimonio cultural",
      "paginas": "pág. 293",
      "pagina_inicio": 293,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Identidad nacional, identidad colectiva e inclusiva",
      "paginas": "pág. 294",
      "pagina_inicio": 294,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las expresiones artísticas escénicas y su relación con el entorno familiar",
      "paginas": "pág. 296",
      "pagina_inicio": 296,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La recreación escénica de emociones e ideas",
      "paginas": "pág. 297",
      "pagina_inicio": 297,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La danza y el teatro",
      "paginas": "pág. 298",
      "pagina_inicio": 298,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La comunidad y las expresiones artísticas escénicas",
      "paginas": "pág. 300",
      "pagina_inicio": 300,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La reinterpretación de obras comunitarias tradicionales",
      "paginas": "pág. 301",
      "pagina_inicio": 301,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Comunidad y tradición",
      "paginas": "pág. 302",
      "pagina_inicio": 302,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cultura tradicional de México",
      "paginas": "pág. 303",
      "pagina_inicio": 303,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Música y danzas tradicionales de México",
      "paginas": "pág. 304",
      "pagina_inicio": 304,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sistemas alternativos",
      "paginas": "pág. 306",
      "pagina_inicio": 306,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Pensamientos, sentimientos y su integración en los lenguajes artísticos",
      "paginas": "pág. 307",
      "pagina_inicio": 307,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Ideogramas corporales y claves comunicativas",
      "paginas": "pág. 308",
      "pagina_inicio": 308,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cultura y sociedad inclusivas",
      "paginas": "pág. 310",
      "pagina_inicio": 310,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cultura",
      "paginas": "pág. 311",
      "pagina_inicio": 311,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Productores de cultura",
      "paginas": "pág. 312",
      "pagina_inicio": 312,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Fomento de una sociedad inclusiva desde diversas manifestaciones artísticas",
      "paginas": "pág. 312",
      "pagina_inicio": 312,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Créditos bibliográficos",
      "paginas": "pág. 314",
      "pagina_inicio": 314,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Créditos iconográficos",
      "paginas": "pág. 316",
      "pagina_inicio": 316,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Lenguajes (1°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "¡Expresamos nuestras ideas para ejercer nuestros derechos!",
      "paginas": "pág. 319",
      "pagina_inicio": 319,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Múltiples Lenguajes (1°)",
      "campo": "Múltiples Lenguajes",
      "tema_o_proyecto": "El acróbata",
      "paginas": "pág. 39",
      "pagina_inicio": 39,
      "resumen": ""
    },
    {
      "grado": "1° de Secundaria",
      "libro": "Múltiples Lenguajes (1°)",
      "campo": "Múltiples Lenguajes",
      "tema_o_proyecto": "Vida comunitaria Yutsa To’on 88 ¡El arte tiene su ciencia! El caso del puntillismo 90 El samba: música y baile de resistencia y dignidad 96 El momento imperfecto 100 El Gran Hotel Cantor 108 Flexágonos 114 Wulfrano 120 Diccionario pictográfico 122 Príquiti, príquiti 124 Torneo de futbol 126 ¿Cuánto pesa? 127 A Vanegas Arroyo 128 Títeres, máscaras y los mágicos grabados de Lola Cueto 136 Hipocampos",
      "paginas": "pág. 141",
      "pagina_inicio": 141,
      "resumen": ""
    }
  ],
  "2": [
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 1: ¡Nuestra diversidad lingüística comunica y significa!",
      "paginas": "págs. 38-42",
      "pagina_inicio": 38,
      "resumen": "en la riqueza de la diversidad! En México, como en otros países del mundo, existe una amplia di- versidad lingüística y artística que se utiliza para comunicar la riqueza"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 1: ¡Nuestra diversidad lingüística comunica y significa!",
      "paginas": "págs. 39-43",
      "pagina_inicio": 39,
      "resumen": "W Reconocerán, por medio de una investigación y una breve exposición en distintas lenguas, que los lenguajes escritos, orales y gráficos son un acto comunicativo"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 2: ¡Expresémoslo en otro idioma!",
      "paginas": "págs. 44-48",
      "pagina_inicio": 44,
      "resumen": "Comprender lenguas distintas a la materna permite, entre otras cosas, entender y conocer narraciones orales y escritas de diferentes tradiciones que no"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 3: ¡Y voy narrando lo que somos!",
      "paginas": "págs. 48-52",
      "pagina_inicio": 48,
      "resumen": "En cada contexto particular, las tradiciones se comunican mediante símbolos cotidianos y festividades locales, entre otros elementos Sus"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 4: En búsqueda de conflictos multiculturales",
      "paginas": "págs. 52-56",
      "pagina_inicio": 52,
      "resumen": "La presentación final de cada proyecto académico les permitirá difundir las actividades que desarrollaron en el aula y evidenciar el aprendizaje logrado, la evaluación de resultados y la participación"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 4: En búsqueda de conflictos multiculturales",
      "paginas": "págs. 53-57",
      "pagina_inicio": 53,
      "resumen": "A continuación, se presentan algunas actividades que pueden W Elaborar un cronograma para agendar las actividades y realizarlas W Identificar los insumos necesarios para el desarrollo de los"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 5: En un recorrido por México y el mundo",
      "paginas": "págs. 58-62",
      "pagina_inicio": 58,
      "resumen": "La diversidad cultural de América Latina y el mundo es como un campo extenso, difícil de recorrer en su totalidad Es importante impulsar un acercamiento que refuerce una sociedad incluyente"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 6: El placer del arte",
      "paginas": "págs. 62-66",
      "pagina_inicio": 62,
      "resumen": "Planificar y organizar una exposición artística multicultural conlleva horas de logística e investigación documental y de campo; por lo tanto, tal evento implica compromiso y participación"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 7: Los textos literarios y la diversidad lingüística de la comunidad",
      "paginas": "págs. 68-72",
      "pagina_inicio": 68,
      "resumen": "Con sus compañeras y compañeros, consideren las siguientes W Determinar el tiempo de desarrollo de cada actividad y cuáles serán los insumos requeridos, con el fin de prever su adquisición"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 8: Iguales y diversos: las diversas variantes del lenguaje",
      "paginas": "págs. 72-76",
      "pagina_inicio": 72,
      "resumen": "Iguales y diversos: las diversas variantes del lenguaje Si bien todas las personas utilizan una lengua, o varias en el caso de comunidades multilingües, la manera como se"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 9: Hablo como soy y soy como hablo",
      "paginas": "págs. 76-80",
      "pagina_inicio": 76,
      "resumen": "Es importante reflexionar sobre la experiencia personal en el uso cotidiano de la lengua, ya que es un elemento que construye lazos sociales al tiempo que moldea la propia identidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 10: El español, una lengua en constante transformación",
      "paginas": "págs. 80-84",
      "pagina_inicio": 80,
      "resumen": "Cuando las personas conviven e interactúan entre ellas, forman una sola comunidad cultural e histórica que es consciente de per- tenecer a un mismo territorio, sin importar la existencia de distintas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 10: El español, una lengua en constante transformación",
      "paginas": "págs. 81-85",
      "pagina_inicio": 81,
      "resumen": "En comunidad, consideren las siguientes recomendaciones para la realización de sus proyectos: W Determinen el tiempo de desarrollo de cada actividad y los"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 11: La historia de nuestra lengua en un mural que creamos todxs",
      "paginas": "págs. 84-88",
      "pagina_inicio": 84,
      "resumen": "W D estinar un tiempo para la elaboración de los pósteres y verificar que cumplan con los requisitos definidos nsayar la lectura del contenido y hacer una retroalimentación"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 11: La historia de nuestra lengua en un mural que creamos todxs",
      "paginas": "págs. 85-89",
      "pagina_inicio": 85,
      "resumen": "Alrededor de sesenta por ciento de las lenguas originarias de México enfrentan un grave riesgo de desaparecer debido a problemáticas como el"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 12: Literatura de los pueblos originarios de México en registros sonoros",
      "paginas": "págs. 88-92",
      "pagina_inicio": 88,
      "resumen": "W R espetar los tiempos de intervención acordados enerar un diálogo entre los integrantes de la comunidad y el público asistente a la visita guiada para generar confianza y brindar tiempo a fin"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 12: Literatura de los pueblos originarios de México en registros sonoros",
      "paginas": "págs. 89-93",
      "pagina_inicio": 89,
      "resumen": "La literatura mexicana escrita en lenguas originarias no sólo es una expresión del conocimiento ancestral de mitos y leyendas, tampoco se limita a la tradición oral o lo"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 13: Expresiones comunitarias por medio de la lengua y las artes",
      "paginas": "págs. 94-98",
      "pagina_inicio": 94,
      "resumen": "Los lenguajes son formas de expresión y comunicación que utilizan los seres vivos para relacionarse entre sí Por medio de ellos, las personas se informan y opinan acerca de asuntos de interés personal, social, co-"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 13: Expresiones comunitarias por medio de la lengua y las artes",
      "paginas": "págs. 95-99",
      "pagina_inicio": 95,
      "resumen": "W Elaborarán un mapa mental tridimensional, en distintas lenguas, sobre acciones colectivas para la solución de problemas de una W Mediante un ensayo poético analizarán problemas, necesidades"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 14: La crítica hacia manifestaciones culturales de mi comunidad",
      "paginas": "págs. 100-104",
      "pagina_inicio": 100,
      "resumen": "Por lo general, los textos y las manifestaciones culturales de una comunidad expresan, reflejan o, en cambio, difieren sobre ciertos aspectos ideológicos de esa región Incluso pueden mostrar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 15: Acciones colectivas de inclusión y su difusión",
      "paginas": "págs. 104-108",
      "pagina_inicio": 104,
      "resumen": "Al ser inclusivos es posible llegar a públicos más amplios, lograr acuerdos o generar nuevas realidades en beneficio de las comunidades Acciones colectivas de inclusión y su difusión"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 1: Nuestra comunidad en gráficas",
      "paginas": "págs. 110-114",
      "pagina_inicio": 110,
      "resumen": "A lo largo de la historia de la humanidad se ha demostrado gran interés y curiosidad por comprender el mundo, por ello, a partir de la conformación de las diferentes áreas científicas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 1: Nuestra comunidad en gráficas",
      "paginas": "págs. 111-115",
      "pagina_inicio": 111,
      "resumen": "En este proyecto parcial de aula, desarrollarán tres proyectos académicos: W Construirán colaborativamente gráficas de la comunidad a partir de datos obtenidos en su aula, tales como estatura,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 2: La ciencia y sus cálculos",
      "paginas": "págs. 116-120",
      "pagina_inicio": 116,
      "resumen": "Desconocemos las características de un artículo informativo, los pasos necesarios para su construcción y las fuentes de consulta"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 3: Equidad de género en gráficas",
      "paginas": "págs. 120-124",
      "pagina_inicio": 120,
      "resumen": "La equidad de género es un contenido de gran importancia en todo el mundo, ya que no todas las personas piensan de la misma manera, por lo que no siempre hay reciprocidad entre mujeres y hombres Por ello,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 4: El álgebra y las unidades de medida",
      "paginas": "págs. 126-130",
      "pagina_inicio": 126,
      "resumen": "Desconocemos las unidades de medida, las herramientas para usarlas y el impacto que tienen en nuestras vidas Además, no sabemos las diferencias que existen entre"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 5: Símbolos y exponentes",
      "paginas": "págs. 130-134",
      "pagina_inicio": 130,
      "resumen": "Las propiedades de los exponentes son de gran importancia en la resolución de operaciones algebraicas contextualizadas en problemas de la vida cotidiana"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 6: Medir la comunidad",
      "paginas": "págs. 134-138",
      "pagina_inicio": 134,
      "resumen": "Valoración del proyecto académico Pautas generadoras de reflexión Siempre Casi Analizamos, mis compañeras, compañeros y yo, en coordinación con nuestra maestra o nuestro"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 6: Medir la comunidad",
      "paginas": "págs. 135-139",
      "pagina_inicio": 135,
      "resumen": "Es importante reconocer los instrumentos de medición, ya que son indispensables para resolver problemas que impliquen, por ejemplo, el uso del máximo común divisor (mcd) y el mínimo"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 7: Teselados en la vida comunitaria",
      "paginas": "págs. 140-144",
      "pagina_inicio": 140,
      "resumen": "En este proyecto, van a tener la oportunidad de crear nuevos conocimientos en física y en matemáticas Elaborarán distintos proyectos que los ayudarán a entender cómo se relacionan estas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 7: Teselados en la vida comunitaria",
      "paginas": "págs. 141-145",
      "pagina_inicio": 141,
      "resumen": "Recuerden que cada uno de ustedes va a desempeñar un papel fundamental a lo largo de los proyectos, por lo cual es necesario que cada quien comprenda las funciones"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 8: Modelos atómicos y estructura de la materia",
      "paginas": "págs. 144-148",
      "pagina_inicio": 144,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que indique tu nivel"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 8: Modelos atómicos y estructura de la materia",
      "paginas": "págs. 145-149",
      "pagina_inicio": 145,
      "resumen": "Modelos atómicos y estructura de la materia Desde la Antigüedad los seres humanos se han preguntado acerca de las características de la materia que da forma a todo lo que los rodea y"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 9: Constitución de la materia",
      "paginas": "págs. 148-152",
      "pagina_inicio": 148,
      "resumen": "W E xponer la información con voz clara y fuerte ener contacto con el público y estar preparados para er solidarios con sus compañeras y compañeros para"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 9: Constitución de la materia",
      "paginas": "págs. 149-153",
      "pagina_inicio": 149,
      "resumen": "La recolección, el registro, la lectura y la comunicación de información relacionada con la estructura y composición de la materia son necesarios para construir conocimiento Es por esto que se emplean herramientas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 10: ¿Cuánto mide un modelo atómico?",
      "paginas": "págs. 154-158",
      "pagina_inicio": 154,
      "resumen": "En este proyecto parcial de aula, repasarán los contenidos estu- diados de matemáticas y su vinculación con la física y otras ciencias Para ello, se apoyarán en las presentaciones que harán en cada uno"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 10: ¿Cuánto mide un modelo atómico?",
      "paginas": "págs. 155-159",
      "pagina_inicio": 155,
      "resumen": "¿Cuánto mide un modelo atómico? A simple vista no se pueden observar los átomos, por ello, existen los modelos atómicos; éstos ayudan a tener una mejor"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 11: La temperatura en los polígonos",
      "paginas": "págs. 158-162",
      "pagina_inicio": 158,
      "resumen": "W A brir una sección de preguntas y respuestas istribuir papeletas para que les escriban opiniones ecibir comentarios que les permitan hacer mejoras"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 11: La temperatura en los polígonos",
      "paginas": "págs. 159-163",
      "pagina_inicio": 159,
      "resumen": "La temperatura en los polígonos Los polígonos regulares están en todas partes, por lo que conocer las dimensiones de una figura ayuda a saber cuánta temperatura"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 12: ¿Mucho frío o mucho calor?",
      "paginas": "págs. 162-166",
      "pagina_inicio": 162,
      "resumen": "Valoración del proyecto académico Pautas generadoras de reflexión Siempre Casi Analizamos, mis compañeras, compañeros y yo, en coordinación con nuestra maestra o nuestro"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 12: ¿Mucho frío o mucho calor?",
      "paginas": "págs. 163-167",
      "pagina_inicio": 163,
      "resumen": "El tiempo atmosférico se puede percibir con una simple sensación; sin embargo, es importante conocer por qué en ocasiones cambia la temperatura drásticamente o por qué a veces se percibe demasiado"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: ¡Lanzar, patear o batear!",
      "paginas": "págs. 168-172",
      "pagina_inicio": 168,
      "resumen": "La mecánica clásica es un área de la física que estudia el movimien- to de un objeto, junto con los agentes externos que lo originan, como la gravedad, los campos eléctricos o los campos magnéticos"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: ¡Lanzar, patear o batear!",
      "paginas": "págs. 169-173",
      "pagina_inicio": 169,
      "resumen": "W Expondrán, mediante una demostración de las leyes de Newton, las fuerzas que actúan en diferentes objetos de su comunidad, con ayuda de cálculos con exponentes enteros y raíces"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: Práctica deportiva con ayuda de la ciencia",
      "paginas": "págs. 174-178",
      "pagina_inicio": 174,
      "resumen": "A continuación, se muestran dos situaciones problemáticas que pueden utilizar para su proyecto Revisen cuál describe mejor su propio contexto y elíjanla Si lo consideran"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Ciencia para destacar en el deporte",
      "paginas": "págs. 178-182",
      "pagina_inicio": 178,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Ciencia para destacar en el deporte",
      "paginas": "págs. 179-183",
      "pagina_inicio": 179,
      "resumen": "Es esencial que reconozcan la situación problemática para que lleven a cabo el proyecto académico A continuación, se muestran dos propuestas que pueden utilizar Revisen cuál se ajusta mejor a su realidad y elíjanla"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 1: Noticias del otro lado del Atlántico",
      "paginas": "págs. 186-190",
      "pagina_inicio": 186,
      "resumen": "La forma de vida, los gustos personales, intereses y creencias forman parte de la identidad de la gente y son un derecho que se debe respetar, ya que todas las identidades son valiosas Sin embargo, al revisar algu-"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 1: Noticias del otro lado del Atlántico",
      "paginas": "págs. 187-191",
      "pagina_inicio": 187,
      "resumen": "W Redactarán una carta imaginaria, tratando de ponerse desde la perspectiva de los pueblos americanos originarios"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 2: El pensamiento de los pueblos originarios de América en 1492",
      "paginas": "págs. 192-196",
      "pagina_inicio": 192,
      "resumen": "El pensamiento de los pueblos originarios de América en 1492 Por mucho tiempo, la historia de la llegada de la expedición de Colón y las consecuencias que tuvo esta invasión en territorio americano se"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 3: Todos tenemos derecho a ser diferentes",
      "paginas": "págs. 196-200",
      "pagina_inicio": 196,
      "resumen": "Todos tenemos derecho a ser diferentes T odas las personas tienen derecho a exigir que se respete su identidad: la forma de ver el mundo, las creencias, la forma de hablar y vestir,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 4: Las tensiones políticas y sociales del México antiguo",
      "paginas": "págs. 200-204",
      "pagina_inicio": 200,
      "resumen": "En este proyecto parcial de aula, analizarán la dominación española en México y las formas de violencia en las sociedades, realizando, de manera individual, investigaciones y cuadros comparativos Posteriormente,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 4: Las tensiones políticas y sociales del México antiguo",
      "paginas": "págs. 201-205",
      "pagina_inicio": 201,
      "resumen": "Se desarrollarán tres proyectos académicos: W Analizarán las tensiones políticas y sociales existentes en el México antiguo para comprender de qué manera este panorama influyó en la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 5: La irrupción colonial en las sociedades prehispánicas",
      "paginas": "págs. 206-210",
      "pagina_inicio": 206,
      "resumen": "Entender el proceso de conquista como una ruptura de las sociedades del México antiguo les ayudará a tener una perspectiva histórica de las causas de desigualdad y exclusión que viven"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 6: La conciencia histórica ante la violencia",
      "paginas": "págs. 210-214",
      "pagina_inicio": 210,
      "resumen": "En comunidad, identificar los tipos de violencia mediante la realización de un debate corto, con el propósito de generar consensos y estrategias que permitan desarrollar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: Unos pocos españoles con mucho y muchos trabajadores de minas con poco",
      "paginas": "págs. 216-220",
      "pagina_inicio": 216,
      "resumen": "W Una lotería de la desigualdad que exponga las diversas poblaciones que conformaban la sociedad en la Nueva España: indígenas, esclavos africanos, afrodescendientes, mestizos y castas para reflexionar sobre las condiciones"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: Ayer y hoy: diferentes condiciones de vida",
      "paginas": "págs. 220-224",
      "pagina_inicio": 220,
      "resumen": "Ayer y hoy: diferentes condiciones de vida De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: Ayer y hoy: diferentes condiciones de vida",
      "paginas": "págs. 221-225",
      "pagina_inicio": 221,
      "resumen": "Ayer y hoy: diferentes condiciones de vida En el periodo colonial novohispano, entre los siglos xvi y xix, no todas las personas tenían las mismas oportunidades, las"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 9: Conozcamos nuestros derechos",
      "paginas": "págs. 224-228",
      "pagina_inicio": 224,
      "resumen": "W R epasar las características económicas, políticas y culturales de los distintos grupos sociales o estamentos, pues constituyen la parte nsayar y verificar si hay aspectos que pueden mejorar para que se"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 9: Conozcamos nuestros derechos",
      "paginas": "págs. 225-229",
      "pagina_inicio": 225,
      "resumen": "Como saben, los ciudadanos mexicanos tienen derechos humanos, políticos y sociales que se pueden ejercer plenamente, pero durante la Colonia esto no fue así Este proyecto pretende"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 10: Las luchas populares de Hidalgo y Morelos",
      "paginas": "págs. 230-234",
      "pagina_inicio": 230,
      "resumen": "Es importante que se involucren en las actividades de este proyecto parcial de aula, ya que los contenidos que se desarrollan les ayudarán a comprender la importancia de la participación popular, de la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 10: Las luchas populares de Hidalgo y Morelos",
      "paginas": "págs. 231-235",
      "pagina_inicio": 231,
      "resumen": "Para alcanzar el horizonte de expectativas, realizarán las siguientes W Una línea del tiempo, la cual les ayudará a investigar de manera comunitaria las luchas populares de Hidalgo y Morelos, y"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 11: La consumación de la Independencia",
      "paginas": "págs. 236-240",
      "pagina_inicio": 236,
      "resumen": "Explicar, en comunidad, la consumación de la Independencia que mantuvo las mismas estructuras de poder, originadas por parte de los criollos, la Iglesia y el ejército, mediante la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 12: La igualdad en el marco de la interculturalidad",
      "paginas": "págs. 240-244",
      "pagina_inicio": 240,
      "resumen": "Reconocer y explicar la igualdad en el marco de la interculturalidad por la vía de la participación comunitaria, mediante la elaboración de un cartel informativo, para"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 1: Entrevistas para un proyecto de vida",
      "paginas": "págs. 248-252",
      "pagina_inicio": 248,
      "resumen": "A lo largo de su vida, las personas plantean diversos horizontes de expectativas personales y comunitarios, éstos les pueden ayudar a construir un estilo de vida activo y saludable Durante el proceso,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 1: Entrevistas para un proyecto de vida",
      "paginas": "págs. 249-253",
      "pagina_inicio": 249,
      "resumen": "Consideren que, durante el proceso de elaboración de cada proyecto y su integración, tendrán momentos para reflexionar, revisar y, si es preciso, rehacer sus proyectos"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 2: ¡Para actuar necesitamos un plan!",
      "paginas": "págs. 252-256",
      "pagina_inicio": 252,
      "resumen": "W O rganizar los datos de las entrevistas que serán incluidos en la exposición rdenar los datos en los gráficos para la presentación alizar ejercicios de relajación"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 2: ¡Para actuar necesitamos un plan!",
      "paginas": "págs. 253-257",
      "pagina_inicio": 253,
      "resumen": "¡Para actuar necesitamos un plan! Cuando se presenta una dificultad, se hace necesario buscar alternativas para dar con la mejor solución"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 3: Direccionando mi potencial",
      "paginas": "págs. 256-260",
      "pagina_inicio": 256,
      "resumen": "W Pr esentar el plan de acción a las personas involucradas sobre onsiderar las emociones de los presentes, ya que las problemáticas pueden tratar aspectos sensibles para la comunidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 3: Direccionando mi potencial",
      "paginas": "págs. 257-261",
      "pagina_inicio": 257,
      "resumen": "Cuando las personas conocen su potencial personal, pueden establecer horizontes de expectativas realistas en su plan o proyecto de vida, esto incluye el desarrollo de"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 4: ¡Propuestas que cambian!",
      "paginas": "págs. 262-266",
      "pagina_inicio": 262,
      "resumen": "El diálogo es uno de los recursos más importantes en la toma de decisiones dentro de la comunidad, ya que ayuda a to- mar acuerdos, los cuales, a su vez, sirven para diseñar planes"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 4: ¡Propuestas que cambian!",
      "paginas": "págs. 263-267",
      "pagina_inicio": 263,
      "resumen": "Para que una localidad funcione adecuadamente, se requiere de un ensamble perfecto entre los procesos, los servicios y las técnicas que tienen como función el"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 5: Alternativas para una solución",
      "paginas": "págs. 266-270",
      "pagina_inicio": 266,
      "resumen": "W D ialogar en colectivo sobre su exposición y analizar las áreas ◗ Identificar lo que necesiten mejorar para cada actividad realizada ◗ Reflexionar si la información presentada fue suficiente para su"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 5: Alternativas para una solución",
      "paginas": "págs. 267-271",
      "pagina_inicio": 267,
      "resumen": "La diversidad de recursos, productos y servicios tiene el propósito de contribuir al bienestar de la población Sin embargo, de ésta también"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 6: ¡Pienso, reciclo y convierto!",
      "paginas": "págs. 270-274",
      "pagina_inicio": 270,
      "resumen": "W A nalizar las diferentes alternativas Presenten propuestas para optimizar materiales, herramientas e instrumentos como ruta de mejora personal y comunitaria"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 6: ¡Pienso, reciclo y convierto!",
      "paginas": "págs. 271-275",
      "pagina_inicio": 271,
      "resumen": "El cuidado del medio ambiente ayuda no sólo a mantener en buen estado los recursos naturales, sino también a generar en las"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: Fandango de emociones, trovador de poesía",
      "paginas": "págs. 16-20",
      "pagina_inicio": 16,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: Fandango de emociones, trovador de poesía",
      "paginas": "págs. 17-21",
      "pagina_inicio": 17,
      "resumen": "Fandango de emociones, trovador de poesía Identificar las figuras retóricas brinda consciencia sobre su uso en los lenguajes cotidiano y musical"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 18: Del cuento al teatro, de la expresión literaria a la expresión corporal",
      "paginas": "págs. 20-24",
      "pagina_inicio": 20,
      "resumen": "Del cuento al teatro, de la expresión literaria a la expresión corporal De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 18: Del cuento al teatro, de la expresión literaria a la expresión corporal",
      "paginas": "págs. 21-25",
      "pagina_inicio": 21,
      "resumen": "Del cuento al teatro, de la expresión literaria a la expresión corporal La creatividad surge en un acto individual y se nutre en la colectividad Una obra literaria, concebida como un cuento"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 19: Vayamos a la poesía",
      "paginas": "págs. 26-30",
      "pagina_inicio": 26,
      "resumen": "No solamente en los museos hay obras de arte, también las hay en una casa de la cultura, un espacio al aire libre, una calle, una escuela, un mercado o un parque La pintura, la música, la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 19: Vayamos a la poesía",
      "paginas": "págs. 27-31",
      "pagina_inicio": 27,
      "resumen": "Seguramente en su comunidad hay personas a quienes les gusta escribir poesía o ustedes mismos, por interés personal, han desarrollado esa habilidad y"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 20: Encuentro de lectores",
      "paginas": "págs. 30-34",
      "pagina_inicio": 30,
      "resumen": "W D irigirse con total respeto al público y a las compañeras y los compañeros que estén recitando ermanecer en silencio durante la presentación"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 20: Encuentro de lectores",
      "paginas": "págs. 31-35",
      "pagina_inicio": 31,
      "resumen": "Las narraciones son manifestaciones literarias en las cuales la creatividad y la imaginación se hacen presentes El cuento y la novela fomentan el aprecio por la lectura,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 21: Compartamos el arte",
      "paginas": "págs. 34-38",
      "pagina_inicio": 34,
      "resumen": "W E scribir una expresión o frase sobre la importancia de leer, ya que esta actividad beneficia de muchas formas a quienes la practican La reflexión podría persuadir a otros a leer y fomentar su gusto"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 21: Compartamos el arte",
      "paginas": "págs. 35-39",
      "pagina_inicio": 35,
      "resumen": "En las exhibiciones de arte hay diferentes objetos que son expuestos para que los asistentes puedan admirarlos, apreciarlos y conocer algunos datos sobre ellos"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 22: Historias, cantos y sueños de otros pueblos",
      "paginas": "págs. 40-44",
      "pagina_inicio": 40,
      "resumen": "La literatura: voces entrecruzadas Al ver otros pueblos y sus culturas, se puede pensar que sólo se recibe pasivamente lo que dicen, escriben o expresan en una his-"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 22: Historias, cantos y sueños de otros pueblos",
      "paginas": "págs. 41-45",
      "pagina_inicio": 41,
      "resumen": "Será importante que hagan una lectura previa de los proyectos, de esa manera anticiparán tanto los ecursos como los tiempos que requerirán para su"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 23: Voces de nuestra identidad",
      "paginas": "págs. 46-50",
      "pagina_inicio": 46,
      "resumen": "Tanto las personas como las comunidades utilizan diferentes medios para expresar sus identidades; por ejemplo, la forma de vestir y el arreglo personal dan una idea de cómo se ve alguien"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 24: Me gusta, no me gusta o sólo un poco",
      "paginas": "págs. 50-54",
      "pagina_inicio": 50,
      "resumen": "Los gustos personales son diversos En el ámbito de la música o la literatura, cada persona tiene sus preferencias Éstas se pueden justificar por las características de las obras de ar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 25: Títeres narradores",
      "paginas": "págs. 56-60",
      "pagina_inicio": 56,
      "resumen": "W Recrearán narraciones biográficas o autobiográficas, en español u otras lenguas, mediante una representación de teatro guiñol para rescatar relatos vinculados a sí mismos o a su comunidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 25: Títeres narradores",
      "paginas": "págs. 57-61",
      "pagina_inicio": 57,
      "resumen": "En el transcurso de su vida las personas escuchan cuentos, leyendas o historias que captan su atención Algunas de esas narraciones abordan temáticas relacionadas con su comunidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 26: La música como identidad cultural",
      "paginas": "págs. 60-64",
      "pagina_inicio": 60,
      "resumen": "W C onservar las notas y observaciones de los textos y la adaptación al teatro guiñol, ya que serán de utilidad más adelante valuar el interés de la audiencia y el impacto que tuvo su presentación"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 26: La música como identidad cultural",
      "paginas": "págs. 61-65",
      "pagina_inicio": 61,
      "resumen": "La música como identidad cultural La música es una expresión artística que puede funcionar como herramienta para rescatar y valorar la identidad cultural"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 27: ¡Historietas que se sienten!",
      "paginas": "págs. 64-68",
      "pagina_inicio": 64,
      "resumen": "W A nalizar, en asamblea, su desempeño durante el evento valuar el interés de la audiencia y el impacto que tuvieron las presentaciones eflexionar sobre los aprendizajes que les dejó este proyecto y localizar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 27: ¡Historietas que se sienten!",
      "paginas": "págs. 65-69",
      "pagina_inicio": 65,
      "resumen": "Reconocer la pluralidad lingüística del país y valorar las expresiones orales y escritas que caracterizan a cada lengua sensibiliza a las personas respecto a la riqueza"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 28: Detectives en la comunidad",
      "paginas": "págs. 72-76",
      "pagina_inicio": 72,
      "resumen": "Recuerden que al finalizar el proyecto parcial de aula presentarán nuevamente los resultados de cada uno de sus proyectos académicos, por ello es importante que"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 29: Escribe tu propia historia",
      "paginas": "págs. 76-80",
      "pagina_inicio": 76,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 29: Escribe tu propia historia",
      "paginas": "págs. 77-81",
      "pagina_inicio": 77,
      "resumen": "T odo lenguaje tiene la virtud de comunicar, pero cuando lo hace de manera artística adquiere una plenitud y eficacia que no sólo deleita, sino que también puede ayudar en la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 30: Las raíces de tu entorno",
      "paginas": "págs. 80-84",
      "pagina_inicio": 80,
      "resumen": "W I ntercambiar impresiones, en asamblea, sobre su experiencia en el desarrollo del proyecto y nalizar las fortalezas y las áreas de oportunidad de su"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 30: Las raíces de tu entorno",
      "paginas": "págs. 81-85",
      "pagina_inicio": 81,
      "resumen": "A lo largo del tiempo, los habitantes de México han acumulado una infinidad de relatos tradicionales que han dado identidad a familias y comunidades Hoy existe la oportunidad de indagar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 16: Principios de Pascal y Arquímedes en situaciones prácticas",
      "paginas": "págs. 88-92",
      "pagina_inicio": 88,
      "resumen": "El taller de Pascal y Arquímedes En este proyecto parcial de aula, prepararán un conjunto de actividades prácticas y discusiones que les permitirán explorar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 16: Principios de Pascal y Arquímedes en situaciones prácticas",
      "paginas": "págs. 89-93",
      "pagina_inicio": 89,
      "resumen": "Además, completarán actividades y pasos que fortalecerán no sólo sus proyectos, sino su formación En la planeación de estos proyectos, es importante mantener"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: Pascal, Arquímedes y figuras compuestas",
      "paginas": "págs. 92-96",
      "pagina_inicio": 92,
      "resumen": "Pascal, Arquímedes y figuras compuestas De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: Pascal, Arquímedes y figuras compuestas",
      "paginas": "págs. 93-97",
      "pagina_inicio": 93,
      "resumen": "Pascal, Arquímedes y figuras compuestas Reflexionar acerca de la interrelación entre física y matemáticas, destacar su presencia y relevancia en el entorno cotidiano y en la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 18: Flotabilidad de barcos de papel",
      "paginas": "págs. 96-100",
      "pagina_inicio": 96,
      "resumen": "Flotabilidad de barcos de papel De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 18: Flotabilidad de barcos de papel",
      "paginas": "págs. 97-101",
      "pagina_inicio": 97,
      "resumen": "Flotabilidad de barcos de papel T endrán el desafío de diseñar y construir un barco de papel que flote en el agua, lo que les permitirá analizar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 19: Energía por moverse o estar quieto",
      "paginas": "págs. 102-106",
      "pagina_inicio": 102,
      "resumen": "La energía y sus transformaciones La captación y generación de energía es una de las grandes ne- cesidades y aportaciones de la humanidad Por ejemplo, se"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 19: Energía por moverse o estar quieto",
      "paginas": "págs. 103-107",
      "pagina_inicio": 103,
      "resumen": "Estos proyectos son relevantes, ya que la energía forma parte de su día a día, por lo que es de gran utilidad conocer y entender sus diferentes manifestaciones y usos más"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 20: Calor, motores y emisiones",
      "paginas": "págs. 106-110",
      "pagina_inicio": 106,
      "resumen": "En la presentación de su proyecto, consideren los siguientes momentos: W Pr eparar lo necesario para hacer la presentación ante evisar su trabajo a profundidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 20: Calor, motores y emisiones",
      "paginas": "págs. 107-111",
      "pagina_inicio": 107,
      "resumen": "Los motores son dispositivos que emplean distintos tipos de energía (como eléctrica o calórica) para producir energía mecánica, o bien, transforman la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 21: El Sol: más que una estrella",
      "paginas": "págs. 110-114",
      "pagina_inicio": 110,
      "resumen": "W P edir al público una retroalimentación ialogar entre ustedes sobre cómo se sintieron mientras exponían y analizar las áreas de oportunidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 21: El Sol: más que una estrella",
      "paginas": "págs. 111-115",
      "pagina_inicio": 111,
      "resumen": "Una de las fuentes de energía más conocida es la solar, ya que se tiene contacto con ésta todos los días El desarrollo de la vida se debe, en gran parte, a la energía que el Sol irradia en"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 22: ¡Electricidad por todas partes!",
      "paginas": "págs. 116-120",
      "pagina_inicio": 116,
      "resumen": "Expresiones y representaciones de la electricidad y el magnetismo Para la realización de este proyecto parcial de aula, contarán"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 22: ¡Electricidad por todas partes!",
      "paginas": "págs. 117-121",
      "pagina_inicio": 117,
      "resumen": "Antes de trabajar los proyectos académicos, revisen su contenido e identifiquen qué harán en cada uno de ellos Después, comenten con sus compañeras y compañeros por qué"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 23: ¡Aprovechemos el magnetismo!",
      "paginas": "págs. 122-126",
      "pagina_inicio": 122,
      "resumen": "En el entorno hay algunos objetos que al acercarse se atraen o se repelen, ¿cómo pueden interpretarse estos fenómenos? El magnetismo es una fuerza invisible pero poderosa que es conveniente conocer"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 24: ¡Y se hizo la luz!",
      "paginas": "págs. 124-128",
      "pagina_inicio": 124,
      "resumen": "W R evisar y analizar las fuentes confiables consultadas erificar que la información presentada sea correcta y clara Si hay algún problema, realizar las correcciones necesarias"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 24: ¡Y se hizo la luz!",
      "paginas": "págs. 125-129",
      "pagina_inicio": 125,
      "resumen": "La luz forma parte del contexto cotidiano, es necesaria para realizar actividades durante el día y la noche; además, proporciona calor Pero, ¿qué es la luz?,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: Historia del Universo",
      "paginas": "págs. 130-134",
      "pagina_inicio": 130,
      "resumen": "Las comunidades escolares son espacios propicios para el diá- logo, ya que quienes las conforman tienen opiniones y argu- mentos distintos que, en el marco de actividades colaborati -"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: Historia del Universo",
      "paginas": "págs. 131-135",
      "pagina_inicio": 131,
      "resumen": "Por lo antes mencionado, y como parte de esta planeación, antes de trabajar estos proyectos académicos, consideren que: W Es conveniente identificar si hay una relación entre las intenciones"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 26: ¡Así se ven el Universo y el Sistema Solar!",
      "paginas": "págs. 134-138",
      "pagina_inicio": 134,
      "resumen": "¡Así se ven el Universo y el Sistema Solar! De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 26: ¡Así se ven el Universo y el Sistema Solar!",
      "paginas": "págs. 135-139",
      "pagina_inicio": 135,
      "resumen": "¡Así se ven el Universo y el Sistema Solar! No se conoce el Universo en su totalidad, pero se ha recopilado bastante información sobre los cuerpos que conforman el Sistema Solar y los"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 27: ¿Qué onda con las ondas electromagnéticas?",
      "paginas": "págs. 138-142",
      "pagina_inicio": 138,
      "resumen": "¿Qué onda con las ondas electromagnéticas? La radiación electromagnética se refiere a la propagación de la energía a través del espacio por"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 28: La humanidad y la temperatura en la que vive",
      "paginas": "págs. 142-146",
      "pagina_inicio": 142,
      "resumen": "Los factores que afectan al cambio climático van más allá de ser contenidos del aula escolar Miles de profesionistas de dife- rentes nacionalidades y lenguas los estudian en todo el mun-"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 28: La humanidad y la temperatura en la que vive",
      "paginas": "págs. 143-147",
      "pagina_inicio": 143,
      "resumen": "W Organizarán un debate breve sobre las consecuencias a la salud por la exposición a gases de efecto invernadero, para lo que harán Es importante que conserven y mejoren los productos obtenidos"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 29: El antes y el ahora de los gases de la atmósfera",
      "paginas": "págs. 146-150",
      "pagina_inicio": 146,
      "resumen": "El antes y el ahora de los gases de la atmósfera Consideren lo siguiente con el fin de llevar a cabo con éxito la conferencia específica sobre el calentamiento global:"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 29: El antes y el ahora de los gases de la atmósfera",
      "paginas": "págs. 147-151",
      "pagina_inicio": 147,
      "resumen": "El antes y el ahora de los gases de la atmósfera El aumento de la concentración del dióxido de carbono, el metano, los óxidos de nitrógeno y el ozono, entre otros gases,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 30: Lo que respiramos",
      "paginas": "págs. 150-154",
      "pagina_inicio": 150,
      "resumen": "W Pr eparar la presentación de la información más relevante cer un boceto del esquema en donde presenten los materiales que van a utilizar W R epasar la información y, sobre todo, el mensaje que se pretende explicar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 30: Lo que respiramos",
      "paginas": "págs. 151-155",
      "pagina_inicio": 151,
      "resumen": "principalmente a las comunidades urbanas; sin embargo, la acumulación y el crecimiento en la atmósfera de"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: Dos proyectos de nación",
      "paginas": "págs. 158-162",
      "pagina_inicio": 158,
      "resumen": "Vale la pena preguntarse cuáles problemas enfrentó México al convertirse en una nación independiente, por qué experi- mentó diferentes formas de gobierno, y cómo o para qué fin se"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: Dos proyectos de nación",
      "paginas": "págs. 159-163",
      "pagina_inicio": 159,
      "resumen": "Reconocer el proceso de conformación de la identidad de México en sus diferentes formas de gobierno y los proyectos de distintos grupos políticos es un reto que"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: ¡Lucha contra los invasores!",
      "paginas": "págs. 162-166",
      "pagina_inicio": 162,
      "resumen": "W D ialogar, en colectivo, sobre su exposición y analizar ◗ Responder a las preguntas de la comunidad escolar para aclarar cualquier duda o confusión"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: ¡Lucha contra los invasores!",
      "paginas": "págs. 163-167",
      "pagina_inicio": 163,
      "resumen": "Durante la primera mitad del siglo xix, en los primeros años de vida independiente, México sufrió importantes invasiones extranjeras, tales como la Primera Intervención Francesa y la invasión estadounidense"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 15: Principales organizaciones por la paz",
      "paginas": "págs. 166-170",
      "pagina_inicio": 166,
      "resumen": "Principales organizaciones por la paz De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 15: Principales organizaciones por la paz",
      "paginas": "págs. 167-171",
      "pagina_inicio": 167,
      "resumen": "Reconocer y difundir el trabajo de las personas, grupos y organizaciones que trabajan a favor de la cultura de paz en México y América Latina permite elegir las mejores estrategias"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 16: La ideología que cambió a México",
      "paginas": "págs. 172-176",
      "pagina_inicio": 172,
      "resumen": "el valor e impacto de estos hechos como manifestación de la conciencia histórica y el reconocimiento de los derechos humanos en la actualidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 17: El triunfo del liberalismo mexicano",
      "paginas": "págs. 176-180",
      "pagina_inicio": 176,
      "resumen": "Con la victoria del pensamiento liberal se establecieron las Leyes de Reforma, las cuales representan una transformación constitucional que impactó la vida económica, política y"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 18: El Estado de derecho y el respeto a los derechos humanos",
      "paginas": "págs. 180-184",
      "pagina_inicio": 180,
      "resumen": "Para la conformación del Estado de derecho en México se estableció la división de poderes, los cuales son principios que regulan la organización política del país, asimismo,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 19: Honor y libertad: la epopeya del 5 de Mayo de 1862",
      "paginas": "págs. 186-190",
      "pagina_inicio": 186,
      "resumen": "En 1862, México se encontró inmerso en una lucha por su soberanía y libertad La invasión francesa amenazó con someter al país al dominio extranjero pero, en medio de la oscuridad y la incertidumbre, una"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 20: Las implicaciones sociales y económicas del Porfiriato",
      "paginas": "págs. 190-194",
      "pagina_inicio": 190,
      "resumen": "Las implicaciones sociales y económicas del Porfiriato W P ermitir que los asistentes hagan preguntas para aclarar cualquier duda o inquietud sobre los eventos presentados"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 20: Las implicaciones sociales y económicas del Porfiriato",
      "paginas": "págs. 191-195",
      "pagina_inicio": 191,
      "resumen": "Conocer e interpretar los acontecimientos más importantes que sucedieron durante el periodo de la República juarista y el Porfiriato ayudará"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 21: Las leyes por los derechos humanos",
      "paginas": "págs. 194-198",
      "pagina_inicio": 194,
      "resumen": "Es momento de presentar su producto final ante la comunidad escolar T omen en cuenta lo siguiente: W Pr ocurar la participación de todxs"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 21: Las leyes por los derechos humanos",
      "paginas": "págs. 195-199",
      "pagina_inicio": 195,
      "resumen": "Seguramente, en algún momento de su educación, aprendieron que todas las personas cuentan con obligaciones y derechos, los cuales están estipulados en las leyes y, a su vez, son protegidos por diversas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 22: Causas de la Revolución Mexicana",
      "paginas": "págs. 202-206",
      "pagina_inicio": 202,
      "resumen": "desigualdad y lograr el acceso de la población a una vida digna a partir de un espacio geográfico caracterizado por el agrarismo, el sindicalismo"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 22: Causas de la Revolución Mexicana",
      "paginas": "págs. 203-207",
      "pagina_inicio": 203,
      "resumen": "A finales del siglo xix y principios del siglo xx, México vivió un acelerado desarrollo económico y social gracias a la inversión opiedad privada de tierras, fábricas y minas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 23: La tierra es de quien la trabaja",
      "paginas": "págs. 206-210",
      "pagina_inicio": 206,
      "resumen": "Para presentar sus hallazgos, reflexiones y propuestas en el periódico escolar comunitario continúen con la estrategia de trabajo colaborativo y consideren lo siguiente:"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 23: La tierra es de quien la trabaja",
      "paginas": "págs. 207-211",
      "pagina_inicio": 207,
      "resumen": "Emiliano Zapata y Doroteo Arango, mejor conocido como Francisco Villa, fueron dos caudillos de la Revolución Mexicana que buscaron justicia por medio de la repartición"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 24: Los derechos sociales",
      "paginas": "págs. 210-214",
      "pagina_inicio": 210,
      "resumen": "W D iscutir, en colectivo, si la representación será abierta a la comunidad para definir el mejor escenario W M antener una postura crítica frente a los"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 24: Los derechos sociales",
      "paginas": "págs. 211-215",
      "pagina_inicio": 211,
      "resumen": "Como resultado del movimiento armado que se inició con la revolución maderista y continuó con el zapatismo y el villismo, se sentaron las bases para la aplicación"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: ¡Adiós riesgos, hola prevención!",
      "paginas": "págs. 218-222",
      "pagina_inicio": 218,
      "resumen": "En la actualidad, las personas enfrentan nuevos retos y desafíos en el contexto familiar, escolar y comunitario Por ejemplo, hoy en día, muchos adultos tienen que trabajar más tiempo para"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: ¡Adiós riesgos, hola prevención!",
      "paginas": "págs. 219-223",
      "pagina_inicio": 219,
      "resumen": "W Programarán un club de juegos recreativos donde se integren capacidades, habilidades y destrezas motrices mediante la identificación de factores que afectan la práctica sistemática de actividad física"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: Me muevo para una vida saludable",
      "paginas": "págs. 224-228",
      "pagina_inicio": 224,
      "resumen": "Me muevo para una vida saludable La actividad física es un medio para adquirir beneficios físicos y socioemocionales"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 9: Expresión corporal: sana convivencia",
      "paginas": "págs. 228-232",
      "pagina_inicio": 228,
      "resumen": "Expresión corporal: sana convivencia Los valores y las manifestaciones sociales reflejan las prácticas culturales de las familias y las comunidades La"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 10: ¡Sé un factor de cambio!",
      "paginas": "págs. 234-238",
      "pagina_inicio": 234,
      "resumen": "W Diseñarán un mapa de riesgos y peligros ante accidentes, adicciones y violencias que impiden o afectan la práctica sistemática de la actividad física, con el fin de establecer"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 11: El mapa, ¿a dónde lleva?",
      "paginas": "págs. 238-242",
      "pagina_inicio": 238,
      "resumen": "Desde su origen, el ser humano ha procurado su seguridad física; para ello, ha formado grupos con otros individuos de su misma especie En la actualidad, algunos beneficios de esa"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 12: Hacer, contribuir y comunicar",
      "paginas": "págs. 242-246",
      "pagina_inicio": 242,
      "resumen": "Existen factores sociales, económicos, culturales y naturales que afectan positiva o negativamente la salud de las personas Las acciones encaminadas al cuidado de la salud"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 31: Memoria viva",
      "paginas": "págs. 14-18",
      "pagina_inicio": 14,
      "resumen": "Identificamos algunos hechos o prácticas culturales relevantes para la comunidad, pero desconocemos si existe algún registro de ellos"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: El poder de los géneros artísticos en la memoria colectiva",
      "paginas": "págs. 18-22",
      "pagina_inicio": 18,
      "resumen": "El poder de los géneros artísticos en la memoria colectiva Por medio de sus distintos lenguajes, el arte puede enriquecer las representaciones de la memoria colectiva,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 33: ¡Nuestro pasado vive!",
      "paginas": "págs. 22-26",
      "pagina_inicio": 22,
      "resumen": "Hay un gran número de prácticas culturales antiguas en todas las comunidades del país Cada región o estado tiene características particulares que se relacionan con factores"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 34: ¡El poder lo tienes tú!",
      "paginas": "págs. 28-32",
      "pagina_inicio": 28,
      "resumen": "En este proyecto parcial de aula, desarrollarán tres proyectos académicos que involucran la comunicación dialógica y argumentativa cuyo propósito principal consiste en posibilitar"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 34: ¡El poder lo tienes tú!",
      "paginas": "págs. 29-33",
      "pagina_inicio": 29,
      "resumen": "Cada persona tiene el poder de participar en la transformación de su realidad por medio del lenguaje oral, escrito y gráfico, ya que éste es un recurso que permite gestar grandes cambios: la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 35: La violencia se va si usamos diálogos y argumentos",
      "paginas": "págs. 32-36",
      "pagina_inicio": 32,
      "resumen": "W Presentar ante la audiencia el propósito de la actividad W Desarrollar la exposición conforme a lo planificado W Mostrar respeto ante las dudas del público y responderlas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 35: La violencia se va si usamos diálogos y argumentos",
      "paginas": "págs. 33-37",
      "pagina_inicio": 33,
      "resumen": "Las expresiones de violencia en la sociedad deben ser rechazadas de manera continua debido a la gravedad de sus efectos Por ejemplo, entre los adolescentes, la violencia cotidiana puede"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 36: Arte colectivo-social",
      "paginas": "págs. 36-40",
      "pagina_inicio": 36,
      "resumen": "W Reflexionar en torno a sus avances en el desarrollo de su capacidad argumentativa; para ello, analicen los aprendizajes obtenidos y su desenvolvimiento"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 36: Arte colectivo-social",
      "paginas": "págs. 37-41",
      "pagina_inicio": 37,
      "resumen": "Las manifestaciones artísticas generan empatía, pensamiento crítico, creatividad y asertividad entre los integrantes de una sociedad; además, son medios"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 37: El arte también es saludable",
      "paginas": "págs. 44-48",
      "pagina_inicio": 44,
      "resumen": "Desconocemos cómo el lenguaje artístico y sus diversas manifestaciones han podido contribuir en la promoción de la salud Tampoco identificamos,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 38: Una frase que debería ser viral: #VidaSaludable",
      "paginas": "págs. 48-52",
      "pagina_inicio": 48,
      "resumen": "W Evaluar, en asamblea, el impacto de la información y el diseño del periódico mural de la salud, y determinar si se alcanzó el horizonte de expectativas establecido"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 38: Una frase que debería ser viral: #VidaSaludable",
      "paginas": "págs. 49-53",
      "pagina_inicio": 49,
      "resumen": "En medios digitales es posible socializar frases sobre la vida saludable mediante un hashtag; es decir, una palabra o serie de palabras clave colocada después del signo gato, cuya forma"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 39: Reconocimiento y creación de mensajes para nuestra salud",
      "paginas": "págs. 52-56",
      "pagina_inicio": 52,
      "resumen": "W Presentar al inicio el propósito de la actividad W Crear un ambiente de cordialidad y de escucha para que cada integrante tenga la confianza de expresarse"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 39: Reconocimiento y creación de mensajes para nuestra salud",
      "paginas": "págs. 53-57",
      "pagina_inicio": 53,
      "resumen": "Una de las problemáticas relacionadas con la salud, a nivel nacional e internacional, es la alimentación desequilibrada Entre los diversos factores que la originan, pueden señalarse los siguientes: el hecho de que múltiples"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 40: Los textos científicos, un paso en busca",
      "paginas": "págs. 60-64",
      "pagina_inicio": 60,
      "resumen": "Los textos científicos, un paso en busca La lengua cumple una función social en la vida cotidiana porque permite que los seres humanos puedan transmitir ideas, opiniones"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 41: Las palabras que hemos guardado",
      "paginas": "págs. 64-68",
      "pagina_inicio": 64,
      "resumen": "W Comentar, en colectivo, las dificultades que experimentaron W Proporcionar sugerencias para mejorar el desempeño de las comunidades, e incorporarlas en próximas presentaciones de"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 41: Las palabras que hemos guardado",
      "paginas": "págs. 65-69",
      "pagina_inicio": 65,
      "resumen": "Las palabras que hemos guardado De la interacción cultural entre los pueblos indígenas y los españoles surgieron nuevas costumbres y formas de organización"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 42: El medio para compartir",
      "paginas": "págs. 70-74",
      "pagina_inicio": 70,
      "resumen": "En la vida cotidiana se suscitan múltiples acontecimientos, situaciones y hechos que configuran la identidad de una comunidad Escribir acerca de ellos proporciona la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 43: Una alternativa de comunicación",
      "paginas": "págs. 76-80",
      "pagina_inicio": 76,
      "resumen": "Es importante reflexionar en torno a la función de las diversas manifestaciones culturales y artísticas en la promoción de la inclusión en una comunidad En México y el resto del mundo"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 43: Una alternativa de comunicación",
      "paginas": "págs. 77-81",
      "pagina_inicio": 77,
      "resumen": "Consideren que en el desarrollo del proyecto: W Promoverán y fortalecerán la inclusión dentro de la comunidad W Deberán planear con anticipación el tiempo que dedicarán al"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 44: El arte de la inclusión",
      "paginas": "págs. 80-84",
      "pagina_inicio": 80,
      "resumen": "W Hacer una introducción sobre el contenido y los propósitos W Presentar las diferentes funciones de los saac con ejemplos W Coordinar con fluidez a los diferentes integrantes, respetando"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 44: El arte de la inclusión",
      "paginas": "págs. 81-85",
      "pagina_inicio": 81,
      "resumen": "T odas las personas tienen el derecho a participar y a ser tomadas en cuenta en las actividades laborales, culturales, artísticas y Una sociedad justa y equitativa promueve acciones a favor"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 45: La inclusión de la expresión",
      "paginas": "págs. 84-88",
      "pagina_inicio": 84,
      "resumen": "W Reflexionar en torno a la presentación y determinar si alcanzaron el horizonte de expectativas W Evaluar el impacto que tuvieron los textos informativos o"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 45: La inclusión de la expresión",
      "paginas": "págs. 85-89",
      "pagina_inicio": 85,
      "resumen": "Los pueblos originarios de México poseen muchas manifestaciones culturales y artísticas que forman parte de su patrimonio Entre ellas están las fiestas comunales, los rituales ancestrales, la lengua, la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 31: ¡Con lo que contamos!",
      "paginas": "págs. 92-96",
      "pagina_inicio": 92,
      "resumen": "En este proyecto parcial de aula, será muy útil establecer lazos comunicativos que permitan un desarrollo grato y efectivo para investigar, seleccionar, compartir e interpretar información Del"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 31: ¡Con lo que contamos!",
      "paginas": "págs. 93-97",
      "pagina_inicio": 93,
      "resumen": "W Comprenderán el concepto de proporcionalidad inversa al contrastar diferentes grupos de datos concentrados en tablas, recabados de las experiencias cotidianas y expresados"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: Las figuras geométricas y cómo construirlas",
      "paginas": "págs. 98-102",
      "pagina_inicio": 98,
      "resumen": "Las figuras geométricas y cómo construirlas En el entorno se pueden encontrar figuras geométricas muy diversas: cuadrados o rectángulos en puertas y"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 33: ¡Si cada vez son más, a cada uno le toca menos!",
      "paginas": "págs. 102-106",
      "pagina_inicio": 102,
      "resumen": "¡Si cada vez son más, a cada uno le toca menos! La relación proporcional inversa se da cuando, al comparar dos magnitudes, una crece mientras la otra disminuye en"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 34: ¡Cuidado con la electricidad!",
      "paginas": "págs. 106-110",
      "pagina_inicio": 106,
      "resumen": "En este proyecto parcial de aula, tendrán la oportunidad de obtener y sorprenderse con nuevos conocimientos de la física Establecerán con sus compañeras y compañeros estrategias de aprendizaje para investi-"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 34: ¡Cuidado con la electricidad!",
      "paginas": "págs. 107-111",
      "pagina_inicio": 107,
      "resumen": "W Representarán el funcionamiento de los aparatos tecnológicos de comunicación a partir de una colección de esquemas para explicar las manifestaciones y aplicaciones"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 35: ¿Qué pasa con el magnetismo y los imanes?",
      "paginas": "págs. 110-114",
      "pagina_inicio": 110,
      "resumen": "W Exponer la información con voz clara y volumen adecuado W Hacer contacto con el público y estar preparados ante W No dudar en pedir ayuda a compañeras y compañeros"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 35: ¿Qué pasa con el magnetismo y los imanes?",
      "paginas": "págs. 111-115",
      "pagina_inicio": 111,
      "resumen": "¿Qué pasa con el magnetismo y los imanes? En el entorno que rodea a las personas, por lo general se desconoce cómo se manifiestan los fenómenos causados"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 36: Comunicación y ondas electromagnéticas",
      "paginas": "págs. 114-118",
      "pagina_inicio": 114,
      "resumen": "Comunicación y ondas electromagnéticas W Solicitar al público una retroalimentación sobre W Analizar, en comunidad, sus impresiones sobre las"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 36: Comunicación y ondas electromagnéticas",
      "paginas": "págs. 115-119",
      "pagina_inicio": 115,
      "resumen": "Comunicación y ondas electromagnéticas Los sistemas y aparatos de comunicación de hoy en día operan gracias a las ondas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 37: El Sistema Solar: un conjunto en movimiento",
      "paginas": "págs. 120-124",
      "pagina_inicio": 120,
      "resumen": "El Universo es un sistema donde se encuentran miles de mi - llones de cuerpos celestes, cuyas formas son variadas Tanto la forma de un planeta como su recorrido alrededor del Sol, pue-"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 37: El Sistema Solar: un conjunto en movimiento",
      "paginas": "págs. 121-125",
      "pagina_inicio": 121,
      "resumen": "W Elaborarán una minienciclopedia que contenga gráficas de barras o de sectores circulares con números decimales y fraccionarios, la cual incluirá los porcentajes de"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 38: Un Universo inmenso, pero cuantificable",
      "paginas": "págs. 124-128",
      "pagina_inicio": 124,
      "resumen": "W Verificar que tengan disponibles los insumos por utilizar W Leer la información que recuperaron y asegurarse de que la comprenden W Elaborar las fichas astronómicas con la información seleccionada"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 38: Un Universo inmenso, pero cuantificable",
      "paginas": "págs. 125-129",
      "pagina_inicio": 125,
      "resumen": "Un Universo inmenso, pero cuantificable El Universo contiene una gran cantidad de cuerpos, como estrellas o planetas (algunos de éstos"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 39: El movimiento de los planetas",
      "paginas": "págs. 128-132",
      "pagina_inicio": 128,
      "resumen": "Ekatherina Busquets Maldonado, guanajuato De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 39: El movimiento de los planetas",
      "paginas": "págs. 129-133",
      "pagina_inicio": 129,
      "resumen": "Uno de los fenómenos más estudiados por la humanidad es el movimiento de los planetas del Sistema Solar, éste se puede describir de forma"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 40: Una mirada algebraica a las fuentes de energía",
      "paginas": "págs. 134-138",
      "pagina_inicio": 134,
      "resumen": "Iniciarán su proyecto parcial de aula con el desarrollo de tres expe- riencias de aprendizaje profundas e interconectadas Aprenderán cómo las matemáticas y la física se entrelazan para guiar su cami-"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 40: Una mirada algebraica a las fuentes de energía",
      "paginas": "págs. 135-139",
      "pagina_inicio": 135,
      "resumen": "Al finalizar cada proyecto académico, tendrán la oportunidad de presentar sus hallazgos y mejoras, reforzando así sus aprendizajes Esta revisión permitirá comprender aún más los contenidos desarrollados"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 41: Energía solar: la luz que da vida y potencia nuestro futuro",
      "paginas": "págs. 138-142",
      "pagina_inicio": 138,
      "resumen": "W Solicitar al público una retroalimentación W Discutir entre ustedes sus impresiones sobre la exposición W Analizar las áreas de oportunidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 41: Energía solar: la luz que da vida y potencia nuestro futuro",
      "paginas": "págs. 139-143",
      "pagina_inicio": 139,
      "resumen": "Energía solar: la luz que da vida y potencia nuestro futuro Un mundo donde los recursos energéticos fueran inagotables y limpios, donde se pudieran"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 42: Energía mecánica y sucesiones cuadráticas: un enfoque experimental",
      "paginas": "págs. 142-146",
      "pagina_inicio": 142,
      "resumen": "W Preparar una presentación de los resultados obtenidos W Explicar claramente cómo su proyecto abordó y resolvió la situación problemática identificada, por qué"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 42: Energía mecánica y sucesiones cuadráticas: un enfoque experimental",
      "paginas": "págs. 143-147",
      "pagina_inicio": 143,
      "resumen": "Energía mecánica y sucesiones cuadráticas: un enfoque experimental El mundo de la física y las matemáticas es fascinante, es un viaje que puede permitir la comprensión de fenómenos"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 43: Exploración de los materiales de nuestra comunidad",
      "paginas": "págs. 148-152",
      "pagina_inicio": 148,
      "resumen": "Materiales en acción: exploración En este proyecto parcial de aula, realizarán una exploración co- laborativa para comprender las características de diferentes ma-"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 43: Exploración de los materiales de nuestra comunidad",
      "paginas": "págs. 149-153",
      "pagina_inicio": 149,
      "resumen": "Es importante que todos los productos que obtengan en cada proyecto los conserven para utilizarlos en la presentación Exploración de los materiales de nuestra comunidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 44: Del experimento a la teoría: análisis de los modelos atómicos",
      "paginas": "págs. 152-156",
      "pagina_inicio": 152,
      "resumen": "W Realizar una autoevaluación individual y de su comunidad para identificar áreas de oportunidad W Estar abiertos a recibir comentarios que les permitan"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 44: Del experimento a la teoría: análisis de los modelos atómicos",
      "paginas": "págs. 153-157",
      "pagina_inicio": 153,
      "resumen": "Del experimento a la teoría: análisis de los modelos atómicos Se ha descubierto que los materiales tienen diferentes características físicas y químicas,"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 45: Tras los pasos de la ciencia",
      "paginas": "págs. 156-160",
      "pagina_inicio": 156,
      "resumen": "Elí Fabián López López, guerrero De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 45: Tras los pasos de la ciencia",
      "paginas": "págs. 157-161",
      "pagina_inicio": 157,
      "resumen": "Al investigar sobre los modelos atómicos, se descubrió que cada uno explicaba algo más que el anterior, lo cual permitió a la humanidad"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: La promulgación de la Constitución de 1917 y los gobiernos sonorenses",
      "paginas": "págs. 164-168",
      "pagina_inicio": 164,
      "resumen": "Varios historiadores coinciden en que la promulgación de la Consti- tución de 1917 marcó el final de la Revolución Mexicana; sin embar- go, la inestabilidad política del país continuó durante largo tiempo"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: La promulgación de la Constitución de 1917 y los gobiernos sonorenses",
      "paginas": "págs. 165-169",
      "pagina_inicio": 165,
      "resumen": "Acuerden con su maestra o maestro el tiempo necesario para el desarrollo de cada proyecto Determinen, en asamblea, los materiales que"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 26: Las políticas socioeconómicas del Cardenismo",
      "paginas": "págs. 170-174",
      "pagina_inicio": 170,
      "resumen": "Las políticas socioeconómicas del Cardenismo Durante el gobierno de Lázaro Cárdenas (1934-1940), sus políticas socioeconómicas generaron un gran impacto en la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 27: La participación ciudadana en la democracia Inclusión: garantizar",
      "paginas": "págs. 174-178",
      "pagina_inicio": 174,
      "resumen": "La participación ciudadana en la democracia Inclusión: garantizar La participación ciudadana implica involucrar a la población en la toma de decisiones activa dentro de su comunidad y tomar en cuenta"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 28: La ruptura con el Cardenismo y el intento de industrialización",
      "paginas": "págs. 180-184",
      "pagina_inicio": 180,
      "resumen": "La institucionalización del poder Al concluir la Revolución Mexicana, entre los años 1920 y 1940, nues- tro país atravesó por periodos de inestabilidad política y por el fe -"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 28: La ruptura con el Cardenismo y el intento de industrialización",
      "paginas": "págs. 181-185",
      "pagina_inicio": 181,
      "resumen": "Entre 1920 y 1940 comenzó la construcción de un nuevo Estado, el cual contaría con la participación de los grupos populares que fueron excluidos durante el Porfiriato"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 29: Movimientos sociales y represión del Estado",
      "paginas": "págs. 186-190",
      "pagina_inicio": 186,
      "resumen": "Entre 1940 y 1970, surgieron en México varios movimientos sociales encabezados por campesinos, obreros, médicos, maestros y otros trabajadores del Estado, los cuales pedían"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 30: La resolución de conflictos sociales",
      "paginas": "págs. 190-194",
      "pagina_inicio": 190,
      "resumen": "Valorar la resolución pacífica de conflictos sociales mediante una investigación individual sobre los diferentes tipos de problemáticas sociales y sus soluciones, lo cual se mostrará"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 31: La revolución cultural y la necesidad de cambios sociales",
      "paginas": "págs. 196-200",
      "pagina_inicio": 196,
      "resumen": "W Primero, escribirán un cuento breve que presentarán a la comunidad, cuya temática serán las protestas sociales y los cambios culturales en México, y la influencia que tuvo en éstos la Revolución Cubana, el Mayo francés, la"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 32: Las grandes acciones estudiantiles de 1968 y la respuesta represiva del gobierno",
      "paginas": "págs. 200-204",
      "pagina_inicio": 200,
      "resumen": "Las grandes acciones estudiantiles de 1968 y la respuesta represiva del gobierno W Procurar la participación de todos los integrantes de la comunidad W Presentar su cuento en el formato que hayan definido"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 32: Las grandes acciones estudiantiles de 1968 y la respuesta represiva del gobierno",
      "paginas": "págs. 201-205",
      "pagina_inicio": 201,
      "resumen": "Las grandes acciones estudiantiles de 1968 y la respuesta represiva del gobierno El Movimiento estudiantil de 1968 fue un suceso coyuntural en la historia mexicana del siglo xx Su trágico desenlace fue un"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 33: Las acciones por los derechos humanos en México y el mundo",
      "paginas": "págs. 204-208",
      "pagina_inicio": 204,
      "resumen": "Las acciones por los derechos humanos en México y el mundo W Verificar que todo esté listo W Preparar la presentación de su entrevista"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 33: Las acciones por los derechos humanos en México y el mundo",
      "paginas": "págs. 205-209",
      "pagina_inicio": 205,
      "resumen": "En el contexto actual de México, se ha dejado atrás la represión sistemática a la disidencia y a la violencia de las movilizaciones sociales, lo cual ha propiciado su disminución En este sentido, las personas"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 34: Las políticas neoliberales y la represión violenta: Aguas Blancas y Ayotzinapa",
      "paginas": "págs. 210-214",
      "pagina_inicio": 210,
      "resumen": "En el marco de una sociedad democrática, la transparencia, el acceso a la información y la rendición de cuentas son principios fundamentales para garantizar un gobierno responsable y para lograr"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 34: Las políticas neoliberales y la represión violenta: Aguas Blancas y Ayotzinapa",
      "paginas": "págs. 211-215",
      "pagina_inicio": 211,
      "resumen": "W Identificarán acciones sociales alternas al sistema neoliberal, especialmente en comunidades indígenas y de acción colectiva, por medio de un collage de entrevistas que refleje las opiniones y el actuar de"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 35: Acciones de las comunidades frente a la política neoliberal",
      "paginas": "págs. 216-220",
      "pagina_inicio": 216,
      "resumen": "Identificar acciones sociales alternas al sistema neoliberal, especialmente en comunidades indígenas y de acción colectiva, promovidas principalmente por colectivos y"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 36: El rechazo a la violencia y el respeto a la dignidad,",
      "paginas": "págs. 220-224",
      "pagina_inicio": 220,
      "resumen": "Realizar, en comunidad, una prensa visual que identifique formas de elaboración de proyectos que resuelvan necesidades sociales para fomentar la cultura de paz, a partir de la ética y"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 13: Diagnosticando riesgos",
      "paginas": "págs. 230-234",
      "pagina_inicio": 230,
      "resumen": "En la actualidad, las sociedades consumen más energía en comparación con épocas pasadas Parte de ese aumento se debe al uso ineficiente de la energía, lo que ocasiona daños al"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 14: Cambiemos el rol para pensar distinto",
      "paginas": "págs. 234-238",
      "pagina_inicio": 234,
      "resumen": "Cambiemos el rol para pensar distinto De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 14: Cambiemos el rol para pensar distinto",
      "paginas": "págs. 235-239",
      "pagina_inicio": 235,
      "resumen": "Cambiemos el rol para pensar distinto En la vida cotidiana, la presencia de la diversidad aún enfrenta obstáculos En México, prevalecen situaciones"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Vida nueva a los desechos",
      "paginas": "págs. 238-242",
      "pagina_inicio": 238,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Vida nueva a los desechos",
      "paginas": "págs. 239-243",
      "pagina_inicio": 239,
      "resumen": "La basura se ha convertido en un problema en todo el mundo Miles de toneladas se producen, y un gran porcentaje se desecha en tiraderos a"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 16: Recreación y prevención",
      "paginas": "págs. 246-250",
      "pagina_inicio": 246,
      "resumen": "Las actividades recreativas permiten una mayor aptitud corporal y autonomía Son elementos clave para prevenir riesgos, preservar la salud integral de las personas y, por ende, para lograr"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 17: Simulación e innovación de sistemas técnicos",
      "paginas": "págs. 250-254",
      "pagina_inicio": 250,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que indique tu nivel"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 17: Simulación e innovación de sistemas técnicos",
      "paginas": "págs. 251-255",
      "pagina_inicio": 251,
      "resumen": "Las necesidades actuales del ser humano se relacionan con el uso de sistemas técnicos que mejoran su calidad de vida, previenen riesgos y promueven su desarrollo"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 18: Ensamble motriz-expresivo-socioemocional",
      "paginas": "págs. 256-260",
      "pagina_inicio": 256,
      "resumen": "problemáticas Intercambien puntos de vista y seleccionen, en acuerdos asamblearios, aquella que refleje"
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "MateMáticas Construcción de polígonos regulares",
      "paginas": "pág. 14",
      "pagina_inicio": 14,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Construcción de polígonos regulares a partir de las medidas de sus lados y ángulos",
      "paginas": "pág. 15",
      "pagina_inicio": 15,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Representación algebraica de áreas",
      "paginas": "pág. 17",
      "pagina_inicio": 17,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión de la ecuación ax 2 + bx + c = 0",
      "paginas": "pág. 18",
      "pagina_inicio": 18,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ejemplos de uso de la expresión ax 2 + bx + c para representar áreas de figuras geométricas",
      "paginas": "pág. 19",
      "pagina_inicio": 19,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Propiedades de los exponentes para la resolución de operaciones algebraicas",
      "paginas": "pág. 22",
      "pagina_inicio": 22,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión de las operaciones algebraicas mediante propiedades de los exponentes",
      "paginas": "pág. 23",
      "pagina_inicio": 23,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Desigualdades con expresiones algebraicas",
      "paginas": "pág. 27",
      "pagina_inicio": 27,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión de la desigualdad algebraica",
      "paginas": "pág. 28",
      "pagina_inicio": 28,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ejemplos de resolución de desigualdades algebraicas",
      "paginas": "pág. 29",
      "pagina_inicio": 29,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Sistemas de dos ecuaciones lineales con dos incógnitas",
      "paginas": "pág. 33",
      "pagina_inicio": 33,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Método de reducción para resolver sistemas de ecuaciones lineales con dos incógnitas",
      "paginas": "pág. 34",
      "pagina_inicio": 34,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Método de igualación para resolver sistemas de ecuaciones lineales con dos incógnitas",
      "paginas": "pág. 37",
      "pagina_inicio": 37,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Método de sustitución para resolver sistemas de ecuaciones lineales con dos incógnitas",
      "paginas": "pág. 39",
      "pagina_inicio": 39,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "La proporcionalidad inversa de dos magnitudes o cantidades y su representación",
      "paginas": "pág. 41",
      "pagina_inicio": 41,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo de la proporcionalidad inversa",
      "paginas": "pág. 42",
      "pagina_inicio": 42,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Representación gráfica, tabular y algebraica de la proporcionalidad inversa",
      "paginas": "pág. 44",
      "pagina_inicio": 44,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Construcción a escala de triángulos, cuadriláteros y polígonos regulares o irregulares",
      "paginas": "pág. 47",
      "pagina_inicio": 47,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Construcción de triángulos y cuadriláteros por medio de ángulos, lados y rectas notables",
      "paginas": "pág. 48",
      "pagina_inicio": 48,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Construcción de polígonos regulares o irregulares por medio de ángulos, lados y diagonales",
      "paginas": "pág. 50",
      "pagina_inicio": 50,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Teselaciones",
      "paginas": "pág. 52",
      "pagina_inicio": 52,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión del término teselado",
      "paginas": "pág. 53",
      "pagina_inicio": 53,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Construcción de teselados",
      "paginas": "pág. 54",
      "pagina_inicio": 54,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Intersecciones entre círculos y figuras",
      "paginas": "pág. 57",
      "pagina_inicio": 57,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo de perímetros mediante intersecciones de círculos con figuras geométricas",
      "paginas": "pág. 58",
      "pagina_inicio": 58,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo de áreas mediante intersecciones de círculos con figuras geométricas",
      "paginas": "pág. 59",
      "pagina_inicio": 59,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Múltiplos y submúltiplos de sistemas de medidas",
      "paginas": "pág. 62",
      "pagina_inicio": 62,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión de múltiplos y submúltiplos del metro, litro y kilogramo",
      "paginas": "pág. 63",
      "pagina_inicio": 63,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Múltiplos y submúltiplos de unidades del sistema inglés",
      "paginas": "pág. 65",
      "pagina_inicio": 65,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Problemas que implican conversiones entre distintas magnitudes",
      "paginas": "pág. 66",
      "pagina_inicio": 66,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Perímetro y área de figuras compuestas",
      "paginas": "pág. 69",
      "pagina_inicio": 69,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo del perímetro de figuras compuestas",
      "paginas": "pág. 70",
      "pagina_inicio": 70,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo del área de figuras compuestas",
      "paginas": "pág. 76",
      "pagina_inicio": 76,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Recolección, registro, análisis y comunicación de datos",
      "paginas": "pág. 80",
      "pagina_inicio": 80,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Recolección, registro y análisis de información de datos",
      "paginas": "pág. 81",
      "pagina_inicio": 81,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comunicación del análisis de datos",
      "paginas": "pág. 83",
      "pagina_inicio": 83,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Medidas de tendencia central y de dispersión",
      "paginas": "pág. 85",
      "pagina_inicio": 85,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Interpretación de medidas de tendencia central para la toma de decisiones",
      "paginas": "pág. 86",
      "pagina_inicio": 86,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Interpretación de medidas de dispersión para la toma de decisiones",
      "paginas": "pág. 89",
      "pagina_inicio": 89,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Tendencias en los datos",
      "paginas": "pág. 92",
      "pagina_inicio": 92,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Interpretación de la variación de datos",
      "paginas": "pág. 93",
      "pagina_inicio": 93,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Experimentos aleatorios y registro de los resultados",
      "paginas": "pág. 98",
      "pagina_inicio": 98,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión de la probabilidad frecuencial y la probabilidad clásica",
      "paginas": "pág. 99",
      "pagina_inicio": 99,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Tablas de frecuencia para registro de resultados",
      "paginas": "pág. 101",
      "pagina_inicio": 101,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Medición de probabilidad, su equivalencia y representación",
      "paginas": "pág. 103",
      "pagina_inicio": 103,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cálculo de probabilidad y su equivalencia con representación",
      "paginas": "pág. 104",
      "pagina_inicio": 104,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Sucesiones cuadráticas",
      "paginas": "pág. 106",
      "pagina_inicio": 106,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Representación algebraica de sucesiones de figuras con progresión cuadrática",
      "paginas": "pág. 107",
      "pagina_inicio": 107,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Representación algebraica de sucesiones de números con progresión cuadrática",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Física Aplicaciones del electromagnetismo",
      "paginas": "pág. 112",
      "pagina_inicio": 112,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Aparatos tecnológicos de comunicación",
      "paginas": "pág. 113",
      "pagina_inicio": 113,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Aplicaciones de la hidrostática",
      "paginas": "pág. 115",
      "pagina_inicio": 115,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Aplicaciones del principio de Pascal",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Aplicaciones del principio de Arquímedes",
      "paginas": "pág. 119",
      "pagina_inicio": 119,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cambio climático",
      "paginas": "pág. 121",
      "pagina_inicio": 121,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Contribución del ser humano al cambio climático",
      "paginas": "pág. 122",
      "pagina_inicio": 122,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cinemática",
      "paginas": "pág. 126",
      "pagina_inicio": 126,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Movimiento rectilíneo uniforme",
      "paginas": "pág. 127",
      "pagina_inicio": 127,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Movimiento rectilíneo uniformemente acelerado",
      "paginas": "pág. 129",
      "pagina_inicio": 129,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Conservación de la energía mecánica",
      "paginas": "pág. 132",
      "pagina_inicio": 132,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Energía cinética",
      "paginas": "pág. 133",
      "pagina_inicio": 133,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Transferencia de energía por trabajo",
      "paginas": "pág. 134",
      "pagina_inicio": 134,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Energía potencial",
      "paginas": "pág. 135",
      "pagina_inicio": 135,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Energía mecánica",
      "paginas": "pág. 137",
      "pagina_inicio": 137,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Conservación de la energía mecánica",
      "paginas": "pág. 138",
      "pagina_inicio": 138,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Constitución de la materia",
      "paginas": "pág. 140",
      "pagina_inicio": 140,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Avances recientes en la comprensión de la constitución de la materia",
      "paginas": "pág. 141",
      "pagina_inicio": 141,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proceso histórico de construcción de nuevas teorías",
      "paginas": "pág. 142",
      "pagina_inicio": 142,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Cuantificación de la realidad",
      "paginas": "pág. 144",
      "pagina_inicio": 144,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Magnitudes y unidades físicas",
      "paginas": "pág. 145",
      "pagina_inicio": 145,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Unidades básicas y derivadas en el si",
      "paginas": "pág. 146",
      "pagina_inicio": 146,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Desarrollo científico y tecnológico",
      "paginas": "pág. 152",
      "pagina_inicio": 152,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Contribuciones al conocimiento científico y tecnológico en el ámbito nacional",
      "paginas": "pág. 153",
      "pagina_inicio": 153,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Contribuciones al conocimiento científico y tecnológico en el ámbito internacional",
      "paginas": "pág. 156",
      "pagina_inicio": 156,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Influencia del conocimiento científico y tecnológico en la sociedad",
      "paginas": "pág. 159",
      "pagina_inicio": 159,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Dinámica del Sistema Solar",
      "paginas": "pág. 162",
      "pagina_inicio": 162,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Movimiento de los planetas: leyes de Kepler",
      "paginas": "pág. 163",
      "pagina_inicio": 163,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fuerza de gravedad: ley de gravitación universal de Newton",
      "paginas": "pág. 167",
      "pagina_inicio": 167,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Efecto invernadero",
      "paginas": "pág. 169",
      "pagina_inicio": 169,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Calor, radiación y temperatura",
      "paginas": "pág. 170",
      "pagina_inicio": 170,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Efecto invernadero y sus causas",
      "paginas": "pág. 175",
      "pagina_inicio": 175,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Energía solar",
      "paginas": "pág. 177",
      "pagina_inicio": 177,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Aprovechamiento de la energía solar para uso cotidiano",
      "paginas": "pág. 178",
      "pagina_inicio": 178,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Energía térmica",
      "paginas": "pág. 182",
      "pagina_inicio": 182,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Calor",
      "paginas": "pág. 183",
      "pagina_inicio": 183,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Formas de transferencia de calor",
      "paginas": "pág. 185",
      "pagina_inicio": 185,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Máquinas térmicas",
      "paginas": "pág. 187",
      "pagina_inicio": 187,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Motor de combustión interna",
      "paginas": "pág. 188",
      "pagina_inicio": 188,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Equilibrio",
      "paginas": "pág. 190",
      "pagina_inicio": 190,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fuerza de fricción",
      "paginas": "pág. 191",
      "pagina_inicio": 191,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fuerzas en equilibrio",
      "paginas": "pág. 193",
      "pagina_inicio": 193,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Equilibrio térmico",
      "paginas": "pág. 195",
      "pagina_inicio": 195,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Equilibrio térmico y temperatura",
      "paginas": "pág. 196",
      "pagina_inicio": 196,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Estructura de la materia",
      "paginas": "pág. 198",
      "pagina_inicio": 198,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Teorías sobre la estructura de la materia",
      "paginas": "pág. 199",
      "pagina_inicio": 199,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Antecedentes que dieron origen a los modelos atómicos",
      "paginas": "pág. 200",
      "pagina_inicio": 200,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Modelos atómicos y de partículas",
      "paginas": "pág. 202",
      "pagina_inicio": 202,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fenómenos meteorológicos extremos",
      "paginas": "pág. 204",
      "pagina_inicio": 204,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Causas de fenómenos meteorológicos extremos",
      "paginas": "pág. 205",
      "pagina_inicio": 205,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fuentes de energía",
      "paginas": "pág. 208",
      "pagina_inicio": 208,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fuentes de energía no fósiles",
      "paginas": "pág. 209",
      "pagina_inicio": 209,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fuentes no renovables de energía",
      "paginas": "pág. 216",
      "pagina_inicio": 216,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Saberes, prácticas y artefactos para el aprovechamiento de las diversas fuentes renovables y no renovables de energía",
      "paginas": "pág. 217",
      "pagina_inicio": 217,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Gases que contribuyen al efecto invernadero",
      "paginas": "pág. 222",
      "pagina_inicio": 222,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Excesiva combustión produce contaminación",
      "paginas": "pág. 223",
      "pagina_inicio": 223,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Herramientas de exploración del Universo",
      "paginas": "pág. 226",
      "pagina_inicio": 226,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Telescopios ópticos",
      "paginas": "pág. 227",
      "pagina_inicio": 227,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Radiotelescopios",
      "paginas": "pág. 230",
      "pagina_inicio": 230,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Telescopios en otras longitudes de onda",
      "paginas": "pág. 231",
      "pagina_inicio": 231,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Sondas espaciales",
      "paginas": "pág. 232",
      "pagina_inicio": 232,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Magnetismo",
      "paginas": "pág. 233",
      "pagina_inicio": 233,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fenómenos magnéticos",
      "paginas": "pág. 234",
      "pagina_inicio": 234,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Campo magnético",
      "paginas": "pág. 236",
      "pagina_inicio": 236,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Materiales para mejorar la calidad de vida",
      "paginas": "pág. 239",
      "pagina_inicio": 239,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Materiales en la vida cotidiana de los seres humanos",
      "paginas": "pág. 240",
      "pagina_inicio": 240,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Propiedades y características de los materiales de uso común",
      "paginas": "pág. 242",
      "pagina_inicio": 242,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Medidas en la comunidad",
      "paginas": "pág. 245",
      "pagina_inicio": 245,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Las unidades de medición más útiles en nuestros entornos",
      "paginas": "pág. 246",
      "pagina_inicio": 246,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Metrología",
      "paginas": "pág. 249",
      "pagina_inicio": 249,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Instrumentos de medición",
      "paginas": "pág. 250",
      "pagina_inicio": 250,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Notación científica y órdenes de magnitud",
      "paginas": "pág. 253",
      "pagina_inicio": 253,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Medidas de mitigación y adaptación en tu comunidad ante el cambio climático",
      "paginas": "pág. 257",
      "pagina_inicio": 257,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Efecto invernadero y cambio climático",
      "paginas": "pág. 258",
      "pagina_inicio": 258,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Origen y evolución del Universo",
      "paginas": "pág. 261",
      "pagina_inicio": 261,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "La Gran Explosión",
      "paginas": "pág. 262",
      "pagina_inicio": 262,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Resolución de problemas",
      "paginas": "pág. 265",
      "pagina_inicio": 265,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Problemas de la vida cotidiana",
      "paginas": "pág. 266",
      "pagina_inicio": 266,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Categorización del pensamiento científico",
      "paginas": "pág. 267",
      "pagina_inicio": 267,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "La conformación de la materia",
      "paginas": "pág. 269",
      "pagina_inicio": 269,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Modelos atómicos",
      "paginas": "pág. 270",
      "pagina_inicio": 270,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Modelo de partículas de la materia",
      "paginas": "pág. 274",
      "pagina_inicio": 274,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Tres estados de la materia: sólido, líquido y gaseoso, y sus propiedades físicas",
      "paginas": "pág. 276",
      "pagina_inicio": 276,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Dinámica",
      "paginas": "pág. 278",
      "pagina_inicio": 278,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Fuerza y movimiento",
      "paginas": "pág. 279",
      "pagina_inicio": 279,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Velocidad",
      "paginas": "pág. 282",
      "pagina_inicio": 282,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Aceleración",
      "paginas": "pág. 285",
      "pagina_inicio": 285,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Leyes de Newton",
      "paginas": "pág. 287",
      "pagina_inicio": 287,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Hidrostática",
      "paginas": "pág. 290",
      "pagina_inicio": 290,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Presión",
      "paginas": "pág. 291",
      "pagina_inicio": 291,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Principio de Pascal",
      "paginas": "pág. 294",
      "pagina_inicio": 294,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Densidad",
      "paginas": "pág. 295",
      "pagina_inicio": 295,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Principio de Arquímedes",
      "paginas": "pág. 297",
      "pagina_inicio": 297,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Electricidad",
      "paginas": "pág. 300",
      "pagina_inicio": 300,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Carga eléctrica",
      "paginas": "pág. 301",
      "pagina_inicio": 301,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Corriente eléctrica",
      "paginas": "pág. 304",
      "pagina_inicio": 304,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Resistencia eléctrica",
      "paginas": "pág. 305",
      "pagina_inicio": 305,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Voltaje",
      "paginas": "pág. 306",
      "pagina_inicio": 306,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Manifestaciones y aplicaciones de la energía eléctrica",
      "paginas": "pág. 308",
      "pagina_inicio": 308,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Saberes y pensamiento científico (2°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Protocolos de seguridad para el uso de la energía eléctrica",
      "paginas": "pág. 312",
      "pagina_inicio": 312,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Historia El Mediterráneo y su salida atlántica en el contexto de los viajes de Colón",
      "paginas": "pág. 14",
      "pagina_inicio": 14,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Unión de los reinos de Castilla y Aragón, y Reconquista de Granada",
      "paginas": "pág. 15",
      "pagina_inicio": 15,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La búsqueda de Colón de nuevas rutas comerciales desde el Mediterráneo y su llegada a lo que hoy es América",
      "paginas": "pág. 18",
      "pagina_inicio": 18,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Inicio de la colonización europea",
      "paginas": "pág. 21",
      "pagina_inicio": 21,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "o ambición expansionista?",
      "paginas": "pág. 22",
      "pagina_inicio": 22,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La invasión de las Antillas: exterminio y esclavitud",
      "paginas": "pág. 25",
      "pagina_inicio": 25,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La caída de México-Tenochtitlan",
      "paginas": "pág. 28",
      "pagina_inicio": 28,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El encuentro entre los pueblos mesoamericanos y españoles: factores que intervinieron en los enfrentamientos",
      "paginas": "pág. 29",
      "pagina_inicio": 29,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Indígenas y españoles someten a otros pueblos",
      "paginas": "pág. 36",
      "pagina_inicio": 36,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Indígenas en la Nueva España",
      "paginas": "pág. 38",
      "pagina_inicio": 38,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Situación de los indígenas durante el periodo colonial",
      "paginas": "pág. 39",
      "pagina_inicio": 39,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La conquista espiritual: el papel de la Iglesia católica",
      "paginas": "pág. 40",
      "pagina_inicio": 40,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La explotación indígena: la encomienda, los repartimientos y el peonaje",
      "paginas": "pág. 43",
      "pagina_inicio": 43,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Cambios en la agricultura y la ganadería",
      "paginas": "pág. 44",
      "pagina_inicio": 44,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Culturas indígenas durante el dominio español",
      "paginas": "pág. 47",
      "pagina_inicio": 47,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El nuevo orden colonial",
      "paginas": "pág. 48",
      "pagina_inicio": 48,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Virreinato de la Nueva España: minería, forma de gobierno, economía, cultura y sociedad",
      "paginas": "pág. 51",
      "pagina_inicio": 51,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Minería",
      "paginas": "pág. 52",
      "pagina_inicio": 52,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Forma de gobierno, economía, cultura y sociedad",
      "paginas": "pág. 53",
      "pagina_inicio": 53,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Esclavitud y exclusión en la Nueva España",
      "paginas": "pág. 57",
      "pagina_inicio": 57,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las redes de comercio de esclavos a nivel mundial y en la Nueva España",
      "paginas": "pág. 58",
      "pagina_inicio": 58,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Rebeliones de esclavos: el caso de Yanga",
      "paginas": "pág. 61",
      "pagina_inicio": 61,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las castas en la Nueva España",
      "paginas": "pág. 63",
      "pagina_inicio": 63,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Antecedentes de la Independencia de 1810",
      "paginas": "pág. 65",
      "pagina_inicio": 65,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Movimientos independentistas previos al de 1810",
      "paginas": "pág. 66",
      "pagina_inicio": 66,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Factores externos que dieron origen al movimiento",
      "paginas": "pág. 67",
      "pagina_inicio": 67,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Factores internos del movimiento independentista novohispano",
      "paginas": "pág. 71",
      "pagina_inicio": 71,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La lucha independentista en Nueva España",
      "paginas": "pág. 73",
      "pagina_inicio": 73,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Miguel Hidalgo y el inicio del movimiento armado La conspiración y la participación popular",
      "paginas": "pág. 74",
      "pagina_inicio": 74,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Pensamiento, lucha y contexto de la derrota de José María Morelos",
      "paginas": "pág. 75",
      "pagina_inicio": 75,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Resistencia y reestructuración de la lucha por la Independencia",
      "paginas": "pág. 77",
      "pagina_inicio": 77,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Consumación de la Independencia",
      "paginas": "pág. 77",
      "pagina_inicio": 77,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El país después de la guerra",
      "paginas": "pág. 79",
      "pagina_inicio": 79,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Agustín de Iturbide como primer emperador y su relación con las oligarquías criollas",
      "paginas": "pág. 80",
      "pagina_inicio": 80,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Cambios políticos y sociales de la Constitución Federal de 1824",
      "paginas": "pág. 82",
      "pagina_inicio": 82,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Rumbo a la construcción de un Estado",
      "paginas": "pág. 84",
      "pagina_inicio": 84,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyectos para la nación en las propuestas centralista y federalista",
      "paginas": "pág. 85",
      "pagina_inicio": 85,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características políticas y económicas de los primeros gobiernos Inestabilidad y conflictos",
      "paginas": "pág. 86",
      "pagina_inicio": 86,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Dictadura de Santa Anna y Revolución de Ayutla (1853-1858)",
      "paginas": "pág. 91",
      "pagina_inicio": 91,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "hasta mediados del siglo xix",
      "paginas": "pág. 92",
      "pagina_inicio": 92,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La dictadura de Santa Anna",
      "paginas": "pág. 94",
      "pagina_inicio": 94,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Revolución de Ayutla y el fin de la dictadura",
      "paginas": "pág. 95",
      "pagina_inicio": 95,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las Leyes de Reforma y la Constitución de 1857",
      "paginas": "pág. 98",
      "pagina_inicio": 98,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Iglesia católica y las élites conservadoras: privilegios y alianzas",
      "paginas": "pág. 99",
      "pagina_inicio": 99,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Constitución de 1857: fruto de una nueva generación liberal",
      "paginas": "pág. 100",
      "pagina_inicio": 100,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las Leyes de Reforma: pierde la Iglesia, gana el Estado",
      "paginas": "pág. 102",
      "pagina_inicio": 102,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Guerra de Reforma",
      "paginas": "pág. 106",
      "pagina_inicio": 106,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Guerra de Tres Años",
      "paginas": "pág. 107",
      "pagina_inicio": 107,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Tratado McLane-Ocampo y Tratado Mon-Almonte",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Alianza Tripartita y la Convención de Londres",
      "paginas": "pág. 112",
      "pagina_inicio": 112,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Imposición y derrota del Segundo Imperio mexicano (1864-1867)",
      "paginas": "pág. 114",
      "pagina_inicio": 114,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Segunda Intervención Francesa y el proyecto monárquico",
      "paginas": "pág. 115",
      "pagina_inicio": 115,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El Segundo Imperio y la resistencia popular",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La República itinerante derrota al Segundo Imperio",
      "paginas": "pág. 118",
      "pagina_inicio": 118,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Del triunfo de la República a la dictadura porfirista",
      "paginas": "pág. 121",
      "pagina_inicio": 121,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "República restaurada",
      "paginas": "pág. 122",
      "pagina_inicio": 122,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La consolidación del Porfiriato",
      "paginas": "pág. 124",
      "pagina_inicio": 124,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Desarrollo económico y social durante el Porfiriato",
      "paginas": "pág. 126",
      "pagina_inicio": 126,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La oposición durante el Porfiriato",
      "paginas": "pág. 127",
      "pagina_inicio": 127,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Causas e inicio de la Revolución Mexicana",
      "paginas": "pág. 130",
      "pagina_inicio": 130,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Antecedentes de la Revolución Mexicana",
      "paginas": "pág. 131",
      "pagina_inicio": 131,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El movimiento maderista y el inicio de la Revolución",
      "paginas": "pág. 134",
      "pagina_inicio": 134,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Movimientos populares y sus demandas dentro de la Revolución Mexicana",
      "paginas": "pág. 136",
      "pagina_inicio": 136,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El gobierno de Madero y la Decena Trágica",
      "paginas": "pág. 137",
      "pagina_inicio": 137,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Conflictos entre grupos revolucionarios y la Constitución de 1917",
      "paginas": "pág. 140",
      "pagina_inicio": 140,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Guerra de facciones: convencionistas contra constitucionalistas",
      "paginas": "pág. 141",
      "pagina_inicio": 141,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Carranza y la Constitución de 1917",
      "paginas": "pág. 143",
      "pagina_inicio": 143,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Fin del gobierno de Carranza y ascenso de los sonorenses",
      "paginas": "pág. 146",
      "pagina_inicio": 146,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Caudillismo, conflictos y consolidación de los gobiernos posrevolucionarios (1920-1934)",
      "paginas": "pág. 148",
      "pagina_inicio": 148,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "De los primeros gobiernos posrevolucionarios hasta el ascenso de Calles al poder",
      "paginas": "pág. 149",
      "pagina_inicio": 149,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El Maximato",
      "paginas": "pág. 152",
      "pagina_inicio": 152,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Rebelión cristera: un conflicto religioso armado",
      "paginas": "pág. 154",
      "pagina_inicio": 154,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Cardenismo",
      "paginas": "pág. 155",
      "pagina_inicio": 155,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Política cardenista: consolidación del poder presidencial y del Estado",
      "paginas": "pág. 156",
      "pagina_inicio": 156,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Política social cardenista (obrera, campesina, educativa, de salud)",
      "paginas": "pág. 158",
      "pagina_inicio": 158,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Expropiación petrolera: antecedentes, causas, consecuencias y contexto internacional",
      "paginas": "pág. 160",
      "pagina_inicio": 160,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Estado político mexicano posrevolucionario",
      "paginas": "pág. 163",
      "pagina_inicio": 163,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El Estado mexicano posterior a Cárdenas y el sistema político: características locales y federales",
      "paginas": "pág. 164",
      "pagina_inicio": 164,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "de la Segunda Guerra Mundial",
      "paginas": "pág. 166",
      "pagina_inicio": 166,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "campesino, popular y con la oposición",
      "paginas": "pág. 167",
      "pagina_inicio": 167,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Ilusión de modernidad",
      "paginas": "pág. 169",
      "pagina_inicio": 169,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características y consecuencias del modelo económico desarrollista",
      "paginas": "pág. 170",
      "pagina_inicio": 170,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Etapa de crecimiento sin desarrollo",
      "paginas": "pág. 171",
      "pagina_inicio": 171,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Transformaciones en la sociedad mexicana y en la vida cotidiana",
      "paginas": "pág. 173",
      "pagina_inicio": 173,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Disidencia y represión: la estabilidad política y social cuestionada",
      "paginas": "pág. 175",
      "pagina_inicio": 175,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Represión estatal en los ámbitos local y federal",
      "paginas": "pág. 176",
      "pagina_inicio": 176,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Lucha de las mujeres por el reconocimiento de sus derechos",
      "paginas": "pág. 179",
      "pagina_inicio": 179,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El movimiento estudiantil de 1968",
      "paginas": "pág. 181",
      "pagina_inicio": 181,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los estudiantes de México en 1968",
      "paginas": "pág. 182",
      "pagina_inicio": 182,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Surgimiento del movimiento",
      "paginas": "pág. 182",
      "pagina_inicio": 182,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La dirección del Instituto Politécnico Nacional, el pliego petitorio y la marcha al Zócalo",
      "paginas": "pág. 183",
      "pagina_inicio": 183,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La represión se generaliza",
      "paginas": "pág. 187",
      "pagina_inicio": 187,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los meses finales del movimiento",
      "paginas": "pág. 190",
      "pagina_inicio": 190,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Inicio de la crisis y represión",
      "paginas": "pág. 193",
      "pagina_inicio": 193,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La guerra sucia: guerrilla, disidencia y represión",
      "paginas": "pág. 194",
      "pagina_inicio": 194,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Entrada de México a la globalización",
      "paginas": "pág. 198",
      "pagina_inicio": 198,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El neoliberalismo en México y el nuevo papel del Estado",
      "paginas": "pág. 199",
      "pagina_inicio": 199,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "sectores sociales y contextos geográficos",
      "paginas": "pág. 201",
      "pagina_inicio": 201,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Cambios en la vida cotidiana en el contexto de la globalización",
      "paginas": "pág. 202",
      "pagina_inicio": 202,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Impulso y resistencia al neoliberalismo",
      "paginas": "pág. 205",
      "pagina_inicio": 205,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "y federales entre 1988 y 1997",
      "paginas": "pág. 206",
      "pagina_inicio": 206,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Movimientos sociales en resistencia al neoliberalismo",
      "paginas": "pág. 209",
      "pagina_inicio": 209,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "ezln: resistencia indígena ante las políticas neoliberales",
      "paginas": "pág. 214",
      "pagina_inicio": 214,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El levantamiento armado indígena del ezln",
      "paginas": "pág. 215",
      "pagina_inicio": 215,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El conflicto, la respuesta del Estado y sus consecuencias",
      "paginas": "pág. 216",
      "pagina_inicio": 216,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Formación cívica y ética El derecho de los jóvenes a pertenecer a una comunidad y a que su identidad sea respetada",
      "paginas": "pág. 222",
      "pagina_inicio": 222,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Diversidad de expresiones y grupos juveniles primarios y secundarios",
      "paginas": "pág. 223",
      "pagina_inicio": 223,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Sentido de pertenencia",
      "paginas": "pág. 226",
      "pagina_inicio": 226,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Formas de relación respetuosas e incluyentes",
      "paginas": "pág. 227",
      "pagina_inicio": 227,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "marginadas y vulneradas",
      "paginas": "pág. 230",
      "pagina_inicio": 230,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Personas o grupos históricamente marginados",
      "paginas": "pág. 231",
      "pagina_inicio": 231,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Acciones para el respeto a los derechos humanos",
      "paginas": "pág. 234",
      "pagina_inicio": 234,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "para garantizar la igualdad, la libertad de las personas y el bienestar colectivo",
      "paginas": "pág. 237",
      "pagina_inicio": 237,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Movimientos sociales y políticos que promueven la igualdad en el contexto histórico de México y América Latina",
      "paginas": "pág. 238",
      "pagina_inicio": 238,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Responsabilidad social para combatir la desigualdad",
      "paginas": "pág. 241",
      "pagina_inicio": 241,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "de vida y acciones que garanticen el derecho a una vida digna y justa",
      "paginas": "pág. 245",
      "pagina_inicio": 245,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La desigualdad socioeconómica",
      "paginas": "pág. 246",
      "pagina_inicio": 246,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "de la población",
      "paginas": "pág. 248",
      "pagina_inicio": 248,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Acciones que contribuyen al derecho de las personas a una vida digna y justa",
      "paginas": "pág. 250",
      "pagina_inicio": 250,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "la igualdad, la libertad, la justicia y los derechos humanos",
      "paginas": "pág. 253",
      "pagina_inicio": 253,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Vigencia de las normas y leyes en favor de los derechos humanos",
      "paginas": "pág. 254",
      "pagina_inicio": 254,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "de normas y leyes",
      "paginas": "pág. 256",
      "pagina_inicio": 256,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "desde la cultura de paz",
      "paginas": "pág. 259",
      "pagina_inicio": 259,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Formas de resolución de conflictos sociales y políticos en México y América Latina",
      "paginas": "pág. 260",
      "pagina_inicio": 260,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Procesos de mediación basados en la cultura de paz",
      "paginas": "pág. 262",
      "pagina_inicio": 262,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La toma de decisiones desde la cultura de paz y la interculturalidad",
      "paginas": "pág. 265",
      "pagina_inicio": 265,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Principios y valores de la cultura de paz en diferentes contextos",
      "paginas": "pág. 266",
      "pagina_inicio": 266,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Toma de decisiones basadas en el pensamiento crítico y el juicio ético",
      "paginas": "pág. 268",
      "pagina_inicio": 268,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Desafíos y retos ante la cultura de paz",
      "paginas": "pág. 270",
      "pagina_inicio": 270,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "basados en la cultura de paz",
      "paginas": "pág. 273",
      "pagina_inicio": 273,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Personas, grupos y organizaciones que promueven la cultura de paz en México y América Latina",
      "paginas": "pág. 274",
      "pagina_inicio": 274,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "que desarrollan distintas acciones para promover la paz en México y América Latina",
      "paginas": "pág. 275",
      "pagina_inicio": 275,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Promoción de la paz y defensores de derechos humanos en México y América Latina",
      "paginas": "pág. 277",
      "pagina_inicio": 277,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (2°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "la cultura de paz",
      "paginas": "pág. 281",
      "pagina_inicio": 281,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tecnología Características de los sistemas técnicos",
      "paginas": "pág. 14",
      "pagina_inicio": 14,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sistemas artesanales",
      "paginas": "pág. 15",
      "pagina_inicio": 15,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sistemas industriales",
      "paginas": "pág. 20",
      "pagina_inicio": 20,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sistemas automatizados",
      "paginas": "pág. 23",
      "pagina_inicio": 23,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Daños por el uso y transformación de los materiales en la comunidad",
      "paginas": "pág. 25",
      "pagina_inicio": 25,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Acciones preventivas",
      "paginas": "pág. 26",
      "pagina_inicio": 26,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tecnología al servicio de la comunidad",
      "paginas": "pág. 28",
      "pagina_inicio": 28,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Energía usada en mi comunidad",
      "paginas": "pág. 31",
      "pagina_inicio": 31,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Origen de la energía en mi comunidad",
      "paginas": "pág. 32",
      "pagina_inicio": 32,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Herramientas, máquinas e instrumentos en la comunidad",
      "paginas": "pág. 35",
      "pagina_inicio": 35,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "así como sus diferencias",
      "paginas": "pág. 36",
      "pagina_inicio": 36,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Herramientas, máquinas e instrumentos en la práctica social",
      "paginas": "pág. 38",
      "pagina_inicio": 38,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La tecnología en la solución de problemas en diversos contextos",
      "paginas": "pág. 42",
      "pagina_inicio": 42,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Salud",
      "paginas": "pág. 43",
      "pagina_inicio": 43,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Educación",
      "paginas": "pág. 47",
      "pagina_inicio": 47,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Desarrollo social",
      "paginas": "pág. 49",
      "pagina_inicio": 49,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Desarrollo científico",
      "paginas": "pág. 51",
      "pagina_inicio": 51,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Cultura digital",
      "paginas": "pág. 54",
      "pagina_inicio": 54,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La tecnología como promotora de igualdad",
      "paginas": "pág. 57",
      "pagina_inicio": 57,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Radio y televisión",
      "paginas": "pág. 58",
      "pagina_inicio": 58,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Automatización de procesos",
      "paginas": "pág. 60",
      "pagina_inicio": 60,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Telefonía inteligente",
      "paginas": "pág. 61",
      "pagina_inicio": 61,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Redes sociales",
      "paginas": "pág. 63",
      "pagina_inicio": 63,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Inteligencia artificial",
      "paginas": "pág. 66",
      "pagina_inicio": 66,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Acciones, medios técnicos e insumos",
      "paginas": "pág. 68",
      "pagina_inicio": 68,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Definición de acciones, medios técnicos e insumos",
      "paginas": "pág. 69",
      "pagina_inicio": 69,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Los procesos técnicos de servicios en el desarrollo de la comunidad",
      "paginas": "pág. 74",
      "pagina_inicio": 74,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Procesos técnicos de servicios",
      "paginas": "pág. 75",
      "pagina_inicio": 75,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Importancia de los procesos técnicos de servicios",
      "paginas": "pág. 77",
      "pagina_inicio": 77,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Los procesos técnicos de servicios en la industria",
      "paginas": "pág. 78",
      "pagina_inicio": 78,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "y la comunicación",
      "paginas": "pág. 78",
      "pagina_inicio": 78,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Los procesos técnicos de servicios y su impacto ambiental",
      "paginas": "pág. 79",
      "pagina_inicio": 79,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Los sistemas técnicos en la comunidad",
      "paginas": "pág. 80",
      "pagina_inicio": 80,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Naturaleza, ciencia y sociedad en los sistemas técnicos",
      "paginas": "pág. 81",
      "pagina_inicio": 81,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Pensamiento estratégico y creativo en la resolución de problemas",
      "paginas": "pág. 86",
      "pagina_inicio": 86,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Planificación de actividades",
      "paginas": "pág. 87",
      "pagina_inicio": 87,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La transformación de los materiales, el cuidado de la comunidad y el medio ambiente",
      "paginas": "pág. 90",
      "pagina_inicio": 90,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Metales",
      "paginas": "pág. 91",
      "pagina_inicio": 91,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Pétreos",
      "paginas": "pág. 93",
      "pagina_inicio": 93,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Textiles",
      "paginas": "pág. 95",
      "pagina_inicio": 95,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Madera",
      "paginas": "pág. 96",
      "pagina_inicio": 96,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Plásticos",
      "paginas": "pág. 100",
      "pagina_inicio": 100,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Procesos técnicos que mejoran la calidad de vida en la comunidad",
      "paginas": "pág. 106",
      "pagina_inicio": 106,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Criterios a considerar para mejorar la calidad de vida",
      "paginas": "pág. 107",
      "pagina_inicio": 107,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Representación gráfica de actividades",
      "paginas": "pág. 111",
      "pagina_inicio": 111,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Diagramas de Gantt",
      "paginas": "pág. 112",
      "pagina_inicio": 112,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Seguimiento y monitoreo",
      "paginas": "pág. 115",
      "pagina_inicio": 115,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Representaciones gráficas de operación y funcionamiento",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Diagramas de flujo",
      "paginas": "pág. 117",
      "pagina_inicio": 117,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Representaciones gráficas de producciones técnicas",
      "paginas": "pág. 120",
      "pagina_inicio": 120,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Planos",
      "paginas": "pág. 121",
      "pagina_inicio": 121,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Servicios sustentables en diversos contextos",
      "paginas": "pág. 124",
      "pagina_inicio": 124,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El desarrollo sustentable en diversos contextos",
      "paginas": "pág. 127",
      "pagina_inicio": 127,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Procesos sustentables",
      "paginas": "pág. 128",
      "pagina_inicio": 128,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "educación física Condición física y bienestar",
      "paginas": "pág. 131",
      "pagina_inicio": 131,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La relación entre el incremento de la condición física y el bienestar personal",
      "paginas": "pág. 132",
      "pagina_inicio": 132,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Las actividades recreativas, de iniciación deportiva y su impacto en el bienestar social",
      "paginas": "pág. 134",
      "pagina_inicio": 134,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Ambientes que favorecen la participación de todxs",
      "paginas": "pág. 137",
      "pagina_inicio": 137,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El fomento de actitudes asertivas en el juego, la iniciación deportiva y el deporte educativo",
      "paginas": "pág. 138",
      "pagina_inicio": 138,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La toma de decisiones democráticas en beneficio de una sana convivencia en diversos escenarios",
      "paginas": "pág. 141",
      "pagina_inicio": 141,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estrategias integrales de juego ante distintas situaciones",
      "paginas": "pág. 143",
      "pagina_inicio": 143,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El diseño de estrategias incluyentes a partir de las condiciones de juego",
      "paginas": "pág. 144",
      "pagina_inicio": 144,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La valoración de la efectividad de las estrategias de juego",
      "paginas": "pág. 147",
      "pagina_inicio": 147,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Integración y puesta en práctica de las capacidades, las habilidades y las destrezas motrices",
      "paginas": "pág. 149",
      "pagina_inicio": 149,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La puesta en práctica del potencial motor ante distintos escenarios individuales y colectivos",
      "paginas": "pág. 150",
      "pagina_inicio": 150,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "TuToría y educación socioemocional Aspiraciones personales y compartidas",
      "paginas": "pág. 153",
      "pagina_inicio": 153,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Aspiraciones personales y compartidas en el diseño de un proyecto de vida",
      "paginas": "pág. 154",
      "pagina_inicio": 154,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Construcción continua del proyecto de vida como un proceso reflexivo",
      "paginas": "pág. 158",
      "pagina_inicio": 158,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "a corto, mediano y largo plazo",
      "paginas": "pág. 159",
      "pagina_inicio": 159,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Construcción del proyecto de vida",
      "paginas": "pág. 161",
      "pagina_inicio": 161,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Autoconocimiento y conocimiento de la comunidad para la construcción del proyecto de vida",
      "paginas": "pág. 162",
      "pagina_inicio": 162,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Experiencias en la vida diaria",
      "paginas": "pág. 166",
      "pagina_inicio": 166,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El afrontamiento de las experiencias en la vida diaria",
      "paginas": "pág. 167",
      "pagina_inicio": 167,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La formación de la identidad",
      "paginas": "pág. 171",
      "pagina_inicio": 171,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El desarrollo de la personalidad",
      "paginas": "pág. 172",
      "pagina_inicio": 172,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Desarrollo integral propio y colectivo",
      "paginas": "pág. 175",
      "pagina_inicio": 175,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La importancia del bienestar personal y social",
      "paginas": "pág. 177",
      "pagina_inicio": 177,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El autoconocimiento como medio indispensable para lograr el bienestar personal y social",
      "paginas": "pág. 178",
      "pagina_inicio": 178,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Reconocimiento de las pautas de convivencia existentes en la comunidad",
      "paginas": "pág. 179",
      "pagina_inicio": 179,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Cómo los sentimientos se construyen a partir de ideas y experiencias para la toma de decisiones asertivas",
      "paginas": "pág. 181",
      "pagina_inicio": 181,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La construcción de ideas y experiencias para la toma de decisiones responsables",
      "paginas": "pág. 182",
      "pagina_inicio": 182,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La toma de decisiones asertivas para el bien común",
      "paginas": "pág. 186",
      "pagina_inicio": 186,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La diversidad de formas de expresión",
      "paginas": "pág. 188",
      "pagina_inicio": 188,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Replanteamiento de las metas personales",
      "paginas": "pág. 191",
      "pagina_inicio": 191,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Replanteamiento a partir de logros y riesgos",
      "paginas": "pág. 192",
      "pagina_inicio": 192,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sentido de pertenencia para una convivencia armónica, solidaria, equitativa e inclusiva",
      "paginas": "pág. 195",
      "pagina_inicio": 195,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "De lo humano y lo comunitario (2°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sentido de convivencia",
      "paginas": "pág. 196",
      "pagina_inicio": 196,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Español El comentario crítico de una obra literaria como instrumento para la reflexión personal",
      "paginas": "pág. 12",
      "pagina_inicio": 12,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La recopilación de los elementos, las características y la función del texto literario",
      "paginas": "pág. 13",
      "pagina_inicio": 13,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La estructura del comentario literario crítico",
      "paginas": "pág. 17",
      "pagina_inicio": 17,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La diversidad del español mexicano",
      "paginas": "pág. 21",
      "pagina_inicio": 21,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La diversidad lingüística",
      "paginas": "pág. 22",
      "pagina_inicio": 22,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La historieta como instrumento para representar la interacción lingüística",
      "paginas": "pág. 27",
      "pagina_inicio": 27,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El debate y su función para solucionar problemas sociales",
      "paginas": "pág. 29",
      "pagina_inicio": 29,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El debate: definición y características",
      "paginas": "pág. 30",
      "pagina_inicio": 30,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Argumentación",
      "paginas": "pág. 33",
      "pagina_inicio": 33,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El debate como herramienta para contrarrestar expresiones de violencia",
      "paginas": "pág. 34",
      "pagina_inicio": 34,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La interpretación de textos literarios: análisis y disfrute",
      "paginas": "pág. 37",
      "pagina_inicio": 37,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Los recursos literarios como instrumentos para embellecer la lengua",
      "paginas": "pág. 38",
      "pagina_inicio": 38,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El comentario crítico literario",
      "paginas": "pág. 41",
      "pagina_inicio": 41,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La adaptación entre medios de comunicación",
      "paginas": "pág. 45",
      "pagina_inicio": 45,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La estructura del guion radiofónico o podcast",
      "paginas": "pág. 46",
      "pagina_inicio": 46,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Adaptación de narraciones escritas a guion de radio o de podcast",
      "paginas": "pág. 50",
      "pagina_inicio": 50,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La autobiografía y la crónica como vehículos para el conocimiento personal y comunitario",
      "paginas": "pág. 52",
      "pagina_inicio": 52,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El texto autobiográfico",
      "paginas": "pág. 53",
      "pagina_inicio": 53,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La crónica desde una perspectiva familiar y comunitaria",
      "paginas": "pág. 56",
      "pagina_inicio": 56,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El texto de divulgación científica",
      "paginas": "pág. 59",
      "pagina_inicio": 59,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Características de los textos de divulgación científica",
      "paginas": "pág. 60",
      "pagina_inicio": 60,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Temas de interés: ciencia e importancia colectiva",
      "paginas": "pág. 63",
      "pagina_inicio": 63,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La divulgación de la ciencia en mi comunidad",
      "paginas": "pág. 65",
      "pagina_inicio": 65,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Valoración de textos tradicionales y contemporáneos",
      "paginas": "pág. 68",
      "pagina_inicio": 68,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La narrativa oral y la narrativa escrita",
      "paginas": "pág. 69",
      "pagina_inicio": 69,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Características de las narraciones orales y las escritas",
      "paginas": "pág. 70",
      "pagina_inicio": 70,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La transmisión de valores en una narración: moralejas y personajes ejemplares",
      "paginas": "pág. 73",
      "pagina_inicio": 73,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "lEngua indígEna como lEngua matErna Concepto y relevancia del territorio para los pueblos y las comunidades indígenas",
      "paginas": "pág. 76",
      "pagina_inicio": 76,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de los pueblos indígenas",
      "paginas": "pág. 77",
      "pagina_inicio": 77,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El espacio geográfico y los elementos simbólicos en la conformación del territorio",
      "paginas": "pág. 79",
      "pagina_inicio": 79,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de los pueblos indígenas",
      "paginas": "pág. 81",
      "pagina_inicio": 81,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "y los pueblos indígenas",
      "paginas": "pág. 83",
      "pagina_inicio": 83,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "y culturas de los pueblos indígenas",
      "paginas": "pág. 85",
      "pagina_inicio": 85,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El racismo y la discriminación como problemas globales",
      "paginas": "pág. 86",
      "pagina_inicio": 86,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "en el México actual",
      "paginas": "pág. 87",
      "pagina_inicio": 87,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "en México",
      "paginas": "pág. 88",
      "pagina_inicio": 88,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de nación durante el siglo xx",
      "paginas": "pág. 90",
      "pagina_inicio": 90,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "hacia los indígenas",
      "paginas": "pág. 91",
      "pagina_inicio": 91,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las lenguas y cosmovisión de los pueblos originarios",
      "paginas": "pág. 93",
      "pagina_inicio": 93,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Vida cotidiana y rasgos culturales de algunos pueblos indígenas",
      "paginas": "pág. 94",
      "pagina_inicio": 94,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La lengua como elemento esencial de las formas de ser, pensar y actuar en el mundo",
      "paginas": "pág. 96",
      "pagina_inicio": 96,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cosmovisión de los pueblos originarios de México",
      "paginas": "pág. 98",
      "pagina_inicio": 98,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La literatura y el arte de la palabra en las lenguas originarias de México",
      "paginas": "pág. 101",
      "pagina_inicio": 101,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La tradición oral y el arte de la palabra",
      "paginas": "pág. 102",
      "pagina_inicio": 102,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La memoria escrita de la tradición oral",
      "paginas": "pág. 103",
      "pagina_inicio": 103,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Los textos de la antigua palabra y su relevancia cultural",
      "paginas": "pág. 105",
      "pagina_inicio": 105,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las creaciones de la nueva palabra de escritores contemporáneos",
      "paginas": "pág. 107",
      "pagina_inicio": 107,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Preservación de la lengua a través de la escritura y la literatura",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "a través de la escritura",
      "paginas": "pág. 111",
      "pagina_inicio": 111,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La literatura como medio de pertenencia",
      "paginas": "pág. 112",
      "pagina_inicio": 112,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Difusión por distintos medios",
      "paginas": "pág. 113",
      "pagina_inicio": 113,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Prácticas sociales y culturales centradas en la organización social y el cuidado mutuo",
      "paginas": "pág. 115",
      "pagina_inicio": 115,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "del desarrollo a lo largo de la vida (la ceremonia del jestsméek’ )",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "el cambio de gobierno y el nombramiento de autoridades tradicionales",
      "paginas": "pág. 118",
      "pagina_inicio": 118,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Análisis semántico y pragmático de los discursos utilizados en distintas prácticas sociales",
      "paginas": "pág. 120",
      "pagina_inicio": 120,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Análisis fonético-fonológico, morfológico y sintáctico de los enunciados",
      "paginas": "pág. 122",
      "pagina_inicio": 122,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El trabajo comunitario y las formas de construir acuerdos en los pueblos indígenas",
      "paginas": "pág. 125",
      "pagina_inicio": 125,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El trabajo comunitario y las formas de organización social",
      "paginas": "pág. 126",
      "pagina_inicio": 126,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Prácticas de ayuda mutua en los pueblos indígenas",
      "paginas": "pág. 128",
      "pagina_inicio": 128,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de acuerdos comunitarios",
      "paginas": "pág. 130",
      "pagina_inicio": 130,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La organización colectiva y la asignación de roles en el trabajo comunitario",
      "paginas": "pág. 132",
      "pagina_inicio": 132,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El trabajo de la milpa como práctica cultural de las comunidades indígenas",
      "paginas": "pág. 135",
      "pagina_inicio": 135,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Origen y domesticación del maíz",
      "paginas": "pág. 136",
      "pagina_inicio": 136,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Diversidad y cultivo del maíz",
      "paginas": "pág. 138",
      "pagina_inicio": 138,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El trabajo en la milpa",
      "paginas": "pág. 140",
      "pagina_inicio": 140,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "y deidades de la naturaleza, relacionadas con la siembra y la cosecha del maíz",
      "paginas": "pág. 142",
      "pagina_inicio": 142,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "lEngua indígEna como sEgunda lEngua Pueblos indígenas y afrodescendientes de México y el mundo",
      "paginas": "pág. 145",
      "pagina_inicio": 145,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Pueblos indígenas",
      "paginas": "pág. 146",
      "pagina_inicio": 146,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Pueblos afrodescendientes",
      "paginas": "pág. 147",
      "pagina_inicio": 147,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Textos contemporáneos sobre literatura indígena y de afrodescendientes",
      "paginas": "pág. 150",
      "pagina_inicio": 150,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "y afrodescendientes",
      "paginas": "pág. 152",
      "pagina_inicio": 152,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Canto, voz y sabiduría en la tradición indígena",
      "paginas": "pág. 154",
      "pagina_inicio": 154,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La poesía en la tradición oral indígena",
      "paginas": "pág. 155",
      "pagina_inicio": 155,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Textos antiguos de sabiduría y creaciones tradicionales y contemporáneas en comunidades indígenas",
      "paginas": "pág. 157",
      "pagina_inicio": 157,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "o afrodescendientes",
      "paginas": "pág. 158",
      "pagina_inicio": 158,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La organización social y los roles en la realización de eventos comunitarios",
      "paginas": "pág. 161",
      "pagina_inicio": 161,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La expresión de ideas para la construcción de una sociedad incluyente",
      "paginas": "pág. 163",
      "pagina_inicio": 163,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "sentimientos e ideas",
      "paginas": "pág. 164",
      "pagina_inicio": 164,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las identidades plurales en las sociedades contemporáneas",
      "paginas": "pág. 167",
      "pagina_inicio": 167,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Acciones de la sociedad y del gobierno que favorecen la inclusión",
      "paginas": "pág. 169",
      "pagina_inicio": 169,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Manifestaciones artísticas y culturales para una sociedad incluyente",
      "paginas": "pág. 172",
      "pagina_inicio": 172,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las lenguas indígenas: identidad y cultura de los pueblos originarios",
      "paginas": "pág. 174",
      "pagina_inicio": 174,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "su identidad y su cultura",
      "paginas": "pág. 175",
      "pagina_inicio": 175,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de México y del mundo",
      "paginas": "pág. 176",
      "pagina_inicio": 176,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las narraciones y las descripciones en lenguas indígenas: recursos para reconstruir aspectos de la realidad y la identidad",
      "paginas": "pág. 178",
      "pagina_inicio": 178,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La remembranza de los ancestros dentro de los pueblos indígenas",
      "paginas": "pág. 179",
      "pagina_inicio": 179,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Prácticas culturales y ceremoniales de los pueblos indígenas",
      "paginas": "pág. 181",
      "pagina_inicio": 181,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Naturaleza y diversidad de las prácticas culturales indígenas",
      "paginas": "pág. 182",
      "pagina_inicio": 182,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sucesos significativos en las prácticas culturales de los pueblos indígenas",
      "paginas": "pág. 183",
      "pagina_inicio": 183,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sincretismo en las prácticas culturales indígenas",
      "paginas": "pág. 184",
      "pagina_inicio": 184,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Relevancia de las celebraciones de algunas comunidades indígenas",
      "paginas": "pág. 185",
      "pagina_inicio": 185,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Rasgos identitarios y diálogos de los pueblos indígenas",
      "paginas": "pág. 187",
      "pagina_inicio": 187,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Rasgos identitarios de pueblos indígenas de México y el mundo",
      "paginas": "pág. 188",
      "pagina_inicio": 188,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La interculturalidad en la convivencia social",
      "paginas": "pág. 190",
      "pagina_inicio": 190,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La convivencia cotidiana en contextos multiculturales",
      "paginas": "pág. 192",
      "pagina_inicio": 192,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "inglés Acciones comunes para la solución de problemas comunitarios",
      "paginas": "pág. 195",
      "pagina_inicio": 195,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Problemas comunitarios",
      "paginas": "pág. 196",
      "pagina_inicio": 196,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tipos de textos argumentativos",
      "paginas": "pág. 198",
      "pagina_inicio": 198,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Estructura para elaborar un texto argumentativo en inglés",
      "paginas": "pág. 200",
      "pagina_inicio": 200,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "por y para personas con discapacidad",
      "paginas": "pág. 202",
      "pagina_inicio": 202,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "para la discriminación social",
      "paginas": "pág. 203",
      "pagina_inicio": 203,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Soy consciente de mi cuerpo y del lugar que ocupo en el territorio",
      "paginas": "pág. 207",
      "pagina_inicio": 207,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Pluralidad de capacidades, visiones y voces",
      "paginas": "pág. 208",
      "pagina_inicio": 208,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Desafiar reivindicando",
      "paginas": "pág. 209",
      "pagina_inicio": 209,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La entrevista para conocer el sentir y pensar cotidiano de las personas y de mi localidad",
      "paginas": "pág. 210",
      "pagina_inicio": 210,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Un medio para conocer a mi comunidad: la entrevista",
      "paginas": "pág. 211",
      "pagina_inicio": 211,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Mi sentir y pensar sobre la vida cotidiana",
      "paginas": "pág. 213",
      "pagina_inicio": 213,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El lenguaje a través de hablantes nativos y no nativos",
      "paginas": "pág. 216",
      "pagina_inicio": 216,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Rasgos identitarios de los pueblos de habla inglesa",
      "paginas": "pág. 217",
      "pagina_inicio": 217,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Expresiones lingüísticas a través del tiempo",
      "paginas": "pág. 218",
      "pagina_inicio": 218,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Fichas informativas",
      "paginas": "pág. 220",
      "pagina_inicio": 220,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El lenguaje cotidiano a través del tiempo",
      "paginas": "pág. 222",
      "pagina_inicio": 222,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Elementos y tipos de lenguajes",
      "paginas": "pág. 223",
      "pagina_inicio": 223,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Comportamiento e interacción de las diversas lenguas",
      "paginas": "pág. 224",
      "pagina_inicio": 224,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tipos de organizadores gráficos",
      "paginas": "pág. 225",
      "pagina_inicio": 225,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Los textos narrativos como formas para conocer el pasado",
      "paginas": "pág. 227",
      "pagina_inicio": 227,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Textos biográficos",
      "paginas": "pág. 228",
      "pagina_inicio": 228,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Narrativas de carácter social e histórico",
      "paginas": "pág. 229",
      "pagina_inicio": 229,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "artEs Arte, identidad y territorio",
      "paginas": "pág. 231",
      "pagina_inicio": 231,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Identidad en la otredad",
      "paginas": "pág. 232",
      "pagina_inicio": 232,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Territorio y sentido de pertenencia desde el arte",
      "paginas": "pág. 233",
      "pagina_inicio": 233,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sanación, plenitud y reconocimiento",
      "paginas": "pág. 236",
      "pagina_inicio": 236,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sonido y movimiento, cuerpo herido que se regenera",
      "paginas": "pág. 237",
      "pagina_inicio": 237,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Recuperación personal y de espacios a través de las artes",
      "paginas": "pág. 240",
      "pagina_inicio": 240,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Somos formas, colores, movimientos y sonidos",
      "paginas": "pág. 242",
      "pagina_inicio": 242,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La pérdida de manifestaciones artísticas no reconocidas",
      "paginas": "pág. 243",
      "pagina_inicio": 243,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Nombrar eventos y situaciones ocultas como acción artística",
      "paginas": "pág. 246",
      "pagina_inicio": 246,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de la historia y el origen",
      "paginas": "pág. 247",
      "pagina_inicio": 247,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Artivismo con impacto ambiental y reconciliación",
      "paginas": "pág. 249",
      "pagina_inicio": 249,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El artivismo",
      "paginas": "pág. 250",
      "pagina_inicio": 250,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Arte pop",
      "paginas": "pág. 251",
      "pagina_inicio": 251,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Arte basura",
      "paginas": "pág. 252",
      "pagina_inicio": 252,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Collage",
      "paginas": "pág. 253",
      "pagina_inicio": 253,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Escultura",
      "paginas": "pág. 254",
      "pagina_inicio": 254,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El teatro como método de acción social y creación colectiva",
      "paginas": "pág. 255",
      "pagina_inicio": 255,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Paisaje sonoro",
      "paginas": "pág. 256",
      "pagina_inicio": 256,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Colectivos y proyectos artísticos en contextos rurales y urbanos",
      "paginas": "pág. 257",
      "pagina_inicio": 257,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Movimientos artísticos por el orgullo e identidad",
      "paginas": "pág. 258",
      "pagina_inicio": 258,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "y con perspectiva de género",
      "paginas": "pág. 260",
      "pagina_inicio": 260,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Artes visuales y gran formato",
      "paginas": "pág. 261",
      "pagina_inicio": 261,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Radios indígenas y comunitarias en México",
      "paginas": "pág. 263",
      "pagina_inicio": 263,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Componentes de la ritualidad: cuerpo, pensamiento y organización política",
      "paginas": "pág. 265",
      "pagina_inicio": 265,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cosmogonías y diversidades: arte propio",
      "paginas": "pág. 266",
      "pagina_inicio": 266,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sujeto artístico y sujeto político: los dos lados de la misma moneda",
      "paginas": "pág. 268",
      "pagina_inicio": 268,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Criterios para valorar la estética de obras culturales y artísticas, y cómo trascenderlos",
      "paginas": "pág. 271",
      "pagina_inicio": 271,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Criterios de evaluación estética",
      "paginas": "pág. 272",
      "pagina_inicio": 272,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Lo clandestino y la contracultura",
      "paginas": "pág. 273",
      "pagina_inicio": 273,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Arte y cultura también se revelan",
      "paginas": "pág. 276",
      "pagina_inicio": 276,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las posibilidades de la investigación en el arte",
      "paginas": "pág. 277",
      "pagina_inicio": 277,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El arte como camino de investigación, creación, empatía y transformación",
      "paginas": "pág. 278",
      "pagina_inicio": 278,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La experiencia como método de investigación artística",
      "paginas": "pág. 279",
      "pagina_inicio": 279,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La investigación-acción en el ámbito de la creación artística",
      "paginas": "pág. 281",
      "pagina_inicio": 281,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Escuela y arte",
      "paginas": "pág. 283",
      "pagina_inicio": 283,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las artes en la escuela",
      "paginas": "pág. 284",
      "pagina_inicio": 284,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Mi escuela como evento cultural y artístico",
      "paginas": "pág. 286",
      "pagina_inicio": 286,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Interculturalidad crítica",
      "paginas": "pág. 289",
      "pagina_inicio": 289,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Diálogo de saberes",
      "paginas": "pág. 290",
      "pagina_inicio": 290,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Los lenguajes artísticos desde una perspectiva descolonizadora",
      "paginas": "pág. 291",
      "pagina_inicio": 291,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Nuestra fiesta comunitaria como espacio de enseñanza, reconocimiento, recreación y disfrute",
      "paginas": "pág. 293",
      "pagina_inicio": 293,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Música y danza: lenguajes de las fiestas comunitarias",
      "paginas": "pág. 294",
      "pagina_inicio": 294,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La máscara y sus sentidos culturales y artísticos",
      "paginas": "pág. 295",
      "pagina_inicio": 295,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La comida como expresión artística",
      "paginas": "pág. 297",
      "pagina_inicio": 297,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "y saberes antiguos a otros medios artísticos",
      "paginas": "pág. 299",
      "pagina_inicio": 299,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las artes como herramientas de expresión y liberación personal y social",
      "paginas": "pág. 300",
      "pagina_inicio": 300,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "To'on, palabra maya para nombrar el “nosotros”",
      "paginas": "pág. 309",
      "pagina_inicio": 309,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "en contexto",
      "paginas": "pág. 310",
      "pagina_inicio": 310,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "a favor de la inclusión",
      "paginas": "pág. 312",
      "pagina_inicio": 312,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Créditos bibliográficos",
      "paginas": "pág. 315",
      "pagina_inicio": 315,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Créditos iconográficos",
      "paginas": "pág. 317",
      "pagina_inicio": 317,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Lenguajes (2°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "¡Expresamos nuestras ideas para ejercer nuestros derechos!",
      "paginas": "pág. 319",
      "pagina_inicio": 319,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Múltiples Lenguajes (2°)",
      "campo": "Múltiples Lenguajes",
      "tema_o_proyecto": "Nakasmati",
      "paginas": "pág. 42",
      "pagina_inicio": 42,
      "resumen": ""
    },
    {
      "grado": "2° de Secundaria",
      "libro": "Múltiples Lenguajes (2°)",
      "campo": "Múltiples Lenguajes",
      "tema_o_proyecto": "Análisis de la pintura de Pieter Brueghel el Viejo 90 Jardines flotantes 92 Insignias de poder entre los tarascos 98 A Vanegas Arroyo 99 Los emulantes 106 Los trucos de la abuela 110 La fábrica de huesos 116 Corales 120 Estrellas de mar 121 Teselaciones o cómo decorar el baño 122 Matilde, la primera médica mexicana 128 Las fechas en los códices 130 El sembrador 132 Conquista y Renacimiento",
      "paginas": "pág. 133",
      "pagina_inicio": 133,
      "resumen": ""
    }
  ],
  "3": [
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 1: ¡Mi opinión es muy valiosa!",
      "paginas": "págs. 38-42",
      "pagina_inicio": 38,
      "resumen": "México es un país con una gran diversidad lingüística y artística A lo largo del territorio nacional se hablan sesenta y ocho lenguas originarias, las cuales han sido transmitidas por generaciones El co-"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 1: ¡Mi opinión es muy valiosa!",
      "paginas": "págs. 39-43",
      "pagina_inicio": 39,
      "resumen": "W Experimentarán con distintos estilos y lenguajes artísticos en la preparación de una exposición comunitaria pluricultural para representar la pluriculturalidad de México y el mundo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 2: ¡Experimentemos con arte nuestra diversidad cultural!",
      "paginas": "págs. 44-48",
      "pagina_inicio": 44,
      "resumen": "¡Experimentemos con arte nuestra diversidad cultural! México posee una gran riqueza pluricultural sustentada en sus pueblos originarios Lamentablemente, muchas veces este"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 3: ¡Divulgadores de nuestras lenguas y nuestra cultura!",
      "paginas": "págs. 48-52",
      "pagina_inicio": 48,
      "resumen": "¡Divulgadores de nuestras lenguas y nuestra cultura! La diversidad cultural y lingüística de México se manifiesta a lo largo y ancho del país De acuerdo con los datos de la Secretaría de Cultura,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 4: Una colmena de culturas",
      "paginas": "págs. 54-58",
      "pagina_inicio": 54,
      "resumen": "A fin de cumplir los propósitos de este proyecto parcial de aula, se necesita de su determinación e intervención para potenciar sus habilidades, adquirir nuevos conocimientos y reforzar los pasados"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 5: Un laberinto de problemas",
      "paginas": "págs. 58-62",
      "pagina_inicio": 58,
      "resumen": "W D ar una breve introducción del proyecto a los asistentes strar seguridad al presentar el argumento dramatizado egistrar las preguntas del público y contestarlas con amabilidad y respeto"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 5: Un laberinto de problemas",
      "paginas": "págs. 59-63",
      "pagina_inicio": 59,
      "resumen": "El conflicto es una situación que acompaña a todas las personas, pero no es insuperable; es decir, la confrontación y la disputa son inevitables, pero no invencibles De manera específica, los conflictos interculturales"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 6: Encuentros para reflexionar",
      "paginas": "págs. 62-66",
      "pagina_inicio": 62,
      "resumen": "W R evisar el plan de intervenciones, el guion y el material de apoyo orroborar que se cuenta con la información suficiente para personificar los conflictos por medio del juego de roles; en caso de ser necesario,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 6: Encuentros para reflexionar",
      "paginas": "págs. 63-67",
      "pagina_inicio": 63,
      "resumen": "El debate es un proceso de argumentación e intercambio de ideas mediante el diálogo que implica preparación Enfrentar los desafíos de organizar un debate requiere de un análisis y reconocimiento de los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 7: Un mundo de voces",
      "paginas": "págs. 68-72",
      "pagina_inicio": 68,
      "resumen": "Las manifestaciones culturales desempeñan un papel fundamental en la formación de la identidad individual y colectiva Una de las principales manifestaciones culturales son las lenguas,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 7: Un mundo de voces",
      "paginas": "págs. 69-73",
      "pagina_inicio": 69,
      "resumen": "Recuerden que al finalizar el proyecto parcial de aula, presentarán nuevamente los resultados de cada uno de sus proyectos académicos; por ello, es importante que, tras concluirlos, destinen un tiempo para"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 8: Un viaje por las culturas",
      "paginas": "págs. 72-76",
      "pagina_inicio": 72,
      "resumen": "W R ealizar una valoración de los resultados para generar un nuevo conocimiento a partir del obtenido a lo largo del proyecto scribir en su cuaderno un resumen que permita reflexionar acerca"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 8: Un viaje por las culturas",
      "paginas": "págs. 73-77",
      "pagina_inicio": 73,
      "resumen": "La diversidad que existe en México y el mundo es muy grande Gracias a ella, existen muchos lenguajes artísticos, los cuales aportan una identidad diferente y única a las"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 9: Tejiendo voces ancestrales",
      "paginas": "págs. 76-80",
      "pagina_inicio": 76,
      "resumen": "W E xponer a la audiencia el porqué de ese proyecto y su propósito, e invitarla antener presente el propósito del fortalecimiento de las sociedades edir a los asistentes observaciones para la mejora del proyecto"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 9: Tejiendo voces ancestrales",
      "paginas": "págs. 77-81",
      "pagina_inicio": 77,
      "resumen": "En México existen muchas lenguas indígenas que deben ser valoradas y fortalecidas para que no dejen de utilizarse Aunque estas lenguas representan mucho de lo que constituye la cultura"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 10: La línea del tiempo: cambios culturales y lingüísticos",
      "paginas": "págs. 82-86",
      "pagina_inicio": 82,
      "resumen": "Patrimonio cultural y el dinamismo Tanto las lenguas como las culturas cambian con el paso del tiem- po; así también, la identidad de sus hablantes y su patrimonio cul-"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 10: La línea del tiempo: cambios culturales y lingüísticos",
      "paginas": "págs. 83-87",
      "pagina_inicio": 83,
      "resumen": "W Con la realización de los tres proyectos académicos aprenderán a estimar y conservar el patrimonio cultural de su comunidad W Planearán con anticipación el tiempo que habrán de dedicar al desarrollo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 11: Valorar las expresiones culturales, reinterpretar la cultura",
      "paginas": "págs. 86-90",
      "pagina_inicio": 86,
      "resumen": "W E xponer al público el contenido y los propósitos del estudio de los cambios en las lenguas y las culturas a las que pertenecen esentar la evolución con el paso del tiempo de las lenguas y sus culturas por"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 11: Valorar las expresiones culturales, reinterpretar la cultura",
      "paginas": "págs. 87-91",
      "pagina_inicio": 87,
      "resumen": "Valorar las expresiones culturales, reinterpretar la cultura T odos los pueblos de México y el mundo cuentan con manifestaciones culturales y artísticas en las que se reflejan su historia e identidad Hay"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 12: ¡Las lenguas y el patrimonio cultural van de la mano!",
      "paginas": "págs. 90-94",
      "pagina_inicio": 90,
      "resumen": "W C onducir la actividad de forma organizada er amables, respetuosos y estar dispuestos a responder preguntas xplicar y leer los textos informativos de las reinterpretaciones"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 12: ¡Las lenguas y el patrimonio cultural van de la mano!",
      "paginas": "págs. 91-95",
      "pagina_inicio": 91,
      "resumen": "Una lengua se mantiene viva con su uso Esto se refleja en la creación de textos literarios, los cuales muestran su evolución La publicación de cuentos, obras de teatro, crónicas, poemas o"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 13: Soluciones creativas y problemas comunitarios",
      "paginas": "págs. 96-100",
      "pagina_inicio": 96,
      "resumen": "Problemas e intereses comunitarios ¿De qué manera pueden la lengua y los lenguajes artísticos relacionarse con los problemas, las necesidades y los intereses de su comunidad?"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 13: Soluciones creativas y problemas comunitarios",
      "paginas": "págs. 97-101",
      "pagina_inicio": 97,
      "resumen": "W Se debe planear con anticipación el tiempo que dedicarán al desarrollo de cada uno de los tres proyectos académicos W Procuren que los materiales que utilizarán para sus proyectos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 14: Costumbres sociales, sus problemas y soluciones",
      "paginas": "págs. 100-104",
      "pagina_inicio": 100,
      "resumen": "W E xponer claramente los propósitos y el contenido de las propuestas de solución halladas después del análisis de los problemas comunitarios esentar y explicar las distintas técnicas artísticas utilizadas en la elaboración"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: Costumbres sociales, sus problemas y soluciones",
      "paginas": "págs. 101-105",
      "pagina_inicio": 101,
      "resumen": "Costumbres sociales, sus problemas y soluciones En el entorno de cada persona existen problemas sociales que se producen debido a prácticas y costumbres que generan desacuerdo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 15: ¡Vamos al encuentro de la cultura y el arte!",
      "paginas": "págs. 104-108",
      "pagina_inicio": 104,
      "resumen": "W E valuar el impacto de la historieta costumbrista en la comunidad y determinar si se lograron los propósitos establecidos eflexionar sobre la presentación y determinar qué pueden mejorar"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 15: ¡Vamos al encuentro de la cultura y el arte!",
      "paginas": "págs. 105-109",
      "pagina_inicio": 105,
      "resumen": "T odas las comunidades tienen expresiones culturales y artísticas, y mediante éstas muestran lo que les interesa a las personas que las componen: sus gustos, preferencias, costumbres, estilos en las"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 1: Las prácticas tradicionales en el hogar",
      "paginas": "págs. 112-116",
      "pagina_inicio": 112,
      "resumen": "En este proyecto parcial de aula, valorarán los avances de la construcción del pensamiento científico y tecnológico a nivel comunitario, nacional o internacional, así como los efectos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 1: Las prácticas tradicionales en el hogar",
      "paginas": "págs. 113-117",
      "pagina_inicio": 113,
      "resumen": "Las prácticas tradicionales en el hogar Conocer y respetar los saberes de los pueblos originarios abre la posibilidad de encontrar soluciones diferentes a crisis que"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 2: Mujeres y hombres de ciencia",
      "paginas": "págs. 116-120",
      "pagina_inicio": 116,
      "resumen": "W D ar la bienvenida, presentar a los integrantes de su comunidad y proporcionar una breve introducción antener la calma, ya que es parte de la vida estar frente al público"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 2: Mujeres y hombres de ciencia",
      "paginas": "págs. 117-121",
      "pagina_inicio": 117,
      "resumen": "Es importante recordar a científicas y científicos extranjeros famosos, como Marie Curie, Albert Einstein, Isaac Newton o Nikola T esla, y a los de nacionalidad mexicana, como Evangelina"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 3: Vive y deja vivir",
      "paginas": "págs. 120-124",
      "pagina_inicio": 120,
      "resumen": "W R eflexionar sobre el trabajo para la identificación de fortalezas y áreas de oportunidad durante la presentación de su proyecto académico ◗ Reflexionar si la información presentada fue suficiente para su"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 3: Vive y deja vivir",
      "paginas": "págs. 121-125",
      "pagina_inicio": 121,
      "resumen": "T odos los días se demanda y consume algún bien o servicio; por ejemplo, el agua se utiliza para el aseo personal, en la preparación de alimentos, para beber y en la elaboración de diferentes productos que"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 4: Propiedades de la materia",
      "paginas": "págs. 126-130",
      "pagina_inicio": 126,
      "resumen": "La química es una ciencia que estudia toda la materia, desde el nivel nanoscópico hasta el macroscópico; es decir, abarca todo lo que tie- ne masa y ocupa un volumen en el espacio, por diminuto que sea;"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 4: Propiedades de la materia",
      "paginas": "págs. 127-131",
      "pagina_inicio": 127,
      "resumen": "Antes de iniciar con este proyecto académico, es necesario saber distinguir una propiedad extensiva de una intensiva; por ejemplo, si sobre una hoja de"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 5: Nuestros instrumentos de medición",
      "paginas": "págs. 130-134",
      "pagina_inicio": 130,
      "resumen": "W C ompartir con la comunidad los logros obtenidos y los retos superados star abiertos a recibir comentarios que les permitan mejorar su exposición dentificar áreas de oportunidad"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 5: Nuestros instrumentos de medición",
      "paginas": "págs. 131-135",
      "pagina_inicio": 131,
      "resumen": "Nuestros instrumentos de medición Existen diversas magnitudes, como las de longitud, masa, tiempo y temperatura, que sirven para comparar distintos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 6: Lo mensurable de nuestro entorno",
      "paginas": "págs. 134-138",
      "pagina_inicio": 134,
      "resumen": "W Us ar un tono de voz adecuado star preparados para situaciones imprevistas W P edir al público una retroalimentación"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 6: Lo mensurable de nuestro entorno",
      "paginas": "págs. 135-139",
      "pagina_inicio": 135,
      "resumen": "Lo mensurable de nuestro entorno Desde épocas antiguas, la humanidad tuvo la necesidad de comparar el tamaño de las cosas usando la vista y las"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 7: Mundo homogéneo y heterogéneo",
      "paginas": "págs. 140-144",
      "pagina_inicio": 140,
      "resumen": "Las mezclas se encuentran en todos lados; hay aquéllas en las que se distinguen a simple vista sus componentes, pero existen otras donde no se pueden reconocer Para lograr identificar los ingredientes es"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 7: Mundo homogéneo y heterogéneo",
      "paginas": "págs. 141-145",
      "pagina_inicio": 141,
      "resumen": "Es necesario clasificar las mezclas como homogéneas o heterogéneas y la distribución proporcional entre soluto-disolvente, así como la fase dispersa y la fase dispersante, para comprender cómo los procesos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 8: Dividir lo uniforme",
      "paginas": "págs. 144-148",
      "pagina_inicio": 144,
      "resumen": "Ha llegado el momento de la presentación de su investigación A continuación, se les presentan unas sugerencias que les pueden ayudar: W T ener disponibles los insumos que se van a utilizar"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 8: Dividir lo uniforme",
      "paginas": "págs. 145-149",
      "pagina_inicio": 145,
      "resumen": "En diversas situaciones cotidianas es necesario separar las impurezas o componentes indeseables de una mezcla; para ello, la humanidad, a lo largo de la historia, ha"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 9: Es necesario purificar",
      "paginas": "págs. 150-154",
      "pagina_inicio": 150,
      "resumen": "Durante el proceso de fabricación de algunos productos (alimentos, fármacos, derivados de petróleo, bebidas alcohólicas o refrescantes,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 10: ¡Mezclas por doquier!",
      "paginas": "págs. 156-160",
      "pagina_inicio": 156,
      "resumen": "Bajo una mirada cuidadosa, desde el punto de vista químico, es posi- ble reconocer mezclas en todas partes: en el aire, el suelo y el agua de mar, así como en los alimentos y en los productos de limpieza, por"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 10: ¡Mezclas por doquier!",
      "paginas": "págs. 157-161",
      "pagina_inicio": 157,
      "resumen": "Muchas sustancias cotidianas están presentes como mezclas Tal es el caso del aire que se respira, del mar y su agua salada, y algunas tan comunes como una ensalada de verduras o el agua"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 11: Esferas multicolor",
      "paginas": "págs. 160-164",
      "pagina_inicio": 160,
      "resumen": "W I nteractuar con los asistentes omover la escucha atenta y respetuosa brir una sesión de preguntas y respuestas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 11: Esferas multicolor",
      "paginas": "págs. 161-165",
      "pagina_inicio": 161,
      "resumen": "Las mezclas se utilizan para combinar dos o más elementos; entre ellas existen dos tipos: heterogéneas (donde los elementos se distinguen a simple vista) y homogéneas (donde los elementos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 12: Efectividad de las sustancias de uso cotidiano",
      "paginas": "págs. 164-168",
      "pagina_inicio": 164,
      "resumen": "W A provechar la oportunidad para recibir comentarios que permitan hacer mejoras a su proyecto istribuir papeletas para recoger los comentarios"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 12: Efectividad de las sustancias de uso cotidiano",
      "paginas": "págs. 165-169",
      "pagina_inicio": 165,
      "resumen": "Efectividad de las sustancias de uso cotidiano La concentración de los productos de uso diario es calificada por quienes los usan, refiriendo que son mejores o más efectivos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: Desequilibrio ambiental y contaminación",
      "paginas": "págs. 170-174",
      "pagina_inicio": 170,
      "resumen": "A lo largo de la historia, las actividades humanas han implicado un progreso que ha alterado el equilibrio del medio ambiente, por lo que se ha llegado al punto de comprometer la existencia de la vida"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: Desequilibrio ambiental y contaminación",
      "paginas": "págs. 171-175",
      "pagina_inicio": 171,
      "resumen": "W Redactarán un proyecto de ley que solucione las problemáticas de degradación y contaminación ambientales causadas por los procesos químicos, justificado con gráficas, para obtener soluciones factibles"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: Poner límites a la contaminación",
      "paginas": "págs. 174-178",
      "pagina_inicio": 174,
      "resumen": "W R evisar y comprender la información por compartir, no ◗ De ser necesario, volver a las fuentes de información para integrar lo que falte o mejorar aquello que esté incompleto"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: Poner límites a la contaminación",
      "paginas": "págs. 175-179",
      "pagina_inicio": 175,
      "resumen": "Poner límites a la contaminación Los procesos químicos han sido de gran beneficio para la humanidad, pero también"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Polución química",
      "paginas": "págs. 178-182",
      "pagina_inicio": 178,
      "resumen": "W A provechar la oportunidad para recibir comentarios que les permitan hacer mejoras a su proyecto istribuir papeletas para recoger esos comentarios"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: Polución química",
      "paginas": "págs. 179-183",
      "pagina_inicio": 179,
      "resumen": "Un aspecto importante relacionado con la contaminación ambiental es el relativo a la concentración de los contaminantes En ocasiones, mínimas cantidades de éstos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 1: Proceso de hominización",
      "paginas": "págs. 186-190",
      "pagina_inicio": 186,
      "resumen": "La historia nos devela el largo camino que ha recorrido la humani- dad, desde sus orígenes hasta los tiempos actuales Sin embargo, ¿se han puesto a pensar qué tan parecidos o diferentes somos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 1: Proceso de hominización",
      "paginas": "págs. 187-191",
      "pagina_inicio": 187,
      "resumen": "Organizarán la información necesaria para la creación de una galería escolar del devenir de la humanidad, donde representen los cambios que han tenido las mujeres y los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 2: El surgimiento de la civilización",
      "paginas": "págs. 192-196",
      "pagina_inicio": 192,
      "resumen": "El surgimiento de la civilización De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 2: El surgimiento de la civilización",
      "paginas": "págs. 193-197",
      "pagina_inicio": 193,
      "resumen": "El surgimiento de la civilización El agua es un elemento fundamental en la historia de la humanidad; sin embargo, poco se menciona sobre su papel"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 3: Las acciones para reducir las brechas de desigualdad",
      "paginas": "págs. 198-202",
      "pagina_inicio": 198,
      "resumen": "Las acciones para reducir las brechas de desigualdad En este proyecto académico desarrollarán algunas estrategias para promover la reducción de la desigualdad y favorecer la"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 4: Grecia, Roma y las culturas del Mediterráneo",
      "paginas": "págs. 204-208",
      "pagina_inicio": 204,
      "resumen": "W En primer lugar, realizarán un desfile de las culturas del Mediterráneo, ya sea por medio de caracterizaciones, títeres, dibujos u otros medios que representen y caractericen a personajes de los antiguos pueblos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 4: Grecia, Roma y las culturas del Mediterráneo",
      "paginas": "págs. 205-209",
      "pagina_inicio": 205,
      "resumen": "Nuestro recorrido se realizará por el mar Mediterráneo, que durante cientos de años jugó el papel de espacio civilizatorio donde confluyeron las culturas de los pueblos egipcio, cretense, fenicio, cartaginés, griego"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 5: Roma y su decadencia",
      "paginas": "págs. 208-212",
      "pagina_inicio": 208,
      "resumen": "W Pr ocurar la participación de los integrantes que trabajaron xpresar sus ideas de forma clara xplicar su personificación, así como las características"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 5: Roma y su decadencia",
      "paginas": "págs. 209-213",
      "pagina_inicio": 209,
      "resumen": "Roma ostentaba un esplendor cultural, político y militar incomparable Sin embargo, su grandeza se vio empañada por fisuras internas y externas Mientras la corrupción política, las"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 6: Los retos de la democracia",
      "paginas": "págs. 214-218",
      "pagina_inicio": 214,
      "resumen": "Valorar los retos de un ejercicio democrático a través de la elaboración de una urna del Mediterráneo, mediante la cual la comunidad elija, por medio"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: La organización y el desarrollo de las ciudades feudales",
      "paginas": "págs. 220-224",
      "pagina_inicio": 220,
      "resumen": "En un mundo moderno y en constante evolución es importante comprender las raíces históricas de la civilización y las trayectorias que la han moldeado hasta hoy Este proyecto parcial de aula repre-"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: La organización y el desarrollo de las ciudades feudales",
      "paginas": "págs. 221-225",
      "pagina_inicio": 221,
      "resumen": "Durante el inicio de las sociedades feudales en la Europa occidental predominó una forma de producción dominada por los señores que poseían la tierra, y hubo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: El surgimiento del mundo islámico y",
      "paginas": "págs. 224-228",
      "pagina_inicio": 224,
      "resumen": "W D ialogar, en asamblea, sobre la exposición y analizar las áreas ◗ Resumir los contenidos y la manera como se relacionan los distintos fascículos de la revista"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: El surgimiento del mundo islámico y",
      "paginas": "págs. 225-229",
      "pagina_inicio": 225,
      "resumen": "El surgimiento del mundo islámico y desarrollo del comercio en las ciudades italianas En el siglo VII, con el surgimiento del islam, se inició una"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 9: Los proyectos comunitarios a favor de los derechos humanos",
      "paginas": "págs. 230-234",
      "pagina_inicio": 230,
      "resumen": "Es esencial que se involucren en actividades que promuevan la defensa de los derechos humanos y fortalezcan la democracia Con ello se contribuye a la construcción de una"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 10: Las rutas comerciales marítimas y la colonización",
      "paginas": "págs. 236-240",
      "pagina_inicio": 236,
      "resumen": "W Mediante una infografía creativa, implementarán acciones de colaboración, reciprocidad, solidaridad y participación igualitaria como valores para un desarrollo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 11: La colonización y expoliación de recursos humanos y naturales",
      "paginas": "págs. 242-246",
      "pagina_inicio": 242,
      "resumen": "Entre los siglos XVI y XIX ocurrió un fenómeno económico, político y social que implicó el reparto de muchos territorios del mundo y sus riquezas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 12: La solidaridad y la participación igualitaria",
      "paginas": "págs. 246-250",
      "pagina_inicio": 246,
      "resumen": "W D ialogar en colectivo sobre su exposición y analizar las áreas de ◗ Reflexionar en colectivo sobre sus aprendizajes y desempeño en la realización del proyecto, valoren su propia participación y la de sus"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 12: La solidaridad y la participación igualitaria",
      "paginas": "págs. 247-251",
      "pagina_inicio": 247,
      "resumen": "La solidaridad y la participación igualitaria como valores para un desarrollo sustentable Durante siglos, la expoliación de recursos naturales"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 1: Una a una, experiencias para el proyecto de vida",
      "paginas": "págs. 256-260",
      "pagina_inicio": 256,
      "resumen": "Una a una, experiencias para el proyecto de vida La educación integral de la sexualidad (eis) es un derecho de las personas jóvenes Su enfoque formativo es una fuente"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 2: ¡Proyecto de vida a la vista!",
      "paginas": "págs. 260-264",
      "pagina_inicio": 260,
      "resumen": "T odo proyecto de vida evoluciona a lo largo del tiempo Su puesta en práctica se concreta en un plan dinámico, flexible y adaptable; en ese plan se posicionan de forma estratégica"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 3: Todos somos una historieta de vida",
      "paginas": "págs. 264-268",
      "pagina_inicio": 264,
      "resumen": "Todos somos una historieta de vida La vida de cada persona se construye con experiencias que se presentan día con día Éstas son oportunidades para establecer"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 4: Me activo y lo vivo",
      "paginas": "págs. 270-274",
      "pagina_inicio": 270,
      "resumen": "A lo largo de la vida, se establecen horizontes de expectativas para diversos ámbitos; éstos pueden ser sociales o personales, y se enfocan en el fomento de estilos de vida saludables La"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 5: ¡Pasaporte para el emprendimiento!",
      "paginas": "págs. 274-278",
      "pagina_inicio": 274,
      "resumen": "Las diferentes técnicas, procesos y formas de organización en los emprendimientos artesanales y fabriles provocan un impacto en la economía y en el medio ambiente"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo I (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 6: Me siento bien, actúo bien",
      "paginas": "págs. 278-282",
      "pagina_inicio": 278,
      "resumen": "T omen en cuenta que, para lograr el bienestar personal y social, es primordial diseñar estrategias para conducir las acciones que se realizan En comunidad, analicen las siguientes situaciones"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: ¡Las palabras tienen vida y se transforman!",
      "paginas": "págs. 18-22",
      "pagina_inicio": 18,
      "resumen": "¡Las palabras tienen vida y se transforman! Reflexionar por qué una palabra significa lo que significa o por qué al unir y pronunciar ciertos sonidos se evoca una cosa y no otra es"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 18: ¡Te lo digo y expreso con imaginación!",
      "paginas": "págs. 22-26",
      "pagina_inicio": 22,
      "resumen": "¡Te lo digo y expreso con imaginación! En la vida cotidiana, la humanidad intercambia infinidad de mensajes con lenguajes artísticos que surgen y se articulan de"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 19: Las situaciones diarias de nuestras",
      "paginas": "págs. 28-32",
      "pagina_inicio": 28,
      "resumen": "La planeación y el desarrollo de los proyectos académicos tienen como finalidad que conozcan los elementos y los recursos estéticos de las manifestaciones culturales, lingüísticas y artísticas de su"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 19: Las situaciones diarias de nuestras",
      "paginas": "págs. 29-33",
      "pagina_inicio": 29,
      "resumen": "Las situaciones diarias de nuestras Las comunidades viven situaciones diarias que pueden involucrar alguna problemática individual, familiar, colectiva,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 20: Valoración, comprensión y opinión sobre una manifestación artística",
      "paginas": "págs. 32-36",
      "pagina_inicio": 32,
      "resumen": "Valoración, comprensión y opinión sobre una manifestación artística De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 20: Valoración, comprensión y opinión sobre una manifestación artística",
      "paginas": "págs. 33-37",
      "pagina_inicio": 33,
      "resumen": "Valoración, comprensión y opinión sobre una manifestación artística Cuando se quiere comprender una manifestación artística como una canción, un dibujo, un performance,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 21: ¡Una canción para mi cultura!",
      "paginas": "págs. 36-40",
      "pagina_inicio": 36,
      "resumen": "W Pr esentar los ensayos con emojis según la dinámica acordada epararse para situaciones imprevistas e interactuar con los asistentes de forma respetuosa y atenta"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 21: ¡Una canción para mi cultura!",
      "paginas": "págs. 37-41",
      "pagina_inicio": 37,
      "resumen": "Las manifestaciones culturales de cada una de las localidades, como bailes tradicionales, fiestas patronales, celebraciones anuales o festivales artísticos, hacen uso"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 22: Un recorrido por las letras e historias",
      "paginas": "págs. 42-46",
      "pagina_inicio": 42,
      "resumen": "Las obras culturales, artísticas y literarias destacan por sus elementos, componentes y significados, los cuales son evaluados por los espec - tadores, lectores o cualquier persona que aprecie la obra con la que"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 22: Un recorrido por las letras e historias",
      "paginas": "págs. 43-47",
      "pagina_inicio": 43,
      "resumen": "En asamblea, consideren las siguientes recomendaciones: W Elaborar un cronograma y cumplir con las actividades en tiempo W Identificar los insumos necesarios para el desarrollo de los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 23: La herramienta que da brillo a la escritura",
      "paginas": "págs. 48-52",
      "pagina_inicio": 48,
      "resumen": "La herramienta que da brillo a la escritura Las prácticas individuales y colectivas influyen en la realidad social; es por ello que cada persona debe asumir el"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 24: Caleidoscopio social",
      "paginas": "págs. 52-56",
      "pagina_inicio": 52,
      "resumen": "W Re flexionar si la información presentada fue suficiente para alcanzar su horizonte de expectativas y cómo influyeron las estrategias utilizadas en el desarrollo del proyecto para solucionar la situación problemática inicial"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 24: Caleidoscopio social",
      "paginas": "págs. 53-57",
      "pagina_inicio": 53,
      "resumen": "En la comunidad hay muchas prácticas sociales que distinguen a unos integrantes de los demás: festividades, costumbres, tradiciones y comportamientos Pero ¿cómo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 25: Nos sumergimos y jugamos en un mar de letras",
      "paginas": "págs. 58-62",
      "pagina_inicio": 58,
      "resumen": "Las ciudades, los pueblos, las comunidades y los individuos narran his- torias que poseen sus propias particularidades Estas historias, entrete- jidas con palabras, sentimientos, letras e ideas, adoptan diversas formas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 25: Nos sumergimos y jugamos en un mar de letras",
      "paginas": "págs. 59-63",
      "pagina_inicio": 59,
      "resumen": "Nos sumergimos y jugamos en un mar de letras Las obras literarias emplean una variedad de recursos que facilitan que el autor transmita sus ideas y sentimientos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 26: Creamos y dirigimos historias de vida",
      "paginas": "págs. 62-66",
      "pagina_inicio": 62,
      "resumen": "W I niciar con una actividad relajante, utilizar un volumen de voz poyarse en su tabla de registro y en la información reunida er respetuosos con la audiencia, escuchar con atención"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 26: Creamos y dirigimos historias de vida",
      "paginas": "págs. 63-67",
      "pagina_inicio": 63,
      "resumen": "Creamos y dirigimos historias de vida En la actualidad, los avances tecnológicos y los recursos audiovisuales de los dispositivos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 27: Melodías comunitarias",
      "paginas": "págs. 68-72",
      "pagina_inicio": 68,
      "resumen": "El lugar donde nacen y crecen las personas se convierte en parte de las historias que ellas cuentan de sí mismas, las cuales muestran la diversidad cultural y las relaciones sociales"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 28: Maneras de imaginar y ser escritor",
      "paginas": "págs. 74-78",
      "pagina_inicio": 74,
      "resumen": "Para comenzar la planeación del proyecto parcial de aula, en asamblea, consideren las siguientes recomendaciones para expresar sensaciones e ideas y valorar a su comunidad"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 29: Un día grabando al mundo",
      "paginas": "págs. 78-82",
      "pagina_inicio": 78,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 29: Un día grabando al mundo",
      "paginas": "págs. 79-83",
      "pagina_inicio": 79,
      "resumen": "La diversidad cultural está presente en las expresiones materiales e inmateriales de comunidades e individuos esparcidos en los países y se observa en creaciones"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 30: El mundo es una musa y nosotros los artistas",
      "paginas": "págs. 84-88",
      "pagina_inicio": 84,
      "resumen": "El mundo es una musa y nosotros los artistas Las grandes obras, las principales invenciones y las más reconocidas creaciones surgen en diversos lugares y tienen"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 16: ¡Un gran desafío! Descubre la composición de una figura reciclable",
      "paginas": "págs. 92-96",
      "pagina_inicio": 92,
      "resumen": "Descubre la magia de las formas, Es momento de explorar el interesante vínculo que existe entre el es- tudio de las ciencias y el uso de las matemáticas, lo cual será una he-"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 16: ¡Un gran desafío! Descubre la composición de una figura reciclable",
      "paginas": "págs. 93-97",
      "pagina_inicio": 93,
      "resumen": "W Ejemplificarán con un collage químico las diferentes estructuras internas a nivel molecular de mezclas, compuestos y elementos para reconocer el vínculo con"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 17: Los superpoderes de los cuerpos esféricos",
      "paginas": "págs. 98-102",
      "pagina_inicio": 98,
      "resumen": "Los superpoderes de los cuerpos esféricos Cada uno de los objetos y demás materiales en el entorno tienen una estructura, color y forma Entender estas propiedades se logra a partir de"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 18: Herramientas químicas y esféricas",
      "paginas": "págs. 102-106",
      "pagina_inicio": 102,
      "resumen": "Herramientas químicas y esféricas Poder generar una esfera con figuras planas resulta una actividad interesante para descubrir, comprender, explicar y"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 19: Las estampillas más elementales",
      "paginas": "págs. 108-112",
      "pagina_inicio": 108,
      "resumen": "W Elaborarán un díptico comparativo de los modelos atómicos de Bohr y diagramas de Lewis con base en las relaciones entre volumen de pirámides, esferas, conos y cilindros, con la finalidad de"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 20: La conformación del Universo, la Tierra y los seres vivos",
      "paginas": "págs. 112-116",
      "pagina_inicio": 112,
      "resumen": "La tabla periódica no siempre ha contado con los 118 elementos químicos que la conforman hoy en día Algunos de los elementos se han encontrado en la naturaleza, mientras que otros han sido obtenidos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 21: Son como un sistema solar, pero en miniatura",
      "paginas": "págs. 116-120",
      "pagina_inicio": 116,
      "resumen": "Son como un sistema solar, pero en miniatura De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 21: Son como un sistema solar, pero en miniatura",
      "paginas": "págs. 117-121",
      "pagina_inicio": 117,
      "resumen": "través de la lectura y la escritura: el lenguaje escrito preserva y comparte ideas y conocimientos de diversas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 22: Diferenciación entre los compuestos iónicos y moleculares",
      "paginas": "págs. 122-126",
      "pagina_inicio": 122,
      "resumen": "Un viaje fascinante a partir de los compuestos iónicos y moleculares Los compuestos se pueden dividir entre iónicos y moleculares, am-"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 22: Diferenciación entre los compuestos iónicos y moleculares",
      "paginas": "págs. 123-127",
      "pagina_inicio": 123,
      "resumen": "Para evidenciar los resultados de este proyecto parcial de aula, instalarán todos los insumos en el entorno escolar; esto les ayudará a demostrar los conocimientos adquiridos a lo largo de los tres"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 23: El arte en los compuestos iónicos y moleculares",
      "paginas": "págs. 126-130",
      "pagina_inicio": 126,
      "resumen": "W Us ar un tono de voz adecuado y cuidar el lenguaje corporal star preparados para situaciones imprevistas: preparar un botiquín, informar sobre salidas de emergencia, mantener la"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 23: El arte en los compuestos iónicos y moleculares",
      "paginas": "págs. 127-131",
      "pagina_inicio": 127,
      "resumen": "El arte en los compuestos iónicos y moleculares Utilizar planos y figuras tridimensionales ayuda a visualizar de manera más puntual las características de los compuestos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 24: Aprovechar los compuestos iónicos y moleculares",
      "paginas": "págs. 130-134",
      "pagina_inicio": 130,
      "resumen": "W I nvitar al público para que comparta sus comentarios de retroalimentación ◗ Escuchar, de forma respetuosa, los comentarios que les permitan mejorar De manera individual, sin olvidar que eres parte de una"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 24: Aprovechar los compuestos iónicos y moleculares",
      "paginas": "págs. 131-135",
      "pagina_inicio": 131,
      "resumen": "Los compuestos iónicos y moleculares están presentes en prácticamente todos los procesos químicos, de una u otra manera Lo realmente sorprendente es que también"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: Dieta correcta y los pueblos originarios",
      "paginas": "págs. 136-140",
      "pagina_inicio": 136,
      "resumen": "Los alimentos son fuente de energía y materia, pues contienen nu- trimentos como proteínas, vitaminas y minerales Estas moléculas son necesarias para que el cuerpo lleve a cabo sus funciones básicas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: Dieta correcta y los pueblos originarios",
      "paginas": "págs. 137-141",
      "pagina_inicio": 137,
      "resumen": "W Harán un póster descriptivo sobre cómo obtiene energía el cuerpo humano por medio de los nutrimentos, identificarán los alimentos que los contienen a partir de la lectura de gráficas y el cálculo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 26: Las maravillas de una dieta correcta",
      "paginas": "págs. 142-146",
      "pagina_inicio": 142,
      "resumen": "Las maravillas de una dieta correcta Identificar los tipos de nutrimentos que se obtienen de diversos alimentos es fundamental para balancear adecuadamente los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 27: Una perfecta alianza que beneficia tu salud",
      "paginas": "págs. 146-150",
      "pagina_inicio": 146,
      "resumen": "Una perfecta alianza que beneficia tu salud De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 27: Una perfecta alianza que beneficia tu salud",
      "paginas": "págs. 147-151",
      "pagina_inicio": 147,
      "resumen": "Una perfecta alianza que beneficia tu salud Es importante retomar la relevancia de la alimentación saludable y los elementos involucrados en el cuidado"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 28: Reacciones químicas en el entorno",
      "paginas": "págs. 152-156",
      "pagina_inicio": 152,
      "resumen": "En este proyecto parcial de aula, realizarán tres proyectos académicos, integrados por contenidos de química y matemáticas Cabe mencionar que, conforme avancen los proyectos, se podrán identificar"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 28: Reacciones químicas en el entorno",
      "paginas": "págs. 153-157",
      "pagina_inicio": 153,
      "resumen": "Los horizontes de expectativas de sus proyectos académicos, relacionados con la presentación de su proyecto parcial de aula, serán de utilidad porque les"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 29: Reacciones por doquier",
      "paginas": "págs. 156-160",
      "pagina_inicio": 156,
      "resumen": "W C ompartir las emociones experimentadas al llevar a cabo la presentación de la cápsula informativa ntercambiar impresiones sobre el trabajo colaborativo que hicieron"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 29: Reacciones por doquier",
      "paginas": "págs. 157-161",
      "pagina_inicio": 157,
      "resumen": "En los diferentes tipos de reacciones químicas la masa de los reactivos es igual a la de los productos, esto con base en la ley Elaborar un debate corto para exponer, con modelos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 30: La probabilidad de la química",
      "paginas": "págs. 160-164",
      "pagina_inicio": 160,
      "resumen": "W R ealizar una breve introducción sobre el contenido esentar en forma de debate todos los contenidos tratados star preparados ante situaciones imprevistas, por ejemplo: tener"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 30: La probabilidad de la química",
      "paginas": "págs. 161-165",
      "pagina_inicio": 161,
      "resumen": "Muchas reacciones químicas se dan en situaciones cotidianas y es posible que liberen energía al producirse (reacciones exotérmicas) Las reacciones exotérmicas ocurren cuando un"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: La esclavitud en el continente americano",
      "paginas": "págs. 168-172",
      "pagina_inicio": 168,
      "resumen": "La esclavitud, las colonias inglesas En este proyecto parcial de aula, será importante recordar que durante la colonización en América llegaron europeos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 13: La esclavitud en el continente americano",
      "paginas": "págs. 169-173",
      "pagina_inicio": 169,
      "resumen": "W Realizarán un anecdotario de casos en donde propondrán acciones de denuncia para garantizar el derecho a una vida libre de cualquier tipo de violencia y la trata de personas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 14: Las colonias inglesas en América",
      "paginas": "págs. 174-178",
      "pagina_inicio": 174,
      "resumen": "Las colonias inglesas en América En este proyecto parcial de aula, profundizarán sobre algunas políticas de los ingleses hacia las"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 15: El derecho a una vida libre de violencia de género, sexual y trata de personas",
      "paginas": "págs. 178-182",
      "pagina_inicio": 178,
      "resumen": "El derecho a una vida libre de violencia de género, sexual y trata de personas La violencia, en cualquiera de sus manifestaciones, la esclavitud y la trata de personas son problemas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 16: La Primera Revolución Industrial",
      "paginas": "págs. 182-186",
      "pagina_inicio": 182,
      "resumen": "La historia del mundo de los últimos 250 años ha presenciado su- cesos y procesos que han significado grandes cambios y transfor - maciones políticas, económicas, sociales, tecnológicas y científicas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 16: La Primera Revolución Industrial",
      "paginas": "págs. 183-187",
      "pagina_inicio": 183,
      "resumen": "W Valorarán la resolución de conflictos de manera pacífica por medio de la organización de una actividad llamada tiro al blanco Con esta actividad se propondrán soluciones ante problemas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 17: Camino hacia la libertad: las luchas por la Independencia en América Latina",
      "paginas": "págs. 188-192",
      "pagina_inicio": 188,
      "resumen": "Camino hacia la libertad: las luchas por la Independencia en América Latina La historia de América Latina está marcada por un capítulo crucial y apasionante: las luchas por su independencia Durante"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 18: Apuntando a un mundo mejor",
      "paginas": "págs. 192-196",
      "pagina_inicio": 192,
      "resumen": "En un mundo marcado por desafíos sociales y políticos es esencial cultivar una cultura de paz desde edades tempranas La resolución pacífica de conflictos y"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 19: La Revolución Francesa y su trascendencia",
      "paginas": "págs. 198-202",
      "pagina_inicio": 198,
      "resumen": "defensa de los derechos humanos El entendimiento del pensamiento liberal es esencial para interpretar y transformar la realidad de muchas generaciones de ciudadanos En este"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 19: La Revolución Francesa y su trascendencia",
      "paginas": "págs. 199-203",
      "pagina_inicio": 199,
      "resumen": "W Abordarán las causas, los eventos clave y las consecuencias de la Revolución Francesa mediante la elaboración de un periódico mural histórico Además, investigarán en fuentes"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 20: Semejanzas con la Independencia de Estados Unidos",
      "paginas": "págs. 204-208",
      "pagina_inicio": 204,
      "resumen": "Semejanzas con la Independencia de Estados Unidos La Independencia de Estados Unidos y la Revolución Francesa son dos eventos históricos fundamentales que marcaron el"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 21: Las múltiples dimensiones de los derechos humanos",
      "paginas": "págs. 208-212",
      "pagina_inicio": 208,
      "resumen": "W P ermitir que sus compañeras y compañeros proporcionen retroalimentación constructiva sobre la presentación, destacando aspectos positivos y sugiriendo mejoras"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 21: Las múltiples dimensiones de los derechos humanos",
      "paginas": "págs. 209-213",
      "pagina_inicio": 209,
      "resumen": "Las múltiples dimensiones de los derechos humanos Los derechos humanos son fundamentales para garantizar la dignidad y la igualdad de todas las"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 22: La consolidación del capitalismo como sistema económico dominante",
      "paginas": "págs. 214-218",
      "pagina_inicio": 214,
      "resumen": "En comunidad, identificarán las causas y consecuencias de la Segunda Revolución Industrial como detonante en el proceso de ascenso y consolidación del sistema capitalista en el mundo Además, analizarán"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 22: La consolidación del capitalismo como sistema económico dominante",
      "paginas": "págs. 215-219",
      "pagina_inicio": 215,
      "resumen": "el proceso de expansión territorial de Estados Unidos, su guerra civil y la abolición de la esclavitud, y lo explicarán en una tertulia económica y tecnológica Las siguientes actividades les permitirán elaborar los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 23: El ascenso de Estados Unidos como potencia mundial",
      "paginas": "págs. 220-224",
      "pagina_inicio": 220,
      "resumen": "El ascenso de Estados Unidos como potencia mundial Cuando Estados Unidos declaró su independencia del Reino Unido de Gran Bretaña, en 1776, la nueva nación"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 24: Segunda Revolución Industrial y dominación europea del mundo",
      "paginas": "págs. 224-228",
      "pagina_inicio": 224,
      "resumen": "Segunda Revolución Industrial y dominación europea del mundo En este proyecto académico indagarán y reflexionarán sobre el papel que tuvo la Segunda"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: Así lo identificamos, así lo prevenimos",
      "paginas": "págs. 232-236",
      "pagina_inicio": 232,
      "resumen": "En el interior de una comunidad, se puede observar que sus integrantes sufren accidentes en distintos ámbitos de sus vi- das Además, se pueden ver afectados por otros fenómenos,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 7: Así lo identificamos, así lo prevenimos",
      "paginas": "págs. 233-237",
      "pagina_inicio": 233,
      "resumen": "Al revisar los proyectos académicos que forman parte del proyecto W Identificar la relación que existe entre las intenciones didácticas de las secciones “¿Qué haremos?” de los tres proyectos académicos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 8: Comparo y prevengo",
      "paginas": "págs. 238-242",
      "pagina_inicio": 238,
      "resumen": "El medio donde las personas se desarrollan ha sido dotado con elementos que facilitan las actividades cotidianas, mejoran los tiempos de"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 9: ¡Y voy narrando lo que somos!",
      "paginas": "págs. 242-246",
      "pagina_inicio": 242,
      "resumen": "A lo largo de la vida, las personas hacen uso de las posibilidades que su autonomía motriz les permite; de esta manera, pueden conocer"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 10: Una muestra de prevención",
      "paginas": "págs. 248-252",
      "pagina_inicio": 248,
      "resumen": "La humanidad, a través de la historia, ha emprendido una ca- rrera contra las inclemencias de la naturaleza y las amenazas físicas del entorno Para enfrentarlas, tuvo que aplicar el ra-"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 10: Una muestra de prevención",
      "paginas": "págs. 249-253",
      "pagina_inicio": 249,
      "resumen": "Revisen los proyectos académicos que forman parte del proyecto parcial de aula, tomen en consideración las siguientes W Identificar la relación entre las intenciones didácticas que"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 11: Energía disponible",
      "paginas": "págs. 254-258",
      "pagina_inicio": 254,
      "resumen": "El crecimiento exponencial de la población mundial y local ha traído como consecuencia un mayor consumo de energía, tanto"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo II (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 12: Divulgación en comunidad",
      "paginas": "págs. 258-262",
      "pagina_inicio": 258,
      "resumen": "escritura: la escritura, la lectura Conocer la comunidad donde se vive implica saber acerca de sus prácticas sociales, de la lengua que se habla, del territorio, de sus necesidades, de los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: Nuestro escenario comunal",
      "paginas": "págs. 16-20",
      "pagina_inicio": 16,
      "resumen": "Llegó la hora de presentar su noticiero cultural a la comunidad A continuación, se sugiere una revisión del proceso Consideren W Revisar bien todos los materiales necesarios para la presentación"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: Nuestro escenario comunal",
      "paginas": "págs. 17-21",
      "pagina_inicio": 17,
      "resumen": "En la comunidad existen varias expresiones comunales (por ejemplo, la manera como la gente se comunica o cómo participa en lo que sucede en el entorno), que son materiales susceptibles"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 33: ¡Que nos escuchen todxs!",
      "paginas": "págs. 20-24",
      "pagina_inicio": 20,
      "resumen": "W Realizar la representación dramatizada y no olvidar, en ningún momento, la importancia de destacar las prácticas culturales W Dialogar e interactuar con la audiencia, lo cual implica atender"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 33: ¡Que nos escuchen todxs!",
      "paginas": "págs. 21-25",
      "pagina_inicio": 21,
      "resumen": "Las canciones son parte de la vida diaria: ayudan a sentirse mejor, a relajarse o hacen bailar a todxs con sus ritmos Aunado a lo anterior, la música, la voz de los cantantes"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 34: Narrativas delatadoras",
      "paginas": "págs. 26-30",
      "pagina_inicio": 26,
      "resumen": "Los medios de comunicación juegan un papel importante en la transmisión de información Mediante ellos se pue- de informar sobre la violencia que vive la comunidad, los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 34: Narrativas delatadoras",
      "paginas": "págs. 27-31",
      "pagina_inicio": 27,
      "resumen": "Con ayuda de su maestra o maestro, realizarán un cronograma de actividades que les permitirá tener un mejor control sobre ellas, lo que les ahorrará"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 35: Diseñemos un cartel con impacto social",
      "paginas": "págs. 30-34",
      "pagina_inicio": 30,
      "resumen": "Recuerden que, para llevar a cabo de manera exitosa la presentación del producto de este proyecto, deben considerar las siguientes actividades: W Revisar las imágenes y sugerir cambios a tiempo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 35: Diseñemos un cartel con impacto social",
      "paginas": "págs. 31-35",
      "pagina_inicio": 31,
      "resumen": "Los carteles son un recurso informativo presente en la vida diaria, tal como lo demuestra su presencia en numerosas esquinas, calles y avenidas: los carteles cubren paredes en varias"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 36: ¡Que se escuche tu voz!",
      "paginas": "págs. 34-38",
      "pagina_inicio": 34,
      "resumen": "Para presentar su proyecto, hay algunos puntos que deben considerar; se presentan a continuación: W Preparar con antelación, y de la mejor manera posible, la exposición"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 36: ¡Que se escuche tu voz!",
      "paginas": "págs. 35-39",
      "pagina_inicio": 35,
      "resumen": "Las campañas son el medio idóneo para actuar en comunidad, pues permiten dialogar, intercambiar opiniones, proponer ideas, convivir y, a su vez, brindan la posibilidad de compartir"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 37: Un video inspirador",
      "paginas": "págs. 40-44",
      "pagina_inicio": 40,
      "resumen": "Los medios de comunicación tienen un gran impacto en la difusión de mensajes para promover una vida saludable, los cuales llegan a una amplia audiencia e invitan a adoptar actitudes que facilitan la práctica"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 37: Un video inspirador",
      "paginas": "págs. 41-45",
      "pagina_inicio": 41,
      "resumen": "Los videos construyen, con sonidos e imágenes, historias y situaciones que imitan momentos de la realidad cotidiana En ocasiones no sólo sirven"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 38: Nuestro arte informativo",
      "paginas": "págs. 44-48",
      "pagina_inicio": 44,
      "resumen": "W Reflexionar sobre las actividades que desarrollaron para llevar a cabo una autocrítica, lo cual les ayudará en próximas presentaciones W Plantear y responder preguntas como las siguientes: ¿la investigación"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 38: Nuestro arte informativo",
      "paginas": "págs. 45-49",
      "pagina_inicio": 45,
      "resumen": "Reconocer la importancia de los medios de comunicación en la difusión de una vida saludable, por medio de la elaboración de una nota informativa creativa que motive a la comunidad"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 39: La historia más inspiradora",
      "paginas": "págs. 48-52",
      "pagina_inicio": 48,
      "resumen": "W Revisar el trabajo para realizar una autoevaluación W Responder las siguientes preguntas para reflexionar sobre el proyecto: ¿se logró el horizonte establecido inicialmente?, ¿cuál"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 39: La historia más inspiradora",
      "paginas": "págs. 49-53",
      "pagina_inicio": 49,
      "resumen": "Historias extraordinarias, difíciles de creer por el asombro que generan, pueden ser registradas en innumerables páginas en distintos medios, incluyendo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 40: La ciencia se escribe así",
      "paginas": "págs. 54-58",
      "pagina_inicio": 54,
      "resumen": "¡La ciencia es joven, es nuestra! El desarrollo de la ciencia ha transformado la historia de la humanidad, por lo que la ciencia se ha convertido en una guía para comprender los procesos de"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 40: La ciencia se escribe así",
      "paginas": "págs. 55-59",
      "pagina_inicio": 55,
      "resumen": "Es necesario que, para la realización del proyecto parcial de aula, consideren varios puntos relevantes asociados al contenido de la ciencia y su divulgación En asamblea, consideren"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 41: Somos divulgadores de la ciencia",
      "paginas": "págs. 58-62",
      "pagina_inicio": 58,
      "resumen": "W Iniciar con la presentación: exponer el título, el contenido y la finalidad W Usar un tono de voz adecuado para ser escuchados por la audiencia W Escuchar con atención los comentarios que puedan suscitarse"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 41: Somos divulgadores de la ciencia",
      "paginas": "págs. 59-63",
      "pagina_inicio": 59,
      "resumen": "Uno de los propósitos de la ciencia es establecer leyes y teorías que ayuden a explicar, predecir, comprender y transformar muchas condiciones de la vida y el entorno Su labor, sin embargo, queda"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 42: ¡Bienvenidos a la feria de la ciencia!",
      "paginas": "págs. 62-66",
      "pagina_inicio": 62,
      "resumen": "W Iniciar con la presentación del propósito de la actividad y el proceso de W Escuchar con atención y respeto a quienes exponen y al moderador, para que todxs puedan participar en orden"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 42: ¡Bienvenidos a la feria de la ciencia!",
      "paginas": "págs. 63-67",
      "pagina_inicio": 63,
      "resumen": "La ciencia cumplirá su intención primordial de contribuir al bienestar de las personas cuando realmente logre ser de dominio común y el conocimiento que aporta llegue a todxs; de esta"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 43: Sentimientos comunes, representaciones incluyentes",
      "paginas": "págs. 68-72",
      "pagina_inicio": 68,
      "resumen": "e inclusión: un trabajo de todxs Las desigualdades y la exclusión están presentes en todas las sociedades y todos los tiempos La segregación racial, las inequidades de género, la"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 43: Sentimientos comunes, representaciones incluyentes",
      "paginas": "págs. 69-73",
      "pagina_inicio": 69,
      "resumen": "Para llevar a cabo las actividades de cada proyecto parcial de aula, es necesario tomar en cuenta lo siguiente: W Llevar a cabo una investigación en fuentes confiables de información y"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 44: Todxs nos emocionamos: gestualización empática",
      "paginas": "págs. 74-78",
      "pagina_inicio": 74,
      "resumen": "La comunicación entre las personas no sólo se produce mediante el lenguaje escrito o hablado Existen muchas otras formas de comunicación como la visual o la musical"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 45: Escritores incluyentes, diversidad de textos",
      "paginas": "págs. 78-82",
      "pagina_inicio": 78,
      "resumen": "Escribir sobre el otro puede ser una muy buena oportunidad para crear textos de ficción que desarrollen historias y personajes que representen la diversidad de orígenes, pensamientos, preferencias,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 31: Aprendizaje y reconocimiento de los ácidos y las bases",
      "paginas": "págs. 84-88",
      "pagina_inicio": 84,
      "resumen": "El fantástico mundo de los ácidos Existe gran cantidad de sustancias, tanto naturales como inven - tadas por el ser humano, que sirven para distintas actividades"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 31: Aprendizaje y reconocimiento de los ácidos y las bases",
      "paginas": "págs. 85-89",
      "pagina_inicio": 85,
      "resumen": "La comunicación de los resultados que se obtengan al finalizar cada proyecto académico es un paso significativo hacia una mayor comprensión de los contenidos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: Conociendo el modelo de Arrhenius",
      "paginas": "págs. 88-92",
      "pagina_inicio": 88,
      "resumen": "W Usar un tono de voz adecuado y cuidar el lenguaje corporal durante la exposición W Hacer énfasis en la importancia de lo investigado para la toma de decisiones en actividades cotidianas sobre el uso de productos con pH ácido y básico"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 32: Conociendo el modelo de Arrhenius",
      "paginas": "págs. 89-93",
      "pagina_inicio": 89,
      "resumen": "Conociendo el modelo de Arrhenius Las reacciones de neutralización son aquellas que ocurren entre un ácido y una base, lo que produce agua y sal Estas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 33: Reacciones de neutralización en la vida cotidiana",
      "paginas": "págs. 92-96",
      "pagina_inicio": 92,
      "resumen": "W Pedir al público invitado una retroalimentación con preguntas y comentarios que tengan sobre la información expuesta y la organización del contenido ◗ Estar dispuestos a recibir comentarios que les permitan mejorar su exposición"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 33: Reacciones de neutralización en la vida cotidiana",
      "paginas": "págs. 93-97",
      "pagina_inicio": 93,
      "resumen": "Reacciones de neutralización en la vida cotidiana La neutralización es un proceso químico común, ocurre tanto en la naturaleza como en los procesos para elaborar"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 34: Redox en el ambiente",
      "paginas": "págs. 98-102",
      "pagina_inicio": 98,
      "resumen": "Un limón que reduce la oxidación Seguramente han experimentado una reacción muy curiosa en el cuerpo y es que cuando el estómago comienza a “gruñir” es"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Proyecto académico 34: Redox en el ambiente",
      "paginas": "págs. 99-103",
      "pagina_inicio": 99,
      "resumen": "W Organizarán un panel de discusión sobre los beneficios y el costo ambiental que han causado los productos derivados de las reacciones óxido-reducción para exponer su interpretación de la información"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 35: Experimentos óxido-reducción",
      "paginas": "págs. 102-106",
      "pagina_inicio": 102,
      "resumen": "W D ialogar en colectivo sobre su exposición y analizar las áreas ◗ Reflexionar si la información presentada fue suficiente para dentificar lo que necesiten mejorar para cada actividad realizada"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 35: Experimentos óxido-reducción",
      "paginas": "págs. 103-107",
      "pagina_inicio": 103,
      "resumen": "Las matemáticas son una herramienta necesaria para hacer cálculos y análisis En química permiten conocer la pérdida y ganancia de electrones como parte de un proceso de transferencia"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 36: Tipos de reacciones redox",
      "paginas": "págs. 106-110",
      "pagina_inicio": 106,
      "resumen": "W Interactuar con los asistentes: establecer un momento para las preguntas y comentarios y escuchar atentamente y con respeto ◗ Responder de forma concreta las dudas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 36: Tipos de reacciones redox",
      "paginas": "págs. 107-111",
      "pagina_inicio": 107,
      "resumen": "Existen diversas aplicaciones industriales en las cuales se utilizan las reacciones de óxido-reducción (redox) Algunos ejemplos son los siguientes: la combustión, la cual genera movimiento en los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 37: Reductores, oxidantes, ácidos, bases y medio ambiente",
      "paginas": "págs. 112-116",
      "pagina_inicio": 112,
      "resumen": "El análisis de las reacciones químicas con ayuda de las medidas de tendencia central y de dispersión facilita la evaluación de los puntos a favor y en contra de dichas reacciones, ya que también"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 37: Reductores, oxidantes, ácidos, bases y medio ambiente",
      "paginas": "págs. 113-117",
      "pagina_inicio": 113,
      "resumen": "a los cambios y permanencias de una reacción química, con el fin de identificar los riesgos relacionados con la salud y el medio ambiente W Expondrán un diagrama de flujo que resalte los cambios que ocurren"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 38: La salud, el medio ambiente y las reacciones químicas",
      "paginas": "págs. 118-122",
      "pagina_inicio": 118,
      "resumen": "La salud, el medio ambiente y las reacciones químicas Aunque las reacciones químicas forman subproductos que causan riesgos a la salud y afectan al medio ambiente, también"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 39: Beneficios y efectos de las reacciones químicas",
      "paginas": "págs. 122-126",
      "pagina_inicio": 122,
      "resumen": "Beneficios y efectos de las reacciones químicas Durante la transformación de reactivos a productos se lleva a cabo una serie de etapas en las que se forman"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 40: Las propiedades de los triángulos",
      "paginas": "págs. 128-132",
      "pagina_inicio": 128,
      "resumen": "Con lo anterior, fortalecerán su formación como estudiantes de T elesecundaria Antes de trabajar en los proyectos académicos planteados, tomen en cuenta que es conveniente:"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 41: Construir sólidos de revolución",
      "paginas": "págs. 132-136",
      "pagina_inicio": 132,
      "resumen": "Construir sólidos de revolución La geometría es una rama de las matemáticas que implica trabajar con figuras y cuerpos geométricos; es decir,"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 42: La construcción de las figuras",
      "paginas": "págs. 136-140",
      "pagina_inicio": 136,
      "resumen": "La construcción de las figuras con volumen surge desde las figuras planas; por tal razón, es importante conocer cómo se construye el plano"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 43: ¿Qué cuerpo es más grande?",
      "paginas": "págs. 142-146",
      "pagina_inicio": 142,
      "resumen": "Los aprendizajes que logren en estos proyectos académicos sumarán para mejorar las condiciones en su comunidad, escuela y localidad, lo cual forma parte de lo que planearon al inicio de este ciclo escolar"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 44: Aprendamos con Pitágoras",
      "paginas": "págs. 146-150",
      "pagina_inicio": 146,
      "resumen": "Se puede elaborar un triángulo cuando tenemos tres medidas, pero ¿qué pasaría si sólo hubiera dos medidas?, ¿cómo es posible calcular la longitud del tercer lado? Por ello, es de importancia"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 45: Observar las razones trigonométricas",
      "paginas": "págs. 150-154",
      "pagina_inicio": 150,
      "resumen": "Observar las razones trigonométricas Las razones trigonométricas establecen relaciones entre los lados de un triángulo rectángulo, a partir de sus medidas y los ángulos internos"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 25: La Primera Guerra Mundial y la Revolución Rusa",
      "paginas": "págs. 158-162",
      "pagina_inicio": 158,
      "resumen": "se promueve un análisis crítico La Primera Guerra Mundial y la Revolución Rusa Desde que Inglaterra derrotó a Francia en las guerras"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 26: Periodo de entreguerras",
      "paginas": "págs. 164-168",
      "pagina_inicio": 164,
      "resumen": "Con la firma del T ratado de Versalles de 1919, los líderes de los Estados reunidos dieron por finalizada la Primera Guerra Mundial Y aunque no resolvieron quién poseía la hegemonía sobre los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Proyecto académico 27: El respeto a los derechos humanos como reto para las sociedades",
      "paginas": "págs. 170-174",
      "pagina_inicio": 170,
      "resumen": "El respeto a los derechos humanos como reto para las sociedades Las sociedades de hoy tienen una calidad de vida diferente que en épocas pasadas Los derechos humanos de las personas"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 28: Causas de la Segunda Guerra Mundial y la incorporación de México en el conflicto",
      "paginas": "págs. 176-180",
      "pagina_inicio": 176,
      "resumen": "Causas de la Segunda Guerra Mundial y la incorporación de México en el conflicto La derrota de los fascismos y la búsqueda de la convivencia pacífica"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 28: Causas de la Segunda Guerra Mundial y la incorporación de México en el conflicto",
      "paginas": "págs. 177-181",
      "pagina_inicio": 177,
      "resumen": "Causas de la Segunda Guerra Mundial y la incorporación de México en el conflicto Reunirán y analizarán, en comunidad, información útil para conformar un museo escolar de la Segunda Guerra Mundial, donde"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 29: La victoria de la Unión Soviética sobre el ejército nazi-alemán",
      "paginas": "págs. 182-186",
      "pagina_inicio": 182,
      "resumen": "La victoria de la Unión Soviética sobre el ejército nazi-alemán La Batalla de Stalingrado, que culminó en la derrota alemana en 1943, marcó un punto de inflexión significativo, lo cual dio"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 30: ¡La convivencia pacífica y la cultura de paz",
      "paginas": "págs. 186-190",
      "pagina_inicio": 186,
      "resumen": "W Iniciar la presentación con una introducción que capture la atención y establezca el contexto histórico de la crónica ilustrada W Explicar los eventos, las estrategias y figuras clave seleccionadas, asegurándose de"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 30: ¡La convivencia pacífica y la cultura de paz",
      "paginas": "págs. 187-191",
      "pagina_inicio": 187,
      "resumen": "¡La convivencia pacífica y la cultura de paz como forma de rechazo a la violencia! La Segunda Guerra Mundial fue un conflicto armado que tuvo lugar"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 31: Guerras y revoluciones en un mundo bipolar",
      "paginas": "págs. 194-198",
      "pagina_inicio": 194,
      "resumen": "En este proyecto reunirán información significativa que exprese el desarrollo de la Guerra Fría por medio de representaciones físicas que denoten emociones, creatividad y perspectivas propias, las cuales"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 31: Guerras y revoluciones en un mundo bipolar",
      "paginas": "págs. 195-199",
      "pagina_inicio": 195,
      "resumen": "Reunir material visual que sintetice las tensiones de la posguerra y su repercusión en el ámbito internacional para elaborar una historieta revolucionaria e identificar las"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 32: La lucha de las superpotencias y la caída del bloque socialista",
      "paginas": "págs. 198-202",
      "pagina_inicio": 198,
      "resumen": "W Presentar su historieta con claridad y en voz alta W Respetar el tiempo de cada participante W Responder cualquier pregunta o aclaración que surja por parte de los asistentes"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 32: La lucha de las superpotencias y la caída del bloque socialista",
      "paginas": "págs. 199-203",
      "pagina_inicio": 199,
      "resumen": "Hacia el final de la Segunda Guerra Mundial, la URSS y EUA se aliaron en un mismo frente para derrocar al régimen totalitarista nazi de Alemania, independientemente de que tenían ideologías"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 33: Grupos y organizaciones a favor de la cultura de paz",
      "paginas": "págs. 204-208",
      "pagina_inicio": 204,
      "resumen": "Elaborar una infografía inspiradora para reconocer las acciones de personas, grupos y organizaciones en México"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 34: El nuevo orden mundial",
      "paginas": "págs. 212-216",
      "pagina_inicio": 212,
      "resumen": "El concepto nuevo orden mundial ha resonado con mayor fuerza en los últimos dos siglos, remarcado por una serie de acontecimientos que moldearon al mundo contemporáneo La transición hacia este"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 35: Los movimientos sociales y políticos actuales",
      "paginas": "págs. 216-220",
      "pagina_inicio": 216,
      "resumen": "De manera individual, sin olvidar que eres parte de una comunidad, valora el trabajo realizado durante el desarrollo del proyecto académico Marca con una X la celda que indique tu nivel"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 35: Los movimientos sociales y políticos actuales",
      "paginas": "págs. 217-221",
      "pagina_inicio": 217,
      "resumen": "En un mundo marcado por desafíos crecientes en términos de los derechos humanos y la erradicación o disminución de las desigualdades, la necesidad de abordarlos es un imperativo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 36: Espacios de participación para el ejercicio de los derechos",
      "paginas": "págs. 222-226",
      "pagina_inicio": 222,
      "resumen": "Espacios de participación para el ejercicio de los derechos de nna y las políticas de transparencia en la cultura de la legalidad La participación activa de NNA en la toma de decisiones que"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 13: Programa personal de ejercitación",
      "paginas": "págs. 232-236",
      "pagina_inicio": 232,
      "resumen": "Programa personal de ejercitación En el entorno comunitario escolar existen alternativas que ofrecen la posibilidad de realizar actividades físicas y deportivas con un"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 14: Planear, emprender, valorar y, sobre todo, jugar",
      "paginas": "págs. 236-240",
      "pagina_inicio": 236,
      "resumen": "W Examinar las acciones emprendidas para la implementación del proyecto: juegos, actividades físicas y deportivas, torneos y W Verificar que los materiales sean adecuados para llevar a cabo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Proyecto académico 14: Planear, emprender, valorar y, sobre todo, jugar",
      "paginas": "págs. 237-241",
      "pagina_inicio": 237,
      "resumen": "Planear, emprender, valorar y, sobre todo, jugar La práctica de actividades deportivas también puede ser una actividad sustentable, pues el mero hecho de la"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 15: Laboratorio de juegos deportivos escolares",
      "paginas": "págs. 242-246",
      "pagina_inicio": 242,
      "resumen": "Laboratorio de juegos deportivos escolares Existen actividades y experiencias motrices que ayudan a reducir el sedentarismo y las"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 16: Lo indispensable para una vida saludable",
      "paginas": "págs. 248-252",
      "pagina_inicio": 248,
      "resumen": "¡Un congreso innovador de salud! En todas las culturas del mundo existen formas y estilos de vida que fortalecen y promueven estrategias para mejorar y resaltar la"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 16: Lo indispensable para una vida saludable",
      "paginas": "págs. 249-253",
      "pagina_inicio": 249,
      "resumen": "Es necesario que definan las funciones que tendrá cada participante Organicen las actividades que se realizarán, destinen tiempos, designen espacios y"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 17: Me cuido, te cuidas y nos cuidamos",
      "paginas": "págs. 252-256",
      "pagina_inicio": 252,
      "resumen": "W Revisar los espacios y los recursos que se van a utilizar W Elaborar un guion para su presentación W Realizar los ajustes necesarios al decálogo"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 17: Me cuido, te cuidas y nos cuidamos",
      "paginas": "págs. 253-257",
      "pagina_inicio": 253,
      "resumen": "Me cuido, te cuidas y nos cuidamos La palabra autocuidado remite al conjunto de acciones que una persona lleva a cabo para protegerse de los"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 18: Mi comunidad se transforma en ciencia",
      "paginas": "págs. 256-260",
      "pagina_inicio": 256,
      "resumen": "W Revisar los recursos materiales que se utilizarán y el espacio donde se realizará W Garantizar que todos los participantes estén preparados W Mostrar seguridad, buen tono de voz y una buena postura"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Nuestro libro de proyectos. Tomo III (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto académico 18: Mi comunidad se transforma en ciencia",
      "paginas": "págs. 257-261",
      "pagina_inicio": 257,
      "resumen": "Mi comunidad se transforma en ciencia El trabajo constante y colaborativo dentro de las comunidades es una pieza fundamental para que sucedan cambios positivos;"
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "MateMáticas Área y volumen de sólidos geométricos",
      "paginas": "pág. 14",
      "pagina_inicio": 14,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión del área de los sólidos geométricos",
      "paginas": "pág. 15",
      "pagina_inicio": 15,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "C omprensión del volumen de los sólidos geométricos 17 Propiedades de la congruencia y semejanza de triángulos",
      "paginas": "pág. 20",
      "pagina_inicio": 20,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión de los criterios de congruencia de triángulos",
      "paginas": "pág. 21",
      "pagina_inicio": 21,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "C omprensión de los criterios de semejanza de triángulos 24 Resolución de problemas que implican la aplicación de la congruencia y semejanza de triángulos 26 Desarrollos planos de figuras tridimensionales, cilindros, pirámides y conos 30 Construcción de desarrollos planos de poliedros y prismas",
      "paginas": "pág. 31",
      "pagina_inicio": 31,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "C onstrucción de desarrollos planos de cilindros, pirámides y conos 35 Ecuaciones de la forma Ax 2 + Bx + C = 0 por fac torización y fórmula general 42 Comprensión de la fórmula general para resolver ecuaciones cuadráticas 43 Ejemplos de resolución de ecuaciones de la forma Ax2 + Bx + C = 0 por la f órmula general 46 Ejemplos de resolución de ecuaciones de la forma Ax2 + Bx + C = 0 por factorización 50 Formulación, justificación y uso del teorema de Pitágoras al resolver problemas 55 El teorema de Pitágoras",
      "paginas": "pág. 56",
      "pagina_inicio": 56,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Lectura, interpretación y comunicación de gráficas estadísticas",
      "paginas": "pág. 63",
      "pagina_inicio": 63,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Estrategias para leer, interpretar y comunicar gráficas estadísticas",
      "paginas": "pág. 64",
      "pagina_inicio": 64,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Relación e interpretación de la variación de dos cantidades a partir de su representación tabular, gráfica y algebraica 68 Comprensión de la variación y la covariación",
      "paginas": "pág. 69",
      "pagina_inicio": 69,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "y la covariación 72 Medidas de tendencia central y de dispersión en la toma de decisiones 76 Elección entre medidas de tendencia central y de dispersión",
      "paginas": "pág. 77",
      "pagina_inicio": 77,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Eventos independientes y dependientes, y cálculo de su probabilidad de ocurrencia 82 Eventos dependientes",
      "paginas": "pág. 83",
      "pagina_inicio": 83,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "E ventos independientes 85 Cálculo de probabilidad de eventos dependientes e independientes 87 Regla de la suma para el cálculo de probabilidades",
      "paginas": "pág. 89",
      "pagina_inicio": 89,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión de la regla de la suma para el cálculo de probabilidades 90 Regla del producto para el cálculo de probabilidades",
      "paginas": "pág. 93",
      "pagina_inicio": 93,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Comprensión de la regla del producto para el cálculo de probabilidades 94 Representaciones algebraicas de áreas y volúmenes en cuerpos geométricos 96 Cálculo de áreas y volúmenes de cuerpos geométricos",
      "paginas": "pág. 97",
      "pagina_inicio": 97,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "seno, coseno y tangente 109 Razones trigonométricas seno, coseno y tangente",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "P roblemas que implican el uso de las razones trigonométricas 113 Procedimientos para resolver problemas de reparto proporcional",
      "paginas": "pág. 115",
      "pagina_inicio": 115,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Métodos para hallar un término de una relación proporcional",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ejemplos de r esolución de problemas de reparto proporcional 118 Generación de sólidos de revolución a partir de figuras planas",
      "paginas": "pág. 122",
      "pagina_inicio": 122,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Construcción de sólidos de revolución a partir de figuras planas",
      "paginas": "pág. 123",
      "pagina_inicio": 123,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Relaciones entre el volumen de la esfera, el cono y el cilindro",
      "paginas": "pág. 126",
      "pagina_inicio": 126,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "el cono y el cilindro 127 Estrategias para calcular el volumen de prismas, pirámides y cilindros 132 Comprensión de distintos métodos para calcular el volumen de prismas, pirámides y cilindros 133 Resolución de problemas que implican el cálculo del volumen de prismas, pirámides y cilindros 137 QuíMica Ácidos y bases",
      "paginas": "pág. 142",
      "pagina_inicio": 142,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Definición y características de los ácidos y las bases",
      "paginas": "pág. 143",
      "pagina_inicio": 143,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Escala de pH, acidez y basicidad 145 Alimentación y salud",
      "paginas": "pág. 148",
      "pagina_inicio": 148,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Tabla nutrimental de diversos alimentos",
      "paginas": "pág. 149",
      "pagina_inicio": 149,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "A ctividades físicas y sus requerimientos energéticos 153 Beneficios y perjuicios de los ácidos",
      "paginas": "pág. 156",
      "pagina_inicio": 156,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ácidos en el entorno y sus efectos en el medio ambiente",
      "paginas": "pág. 157",
      "pagina_inicio": 157,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Beneficios y perjuicios de los procesos redox",
      "paginas": "pág. 160",
      "pagina_inicio": 160,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ventajas de los procesos redox en el entorno",
      "paginas": "pág. 161",
      "pagina_inicio": 161,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "D esventajas de los procesos redox en el entorno 163 Compuestos iónicos y covalentes",
      "paginas": "pág. 166",
      "pagina_inicio": 166,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Formación de compuestos iónicos y covalentes",
      "paginas": "pág. 167",
      "pagina_inicio": 167,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Concentración de los contaminantes",
      "paginas": "pág. 170",
      "pagina_inicio": 170,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Agentes contaminantes del agua, aire y suelo",
      "paginas": "pág. 171",
      "pagina_inicio": 171,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "M arco normativo en México sobre contaminación 174 Expresión de la concentración en partes por millón 176 Concentración en mezclas",
      "paginas": "pág. 178",
      "pagina_inicio": 178,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Propiedades y características de las disoluciones",
      "paginas": "pág. 179",
      "pagina_inicio": 179,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Desarrollo científico y tecnológico",
      "paginas": "pág. 192",
      "pagina_inicio": 192,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Historia de la química: sus inicios",
      "paginas": "pág. 193",
      "pagina_inicio": 193,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Apor tes relevantes a la química 196 Contribuciones de mexicanas y mexicanos a la química 200 Diagramas de Lewis",
      "paginas": "pág. 204",
      "pagina_inicio": 204,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Características y usos de los diagramas de Lewis",
      "paginas": "pág. 205",
      "pagina_inicio": 205,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Ecuaciones químicas",
      "paginas": "pág. 208",
      "pagina_inicio": 208,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Modelos tridimensionales de las reacciones químicas",
      "paginas": "pág. 209",
      "pagina_inicio": 209,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "L ey de la conservación de la materia y la energía 210 Balanceo de ecuaciones químicas por distintos métodos 211 El átomo",
      "paginas": "pág. 216",
      "pagina_inicio": 216,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Modelos atómicos",
      "paginas": "pág. 217",
      "pagina_inicio": 217,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Partículas subatómicas: protón, neutrón y electrón 218 Enlace químico",
      "paginas": "pág. 221",
      "pagina_inicio": 221,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Enlace químico: iónico y covalente",
      "paginas": "pág. 222",
      "pagina_inicio": 222,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "C ompuestos iónicos y covalentes, y sus propiedades 223 La tabla periódica",
      "paginas": "pág. 227",
      "pagina_inicio": 227,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Historia y uso de la tabla periódica",
      "paginas": "pág. 228",
      "pagina_inicio": 228,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Clasificación de los elemen tos químicos 232 Macromoléculas",
      "paginas": "pág. 235",
      "pagina_inicio": 235,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Química e importancia de los carbohidratos, proteínas y lípidos en la alimentación 236 Métodos de separación de mezclas",
      "paginas": "pág. 241",
      "pagina_inicio": 241,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Propiedades físicas de las mezclas",
      "paginas": "pág. 242",
      "pagina_inicio": 242,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "P rocesos de separación 244 Metrología",
      "paginas": "pág. 247",
      "pagina_inicio": 247,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Unidades del Sistema Internacional",
      "paginas": "pág. 248",
      "pagina_inicio": 248,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "I nstrumentos de medición 250 Redondeo y uso de cifras significativas 251 Reglas de cifras significativas 253 Periodicidad de los elementos",
      "paginas": "pág. 255",
      "pagina_inicio": 255,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Número y masa atómicos",
      "paginas": "pág. 256",
      "pagina_inicio": 256,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "C aracterísticas de las familias y los periodos 258 Propiedades periódicas de los elementos 260 Propiedades extensivas e intensivas de la materia",
      "paginas": "pág. 263",
      "pagina_inicio": 263,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Clasificación de la materia",
      "paginas": "pág. 264",
      "pagina_inicio": 264,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "P ropiedades extensivas e intensivas 266 Reacción química",
      "paginas": "pág. 269",
      "pagina_inicio": 269,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Reacciones químicas y su clasificación",
      "paginas": "pág. 270",
      "pagina_inicio": 270,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "R eacciones químicas en el entorno 273 Reacciones ácido-base",
      "paginas": "pág. 275",
      "pagina_inicio": 275,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Saberes y pensamiento científico (3°)",
      "campo": "Saberes y Pensamiento Científico",
      "tema_o_proyecto": "Modelo de Arrhenius",
      "paginas": "pág. 276",
      "pagina_inicio": 276,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Historia El origen del ser humano, prehistoria y las civilizaciones originarias",
      "paginas": "pág. 14",
      "pagina_inicio": 14,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Prehistoria",
      "paginas": "pág. 15",
      "pagina_inicio": 15,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Aportes y características de las civilizaciones originarias",
      "paginas": "pág. 18",
      "pagina_inicio": 18,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Roma: organización política y social",
      "paginas": "pág. 24",
      "pagina_inicio": 24,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Monarquía, república e imperio: organización política en Roma",
      "paginas": "pág. 25",
      "pagina_inicio": 25,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "División social romana",
      "paginas": "pág. 29",
      "pagina_inicio": 29,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Expansión de Roma",
      "paginas": "pág. 32",
      "pagina_inicio": 32,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Crisis y caída del Imperio romano de Occidente",
      "paginas": "pág. 36",
      "pagina_inicio": 36,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Causas de la desintegración del Imperio romano",
      "paginas": "pág. 37",
      "pagina_inicio": 37,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Consecuencias de la caída del Imperio romano de Occidente",
      "paginas": "pág. 42",
      "pagina_inicio": 42,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Edad Media",
      "paginas": "pág. 46",
      "pagina_inicio": 46,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Características de la Edad Media",
      "paginas": "pág. 47",
      "pagina_inicio": 47,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Imperio carolingio y el Sacro Imperio romano germánico",
      "paginas": "pág. 49",
      "pagina_inicio": 49,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Imperio bizantino (Constantinopla)",
      "paginas": "pág. 52",
      "pagina_inicio": 52,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El islam",
      "paginas": "pág. 54",
      "pagina_inicio": 54,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Surgimiento del islam",
      "paginas": "pág. 55",
      "pagina_inicio": 55,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Expansión del islam",
      "paginas": "pág. 57",
      "pagina_inicio": 57,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Caída de Constantinopla y cierre de las rutas comerciales",
      "paginas": "pág. 59",
      "pagina_inicio": 59,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El comercio trasatlántico de esclavos",
      "paginas": "pág. 62",
      "pagina_inicio": 62,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "esclavizadas en América",
      "paginas": "pág. 63",
      "pagina_inicio": 63,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Rutas del tráfico de personas esclavizadas",
      "paginas": "pág. 64",
      "pagina_inicio": 64,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Vida cotidiana de la población esclavizada en América",
      "paginas": "pág. 66",
      "pagina_inicio": 66,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Saqueo de América por las potencias europeas",
      "paginas": "pág. 68",
      "pagina_inicio": 68,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Políticas de exterminio y sometimiento económico hacia la población",
      "paginas": "pág. 69",
      "pagina_inicio": 69,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Recursos naturales más codiciados y explotados en la época: oro, plata, grana cochinilla",
      "paginas": "pág. 71",
      "pagina_inicio": 71,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las pieles de castor como elemento exótico y de prestigio en Europa",
      "paginas": "pág. 72",
      "pagina_inicio": 72,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Colonias inglesas en América",
      "paginas": "pág. 74",
      "pagina_inicio": 74,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Población inglesa que llegó a América: características, religión y costumbres",
      "paginas": "pág. 75",
      "pagina_inicio": 75,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Relación entre colonos europeos y nativos americanos",
      "paginas": "pág. 77",
      "pagina_inicio": 77,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La estructura social en las Trece Colonias",
      "paginas": "pág. 78",
      "pagina_inicio": 78,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El impacto del pensamiento ilustrado en Occidente",
      "paginas": "pág. 80",
      "pagina_inicio": 80,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Revolución Francesa y la Declaración de los Derechos del Hombre y del Ciudadano",
      "paginas": "pág. 81",
      "pagina_inicio": 81,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Surgimiento del liberalismo",
      "paginas": "pág. 84",
      "pagina_inicio": 84,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las mujeres en el pensamiento ilustrado",
      "paginas": "pág. 86",
      "pagina_inicio": 86,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Independencia de las Trece Colonias y la Revolución Francesa",
      "paginas": "pág. 90",
      "pagina_inicio": 90,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El pensamiento ilustrado",
      "paginas": "pág. 91",
      "pagina_inicio": 91,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Independencia de las Trece Colonias",
      "paginas": "pág. 92",
      "pagina_inicio": 92,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Revolución Francesa",
      "paginas": "pág. 93",
      "pagina_inicio": 93,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La caída del Antiguo Régimen o feudalismo",
      "paginas": "pág. 95",
      "pagina_inicio": 95,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Trascendencia mundial de la toma del poder de la burguesía",
      "paginas": "pág. 96",
      "pagina_inicio": 96,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los procesos de independencia en América Latina",
      "paginas": "pág. 98",
      "pagina_inicio": 98,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Contexto de las gestas independentistas",
      "paginas": "pág. 99",
      "pagina_inicio": 99,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Movimientos independentistas de Haití y América del Sur",
      "paginas": "pág. 101",
      "pagina_inicio": 101,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Países que no lograron liberarse antes de 1821",
      "paginas": "pág. 104",
      "pagina_inicio": 104,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las revoluciones liberales del siglo xix en Europa",
      "paginas": "pág. 106",
      "pagina_inicio": 106,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El pensamiento marxista y su influencia en el movimiento obrero",
      "paginas": "pág. 107",
      "pagina_inicio": 107,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Condiciones de vida de la clase obrera en el siglo xix",
      "paginas": "pág. 108",
      "pagina_inicio": 108,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las revoluciones de 1830 y 1848",
      "paginas": "pág. 109",
      "pagina_inicio": 109,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los movimientos nacionalistas de unificación Alemania e Italia",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Comuna de París",
      "paginas": "pág. 112",
      "pagina_inicio": 112,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La guerra de Secesión",
      "paginas": "pág. 114",
      "pagina_inicio": 114,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El problema de la esclavitud en Estados Unidos de América",
      "paginas": "pág. 115",
      "pagina_inicio": 115,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El gobierno de Abraham Lincoln",
      "paginas": "pág. 117",
      "pagina_inicio": 117,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La guerra civil y sus consecuencias en la población de origen africano",
      "paginas": "pág. 119",
      "pagina_inicio": 119,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Primera Guerra Mundial",
      "paginas": "pág. 122",
      "pagina_inicio": 122,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Causas de la Primera Guerra Mundial Hechos y procesos del pasado y simultáneos",
      "paginas": "pág. 123",
      "pagina_inicio": 123,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Desarrollo de la Primera Guerra Mundial",
      "paginas": "pág. 124",
      "pagina_inicio": 124,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Consecuencias de la Primera Guerra Mundial",
      "paginas": "pág. 128",
      "pagina_inicio": 128,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Revolución Rusa",
      "paginas": "pág. 130",
      "pagina_inicio": 130,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Rusia zarista y los antecedentes de las revoluciones de 1917",
      "paginas": "pág. 131",
      "pagina_inicio": 131,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las revoluciones de febrero y octubre de 1917",
      "paginas": "pág. 133",
      "pagina_inicio": 133,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La creación de la urss y su contrapeso al sistema capitalista",
      "paginas": "pág. 136",
      "pagina_inicio": 136,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Reacomodo internacional en el periodo de entreguerras",
      "paginas": "pág. 140",
      "pagina_inicio": 140,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La crisis de 1929 y sus efectos",
      "paginas": "pág. 141",
      "pagina_inicio": 141,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El fascismo en Alemania, Italia y España",
      "paginas": "pág. 144",
      "pagina_inicio": 144,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Guerra Civil Española",
      "paginas": "pág. 150",
      "pagina_inicio": 150,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Causas y desarrollo de la Guerra Civil Española",
      "paginas": "pág. 151",
      "pagina_inicio": 151,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "España después de la Guerra Civil: la dictadura franquista",
      "paginas": "pág. 154",
      "pagina_inicio": 154,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "México y la República Española",
      "paginas": "pág. 157",
      "pagina_inicio": 157,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La Segunda Guerra Mundial",
      "paginas": "pág. 160",
      "pagina_inicio": 160,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La expansión alemana y el inicio del conflicto",
      "paginas": "pág. 161",
      "pagina_inicio": 161,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "las grandes victorias soviéticas",
      "paginas": "pág. 164",
      "pagina_inicio": 164,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "México en la Segunda Guerra Mundial",
      "paginas": "pág. 166",
      "pagina_inicio": 166,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Fin de la guerra: consecuencias en un nuevo orden mundial",
      "paginas": "pág. 168",
      "pagina_inicio": 168,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Posguerra: consolidación de un mundo bipolar",
      "paginas": "pág. 172",
      "pagina_inicio": 172,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "y diferencias entre los bloques capitalista y socialista",
      "paginas": "pág. 173",
      "pagina_inicio": 173,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Cambios culturales y movimientos sociales en el periodo a nivel mundial",
      "paginas": "pág. 178",
      "pagina_inicio": 178,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Competencia por las armas y el espacio",
      "paginas": "pág. 180",
      "pagina_inicio": 180,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Desarrollo tecnológico, científico y militar de eua y la urss",
      "paginas": "pág. 181",
      "pagina_inicio": 181,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Amenaza nuclear",
      "paginas": "pág. 184",
      "pagina_inicio": 184,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Carrera espacial y su papel determinante en la correlación de fuerzas",
      "paginas": "pág. 186",
      "pagina_inicio": 186,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Procesos de descolonización al finalizar la Segunda Guerra Mundial",
      "paginas": "pág. 188",
      "pagina_inicio": 188,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "India, un caso particular",
      "paginas": "pág. 189",
      "pagina_inicio": 189,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Luchas de liberación africanas El Congo y Argelia",
      "paginas": "pág. 191",
      "pagina_inicio": 191,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La política anticolonialista y su relación con las materias primas",
      "paginas": "pág. 194",
      "pagina_inicio": 194,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El fin del campo socialista",
      "paginas": "pág. 196",
      "pagina_inicio": 196,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La urss, potencia socialista; la guerra de Afganistán y otros momentos de crisis",
      "paginas": "pág. 197",
      "pagina_inicio": 197,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "de la perestroika y la glasnost",
      "paginas": "pág. 199",
      "pagina_inicio": 199,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La caída del Muro de Berlín y el fin del socialismo real",
      "paginas": "pág. 200",
      "pagina_inicio": 200,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Guerra del golfo Pérsico",
      "paginas": "pág. 202",
      "pagina_inicio": 202,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La lucha por el petróleo",
      "paginas": "pág. 203",
      "pagina_inicio": 203,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Antecedentes y desarrollo del conflicto: caracterización regional y actores involucrados",
      "paginas": "pág. 206",
      "pagina_inicio": 206,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Surgimiento y consolidación de la Unión Europea",
      "paginas": "pág. 210",
      "pagina_inicio": 210,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Antecedentes históricos de la Unión Europea",
      "paginas": "pág. 211",
      "pagina_inicio": 211,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Consecuencias de la integración económica de la Unión Europea",
      "paginas": "pág. 213",
      "pagina_inicio": 213,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Brexit: salida de Inglaterra de la Unión Europea",
      "paginas": "pág. 215",
      "pagina_inicio": 215,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Sudáfrica: conflictos internos y relevancia de la elección de Nelson Mandela",
      "paginas": "pág. 218",
      "pagina_inicio": 218,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Racismo y exclusión social en Sudáfrica en el contexto político de África",
      "paginas": "pág. 219",
      "pagina_inicio": 219,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Nelson Mandela y el Congreso Nacional Africano ( cna)",
      "paginas": "pág. 221",
      "pagina_inicio": 221,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Influencia de Nelson Mandela en los contextos africano e internacional",
      "paginas": "pág. 224",
      "pagina_inicio": 224,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Formación cívica y Ética Espacios de participación de niñas, niños y adolescentes",
      "paginas": "pág. 226",
      "pagina_inicio": 226,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "La participación de nna para construir comunidades",
      "paginas": "pág. 227",
      "pagina_inicio": 227,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Importancia de los espacios de participación juvenil",
      "paginas": "pág. 229",
      "pagina_inicio": 229,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Espacios y niveles de participación juvenil",
      "paginas": "pág. 230",
      "pagina_inicio": 230,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Respeto y defensa de los derechos humanos: retos de las sociedades actuales",
      "paginas": "pág. 234",
      "pagina_inicio": 234,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Retos actuales que los adolescentes pueden asumir en relación con los derechos humanos",
      "paginas": "pág. 235",
      "pagina_inicio": 235,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Postura ética y movimientos sociales: acciones para defender los derechos humanos",
      "paginas": "pág. 239",
      "pagina_inicio": 239,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Movimientos sociales y políticos en la actualidad",
      "paginas": "pág. 240",
      "pagina_inicio": 240,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Postura ética ante los movimientos sociales y políticos",
      "paginas": "pág. 243",
      "pagina_inicio": 243,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Acciones para promover y defender los derechos humanos desde una postura ética",
      "paginas": "pág. 245",
      "pagina_inicio": 245,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Actuar ético frente a las desigualdades en México y América Latina",
      "paginas": "pág. 248",
      "pagina_inicio": 248,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Causas sociales, políticas e históricas de la desigualdad",
      "paginas": "pág. 249",
      "pagina_inicio": 249,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Sugerencias para erradicar las desigualdades políticas, económicas y sociales",
      "paginas": "pág. 253",
      "pagina_inicio": 253,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Organismos, instituciones y normatividad para la defensa de los derechos humanos",
      "paginas": "pág. 256",
      "pagina_inicio": 256,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los derechos humanos en los ámbitos internacional y nacional",
      "paginas": "pág. 257",
      "pagina_inicio": 257,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los derechos de niñas, niños y adolescentes",
      "paginas": "pág. 261",
      "pagina_inicio": 261,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los derechos sexuales y reproductivos de adolescentes y jóvenes",
      "paginas": "pág. 262",
      "pagina_inicio": 262,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "El conflicto y la cultura de paz en la convivencia humana",
      "paginas": "pág. 264",
      "pagina_inicio": 264,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Los conflictos interpersonales, sociales y políticos",
      "paginas": "pág. 265",
      "pagina_inicio": 265,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Estrategias de participación para crear entornos basados en una cultura de paz",
      "paginas": "pág. 268",
      "pagina_inicio": 268,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Acciones para fortalecer la cultura de paz",
      "paginas": "pág. 271",
      "pagina_inicio": 271,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "y el aprecio a las personas",
      "paginas": "pág. 272",
      "pagina_inicio": 272,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Acciones transformadoras para preservar la vida y la dignidad de las personas",
      "paginas": "pág. 273",
      "pagina_inicio": 273,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Formas de organización escolar, comunitaria, nacional y mundial para fortalecer la convivencia pacífica",
      "paginas": "pág. 275",
      "pagina_inicio": 275,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Resolución no violenta de conflictos en México y América Latina",
      "paginas": "pág. 277",
      "pagina_inicio": 277,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Las acciones en México y América Latina a favor de la cultura de paz",
      "paginas": "pág. 278",
      "pagina_inicio": 278,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "bienestar de la población",
      "paginas": "pág. 280",
      "pagina_inicio": 280,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Principios éticos en acciones igualitarias y solidarias para el desarrollo sustentable",
      "paginas": "pág. 283",
      "pagina_inicio": 283,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Problemas que amenazan la vida natural y humana en la Tierra",
      "paginas": "pág. 284",
      "pagina_inicio": 284,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Retos actuales para un desarrollo sustentable",
      "paginas": "pág. 286",
      "pagina_inicio": 286,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "que promueven el equilibrio natural",
      "paginas": "pág. 289",
      "pagina_inicio": 289,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Democracia intercultural para la igualdad",
      "paginas": "pág. 293",
      "pagina_inicio": 293,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Ética, naturaleza y sociedades (3°)",
      "campo": "Ética, Naturaleza y Sociedades",
      "tema_o_proyecto": "Desigualdades en el ámbito cotidiano",
      "paginas": "pág. 294",
      "pagina_inicio": 294,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tecnología Aplicación de las formas de organización en mi comunidad",
      "paginas": "pág. 12",
      "pagina_inicio": 12,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Economía local",
      "paginas": "pág. 13",
      "pagina_inicio": 13,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Procesos técnicos sostenibles",
      "paginas": "pág. 16",
      "pagina_inicio": 16,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Materiales sostenibles en mi comunidad",
      "paginas": "pág. 18",
      "pagina_inicio": 18,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estrategias que promueven la/uni00A0sostenibilidad",
      "paginas": "pág. 19",
      "pagina_inicio": 19,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Los procesos técnicos sostenibles en la comunidad",
      "paginas": "pág. 23",
      "pagina_inicio": 23,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Comunicación e innovación tecnológica",
      "paginas": "pág. 27",
      "pagina_inicio": 27,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La importancia de comunicar las/uni00A0ideas",
      "paginas": "pág. 28",
      "pagina_inicio": 28,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tipos de mensajes y su impac to",
      "paginas": "pág. 30",
      "pagina_inicio": 30,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Comunidades inclusivas y sostenibles a través de la tecnología",
      "paginas": "pág. 33",
      "pagina_inicio": 33,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La tecnología en los procesos técnicos comunitarios",
      "paginas": "pág. 34",
      "pagina_inicio": 34,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Inclusión de procesos ancestrales en la actualidad",
      "paginas": "pág. 36",
      "pagina_inicio": 36,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La sostenibilidad y la inclusión en/uni00A0mi/uni00A0comunidad",
      "paginas": "pág. 38",
      "pagina_inicio": 38,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "De la idea a la difusión",
      "paginas": "pág. 41",
      "pagina_inicio": 41,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estrategias visuales",
      "paginas": "pág. 42",
      "pagina_inicio": 42,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estrategias auditivas",
      "paginas": "pág. 45",
      "pagina_inicio": 45,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Maquetas y prototipos",
      "paginas": "pág. 46",
      "pagina_inicio": 46,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Economía popular y solidaria",
      "paginas": "pág. 47",
      "pagina_inicio": 47,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sector cooperativo",
      "paginas": "pág. 48",
      "pagina_inicio": 48,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sector asociativo",
      "paginas": "pág. 51",
      "pagina_inicio": 51,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Sector comunitario",
      "paginas": "pág. 53",
      "pagina_inicio": 53,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Emprendimientos",
      "paginas": "pág. 56",
      "pagina_inicio": 56,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "De/f inición, elementos y tipos de emprendimientos",
      "paginas": "pág. 57",
      "pagina_inicio": 57,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Emprendimien tos fabriles y procesos técnicos sostenibles",
      "paginas": "pág. 61",
      "pagina_inicio": 61,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Emprendimientos comunitarios",
      "paginas": "pág. 64",
      "pagina_inicio": 64,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Emprendimientos artesanales y agrícolas",
      "paginas": "pág. 65",
      "pagina_inicio": 65,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Las necesidades de mi c omunidad",
      "paginas": "pág. 68",
      "pagina_inicio": 68,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Energía sustentable para el desarrollo comunitario",
      "paginas": "pág. 71",
      "pagina_inicio": 71,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Uso racional de la energía",
      "paginas": "pág. 72",
      "pagina_inicio": 72,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Innovación y energía menos agresiva",
      "paginas": "pág. 75",
      "pagina_inicio": 75,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estudios de factibilidad desde un enfoque sostenible",
      "paginas": "pág. 76",
      "pagina_inicio": 76,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Factibilidad técnica, operativa y económica",
      "paginas": "pág. 77",
      "pagina_inicio": 77,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Importancia de las fuentes de energía sostenibles",
      "paginas": "pág. 81",
      "pagina_inicio": 81,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Energía sustentable en los procesos técnicos",
      "paginas": "pág. 82",
      "pagina_inicio": 82,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Implementación de proyectos",
      "paginas": "pág. 89",
      "pagina_inicio": 89,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Retos en la implementación de proyectos",
      "paginas": "pág. 90",
      "pagina_inicio": 90,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estrategias de pensamiento creativo",
      "paginas": "pág. 92",
      "pagina_inicio": 92,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Implicaciones de los sistemas técnicos en la comunidad",
      "paginas": "pág. 96",
      "pagina_inicio": 96,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Implicaciones en la naturaleza",
      "paginas": "pág. 97",
      "pagina_inicio": 97,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Implicaciones sociales",
      "paginas": "pág. 100",
      "pagina_inicio": 100,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Fuentes de energía sustentable",
      "paginas": "pág. 103",
      "pagina_inicio": 103,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Energía solar",
      "paginas": "pág. 104",
      "pagina_inicio": 104,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Eólica",
      "paginas": "pág. 108",
      "pagina_inicio": 108,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Mareomotriz",
      "paginas": "pág. 111",
      "pagina_inicio": 111,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Hidroeléctrica",
      "paginas": "pág. 116",
      "pagina_inicio": 116,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Bioenergía",
      "paginas": "pág. 118",
      "pagina_inicio": 118,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Geoenergía",
      "paginas": "pág. 120",
      "pagina_inicio": 120,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tecnología en el desarrollo inclusivo y sustentable",
      "paginas": "pág. 123",
      "pagina_inicio": 123,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La inclusión tecnológica y digital",
      "paginas": "pág. 124",
      "pagina_inicio": 124,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La sustentabilidad y el desarrollo tecnológico",
      "paginas": "pág. 129",
      "pagina_inicio": 129,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Materiales sustentables: un cambio necesario",
      "paginas": "pág. 133",
      "pagina_inicio": 133,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La importancia de los materiales sustentables",
      "paginas": "pág. 134",
      "pagina_inicio": 134,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "En la construc ción",
      "paginas": "pág. 137",
      "pagina_inicio": 137,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Para el diseño",
      "paginas": "pág. 140",
      "pagina_inicio": 140,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "En el hogar",
      "paginas": "pág. 142",
      "pagina_inicio": 142,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "En el transporte",
      "paginas": "pág. 145",
      "pagina_inicio": 145,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "En los textiles",
      "paginas": "pág. 148",
      "pagina_inicio": 148,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Prácticas culturales que promueven la mejora de productos",
      "paginas": "pág. 150",
      "pagina_inicio": 150,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La mejora continua: e/f icacia, e/f iciencia y efectividad",
      "paginas": "pág. 151",
      "pagina_inicio": 151,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La comunidad en la mejora continua y la evaluación de procesos",
      "paginas": "pág. 153",
      "pagina_inicio": 153,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Seguimiento y monitoreo",
      "paginas": "pág. 155",
      "pagina_inicio": 155,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Recopilación de información",
      "paginas": "pág. 156",
      "pagina_inicio": 156,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Análisis de inf ormación",
      "paginas": "pág. 157",
      "pagina_inicio": 157,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Establecimien to de criterios de satisfacción",
      "paginas": "pág. 158",
      "pagina_inicio": 158,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Relación costo-bene/f icio",
      "paginas": "pág. 159",
      "pagina_inicio": 159,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Uso y ventajas de diferentes herramientas, máquinas e instrumentos",
      "paginas": "pág. 160",
      "pagina_inicio": 160,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Agricultura",
      "paginas": "pág. 161",
      "pagina_inicio": 161,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Minería",
      "paginas": "pág. 164",
      "pagina_inicio": 164,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Educación Fìsica Condición física, salud y autogestión",
      "paginas": "pág. 168",
      "pagina_inicio": 168,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El diseño, organización y puesta en práctica de actividades que contribuyen a desarrollar la condición física de las personas",
      "paginas": "pág. 169",
      "pagina_inicio": 169,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Confrontación lúdica y juego limpio",
      "paginas": "pág. 173",
      "pagina_inicio": 173,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "de la autoestima",
      "paginas": "pág. 174",
      "pagina_inicio": 174,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Desarrollo de estilos de vida saludables",
      "paginas": "pág. 178",
      "pagina_inicio": 178,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El reconocimiento de los estilos de vida del entorno",
      "paginas": "pág. 179",
      "pagina_inicio": 179,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Las alternativas que eliminan comportamientos que ponen en riesgo la salud personal, familiar y social",
      "paginas": "pág. 182",
      "pagina_inicio": 182,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Las situaciones de colaboración y confrontación presentes en el juego",
      "paginas": "pág. 184",
      "pagina_inicio": 184,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Resolución de problemas a partir de vincular el pensamiento creativo y estratégico con las habilidades socioemocionales",
      "paginas": "pág. 185",
      "pagina_inicio": 185,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Valoración del potencial motriz al saberse y sentirse competente",
      "paginas": "pág. 189",
      "pagina_inicio": 189,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El desarrollo de la disponibilidad corporal y la autonomía motriz",
      "paginas": "pág. 190",
      "pagina_inicio": 190,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Tutoría y educación socioemocional Ambientes compartidos",
      "paginas": "pág. 193",
      "pagina_inicio": 193,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La construcción de ambientes compartidos de bienestar en la comunidad",
      "paginas": "pág. 194",
      "pagina_inicio": 194,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Condiciones del contexto familiar y comunitario",
      "paginas": "pág. 196",
      "pagina_inicio": 196,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "un riesgo para la salud, la seguridad y el medio ambiente",
      "paginas": "pág. 197",
      "pagina_inicio": 197,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Construcción de alternativas en la prevención de riesgos",
      "paginas": "pág. 202",
      "pagina_inicio": 202,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La participación activa en la construcción de alternativas para la prevención de riesgos individuales y de la comunidad",
      "paginas": "pág. 203",
      "pagina_inicio": 203,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El apoyo social para atender las necesidades de la comunidad",
      "paginas": "pág. 210",
      "pagina_inicio": 210,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Instituciones de apoyo en situaciones de riesgo",
      "paginas": "pág. 211",
      "pagina_inicio": 211,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El desarrollo personal en la comunidad",
      "paginas": "pág. 216",
      "pagina_inicio": 216,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "El desarrollo personal y de la comunidad",
      "paginas": "pág. 217",
      "pagina_inicio": 217,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La construcción de relaciones inclusivas y equitativas",
      "paginas": "pág. 220",
      "pagina_inicio": 220,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La construcción de relaciones inclusivas y equitativas a partir de la regulación emocional",
      "paginas": "pág. 221",
      "pagina_inicio": 221,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La interacción social inclusiva",
      "paginas": "pág. 224",
      "pagina_inicio": 224,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La diversidad en todas sus manifestaciones y el respeto a la dignidad humana en la comunidad",
      "paginas": "pág. 225",
      "pagina_inicio": 225,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La promoción de pautas de inclusión en la comunidad",
      "paginas": "pág. 228",
      "pagina_inicio": 228,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Los sentimientos y su in/f luencia en la toma de decisiones",
      "paginas": "pág. 231",
      "pagina_inicio": 231,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Estrategias para la regulación de emociones, sentimientos y estados de ánimo como base para la toma de decisiones",
      "paginas": "pág. 232",
      "pagina_inicio": 232,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La toma de decisiones",
      "paginas": "pág. 235",
      "pagina_inicio": 235,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "La toma de decisiones para el bienestar personal y social",
      "paginas": "pág. 236",
      "pagina_inicio": 236,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Logros y situaciones en la búsqueda del bienestar",
      "paginas": "pág. 239",
      "pagina_inicio": 239,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Las características y potencialidades propias enfocadas en las metas individuales y colectivas",
      "paginas": "pág. 240",
      "pagina_inicio": 240,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Proyecto de vida: bienestar personal y colectivo",
      "paginas": "pág. 243",
      "pagina_inicio": 243,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Los retos, estrategias de apoyo mutuo y acciones para el logro del bienestar personal y colectivo",
      "paginas": "pág. 244",
      "pagina_inicio": 244,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Replanteamiento de metas individuales y grupales en favor del bienestar común",
      "paginas": "pág. 246",
      "pagina_inicio": 246,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Metas individuales y grupales",
      "paginas": "pág. 247",
      "pagina_inicio": 247,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Créditos bibliográ/f icos",
      "paginas": "pág. 250",
      "pagina_inicio": 250,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "Créditos iconográ/f icos",
      "paginas": "pág. 252",
      "pagina_inicio": 252,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "De lo humano y lo comunitario (3°)",
      "campo": "De lo Humano y lo Comunitario",
      "tema_o_proyecto": "¡Expresamos nuestras ideas para ejercer nuestros derechos!",
      "paginas": "pág. 255",
      "pagina_inicio": 255,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Lenguajes Lengua indígena como lengua materna Lengua indígena como segunda lengua ArtesInglésEspañol Español El periodismo como herramienta para preservar la memoria colectiva",
      "paginas": "pág. 12",
      "pagina_inicio": 12,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La crónica como herramienta para preservar la memoria colectiva",
      "paginas": "pág. 13",
      "pagina_inicio": 13,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Géneros periodísticos interpretativos",
      "paginas": "pág. 16",
      "pagina_inicio": 16,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Estructura de una crónica",
      "paginas": "pág. 17",
      "pagina_inicio": 17,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Redacción de una crónica",
      "paginas": "pág. 19",
      "pagina_inicio": 19,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Diálogo intercultural y comunicación asertiva",
      "paginas": "pág. 21",
      "pagina_inicio": 21,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El diálogo desde una perspectiva intercultural crítica",
      "paginas": "pág. 22",
      "pagina_inicio": 22,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Comunicación asertiva",
      "paginas": "pág. 25",
      "pagina_inicio": 25,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Una antología de diálogo intercultural",
      "paginas": "pág. 28",
      "pagina_inicio": 28,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El ensayo: características y su aplicación",
      "paginas": "pág. 30",
      "pagina_inicio": 30,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Elementos de un texto ensayístico",
      "paginas": "pág. 31",
      "pagina_inicio": 31,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La creación de un ensayo sobre la persona a partir de la lectura de una obra literaria",
      "paginas": "pág. 35",
      "pagina_inicio": 35,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Estrategias para promover la erradicación de la violencia",
      "paginas": "pág. 38",
      "pagina_inicio": 38,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Instituciones de apoyo y consideraciones generales para erradicar la violencia",
      "paginas": "pág. 39",
      "pagina_inicio": 39,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Propuestas escritas para erradicar la violencia: cartel, folleto-tríptico, monografía",
      "paginas": "pág. 42",
      "pagina_inicio": 42,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Narrativas de vida saludable por medio del lenguaje audiovisual",
      "paginas": "pág. 45",
      "pagina_inicio": 45,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Momentos de un producto audiovisual",
      "paginas": "pág. 46",
      "pagina_inicio": 46,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Narrativas en el lenguaje audiovisual",
      "paginas": "pág. 50",
      "pagina_inicio": 50,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La elección de un medio o canal para la socialización de ideas",
      "paginas": "pág. 56",
      "pagina_inicio": 56,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Texto de divulgación científica desde la comunidad",
      "paginas": "pág. 58",
      "pagina_inicio": 58,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El desarrollo y divulgación de la ciencia en la comunidad",
      "paginas": "pág. 59",
      "pagina_inicio": 59,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Fomento de la divulgación científica",
      "paginas": "pág. 65",
      "pagina_inicio": 65,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La comunidad y los temas de interés de índole científica",
      "paginas": "pág. 69",
      "pagina_inicio": 69,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El valor de la diversidad lingüística desde la interculturalidad",
      "paginas": "pág. 71",
      "pagina_inicio": 71,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Textos argumentativos",
      "paginas": "pág. 72",
      "pagina_inicio": 72,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "con perspectiva intercultural",
      "paginas": "pág. 74",
      "pagina_inicio": 74,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La argumentación en un texto ensayístico",
      "paginas": "pág. 78",
      "pagina_inicio": 78,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "lEngua indígEna como lEngua matErna Dimensión simbólico-cosmogónica de la milpa en las comunidades indígenas",
      "paginas": "pág. 81",
      "pagina_inicio": 81,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Relevancia social y cultural de la milpa",
      "paginas": "pág. 82",
      "pagina_inicio": 82,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Dimensión cosmogónica de la milpa",
      "paginas": "pág. 84",
      "pagina_inicio": 84,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Dimensión simbólica de la milpa",
      "paginas": "pág. 87",
      "pagina_inicio": 87,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Discursos sobre lo sagrado y el territorio en los pueblos indígenas",
      "paginas": "pág. 91",
      "pagina_inicio": 91,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Relatos sobre la fundación de los pueblos y el origen de los lugares sagrados",
      "paginas": "pág. 92",
      "pagina_inicio": 92,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cantos que reflejan la organización del espacio sagrado",
      "paginas": "pág. 94",
      "pagina_inicio": 94,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Peticiones y agradecimientos a la deidad",
      "paginas": "pág. 96",
      "pagina_inicio": 96,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Evocaciones sobre el territorio y el lugar de origen",
      "paginas": "pág. 99",
      "pagina_inicio": 99,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El tequio como tradición ancestral y acción social en los pueblos originarios",
      "paginas": "pág. 102",
      "pagina_inicio": 102,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Antecedentes prehispánicos del tequio, causas y finalidades",
      "paginas": "pág. 103",
      "pagina_inicio": 103,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "en los pueblos indígenas",
      "paginas": "pág. 105",
      "pagina_inicio": 105,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Aportaciones y enseñanzas del trabajo comunitario en los pueblos indígenas",
      "paginas": "pág. 107",
      "pagina_inicio": 107,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El estudio de las festividades tradicionales",
      "paginas": "pág. 110",
      "pagina_inicio": 110,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Narraciones en torno a los ancestros, festividad e identidad",
      "paginas": "pág. 111",
      "pagina_inicio": 111,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El 1 y 2 de noviembre, una tradición en torno a los ancestros",
      "paginas": "pág. 113",
      "pagina_inicio": 113,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La diversidad cultural alrededor de la festividad",
      "paginas": "pág. 115",
      "pagina_inicio": 115,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "y el enriquecimiento de nuestra vida",
      "paginas": "pág. 117",
      "pagina_inicio": 117,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Trascendencia y contribuciones de las lenguas originarias",
      "paginas": "pág. 118",
      "pagina_inicio": 118,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "y extinción de las lenguas originarias",
      "paginas": "pág. 119",
      "pagina_inicio": 119,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "para su rescate y conservación",
      "paginas": "pág. 120",
      "pagina_inicio": 120,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Lenguas indígenas, identidad y sentido de pertenencia",
      "paginas": "pág. 122",
      "pagina_inicio": 122,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las lenguas indígenas frente al español",
      "paginas": "pág. 123",
      "pagina_inicio": 123,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Identidad colectiva y sentido de pertenencia",
      "paginas": "pág. 125",
      "pagina_inicio": 125,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La reconstrucción de la lealtad lingüística de los jóvenes indígenas",
      "paginas": "pág. 127",
      "pagina_inicio": 127,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Variedad y transformaciones en las lenguas originarias de México",
      "paginas": "pág. 130",
      "pagina_inicio": 130,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La transformación histórica de las lenguas originarias",
      "paginas": "pág. 131",
      "pagina_inicio": 131,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Variedades regionales de las lenguas originarias",
      "paginas": "pág. 135",
      "pagina_inicio": 135,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cambios en las lenguas originarias debido a la influencia del español",
      "paginas": "pág. 138",
      "pagina_inicio": 138,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Lengua indígena como segunda Lengua Prácticas musicales contemporáneas en las lenguas indígenas",
      "paginas": "pág. 141",
      "pagina_inicio": 141,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las pirekuas en lengua p'urhépecha y otras canciones líricas tradicionales",
      "paginas": "pág. 142",
      "pagina_inicio": 142,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La maya pax: música ceremonial y festiva del pueblo maya",
      "paginas": "pág. 144",
      "pagina_inicio": 144,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las bandas de música en las comunidades oaxaqueñas",
      "paginas": "pág. 146",
      "pagina_inicio": 146,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Manifestaciones musicales urbanas de las nuevas generaciones",
      "paginas": "pág. 148",
      "pagina_inicio": 148,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de textos históricos y prácticas culturales",
      "paginas": "pág. 151",
      "pagina_inicio": 151,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Importancia de la creación de textos escritos en lengua indígena",
      "paginas": "pág. 152",
      "pagina_inicio": 152,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Percepción del mundo indígena a través de sus prácticas culturales",
      "paginas": "pág. 153",
      "pagina_inicio": 153,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Competencia comunicativa e interacción bilingüe",
      "paginas": "pág. 155",
      "pagina_inicio": 155,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "de una sociedad pluralista e incluyente",
      "paginas": "pág. 157",
      "pagina_inicio": 157,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cosmovisión de los pueblos originarios y su relación con las manifestaciones culturales",
      "paginas": "pág. 158",
      "pagina_inicio": 158,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Rituales dancísticos como una expresión de identidad",
      "paginas": "pág. 161",
      "pagina_inicio": 161,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La valorización de las expresiones culturales y artísticas de mi comunidad",
      "paginas": "pág. 162",
      "pagina_inicio": 162,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Por una cultura que reconozca la diversidad cultural",
      "paginas": "pág. 163",
      "pagina_inicio": 163,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "ingLés Identificar la violencia en el entorno para evitarla",
      "paginas": "pág. 165",
      "pagina_inicio": 165,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Mi postura ante la erradicación de la violencia: In my opinion",
      "paginas": "pág. 166",
      "pagina_inicio": 166,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El discurso persuasivo contra la violencia en mi entorno",
      "paginas": "pág. 168",
      "pagina_inicio": 168,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Estrategias para erradicar la violencia en la comunidad",
      "paginas": "pág. 170",
      "pagina_inicio": 170,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La construcción de una sociedad inclusiva, cultural y artística",
      "paginas": "pág. 172",
      "pagina_inicio": 172,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Expresiones artísticas alternativas",
      "paginas": "pág. 173",
      "pagina_inicio": 173,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Expresiones artísticas aumentativas",
      "paginas": "pág. 175",
      "pagina_inicio": 175,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tipos de expresiones artísticas que favorecen un ambiente inclusivo",
      "paginas": "pág. 176",
      "pagina_inicio": 176,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Creaciones literarias en inglés: de lo tradicional a lo contemporáneo",
      "paginas": "pág. 178",
      "pagina_inicio": 178,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tradiciones en la comunidad",
      "paginas": "pág. 179",
      "pagina_inicio": 179,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Recursos artísticos para la difusión de un tema de interés común",
      "paginas": "pág. 181",
      "pagina_inicio": 181,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Manifestaciones culturales y su difusión en lengua inglesa Cultural manifestations and their spread in the english language",
      "paginas": "pág. 183",
      "pagina_inicio": 183,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Prácticas culturales y lingüísticas de México y del mundo Cultural and linguistic practices in Mexico and the world",
      "paginas": "pág. 184",
      "pagina_inicio": 184,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Difusión de prácticas culturales Spread of cultural practices",
      "paginas": "pág. 186",
      "pagina_inicio": 186,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Poesía y cultura Poetry and culture",
      "paginas": "pág. 189",
      "pagina_inicio": 189,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Características y tipos de poemas Characteristics and types of poems",
      "paginas": "pág. 190",
      "pagina_inicio": 190,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La poesía visual como recurso estético Visual poetry as an aesthetic resource",
      "paginas": "pág. 193",
      "pagina_inicio": 193,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La difusión de la poesía The spread of poetry",
      "paginas": "pág. 195",
      "pagina_inicio": 195,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Problemas de la comunidad y propuestas de solución Community’ s problems and proposed solutions",
      "paginas": "pág. 197",
      "pagina_inicio": 197,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las necesidades en la comunidad Community needs",
      "paginas": "pág. 198",
      "pagina_inicio": 198,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Campaigns as a way to solve community ’’s problems",
      "paginas": "pág. 200",
      "pagina_inicio": 200,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Planeación de una campaña Planning a campaign",
      "paginas": "pág. 203",
      "pagina_inicio": 203,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sucesos históricos en la comunidad",
      "paginas": "pág. 205",
      "pagina_inicio": 205,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Apropiación de sucesos históricos",
      "paginas": "pág. 206",
      "pagina_inicio": 206,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El acontecer de la comunidad en medios audiovisuales en inglés",
      "paginas": "pág. 209",
      "pagina_inicio": 209,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Vida saludable y los medios de comunicación",
      "paginas": "pág. 211",
      "pagina_inicio": 211,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Medios de comunicación y su impacto",
      "paginas": "pág. 212",
      "pagina_inicio": 212,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Vida saludable vs sedentarismo",
      "paginas": "pág. 214",
      "pagina_inicio": 214,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La difusión de ejemplos de vida saludable",
      "paginas": "pág. 215",
      "pagina_inicio": 215,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "artEs Arte ecológico aplicado a problemas de la comunidad",
      "paginas": "pág. 218",
      "pagina_inicio": 218,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Materiales de origen vegetal",
      "paginas": "pág. 219",
      "pagina_inicio": 219,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Arte reciclado",
      "paginas": "pág. 220",
      "pagina_inicio": 220,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Materias primas y técnicas sustentables para la creación artística",
      "paginas": "pág. 222",
      "pagina_inicio": 222,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Comprensión y reinterpretación de manifestaciones artísticas del patrimonio cultural",
      "paginas": "pág. 224",
      "pagina_inicio": 224,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El carnaval",
      "paginas": "pág. 225",
      "pagina_inicio": 225,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La peregrinación",
      "paginas": "pág. 226",
      "pagina_inicio": 226,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La siembra colectiva",
      "paginas": "pág. 227",
      "pagina_inicio": 227,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Creación artística para el desarrollo de procesos de paz",
      "paginas": "pág. 229",
      "pagina_inicio": 229,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Bitácoras y portafolios digitales: evidencias de guerra y procesos de paz",
      "paginas": "pág. 230",
      "pagina_inicio": 230,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Arte fronterizo: norte y sur de México",
      "paginas": "pág. 232",
      "pagina_inicio": 232,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Procesos de paz en Colombia",
      "paginas": "pág. 234",
      "pagina_inicio": 234,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El feminicidio en México en voz de colectivos y artistas",
      "paginas": "pág. 236",
      "pagina_inicio": 236,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La difusión de una vida saludable",
      "paginas": "pág. 239",
      "pagina_inicio": 239,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La expresión de una vida saludable en las manifestaciones culturales",
      "paginas": "pág. 240",
      "pagina_inicio": 240,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Las artes y los medios de comunicación",
      "paginas": "pág. 241",
      "pagina_inicio": 241,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Formatos audiovisuales, visuales y escritos en las manifestaciones artísticas",
      "paginas": "pág. 242",
      "pagina_inicio": 242,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Diversidad étnica, cultural y lingüística de México",
      "paginas": "pág. 244",
      "pagina_inicio": 244,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Diversidad cultural y familias lingüísticas",
      "paginas": "pág. 245",
      "pagina_inicio": 245,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La representación del tejido social desde el arte",
      "paginas": "pág. 247",
      "pagina_inicio": 247,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Facultad del arte para cambiar al mundo",
      "paginas": "pág. 249",
      "pagina_inicio": 249,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Estilos artísticos de México y el mundo",
      "paginas": "pág. 251",
      "pagina_inicio": 251,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Clásico",
      "paginas": "pág. 252",
      "pagina_inicio": 252,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Mesoamericano",
      "paginas": "pág. 254",
      "pagina_inicio": 254,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Renacentista",
      "paginas": "pág. 256",
      "pagina_inicio": 256,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Barroco",
      "paginas": "pág. 257",
      "pagina_inicio": 257,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Romanticismo",
      "paginas": "pág. 259",
      "pagina_inicio": 259,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Realismo",
      "paginas": "pág. 261",
      "pagina_inicio": 261,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Vanguardias",
      "paginas": "pág. 262",
      "pagina_inicio": 262,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Muralismo",
      "paginas": "pág. 265",
      "pagina_inicio": 265,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Gráfica popular",
      "paginas": "pág. 267",
      "pagina_inicio": 267,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Estilos artísticos de México y el mundo, siglos xx-xxi",
      "paginas": "pág. 269",
      "pagina_inicio": 269,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Vanguardias y manifiestos",
      "paginas": "pág. 270",
      "pagina_inicio": 270,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Posvanguardias y rupturas",
      "paginas": "pág. 272",
      "pagina_inicio": 272,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Figuras retóricas literarias en las artes performativas y visuales",
      "paginas": "pág. 275",
      "pagina_inicio": 275,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Metáfora",
      "paginas": "pág. 276",
      "pagina_inicio": 276,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Hipérbole",
      "paginas": "pág. 277",
      "pagina_inicio": 277,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Sinécdoque",
      "paginas": "pág. 278",
      "pagina_inicio": 278,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Aliteración",
      "paginas": "pág. 278",
      "pagina_inicio": 278,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Comparación",
      "paginas": "pág. 280",
      "pagina_inicio": 280,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Personificación",
      "paginas": "pág. 281",
      "pagina_inicio": 281,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Géneros donde se expresa el arte",
      "paginas": "pág. 282",
      "pagina_inicio": 282,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Géneros artísticos",
      "paginas": "pág. 283",
      "pagina_inicio": 283,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Devenir histórico y social de los géneros artísticos",
      "paginas": "pág. 284",
      "pagina_inicio": 284,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "La originalidad en el arte",
      "paginas": "pág. 286",
      "pagina_inicio": 286,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "El simbolismo en el arte",
      "paginas": "pág. 287",
      "pagina_inicio": 287,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Técnicas artísticas, comunidad y siglo xxi",
      "paginas": "pág. 289",
      "pagina_inicio": 289,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Técnicas de impresión",
      "paginas": "pág. 290",
      "pagina_inicio": 290,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cerámica",
      "paginas": "pág. 293",
      "pagina_inicio": 293,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Vestimenta",
      "paginas": "pág. 295",
      "pagina_inicio": 295,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Orfebrería",
      "paginas": "pág. 297",
      "pagina_inicio": 297,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Serigrafía",
      "paginas": "pág. 298",
      "pagina_inicio": 298,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Joyería",
      "paginas": "pág. 299",
      "pagina_inicio": 299,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Arte con madera",
      "paginas": "pág. 300",
      "pagina_inicio": 300,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Tierras (Land art o Earth art )",
      "paginas": "pág. 302",
      "pagina_inicio": 302,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Apropiación artística y evolución cultural",
      "paginas": "pág. 303",
      "pagina_inicio": 303,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Prácticas artísticas",
      "paginas": "pág. 304",
      "pagina_inicio": 304,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Cosmogonía de México",
      "paginas": "pág. 304",
      "pagina_inicio": 304,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "México: semillero de artes desde los orígenes",
      "paginas": "pág. 306",
      "pagina_inicio": 306,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Juegos desde lo simbólico",
      "paginas": "pág. 309",
      "pagina_inicio": 309,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Relatos fantásticos de la comunidad",
      "paginas": "pág. 310",
      "pagina_inicio": 310,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Relatos mágicos de la comunidad",
      "paginas": "pág. 311",
      "pagina_inicio": 311,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Representaciones comunitarias: voz, escritura, entre otras",
      "paginas": "pág. 312",
      "pagina_inicio": 312,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Créditos bibliográficos",
      "paginas": "pág. 314",
      "pagina_inicio": 314,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "Créditos iconográficos",
      "paginas": "pág. 316",
      "pagina_inicio": 316,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Lenguajes (3°)",
      "campo": "Lenguajes",
      "tema_o_proyecto": "¡Expresamos nuestras ideas para ejercer nuestros derechos!",
      "paginas": "pág. 319",
      "pagina_inicio": 319,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Múltiples Lenguajes (3°)",
      "campo": "Múltiples Lenguajes",
      "tema_o_proyecto": "Árbol sagrado: La ceiba",
      "paginas": "pág. 36",
      "pagina_inicio": 36,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Múltiples Lenguajes (3°)",
      "campo": "Múltiples Lenguajes",
      "tema_o_proyecto": "V aca alegre 6 Partenogénesis 10 Criptografía 14 Así nació la noche 17 Sueños de José 18 Parejas primigenias 22 Ñuhu: descendientes de 9 Lagarto y 5 Viento son espíritus de la Tierra y dueños de los lugares 23 Cabo Pulmo: una selva acuática excepcional 24 Cortometrajes 26 Hipatia de Alejandría 28 Mujeres 30 La Armada Nacional consolida la Independencia de México",
      "paginas": "pág. 34",
      "pagina_inicio": 34,
      "resumen": ""
    },
    {
      "grado": "3° de Secundaria",
      "libro": "Múltiples Lenguajes (3°)",
      "campo": "Múltiples Lenguajes",
      "tema_o_proyecto": "Anfípodos 102 Esponjas 103 A Vanegas Arroyo 104 Como el barco de Fitzcarraldo 112 La verdadera historia de la muerte de un planeta 114 Las otras vidas de Ychi 118 Los celos no son amor 122 El jardín de las delicias",
      "paginas": "pág. 128",
      "pagina_inicio": 128,
      "resumen": ""
    }
  ]
};

/**
 * Normaliza el grado escolar ingresado por el docente para mapear a '1', '2' o '3'
 */
export function normalizeSecundariaGrade(gradoInput?: string): '1' | '2' | '3' | null {
  if (!gradoInput) return null;
  const lower = gradoInput.toLowerCase();
  if (lower.includes('1') || lower.includes('primer') || lower.includes('1°') || lower.includes('1ro') || lower.includes('1er')) {
    return '1';
  }
  if (lower.includes('2') || lower.includes('segund') || lower.includes('2°') || lower.includes('2do')) {
    return '2';
  }
  if (lower.includes('3') || lower.includes('tercer') || lower.includes('3°') || lower.includes('3ro') || lower.includes('3er')) {
    return '3';
  }
  return null;
}

/**
 * Busca y clasifica los libros y páginas más idóneas según el diagnóstico específico del docente
 */
export function findRecommendedBooks(gradoInput?: string, diagnostico?: string, limit: number = 6): LibroItem[] {
  const gradeKey = normalizeSecundariaGrade(gradoInput);
  if (!gradeKey) {
    return [];
  }

  const catalog = SECUNDARIA_BOOKS_CATALOG[gradeKey] || [];
  if (!diagnostico || diagnostico.trim().length < 5) {
    // Retornar proyectos representativos del grado
    return catalog.slice(0, limit);
  }

  const diag = diagnostico.toLowerCase();
  // Palabras clave de al menos 4 caracteres excluyendo conectores
  const stopWords = new Set(['para', 'como', 'este', 'esta', 'estos', 'estas', 'entre', 'sobre', 'desde', 'hacia', 'tiene', 'tienen', 'existe', 'existen', 'muestra', 'muestran', 'donde', 'cuando', 'alumnos', 'estudiantes', 'escuela', 'grupo', 'comunidad', 'problemática', 'problema']);
  const words = (diag.match(/[a-záéíóúñ]{4,}/g) || []).filter(w => !stopWords.has(w));

  const scored = catalog.map(item => {
    let score = 0;
    const haystack = `${item.tema_o_proyecto} ${item.resumen || ''} ${item.campo} ${item.libro}`.toLowerCase();

    for (const w of words) {
      if (haystack.includes(w)) {
        score += 3;
      } else if (haystack.includes(w.substring(0, 4))) {
        score += 1.5;
      }
    }

    // Impulsos temáticos clave
    if (diag.includes('agua') || diag.includes('arroyo') || diag.includes('río') || diag.includes('basura') || diag.includes('contaminac') || diag.includes('medio ambiente')) {
      if (haystack.includes('agua') || haystack.includes('residuo') || haystack.includes('contaminaci') || haystack.includes('ecosistema') || haystack.includes('sustentab')) {
        score += 8;
      }
    }

    if (diag.includes('violencia') || diag.includes('acoso') || diag.includes('conflicto') || diag.includes('agres') || diag.includes('paz') || diag.includes('convivencia')) {
      if (haystack.includes('conflicto') || haystack.includes('paz') || haystack.includes('conviven') || haystack.includes('violencia') || haystack.includes('derecho') || haystack.includes('dignidad')) {
        score += 8;
      }
    }

    if (diag.includes('matemát') || diag.includes('álgebra') || diag.includes('fraccion') || diag.includes('número') || diag.includes('cálculo') || diag.includes('gráfi')) {
      if (haystack.includes('matemát') || haystack.includes('número') || haystack.includes('ecuaci') || haystack.includes('álgebra') || haystack.includes('gráfi') || haystack.includes('triángulo')) {
        score += 8;
      }
    }

    if (diag.includes('comida') || diag.includes('alimento') || diag.includes('chatarra') || diag.includes('obesidad') || diag.includes('salud') || diag.includes('nutrici') || diag.includes('adicci') || diag.includes('droga')) {
      if (haystack.includes('alimenta') || haystack.includes('nutrici') || haystack.includes('salud') || haystack.includes('obes') || haystack.includes('adicci') || haystack.includes('nervioso') || haystack.includes('cuerpo')) {
        score += 8;
      }
    }

    if (diag.includes('lectura') || diag.includes('comprensión') || diag.includes('escritura') || diag.includes('redacción') || diag.includes('oral') || diag.includes('lengua')) {
      if (haystack.includes('lectura') || haystack.includes('comprensión') || haystack.includes('lengua') || haystack.includes('texto') || haystack.includes('palabra') || haystack.includes('narraci')) {
        score += 8;
      }
    }

    // Priorizar proyectos integradores si tienen buen score
    if (item.libro.includes('Nuestro libro de proyectos') && score > 0) {
      score += 2;
    }

    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const results: LibroItem[] = [];
  const seenLibros = new Set<string>();

  for (const s of scored) {
    if (s.score <= 0 && results.length >= 3) break;
    // Evitar que todos los resultados sean del mismo libro para dar variedad
    results.push(s.item);
    if (results.length >= limit) break;
  }

  return results.length > 0 ? results : catalog.slice(0, limit);
}
