import intro1 from '../assets/intro1.txt?raw';
import intro2 from '../assets/intro2.txt?raw';
import audio from '../assets/audio/intro.mp3';
import audio2 from '../assets/audio/audio2.mp3'; 
import intro3 from '../assets/intro3.txt?raw';
import intro4 from '../assets/intro4.txt?raw';


export const decades = [
 {
  tag: "50s", index: 1,
  period: "1950 — 1960",
  title: "La Violencia y el Frente Nacional",
  accentColor: "#CE1126",
  description: "Una década marcada por la represión bipartidista, un golpe de Estado y los primeros pasos hacia la democracia con el voto femenino.",
  groupA: { name: "Partido Liberal", headColor: "#FCD116", bodyColor: "#003893" },
  groupB: { name: "Partido Conservador", headColor: "#CE1126", bodyColor: "#6B0000" },
  vs: "VS", 
  fact: "En 1957 las mujeres colombianas votaron por primera vez en el plebiscito que dio origen al Frente Nacional.",
  fact2: "El gobierno de Laureano Gómez intensifica la persecución bipartidista dejando miles de víctimas en zonas rurales.",
  intro1: intro1,
  intro2: intro2,
  intro3: intro3,
  intro4: intro4,
  audio: audio,
  audio2: audio2,
  cards: [
    { icon: "🔥", title: "La Violencia", body: "El gobierno de Laureano Gómez intensifica la persecución bipartidista dejando miles de víctimas en zonas rurales.", color: "#CE1126" },
    { icon: "📰", title: "Censura de prensa", body: "Periódicos liberales son incendiados en Bogotá en 1952, silenciando voces opositoras al régimen conservador.", color: "#6B0000" },
    { icon: "🎖️", title: "Golpe de Rojas Pinilla", body: "El general Gustavo Rojas Pinilla toma el poder en 1953 prometiendo paz, pero la represión continúa con la llegada de la televisión en 1954.", color: "#5A2D8A" },
    { icon: "🗳️", title: "Primer voto femenino", body: "El plebiscito de 1957 marca un hito histórico: las colombianas ejercen su derecho al voto por primera vez.", color: "#003893" },
  ]
},  
  {
    tag: "60s", index: 0,
    period: "1960 — 1970",
    title: "El inicio del conflicto",
    accentColor: "#003893",
    description: "Las diferencias políticas e ideológicas generan las primeras chispas de un conflicto que marcaría para siempre la historia del país.",
    groupA: { name: "Grupo Liberal", headColor: "#FCD116", bodyColor: "#003893" },
    groupB: { name: "Grupo Armado", headColor: "#CE1126", bodyColor: "#6B0000" },
    vs: "VS",
    fact: "En 1964 nacen las FARC en el departamento del Tolima, marcando el inicio de más de 50 años de conflicto armado.",
    cards: [
      { icon: "⚡", title: "Tensión política", body: "Dos grandes fuerzas ideológicas se enfrentan por el control del país.", color: "#003893" },
      { icon: "🌿", title: "Primeras guerrillas", body: "Grupos armados rurales nacen bajo ideologías marxistas y campesinas.", color: "#CE1126" },
      { icon: "🌎", title: "Contexto global", body: "La disputa EE.UU.–URSS aviva conflictos internos en toda América Latina.", color: "#5A2D8A" },
    ]
  },
  {
    tag: "70s", index: 1,
    period: "1970 — 1980",
    title: "La expansión del conflicto",
    accentColor: "#5A2D8A",
    description: "Nuevos actores armados aparecen en el escenario. El conflicto sale del campo y comienza a tocar las ciudades del país.",
    groupA: { name: "El Estado", headColor: "#4488DD", bodyColor: "#003893" },
    groupB: { name: "M-19 / ELN", headColor: "#44AA44", bodyColor: "#1A6B1A" },
    vs: "VS",
    fact: "El M-19 roba la espada de Simón Bolívar en 1974 como acto simbólico que sacudió al país entero.",
    cards: [
      { icon: "🔥", title: "Más actores armados", body: "El ELN, M-19 y otros grupos complejizan el panorama del conflicto.", color: "#5A2D8A" },
      { icon: "🏙️", title: "Conflicto en ciudades", body: "Los grupos llevan sus acciones a centros urbanos y capitales.", color: "#003893" },
      { icon: "💰", title: "Economías ilegales", body: "El narcotráfico empieza a financiar a los grupos armados del país.", color: "#CE1126" },
    ]
  },
  {
    tag: "80s", index: 2,
    period: "1980 — 1990",
    title: "La década más oscura",
    accentColor: "#8B0000",
    description: "El narcotráfico y el terrorismo alcanzan su punto más alto. El país enfrenta una crisis de violencia sin precedentes en su historia.",
    groupA: { name: "Los Carteles", headColor: "#FCD116", bodyColor: "#8B6000" },
    groupB: { name: "Los Paramilitares", headColor: "#CE1126", bodyColor: "#5A0000" },
    vs: "VS",
    fact: "Colombia pierde a candidatos presidenciales, jueces y ministros durante esta turbulenta década de narcoterrorismo.",
    cards: [
      { icon: "💣", title: "Narcoterrorismo", body: "Los carteles de droga atacan al Estado colombiano con terrorismo abierto.", color: "#8B0000" },
      { icon: "⚖️", title: "Crisis institucional", body: "Jueces y ministros amenazados. La justicia del país tambalea.", color: "#5A2D8A" },
      { icon: "🕊️", title: "Primeras paces", body: "Surgen los primeros intentos de negociación y diálogos de paz.", color: "#003893" },
    ]
  },
  {
    tag: "90s", index: 3,
    period: "1990 — 2000",
    title: "Nueva Constitución y crisis",
    accentColor: "#1155cc",
    description: "Una nueva esperanza nace con la Constitución de 1991, pero la violencia arrecia con guerrillas y paramilitares expandiéndose.",
    groupA: { name: "Fuerzas Militares", headColor: "#4488DD", bodyColor: "#003893" },
    groupB: { name: "Grupos Armados", headColor: "#CE1126", bodyColor: "#6B0000" },
    vs: "VS",
    fact: "En 1991 se promulga una nueva Constitución Política que busca modernizar el Estado y garantizar más derechos.",
    cards: [
      { icon: "📜", title: "Constitución 1991", body: "Un gran acuerdo nacional para crear una constitución más inclusiva y moderna.", color: "#1155cc" },
      { icon: "⚔️", title: "Guerra de carteles", body: "El fin de grandes capos cambia el panorama del narcotráfico.", color: "#8B0000" },
      { icon: "📈", title: "Expansión del conflicto", body: "Guerrillas y paramilitares aumentan su poder bélico y territorial.", color: "#CE1126" },
    ]
  },
  {
    tag: "00s", index: 4,
    period: "2000 — 2010",
    title: "Plan Colombia y Seguridad",
    accentColor: "#228B22",
    description: "Una fuerte ofensiva militar respaldada internacionalmente debilita a las guerrillas, mientras los paramilitares inician su desmovilización.",
    groupA: { name: "El Estado", headColor: "#4488DD", bodyColor: "#003893" },
    groupB: { name: "Guerrillas", headColor: "#CE1126", bodyColor: "#6B0000" },
    vs: "VS",
    fact: "En 2002 ocurre el secuestro de Íngrid Betancourt, evento que conmocionó al mundo entero.",
    cards: [
      { icon: "🚁", title: "Plan Colombia", body: "Apoyo de EE.UU. para fortalecer a las Fuerzas Militares contra las drogas y la guerrilla.", color: "#003893" },
      { icon: "🛡️", title: "Seguridad Democrática", body: "Política estatal enfocada en recuperar el control del territorio nacional.", color: "#228B22" },
      { icon: "🤝", title: "Desmovilización AUC", body: "Miles de paramilitares dejan las armas a mediados de la década.", color: "#FCD116" },
    ]
  },
 {
  tag: "10s", 
  index: 5, // Importante para el número del capítulo
  period: "2010 — 2020",
  accentColor: "#FCD116", // Color del lomo
  
},
  {
    tag: "20s", index: 6,
    period: "2020 — 2026",
    title: "Nuevos retos y Paz Total",
    accentColor: "#00A86B",
    description: "El país busca consolidar la paz mientras enfrenta nuevos grupos disidentes, bandas criminales y estallidos sociales.",
    groupA: { name: "Estado", headColor: "#4488DD", bodyColor: "#003893" },
    groupB: { name: "Grupos Irregulares", headColor: "#8B0000", bodyColor: "#222" },
    vs: "VS",
    fact: "En 2021, Colombia vive el Estallido Social, una serie de protestas masivas de jóvenes pidiendo cambios estructurales.",
    cards: [
      { icon: "📣", title: "Estallido Social", body: "Masivas protestas ciudadanas en todo el país demandando cambios sociales profundos.", color: "#5A2D8A" },
      { icon: "🧩", title: "Paz Total", body: "Nuevos intentos de negociar con múltiples grupos armados restantes.", color: "#00A86B" },
      { icon: "🌐", title: "Desafíos modernos", body: "El país enfrenta retos climáticos, de migración y ciberseguridad.", color: "#003893" },
    ]
  },
  {
    tag: "about",
    index: 8,
    period: "Sobre — Nosotros",
    title: "Autores del Proyecto",
    accentColor: "#285c4d",
    description: "Conoce más sobre los creadores de esta experiencia interactiva.",
    fact: "Somos el grupo de historia y cultura 020-81 de la Universidad Distrital Francisco José de Caldas.",
    cards: [
      { icon: "🎓", title: "Nuestro Grupo", body: "Grupo 020-81 de la Universidad Distrital. Estudiantes apasionados por rescatar y enseñar el patrimonio cultural.", color: "#285c4d" },
      { icon: "💡", title: "Nuestra Misión", body: "Buscamos preservar la memoria histórica de Colombia mediante narrativas digitales y el uso de tecnologías web interactivas.", color: "#b8860b" },
      { icon: "🏛️", title: "Universidad Distrital", body: "Llevando el aprendizaje más allá de las aulas para compartir el conocimiento con la comunidad académica y el público general.", color: "#1155cc" }
    ]
  }
];
