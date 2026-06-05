import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NotihistoricoLayout20s.css';

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
export const NotihistoricoLayout20s = ({ 
  chapterIndex, 
  period, 
  subtitle, 
  hitosLeft, 
  hitosRight, 
  cassetteLabel1 = "NOTIHISTÓRICO",
  cassetteLabel2 = "Colombia",
  cdLabel = "Interactiva",
  themeClass = "",
  tag = ""
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

  const ALL_HITOS = [...(hitosLeft || []), ...(hitosRight || [])];
  const prevHito = () => {
    if (!ALL_HITOS.length) return;
    const idx = activeHito ? ALL_HITOS.findIndex(h => h.id === activeHito.id) : 0;
    const prev = ALL_HITOS[(idx - 1 + ALL_HITOS.length) % ALL_HITOS.length];
    handleHitoClick(prev);
  };
  const nextHito = () => {
    if (!ALL_HITOS.length) return;
    const idx = activeHito ? ALL_HITOS.findIndex(h => h.id === activeHito.id) : -1;
    const next = ALL_HITOS[(idx + 1) % ALL_HITOS.length];
    handleHitoClick(next);
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
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
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
            {/* ── iPHONE — era smartphone ── */}
            <div className="n20s-iphone-wrap">
              <div className="n20s-iphone">
                <div className="n20s-island" />
                <div className="n20s-btn-power" />
                <div className="n20s-btn-mute" />
                <div className="n20s-btn-vol1" />
                <div className="n20s-btn-vol2" />
                <div className="n20s-screen">
                  {tvState === 'off' && (
                    <div className="n20s-screen-idle">
                      <div className="n20s-idle-dot" />
                      <span>selecciona un hito</span>
                    </div>
                  )}
                  {tvState === 'static' && <div className="n20s-screen-static" />}
                  {tvState === 'on' && activeHito && (
                    <div className="n20s-screen-active">
                      {activeHito.images && activeHito.images.length > 0 ? (
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`${activeHito.id}-${imageIndex}`}
                            src={activeHito.images[imageIndex]}
                            alt={activeHito.title}
                            className="n20s-bg-img"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onError={e => { e.target.style.display = 'none'; }}
                          />
                        </AnimatePresence>
                      ) : (
                        <div className="n20s-bg-color" style={{ background: `linear-gradient(135deg, ${activeHito.color}99 0%, ${activeHito.color} 100%)` }} />
                      )}
                      <div className="n20s-overlay" />
                      <div className="n20s-status-bar">
                        <span>9:41</span><span>5G ▌▌</span>
                      </div>
                      <div className="n20s-live-badge">● EN VIVO</div>
                      <div className="n20s-caption">
                        <span className="n20s-caption-year">{activeHito.year}</span>
                        <span className="n20s-caption-title">{activeHito.title}</span>
                        <span className="n20s-caption-desc">{activeHito.shortDesc}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="n20s-home-bar" />
              </div>

              {/* Controles modernos */}
              <div className="n20s-controls">
                <div className="n20s-ctrl-group">
                  <button className="n20s-ctrl-btn" onClick={prevHito} aria-label="Hito anterior">◀</button>
                  <span className="n20s-ctrl-label">anterior</span>
                </div>
                <div className="n20s-ctrl-group">
                  <button
                    className={`n20s-ctrl-btn n20s-ctrl-btn--play ${tvState !== 'off' ? 'n20s-ctrl-btn--active' : ''}`}
                    onClick={() => activeHito && handleHitoClick(activeHito)}
                    disabled={!activeHito}
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                  <span className="n20s-ctrl-label">{isPlaying ? 'pausar' : 'play'}</span>
                </div>
                <div className="n20s-ctrl-group">
                  <button className="n20s-ctrl-btn" onClick={nextHito} aria-label="Hito siguiente">▶</button>
                  <span className="n20s-ctrl-label">siguiente</span>
                </div>
                {tag && (
                  <div className="n20s-ctrl-group">
                    <button className="n20s-ctrl-btn" onClick={() => navigate(`/minigame/${tag}`)}>?</button>
                    <span className="n20s-ctrl-label">jugar</span>
                  </div>
                )}
                <div className="n20s-ctrl-group">
                  <button className="n20s-ctrl-btn n20s-ctrl-btn--stop" onClick={emergencyStop} aria-label="Detener">■</button>
                  <span className="n20s-ctrl-label">detener</span>
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
                <span className="notih-script-title">HISTOSTREAM — EN VIVO</span>
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

            {/* ── VOLUMEN ── */}
            <div className="n20s-vol-row">
              <span>🔊</span>
              <input
                type="range" min="0" max="100" value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                className="n20s-vol-slider"
                style={{ '--vol-pct': `${volume}%` }}
                aria-label="Volumen"
              />
              <span className="n20s-vol-val">{volume}%</span>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};