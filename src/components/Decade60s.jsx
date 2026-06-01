
import './Decade90s.css';

// ── Imports de audio ──────────────────────────────────────────────────────────
import audio1 from '../assets/60s/audio/audio1.mp3';
import audio2 from '../assets/60s/audio/audio2.mp3';
import audio3 from '../assets/60s/audio/audio3.mp3';
import audio4 from '../assets/60s/audio/audio4.mp3';
import audio5 from '../assets/60s/audio/audio5.mp3';
import audio6 from '../assets/60s/audio/audio6.mp3';

// ── Imports de imágenes ───────────────────────────────────────────────────────

import img1_1 from '../assets/60s/imagenes/hito1_foto1.png';
import img2_1 from '../assets/60s/imagenes/hito2_foto1.png';
import img2_2 from '../assets/60s/imagenes/hito2_foto2.png';
import img3_1 from '../assets/60s/imagenes/hito3_foto1.png';
import img3_2 from '../assets/60s/imagenes/hito3_foto2.png';
import img4_1 from '../assets/60s/imagenes/hito4_foto1.png';
import img4_2 from '../assets/60s/imagenes/hito4_foto2.png';
import img5_1 from '../assets/60s/imagenes/hito5_foto1.png';
// ─────────────────────────────────────────────────────────────────────────────
// DATOS — idénticos al original
// ─────────────────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1, year: 'Década 1960', title: 'La semilla del rencor',
    shortDesc: '',
    guion:
      'NOTIHISTÓRICO — EL NOTICIERO DE LA HISTORIA PRESENTA...\n\n' +
      'Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, y esta noche viajamos a los años 60, una década marcada por heridas que todavía seguían abiertas.\n\n' +
      'Liberales y conservadores deciden alternarse el poder para evitar una nueva guerra entre partidos.\n\n' +
      'Sin embargo, mientras las élites políticas hablaban de estabilidad, gran parte de la población seguía enfrentando pobreza, desigualdad y abandono estatal.\n\n' + 
      'Para muchos colombianos, la violencia no había desaparecido. Simplemente había cambiado de forma.',
    images: [img1_1], audioSrc: audio1,
    datoClave: '1960 - 1070 · Violencia bipartista · frente nacional · liberales y conservadores',
    fichaLineas: ['Período: 1960 – 1970','Actor: Liberales y conservadores','Tipo: bipartidismo','Afectados: Civiles, jueces, políticos','Contexto: Crisis política'],
    color: '#7a1a1a',
  },
  {
    id: 2, year: '1964', title: 'Marquetalia',
    shortDesc: '',
    guion:
      'Atención en el sur del país\n\n' +
      'En 1964, el gobierno colombiano lanza una operación militar sobre la región de Marquetalia, una zona campesina señalada por las autoridades como una ‘república independiente’.\n\n' +
      'El objetivo oficial era recuperar el control estatal del territorio y combatir grupos armados organizados en la región.\n\n' +
      'La ofensiva militar deja una profunda huella en la historia del conflicto colombiano.\n\n'+
      'De aquellos enfrentamientos surgen las Fuerzas Armadas Revolucionarias de Colombia, más conocidas como las FARC.\n\n'+
      'Para muchos campesinos, el episodio simbolizó años de exclusión y abandono.Para el Estado, representaba el inicio de una amenaza insurgente cada vez más organizada.\n\n'+
      'Y así comenzaba oficialmente una nueva etapa del conflicto armado colombiano.\n\n',
    images: [img2_1, img2_2], audioSrc: audio2,
    datoClave: 'Operación soberanía 1964 · Cuna de las FARC · Marquetalia',
    fichaLineas: ['Fecha: 2 Enero 1964','Actor: Ejército,campesinos armados'],
    color: '#1a7a3c',
  },
  {
    id: 3, year: '1966', title: 'Revolución y fé',
    shortDesc: '',
    guion:
      'Mientras crecía la tensión política y social, nuevas ideas empezaban a expandirse entre jóvenes, estudiantes y sectores religiosos del país.\n\n' +
      'Uno de los nombres que más llamó la atención durante esta década fue el del sacerdote Camilo Torres Restrepo.\n\n' +
      'Camilo defendía la idea de que la lucha contra la desigualdad social también era una responsabilidad cristiana.\n\n' +
      'Sus discursos generaron admiración en algunos sectores y preocupación en otros.Finalmente, decide unirse al Ejército de Liberación Nacional, conocido como ELN.\n\n'+
      'En 1966, Camilo Torres muere durante un enfrentamiento armado poco tiempo después de incorporarse a la guerrilla.\n\n'+
      'La noticia impacta profundamente al país.Para muchos colombianos, su muerte simboliza la creciente radicalización política de la época y la sensación de que cada vez más personas comenzaban a perder la esperanza en una salida pacífica.\n\n',
    images: [img3_1, img3_2], audioSrc: audio3,
    datoClave: '1966 · ELN · Camilo Torres',
    fichaLineas: ['Fecha: 1996','Actor: ELN , Camilo Torres','Nota: Soporte ideológico'],
    color: '#8B3A0A',
  },
];

const HITOS_RIGHT = [
  {
    id: 4, year: '1970', title: 'Las urnas bajo sospecha',
    shortDesc: '',
    guion:
      'Y cuando la década llegaba a su final, un nuevo episodio aumentaría todavía más la desconfianza política en Colombia.\n\n' +
      '19 de abril de 1970.El país entero sigue las elecciones presidenciales entre el candidato oficialista Misael Pastrana Borrero y el general Gustavo Rojas Pinilla.\n\n' +
      'Durante horas, distintos sectores denuncian irregularidades y posibles alteraciones en el conteo de votos.\n\n' +
      'La desconfianza hacia el sistema político comienza a crecer rápidamente.Y con ella, aparece una idea cada vez más peligrosa:\n\n'+
      'que las vías democráticas parecían cerrarse para quienes buscaban cambios profundos en el país.',
    images: [img4_1, img4_2], audioSrc: audio4,
    datoClave: '19 de abril de 1970 · Elecciones · Fraude',
    fichaLineas: ['Fecha: 19 de abril de 1970','Repercución: El país entero','Respuesta: Indignación ','Impacto: Crisis credibilidad gobierno'],
    color: '#5A0000',
  },
  {
    id: 5, year: 'finales de los 60s', title: 'El origen de una larga guerra',
    shortDesc: '',
    guion:
      'Al terminar los años 60, Colombia ya mostraba señales de una fractura cada vez más profunda.La desigualdad social persistía.La presencia del Estado seguía siendo limitada en muchas regiones.\n\n' +
      'La desigualdad social persistía.La presencia del Estado seguía siendo limitada en muchas regiones.Y nuevos grupos armados comenzaban a consolidarse en distintas zonas del país.\n\n' +
      'Lo que inicialmente parecía un conflicto local y campesino empezaba lentamente a transformarse en una guerra mucho más compleja.\n\n' +
      'Una guerra alimentada por la exclusión política, la pobreza y la falta de oportunidades para amplios sectores de la población.\n\n',
    images: [img5_1], audioSrc: audio5,
    datoClave: 'Lustro 64-69 · Surgimiento de guerrillas · Violencia Rural · Esfuerzos inútiles de mantener el control',
    fichaLineas: ['Fecha: 64 - 69','Lugar: marquetalia y ciudades','Motivos: Abandono rural, desconfianza estatal','Resultado: años de violencia sin límites'],
    color: '#7a1a1a',
  },
  {
    id: 6, year: 'cierre', title: 'final',
    shortDesc: '',
    guion:
      'Porque en Colombia, muchas veces la historia no comenzó con grandes discursos…\n\n' +
      'sino con comunidades enteras que sintieron que nunca fueron escuchadas.\n\n' +
      'Y mientras esas heridas siguieran abiertas, el conflicto continuaría creciendo generación tras generación.\n\n' +
      'Hasta aquí esta emisión especial de Notihistórico, el noticiero de la historia.Muy buenas noches, Colombia.',
    images: [img1_1, img3_2], audioSrc: audio6,
    datoClave: '1970 · Movimiento 19 de abril · Crisis electoral · desconfianza masiva',
    fichaLineas: ['Período: 1970','Causa: Descontento Colectivo'],
    color: '#4a3a00',
  },
];

import { NotihistoricoLayout } from './NotihistoricoLayout';

export const Decade60s = () => {
  const anim60s = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <NotihistoricoLayout 
      chapterIndex="1"
      period="1960 — 1969"
      subtitle="La semilla del rencor y el origen del conflicto"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 1960–1969"
      cdLabel="Audio"
      themeClass="theme-60s"
    />
  );
};
