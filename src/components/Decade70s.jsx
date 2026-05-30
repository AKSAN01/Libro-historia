import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Decade70s.css';

// ── Imports de audio ──────────────────────────────────────────────────────────
import audio1 from '../assets/70s/audio/70parte1.mp3';
import audio2 from '../assets/70s/audio/70parte2.mp3';
import audio3 from '../assets/70s/audio/70parte3.mp3';
import audio4 from '../assets/70s/audio/70parte4.mp3';
import audio5 from '../assets/70s/audio/70parte5.mp3';

// ── Imports de imágenes ───────────────────────────────────────────────────────
import img1_1 from '../assets/70s/imagenes/audio11.png';
import img1_2 from '../assets/70s/imagenes/audio12.png';
import img1_3 from '../assets/70s/imagenes/audio13.png';
import img2_1 from '../assets/70s/imagenes/audio21.png';
import img2_2 from '../assets/70s/imagenes/audio22.png';
import img2_3 from '../assets/70s/imagenes/audio23.png';
import img3_1 from '../assets/70s/imagenes/audio31.png';
import img3_2 from '../assets/70s/imagenes/audio32.png';
import img3_3 from '../assets/70s/imagenes/audio33.png';
import img4_1 from '../assets/70s/imagenes/audio41.png';
import img4_2 from '../assets/70s/imagenes/audio42.png';
import img4_3 from '../assets/70s/imagenes/audio43.png';
import img5_1 from '../assets/70s/imagenes/audio51.png';
import img5_2 from '../assets/70s/imagenes/audio52.png';
import img5_3 from '../assets/70s/imagenes/audio53.png';

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — idénticos al original
// ─────────────────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1, year: '1970', title: 'Elecciones del 19 de Abril',
    shortDesc: 'Dudas, inconformidad y sospechas de fraude electoral sacuden al país.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Muy buenas noches, Colombia. Bienvenidos a Notihistórico, el noticiero de la historia. Abrimos esta emisión especial viajando al año 1970, una época en la que el país intentaba recuperar estabilidad después de años de violencia política entre liberales y conservadores.\n\n' +
      'Esta noche, la atención nacional se concentra en las elecciones presidenciales del 19 de abril. Durante horas, millones de colombianos permanecen atentos a la radio siguiendo el conteo de votos. Todo parecía indicar una posible victoria del general Gustavo Rojas Pinilla.\n\n' +
      'Sin embargo, con el avance de la madrugada, los resultados comienzan a cambiar. Finalmente, el candidato oficialista Misael Pastrana Borrero es declarado ganador. El anuncio provoca dudas, inconformidad y fuertes sospechas de fraude electoral.\n\n' +
      'Para muchos ciudadanos, aquella noche dejó la sensación de que el sistema político colombiano atravesaba una profunda crisis de legitimidad. Y mientras crecía la desconfianza… también comenzaban a surgir nuevas ideas de confrontación contra el Estado.',
    images: [img1_1, img1_2, img1_3], audioSrc: audio1,
    datoClave: '19 de abril de 1970 · Misael Pastrana Borrero · Gustavo Rojas Pinilla · Crisis de legitimidad',
    fichaLineas: ['Fecha: 19 abril 1970','Ganador oficial: Pastrana Borrero','Rival: Gral. Rojas Pinilla','Contexto: Frente Nacional','Resultado: Sospechas de fraude'],
    color: '#7a1a1a',
  },
  {
    id: 2, year: '1970–1974', title: 'Surgimiento del M-19',
    shortDesc: 'Un nuevo grupo insurgente irrumpe con acciones simbólicas y mediáticas.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'En noticias nacionales, empieza a llamar la atención un nuevo movimiento insurgente: el Movimiento 19 de Abril, más conocido como el M-19. A diferencia de otras guerrillas activas en el país, este grupo demuestra rápidamente interés por las acciones simbólicas y mediáticas.\n\n' +
      'Incluso antes de anunciar oficialmente su existencia, comienzan a aparecer mensajes extraños en distintos periódicos colombianos. "¿Falta de energía? Espere… M-19." Durante varios días, la población intenta entender el significado de aquella campaña.\n\n' +
      'Poco después, el grupo hace pública su existencia y empieza a protagonizar hechos que ocupan titulares nacionales. Año 1974. Un comando del M-19 ingresa a la Quinta de Bolívar, en Bogotá, y roba la espada de Simón Bolívar.\n\n' +
      'La noticia produce conmoción inmediata en todo el país. Más allá del valor histórico del objeto, la espada representaba uno de los símbolos políticos más importantes de América Latina. Junto al robo aparece un mensaje que rápidamente recorre Colombia: "Bolívar, tu espada vuelve a la lucha." Con este episodio, el M-19 logra convertirse en uno de los actores más visibles del panorama político y armado nacional.',
    images: [img2_1, img2_2, img2_3], audioSrc: audio2,
    datoClave: '1970–1974 · M-19 · Robo espada de Bolívar · Quinta de Bolívar, Bogotá',
    fichaLineas: ['Período: 1970 – 1974','Actor: M-19','Hecho: Robo espada de Bolívar','Lugar: Quinta de Bolívar','Mensaje: Acción simbólica'],
    color: '#1a7a3c',
  },
  {
    id: 3, year: '1978–1979', title: 'Estatuto de Seguridad y Tensión Social',
    shortDesc: 'El gobierno endurece el orden público y crecen las denuncias de abusos.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Y mientras aumentaban las acciones insurgentes, el gobierno nacional respondía fortaleciendo las medidas de seguridad. Con la llegada de Julio César Turbay Ayala a la presidencia, se implementa el llamado Estatuto de Seguridad.\n\n' +
      'Según el gobierno, esta estrategia buscaba combatir a las organizaciones armadas y recuperar el control del orden público. Sin embargo, distintos sectores comienzan a expresar preocupación por posibles abusos de autoridad.\n\n' +
      'Organizaciones sociales, estudiantes y líderes políticos denuncian detenciones arbitrarias, persecuciones y restricciones a ciertas libertades civiles. En varias universidades del país empieza a sentirse un ambiente de vigilancia permanente.\n\n' +
      'La tensión política aumenta. La desconfianza crece. Y poco a poco, Colombia comienza a entrar en una etapa marcada por la polarización y el miedo. Las ciudades ya no parecían completamente ajenas al conflicto armado.',
    images: [img3_1, img3_2, img3_3], audioSrc: audio3,
    datoClave: '1978–1979 · Julio César Turbay Ayala · Estatuto de Seguridad · Denuncias de abusos',
    fichaLineas: ['Período: 1978 – 1979','Presidente: Turbay Ayala','Medida: Estatuto de Seguridad','Crítica: Detenciones arbitrarias','Contexto: Polarización social'],
    color: '#8B3A0A',
  },
];

const HITOS_RIGHT = [
  {
    id: 4, year: '1978–1979', title: 'Robo de Armas del Cantón Norte',
    shortDesc: 'El M-19 roba más de cinco mil armas del Ejército colombiano en Bogotá.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Interrumpimos esta emisión con información de última hora. 31 de diciembre de 1978. Mientras miles de colombianos celebraban la llegada del nuevo año, el M-19 ejecutaba una de las operaciones más impactantes de la década.\n\n' +
      'Durante semanas, miembros de la organización construyeron un túnel subterráneo que conducía directamente al Cantón Norte, una instalación militar del Ejército colombiano en Bogotá. La operación termina con el robo de más de cinco mil armas.\n\n' +
      'El hecho provoca una fuerte crisis de seguridad y deja en evidencia la capacidad operativa del grupo insurgente. Pero más allá de las armas desaparecidas, el episodio deja una preocupación aún mayor entre la población: la sensación de que el conflicto armado comenzaba a infiltrarse en el centro mismo de las instituciones del país.',
    images: [img4_1, img4_2, img4_3], audioSrc: audio4,
    datoClave: '31 de diciembre de 1978 · M-19 · Cantón Norte, Bogotá · Más de 5.000 armas robadas',
    fichaLineas: ['Fecha: 31 dic 1978','Actor: M-19','Lugar: Cantón Norte, Bogotá','Método: Túnel subterráneo','Botín: +5.000 armas'],
    color: '#5A0000',
  },
  {
    id: 5, year: '1979', title: 'Fin de la Década: Narcotráfico en Ascenso',
    shortDesc: 'Colombia cierra los 70 con tensión social y un nuevo fenómeno: el narcotráfico.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Así termina la década de 1970 en Colombia. Con una creciente desconfianza hacia la política. Con movimientos insurgentes ganando protagonismo nacional. Y con un Estado que responde mediante políticas de seguridad cada vez más estrictas.\n\n' +
      'La tensión social continúa acumulándose lentamente. Y mientras el país intenta contener esa fractura interna, un nuevo fenómeno comienza a aparecer silenciosamente en el panorama nacional…\n\n' +
      'el narcotráfico.\n\n' +
      'Hasta aquí esta emisión especial de Notihistórico, el noticiero de la historia. Muy buenas noches, Colombia.',
    images: [img5_1, img5_2, img5_3], audioSrc: audio5,
    datoClave: '1979 · Cierre de la década · Insurgencia · Inicio del narcotráfico en Colombia',
    fichaLineas: ['Período: Década de 1970','Crisis: Legitimidad política','Actor: Guerrillas (M-19)','Nuevo fenómeno: Narcotráfico','Proyección: Décadas de conflicto'],
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
    <text x="55" y="31" textAnchor="middle" fill="#666" fontSize="4.5" fontFamily="monospace">Colombia 1970–1979</text>
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
    <text x="32" y="26" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="4" fontFamily="monospace">Interactiva 70s</text>
    <text x="32" y="38" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="3.5" fontFamily="monospace">Data Acústica</text>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export const Decade70s = () => {
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
              <span className="d90-chapter-label">CAPÍTULO 3</span>
              <h1 className="d90-chapter-title">1970 — 1979</h1>
              <h2 className="d90-chapter-subtitle">Fraude electoral, insurgencia y tensión social</h2>
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
