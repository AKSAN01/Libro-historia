import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

const HITOS = [...HITOS_LEFT, ...HITOS_RIGHT];

// ─────────────────────────────────────────────────────────────────────────────
// SVG DECORATIVOS — era digital de los 60s
// ─────────────────────────────────────────────────────────────────────────────
const CassetteDecor = () => (
  <svg viewBox="0 0 110 68" className="d90-decor-svg" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="108" height="66" rx="5" fill="#1a1814" stroke="#3a3530" strokeWidth="1.5"/>
    <rect x="8" y="6" width="94" height="38" rx="2" fill="#111" stroke="#2a2520" strokeWidth="1"/>
    <text x="55" y="21" textAnchor="middle" fill="#b8860b" fontSize="6" fontFamily="monospace" fontWeight="bold">NOTIHISTÓRICO</text>
    <text x="55" y="31" textAnchor="middle" fill="#666" fontSize="4.5" fontFamily="monospace">Colombia 1990–2000</text>
    <circle cx="34" cy="52" r="9" fill="#0a0a0a" stroke="#3a3530" strokeWidth="1.2"/>
    <circle cx="34" cy="52" r="4" fill="#1a1814" stroke="#b8860b" strokeWidth="0.7"/>
    <circle cx="76" cy="52" r="9" fill="#0a0a0a" stroke="#3a3530" strokeWidth="1.2"/>
    <circle cx="76" cy="52" r="4" fill="#1a1814" stroke="#b8860b" strokeWidth="0.7"/>
    <rect x="44" y="46" width="22" height="12" rx="1.5" fill="#0a0a0a" stroke="#2a2520" strokeWidth="0.8"/>
    <text x="8" y="64" fill="#444" fontSize="4" fontFamily="monospace">▶ AUDIO CINTA</text>
  </svg>
);

const FloppyDecor = () => (
  <svg viewBox="0 0 60 68" className="d90-decor-svg" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="58" height="66" rx="3" fill="#2a2a2a" stroke="#444" strokeWidth="1.2"/>
    <rect x="8" y="4" width="36" height="22" rx="1" fill="#111" stroke="#333" strokeWidth="1"/>
    <rect x="28" y="4" width="10" height="22" fill="#1a1a1a" stroke="#333" strokeWidth="0.8"/>
    <rect x="6" y="32" width="48" height="30" rx="1" fill="#1a1a1a" stroke="#333" strokeWidth="0.8"/>
    <rect x="18" y="38" width="24" height="18" rx="1" fill="#333" stroke="#555" strokeWidth="0.8"/>
    <text x="30" y="50" textAnchor="middle" fill="#666" fontSize="4" fontFamily="monospace">DATA</text>
    <text x="30" y="62" textAnchor="middle" fill="#555" fontSize="3.5" fontFamily="monospace">1.44 MB</text>
  </svg>
);

const CDDecor = () => (
  <svg viewBox="0 0 64 64" className="d90-decor-svg" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="none" stroke="#888" strokeWidth="1"/>
    <circle cx="32" cy="32" r="30" fill="url(#cdGrad)"/>
    <defs>
      <radialGradient id="cdGrad" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#e8e8e8"/>
        <stop offset="40%" stopColor="#c0c8d8"/>
        <stop offset="70%" stopColor="#a0b0c8"/>
        <stop offset="100%" stopColor="#8090a8"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="5" fill="#ddd" stroke="#aaa" strokeWidth="0.8"/>
    <circle cx="32" cy="32" r="2" fill="#bbb"/>
    <text x="32" y="26" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="4" fontFamily="monospace">Interactiva 60s</text>
    <text x="32" y="38" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="3.5" fontFamily="monospace">Data Acústica</text>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export const Decade60s = () => {
  const [activeHito, setActiveHito]   = useState(null);
  const [isPlaying, setIsPlaying]     = useState(false);
  const [imageIndex, setImageIndex]   = useState(0);
  const [tvState, setTvState]         = useState('off');
  const [staticFlash, setStaticFlash] = useState(false);
  // Volumen: inicia en 100 (máximo)
  const [volume, setVolume]           = useState(100);
  const navigate = useNavigate();

  // Refs — igual que el original, sin cambios en la lógica
  const currentAudioRef = useRef(null);
  const isPlayingRef    = useRef(false);
  const activeHitoRef   = useRef(null);
  const tvStateRef      = useRef('off');

  useEffect(() => { isPlayingRef.current  = isPlaying;  }, [isPlaying]);
  useEffect(() => { activeHitoRef.current = activeHito; }, [activeHito]);
  useEffect(() => { tvStateRef.current    = tvState;    }, [tvState]);

  // FIX VOLUMEN: sincronizar el audio activo cada vez que cambia el slider
  useEffect(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.src = '';
      }
    };
  }, []);

  const stopAudioRaw = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
  };

  // FIX AUDIO: aplica volumen desde el estado al crear cada nuevo Audio
  const startAudio = (hito) => {
    stopAudioRaw();
    const audio = new Audio(hito.audioSrc);
    audio.volume = volume / 100; // ← aplica volumen actual al arrancar
    currentAudioRef.current = audio;
    audio.addEventListener('ended', () => {
      isPlayingRef.current = false;
      setIsPlaying(false);
    });
    audio.play()
      .then(() => {
        isPlayingRef.current = true;
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Audio no pudo reproducirse:', hito.audioSrc, err);
      });
  };

  const triggerStatic = (callback) => {
    setTvState('static');
    tvStateRef.current = 'static';
    setStaticFlash(true);
    setTimeout(() => {
      setStaticFlash(false);
      setTvState('on');
      tvStateRef.current = 'on';
      if (callback) callback();
    }, 600);
  };

  const handleHitoClick = (hito) => {
    if (activeHitoRef.current && activeHitoRef.current.id === hito.id) {
      const audio = currentAudioRef.current;
      if (!audio) return;
      if (isPlayingRef.current) {
        audio.pause();
        isPlayingRef.current = false;
        setIsPlaying(false);
      } else {
        audio.play()
          .then(() => { isPlayingRef.current = true; setIsPlaying(true); })
          .catch((err) => console.warn('No se pudo reanudar:', err));
      }
      return;
    }
    stopAudioRaw();
    setIsPlaying(false);
    const launch = () => {
      setActiveHito(hito);
      activeHitoRef.current = hito;
      setImageIndex(0);
      startAudio(hito);
    };
    if (tvStateRef.current === 'off') {
      setTvState('static');
      tvStateRef.current = 'static';
      setStaticFlash(true);
      setTimeout(() => {
        setStaticFlash(false);
        setTvState('on');
        tvStateRef.current = 'on';
        launch();
      }, 500);
    } else {
      triggerStatic(launch);
    }
  };

  // Parada total
  const emergencyStop = () => {
    stopAudioRaw();
    setIsPlaying(false);
    setActiveHito(null);
    activeHitoRef.current = null;
    setTvState('off');
    tvStateRef.current = 'off';
    setImageIndex(0);
  };

  const prevImage = () => {
    if (!activeHito) return;
    setImageIndex(i => (i - 1 + activeHito.images.length) % activeHito.images.length);
  };
  const nextImage = () => {
    if (!activeHito) return;
    setImageIndex(i => (i + 1) % activeHito.images.length);
  };

  // Botón de hito — estilo GUI 60s
  const HitoBtn = ({ hito }) => {
    const isActive  = activeHito?.id === hito.id;
    const isSonando = isActive && isPlaying;
    const isPaused  = isActive && !isPlaying;
    return (
      <motion.button
        className={`d90-hito-btn ${isSonando ? 'd90-hito-btn--on' : ''} ${isPaused ? 'd90-hito-btn--paused' : ''}`}
        style={{ '--hito-color': hito.color }}
        onClick={() => handleHitoClick(hito)}
        whileTap={{ scale: 0.97 }}
      >
        <span className="d90-hito-num">{String(hito.id).padStart(2, '0')}</span>
        <div className="d90-hito-info">
          <span className="d90-hito-year">{hito.year}</span>
          <span className="d90-hito-title">{hito.title}</span>
        </div>
        {/* Ícono acción: ▶ para reproducir, ⏸ para pausar */}
        <div className={`d90-hito-icon ${isSonando ? 'd90-hito-icon--on' : ''} ${isPaused ? 'd90-hito-icon--pause' : ''}`}>
          {isSonando ? '⏸' : isPaused ? '▶' : '▷'}
        </div>
      </motion.button>
    );
  };

  // ─── RENDER ───────────────────────────────────────────────────────────────
  return (
    <motion.div
      className="d90-root"
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="d90-book">

        {/* ════════════════════ PÁGINA IZQUIERDA ════════════════════ */}
        <div className="d90-page d90-page--left">
          <div className="d90-spine-shadow d90-spine-shadow--left" />
          <div className="d90-page-content">

            {/* Encabezado */}
            <div className="d90-header">
              <Link to="/timeline" className="d90-back-link">← Volver a la estantería</Link>
              <span className="d90-chapter-label">CAPÍTULO 4</span>
              <h1 className="d90-chapter-title">1990 — 2000</h1>
              <h2 className="d90-chapter-subtitle">Narcotráfico, constitución y crisis</h2>
            </div>

            {/* ── TELEVISOR ESTILO 60s ── */}
            <div className="d90-tv-wrap">
              <div className={`d90-tv ${tvState === 'on' ? 'd90-tv--on' : ''}`}>

                {/* Antena */}
                <div className="d90-tv-antenna">
                  <div className="d90-antenna-base" />
                  <div className="d90-antenna-left" />
                  <div className="d90-antenna-right" />
                </div>

                {/* Cuerpo gris industrial */}
                <div className="d90-tv-frame">

                  {/* Zona: pantalla izquierda + panel derecho */}
                  <div className="d90-tv-body">

                    {/* Pantalla */}
                    <div className="d90-tv-screen-zone">
                      <div className="d90-tv-bezel">
                        <div className={`d90-tv-screen ${staticFlash ? 'd90-tv-screen--static' : ''}`}>
                          {tvState === 'off' && (
                            <div className="d90-tv-off">
                              <div className="d90-tv-off-dot" />
                              <span className="d90-tv-off-text">Selecciona un hito</span>
                            </div>
                          )}
                          {tvState === 'static' && (
                            <div className="d90-tv-static"><div className="d90-static-canvas" /></div>
                          )}
                          {tvState === 'on' && activeHito && (
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={`${activeHito.id}-${imageIndex}`}
                                src={activeHito.images[imageIndex]}
                                alt={activeHito.title}
                                className="d90-tv-img"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onError={e => { e.target.style.display = 'none'; }}
                              />
                            </AnimatePresence>
                          )}
                          <div className="d90-crt-scanlines" />
                          <div className="d90-crt-glow" />
                        </div>
                        {tvState === 'on' && activeHito && (
                          <div className="d90-img-dots">
                            {activeHito.images.map((_, i) => (
                              <span key={i} className={`d90-img-dot ${i === imageIndex ? 'd90-img-dot--active' : ''}`} />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Panel de control lateral — estilo GUI 60s */}
                    <div className="d90-tv-panel">
                      {/* Display LED digital */}
                      <div className="d90-tv-display">
                        <span className="d90-tv-display-text">
                          {activeHito ? `${imageIndex + 1}/${activeHito.images.length}` : '--'}
                        </span>
                      </div>

                      {/* Botones imagen — solo dos, grandes */}
                      <button className="d90-panel-btn d90-panel-btn--nav" onClick={prevImage} disabled={!activeHito || tvState !== 'on'} aria-label="Imagen anterior">▲</button>
                      <button className="d90-panel-btn d90-panel-btn--nav" onClick={nextImage} disabled={!activeHito || tvState !== 'on'} aria-label="Imagen siguiente">▼</button>

                      {/* Botones Menu / Power */}
                      <button className="d90-panel-btn d90-panel-btn--wide" onClick={() => { emergencyStop(); navigate('/timeline'); }}>Menu</button>
                      <button
                        className={`d90-panel-btn d90-panel-btn--wide d90-panel-btn--power ${tvState !== 'off' ? 'd90-panel-btn--power-on' : ''}`}
                        onClick={emergencyStop}
                      >Power</button>

                      {/* LED ACTIVE */}
                      <div className="d90-panel-active">
                        <div className={`d90-panel-led ${tvState !== 'off' ? 'd90-panel-led--on' : ''}`} />
                        <span className="d90-panel-active-label">ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Marca inferior */}
                  <div className="d90-tv-brand">NOTICOLOR</div>
                </div>
              </div>
            </div>

            {/* ── HITOS IZQUIERDA (1·2·3) ── */}
            <div className="d90-hitos-list d90-hitos-list--left">
              {HITOS_LEFT.map(h => <HitoBtn key={h.id} hito={h} />)}
            </div>

            {/* ── FICHA BIBLIOGRÁFICA ── */}
            <div className="d90-ficha">
              <div className="d90-ficha-tab">DATO CLAVE</div>
              <div className="d90-ficha-body">
                <div className="d90-ficha-header-row">
                  <span className="d90-ficha-ref">Ref. {activeHito ? activeHito.year : '—'}</span>
                  <span className="d90-ficha-sello">{activeHito ? '✦ ARCHIVADO' : 'PENDIENTE'}</span>
                </div>
                {activeHito ? (
                  activeHito.fichaLineas.map((l, i) => (
                    <div key={i} className="d90-ficha-linea"><span className="d90-ficha-linea-text">{l}</span></div>
                  ))
                ) : (
                  <div className="d90-ficha-empty">Selecciona un hito para ver la ficha histórica</div>
                )}
              </div>
            </div>

            {/* ── DECORACIÓN ERA DIGITAL ── */}
            <div className="d90-decor-row">
              <CassetteDecor />
              <FloppyDecor />
              <CDDecor />
            </div>

          </div>
        </div>

        {/* ════════════════════ PÁGINA DERECHA ════════════════════ */}
        <div className="d90-page d90-page--right">
          <div className="d90-spine-shadow d90-spine-shadow--right" />
          <div className="d90-page-content">

            {/* ── VISOR DE GUIÓN ── */}
            <div className="d90-script-viewer">
              <div className="d90-script-header">
                <span className="d90-script-icon">📺</span>
                <span className="d90-script-title">NOTIHISTÓRICO — EN VIVO</span>
                {isPlaying && <span className="d90-script-live">● AL AIRE</span>}
              </div>
              <div className="d90-script-body">
                <AnimatePresence mode="wait">
                  {activeHito ? (
                    <motion.div
                      key={activeHito.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="d90-script-headline">{activeHito.year} — {activeHito.title}</h3>
                      {activeHito.guion.split('\n\n').map((para, i) => (
                        <p key={i} className={i === 0 ? 'd90-script-para d90-script-para--header' : 'd90-script-para'}>{para}</p>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="d90-script-empty">
                      <span className="d90-script-empty-icon">📡</span>
                      <p>Presiona un hito para leer<br/>el guión del Notihistórico</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ── HITOS DERECHA (4·5·6·7) ── */}
            <div className="d90-hitos-list">
              {HITOS_RIGHT.map(h => <HitoBtn key={h.id} hito={h} />)}
            </div>

            {/* ── BARRA MAESTRA — fondo página derecha ── */}
            <div className="d90-master-bar">
              <div className="d90-master-slider-wrap">
                <div className="d90-master-track">
                  <div className="d90-master-ticks">
                    {Array.from({ length: 11 }).map((_, i) => <div key={i} className="d90-master-tick" />)}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={e => setVolume(Number(e.target.value))}
                    className="d90-vol-slider"
                    aria-label="Volumen general"
                  />
                </div>
                <span className="d90-master-label">Volumen General</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
