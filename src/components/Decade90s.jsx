import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Decade90s.css';

// ── Imports de audio (Vite los procesa desde src/assets) ─────────────────────
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
// DATOS DE LOS 7 HITOS
// Reemplaza las rutas de images[] y audioSrc con tus archivos reales.
// Convención sugerida:
//   /assets/90s/images/hito1_foto1.jpg
//   /assets/90s/audio/hito1.mp3
// ─────────────────────────────────────────────────────────────────────────────
// Hitos de la página izquierda (se muestran debajo del televisor)
const HITOS_LEFT = [
  {
    id: 1,
    year: '1990–1993',
    title: 'Violencia del Narcotráfico',
    shortDesc: 'Atentados, asesinatos y enfrentamientos sacuden al país.',
    summary:
      'Entre 1990 y 1993, Colombia vivió uno de sus períodos más violentos. Los carteles de la droga desataron una ola de atentados y asesinatos que afectaron a civiles, funcionarios y fuerzas del Estado, mientras la tensión entre el gobierno y los capos escalaba sin control.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, e iniciamos esta emisión con noticias preocupantes sobre la creciente violencia que afecta al país.\n\n' +
      'Continúan los atentados, asesinatos y enfrentamientos relacionados con el narcotráfico, mientras aumentan las tensiones entre el Estado y grupos criminales liderados por reconocidos capos de la droga.\n\n' +
      'La preocupación ciudadana crece ante una situación de orden público cada vez más compleja. Desde la redacción de Notihistórico, seguiremos informando.',
    images: [
      img1_1,
      img1_2,
      img1_3,
    ],
    audioSrc: audio1,
    datoClave: '1990–1993 · Cartel de Medellín · Narcoterrorismo · Crisis de orden público nacional',
    color: '#7a1a1a',
  },
  {
    id: 2,
    year: '1991',
    title: 'Constitución Política de 1991',
    shortDesc: 'Reforma política que amplía derechos y moderniza el Estado.',
    summary:
      'El gobierno de César Gaviria promovió una nueva Constitución que fortaleció la democracia y amplió los derechos ciudadanos. Sin embargo, decisiones como la prohibición de la extradición generaron debate sobre su impacto en la lucha contra el narcotráfico.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'En noticias nacionales, el gobierno del presidente César Gaviria promueve una nueva Constitución para el país. Esta reforma busca fortalecer la democracia, ampliar los derechos ciudadanos y modernizar las instituciones del Estado.\n\n' +
      'Sin embargo, algunas decisiones generan debate, especialmente aquellas relacionadas con la extradición y su posible impacto en la lucha contra el narcotráfico.\n\n' +
      'Colombia estrena un pacto social que reconoce por primera vez su diversidad étnica, crea la acción de tutela y establece la Corte Constitucional como guardiana de los derechos fundamentales.',
    images: [
      img2_1,
      img2_2,
      img2_3,
    ],
    audioSrc: audio2,
    datoClave: '4 de julio de 1991 · Gobierno Gaviria · 380 artículos · Reemplaza la Constitución de 1886',
    color: '#1a7a3c',
  },
  {
    id: 3,
    year: '1991',
    title: 'Entrega de Pablo Escobar',
    shortDesc: 'El capo más buscado del mundo se entrega bajo sus propias condiciones.',
    summary:
      'En medio de los cambios constitucionales, Pablo Escobar Gaviria se entregó a las autoridades colombianas bajo un acuerdo que le permitió permanecer en "La Catedral", una prisión construida según sus propias exigencias en las montañas de Envigado.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Atención, última hora. Pablo Emilio Escobar Gaviria se entrega oficialmente a las autoridades colombianas.\n\n' +
      'La decisión ocurre en medio de los recientes cambios constitucionales y bajo un acuerdo que le permite permanecer en un centro de reclusión especial conocido como "La Catedral", construido bajo sus propias condiciones.\n\n' +
      'El país permanece atento al rumbo de este caso. Los analistas advierten: el capo negoció sus términos, eligió su guardia y mantiene el control de su organización desde adentro. Colombia contiene la respiración.',
    images: [
      img3_1,
      img3_2,
    ],
    audioSrc: audio3,
    datoClave: '1991 · La Catedral, Envigado · Decreto de sometimiento a la justicia · Gobierno Gaviria',
    color: '#8B3A0A',
  },
];

// Hitos de la página derecha (en la parrilla junto al guión)
const HITOS_RIGHT = [
  {
    id: 4,
    year: '1992',
    title: 'Fuga de Pablo Escobar',
    shortDesc: 'El capo escapa de La Catedral cuando el gobierno intenta trasladarlo.',
    summary:
      'En julio de 1992, Escobar se fugó de La Catedral cuando el Ejército intentaba trasladarlo a una cárcel de máxima seguridad. La fuga desató la mayor cacería humana de la historia colombiana y una crisis de credibilidad para el gobierno Gaviria.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Interrumpimos nuestra programación con información de última hora. Se confirma la fuga de Pablo Escobar de la prisión conocida como La Catedral.\n\n' +
      'Autoridades adelantan operativos de búsqueda, mientras aumenta la preocupación por el posible regreso de episodios de violencia asociados al narcotráfico.\n\n' +
      'El Bloque de Búsqueda, apoyado por la DEA y el Gobierno de Estados Unidos, inicia las operaciones más intensas de la historia reciente del país. Colombia no dormirá hasta que Escobar sea capturado.',
    images: [
      img4_1,
      img4_2,
    ],
    audioSrc: audio4,
    datoClave: '22 de julio de 1992 · La Catedral, Envigado · Inicio del Bloque de Búsqueda · Crisis de gobierno',
    color: '#5A0000',
  },
  {
    id: 5,
    year: '1993',
    title: 'Muerte de Pablo Escobar',
    shortDesc: 'El Bloque de Búsqueda abate al capo en Los Olivos, Medellín.',
    summary:
      'El 2 de diciembre de 1993, autoridades confirmaron la muerte de Pablo Escobar tras un operativo del Bloque de Búsqueda en el barrio Los Olivos de Medellín. Diversos sectores esperaban el inicio de una etapa de mayor tranquilidad, aunque persistían preocupaciones sobre el futuro del narcotráfico.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'En noticias de última hora, autoridades confirman la muerte de Pablo Emilio Escobar Gaviria en el barrio Los Olivos, en Medellín, tras un operativo del Bloque de Búsqueda.\n\n' +
      'Diversos sectores esperan que este hecho represente el inicio de una etapa de mayor tranquilidad para el país, aunque persisten preocupaciones sobre el futuro del narcotráfico.\n\n' +
      'Dieciséis meses duró la cacería más intensa de la historia colombiana. Esta tarde nublada en Medellín cierra el capítulo más violento del narcoterrorismo. Mañana, Colombia deberá preguntarse qué sigue.',
    images: [
      img5_1,
      img5_2,
    ],
    audioSrc: audio5,
    datoClave: '2 de diciembre de 1993 · Los Olivos, Medellín · Bloque de Búsqueda · Fin del Cartel de Medellín',
    color: '#7a1a1a',
  },
  {
    id: 6,
    year: '1998–1999',
    title: 'Crisis Económica',
    shortDesc: 'Recesión, desempleo masivo y dificultades para miles de familias colombianas.',
    summary:
      'Finales de los 90 trajeron la peor crisis económica en décadas: desempleo masivo, desequilibrios fiscales y desaceleración generalizada. Expertos señalaron problemas relacionados con la apertura económica de años anteriores mientras el gobierno hacía un llamado a la calma.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Atención colombianos: estos años no han sido los mejores para la economía colombiana, que hoy enfrenta momentos difíciles. El desempleo se agudiza y miles de familias reportan dificultades económicas.\n\n' +
      'Expertos señalan problemas relacionados con la apertura económica de años anteriores, desequilibrios fiscales y una desaceleración de la economía.\n\n' +
      'El gobierno hace un llamado a la calma mientras se anuncian nuevas medidas económicas.',
    images: [
      img6_1,
      img6_2,
    ],
    audioSrc: audio6,
    datoClave: '1998–1999 · Gobierno Pastrana · Crisis fiscal · Desempleo masivo · Peor recesión en décadas',
    color: '#4a3a00',
  },
  {
    id: 7,
    year: '1999–2000',
    title: 'Plan Colombia',
    shortDesc: 'Estrategia antidrogas con apoyo de EE.UU. para enfrentar violencia y narcotráfico.',
    summary:
      'Ante la crisis económica y el aumento de cultivos ilícitos, el gobierno de Pastrana anunció el Plan Colombia: una estrategia de seguridad y lucha antidrogas con amplio apoyo internacional, especialmente de Estados Unidos, que generó tanto esperanza como escepticismo.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Última hora: dada la crisis económica y en especial el aumento de cultivos y del mercado del narcotráfico, el gobierno nacional anuncia oficialmente el inicio del Plan Colombia, una estrategia que busca fortalecer la seguridad, combatir el narcotráfico y reducir la violencia con apoyo internacional, especialmente de Estados Unidos.\n\n' +
      'Mientras algunos sectores consideran esta medida una esperanza para el país, otros observan con cautela sus posibles consecuencias.\n\n' +
      'Hasta aquí esta emisión especial. Continuaremos informando sobre los hechos que marcan el rumbo de Colombia. Muy buenas noches.',
    images: [
      img7_1,
      img7_2,
      img7_3,
    ],
    audioSrc: audio7,
    datoClave: '1999–2000 · Gobierno Pastrana · Plan Colombia · Apoyo de EE.UU. · Lucha antidrogas',
    color: '#1a4a2a',
  },
];

// Array unificado para la lógica de audio (mantiene compatibilidad)
const HITOS = [...HITOS_LEFT, ...HITOS_RIGHT];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export const Decade90s = () => {
  const [activeHito, setActiveHito]     = useState(null); // hito activo (obj)
  const [isPlaying, setIsPlaying]       = useState(false);
  const [imageIndex, setImageIndex]     = useState(0);
  const [tvState, setTvState]           = useState('off'); // 'off' | 'static' | 'on'
  const [staticFlash, setStaticFlash]   = useState(false);

  // ── REFS (no provocan re-renders, seguros dentro de setTimeout) ──
  const currentAudioRef = useRef(null);   // objeto Audio activo
  const isPlayingRef    = useRef(false);  // espejo de isPlaying para closures
  const activeHitoRef   = useRef(null);   // espejo de activeHito para closures
  const tvStateRef      = useRef('off');  // espejo de tvState para closures

  // Mantener refs sincronizados con el estado
  useEffect(() => { isPlayingRef.current  = isPlaying;  }, [isPlaying]);
  useEffect(() => { activeHitoRef.current = activeHito; }, [activeHito]);
  useEffect(() => { tvStateRef.current    = tvState;    }, [tvState]);

  // Limpiar audio al desmontar
  useEffect(() => {
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.src = '';
      }
    };
  }, []);

  // Detener audio sin tocar estado de React (seguro dentro de closures)
  const stopAudioRaw = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
  };

  // Arrancar audio de un hito y actualizar todos los estados
  const startAudio = (hito) => {
    stopAudioRaw();
    const audio = new Audio(hito.audioSrc);
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

  // Efecto de estática (usa refs para leer estado actual sin depender de closures)
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

  // Manejar clic en un hito
  const handleHitoClick = (hito) => {
    // Mismo hito activo → toggle pausa/play
    if (activeHitoRef.current && activeHitoRef.current.id === hito.id) {
      const audio = currentAudioRef.current;
      if (!audio) return;
      if (isPlayingRef.current) {
        audio.pause();
        isPlayingRef.current = false;
        setIsPlaying(false);
      } else {
        audio.play()
          .then(() => {
            isPlayingRef.current = true;
            setIsPlaying(true);
          })
          .catch((err) => console.warn('No se pudo reanudar:', err));
      }
      return;
    }

    // Nuevo hito → detener audio actual
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

  // Navegar imágenes con las perillas (el audio NO se interrumpe)
  const prevImage = () => {
    if (!activeHito) return;
    setImageIndex(i => (i - 1 + activeHito.images.length) % activeHito.images.length);
  };
  const nextImage = () => {
    if (!activeHito) return;
    setImageIndex(i => (i + 1) % activeHito.images.length);
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
      {/* ── LIBRO ── */}
      <div className="d90-book">

        {/* ════════════════════════════════
            PÁGINA IZQUIERDA — El Televisor
            ════════════════════════════════ */}
        <div className="d90-page d90-page--left">
          {/* Sombra de lomo */}
          <div className="d90-spine-shadow d90-spine-shadow--left" />

          <div className="d90-page-content">
            {/* Encabezado */}
            <div className="d90-header">
              <Link to="/timeline" className="d90-back-link">← Volver a la estantería</Link>
              <span className="d90-chapter-label">CAPÍTULO 4</span>
              <h1 className="d90-chapter-title">1990 — 2000</h1>
              <h2 className="d90-chapter-subtitle">Narcotráfico, constitución y crisis</h2>
            </div>

            {/* ── EL TELEVISOR ── */}
            <div className="d90-tv-wrap">
              <div className={`d90-tv ${tvState === 'on' ? 'd90-tv--on' : ''}`}>

                {/* Marco exterior con textura de plástico */}
                <div className="d90-tv-frame">

                  {/* Pantalla */}
                  <div className="d90-tv-screen-wrap">
                    <div className={`d90-tv-screen ${staticFlash ? 'd90-tv-screen--static' : ''}`}>

                      {/* Estado: APAGADO */}
                      {tvState === 'off' && (
                        <div className="d90-tv-off">
                          <div className="d90-tv-off-dot" />
                          <span className="d90-tv-off-text">Selecciona un hito</span>
                        </div>
                      )}

                      {/* Estado: ESTÁTICA */}
                      {tvState === 'static' && (
                        <div className="d90-tv-static">
                          <div className="d90-static-canvas" />
                        </div>
                      )}

                      {/* Estado: IMAGEN ACTIVA */}
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

                      {/* Brillo CRT scanlines */}
                      <div className="d90-crt-scanlines" />
                      <div className="d90-crt-glow" />
                    </div>

                    {/* Indicador de imagen */}
                    {tvState === 'on' && activeHito && (
                      <div className="d90-img-dots">
                        {activeHito.images.map((_, i) => (
                          <span
                            key={i}
                            className={`d90-img-dot ${i === imageIndex ? 'd90-img-dot--active' : ''}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Controles del televisor */}
                  <div className="d90-tv-controls">
                    {/* Perillas decorativas izquierda */}
                    <div className="d90-knobs">
                      <div className="d90-knob d90-knob--vol">
                        <span className="d90-knob-label">VOL</span>
                        <div className="d90-knob-dial" />
                      </div>
                      <div className="d90-knob d90-knob--ch">
                        <span className="d90-knob-label">CH</span>
                        <div className="d90-knob-dial" />
                      </div>
                    </div>

                    {/* Flechas de canal — centro */}
                    <div className="d90-channel-btns">
                      <button
                        className="d90-channel-btn"
                        onClick={prevImage}
                        disabled={!activeHito || tvState !== 'on'}
                        title="Imagen anterior"
                        aria-label="Imagen anterior"
                      >◄</button>
                      <div className="d90-channel-indicator">
                        {activeHito ? `${imageIndex + 1} / ${activeHito.images.length}` : '—'}
                      </div>
                      <button
                        className="d90-channel-btn"
                        onClick={nextImage}
                        disabled={!activeHito || tvState !== 'on'}
                        title="Imagen siguiente"
                        aria-label="Imagen siguiente"
                      >►</button>
                    </div>

                    {/* LED de encendido */}
                    <div className="d90-power-zone">
                      <div className={`d90-power-led ${tvState !== 'off' ? 'd90-power-led--on' : ''}`} />
                      <span className="d90-power-label">PWR</span>
                    </div>
                  </div>

                  {/* Pie del televisor */}
                  <div className="d90-tv-base">
                    <div className="d90-tv-leg d90-tv-leg--left" />
                    <div className="d90-tv-leg d90-tv-leg--right" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── HITOS IZQUIERDA ── */}
            <div className="d90-hitos-list d90-hitos-list--left">
              {HITOS_LEFT.map((hito) => {
                const isActive = activeHito?.id === hito.id;
                return (
                  <div key={hito.id} className="d90-hito-wrapper">
                    <motion.button
                      className={`d90-hito-btn ${isActive ? 'd90-hito-btn--active' : ''}`}
                      style={{ '--hito-color': hito.color }}
                      onClick={() => handleHitoClick(hito)}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="d90-hito-num">{String(hito.id).padStart(2, '0')}</span>
                      <div className="d90-hito-info">
                        <span className="d90-hito-year">{hito.year}</span>
                        <span className="d90-hito-title">{hito.title}</span>
                      </div>
                      <div className="d90-hito-state">
                        {isActive && isPlaying  && <span className="d90-play-indicator">▶ SONANDO</span>}
                        {isActive && !isPlaying && <span className="d90-pause-indicator">⏸ PAUSA</span>}
                        {!isActive && <span className="d90-idle-indicator">▷</span>}
                      </div>
                    </motion.button>

                  </div>
                );
              })}
            </div>

            {/* ── RECUADRO DE DATOS CLAVE ── */}
            <div className="d90-fact-box">
              <div className="d90-fact-icon">📋</div>
              <div className="d90-fact-content">
                <span className="d90-fact-label">DATO CLAVE</span>
                <p className="d90-fact-text">
                  {activeHito
                    ? activeHito.datoClave
                    : 'Selecciona uno de los 7 hitos históricos para descubrir los datos clave de cada momento.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            PÁGINA DERECHA — Consola + Guión
            ════════════════════════════════ */}
        <div className="d90-page d90-page--right">
          {/* Sombra de lomo */}
          <div className="d90-spine-shadow d90-spine-shadow--right" />

          <div className="d90-page-content">

            {/* ── VISOR DE TEXTO / GUIÓN ── */}
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
                      className="d90-script-text"
                    >
                      <h3 className="d90-script-headline">
                        {activeHito.year} — {activeHito.title}
                      </h3>
                      {activeHito.guion.split('\n\n').map((para, i) => (
                        <p key={i} className={i === 0 ? 'd90-script-para d90-script-para--header' : 'd90-script-para'}>
                          {para}
                        </p>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="d90-script-empty"
                    >
                      <span className="d90-script-empty-icon">📡</span>
                      <p>Presiona un hito para leer<br/>el guión del Notihistórico</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ── PARRILLA DE HITOS ── */}
            <div className="d90-hitos-list">
              {HITOS_RIGHT.map((hito) => {
                const isActive = activeHito?.id === hito.id;

                return (
                  <div key={hito.id} className="d90-hito-wrapper">
                    <motion.button
                      className={`d90-hito-btn ${isActive ? 'd90-hito-btn--active' : ''}`}
                      style={{ '--hito-color': hito.color }}
                      onClick={() => handleHitoClick(hito)}
                      whileTap={{ scale: 0.97 }}
                    >
                      {/* Número del hito */}
                      <span className="d90-hito-num">{String(hito.id).padStart(2, '0')}</span>

                      {/* Info principal */}
                      <div className="d90-hito-info">
                        <span className="d90-hito-year">{hito.year}</span>
                        <span className="d90-hito-title">{hito.title}</span>
                      </div>

                      {/* Indicador de estado */}
                      <div className="d90-hito-state">
                        {isActive && isPlaying  && <span className="d90-play-indicator">▶ SONANDO</span>}
                        {isActive && !isPlaying && <span className="d90-pause-indicator">⏸ PAUSA</span>}
                        {!isActive && <span className="d90-idle-indicator">▷</span>}
                      </div>
                    </motion.button>


                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
