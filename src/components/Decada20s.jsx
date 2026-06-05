import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NotihistoricoLayout } from './NotihistoricoLayout';
import './Decada20s.css';

// ── Imágenes ──────────────────────────────────────────────────────
import imgCovid    from '../assets/2020s/imagenes/covid19-colombia-2020.png';
import imgParo     from '../assets/2020s/imagenes/paro-nacional-2021.png';
import imgPetro    from '../assets/2020s/imagenes/elecciones-petro-2022.png';
import imgPaz      from '../assets/2020s/imagenes/paz-total-2022-2024.png';
import imgColombia from '../assets/2020s/imagenes/colombia-hoy-2024-2026.png';

// ── Audios ────────────────────────────────────────────────────────
import audio1 from '../assets/2020s/audio/1.mp3';
import audio2 from '../assets/2020s/audio/2.mp3';
import audio3 from '../assets/2020s/audio/3.mp3';
import audio4 from '../assets/2020s/audio/4.mp3';
import audio5 from '../assets/2020s/audio/5.mp3';

const audio6 = audio5;
const audio7 = audio5;

// ─────────────────────────────────────────────────────────────────
// DATOS
// ─────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1, year: 'Intro', title: 'El Año en que el Mundo Se Detuvo',
    shortDesc: 'La pandemia del COVID-19 paraliza Colombia y profundiza sus desigualdades.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Muy buenas noches, Colombia. Bienvenidos a HistoStream, el canal donde la historia va en vivo. ' +
      'Esta noche abrimos emisión especial viajando al año 2020, cuando el mundo entero se vio sacudido por la pandemia del COVID-19.\n\n' +
      'El 6 de marzo de 2020, Colombia confirma su primer caso de coronavirus en Bogotá. ' +
      'En cuestión de días, el gobierno del presidente Iván Duque decreta la cuarentena obligatoria más estricta de América Latina.\n\n' +
      'Los hospitales se preparan para lo peor. Las cifras de desempleo se disparan al 21%. ' +
      'Millones de colombianos que vivían de la economía informal se quedan sin ingresos de un día para el otro.\n\n' +
      'La pandemia no solo cobra vidas —más de 130 mil fallecidos en Colombia— sino que profundiza las desigualdades estructurales del país.',
    images: [imgCovid], audioSrc: audio1, sfxSrc: '',
    datoClave: '2020 · COVID-19 · Cuarentena obligatoria en Colombia',
    fichaLineas: ['Fecha: 6 marzo 2020 (1er caso)','Presidente: Iván Duque','Medida: Cuarentena obligatoria','Fallecidos: +130.000','Desempleo: 21% (pico 2020)'],
    color: '#1a4a7a',
  },
  {
    id: 2, year: '2021', title: '28A: Colombia Explota en las Calles',
    shortDesc: 'El Paro Nacional se convierte en el mayor estallido social de la historia reciente.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'El 28 de abril de 2021, Colombia despierta con un paro nacional que nadie esperaba de esta magnitud. ' +
      'Lo que comienza como una protesta contra una reforma tributaria se convierte rápidamente en el estallido social más grande de las últimas décadas.\n\n' +
      'Cali se convierte en el epicentro de la resistencia. Durante semanas, el barrio de Puerto Resistencia ' +
      'y la llamada "primera línea" mantienen los bloqueos.\n\n' +
      'Las cifras son dolorosas: más de 80 personas fallecidas, denuncias de violencia policial. ' +
      'El gobierno retira la reforma tributaria, pero el fuego social sigue ardiendo.',
    images: [imgParo], audioSrc: audio2, sfxSrc: '',
    datoClave: '2021 · Paro Nacional · 28 de abril · Estallido Social',
    fichaLineas: ['Fecha inicio: 28 abril 2021','Detonante: Reforma tributaria Duque','Epicentro: Cali — Puerto Resistencia','Fallecidos: +80 personas','Resultado: Retiro de la reforma'],
    color: '#7a1a1a',
  },
  {
    id: 3, year: '2022', title: 'La Historia Cambia de Bando: Llega Petro',
    shortDesc: 'Colombia elige por primera vez un presidente de izquierda.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'El 19 de junio de 2022, Colombia escribió una página nueva en su historia. ' +
      'Por primera vez desde que existe la república, un candidato de izquierda llegó a la Casa de Nariño.\n\n' +
      'A su lado, Francia Márquez se convirtió en la primera vicepresidenta afro de la historia colombiana.\n\n' +
      'El 7 de agosto de 2022, en la Plaza de Bolívar, Gustavo Petro recibió la banda presidencial. Colombia iniciaba una nueva era.',
    images: [imgPetro], audioSrc: audio3, sfxSrc: '',
    datoClave: '2022 · Gustavo Petro · Primer presidente de izquierda en Colombia',
    fichaLineas: ['Fecha: 19 junio 2022','Presidente electo: Gustavo Petro','Vicepresidenta: Francia Márquez','Votos Petro: 11.281.013','Resultado: 50,4% vs 47,3%'],
    color: '#1a6a3a',
  },
  {
    id: 4, year: '2022–2024', title: 'Paz Total: La Apuesta más Arriesgada',
    shortDesc: 'Petro negocia simultáneamente con el ELN y las FARC disidentes.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Una de las apuestas más ambiciosas del gobierno Petro fue su política de "Paz Total": ' +
      'negociar simultáneamente con todos los grupos armados del territorio colombiano.\n\n' +
      'Los diálogos con el ELN avanzaron lentamente entre Colombia y Cuba. ' +
      'Con las disidencias de las FARC el proceso fue más turbulento, interrumpiéndose en repetidas ocasiones.\n\n' +
      'La Paz Total se convirtió en el símbolo de las contradicciones del gobierno Petro: ' +
      'una apuesta audaz por el fin del conflicto, pero con resultados que tardaron en materializarse.',
    images: [imgPaz], audioSrc: audio4, sfxSrc: '',
    datoClave: '2022–2024 · Paz Total · ELN y FARC disidentes',
    fichaLineas: ['Política: Paz Total (gobierno Petro)','Actores: ELN, FARC disidentes','Escenarios: Cuba, Venezuela, México','Obstáculo: Violaciones cese al fuego','Estado 2024: Proceso activo'],
    color: '#5a3e00',
  },
];

const HITOS_RIGHT = [
  {
    id: 5, year: '2024–2025', title: 'Reformas en Llamas: El Gobierno contra el Congreso',
    shortDesc: 'Las reformas a la salud, pensiones y trabajo fracturan la política colombiana.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Desde el inicio de su mandato, el gobierno Petro intentó transformar las bases del Estado colombiano. ' +
      'Las reformas a la salud, las pensiones y el trabajo se convirtieron en el campo de batalla político más intenso.\n\n' +
      'La reforma a la salud fue la más polémica: buscaba eliminar las EPS y crear un sistema estatal. ' +
      'Mientras tanto, ministros renunciaban y la popularidad de Petro caía mes a mes.\n\n' +
      'Colombia vivía una paradoja: el presidente con más votos de la historia enfrentando uno de los gobiernos con más dificultades para gobernar.',
    images: [imgColombia], audioSrc: audio5, sfxSrc: '',
    datoClave: '2024–2025 · Reformas · Crisis política del gobierno Petro',
    fichaLineas: ['Reformas: Salud, pensiones, trabajo','Obstáculo: Congreso y sectores privados','Crisis: Múltiples renuncias de ministros','Popularidad: Caída sostenida','Debate: Transformación vs estabilidad'],
    color: '#6a1a6a',
  },
  {
    id: 6, year: '2026', title: 'El Congreso Decide: Elecciones Legislativas',
    shortDesc: 'Las urnas hablan antes de la presidencial. Colombia elige el Congreso que definirá el futuro.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Las elecciones al Congreso de 2026 se convirtieron en el primer gran termómetro político de la era post-Petro.\n\n' +
      'Los resultados mostraron un Congreso fragmentado, sin mayorías claras. ' +
      'El petrismo perdió terreno respecto a 2022. Los partidos tradicionales mostraron resiliencia.\n\n' +
      'Un Congreso fragmentado significa que el próximo presidente tendrá que negociar y ceder para poder gobernar. Colombia eligió la complejidad.',
    images: [imgCovid], audioSrc: audio6, sfxSrc: '',
    datoClave: '2026 · Elecciones legislativas · Congreso fragmentado',
    fichaLineas: ['Fecha: Marzo 2026','Cargos: 108 senadores + 188 representantes','Resultado: Congreso sin mayorías claras','Ganador relativo: Partidos de centro','Señal: Desgaste del petrismo'],
    color: '#1a3a6a',
  },
  {
    id: 7, year: 'Cierre', title: '2026: Colombia en Vilo — Primera Vuelta y la Gran Fractura',
    shortDesc: 'La primera vuelta presidencial de 2026 parte al país en dos.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Y así llegamos al momento que tiene a Colombia entera con la respiración contenida. ' +
      'La primera vuelta de las elecciones presidenciales de 2026 dejó un resultado que nadie puede ignorar: ' +
      'el país está roto en dos, y la segunda vuelta lo definirá todo.\n\n' +
      'Las redes sociales ardieron con desinformación. Las familias se dividieron. ' +
      'Colombia no discutía solo sobre candidatos: discutía sobre qué país quería ser.\n\n' +
      'Esto es historia en tiempo real. Hasta aquí HistoStream. Buenas noches, Colombia.',
    images: [imgPetro], audioSrc: audio7, sfxSrc: '',
    datoClave: '2026 · Primera vuelta presidencial · Polarización extrema',
    fichaLineas: ['Fecha: Mayo 2026','Contexto: Fin del gobierno Petro','Característica: Máxima polarización','Estado: Segunda vuelta pendiente','En juego: El rumbo de Colombia'],
    color: '#8a1a1a',
  },
];

// ─────────────────────────────────────────────────────────────────
// IPHONE COMPONENT — reemplaza el TV
// ─────────────────────────────────────────────────────────────────
const IPhoneLandscape = ({ activeHito, imageIndex, isPlaying, tvState, onPrev, onNext, onPrevHito, onNextHito, onPlayPause, allHitos }) => {
  const showImage = tvState === 'on' && activeHito?.images?.length > 0;
  const currentImg = showImage ? activeHito.images[imageIndex] : null;
  const totalHitos = allHitos.length;
  const currentIndex = allHitos.findIndex(h => h.id === activeHito?.id);

  return (
    <div className="d20-iphone-wrap">
      {/* ── CARCASA ── */}
      <div className="d20-iphone">
        {/* Dynamic Island */}
        <div className="d20-island" />
        {/* Botón power arriba */}
        <div className="d20-btn-power" />
        {/* Botón mute + volumen abajo */}
        <div className="d20-btn-mute" />
        <div className="d20-btn-vol1" />
        <div className="d20-btn-vol2" />
        {/* Home bar derecha */}
        <div className="d20-home-bar" />
        {/* ── PANTALLA ── */}
        <div className="d20-screen">
          {/* IDLE */}
          {tvState === 'off' && (
            <div className="d20-screen-idle">
              <div className="d20-dot" />
              <span>selecciona un hito</span>
            </div>
          )}
          {/* STATIC */}
          {tvState === 'static' && (
            <div className="d20-screen-static">
              <div className="d20-static-canvas" />
            </div>
          )}
          {/* ACTIVO — imagen full + overlay + texto */}
          {tvState === 'on' && activeHito && (
            <div className="d20-screen-active">
              {/* Imagen de fondo */}
              {currentImg && (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeHito.id}-${imageIndex}`}
                    src={currentImg}
                    alt={activeHito.title}
                    className="d20-bg-img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                </AnimatePresence>
              )}
              {/* Overlay gradiente */}
              <div className="d20-overlay" />
              {/* Status bar */}
              <div className="d20-status-bar">
                <span>9:41</span>
                <span>5G ▌▌</span>
              </div>
              {/* Badge EN VIVO */}
              {isPlaying && <div className="d20-live-badge">● EN VIVO</div>}
              {/* Texto abajo */}
              <div className="d20-text-bottom">
                <span className="d20-año">{activeHito.year}</span>
                <span className="d20-titulo">{activeHito.title}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ── CONTROLES DEBAJO DEL IPHONE ── */}
      <div className="d20-controls">
        <button
          className="d20-ctrl-btn"
          onClick={onPrevHito}
          disabled={currentIndex <= 0}
          title="Hito anterior"
        >⏮</button>
        <button
          className="d20-ctrl-btn"
          onClick={onPrev}
          disabled={!activeHito || !showImage || activeHito.images.length <= 1}
          title="Imagen anterior"
        >◀</button>
        <button
          className={`d20-ctrl-btn d20-ctrl-play ${isPlaying ? 'd20-ctrl-playing' : ''}`}
          onClick={onPlayPause}
          disabled={!activeHito}
          title={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button
          className="d20-ctrl-btn"
          onClick={onNext}
          disabled={!activeHito || !showImage || activeHito.images.length <= 1}
          title="Imagen siguiente"
        >▶</button>
        <button
          className="d20-ctrl-btn"
          onClick={onNextHito}
          disabled={currentIndex >= totalHitos - 1}
          title="Hito siguiente"
        >⏭</button>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────
export const Decada20s = () => {
  const [activeHito, setActiveHito] = useState(null);
  const [isPlaying, setIsPlaying]   = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [tvState, setTvState]       = useState('off');
  const [volume, setVolume]         = useState(100);

  const currentAudioRef = useRef(null);
  const isPlayingRef    = useRef(false);
  const activeHitoRef   = useRef(null);
  const tvStateRef      = useRef('off');

  const ALL_HITOS = [...HITOS_LEFT, ...HITOS_RIGHT];

  useEffect(() => { isPlayingRef.current  = isPlaying;  }, [isPlaying]);
  useEffect(() => { activeHitoRef.current = activeHito; }, [activeHito]);
  useEffect(() => { tvStateRef.current    = tvState;    }, [tvState]);

  useEffect(() => {
    if (currentAudioRef.current) currentAudioRef.current.volume = volume / 100;
  }, [volume]);

  useEffect(() => () => {
    if (currentAudioRef.current) { currentAudioRef.current.pause(); currentAudioRef.current.src = ''; }
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
    audio.volume = volume / 100;
    currentAudioRef.current = audio;
    audio.addEventListener('ended', () => { isPlayingRef.current = false; setIsPlaying(false); });
    audio.play()
      .then(() => { isPlayingRef.current = true; setIsPlaying(true); })
      .catch(err => console.warn('Audio error:', err));
  };

  const triggerStatic = (callback) => {
    setTvState('static'); tvStateRef.current = 'static';
    setTimeout(() => {
      setTvState('on'); tvStateRef.current = 'on';
      if (callback) callback();
    }, 500);
  };

  const launchHito = (hito) => {
    stopAudioRaw(); setIsPlaying(false);
    const launch = () => { setActiveHito(hito); activeHitoRef.current = hito; setImageIndex(0); startAudio(hito); };
    if (tvStateRef.current === 'off') {
      setTvState('static'); tvStateRef.current = 'static';
      setTimeout(() => { setTvState('on'); tvStateRef.current = 'on'; launch(); }, 500);
    } else {
      triggerStatic(launch);
    }
  };

  const handleHitoClick = (hito) => {
    if (activeHitoRef.current?.id === hito.id) {
      const audio = currentAudioRef.current;
      if (!audio) return;
      if (isPlayingRef.current) { audio.pause(); isPlayingRef.current = false; setIsPlaying(false); }
      else { audio.play().then(() => { isPlayingRef.current = true; setIsPlaying(true); }).catch(console.warn); }
      return;
    }
    launchHito(hito);
  };

  const handlePlayPause = () => {
    if (!activeHito) return;
    const audio = currentAudioRef.current;
    if (!audio) { startAudio(activeHito); return; }
    if (isPlayingRef.current) { audio.pause(); isPlayingRef.current = false; setIsPlaying(false); }
    else { audio.play().then(() => { isPlayingRef.current = true; setIsPlaying(true); }).catch(console.warn); }
  };

  const prevImage = () => {
    if (!activeHito?.images?.length) return;
    setImageIndex(i => (i - 1 + activeHito.images.length) % activeHito.images.length);
  };

  const nextImage = () => {
    if (!activeHito?.images?.length) return;
    setImageIndex(i => (i + 1) % activeHito.images.length);
  };

  const prevHito = () => {
    const idx = ALL_HITOS.findIndex(h => h.id === activeHito?.id);
    if (idx > 0) launchHito(ALL_HITOS[idx - 1]);
    else launchHito(ALL_HITOS[0]);
  };

  const nextHito = () => {
    const idx = ALL_HITOS.findIndex(h => h.id === activeHito?.id);
    if (idx < ALL_HITOS.length - 1) launchHito(ALL_HITOS[idx + 1]);
  };

  const emergencyStop = () => {
    stopAudioRaw(); setIsPlaying(false); setActiveHito(null);
    activeHitoRef.current = null; setTvState('off'); tvStateRef.current = 'off'; setImageIndex(0);
  };

  return (
    <NotihistoricoLayout
      chapterIndex="7"
      period="2020 — 2026"
      subtitle="Pandemia, estallido social y cambio político"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 2020–2026"
      cdLabel="Era Digital"
      themeClass="theme-20s"
      tag="20s"
      activeHito={activeHito}
      isPlaying={isPlaying}
      imageIndex={imageIndex}
      tvState={tvState}
      volume={volume}
      onHitoClick={handleHitoClick}
      onPrevImage={prevImage}
      onNextImage={nextImage}
      onEmergencyStop={emergencyStop}
      onVolumeChange={setVolume}
      customTv={
        <IPhoneLandscape
          activeHito={activeHito}
          imageIndex={imageIndex}
          isPlaying={isPlaying}
          tvState={tvState}
          onPrev={prevImage}
          onNext={nextImage}
          onPrevHito={prevHito}
          onNextHito={nextHito}
          onPlayPause={handlePlayPause}
          allHitos={ALL_HITOS}
        />
      }
    />
  );
};