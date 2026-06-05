import { NotihistoricoLayout20s } from './NotihistoricoLayout20s';
import './Decada20s.css';

// ── Imágenes ──────────────────────────────────────────────────────
import imgCovid    from '../../assets/2020s/imagenes/Covid19.png';
import imgParo     from '../../assets/2020s/imagenes/ParoNacional.png';
import imgPetro    from '../../assets/2020s/imagenes/LlegadaPetro.png';
import imgPaz      from '../../assets/2020s/imagenes/PazTotal.png';
import imgReformas from '../../assets/2020s/imagenes/ReformasDebates.png';
import imgCongreso from '../../assets/2020s/imagenes/EleccionesCongreso.png';
import imgElecciones from '../../assets/2020s/imagenes/PrimeraVuelta.jpg';


// ── Audios ────────────────────────────────────────────────────────
import audio1 from '../../assets/2020s/audio/1.mp3';
import audio2 from '../../assets/2020s/audio/2.mp3';
import audio3 from '../../assets/2020s/audio/3.mp3';
import audio4 from '../../assets/2020s/audio/4.mp3';
import audio5 from '../../assets/2020s/audio/5.mp3';
import audio6 from '../../assets/2020s/audio/6.mp3';
import audio7 from '../../assets/2020s/audio/7.mp3';

// ─────────────────────────────────────────────────────────────────
// DATOS — Hitos históricos Colombia 2020–2026
// ─────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
  id: 1,
  year: '2020',
  title: 'El Año en que el Mundo Se Detuvo',
  shortDesc: 'La pandemia del COVID-19 transformó la vida de millones de colombianos.',
  guion:
    'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
    'Muy buenas noches, Colombia. Bienvenidos a HistoStream, el canal donde la historia va en vivo. ' +
    'Esta noche viajamos al año 2020, cuando la pandemia del COVID-19 transformó la vida de millones de personas en todo el planeta.\n\n' +
    'El 6 de marzo de 2020, Colombia confirmó su primer caso de coronavirus en Bogotá. ' +
    'Días después, el gobierno de Iván Duque declaró la emergencia sanitaria y decretó una cuarentena nacional. ' +
    'Por primera vez en décadas, las calles de las principales ciudades quedaron prácticamente vacías.\n\n' +
    'Los hospitales se prepararon para enfrentar una crisis sin precedentes. ' +
    'La disponibilidad de camas UCI, ventiladores y personal médico se convirtió en una preocupación constante. ' +
    'Mientras tanto, la economía sufrió un fuerte impacto: el desempleo alcanzó niveles históricos y millones de colombianos vieron reducidos o perdidos sus ingresos.\n\n' +
    'Con el paso de los meses llegaron las restricciones, las campañas de vacunación y el lento retorno a la normalidad. ' +
    'Sin embargo, el costo humano fue enorme. Más de 140 mil personas fallecieron en Colombia a causa del COVID-19.\n\n' +
    'La pandemia dejó una huella profunda en la sociedad colombiana y marcó el inicio de una década que cambiaría el rumbo político, económico y social del país.',
  images: [imgCovid],
  audioSrc: audio1,
  sfxSrc: '',
  datoClave: '2020 · COVID-19 · Emergencia sanitaria y cuarentena nacional',
  fichaLineas: [
    'Fecha: 6 marzo 2020 (primer caso)',
    'Presidente: Iván Duque',
    'Medida: Emergencia sanitaria y cuarentena',
    'Fallecidos: +140.000',
    'Desempleo: 21% (pico de 2020)',
  ],
  color: '#1a4a7a',
},
{
  id: 2,
  year: '2021',
  title: '28A: El Estallido Social',
  shortDesc: 'El Paro Nacional de 2021 marca uno de los mayores ciclos de protesta de la historia reciente.',
  guion:
    'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
    'El 28 de abril de 2021, Colombia entró en uno de los periodos de movilización social más intensos de su historia reciente. ' +
    'Lo que comenzó como una protesta contra una reforma tributaria propuesta por el gobierno de Iván Duque pronto se transformó en un movimiento mucho más amplio, impulsado por el descontento acumulado frente a problemas económicos, sociales y políticos.\n\n' +
    'En Bogotá, Cali, Medellín, Barranquilla y decenas de ciudades y municipios, millones de personas participaron en marchas, concentraciones y manifestaciones que se extendieron durante semanas. ' +
    'Jóvenes, estudiantes, trabajadores, comunidades indígenas y organizaciones sociales se convirtieron en protagonistas de las jornadas.\n\n' +
    'Cali fue uno de los principales epicentros de la protesta. Lugares como Puerto Resistencia adquirieron relevancia nacional, mientras la llamada "primera línea" ocupaba un lugar central en las imágenes que recorrían el país y el mundo.\n\n' +
    'Las manifestaciones estuvieron marcadas por enfrentamientos, bloqueos, daños a la infraestructura, denuncias de abuso policial, personas fallecidas y cientos de heridos. ' +
    'La presión social llevó al retiro de la reforma tributaria y a la renuncia del ministro de Hacienda.\n\n' +
    'Aunque las protestas fueron perdiendo intensidad con el paso de los meses, el paro nacional de 2021 dejó una huella profunda en la política colombiana y se convirtió en uno de los antecedentes más importantes de las elecciones que transformarían el país al año siguiente.',
  images: [imgParo],
  audioSrc: audio2,
  sfxSrc: '',
  datoClave: '2021 · Paro Nacional · Movilización social a escala nacional',
  fichaLineas: [
    'Fecha inicio: 28 abril 2021',
    'Detonante: Reforma tributaria',
    'Epicentro: Cali — Puerto Resistencia',
    'Consecuencias: Fallecidos y cientos de heridos',
    'Resultado: Retiro de la reforma tributaria',
  ],
  color: '#7a1a1a',
},
  {
    id: 3,
    year: '2022',
    title: 'La Historia Cambia de Bando: Llega Petro',
    shortDesc: 'Colombia elige por primera vez un presidente de izquierda. Una era termina, otra comienza.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'El 19 de junio de 2022, Colombia escribió una página nueva en su historia. ' +
      'Por primera vez desde que existe la república, un candidato de izquierda llegó a la Casa de Nariño. ' +
      'Gustavo Petro fue elegido presidente con más de 11 millones de votos.\n\n' +
      'A su lado, Francia Márquez —lideresa afrodescendiente, defensora ambiental y activista de derechos humanos— ' +
      'se convirtió en la primera vicepresidenta afro de la historia colombiana.\n\n' +
      'La campaña estuvo marcada por la polarización extrema. ' +
      'El país quedó dividido: 50,4% para Petro, 47,3% para Rodolfo Hernández.\n\n' +
      'El 7 de agosto de 2022, en la Plaza de Bolívar, ante una multitud desbordante, ' +
      'Gustavo Petro recibió la banda presidencial. Colombia iniciaba una nueva era.',
    images: [imgPetro],
    audioSrc: audio3,
    sfxSrc: '',
    datoClave: '2022 · Gustavo Petro · Primer presidente de izquierda en Colombia',
    fichaLineas: [
      'Fecha: 19 junio 2022',
      'Presidente electo: Gustavo Petro',
      'Vicepresidenta: Francia Márquez',
      'Votos Petro: 11.281.013',
      'Resultado: 50,4% vs 47,3%',
    ],
    color: '#1a6a3a',
  },
{
  id: 4,
  year: '2022–2024',
  title: 'Paz Total: La Gran Apuesta',
  shortDesc: 'El gobierno busca negociar con distintos grupos armados para reducir la violencia y avanzar hacia la paz.',
  guion:
    'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
    'Una de las apuestas más ambiciosas del gobierno Petro fue la llamada "Paz Total": una estrategia que buscaba abrir negociaciones simultáneas con distintos grupos armados presentes en el territorio colombiano.\n\n' +
    'Los diálogos con el ELN atravesaron momentos de avance y de tensión. Durante 2023 se acordó un cese al fuego bilateral que despertó expectativas dentro y fuera del país. Sin embargo, desacuerdos, denuncias de incumplimientos y episodios de violencia dificultaron el ritmo de las conversaciones.\n\n' +
    'Con las disidencias de las FARC, el panorama también fue complejo. Los diálogos enfrentaron interrupciones, divisiones internas y problemas de seguridad en regiones como Caquetá, Putumayo y el Catatumbo.\n\n' +
    'Para sus defensores, la Paz Total representó un intento sin precedentes por buscar soluciones negociadas a conflictos que han afectado al país durante décadas. Para sus críticos, los avances fueron más lentos de lo esperado frente a la magnitud del desafío.\n\n' +
    'Al finalizar este periodo, la Paz Total seguía siendo uno de los proyectos más debatidos y representativos del gobierno Petro.',
  images: [imgPaz],
  audioSrc: audio4,
  sfxSrc: '',
  datoClave: '2022–2024 · Paz Total · Negociaciones con grupos armados',
  fichaLineas: [
    'Política: Paz Total',
    'Actores: ELN y disidencias de las FARC',
    'Herramienta: Mesas de diálogo y ceses al fuego',
    'Desafíos: Violencia y divisiones internas',
    'Balance: Avances y dificultades',
  ],
  color: '#5a3e00',
},
];

const HITOS_RIGHT = [
{
  id: 5,
  year: '2024–2025',
  title: 'Las Reformas que Dividieron el Debate',
  shortDesc: 'Las propuestas sobre salud, pensiones y trabajo dominaron la agenda política del país.',
  guion:
    'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
    'Desde el inicio de su mandato, el gobierno de Gustavo Petro impulsó una ambiciosa agenda de reformas destinada a transformar áreas clave del Estado colombiano. Las propuestas sobre salud, pensiones y trabajo se convirtieron rápidamente en el centro del debate político nacional.\n\n' +
    'La reforma a la salud fue la más controvertida. El gobierno planteó una profunda reorganización del sistema, reduciendo el papel de las EPS y fortaleciendo la intervención estatal. Sus defensores argumentaban que era necesaria para corregir problemas históricos de acceso y cobertura. Sus críticos advertían sobre posibles riesgos para la estabilidad y continuidad de la atención médica.\n\n' +
    'La reforma pensional también generó intensas discusiones entre economistas, empresarios, sindicatos y partidos políticos. Mientras tanto, el gobierno enfrentó renuncias ministeriales, tensiones dentro de su coalición y diversos escándalos que marcaron la agenda pública.\n\n' +
    'Con el paso de los años, la relación entre el Ejecutivo y el Congreso se volvió cada vez más compleja. Muchas de las reformas encontraron obstáculos políticos y negociaciones difíciles, reflejando las profundas diferencias existentes en el país.\n\n' +
    'Las reformas se convirtieron en uno de los temas centrales del gobierno Petro y en uno de los debates más importantes de la Colombia de la década de 2020.',
  images: [imgReformas],
  audioSrc: audio5,
  sfxSrc: '',
  datoClave: '2024–2025 · Reformas · Salud, pensiones y trabajo',
  fichaLineas: [
    'Reformas: Salud, pensiones y trabajo',
    'Debate: Papel del Estado y del sector privado',
    'Escenario: Congreso de la República',
    'Contexto: Tensiones políticas y cambios ministeriales',
    'Resultado: Amplio debate nacional',
  ],
  color: '#6a1a6a',
},
{
  id: 6,
  year: '2026',
  title: 'El Congreso Decide: Elecciones Legislativas',
  shortDesc: 'Las elecciones al Congreso de 2026 definieron el equilibrio político del país antes de la elección presidencial.',
  guion:
    'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
    'Las elecciones al Congreso de 2026 se convirtieron en el primer gran examen electoral del país tras casi cuatro años de gobierno de Gustavo Petro. ' +
    'Más de 20 millones de colombianos acudieron a las urnas para definir la composición del nuevo Congreso, encargado de acompañar al próximo presidente entre 2026 y 2030.\n\n' +
    'La gran pregunta de la jornada era si el petrismo mantendría su fuerza política o si los partidos de oposición recuperarían el terreno perdido durante los últimos años.\n\n' +
    'Los resultados dejaron un panorama complejo. ' +
    'El Pacto Histórico se consolidó como la principal fuerza individual del Senado, aumentando su votación y su número de curules frente a las elecciones de 2022. ' +
    'Sin embargo, ese crecimiento no fue suficiente para alcanzar una mayoría propia en el Congreso. ' +
    'Mientras tanto, el Centro Democrático también logró avanzar y fortalecerse como principal bloque opositor. ' +
    'Los partidos Liberal, Conservador, La U y otras colectividades tradicionales conservaron una presencia importante, aunque con menor peso relativo que en décadas anteriores.\n\n' +
    'El nuevo Congreso quedó profundamente fragmentado. ' +
    'Ninguna fuerza política tiene el control suficiente para imponer por sí sola sus proyectos o reformas. ' +
    'Esto significa que el próximo presidente deberá construir acuerdos, negociar con distintos sectores y formar coaliciones para gobernar.\n\n' +
    'La elección de 2026 dejó una conclusión clara: Colombia no eligió un Congreso dominado por una sola corriente política. ' +
    'Eligió un Congreso plural, dividido y obligado al diálogo, donde cada reforma importante dependerá de la capacidad de llegar a consensos.',
  images: [imgCongreso],
  audioSrc: audio6,
  sfxSrc: '',
  datoClave: '2026 · Congreso fragmentado · Necesidad de coaliciones',
  fichaLineas: [
    'Fecha: Marzo de 2026',
    'Participación: Más de 20 millones de votantes',
    'Fuerza principal: Pacto Histórico',
    'Principal oposición: Centro Democrático',
    'Resultado: Congreso plural y sin mayoría absoluta',
  ],
  color: '#1a3a6a',
},
 {
id: 7,
year: 'Cierre',
title: 'Primera Vuelta Presidencial de 2026',
shortDesc: 'Ningún candidato logró la victoria definitiva. Colombia se prepara para una segunda vuelta decisiva.',
guion:
'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
'Y así llegamos al momento que mantiene a Colombia pendiente de cada voto. ' +
'La primera vuelta de las elecciones presidenciales de 2026 dejó un resultado contundente: ningún candidato logró imponerse de forma definitiva, y será la segunda vuelta la que determine quién ocupará la Casa de Nariño durante los próximos cuatro años.\n\n' +
'La campaña estuvo marcada por un intenso debate político. ' +
'Las discusiones sobre seguridad, economía, salud, educación y el rumbo del país dominaron plazas, medios de comunicación y redes sociales. ' +
'En muchos hogares, universidades y lugares de trabajo, las elecciones se convirtieron en el tema central de conversación.\n\n' +
'Los dos candidatos que avanzaron a la segunda vuelta representan proyectos políticos distintos y buscarán convencer a millones de votantes aún indecisos. ' +
'El resultado final dependerá no solo de sus bases electorales, sino también de su capacidad para atraer nuevos apoyos en las semanas decisivas que vienen.\n\n' +
'Mientras tanto, Colombia espera. Expectante. Atenta. Con incertidumbre, pero también con la certeza de que está presenciando uno de los momentos políticos más importantes de los últimos años.\n\n' +
'Esto es historia en tiempo real. Hasta aquí NotiStream. Buenas noches, Colombia.',
images: [imgElecciones],
audioSrc: audio7,
sfxSrc: '',
datoClave: '2026 · Primera vuelta presidencial · Segunda vuelta pendiente',
fichaLineas: [
'Fecha: Mayo de 2026',
'Resultado: Ningún candidato alcanzó la mayoría necesaria',
'Estado: Segunda vuelta presidencial',
'Tema central: Seguridad, economía, salud y educación',
'En juego: La Presidencia 2026–2030',
],
color: '#8a1a1a',
},

];

export const Decada20s = () => {
  return (
    <NotihistoricoLayout20s
      chapterIndex="7"
      period="2020 — 2026"
      subtitle="Pandemia, estallido social y cambio político"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 2020–2026"
      cdLabel="Era Digital"
      themeClass="theme-20s"
      tag="20s"
    />
  );
};