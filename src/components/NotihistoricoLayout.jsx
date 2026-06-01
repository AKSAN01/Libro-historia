import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NotihistoricoLayout.css';

// ─────────────────────────────────────────────────────────────────────────────
// SVG DECORATIVOS — era digital
// ─────────────────────────────────────────────────────────────────────────────
const CassetteDecor = ({ label1, label2 }) => (
  <svg viewBox="0 0 110 68" className="notih-decor-svg" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="108" height="66" rx="5" fill="#1a1814" stroke="#3a3530" strokeWidth="1.5"/>
    <rect x="8" y="6" width="94" height="38" rx="2" fill="#111" stroke="#2a2520" strokeWidth="1"/>
    <text x="55" y="21" textAnchor="middle" fill="#b8860b" fontSize="6" fontFamily="monospace" fontWeight="bold">{label1}</text>
    <text x="55" y="31" textAnchor="middle" fill="#666" fontSize="4.5" fontFamily="monospace">{label2}</text>
    <circle cx="34" cy="52" r="9" fill="#0a0a0a" stroke="#3a3530" strokeWidth="1.2"/>
    <circle cx="34" cy="52" r="4" fill="#1a1814" stroke="#b8860b" strokeWidth="0.7"/>
    <circle cx="76" cy="52" r="9" fill="#0a0a0a" stroke="#3a3530" strokeWidth="1.2"/>
    <circle cx="76" cy="52" r="4" fill="#1a1814" stroke="#b8860b" strokeWidth="0.7"/>
    <rect x="44" y="46" width="22" height="12" rx="1.5" fill="#0a0a0a" stroke="#2a2520" strokeWidth="0.8"/>
    <text x="8" y="64" fill="#444" fontSize="4" fontFamily="monospace">▶ AUDIO CINTA</text>
  </svg>
);

const FloppyDecor = () => (
  <svg viewBox="0 0 60 68" className="notih-decor-svg" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="58" height="66" rx="3" fill="#2a2a2a" stroke="#444" strokeWidth="1.2"/>
    <rect x="8" y="4" width="36" height="22" rx="1" fill="#111" stroke="#333" strokeWidth="1"/>
    <rect x="28" y="4" width="10" height="22" fill="#1a1a1a" stroke="#333" strokeWidth="0.8"/>
    <rect x="6" y="32" width="48" height="30" rx="1" fill="#1a1a1a" stroke="#333" strokeWidth="0.8"/>
    <rect x="18" y="38" width="24" height="18" rx="1" fill="#333" stroke="#555" strokeWidth="0.8"/>
    <text x="30" y="50" textAnchor="middle" fill="#666" fontSize="4" fontFamily="monospace">DATA</text>
    <text x="30" y="62" textAnchor="middle" fill="#555" fontSize="3.5" fontFamily="monospace">1.44 MB</text>
  </svg>
);

const CDDecor = ({ label1 }) => (
  <svg viewBox="0 0 64 64" className="notih-decor-svg" xmlns="http://www.w3.org/2000/svg">
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
    <text x="32" y="26" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="4" fontFamily="monospace">{label1}</text>
    <text x="32" y="38" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="3.5" fontFamily="monospace">Data Acústica</text>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export const NotihistoricoLayout = ({ 
  chapterIndex, 
  period, 
  subtitle, 
  hitosLeft, 
  hitosRight, 
  cassetteLabel1 = "NOTIHISTÓRICO",
  cassetteLabel2 = "Colombia",
  cdLabel = "Interactiva",
  themeClass = ""
}) => {
  const [activeHito, setActiveHito]   = useState(null);
  const [isPlaying, setIsPlaying]     = useState(false);
  const [imageIndex, setImageIndex]   = useState(0);
  const [tvState, setTvState]         = useState('off');
  const [staticFlash, setStaticFlash] = useState(false);
  // Volumen: inicia en 100 (máximo)
  const [volume, setVolume]           = useState(100);
  const navigate = useNavigate();

  // Refs
  const currentAudioRef = useRef(null);
  const isPlayingRef    = useRef(false);
  const activeHitoRef   = useRef(null);
  const tvStateRef      = useRef('off');

  useEffect(() => { isPlayingRef.current  = isPlaying;  }, [isPlaying]);
  useEffect(() => { activeHitoRef.current = activeHito; }, [activeHito]);
  useEffect(() => { tvStateRef.current    = tvState;    }, [tvState]);

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

  const startAudio = (hito) => {
    stopAudioRaw();

    const playMainAudio = () => {
      // Si el hito ya no está activo al terminar el SFX, no empezamos la voz
      if (activeHitoRef.current && activeHitoRef.current.id !== hito.id) {
        return;
      }
      
      const audio = new Audio(hito.audioSrc);
      audio.volume = volume / 100;
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

    if (hito.sfxSrc) {
      const sfx = new Audio(hito.sfxSrc);
      sfx.volume = volume / 100;
      currentAudioRef.current = sfx;
      
      sfx.addEventListener('ended', playMainAudio);
      
      sfx.play()
        .then(() => {
          isPlayingRef.current = true;
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('SFX no pudo reproducirse', hito.sfxSrc, err);
          // Fallback en caso de error, intentar con el audio principal
          playMainAudio();
        });
    } else {
      playMainAudio();
    }
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
    if (!activeHito || !activeHito.images || activeHito.images.length === 0) return;
    setImageIndex(i => (i - 1 + activeHito.images.length) % activeHito.images.length);
  };
  const nextImage = () => {
    if (!activeHito || !activeHito.images || activeHito.images.length === 0) return;
    setImageIndex(i => (i + 1) % activeHito.images.length);
  };

  const HitoBtn = ({ hito }) => {
    const isActive  = activeHito?.id === hito.id;
    const isSonando = isActive && isPlaying;
    const isPaused  = isActive && !isPlaying;
    return (
      <motion.button
        className={`notih-hito-btn ${isSonando ? 'notih-hito-btn--on' : ''} ${isPaused ? 'notih-hito-btn--paused' : ''}`}
        style={{ '--hito-color': hito.color }}
        onClick={() => handleHitoClick(hito)}
        whileTap={{ scale: 0.97 }}
      >
        <span className="notih-hito-num">{String(hito.id).padStart(2, '0')}</span>
        <div className="notih-hito-info">
          <span className="notih-hito-year">{hito.year}</span>
          <span className="notih-hito-title">{hito.title}</span>
        </div>
        <div className={`notih-hito-icon ${isSonando ? 'notih-hito-icon--on' : ''} ${isPaused ? 'notih-hito-icon--pause' : ''}`}>
          {isSonando ? '⏸' : isPaused ? '▶' : '▷'}
        </div>
      </motion.button>
    );
  };

  return (
    <motion.div
      className={`notih-root library-bg ${themeClass}`}
      initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // smooth easeOut
    >
      <div className="notih-book">

        {/* ════════════════════ PÁGINA IZQUIERDA ════════════════════ */}
        <div className="notih-page notih-page--left">
          <div className="notih-spine-shadow notih-spine-shadow--left" />
          <div className="notih-page-content">

            {/* ── ENCABEZADO ── */}
            <div className="notih-header">
              <Link to="/" className="notih-back-link">← Volver a la estantería</Link>
              <span className="notih-chapter-label">CAPÍTULO {chapterIndex}</span>
              <h1 className="notih-chapter-title">{period}</h1>
              <h2 className="notih-chapter-subtitle">{subtitle}</h2>
            </div>

            {/* ── TELEVISOR ESTILO 90s ── */}
            <div className="notih-tv-wrap">
              <div className={`notih-tv ${tvState === 'on' ? 'notih-tv--on' : ''}`}>

                {/* Antena */}
                <div className="notih-tv-antenna">
                  <div className="notih-antenna-base" />
                  <div className="notih-antenna-left" />
                  <div className="notih-antenna-right" />
                </div>

                {/* Cuerpo gris industrial */}
                <div className="notih-tv-frame">
                  <div className="notih-tv-body">
                    {/* Pantalla */}
                    <div className="notih-tv-screen-zone">
                      <div className="notih-tv-bezel">
                        <div className={`notih-tv-screen ${staticFlash ? 'notih-tv-screen--static' : ''}`}>
                          {tvState === 'off' && (
                            <div className="notih-tv-off">
                              <div className="notih-tv-off-dot" />
                              <span className="notih-tv-off-text">Selecciona un hito</span>
                            </div>
                          )}
                          {tvState === 'static' && (
                            <div className="notih-tv-static"><div className="notih-static-canvas" /></div>
                          )}
                          {tvState === 'on' && activeHito && activeHito.images && activeHito.images.length > 0 && (
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={`${activeHito.id}-${imageIndex}`}
                                src={activeHito.images[imageIndex]}
                                alt={activeHito.title}
                                className="notih-tv-img"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onError={e => { e.target.style.display = 'none'; }}
                              />
                            </AnimatePresence>
                          )}
                          <div className="notih-crt-scanlines" />
                          <div className="notih-crt-glow" />
                        </div>
                        {tvState === 'on' && activeHito && activeHito.images && (
                          <div className="notih-img-dots">
                            {activeHito.images.map((_, i) => (
                              <span key={i} className={`notih-img-dot ${i === imageIndex ? 'notih-img-dot--active' : ''}`} />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Panel de control lateral */}
                    <div className="notih-tv-panel">
                      <div className="notih-tv-display">
                        <span className="notih-tv-display-text">
                          {activeHito && activeHito.images && activeHito.images.length > 0 ? `${imageIndex + 1}/${activeHito.images.length}` : '--'}
                        </span>
                      </div>

                      <button className="notih-panel-btn notih-panel-btn--nav" onClick={prevImage} disabled={!activeHito || tvState !== 'on'} aria-label="Imagen anterior">▲</button>
                      <button className="notih-panel-btn notih-panel-btn--nav" onClick={nextImage} disabled={!activeHito || tvState !== 'on'} aria-label="Imagen siguiente">▼</button>

                      <button className="notih-panel-btn notih-panel-btn--wide" onClick={() => { emergencyStop(); navigate('/'); }}>Menu</button>
                      <button
                        className={`notih-panel-btn notih-panel-btn--wide notih-panel-btn--power ${tvState !== 'off' ? 'notih-panel-btn--power-on' : ''}`}
                        onClick={emergencyStop}
                      >Power</button>

                      <div className="notih-panel-active">
                        <div className={`notih-panel-led ${tvState !== 'off' ? 'notih-panel-led--on' : ''}`} />
                        <span className="notih-panel-active-label">ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Marca inferior */}
                  <div className="notih-tv-brand">NOTICOLOR</div>
                </div>
              </div>
            </div>

            {/* ── HITOS IZQUIERDA ── */}
            <div className="notih-hitos-list notih-hitos-list--left">
              {hitosLeft && hitosLeft.map(h => <HitoBtn key={h.id} hito={h} />)}
            </div>

            {/* ── FICHA BIBLIOGRÁFICA ── */}
            <div className="notih-ficha">
              <div className="notih-ficha-tab">DATO CLAVE</div>
              <div className="notih-ficha-body">
                <div className="notih-ficha-header-row">
                  <span className="notih-ficha-ref">Ref. {activeHito ? activeHito.year : '—'}</span>
                  <span className="notih-ficha-sello">{activeHito ? '✦ ARCHIVADO' : 'PENDIENTE'}</span>
                </div>
                {activeHito && activeHito.fichaLineas ? (
                  activeHito.fichaLineas.map((l, i) => (
                    <div key={i} className="notih-ficha-linea"><span className="notih-ficha-linea-text">{l}</span></div>
                  ))
                ) : activeHito && activeHito.datoClave ? (
                  <div className="notih-ficha-linea"><span className="notih-ficha-linea-text">{activeHito.datoClave}</span></div>
                ) : (
                  <div className="notih-ficha-empty">Selecciona un hito para ver la ficha histórica</div>
                )}
              </div>
            </div>

            {/* ── DECORACIÓN ERA DIGITAL ── */}
            <div className="notih-decor-row">
              <CassetteDecor label1={cassetteLabel1} label2={cassetteLabel2} />
              <FloppyDecor />
              <CDDecor label1={cdLabel} />
            </div>

          </div>
        </div>

        {/* ════════════════════ PÁGINA DERECHA ════════════════════ */}
        <div className="notih-page notih-page--right">
          <div className="notih-spine-shadow notih-spine-shadow--right" />
          <div className="notih-page-content">

            {/* ── VISOR DE GUIÓN ── */}
            <div className="notih-script-viewer">
              <div className="notih-script-header">
                <span className="notih-script-icon">📺</span>
                <span className="notih-script-title">NOTIHISTÓRICO — EN VIVO</span>
                {isPlaying && <span className="notih-script-live">● AL AIRE</span>}
              </div>
              <div className="notih-script-body">
                <AnimatePresence mode="wait">
                  {activeHito && activeHito.guion ? (
                    <motion.div
                      key={activeHito.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="notih-script-headline">{activeHito.year} — {activeHito.title}</h3>
                      {activeHito.summary && (
                        <>
                          <p className="notih-script-para notih-script-para--header">RESUMEN HISTÓRICO</p>
                          <p className="notih-script-para" style={{marginBottom: '16px'}}>{activeHito.summary}</p>
                          <p className="notih-script-para notih-script-para--header">GUIÓN DE AUDIO</p>
                        </>
                      )}
                      {activeHito.guion.split('\n\n').map((para, i) => (
                        <p key={i} className={i === 0 && !activeHito.summary ? 'notih-script-para notih-script-para--header' : 'notih-script-para'}>{para}</p>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="notih-script-empty">
                      <span className="notih-script-empty-icon">📡</span>
                      <p>Presiona un hito para leer<br/>el guión del Notihistórico</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ── HITOS DERECHA ── */}
            <div className="notih-hitos-list">
              {hitosRight && hitosRight.map(h => <HitoBtn key={h.id} hito={h} />)}
            </div>

            {/* ── BARRA MAESTRA ── */}
            <div className="notih-master-bar">
              <div className="notih-master-slider-wrap">
                <div className="notih-master-track">
                  <div className="notih-master-ticks">
                    {Array.from({ length: 11 }).map((_, i) => <div key={i} className="notih-master-tick" />)}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={e => setVolume(Number(e.target.value))}
                    className="notih-vol-slider"
                    aria-label="Volumen general"
                  />
                </div>
                <span className="notih-master-label">Volumen General</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
