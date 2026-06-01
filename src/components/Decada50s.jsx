import { NotihistoricoLayout } from './NotihistoricoLayout';

//importación de audios para los hitos
import audio1 from '../assets/50s/audio/audio1.mp3';
import audio2 from '../assets/50s/audio/audio2.mp3';
import audio3 from '../assets/50s/audio/audio3.mp3';
import audio6 from '../assets/50s/audio/audio6.mp3';

//importación de imágenes para los hitos
//la violecioa bipartidista, el golpe de opinión, la llegada de la televisión, el paro cívico, la junta militar, el plebiscito y el frente nacional
import img1_1 from '../assets/50s/imagenes/img_1.png';
import img1_2 from '../assets/50s/imagenes/img_2.png';
import img1_3 from '../assets/50s/imagenes/img_3.png';
//gustavo rojas pinilla, golpe de opinión, televisión, paro cívico, junta militar, plebiscito, frente nacional
import img2_1 from '../assets/50s/imagenes/img_4.png';
import img2_2 from '../assets/50s/imagenes/img_5.png';
import img2_3 from '../assets/50s/imagenes/img_6.png';
import img2_4 from '../assets/50s/imagenes/img_7.png';
import img2_5 from '../assets/50s/imagenes/img_8.png';
import img2_6 from '../assets/50s/imagenes/img_9.png';
//caida de rojas pinilla, paro cívico, junta militar, plebiscito, frente nacional
import img3_1 from '../assets/50s/imagenes/img_10.png';
import img3_2 from '../assets/50s/imagenes/img_11.png';
import img3_3 from '../assets/50s/imagenes/img_12.png';

const HITOS_LEFT = [
  {
    id: 1,
    year: '1950',
    title: 'Laureano Gómez asume la presidencia',
    shortDesc: 'El gobierno conservador profundiza la polarización política hasta niveles sin precedentes.',
    guion: `Una década en la que Colombia ardió en los campos por el odio partidista, entregó el poder a las fuerzas militares y, en medio del caos, vio encenderse por primera vez la magia de la televisión.
            Esta es la historia de una sociedad fracturada que intentó apagar el fuego de "La Violencia" con un golpe de Estado y terminó firmando un pacto que cambiaría la política nacional para siempre`,
    images: [img1_1, img1_2, img1_3],
    audioSrc: audio1,
    sfxSrc: '',
    datoClave: 'Inicio oficial de la era Gómez',
    fichaLineas: [
      'Fecha: 7 de agosto de 1950',
      'Presidente: Laureano Gómez',
      'Contexto: Posguaitanismo y La Violencia',
      'Partido: Conservador',
    ],
    color: '#CE1126',
  },
  {
    id: 3,
    year: '1953',
    title: 'El Golpe de Opinión de Rojas Pinilla',
    shortDesc: 'El General toma el poder de noche, sin disparar un solo tiro, con enorme respaldo popular.',
    guion: `Ante el abismo, la violencia y la extrema polarización, las élites políticas lideradas por el General Gustavo Rojas Pinilla toman una decisión drástica. El 13 de junio de 1953 Rojas Pinilla se toma el palacio presidencial por la noche, de manera pacífica, sin disparar una sola bala pero con un inmenso apoyo político, el General asume la presidencia esa misma noche. 
            Recordaremos este evento como un ‘Golpe de Opinión’
            El país, exhausto de la guerra civil, lo recibe con esperanza. Las guerrillas liberales del Llano, lideradas por Guadalupe Salcedo, entregan sus armas bajo la promesa de una amnistía general. Por un breve momento, la paz parece posible.
            Y justo un año después, el 13 de junio de 1954, el gobierno militar le entrega al país un milagro moderno.”
            “Llega la televisión a Colombia. En blanco y negro, las familias se reúnen alrededor de esta caja mágica. El Estado busca educar, entretener y, por supuesto, consolidar su imagen frente a las masas.
            Pero la luna de miel dura muy poco`,
    images: [img2_1, img2_2, img2_3, img2_5, img2_6],
    audioSrc: audio2,
    sfxSrc: '',
    datoClave: '"Golpe de Opinión" — sin un solo disparo',
    fichaLineas: [
      'Fecha: 13 de junio de 1953',
      'Actor: Gral. Gustavo Rojas Pinilla',
      'Tipo: Golpe de Estado pacífico',
      'Efecto: Amnistía a guerrillas liberales del Llano',
    ],
    color: '#003893',
  },
  {
    id: 5,
    year: '1957',
    title: 'Caída de Rojas Pinilla y Junta Militar',
    shortDesc: 'Un paro cívico nacional sin precedentes obliga al General a renunciar el 10 de mayo.',
    guion: `El 10 de mayo de 1957, un gigantesco paro cívico nacional paraliza al país. Empresarios, la Iglesia, 
    los estudiantes y los mismos partidos tradicionales que subieron a Rojas Pinilla al poder se unen para exigir su salida. 
    Sin más opciones y sin respaldo, el General renuncia y entrega el poder a una Junta Militar de Transición. 
    Colombia se prepara para rediseñar su futuro desde cero.`,
    images: [img3_1, img3_2, img3_3],
    audioSrc: audio3,
    sfxSrc: '',
    datoClave: 'Paro cívico del 10 de mayo de 1957',
    fichaLineas: [
      'Fecha: 10 de mayo de 1957',
      'Causa: Paro cívico nacional',
      'Resultado: Renuncia de Rojas Pinilla',
      'Sucesión: Junta Militar de Transición',
    ],
    color: '#CE1126',
  },
];

const HITOS_RIGHT = [ 
  //no recursos encontrados para este hito, por eso se dejan vacíos los arrays de imágenes y audios
  {
    id: 2,
    year: '1952',
    title: 'Incendio de la prensa liberal en Bogotá',
    shortDesc: 'Turbas enardecidas queman las sedes de El Tiempo y El Espectador el 6 de septiembre.',
    guion: `El 6 de septiembre de 1952, las llamas se prenden en Bogotá consumiendo las sedes de los diarios 
    liberales El Tiempo y El Espectador, incendiadas por turbas enardecidas. La intolerancia política 
    amenaza con destruir las instituciones del país. El gobierno de Laureano Gómez parece haber perdido por completo el control. 
    La violencia que ardía en los campos colombianos llega finalmente al corazón de la capital.`,
    images: [],
    audioSrc: '',
    sfxSrc: '',
    datoClave: 'El Tiempo y El Espectador en llamas',
    fichaLineas: [
      'Fecha: 6 de septiembre de 1952',
      'Lugar: Bogotá, D.C.',
      'Víctimas: Diarios liberales El Tiempo y El Espectador',
      'Causa: Turbas de filiación conservadora',
    ],
    color: '#F4A900',
  },
  {
    id: 4, //no audios ni imágenes encontrados para este hito, por eso se dejan vacíos los arrays de imágenes y audios
    year: '1954',
    title: 'Llega la televisión — y la represión estudiantil',
    shortDesc: 'El 13 de junio Colombia estrena la TV; días después el Ejército reprime y mata a universitarios.',
    guion: `El 13 de junio de 1954, el gobierno militar le entrega al país un milagro moderno: llega la televisión a Colombia. 
    En blanco y negro, las familias se reúnen alrededor de esta caja mágica. El Estado busca educar, entretener y consolidar su
     imagen frente a las masas. Pero la luna de miel dura muy poco. El 8 y 9 de junio, estudiantes universitarios que marchaban 
     en Bogotá son reprimidos duramente por el Ejército. Varios jóvenes caen muertos. El gobierno de Rojas Pinilla comienza 
     a mostrar una cara cada vez más autoritaria.`,
    images: [img3_1],
    audioSrc: '',
    sfxSrc: '',
    datoClave: 'Primer día de televisión en Colombia: 13 jun 1954',
    fichaLineas: [
      'Fecha TV: 13 de junio de 1954',
      'Fechas represión: 8 y 9 de junio de 1954',
      'Lugar: Bogotá, D.C.',
      'Hecho: Estudiantes muertos por el Ejército',
    ],
    color: '#003893',
  },
  {
    id: 6,
    year: '1957',
    title: 'Plebiscito y nacimiento del Frente Nacional',
    shortDesc: 'Por primera vez las mujeres votan en Colombia para aprobar el pacto bipartidista del Frente Nacional.',
    guion: `El 1 de diciembre de 1957, los colombianos acuden a las urnas para votar un Plebiscito Histórico. 
    Por primera vez en la historia de Colombia, las mujeres ejercen su derecho al voto. 
    Sus voces se suman a las de millones para aprobar un pacto inaudito: el Frente Nacional. 
    Liberales y conservadores acuerdan perdonarse, alternarse la presidencia cada cuatro años y repartirse el poder 
    institucional por mitades exactas para acabar de una vez por todas con la violencia partidista. El pacto trae calma a las ciudades, 
    pero en las montañas más alejadas, campesinos e intelectuales excluidos comienzan a organizarse en silencio… sentando las bases de una nueva guerra.`,
    images: [],
    audioSrc: 'audio6',
    sfxSrc: '',
    datoClave: 'Primer voto femenino en la historia de Colombia',
    fichaLineas: [
      'Fecha: 1 de diciembre de 1957',
      'Hito: Primer sufragio femenino en Colombia',
      'Resultado: Aprobación del Frente Nacional',
      'Acuerdo: Alternancia presidencial liberal-conservadora',
    ],
    color: '#2E7D32',
  },
];

export const Decada50s = () => {
  return (
    <NotihistoricoLayout
      chapterIndex="1"
      period="1950 — 1959"
      subtitle="La Violencia y el Frente Nacional"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 1950–1959"
      cdLabel="Cinta"
      themeClass="theme-50s"
    />
  );
};
