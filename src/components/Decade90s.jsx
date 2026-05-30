import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Decade90s.css';

// ── Imports de audio ──────────────────────────────────────────────────────────
import audio1 from '../assets/90s/audio/hito1.mp3';
import audio2 from '../assets/90s/audio/hito2.mp3';
import audio3 from '../assets/90s/audio/hito3.mp3';
import audio4 from '../assets/90s/audio/hito4.mp3';
import audio5 from '../assets/90s/audio/hito5.mp3';
import audio6 from '../assets/90s/audio/hito6.mp3';
import audio7 from '../assets/90s/audio/hito7.mp3';

// ── Imports de imágenes ───────────────────────────────────────────────────────
import img1_1 from '../assets/90s/imagenes/hito1_foto1.png';
import img1_2 from '../assets/90s/imagenes/hito1_foto2.png';
import img1_3 from '../assets/90s/imagenes/hito1_foto3.png';
import img2_1 from '../assets/90s/imagenes/hito2_foto1.png';
import img2_2 from '../assets/90s/imagenes/hito2_foto2.png';
import img2_3 from '../assets/90s/imagenes/hito2_foto3.png';
import img3_1 from '../assets/90s/imagenes/hito3_foto1.png';
import img3_2 from '../assets/90s/imagenes/hito3_foto2.png';
import img4_1 from '../assets/90s/imagenes/hito4_foto1.png';
import img4_2 from '../assets/90s/imagenes/hito4_foto2.png';
import img5_1 from '../assets/90s/imagenes/hito5_foto1.png';
import img5_2 from '../assets/90s/imagenes/hito5_foto2.png';
import img6_1 from '../assets/90s/imagenes/hito6_foto1.png';
import img6_2 from '../assets/90s/imagenes/hito6_foto2.png';
import img7_1 from '../assets/90s/imagenes/hito7_foto1.png';
import img7_2 from '../assets/90s/imagenes/hito7_foto2.png';
import img7_3 from '../assets/90s/imagenes/hito7_foto3.png';

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — idénticos al original
// ─────────────────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1, year: '1990–1993', title: 'Violencia del Narcotráfico',
    shortDesc: 'Atentados, asesinatos y enfrentamientos sacuden al país.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, e iniciamos esta emisión con noticias preocupantes sobre la creciente violencia que afecta al país.\n\n' +
      'Continúan los atentados, asesinatos y enfrentamientos relacionados con el narcotráfico, mientras aumentan las tensiones entre el Estado y grupos criminales liderados por reconocidos capos de la droga.\n\n' +
      'La preocupación ciudadana crece ante una situación de orden público cada vez más compleja. Desde la redacción de Notihistórico, seguiremos informando.',
    images: [img1_1, img1_2, img1_3], audioSrc: audio1,
    datoClave: '1990–1993 · Cartel de Medellín · Narcoterrorismo · Crisis de orden público nacional',
    fichaLineas: ['Período: 1990 – 1993','Actor: Cartel de Medellín','Tipo: Narcoterrorismo','Afectados: Civiles, jueces, políticos','Contexto: Crisis de orden público'],
    color: '#7a1a1a',
  },
  {
    id: 2, year: '1991', title: 'Constitución Política de 1991',
    shortDesc: 'Reforma política que amplía derechos y moderniza el Estado.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'En noticias nacionales, el gobierno del presidente César Gaviria promueve una nueva Constitución para el país. Esta reforma busca fortalecer la democracia, ampliar los derechos ciudadanos y modernizar las instituciones del Estado.\n\n' +
      'Sin embargo, algunas decisiones generan debate, especialmente aquellas relacionadas con la extradición y su posible impacto en la lucha contra el narcotráfico.\n\n' +
      'Colombia estrena un pacto social que reconoce por primera vez su diversidad étnica, crea la acción de tutela y establece la Corte Constitucional como guardiana de los derechos fundamentales.',
    images: [img2_1, img2_2, img2_3], audioSrc: audio2,
    datoClave: '4 de julio de 1991 · Gobierno Gaviria · 380 artículos · Reemplaza la Constitución de 1886',
    fichaLineas: ['Fecha: 4 julio 1991','Promotor: Presidente Gaviria','Artículos: 380','Reemplaza: Constitución 1886','Nuevo: Acción de tutela'],
    color: '#1a7a3c',
  },
  {
    id: 3, year: '1991', title: 'Entrega de Pablo Escobar',
    shortDesc: 'El capo más buscado del mundo se entrega bajo sus propias condiciones.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Atención, última hora. Pablo Emilio Escobar Gaviria se entrega oficialmente a las autoridades colombianas.\n\n' +
      'La decisión ocurre en medio de los recientes cambios constitucionales y bajo un acuerdo que le permite permanecer en un centro de reclusión especial conocido como "La Catedral", construido bajo sus propias condiciones.\n\n' +
      'El país permanece atento al rumbo de este caso. Los analistas advierten: el capo negoció sus términos, eligió su guardia y mantiene el control de su organización desde adentro.',
    images: [img3_1, img3_2], audioSrc: audio3,
    datoClave: '1991 · La Catedral, Envigado · Decreto de sometimiento a la justicia · Gobierno Gaviria',
    fichaLineas: ['Fecha: 19 junio 1991','Lugar: La Catedral, Envigado','Marco: Decreto sometimiento','Gobierno: Gaviria','Nota: Construida por él mismo'],
    color: '#8B3A0A',
  },
];

const HITOS_RIGHT = [
  {
    id: 4, year: '1992', title: 'Fuga de Pablo Escobar',
    shortDesc: 'El capo escapa de La Catedral cuando el gobierno intenta trasladarlo.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Interrumpimos nuestra programación con información de última hora. Se confirma la fuga de Pablo Escobar de la prisión conocida como La Catedral.\n\n' +
      'Autoridades adelantan operativos de búsqueda, mientras aumenta la preocupación por el posible regreso de episodios de violencia asociados al narcotráfico.\n\n' +
      'El Bloque de Búsqueda, apoyado por la DEA y el Gobierno de Estados Unidos, inicia las operaciones más intensas de la historia reciente del país.',
    images: [img4_1, img4_2], audioSrc: audio4,
    datoClave: '22 de julio de 1992 · La Catedral, Envigado · Inicio del Bloque de Búsqueda',
    fichaLineas: ['Fecha: 22 julio 1992','Lugar: La Catedral, Envigado','Respuesta: Bloque de Búsqueda','Apoyo: DEA / EE.UU.','Impacto: Crisis credibilidad gobierno'],
    color: '#5A0000',
  },
  {
    id: 5, year: '1993', title: 'Muerte de Pablo Escobar',
    shortDesc: 'El Bloque de Búsqueda abate al capo en Los Olivos, Medellín.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'En noticias de última hora, autoridades confirman la muerte de Pablo Emilio Escobar Gaviria en el barrio Los Olivos, en Medellín, tras un operativo del Bloque de Búsqueda.\n\n' +
      'Diversos sectores esperan que este hecho represente el inicio de una etapa de mayor tranquilidad para el país, aunque persisten preocupaciones sobre el futuro del narcotráfico.\n\n' +
      'Dieciséis meses duró la cacería más intensa de la historia colombiana.',
    images: [img5_1, img5_2], audioSrc: audio5,
    datoClave: '2 de diciembre de 1993 · Los Olivos, Medellín · Bloque de Búsqueda · Fin del Cartel de Medellín',
    fichaLineas: ['Fecha: 2 dic 1993','Lugar: Los Olivos, Medellín','Operativo: Bloque de Búsqueda','Cacería: 16 meses','Resultado: Fin Cartel Medellín'],
    color: '#7a1a1a',
  },
  {
    id: 6, year: '1998–1999', title: 'Crisis Económica',
    shortDesc: 'Recesión, desempleo masivo y dificultades para miles de familias.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Atención colombianos: estos años no han sido los mejores para la economía colombiana, que hoy enfrenta momentos difíciles. El desempleo se agudiza y miles de familias reportan dificultades económicas.\n\n' +
      'Expertos señalan problemas relacionados con la apertura económica de años anteriores, desequilibrios fiscales y una desaceleración de la economía.\n\n' +
      'El gobierno hace un llamado a la calma mientras se anuncian nuevas medidas económicas.',
    images: [img6_1, img6_2], audioSrc: audio6,
    datoClave: '1998–1999 · Gobierno Pastrana · Crisis fiscal · Desempleo masivo',
    fichaLineas: ['Período: 1998–1999','Desempleo: +20%','Crisis: Colapso UPAC','Causa: Apertura económica','Gobierno: Pastrana'],
    color: '#4a3a00',
  },
  {
    id: 7, year: '1999–2000', title: 'Plan Colombia',
    shortDesc: 'Estrategia antidrogas con apoyo de EE.UU. contra violencia y narcotráfico.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Última hora: dada la crisis económica y en especial el aumento de cultivos y del mercado del narcotráfico, el gobierno nacional anuncia oficialmente el inicio del Plan Colombia.\n\n' +
      'Una estrategia que busca fortalecer la seguridad, combatir el narcotráfico y reducir la violencia con apoyo internacional, especialmente de Estados Unidos.\n\n' +
      'Hasta aquí esta emisión especial. Continuaremos informando sobre los hechos que marcan el rumbo de Colombia. Muy buenas noches.',
    images: [img7_1, img7_2, img7_3], audioSrc: audio7,
    datoClave: '1999–2000 · Gobierno Pastrana · Plan Colombia · Apoyo de EE.UU.',
    fichaLineas: ['Período: 1999–2000','Inversión: USD $7.500M','Aliado: Estados Unidos','Estrategia: Fumigación + militar','Gobierno: Pastrana'],
    color: '#1a4a2a',
  },
];

const HITOS = [...HITOS_LEFT, ...HITOS_RIGHT];

// ─────────────────────────────────────────────────────────────────────────────
// SVG DECORATIVOS — era digital de los 90s
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
    <text x="32" y="26" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="4" fontFamily="monospace">Interactiva 90s</text>
    <text x="32" y="38" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="3.5" fontFamily="monospace">Data Acústica</text>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export const Decade90s = () => {
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

  // Botón de hito — estilo GUI 90s
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

            {/* ── TELEVISOR ESTILO 90s ── */}
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

                    {/* Panel de control lateral — estilo GUI 90s */}
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
