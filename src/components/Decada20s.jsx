import { NotihistoricoLayout } from './NotihistoricoLayout';
import './Decada20s.css';

// ── Imágenes ──────────────────────────────────────────────────────
import imgCovid    from '../assets/2020s/imagenes/covid19-colombia-2020.png';
import imgParo     from '../assets/2020s/imagenes/paro-nacional-2021.png';
import imgPetro    from '../assets/2020s/imagenes/elecciones-petro-2022.png';
import imgPaz      from '../assets/2020s/imagenes/paz-total-2022-2024.png';
import imgColombia from '../assets/2020s/imagenes/colombia-hoy-2024-2026.png';

// ── Audios ────────────────────────────────────────────────────────
import audio1 from '../assets/2020s/audio/1.mp3';
import audio2 from '../assets/2020s/audio/2.mp3';
import audio3 from '../assets/2020s/audio/3.mp3';
import audio4 from '../assets/2020s/audio/4.mp3';
import audio5 from '../assets/2020s/audio/5.mp3';
// TODO: agregar audio6.mp3 y audio7.mp3 a src/assets/2020s/audio/
const audio6 = audio5;
const audio7 = audio5;

// ─────────────────────────────────────────────────────────────────
// DATOS — Hitos históricos Colombia 2020–2026
// ─────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1,
    year: 'Intro',
    title: 'El Año en que el Mundo Se Detuvo',
    shortDesc: 'La pandemia del COVID-19 paraliza Colombia y profundiza sus desigualdades.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Muy buenas noches, Colombia. Bienvenidos a HistoStream, el canal donde la historia va en vivo. ' +
      'Esta noche abrimos emisión especial viajando al año 2020, cuando el mundo entero se vio sacudido por la pandemia del COVID-19.\n\n' +
      'El 6 de marzo de 2020, Colombia confirma su primer caso de coronavirus en Bogotá. ' +
      'En cuestión de días, el gobierno del presidente Iván Duque decreta la cuarentena obligatoria más estricta de América Latina. ' +
      'Por primera vez en la historia moderna del país, las calles se vacían.\n\n' +
      'Los hospitales se preparan para lo peor. Los ventiladores se convierten en el bien más escaso del mundo. ' +
      'Las cifras de desempleo se disparan al 21%. ' +
      'Millones de colombianos que vivían de la economía informal se quedan sin ingresos de un día para el otro.\n\n' +
      'La pandemia no solo cobra vidas —más de 130 mil fallecidos en Colombia— sino que profundiza las desigualdades estructurales del país. ' +
      'Una crisis sanitaria que se convierte también en crisis social, económica y política.',
    images: [imgCovid],
    audioSrc: audio1,
    sfxSrc: '',
    datoClave: '2020 · COVID-19 · Cuarentena obligatoria en Colombia',
    fichaLineas: [
      'Fecha: 6 marzo 2020 (1er caso)',
      'Presidente: Iván Duque',
      'Medida: Cuarentena obligatoria',
      'Fallecidos: +130.000',
      'Desempleo: 21% (pico 2020)',
    ],
    color: '#1a4a7a',
  },
  {
    id: 2,
    year: '2021',
    title: '28A: Colombia Explota en las Calles',
    shortDesc: 'El Paro Nacional se convierte en el mayor estallido social de la historia reciente.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'El 28 de abril de 2021, Colombia despierta con un paro nacional que nadie esperaba de esta magnitud. ' +
      'Lo que comienza como una protesta contra una reforma tributaria del gobierno Duque se convierte rápidamente ' +
      'en el estallido social más grande de las últimas décadas.\n\n' +
      'En Bogotá, Cali, Medellín, Barranquilla y decenas de ciudades intermedias, millones de personas toman las calles. ' +
      'Estudiantes, trabajadores, indígenas, campesinos, artistas. La consigna es una sola: ¡Colombia está en paro!\n\n' +
      'Cali se convierte en el epicentro de la resistencia. Durante semanas, el barrio de Puerto Resistencia ' +
      'y la llamada "primera línea" mantienen los bloqueos. ' +
      'Las imágenes de jóvenes con escudos artesanales enfrentando al ESMAD recorren el mundo.\n\n' +
      'Las cifras son dolorosas: más de 80 personas fallecidas, denuncias de violencia policial, ' +
      'decenas de casos de violencia sexual documentados. ' +
      'El gobierno retira la reforma tributaria, pero el fuego social sigue ardiendo.',
    images: [imgParo],
    audioSrc: audio2,
    sfxSrc: '',
    datoClave: '2021 · Paro Nacional · 28 de abril · Estallido Social',
    fichaLineas: [
      'Fecha inicio: 28 abril 2021',
      'Detonante: Reforma tributaria Duque',
      'Epicentro: Cali — Puerto Resistencia',
      'Fallecidos: +80 personas',
      'Resultado: Retiro de la reforma',
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
    title: 'Paz Total: La Apuesta más Arriesgada',
    shortDesc: 'Petro negocia simultáneamente con el ELN y las FARC disidentes. ¿Audacia o ingenuidad?',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Una de las apuestas más ambiciosas y polémicas del gobierno Petro fue su política de "Paz Total": ' +
      'la intención de negociar simultáneamente con todos los grupos armados que operan en el territorio colombiano.\n\n' +
      'Los diálogos con el ELN avanzaron lentamente entre Colombia y Cuba. ' +
      'En enero de 2023 se anunció un cese al fuego bilateral que generó esperanzas, pero también escepticismo. ' +
      'Las negociaciones se frenaron y reanudaron varias veces.\n\n' +
      'Con las disidencias de las FARC el proceso fue más turbulento. ' +
      'Los diálogos se interrumpieron en repetidas ocasiones por ataques y violaciones al cese al fuego ' +
      'en regiones como Caquetá y Putumayo.\n\n' +
      'La Paz Total se convirtió en el símbolo de las contradicciones del gobierno Petro: ' +
      'una apuesta audaz por el fin del conflicto, pero con resultados concretos que tardaron en materializarse.',
    images: [imgPaz],
    audioSrc: audio4,
    sfxSrc: '',
    datoClave: '2022–2024 · Paz Total · ELN y FARC disidentes',
    fichaLineas: [
      'Política: Paz Total (gobierno Petro)',
      'Actores: ELN, FARC disidentes',
      'Escenarios: Cuba, Venezuela, México',
      'Obstáculo: Violaciones cese al fuego',
      'Estado 2024: Proceso activo',
    ],
    color: '#5a3e00',
  },
];

const HITOS_RIGHT = [
  {
    id: 5,
    year: '2024–2025',
    title: 'Reformas en Llamas: El Gobierno contra el Congreso',
    shortDesc: 'Las reformas a la salud, pensiones y trabajo fracturan la política colombiana.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Desde el inicio de su mandato, el gobierno Petro intentó transformar las bases del Estado colombiano. ' +
      'Las reformas a la salud, las pensiones y el trabajo se convirtieron en el campo de batalla político más intenso de la década.\n\n' +
      'La reforma a la salud fue la más polémica: buscaba eliminar las EPS y crear un sistema administrado directamente por el Estado. ' +
      'El sector médico, las clínicas privadas y gran parte del Congreso se opusieron con fuerza. ' +
      'El debate dividió al país entre quienes veían un sistema de salud roto que necesitaba cambio radical ' +
      'y quienes advertían que la reforma podría colapsar la atención médica.\n\n' +
      'La reforma pensional también generó alarma en sectores económicos. ' +
      'Mientras tanto, ministros renunciaban, escándalos salpicaban al gobierno y la popularidad de Petro caía mes a mes.\n\n' +
      'Colombia vivía una paradoja: el presidente con más votos de la historia enfrentando uno de los gobiernos con más dificultades para gobernar.',
    images: [imgColombia],
    audioSrc: audio5,
    sfxSrc: '',
    datoClave: '2024–2025 · Reformas · Crisis política del gobierno Petro',
    fichaLineas: [
      'Reformas: Salud, pensiones, trabajo',
      'Obstáculo: Congreso y sectores privados',
      'Crisis: Múltiples renuncias de ministros',
      'Popularidad: Caída sostenida',
      'Debate: Transformación vs estabilidad',
    ],
    color: '#6a1a6a',
  },
  {
    id: 6,
    year: '2026',
    title: 'El Congreso Decide: Elecciones Legislativas',
    shortDesc: 'Las urnas hablan antes de la presidencial. Colombia elige el Congreso que definirá el futuro.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Las elecciones al Congreso de 2026 se convirtieron en el primer gran termómetro político de la era post-Petro. ' +
      'Con el mandato presidencial llegando a su fin, los colombianos fueron llamados a elegir ' +
      'los 296 congresistas que gobernarán el legislativo durante el próximo período.\n\n' +
      'La jornada electoral estuvo marcada por una pregunta que todos se hacían: ' +
      '¿quién va ganando la batalla por el corazón político del país?\n\n' +
      'Los resultados mostraron un Congreso fragmentado, sin mayorías claras, ' +
      'con fuerzas de centro, derecha e izquierda disputándose cada curul. ' +
      'El petrismo perdió terreno respecto a 2022. Los partidos tradicionales mostraron resiliencia. ' +
      'Y nuevas fuerzas emergieron aprovechando el descontento ciudadano.\n\n' +
      'Un Congreso fragmentado significa que el próximo presidente, sea quien sea, ' +
      'tendrá que negociar y ceder para poder gobernar. Colombia eligió la complejidad.',
    images: [imgCovid],
    audioSrc: audio6,
    sfxSrc: '',
    datoClave: '2026 · Elecciones legislativas · Congreso fragmentado',
    fichaLineas: [
      'Fecha: Marzo 2026',
      'Cargos: 108 senadores + 188 representantes',
      'Resultado: Congreso sin mayorías claras',
      'Ganador relativo: Partidos de centro',
      'Señal: Desgaste del petrismo',
    ],
    color: '#1a3a6a',
  },
  {
    id: 7,
    year: 'Cierre',
    title: '2026: Colombia en Vilo — Primera Vuelta y la Gran Fractura',
    shortDesc: 'La primera vuelta presidencial de 2026 parte al país en dos. La segunda vuelta, pendiente.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Y así llegamos al momento que tiene a Colombia entera con la respiración contenida. ' +
      'La primera vuelta de las elecciones presidenciales de 2026 dejó un resultado que nadie puede ignorar: ' +
      'el país está roto en dos, y la segunda vuelta lo definirá todo.\n\n' +
      'La polarización que venía creciendo desde el estallido social de 2021, ' +
      'que se profundizó en las elecciones de 2022 y que se intensificó con cada reforma del gobierno Petro, ' +
      'alcanzó su punto más alto en esta campaña.\n\n' +
      'Las redes sociales ardieron con desinformación, los debates se llenaron de insultos, ' +
      'las familias se dividieron en las mesas y los grupos de WhatsApp. ' +
      'Colombia no discutía solo sobre candidatos: discutía sobre qué país quería ser.\n\n' +
      'Los dos candidatos que pasaron a segunda vuelta representan visiones radicalmente distintas del futuro. ' +
      'Y mientras grabamos esta emisión, Colombia espera. Tensa. Dividida. Pero viva.\n\n' +
      'Esto es historia en tiempo real. Hasta aquí HistoStream. Buenas noches, Colombia.',
    images: [imgPetro],
    audioSrc: audio7,
    sfxSrc: '',
    datoClave: '2026 · Primera vuelta presidencial · Polarización extrema',
    fichaLineas: [
      'Fecha: Mayo 2026',
      'Contexto: Fin del gobierno Petro',
      'Característica: Máxima polarización',
      'Estado: Segunda vuelta pendiente',
      'En juego: El rumbo de Colombia',
    ],
    color: '#8a1a1a',
  },
];

export const Decada20s = () => {
  return (
    <NotihistoricoLayout
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