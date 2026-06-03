import './Decada00s.css';

// ── Imports de audio ──────────
 import audio1 from '../assets/00s/audio/hito1.mp3';
 import audio2 from '../assets/00s/audio/hito2.mp3';
 import audio3 from '../assets/00s/audio/hito3.mp3';
 import audio4 from '../assets/00s/audio/hito4.mp3';
 import audio5 from '../assets/00s/audio/hito5.mp3';
 import audio6 from '../assets/00s/audio/hito6.mp3';
 import audio7 from '../assets/00s/audio/hito7.mp3';

// ── Imports de imágenes ────────
import imgAcuerdo2 from '../assets/00s/imagenes/Acuerdo 2.png';
import imgPublicidadPC from '../assets/00s/imagenes/Publicidad P.C.png';
import imgImplementacionPC from '../assets/00s/imagenes/Implementacion PC.png';
import imgAsesoriaEEUU from '../assets/00s/imagenes/Asesoria EEUU.png';
import imgFumigacion from '../assets/00s/imagenes/Fumigacion.png';
import imgPosesionUribe from '../assets/00s/imagenes/Posesion Uribe.png';
import imgNuevasPoliticas from '../assets/00s/imagenes/Nuevas politicas.png';
import imgDiscursoUribe from '../assets/00s/imagenes/Discurso Uribe.png';
import imgSecuestro from '../assets/00s/imagenes/Secuestro.png';
import imgCarreterasVacias from '../assets/00s/imagenes/Carreteras vacias.png';
import imgPruebasSupervivencia from '../assets/00s/imagenes/Secuestrados y pruebas de supervivencia en televisión.png';
import imgOperacionJaque1 from '../assets/00s/imagenes/Operacion Jaque.png';
import imgOperacionJaque2 from '../assets/00s/imagenes/Operacion Jaque 2.png';
import imgNoticiaIngrid from '../assets/00s/imagenes/Noticia Ingrid Betancourt.png';
import imgFalsosPositivos from '../assets/00s/imagenes/Falsos Positivos.png';
import imgProtestaDDHH from '../assets/00s/imagenes/Protesta derechos humanos.png';
import imgDenunciasSombra from '../assets/00s/imagenes/Denuncias por falsos positivos y sombra institucional.png';
import imgNarcotrafico from '../assets/00s/imagenes/Narcotrafico.png';

// ── DATOS DE LOS HITOS (2000s) ───────────────────────────
const HITOS_LEFT = [
  {
    id: 1,
    year: '2000s',
    title: 'Introducción: La guerra total',
    shortDesc: 'Colombia entra al nuevo milenio en uno de los momentos más violentos de su historia.',
    summary: 'La década del 2000 comenzó con Colombia atravesando una crisis profunda. Las guerrillas alcanzaron capacidad militar sin precedentes, los secuestros se volvieron cotidianos y el Estado respondió con nuevas estrategias de guerra y cooperación internacional.',
    guion: `NOTIHISTÓRICO — INTRODUCCIÓN

Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, e iniciamos esta emisión especial en el comienzo del siglo XXI.

El país atraviesa una sensación de agotamiento y tensión permanente.

Después de décadas de conflicto armado, Colombia enfrenta uno de los periodos más violentos de su historia reciente.

Las guerrillas amplían su presencia territorial. Los secuestros aumentan. Y muchas carreteras comienzan a vaciarse por miedo a retenes ilegales y ataques armados.

Mientras la violencia continúa creciendo, millones de colombianos empiezan a sentir que el Estado está perdiendo el control de amplias regiones del país.`,
    images: [],
    audioSrc: audio1,
    datoClave: '2000 · Crisis · Violencia · Inicio del milenio',
    color: '#2c3e50',
  },
  {
    id: 2,
    year: '2000',
    title: 'El Plan Colombia',
    shortDesc: 'Cooperación internacional y militarización del conflicto.',
    summary: 'En medio de la crisis, Colombia y Estados Unidos anunciaron el Plan Colombia, una estrategia para fortalecer la lucha contra el narcotráfico y los grupos armados mediante cooperación internacional.',
    guion: `NOTIHISTÓRICO — EL PLAN COLOMBIA

En medio de esta crisis, los gobiernos de Colombia y Estados Unidos anuncian oficialmente el llamado Plan Colombia.

La estrategia busca fortalecer la lucha contra el narcotráfico y los grupos armados mediante cooperación internacional.

La ayuda incluye recursos económicos, entrenamiento militar, inteligencia y nueva tecnología.

Desde el exterior, el conflicto colombiano empieza a verse como parte de la llamada 'guerra contra las drogas'.

Sin embargo, dentro del país el debate crece rápidamente.

Mientras algunos sectores consideran el plan una medida urgente para recuperar el control territorial, otros advierten sobre el aumento de la militarización y las consecuencias que la guerra sigue dejando sobre la población civil.`,
    images:  [imgAcuerdo2, imgPublicidadPC, imgImplementacionPC, imgAsesoriaEEUU, imgFumigacion],
    audioSrc: audio2,
    datoClave: '2000 · Plan Colombia · Guerra contra las drogas · Cooperación internacional',
    color: '#1a5276',
  },
  {
    id: 3,
    year: '2002',
    title: 'La Seguridad Democrática',
    shortDesc: 'Álvaro Uribe y la promesa de recuperar el control del país.',
    summary: 'Álvaro Uribe llegó a la presidencia con la Política de Seguridad Democrática, fortaleciendo el poder militar y ofreciendo una ofensiva directa contra las guerrillas.',
    guion: `NOTIHISTÓRICO — LA SEGURIDAD DEMOCRÁTICA

En noticias políticas, Álvaro Uribe Vélez llega a la presidencia de Colombia con una promesa clara: recuperar la seguridad del país.

Su gobierno impulsa la llamada Política de Seguridad Democrática, basada en el fortalecimiento militar y la ofensiva directa contra las guerrillas.

El Estado incrementa su presencia en carreteras, municipios y zonas históricamente afectadas por el conflicto armado.

Para muchos colombianos, la sensación de seguridad comienza lentamente a regresar.

Sin embargo, la intensificación de la guerra también hace que el conflicto se vuelva más visible y cotidiano.

La confrontación ya no parecía lejana. Ahora ocupaba titulares diarios, transmisiones en vivo y conversaciones constantes dentro del país.`,
    images: [imgPosesionUribe, imgNuevasPoliticas, imgDiscursoUribe],
    audioSrc: audio3,
    datoClave: '2002 · Álvaro Uribe · Seguridad Democrática · Ofensiva militar',
    color: '#1e8449',
  },
];

const HITOS_RIGHT = [
  {
    id: 4,
    year: '2002-2008',
    title: 'El país secuestrado',
    shortDesc: 'El secuestro como símbolo del conflicto colombiano.',
    summary: 'Durante esos años, el secuestro se convirtió en uno de los símbolos más dolorosos. Políticos, militares y civiles fueron retenidos. Las pruebas de supervivencia pasaron a formar parte de la memoria colectiva.',
    guion: `NOTIHISTÓRICO — EL PAÍS SECUESTRADO

Durante esos años, el secuestro se convierte en uno de los símbolos más dolorosos del conflicto colombiano.

Políticos, militares, policías, empresarios y civiles son retenidos por distintos grupos armados.

Las llamadas pruebas de supervivencia comienzan a difundirse en televisión y pasan a formar parte de la memoria colectiva del país.

La guerra ya no parecía ocurrir únicamente en regiones apartadas.

Ahora entraba directamente a los hogares a través de las noticias, las fotografías y los testimonios de familias que esperaban durante años el regreso de sus seres queridos.`,
    images: [imgSecuestro, imgCarreterasVacias, imgPruebasSupervivencia],
    audioSrc: audio4,
    datoClave: 'Secuestro · Pruebas de supervivencia · Dolor colectivo',
    color: '#7e5109',
  },
  {
    id: 5,
    year: '2008',
    title: 'La Operación Jaque',
    shortDesc: 'El rescate que cambió la percepción del conflicto.',
    summary: 'La Operación Jaque fue una de las operaciones militares más recordadas. Mediante inteligencia militar, fueron rescatados varios secuestrados, entre ellos Ingrid Betancourt, generando impacto internacional.',
    guion: `NOTIHISTÓRICO — LA OPERACIÓN JAQUE

Última hora en Colombia.

El Ejército Nacional confirma el éxito de la llamada Operación Jaque, una de las operaciones militares más recordadas de la década.

Mediante una compleja estrategia de inteligencia, varios secuestrados retenidos por las FARC son rescatados, entre ellos la excandidata presidencial Ingrid Betancourt.

La noticia genera impacto internacional inmediato.

Para el gobierno, la operación representa una demostración de la capacidad del Estado para debilitar militarmente a la guerrilla.

Y para gran parte de la sociedad colombiana, simboliza la esperanza de que el conflicto pudiera comenzar a cambiar de rumbo.`,
    images: [imgOperacionJaque1, imgOperacionJaque2, imgNoticiaIngrid],
    audioSrc: audio5,
    datoClave: '2008 · Operación Jaque · Rescate · Ingrid Betancourt',
    color: '#0e6655',
  },
  {
    id: 6,
    year: '2000s',
    title: 'Las sombras de la guerra',
    shortDesc: 'Falsos positivos, desplazamiento y abusos.',
    summary: 'Mientras el Estado obtenía victorias militares, surgieron denuncias sobre desplazamientos forzados, ejecuciones extrajudiciales y el escándalo de los falsos positivos.',
    guion: `NOTIHISTÓRICO — LAS SOMBRAS DE LA GUERRA

Pero mientras el Estado obtenía importantes victorias militares, nuevas denuncias comenzaban a generar preocupación nacional e internacional.

Organizaciones de derechos humanos alertan sobre desplazamientos forzados, abusos y ejecuciones extrajudiciales.

El escándalo de los llamados 'falsos positivos' revela una de las etapas más oscuras de la década: civiles asesinados y presentados ilegalmente como bajas en combate.

La guerra no solo estaba dejando víctimas en medio de los enfrentamientos armados.

También comenzaba a afectar profundamente la confianza de muchos ciudadanos en las instituciones del país.`,
    images: [imgFalsosPositivos, imgProtestaDDHH, imgDenunciasSombra],
    audioSrc: audio6,
    datoClave: 'Falsos positivos · Ejecuciones extrajudiciales · Crisis humanitaria',
    color: '#641e16',
  },
  {
    id: 7,
    year: 'Final 2000s',
    title: 'Cierre: El fin de una década',
    shortDesc: 'La guerrilla debilitada, pero la paz aún lejana.',
    summary: 'La década terminó con el Estado recuperando control territorial y las guerrillas debilitadas, pero la paz seguía siendo un objetivo distante. Sin embargo, comenzaba a surgir la posibilidad de negociar el fin de la guerra.',
    guion: `NOTIHISTÓRICO — CIERRE

Así termina la década de 2000 en Colombia.

Las guerrillas han perdido parte de su capacidad militar. El Estado ha recuperado control sobre distintos territorios.

Pero la paz todavía parece lejana.

Sin embargo, en medio del cansancio, del miedo y de los años de confrontación, comienza lentamente a surgir una pregunta que durante mucho tiempo pareció imposible:

¿sería posible negociar el fin de la guerra?

Hasta aquí esta emisión especial de Notihistórico, el noticiero de la historia.

Muy buenas noches, Colombia.`,
    images: [imgNarcotrafico],
    audioSrc: audio7,
    datoClave: 'Fin década · Guerrillas debilitadas · ¿Paz posible?',
    color: '#2c3e50',
  },
];

import { NotihistoricoLayout } from './NotihistoricoLayout';

export const Decada00s = () => {
  return (
    <NotihistoricoLayout 
      chapterIndex="4"
      period="2000 — 2009"
      subtitle="La guerra total"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 2000–2009"
      cdLabel="CD Digital"
      themeClass="theme-00s"
      tag="00s"
    />
  );
};