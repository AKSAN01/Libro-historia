import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Decade80s.css';

// ── Imports de audio (Vite los procesa desde src/assets) ─────────────────────
import audio1 from '../assets/80s/audio/hito1.mp3';
import audio2 from '../assets/80s/audio/hito2.mp3';
import audio3 from '../assets/80s/audio/hito3.mp3';
import audio4 from '../assets/80s/audio/hito4.mp3';
import audio5 from '../assets/80s/audio/hito5.mp3';
import audio6 from '../assets/80s/audio/hito6.mp3';

// ── Imports de imágenes (Actualizados) ────────────────────────────────────────
import imgLara from '../assets/80s/imagenes/asesinato_lara.png';
import imgPalacio1 from '../assets/80s/imagenes/palacio_1.jpeg';
import imgPalacio2 from '../assets/80s/imagenes/palacio_2.png';
import imgTresCandidatos from '../assets/80s/imagenes/tres_candidatos.jpeg';
import imgAbismo1989 from '../assets/80s/imagenes/abismo_1989.png';
import imgEspejismo1 from '../assets/80s/imagenes/espejismo_paz_1.png';
import imgEspejismo2 from '../assets/80s/imagenes/espejismo_paz_2.jpeg';
import imgUp1 from '../assets/80s/imagenes/genocidio_up_1.jpeg';
import imgUp2 from '../assets/80s/imagenes/genocidio_up_2.png';
import imgUp3 from '../assets/80s/imagenes/genocidio_up_3.jpeg';
import imgComplementaria from '../assets/80s/imagenes/escena_complementaria.jpeg';
import imgM19 from '../assets/80s/imagenes/desmovilizacion_m19.png';

// ─────────────────────────────────────────────────────────────────────────────
// DATOS DE LOS 7(6 en realidad) HITOS DE LOS 80s
// ─────────────────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1,
    year: '1980s',
    title: 'Introducción',
    shortDesc: 'La década del miedo se instala en Colombia.',
    summary: 'Los años 80 marcaron una época de terror en Colombia. El narcotráfico desafió al Estado, las guerrillas intensificaron sus acciones y la guerra urbana se convirtió en la nueva realidad del país.',
    guion:
      'NOTIHISTÓRICO — INTRODUCCIÓN\n\n' +
      'Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, e iniciamos esta emisión especial viajando a la década de 1980.\n\n' +
      'Un periodo que muchos recuerdan no solo por la violencia… sino por el miedo permanente que se instaló en el país.\n\n' +
      'Las calles comenzaron a llenarse de atentados. Las noticias hablaban diariamente de asesinatos, secuestros y bombas.\n\n' +
      'La guerra ya no parecía ocurrir únicamente en zonas rurales o lejanas. Ahora golpeaba ciudades, edificios públicos y plazas llenas de civiles.\n\n' +
      'El país entero empezaba a vivir bajo la sensación de que cualquier lugar podía convertirse en escenario de una tragedia.',
    images: [imgComplementaria],
    audioSrc: audio1,
    datoClave: 'Década de 1980 · Guerra Urbana · Narcotráfico · Violencia generalizada',
    color: '#3d4a3e',
  },
  {
    id: 2,
    year: '1984-1985',
    title: 'El Estado bajo ataque',
    shortDesc: 'El asesinato de Rodrigo Lara y la Toma del Palacio de Justicia.',
    summary: 'En 1984, el Cartel de Medellín asesinó al ministro Rodrigo Lara Bonilla. Un año después, el M-19 tomó el Palacio de Justicia, desencadenando una violenta retoma militar que dejó el corazón de la justicia en ruinas.',
    guion:
      'NOTIHISTÓRICO — EL ESTADO BAJO ATAQUE\n\n' +
      'En 1984, el asesinato del ministro de Justicia Rodrigo Lara Bonilla marca un antes y un después en la historia del país.\n\n' +
      'El crimen deja en evidencia el enorme poder que el narcotráfico había alcanzado dentro de Colombia. Por primera vez, millones de personas sienten que los carteles de la droga ya no solo buscaban enriquecerse… ahora estaban desafiando directamente al Estado colombiano.\n\n' +
      'Pero la violencia continuaría creciendo. Año 1985. El Palacio de Justicia, sede de las más altas cortes del país, es tomado por el grupo guerrillero M-19.\n\n' +
      'La respuesta militar provoca uno de los episodios más traumáticos de la historia reciente de Colombia. Las imágenes de tanques entrando al edificio y las llamas consumiendo el Palacio recorren el país entero. Durante horas, Colombia observa por televisión cómo el corazón de la justicia se convierte en un campo de batalla.',
    images: [imgLara, imgPalacio1, imgPalacio2],
    audioSrc: audio2,
    datoClave: '1984-1985 · Rodrigo Lara Bonilla · Toma del Palacio de Justicia · M-19',
    color: '#7a2b2b',
  },
  {
    id: 3,
    year: '1985+',
    title: 'La paz silenciada',
    shortDesc: 'El exterminio sistemático de la Unión Patriótica.',
    summary: 'Surgida tras los diálogos de paz con las FARC, la Unión Patriótica (UP) sufrió un exterminio sistemático. Miles de sus líderes y simpatizantes fueron asesinados, cerrando las puertas a una salida negociada.',
    guion:
      'NOTIHISTÓRICO — LA PAZ SILENCIADA\n\n' +
      'Mientras algunos sectores intentaban abrir espacios políticos para buscar una salida negociada al conflicto, una nueva tragedia comenzaba a desarrollarse silenciosamente.\n\n' +
      'La Unión Patriótica, movimiento político surgido tras diálogos de paz con las FARC, empieza a sufrir asesinatos sistemáticos contra sus miembros y dirigentes.\n\n' +
      'Miles de militantes, candidatos, líderes sociales y simpatizantes son asesinados en distintos lugares del país. El episodio deja una profunda herida en la sociedad colombiana.\n\n' +
      'Para muchos sectores, el exterminio de la Unión Patriótica envía un mensaje devastador: que incluso la participación política podía convertirse en una sentencia de muerte. La desconfianza hacia cualquier posibilidad de paz comienza a crecer todavía más.',
    images: [imgEspejismo1, imgEspejismo2, imgUp1, imgUp2, imgUp3],
    audioSrc: audio3,
    datoClave: 'Exterminio de la UP · Diálogos de paz rotos · Violencia política',
    color: '#5c1b1b',
  },
];

const HITOS_RIGHT = [
  {
    id: 4,
    year: '1989',
    title: '1989: El año del abismo',
    shortDesc: 'El magnicidio de Galán y el terrorismo en las ciudades.',
    summary: '1989 fue uno de los años más sangrientos. Luis Carlos Galán fue asesinado en Soacha, y el narcoterrorismo escaló con la explosión del vuelo de Avianca y las bombas en las ciudades.',
    guion:
      'NOTIHISTÓRICO — EL AÑO DEL ABISMO\n\n' +
      'Y entonces llega 1989, uno de los años más violentos y dolorosos de la historia contemporánea de Colombia.\n\n' +
      'En plena campaña presidencial, el candidato Luis Carlos Galán es asesinado durante un acto público en Soacha. La noticia produce conmoción nacional inmediata.\n\n' +
      'Pero el terror no termina ahí. Meses después, un avión de Avianca explota en pleno vuelo como parte de un atentado relacionado con el narcotráfico. Decenas de civiles pierden la vida.\n\n' +
      'La sensación de inseguridad se vuelve total. Las bombas comienzan a aparecer en ciudades, edificios y espacios públicos. Muchos colombianos sienten que ya no existe un lugar verdaderamente seguro. La guerra parecía estar en todas partes.',
    images: [imgTresCandidatos, imgAbismo1989],
    audioSrc: audio4,
    datoClave: '1989 · Luis Carlos Galán · Vuelo 203 de Avianca · Narcoterrorismo',
    color: '#4a433a',
  },
  {
    id: 5,
    year: '1990',
    title: 'El primer respiro',
    shortDesc: 'La desmovilización del M-19 tras años de guerra.',
    summary: 'Agotada por la violencia, Colombia encuentra una luz de esperanza en 1990 con la desmovilización del grupo guerrillero M-19, un primer paso hacia la paz tras una década de caos.',
    guion:
      'NOTIHISTÓRICO — EL PRIMER RESPIRO\n\n' +
      'Al finalizar la década, Colombia se encontraba agotada por años de violencia, miedo y duelo constante.\n\n' +
      'Sin embargo, en medio de la crisis aparece un hecho que algunos interpretan como una pequeña posibilidad de cambio. En 1990, el M-19 inicia oficialmente su proceso de desmovilización y entrega de armas.\n\n' +
      'Para muchos ciudadanos, el acontecimiento representa el primer respiro después de años marcados por atentados y confrontación.\n\n' +
      'Pero el país seguía profundamente herido. Miles de familias habían perdido seres queridos. El narcotráfico se había infiltrado en distintos sectores de la sociedad. Y la violencia parecía haberse convertido en parte de la vida cotidiana.',
    images: [imgM19],
    audioSrc: audio5,
    datoClave: '1990 · Desmovilización M-19 · Entrega de armas · Esperanza en medio de la crisis',
    color: '#2b3b4a',
  },
  {
    id: 6,
    year: 'Finales 80s',
    title: 'Cierre: Cicatrices profundas',
    shortDesc: 'El legado de miedo y las víctimas del conflicto.',
    summary: 'La década de los 80 transformó la rutina de los colombianos. La memoria colectiva quedó marcada por la violencia, y la verdad se convirtió en una de las mayores víctimas del conflicto armado.',
    guion:
      'NOTIHISTÓRICO — CIERRE\n\n' +
      'Porque durante los años 80, Colombia aprendió que el miedo podía transformar la rutina de todo un país.\n\n' +
      'La violencia dejó cicatrices profundas en la memoria colectiva.\n\n' +
      'Y mientras las bombas intentaban imponer silencio… la verdad comenzaba a convertirse en una de las principales víctimas del conflicto.\n\n' +
      'Hasta aquí esta emisión especial de Notihistórico, el noticiero de la historia. Muy buenas noches, Colombia.',
    images: [imgComplementaria],
    audioSrc: audio6,
    datoClave: 'Memoria colectiva · Búsqueda de la verdad · Fin de la transmisión',
    color: '#1a1a1a',
  },
];

const HITOS = [...HITOS_LEFT, ...HITOS_RIGHT];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL DE LOS 80s
// ─────────────────────────────────────────────────────────────────────────────
export const Decade80s = () => {
  const [activeHito, setActiveHito]     = useState(null);
  const [isPlaying, setIsPlaying]       = useState(false);
  const [imageIndex, setImageIndex]     = useState(0);
  const [tvState, setTvState]           = useState('off');
  const [staticFlash, setStaticFlash]   = useState(false);

  const currentAudioRef = useRef(null);
  const isPlayingRef    = useRef(false);
  const activeHitoRef   = useRef(null);
  const tvStateRef      = useRef('off');

  useEffect(() => { isPlayingRef.current  = isPlaying;  }, [isPlaying]);
  useEffect(() => { activeHitoRef.current = activeHito; }, [activeHito]);
  useEffect(() => { tvStateRef.current    = tvState;    }, [tvState]);

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
          .then(() => {
            isPlayingRef.current = true;
            setIsPlaying(true);
          })
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
      }, 600);
    } else {
      triggerStatic(launch);
    }
  };

  return (
    <div className="d80-root">
      <div className="d80-book">
        
        {/* PÁGINA IZQUIERDA: Televisor e Hitos iniciales */}
        <div className="d80-page d80-page--left">
          <div className="d80-spine-shadow d80-spine-shadow--left"></div>
          <div className="d80-page-content">
            
            <div className="d80-header">
              <Link to="/" className="d80-back-link">
                <span>◀</span> Volver
              </Link>
              <span className="d80-chapter-label">CAPÍTULO 3</span>
              <h1 className="d80-chapter-title">Los 80s</h1>
            </div>

            <div className="d80-tv-wrap">
              <div className="d80-tv">
                <div className="d80-tv-frame">
                  <div className="d80-tv-screen-wrap">
                    <div className={`d80-tv-screen ${staticFlash ? 'd80-tv-screen--static' : ''}`}>
                      <div className="d80-crt-scanlines"></div>
                      <div className="d80-crt-glow"></div>
                      
                      {tvState === 'off' && (
                        <div className="d80-tv-off">
                          <div className="d80-tv-off-dot"></div>
                          <span className="d80-tv-off-text">Sin Señal</span>
                        </div>
                      )}
                      
                      {tvState === 'static' && (
                        <div className="d80-tv-static">
                          <div className="d80-static-canvas"></div>
                        </div>
                      )}
                      
                      {tvState === 'on' && activeHito && (
                        <img 
                          src={activeHito.images[imageIndex]} 
                          alt="Archivo histórico de los 80s" 
                          className="d80-tv-img"
                        />
                      )}
                    </div>
                  </div>
                  <div className="d80-tv-controls">
                    <div className="d80-channel-btns">
                      <button 
                        className="d80-channel-btn" 
                        onClick={() => setImageIndex(prev => Math.max(0, prev - 1))}
                        disabled={!activeHito || imageIndex === 0}
                      >
                        ◀
                      </button>
                      <span className="d80-channel-indicator">
                        {activeHito ? `IMG ${imageIndex + 1}` : '--'}
                      </span>
                      <button 
                        className="d80-channel-btn"
                        onClick={() => setImageIndex(prev => Math.min(activeHito.images.length - 1, prev + 1))}
                        disabled={!activeHito || imageIndex === activeHito.images.length - 1}
                      >
                        ▶
                      </button>
                    </div>
                    <div className="d80-power-zone">
                      <div className={`d80-power-led ${tvState !== 'off' ? 'd80-power-led--on' : ''}`}></div>
                      <span className="d80-power-label">POWER</span>
                    </div>
                  </div>
                </div>
                <div className="d80-tv-base">
                  <div className="d80-tv-leg"></div>
                  <div className="d80-tv-leg"></div>
                </div>
              </div>
            </div>

            <div className="d80-hitos-list d80-hitos-list--left">
              {HITOS_LEFT.map(hito => (
                <div key={hito.id} className="d80-hito-wrapper">
                  <button 
                    className={`d80-hito-btn ${activeHito?.id === hito.id ? 'd80-hito-btn--active' : ''}`}
                    style={{ '--hito-color': hito.color }}
                    onClick={() => handleHitoClick(hito)}
                  >
                    <span className="d80-hito-num">0{hito.id}</span>
                    <div className="d80-hito-info">
                      <span className="d80-hito-year">{hito.year}</span>
                      <span className="d80-hito-title">{hito.title}</span>
                    </div>
                    <div className="d80-hito-state">
                      {activeHito?.id === hito.id && isPlaying ? (
                        <span className="d80-play-indicator">▶ REP</span>
                      ) : activeHito?.id === hito.id ? (
                        <span className="d80-pause-indicator">⏸ PAUSA</span>
                      ) : (
                        <span className="d80-idle-indicator">●</span>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* PÁGINA DERECHA: Guión y resto de Hitos */}
        <div className="d80-page d80-page--right">
          <div className="d80-spine-shadow d80-spine-shadow--right"></div>
          <div className="d80-page-content">
            
            <div className="d80-script-viewer">
              <div className="d80-script-header">
                <span className="d80-script-icon">📝</span>
                <span className="d80-script-title">TRANSCRIPCIÓN OFICIAL</span>
                {isPlaying && <span className="d80-script-live">EN VIVO</span>}
              </div>
              <div className="d80-script-body">
                {!activeHito ? (
                  <div className="d80-script-empty">
                    <span className="d80-script-empty-icon">📻</span>
                    <p>Selecciona un evento histórico para cargar el guión y el audio.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="d80-script-headline">{activeHito.title}</h3>
                    <p className="d80-script-para--header">RESUMEN HISTÓRICO</p>
                    <p className="d80-script-para">{activeHito.summary}</p>
                    <p className="d80-script-para--header" style={{ marginTop: '16px' }}>GUIÓN DE AUDIO</p>
                    {activeHito.guion.split('\n\n').map((parrafo, idx) => (
                      <p key={idx} className="d80-script-para" style={{ fontStyle: 'italic' }}>
                        {parrafo}
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>

            {activeHito && (
              <div className="d80-fact-box" style={{ marginTop: '10px' }}>
                <span className="d80-fact-icon">📌</span>
                <div className="d80-fact-content">
                  <span className="d80-fact-label">DATO CLAVE</span>
                  <span className="d80-fact-text">{activeHito.datoClave}</span>
                </div>
              </div>
            )}

            <div className="d80-hitos-list d80-hitos-list--right" style={{ marginTop: 'auto' }}>
              {HITOS_RIGHT.map(hito => (
                <div key={hito.id} className="d80-hito-wrapper">
                  <button 
                    className={`d80-hito-btn ${activeHito?.id === hito.id ? 'd80-hito-btn--active' : ''}`}
                    style={{ '--hito-color': hito.color }}
                    onClick={() => handleHitoClick(hito)}
                  >
                    <span className="d80-hito-num">0{hito.id}</span>
                    <div className="d80-hito-info">
                      <span className="d80-hito-year">{hito.year}</span>
                      <span className="d80-hito-title">{hito.title}</span>
                    </div>
                    <div className="d80-hito-state">
                      {activeHito?.id === hito.id && isPlaying ? (
                        <span className="d80-play-indicator">▶ REP</span>
                      ) : activeHito?.id === hito.id ? (
                        <span className="d80-pause-indicator">⏸ PAUSA</span>
                      ) : (
                        <span className="d80-idle-indicator">●</span>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};