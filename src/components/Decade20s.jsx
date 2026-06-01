import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Decade20s.css';

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — Hitos históricos Colombia 2020–2026
// ─────────────────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1,
    year: '2020',
    title: 'Pandemia COVID-19 en Colombia',
    shortDesc: 'El virus paraliza el país: cuarentenas, crisis económica y miles de muertos.',
    guion:
      'HISTOSTREAM — EDICIÓN ESPECIAL\n\n' +
      'Muy buenas noches, Colombia. Bienvenidos a HistoStream, el canal donde la historia va en vivo. Esta noche abrimos emisión especial viajando al año 2020, cuando el mundo entero se vio sacudido por la pandemia del COVID-19.\n\n' +
      'El 6 de marzo de 2020, Colombia confirma su primer caso de coronavirus en Bogotá. En cuestión de días, el gobierno del presidente Iván Duque decreta la cuarentena obligatoria más estricta de América Latina. Por primera vez en la historia moderna del país, las calles se vacían.\n\n' +
      'Los hospitales se preparan para lo peor. Los ventiladores se convierten en el bien más escaso del mundo. Las cifras de desempleo se disparan al 21%. Millones de colombianos que vivían de la economía informal se quedan sin ingresos de un día para el otro.\n\n' +
      'La pandemia no solo cobra vidas —más de 130 mil fallecidos en Colombia— sino que profundiza las desigualdades estructurales del país. Una crisis sanitaria que se convierte también en crisis social, económica y política.',
    images: [
      '../assets/20s/imagenes/audio11.png',
      '../assets/20s/imagenes/audio12.png',
      '../assets/20s/imagenes/audio13.png',
    ],
    audioSrc: '../assets/20s/audio/20parte1.mp3',
    fichaLineas: [
      'Fecha: 6 marzo 2020 (1er caso)',
      'Presidente: Iván Duque',
      'Medida: Cuarentena obligatoria',
      'Fallecidos: +130.000',
      'Desempleo: 21% (pico 2020)',
    ],
    color: '#1a4a7a',
    viewers: '142.8K',
    chatMsgs: [
      { user: 'JuanDC2020', color: '#53fc18', badge: 'MOD', text: 'Recuerdo ese día exacto 😢' },
      { user: 'Pipe_Col', color: '#ff7800', text: 'Mi mamá perdió el trabajo ese mes' },
      { user: 'LauraB', color: '#a78bfa', text: 'Los aplausos a las 8pm... qué tiempos' },
      { user: 'HistoFan99', color: '#53fc18', badge: 'SUB', text: 'El tapabocas se volvió moda jajaja' },
      { user: 'Camilo_Med', color: '#38bdf8', text: 'Las clases virtuales cambiaron todo' },
      { user: 'SofiaP', color: '#f472b6', text: 'Mi graduación fue por Zoom 😭' },
      { user: 'NandoCol', color: '#fbbf24', text: '¿Alguien más aprendió a cocinar en cuarentena?' },
      { user: 'XiomaraHist', color: '#a78bfa', badge: 'SUB', text: 'Gracias por el contenido!! 🙏' },
    ],
  },
  {
    id: 2,
    year: '2021',
    title: 'Paro Nacional — Estallido Social',
    shortDesc: 'Millones de colombianos salen a las calles en el mayor paro de la historia reciente.',
    guion:
      'HISTOSTREAM — EDICIÓN ESPECIAL\n\n' +
      'El 28 de abril de 2021, Colombia despierta con un paro nacional que nadie esperaba de esta magnitud. Lo que comienza como una protesta contra una reforma tributaria del gobierno Duque se convierte rápidamente en el estallido social más grande de las últimas décadas.\n\n' +
      'En Bogotá, Cali, Medellín, Barranquilla y decenas de ciudades intermedias, millones de personas toman las calles. Estudiantes, trabajadores, indígenas, campesinos, artistas. La consigna es una sola: ¡Colombia está en paro!\n\n' +
      'Cali se convierte en el epicentro de la resistencia. Durante semanas, el barrio de Puerto Resistencia y la llamada "primera línea" mantienen los bloqueos. Las imágenes de jóvenes con escudos artesanales enfrentando al ESMAD recorren el mundo.\n\n' +
      'Las cifras son dolorosas: más de 80 personas fallecidas, denuncias de violencia policial, decenas de casos de violencia sexual documentados. El gobierno retira la reforma tributaria, pero el fuego social sigue ardiendo.',
    images: [
      '../assets/20s/imagenes/audio21.png',
      '../assets/20s/imagenes/audio22.png',
      '../assets/20s/imagenes/audio23.png',
    ],
    audioSrc: '../assets/20s/audio/20parte2.mp3',
    fichaLineas: [
      'Fecha inicio: 28 abril 2021',
      'Detonante: Reforma tributaria',
      'Epicentro: Cali (Puerto Resistencia)',
      'Fallecidos: +80',
      'Resultado: Retiro de la reforma',
    ],
    color: '#7a1a1a',
    viewers: '289.1K',
    chatMsgs: [
      { user: 'PrimLínea', color: '#ff4040', badge: 'MOD', text: 'Nunca olvidaremos a los que cayeron 🙏' },
      { user: 'CaliResiste', color: '#53fc18', badge: 'SUB', text: 'Puerto Resistencia presente!!' },
      { user: 'AndresCo', color: '#38bdf8', text: 'Esto cambió la política colombiana para siempre' },
      { user: 'HistoStream_Fan', color: '#a78bfa', text: 'Muy buen análisis en el stream 👏' },
      { user: 'ValentinaM', color: '#f472b6', badge: 'SUB', text: 'Yo estuve en las marchas de Bogotá' },
      { user: 'JuanPCali', color: '#fbbf24', text: 'Las ollas comunitarias fueron increíbles' },
      { user: 'Mafe_col', color: '#a78bfa', text: '28A nunca se olvida' },
    ],
  },
  {
    id: 3,
    year: '2022',
    title: 'Elecciones Históricas: Gustavo Petro',
    shortDesc: 'Por primera vez en la historia, Colombia elige un presidente de izquierda.',
    guion:
      'HISTOSTREAM — EDICIÓN ESPECIAL\n\n' +
      'El 19 de junio de 2022, Colombia escribió una página nueva en su historia. Por primera vez desde que existe la república, un candidato de izquierda llegó a la Casa de Nariño. Gustavo Petro fue elegido presidente con más de 11 millones de votos.\n\n' +
      'A su lado, Francia Márquez —lideresa afrodescendiente, defensora ambiental y activista de derechos humanos— se convirtió en la primera vicepresidenta afro de la historia colombiana.\n\n' +
      'La campaña estuvo marcada por la polarización extrema. Los sectores más conservadores advertían sobre el riesgo de "castrochavismo". Los votantes de Petro hablaban de esperanza y cambio estructural. El país quedó dividido: 50,4% para Petro, 47,3% para Rodolfo Hernández.\n\n' +
      'El 7 de agosto de 2022, en la Plaza de Bolívar, ante una multitud desbordante, Gustavo Petro recibió la banda presidencial. Colombia iniciaba una nueva era.',
    images: [
      '../assets/20s/imagenes/audio31.png',
      '../assets/20s/imagenes/audio32.png',
      '../assets/20s/imagenes/audio33.png',
    ],
    audioSrc: '../assets/20s/audio/20parte3.mp3',
    fichaLineas: [
      'Fecha: 19 junio 2022',
      'Presidente electo: Gustavo Petro',
      'Vicepresidenta: Francia Márquez',
      'Votos Petro: 11.281.013',
      'Margen: 50,4% vs 47,3%',
    ],
    color: '#1a6a3a',
    viewers: '501.3K',
    chatMsgs: [
      { user: 'ElCambio22', color: '#53fc18', badge: 'MOD', text: 'Histórico!! Primera vez de izquierda 🇨🇴' },
      { user: 'FranciaFan', color: '#f472b6', badge: 'SUB', text: 'Francia Márquez es un ícono!!' },
      { user: 'SebastianB', color: '#38bdf8', text: 'Sea lo que sea, fue historia pura' },
      { user: 'Marisol_Col', color: '#fbbf24', text: 'Yo lloré cuando ganó 😭🙌' },
      { user: 'HistoriaCO', color: '#a78bfa', badge: 'SUB', text: 'El primer afro-vicepresidencia también' },
      { user: 'PedroA', color: '#ff7800', text: 'La Plaza de Bolívar se llenó como nunca' },
    ],
  },
];

const HITOS_RIGHT = [
  {
    id: 4,
    year: '2022–2024',
    title: 'Paz Total: Diálogos con las Guerrillas',
    shortDesc: 'El gobierno Petro busca negociar simultáneamente con el ELN y las FARC disidentes.',
    guion:
      'HISTOSTREAM — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Una de las apuestas más ambiciosas y polémicas del gobierno Petro fue su política de "Paz Total": la intención de negociar simultáneamente con todos los grupos armados que operan en el territorio colombiano.\n\n' +
      'Los diálogos con el ELN avanzaron lentamente entre Colombia y Cuba. En enero de 2023 se anunció un cese al fuego bilateral que generó esperanzas, pero también escepticismo. Las negociaciones se frenaron y reanudaron varias veces.\n\n' +
      'Con las disidencias de las FARC el proceso fue más turbulento. Los diálogos en La Habana se interrumpieron en repetidas ocasiones por ataques y violaciones al cese al fuego en regiones como Caquetá y Putumayo.\n\n' +
      'La Paz Total se convirtió en el símbolo de las contradicciones del gobierno Petro: una apuesta audaz por el fin del conflicto, pero con resultados concretos que tardaron en materializarse.',
    images: [
      '../assets/20s/imagenes/audio41.png',
      '../assets/20s/imagenes/audio42.png',
      '../assets/20s/imagenes/audio43.png',
    ],
    audioSrc: '../assets/20s/audio/20parte4.mp3',
    fichaLineas: [
      'Política: Paz Total (Petro)',
      'Actores: ELN, FARC disidentes',
      'Escenarios: Cuba, Venezuela, México',
      'Dificultad: Violaciones cese al fuego',
      'Estado: En proceso (2024)',
    ],
    color: '#5a3e00',
    viewers: '98.4K',
    chatMsgs: [
      { user: 'PazColombia', color: '#53fc18', badge: 'MOD', text: 'Ojalá funcione esta vez 🕊️' },
      { user: 'EscepticoMX', color: '#ff7800', text: 'Cuántos intentos de paz llevamos ya...' },
      { user: 'AndreaMed', color: '#a78bfa', badge: 'SUB', text: 'Las comunidades del Caquetá la sufren mucho' },
      { user: 'HistoPaz', color: '#38bdf8', text: 'Cada intento deja algo construido igual' },
      { user: 'CarlosV_Col', color: '#fbbf24', text: 'El ELN sigue siendo el reto mayor' },
      { user: 'StreamFan', color: '#f472b6', badge: 'SUB', text: 'Excelente análisis como siempre 🙌' },
    ],
  },
  {
    id: 5,
    year: '2024–2026',
    title: 'Colombia Hoy: Retos de una Nueva Era',
    shortDesc: 'Entre reformas sociales, crisis política y el reto del desarrollo sostenible.',
    guion:
      'HISTOSTREAM — EDICIÓN ESPECIAL\n\n' +
      'Así llega Colombia a la segunda mitad de la década de 2020. Con un gobierno que prometió transformaciones profundas y que enfrenta los límites del poder ejecutivo en un sistema político fragmentado.\n\n' +
      'Las reformas a la salud, las pensiones y el trabajo encontraron resistencia en el Congreso y generaron debates intensos sobre el rumbo económico del país. La inflación, el desempleo y la informalidad laboral siguieron siendo los desafíos cotidianos de millones de familias.\n\n' +
      'En el campo ambiental, Colombia reafirmó su compromiso con la Amazonia y con la transición energética, apostando por reducir la dependencia del petróleo.\n\n' +
      'Y en medio de todo, la sociedad colombiana: diversa, resistente, creativa. Que marcha, protesta, construye, sueña. Que lleva décadas buscando una paz que todavía no termina de llegar, pero que tampoco ha dejado de intentarlo.\n\nHasta aquí esta emisión de HistoStream. Buenas noches, Colombia.',
    images: [
      '../assets/20s/imagenes/audio51.png',
      '../assets/20s/imagenes/audio52.png',
      '../assets/20s/imagenes/audio53.png',
    ],
    audioSrc: '../assets/20s/audio/20parte5.mp3',
    fichaLineas: [
      'Período: 2024 – 2026',
      'Retos: Reformas sociales',
      'Crisis: Política y económica',
      'Apuesta: Transición energética',
      'Horizonte: Elecciones 2026',
    ],
    color: '#2a1a5a',
    viewers: '77.2K',
    chatMsgs: [
      { user: 'FuturoCO', color: '#53fc18', badge: 'MOD', text: 'Qué nos espera para el 2026? 🤔' },
      { user: 'NatalyStream', color: '#f472b6', badge: 'SUB', text: 'Colombia siempre me sorprende' },
      { user: 'EconoCO', color: '#38bdf8', text: 'La inflación sigue siendo lo más duro' },
      { user: 'SamuelBog', color: '#fbbf24', text: 'Las elecciones 2026 serán intensas' },
      { user: 'HistoStream_Fan', color: '#a78bfa', badge: 'SUB', text: 'Gracias por todo el contenido!! 🙏' },
      { user: 'MiguelColCO', color: '#ff7800', text: 'Colombia no se rinde nunca 🇨🇴❤️' },
    ],
  },
];

const HITOS = [...HITOS_LEFT, ...HITOS_RIGHT];

// ─────────────────────────────────────────────────────────────────────────────
// MACBOOK KEYBOARD — decorativo
// ─────────────────────────────────────────────────────────────────────────────
const MacKeyboard = () => (
  <div className="d20-mac-keyboard">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="d20-mac-key" />
    ))}
    <div className="d20-mac-key d20-mac-key--wide" />
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={`r2-${i}`} className="d20-mac-key" />
    ))}
    <div className="d20-mac-key" />
    <div className="d20-mac-key d20-mac-key--space" style={{ gridColumn: 'span 5' }} />
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={`r3-${i}`} className="d20-mac-key" />
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export const Decade20s = () => {
  const [activeHito, setActiveHito] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [streamState, setStreamState] = useState('off'); // 'off' | 'static' | 'on'
  const [volume, setVolume] = useState(100);
  const [chatLog, setChatLog] = useState([]);

  const navigate = useNavigate();
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);
  const activeRef = useRef(null);
  const streamRef = useRef('off');
  const chatEndRef = useRef(null);
  const chatTimerRef = useRef(null);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    activeRef.current = activeHito;
  }, [activeHito]);

  useEffect(() => {
    streamRef.current = streamState;
  }, [streamState]);

  // Auto-scroll del chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  // Volumen en tiempo real
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  // Limpiar al desmontar
  useEffect(() => {
    return () => {
      stopAudioRaw();
      clearChatTimer();
    };
  }, []);

  const stopAudioRaw = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
  };

  const clearChatTimer = () => {
    if (chatTimerRef.current) {
      clearInterval(chatTimerRef.current);
      chatTimerRef.current = null;
    }
  };

  // Simular mensajes del chat apareciendo uno a uno
  const startChatAnimation = (hito) => {
    setChatLog([]);
    clearChatTimer();
    let idx = 0;
    const msgs = hito.chatMsgs;
    chatTimerRef.current = setInterval(() => {
      if (idx < msgs.length) {
        setChatLog((prev) => [...prev, msgs[idx]]);
        idx++;
      } else {
        clearChatTimer();
      }
    }, 700);
  };

  const startAudio = (hito) => {
    stopAudioRaw();
    const audio = new Audio(hito.audioSrc);
    audio.volume = volume / 100;
    audioRef.current = audio;
    audio.addEventListener('ended', () => {
      isPlayingRef.current = false;
      setIsPlaying(false);
    });
    audio
      .play()
      .then(() => {
        isPlayingRef.current = true;
        setIsPlaying(true);
      })
      .catch((err) => console.warn('Audio no disponible aún:', hito.audioSrc, err));
  };

  const triggerStatic = (callback) => {
    setStreamState('static');
    streamRef.current = 'static';
    setTimeout(() => {
      setStreamState('on');
      streamRef.current = 'on';
      if (callback) callback();
    }, 500);
  };

  const handleHitoClick = (hito) => {
    // Mismo hito → toggle play/pausa
    if (activeRef.current?.id === hito.id) {
      const audio = audioRef.current;
      if (!audio) return;
      if (isPlayingRef.current) {
        audio.pause();
        isPlayingRef.current = false;
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => {
            isPlayingRef.current = true;
            setIsPlaying(true);
          })
          .catch((err) => console.warn(err));
      }
      return;
    }

    // Nuevo hito
    stopAudioRaw();
    clearChatTimer();
    setIsPlaying(false);

    const launch = () => {
      setActiveHito(hito);
      activeRef.current = hito;
      setImageIndex(0);
      startAudio(hito);
      startChatAnimation(hito);
    };

    if (streamRef.current === 'off') {
      setStreamState('static');
      streamRef.current = 'static';
      setTimeout(() => {
        setStreamState('on');
        streamRef.current = 'on';
        launch();
      }, 400);
    } else {
      triggerStatic(launch);
    }
  };

  const emergencyStop = () => {
    stopAudioRaw();
    clearChatTimer();
    setIsPlaying(false);
    setActiveHito(null);
    activeRef.current = null;
    setStreamState('off');
    streamRef.current = 'off';
    setImageIndex(0);
    setChatLog([]);
  };

  const prevImage = () => {
    if (!activeHito) return;
    setImageIndex((i) => (i - 1 + activeHito.images.length) % activeHito.images.length);
  };

  const nextImage = () => {
    if (!activeHito) return;
    setImageIndex((i) => (i + 1) % activeHito.images.length);
  };

  // ── Botón de hito ───────────────────────────────────────────────────────
  const HitoBtn = ({ hito }) => {
    const isActive = activeHito?.id === hito.id;
    const isSonando = isActive && isPlaying;
    const isPaused = isActive && !isPlaying;
    return (
      <motion.button
        className={`d20-hito-btn ${isSonando ? 'd20-hito-btn--on' : ''} ${isPaused ? 'd20-hito-btn--paused' : ''}`}
        style={{ '--hito-color': hito.color }}
        onClick={() => handleHitoClick(hito)}
        whileTap={{ scale: 0.97 }}
      >
        <span className="d20-hito-num">{String(hito.id).padStart(2, '0')}</span>
        <div className="d20-hito-info">
          <span className="d20-hito-year">{hito.year}</span>
          <span className="d20-hito-title">{hito.title}</span>
        </div>
        <div className={`d20-hito-icon ${isSonando ? 'd20-hito-icon--on' : ''} ${isPaused ? 'd20-hito-icon--pause' : ''}`}>
          {isSonando ? '⏸' : isPaused ? '▶' : '▷'}
        </div>
      </motion.button>
    );
  };

  // ── RENDER ──────────────────────────────────────────────────────────────
  return (
    <motion.div
      className="d20-root"
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="d20-book">
        {/* ════════════ PÁGINA IZQUIERDA ════════════ */}
        <div className="d20-page d20-page--left">
          <div className="d20-spine-shadow d20-spine-shadow--left" />
          <div className="d20-page-content">
            <div className="d20-header">
              <Link to="/timeline" className="d20-back-link">
                ← Volver a la estantería
              </Link>
              <span className="d20-chapter-label">CAPÍTULO 7</span>
              <h1 className="d20-chapter-title">2020 — 2026</h1>
              <h2 className="d20-chapter-subtitle">Pandemia, estallido social y cambio político</h2>
            </div>
            {/* ── MACBOOK ── */}
            <div className="d20-mac-wrap">
              <div className="d20-mac">
                {/* Tapa con pantalla */}
                <div className="d20-mac-lid">
                  <div className="d20-mac-camera" />
                  {/* Pantalla — App HistoStream */}
                  <div className="d20-mac-screen">
                    <div className="d20-app">
                      {/* Barra del OS / navegador */}
                      <div className="d20-app-bar">
                        <div className="d20-app-dot d20-app-dot--r" />
                        <div className="d20-app-dot d20-app-dot--y" />
                        <div className="d20-app-dot d20-app-dot--g" />
                        <div className="d20-app-url">
                          <span className="d20-app-url-text">🔒 histostream.co/en-vivo</span>
                        </div>
                        <span className="d20-app-logo">
                          <span className="d20-app-logo-hist">HISTO</span>
                          <span className="d20-app-logo-stream">STREAM</span>
                        </span>
                      </div>
                      {/* Navbar de la app */}
                      <div className="d20-app-nav">
                        <span className="d20-app-nav-item d20-app-nav-item--active">EN VIVO</span>
                        <span className="d20-app-nav-item">ARCHIVO</span>
                        <span className="d20-app-nav-item">CLIPS</span>
                        <div className="d20-app-nav-live">
                          <div className="d20-app-nav-live-dot" />
                          <span className="d20-app-nav-live-text">LIVE</span>
                          <span className="d20-app-nav-viewers">
                            &nbsp;{activeHito ? activeHito.viewers : '0'} espectadores
                          </span>
                        </div>
                      </div>
                      {/* Cuerpo: stream + chat */}
                      <div className="d20-app-body">
                        {/* Zona de video */}
                        <div className="d20-stream-zone">
                          <div className="d20-stream-screen">
                            {streamState === 'off' && (
                              <div className="d20-stream-off">
                                <span className="d20-stream-off-icon">📡</span>
                                <span className="d20-stream-off-text">Selecciona un hito para empezar</span>
                              </div>
                            )}
                            {streamState === 'static' && <div className="d20-stream-static" />}
                            {streamState === 'on' && activeHito && (
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={`${activeHito.id}-${imageIndex}`}
                                  src={activeHito.images[imageIndex]}
                                  alt={activeHito.title}
                                  className="d20-stream-img"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </AnimatePresence>
                            )}
                            {/* HUD superpuesto */}
                            <div className="d20-stream-hud">
                              {streamState === 'on' && (
                                <>
                                  <span className="d20-stream-badge-live">● EN VIVO</span>
                                  <span className="d20-stream-badge-hd">HD</span>
                                  {activeHito && (
                                    <div className="d20-stream-caption">
                                      <span className="d20-stream-caption-year">{activeHito.year}</span>
                                      <span className="d20-stream-caption-title">{activeHito.title}</span>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                          {/* Controles del stream */}
                          <div className="d20-stream-controls">
                            <button
                              className={`d20-ctrl-btn d20-ctrl-btn--play`}
                              onClick={() => activeHito && handleHitoClick(activeHito)}
                              disabled={!activeHito}
                              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                            >
                              {isPlaying ? '⏸' : '▶'}
                            </button>
                            <button
                              className="d20-ctrl-btn d20-ctrl-btn--stop"
                              onClick={emergencyStop}
                              aria-label="Detener"
                            >
                              ■
                            </button>
                            <button
                              className="d20-ctrl-btn"
                              onClick={prevImage}
                              disabled={!activeHito || streamState !== 'on'}
                              aria-label="Imagen anterior"
                            >
                              ⏮
                            </button>
                            <button
                              className="d20-ctrl-btn"
                              onClick={nextImage}
                              disabled={!activeHito || streamState !== 'on'}
                              aria-label="Imagen siguiente"
                            >
                              ⏭
                            </button>
                            <div className="d20-ctrl-vol">
                              <span className="d20-ctrl-vol-icon">🔊</span>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="d20-ctrl-vol-slider"
                                style={{ '--vol-pct': `${volume}%` }}
                                aria-label="Volumen"
                              />
                            </div>
                            {/* Dots de imagen */}
                            {activeHito && (
                              <div className="d20-ctrl-dots">
                                {activeHito.images.map((_, i) => (
                                  <div
                                    key={i}
                                    className={`d20-ctrl-dot ${i === imageIndex ? 'd20-ctrl-dot--active' : ''}`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Chat */}
                        <div className="d20-chat">
                          <div className="d20-chat-header">
                            <span className="d20-chat-title">CHAT EN VIVO</span>
                            <span className="d20-chat-count">
                              {chatLog.length > 0 ? `${chatLog.length} msgs` : ''}
                            </span>
                          </div>
                          <div className="d20-chat-messages">
                            <AnimatePresence>
                              {chatLog.map((msg, i) => (
                                <motion.div
                                  key={i}
                                  className="d20-chat-msg"
                                  initial={{ opacity: 0, x: 8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.25 }}
                                >
                                  <span className="d20-chat-user" style={{ color: msg.color }}>
                                    {msg.badge && <span className="d20-chat-badge">{msg.badge}</span>}
                                    {msg.user}
                                  </span>
                                  <span className="d20-chat-text">{msg.text}</span>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                            <div ref={chatEndRef} />
                          </div>
                          <div className="d20-chat-input">
                            <div className="d20-chat-input-box">
                              <span className="d20-chat-input-text">Escribe un mensaje...</span>
                            </div>
                            <button className="d20-chat-send">Chat</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bisagra */}
                <div className="d20-mac-hinge" />
                {/* Base / teclado */}
                <div className="d20-mac-base">
                  <MacKeyboard />
                  <div className="d20-mac-trackpad" />
                </div>
              </div>
            </div>
            {/* Hitos izquierda */}
            <div className="d20-hitos-list">
              {HITOS_LEFT.map((h) => (
                <HitoBtn key={h.id} hito={h} />
              ))}
            </div>
            {/* Ficha histórica */}
            <div className="d20-ficha">
              <div className="d20-ficha-tab">DATO CLAVE</div>
              <div className="d20-ficha-body">
                <div className="d20-ficha-header-row">
                  <span className="d20-ficha-ref">Ref. {activeHito ? activeHito.year : '—'}</span>
                  <span className="d20-ficha-sello">{activeHito ? '✦ ARCHIVADO' : 'PENDIENTE'}</span>
                </div>
                {activeHito ? (
                  activeHito.fichaLineas.map((l, i) => (
                    <div key={i} className="d20-ficha-linea">
                      <span className="d20-ficha-linea-text">{l}</span>
                    </div>
                  ))
                ) : (
                  <div className="d20-ficha-empty">Selecciona un hito para ver la ficha</div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* ════════════ PÁGINA DERECHA ════════════ */}
        <div className="d20-page d20-page--right">
          <div className="d20-spine-shadow d20-spine-shadow--right" />
          <div className="d20-page-content">
            {/* Visor de guión */}
            <div className="d20-script-viewer">
              <div className="d20-script-header">
                <span className="d20-script-icon">📡</span>
                <span className="d20-script-title">HISTOSTREAM — EN VIVO</span>
                {isPlaying && <span className="d20-script-live">● AL AIRE</span>}
              </div>
              <div className="d20-script-body">
                <AnimatePresence mode="wait">
                  {activeHito ? (
                    <motion.div
                      key={activeHito.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="d20-script-headline">
                        {activeHito.year} — {activeHito.title}
                      </h3>
                      {activeHito.guion.split('\n\n').map((para, i) => (
                        <p
                          key={i}
                          className={i === 0 ? 'd20-script-para d20-script-para--header' : 'd20-script-para'}
                        >
                          {para}
                        </p>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="d20-script-empty"
                    >
                      <span className="d20-script-empty-icon">📡</span>
                      <p>
                        Presiona un hito para leer
                        <br />
                        el guión del HistoStream
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* Hitos derecha */}
            <div className="d20-hitos-list">
              {HITOS_RIGHT.map((h) => (
                <HitoBtn key={h.id} hito={h} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};