import { NotihistoricoLayout } from './NotihistoricoLayout';

const HITOS_LEFT = [
  {
    id: 1, 
    year: 'Intro', 
    title: 'El Juego de Espejos',
    shortDesc: 'La década empieza con la misma guerra, pero cambiando de escenario.',
    guion:
      'NOTIHISTÓRICO — EL NOTICIERO DE LA HISTORIA PRESENTA...\n\n' +
      'Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, y abrimos esta emisión especial en una nueva década marcada por una pregunta que parece perseguir al país entero: ¿Y ahora qué?\n\n' +
      'Después de más de medio siglo de conflicto armado, Colombia intenta encontrar una salida mientras crecen las discusiones sobre memoria, justicia y paz.\n\n' +
      'Porque la guerra seguía presente… pero cada vez era más difícil distinguir dónde terminaba el conflicto y dónde comenzaba la política.',
    images: [], 
    audioSrc: '/audios 2010s/1.mp3',
    sfxSrc: '/SFX10s/16.mp3',
    datoClave: '2010 · Transición Política · Búsqueda de la Paz',
    fichaLineas: ['Período: 2010s', 'Contexto: Conflicto a Política', 'Actor: Colombia'],
    color: '#BFA054',
  },
  {
    id: 2, 
    year: '2011', 
    title: 'El Archivo de los Nadie',
    shortDesc: 'El Estado reconoce oficialmente a las víctimas. Ya no son solo cifras.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'En noticias nacionales, el Estado colombiano da un paso histórico. Durante años, el país habló únicamente de cifras: número de muertos, desaparecidos, secuestros y masacres.\n\n' +
      'Pero en 2011 comienza un cambio importante. Con la Ley de Víctimas y Restitución de Tierras, el Estado empieza a reconocer oficialmente a las víctimas del conflicto armado.\n\n' +
      'Ya no eran solamente estadísticas. Ahora tenían nombres, historias, familias y memorias. Muchos colombianos sintieron que, por primera vez, el país empezaba a mirar de frente a todas aquellas personas que durante décadas habían permanecido invisibles.',
    images: ['/imagenes 2010s/Reconocimiento de víctimas en 2011.png'], 
    audioSrc: '/audios 2010s/2.mp3',
    sfxSrc: '/SFX10s/10.mp3',
    datoClave: '2011 · Ley de Víctimas y Restitución de Tierras',
    fichaLineas: ['Año: 2011', 'Medida: Ley de Víctimas', 'Impacto: Reconocimiento Oficial'],
    color: '#7a1a1a',
  },
  {
    id: 3, 
    year: '2012', 
    title: 'Hablar con el Enemigo',
    shortDesc: 'Comienzan conversaciones formales con la guerrilla en La Habana.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Atención, Colombia. El gobierno del presidente Juan Manuel Santos confirma oficialmente el inicio de diálogos de paz con las FARC en La Habana, Cuba.\n\n' +
      'La noticia sacude al país entero. Después de más de cincuenta años de guerra, el gobierno y la guerrilla más antigua de América Latina se sientan a negociar.\n\n' +
      'Mientras algunos ciudadanos celebran la posibilidad del fin del conflicto, otros expresan indignación y desconfianza. Las opiniones comienzan a dividirse.\n\n' +
      'Para unos, negociar significaba esperanza. Para otros, significaba impunidad. Y poco a poco, una sola palabra empezó a dominar todas las conversaciones del país: la paz.',
    images: ['/imagenes 2010s/Negociaciones de paz en La Habana.png'], 
    audioSrc: '/audios 2010s/3.mp3',
    sfxSrc: '/SFX10s/14.mp3',
    datoClave: '2012 · Gobierno Santos · Diálogos de Paz en La Habana',
    fichaLineas: ['Año: 2012', 'Lugar: La Habana, Cuba', 'Actores: Gobierno y FARC'],
    color: '#1a7a3c',
  },
  {
    id: 4, 
    year: '2016', 
    title: 'El Bolígrafo de Titanio',
    shortDesc: 'Firma oficial del acuerdo de paz entre Gobierno y FARC.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Después de varios años de negociación, llega finalmente uno de los momentos más simbólicos de la historia reciente de Colombia. Gobierno y FARC firman oficialmente el acuerdo de paz.\n\n' +
      'Y hasta el bolígrafo utilizado en la ceremonia tenía un mensaje. Había sido fabricado con el casquillo de una bala.\n\n' +
      'La idea era clara: lo que antes servía para destruir… ahora serviría para escribir un nuevo capítulo para el país.\n\n' +
      'Para muchos colombianos, aquel momento representó esperanza, alivio y la posibilidad de cerrar una etapa de violencia. Pero para otros, persistían las dudas sobre el verdadero alcance del acuerdo.',
    images: ['/imagenes 2010s/Firma del acuerdo con el balígrafo.png'], 
    audioSrc: '/audios 2010s/4.mp3',
    sfxSrc: '/SFX10s/15.mp3',
    datoClave: '2016 · Firma del Acuerdo de Paz · Bolígrafo (casquillo de bala)',
    fichaLineas: ['Año: 2016', 'Hecho: Firma del Acuerdo', 'Símbolo: Balígrafo (Bala reciclada)'],
    color: '#8B3A0A',
  },
];

const HITOS_RIGHT = [
  {
    id: 5, 
    year: '2016', 
    title: 'El Veredicto',
    shortDesc: 'Plebiscito nacional y victoria del NO, demostrando la fractura.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Y justo cuando parecía que todo estaba decidido… el país entero fue llamado a votar. Colombia debía aprobar o rechazar el acuerdo de paz mediante un plebiscito nacional.\n\n' +
      'Millones de personas siguieron los resultados desde televisores, radios, celulares y redes sociales. La tensión era total. Y entonces llegó el resultado inesperado. Ganó el NO. Pero por una diferencia mínima. Menos del uno por ciento.\n\n' +
      'Literalmente, Colombia quedó dividida en dos. Las discusiones llegaron a las familias, a las universidades, a los grupos de amigos y a las redes sociales.\n\n' +
      'La polarización creció rápidamente. Era como si la guerra hubiera cambiado de escenario: ya no solamente se peleaba con armas… ahora también se peleaba con opiniones, discursos y versiones distintas del país.',
    images: ['/imagenes 2010s/Plebiscito de 2016 y país dividido.png'], 
    audioSrc: '/audios 2010s/5.mp3',
    sfxSrc: '/SFX10s/11.mp3',
    datoClave: '2016 · Plebiscito por la Paz · Victoria del NO (< 1%)',
    fichaLineas: ['Año: 2016', 'Hecho: Plebiscito Nacional', 'Resultado: Ganó el NO', 'Impacto: Polarización profunda'],
    color: '#5A0000',
  },
  {
    id: 6, 
    year: '2017', 
    title: 'La Gran Entrega',
    shortDesc: 'Las FARC inician la entrega oficial de armas a la ONU.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'En un hecho que durante décadas pareció imposible, las FARC comienzan oficialmente la entrega de armas ante organismos internacionales. Miles de fusiles son almacenados en contenedores supervisados por la ONU.\n\n' +
      'Las imágenes recorren el mundo entero. Muchos colombianos creen estar viendo el final de una guerra histórica.\n\n' +
      'Sin embargo, especialistas advierten que el panorama sigue siendo complejo. Porque cuando un grupo armado abandona ciertos territorios… otros actores ilegales intentan ocupar ese espacio.\n\n' +
      'La paz apenas comenzaba, y el país todavía enfrentaba enormes desafíos.',
    images: ['/imagenes 2010s/Entrega de armas a la ONU en 2017.png'], 
    audioSrc: '/audios 2010s/6.mp3',
    sfxSrc: '/SFX10s/12.mp3',
    datoClave: '2017 · FARC · Entrega de Armas a Misión de la ONU',
    fichaLineas: ['Año: 2017', 'Hecho: Entrega de Armas', 'Actor: FARC', 'Garante: ONU'],
    color: '#1a4a2a',
  },
  {
    id: 7, 
    year: '2019', 
    title: 'El Retorno',
    shortDesc: 'Reaparición de líderes armados (disidencias).',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Y cuando muchos pensaban que el conflicto comenzaba a cerrarse… aparece un nuevo video que vuelve a generar preocupación nacional.\n\n' +
      'Antiguos comandantes de las FARC reaparecen armados y anuncian su regreso a la lucha ilegal. Las imágenes producen temor e incertidumbre en distintos sectores del país.\n\n' +
      'Para muchos colombianos, la sensación era extraña y dolorosa: como si la historia estuviera intentando repetirse una vez más.\n\n' +
      'El miedo regresaba lentamente. Y la idea de un final definitivo para el conflicto parecía alejarse nuevamente.',
    images: ['/imagenes 2010s/Regreso de disidencias en 2019.png'], 
    audioSrc: '/audios 2010s/7.mp3',
    sfxSrc: '/SFX10s/17.mp3',
    datoClave: '2019 · Disidencias de las FARC · Rearme',
    fichaLineas: ['Año: 2019', 'Hecho: Rearme insurgente', 'Actor: Disidencias FARC'],
    color: '#3d2618',
  },
  {
    id: 8, 
    year: 'Cierre', 
    title: 'La Verdad y la Historia',
    shortDesc: 'El conflicto no solo fue de armas, sino de memoria.',
    guion:
      'Porque el conflicto colombiano nunca fue solamente una guerra de balas. También fue una disputa por la memoria, por la verdad y por la manera de entender la historia.\n\n' +
      'Y mientras esas heridas sigan abiertas… esta historia todavía no termina.\n\n' +
      'Hasta aquí esta emisión especial de Notihistórico, el noticiero de la historia. Muy buenas noches, Colombia.',
    images: [], 
    audioSrc: '/audios 2010s/8.mp3',
    sfxSrc: '/SFX10s/18.mp3',
    datoClave: 'Fin de la Década · Disputa por la memoria y la verdad',
    fichaLineas: ['Conclusión: Conflicto abierto en memoria y verdad'],
    color: '#BFA054',
  },
];

const Decada2010 = () => {
  const anim10s = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2, ease: "easeIn" }
  };

  return (
    <NotihistoricoLayout 
      chapterIndex="5"
      period="2010 — 2019"
      subtitle="El Juego de Espejos"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 2010–2019"
      cdLabel="Acuerdos de Paz"
      themeClass="theme-10s"
    />
  );
};

export default Decada2010;