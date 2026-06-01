import React, { useState, useEffect, useRef } from 'react';
import './Libro.css'; 

const Decada2010 = ({ onIrALibreria }) => {
  const [pliegoActual, setPliegoActual] = useState(1);
  const [subtituloActivo, setSubtituloActivo] = useState(0);
  const [faseAudio, setFaseAudio] = useState('espera'); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [textoVisible, setTextoVisible] = useState('');
  
  const audioRef = useRef(new Audio());
  const sfxRef = useRef(new Audio());

  const guionCuento = [
    { 
      autor: "Presentador (Introducción)", 
      texto: "“Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, y abrimos esta emisión especial en una nueva década marcada por una pregunta que parece perseguir al país entero: ¿Y ahora qué? Después de más de medio siglo de conflicto armado, Colombia intenta encontrar una salida mientras crecen las discusiones sobre memoria, justicia y paz. Porque la guerra seguía presente… pero cada vez era más difícil distinguir dónde terminaba el conflicto y dónde comenzaba la política.”",
      sfx: "/SFX10s/16.mp3",
      imagen: null 
    },
    { 
      autor: "2011: El Archivo de los Nadie", 
      texto: "“En noticias nacionales, el Estado colombiano da un paso histórico. Durante años, el país habló únicamente de cifras: número de muertos, desaparecidos, secuestros y masacres. Pero en 2011 comienza un cambio importante. Con la Ley de Víctimas y Restitución de Tierras, el Estado empieza a reconocer oficialmente a las víctimas del conflicto armado. Ya no eran solamente estadísticas. Ahora tenían nombres, historias, familias y memorias. Muchos colombianos sintieron que, por primera vez, el país empezaba a mirar de frente a todas aquellas personas que durante décadas habían permanecido invisibles.”",
      sfx: "/SFX10s/10.mp3",
      imagen: "/imagenes 2010s/Reconocimiento de víctimas en 2011.png"
    },
    { 
      autor: "2012: Hablar con el Enemigo", 
      texto: "“Atención, Colombia. El gobierno del presidente Juan Manuel Santos confirma oficialmente el inicio de diálogos de paz con las FARC en La Habana, Cuba. La noticia sacude al país entero. Después de más de cincuenta años de guerra, el gobierno y la guerrilla más antigua de América Latina se sientan a negociar. Mientras algunos ciudadanos celebran la posibilidad del fin del conflicto, otros expresan indignación y desconfianza. Las opiniones comienzan a dividirse. Para unos, negociar significaba esperanza. Para otros, significaba impunidad. Y poco a poco, una sola palabra empezó a dominar todas las conversaciones del país: la paz.”",
      sfx: "/SFX10s/14.mp3",
      imagen: "/imagenes 2010s/Negociaciones de paz en La Habana.png"
    },
    { 
      autor: "2016: El Bolígrafo de Titanio", 
      texto: "“Después de varios años de negociación, llega finalmente uno de los momentos más simbólicos de la historia reciente de Colombia. Gobierno y FARC firman oficialmente el acuerdo de paz. Y hasta el bolígrafo utilizado en la ceremonia tenía un mensaje. Había sido fabricado con el casquillo de una bala. La idea era clara: lo que antes servía para destruir… ahora serviría para escribir un nuevo capítulo para el país. Para muchos colombianos, aquel momento representó esperanza, alivio y la posibilidad de cerrar una etapa de violencia. Pero para otros, persistían las dudas sobre el verdadero alcance del acuerdo.”",
      sfx: "/SFX10s/15.mp3",
      imagen: "/imagenes 2010s/Firma del acuerdo con el balígrafo.png"
    },
    { 
      autor: "2016: El Veredicto", 
      texto: "“Y justo cuando parecía que todo estaba decidido… el país entero fue llamado a votar. Colombia debía aprobar o rechazar el acuerdo de paz mediante un plebiscito nacional. Millones de personas siguieron los resultados desde televisores, radios, celulares y redes sociales. La tensión era total. Y entonces llegó el resultado inesperado. Ganó el NO. Pero por una diferencia mínima. Menos del uno por ciento. Literalmente, Colombia quedó dividida en dos. Las discusiones llegaron a las familias, a las universidades, a los grupos de amigos y a las redes sociales. La polarización creció rápidamente. Era como si la guerra hubiera cambiado de escenario: ya no solamente se peleaba con armas… ahora también se peleaba con opiniones, discursos y versiones distintas del país.”",
      sfx: "/SFX10s/11.mp3",
      imagen: "/imagenes 2010s/Plebiscito de 2016 y país dividido.png"
    },
    { 
      autor: "2017: La Gran Entrega", 
      texto: "“En un hecho que durante décadas pareció imposible, las FARC comienzan oficialmente la entrega de armas ante organismos internacionales. Miles de fusiles son almacenados en contenedores supervisados por la ONU. Las imágenes recorren el mundo entero. Muchos colombianos creen estar viendo el final de una guerra histórica. Sin embargo, especialistas advierten que el panorama sigue siendo complejo. Porque cuando un grupo armado abandona ciertos territorios… otros actores ilegales intentan ocupar ese espacio. La paz apenas comenzaba, y el país todavía enfrentaba enormes desafíos.”",
      sfx: "/SFX10s/12.mp3",
      imagen: "/imagenes 2010s/Entrega de armas a la ONU en 2017.png"
    },
    { 
      autor: "2019: El Retorno", 
      texto: "“Y cuando muchos pensaban que el conflicto comenzaba a cerrarse… aparece un nuevo video que vuelve a generar preocupación nacional. Antiguos comandantes de las FARC reaparecen armados y anuncian su regreso a la lucha ilegal. Las imágenes producen temor e incertidumbre en distintos sectores del país. Para muchos colombianos, la sensación era extraña y dolorosa: como si la historia estuviera intentando repetirse una vez más. El miedo regresaba lentamente. Y la idea de un final definitivo para el conflicto parecía alejarse nuevamente.”",
      sfx: "/SFX10s/17.mp3",
      imagen: "/imagenes 2010s/Regreso de disidencias en 2019.png"
    },
    { 
      autor: "Cierre", 
      texto: "“Porque el conflicto colombiano nunca fue solamente una guerra de balas. También fue una disputa por la memoria, por la verdad y por la manera de entender la historia. Y mientras esas heridas sigan abiertas… esta historia todavía no termina. Hasta aquí esta emisión especial de Notihistórico, el noticiero de la historia. Muy buenas noches, Colombia.”",
      sfx: "/SFX10s/18.mp3",
      imagen: null
    }
  ];

  // 1. MANEJO DE REPRODUCCIÓN
  useEffect(() => {
    const sfx = sfxRef.current;
    const voz = audioRef.current;

    const handleSfxEnded = () => {
      if (faseAudio === 'intro') setFaseAudio('sfx');
      else if (faseAudio === 'sfx') setFaseAudio('voz');
    };

    const handleVozEnded = () => {
      if (subtituloActivo < guionCuento.length - 1) {
        setSubtituloActivo(prev => prev + 1);
        setFaseAudio('sfx');
      } else {
        setIsPlaying(false);
        setFaseAudio('espera');
        setTextoVisible(''); 
      }
    };

    sfx.addEventListener('ended', handleSfxEnded);
    voz.addEventListener('ended', handleVozEnded);

    return () => {
      sfx.removeEventListener('ended', handleSfxEnded);
      voz.removeEventListener('ended', handleVozEnded);
    };
  }, [faseAudio, subtituloActivo, guionCuento.length]);

  // 2. ASIGNACIÓN DE FUENTES
  useEffect(() => {
    const sfx = sfxRef.current;
    const voz = audioRef.current;
    const capActual = guionCuento[subtituloActivo];

    if (faseAudio === 'intro') {
      const srcIntro = "/SFX10s/13.mp3";
      if (!decodeURIComponent(sfx.src).endsWith(srcIntro)) sfx.src = srcIntro;
    } 
    else if (faseAudio === 'sfx' && capActual) {
      if (!decodeURIComponent(sfx.src).endsWith(capActual.sfx)) sfx.src = capActual.sfx;
    } 
    else if (faseAudio === 'voz') {
      const vozSrc = `/audios 2010s/${subtituloActivo + 1}.mp3`;
      if (!decodeURIComponent(voz.src).endsWith(vozSrc)) voz.src = vozSrc;
    }
  }, [faseAudio, subtituloActivo]);

  // 3. CONTROL DE PLAY / PAUSE EFECTIVO
  useEffect(() => {
    const sfx = sfxRef.current;
    const voz = audioRef.current;

    if (!isPlaying || pliegoActual !== 2) {
      sfx.pause();
      voz.pause();
      return;
    }

    if (faseAudio === 'intro' || faseAudio === 'sfx') {
      sfx.play().catch(e => console.log("SFX Bloqueado:", e));
      voz.pause();
    } 
    else if (faseAudio === 'voz') {
      voz.play().catch(e => console.log("Voz Bloqueada:", e));
      sfx.pause();
    }
  }, [isPlaying, faseAudio, pliegoActual, subtituloActivo]);

  // 4. SUBTÍTULOS SINCRONIZADOS POR AUDIO
  useEffect(() => {
    if (faseAudio !== 'voz' || !isPlaying) {
      if (faseAudio !== 'voz') setTextoVisible('');
      return;
    }

    const voz = audioRef.current;
    const textoCompleto = guionCuento[subtituloActivo].texto;

    const empaquetar = (texto) => {
      const palabras = texto.split(' ');
      const bloques = [];
      let bloque = '';
      palabras.forEach(palabra => {
        if ((bloque + palabra).length > 80) {
          bloques.push(bloque.trim());
          bloque = palabra + ' ';
        } else {
          bloque += palabra + ' ';
        }
      });
      if (bloque) bloques.push(bloque.trim());
      return bloques;
    };

    const bloquesTexto = empaquetar(textoCompleto);

    const sincronizarSubtitulos = () => {
      const progreso = voz.currentTime / voz.duration;
      if (isNaN(progreso)) return;

      const indice = Math.floor(progreso * bloquesTexto.length);
      const bloqueActual = bloquesTexto[Math.min(indice, bloquesTexto.length - 1)];
      
      setTextoVisible(bloqueActual || '');
    };

    voz.addEventListener('timeupdate', sincronizarSubtitulos);
    return () => voz.removeEventListener('timeupdate', sincronizarSubtitulos);
  }, [faseAudio, isPlaying, subtituloActivo]);


  // CONTROLES DE INTERFAZ
  const togglePlay = () => setIsPlaying(!isPlaying);

  const irAPagina2 = () => {
    setPliegoActual(2);
    setFaseAudio('intro');
    setSubtituloActivo(0);
    setIsPlaying(true);
  };

  const seleccionarCapitulo = (index) => {
    sfxRef.current.pause();
    audioRef.current.pause();
    sfxRef.current.currentTime = 0;
    audioRef.current.currentTime = 0;

    setSubtituloActivo(index);
    setFaseAudio('sfx');
    setIsPlaying(true);
  };

  const reiniciarTransmision = () => {
    sfxRef.current.pause();
    audioRef.current.pause();
    sfxRef.current.currentTime = 0;
    audioRef.current.currentTime = 0;
    sfxRef.current.src = "/SFX10s/13.mp3"; 
    setSubtituloActivo(0);
    setFaseAudio('intro');
    setIsPlaying(true);
  };

  const capituloSeguro = guionCuento[subtituloActivo] || guionCuento[0];

  return (
    <div className="fondo-escritorio">
      <div className="pasta-libro-verde">
        <div className="marcador-ribbon-puro">
          <span>2010</span>
        </div>

        {/* --- PÁGINA IZQUIERDA --- */}
        <div className="hoja-libro hoja-izquierda">
          <div className="marco-dorado-css marco-izquierdo">
            <div className="contenido-texto-libro">
              {pliegoActual === 1 ? (
                <div className="animate-fade layout-col">
                  <div>
                    <h1 className="titulo-principal">DÉCADA DEL 2010</h1>
                    <h2 className="subtitulo-principal">El Juego de Espejos</h2>
                    <h3 className="tema-principal">Sinopsis</h3>
                  </div>
                  
                  {/* Este contenedor ahora es flexible y llenará el espacio limpiamente */}
                  <div className="contenedor-sinopsis">
                    <p className="parrafo-estilo">Colombia entra a la década de 2010 cargando décadas de guerra, bombas, secuestros y miedo. Pero esta vez el conflicto ya no se veía igual.</p>
                    <p className="parrafo-estilo">Ahora las discusiones no solo estaban en la selva o en los campos de combate… también aparecían en el Congreso, en las redes sociales, en las mesas familiares y en los titulares de televisión.</p>
                    <p className="parrafo-estilo">Mientras unos exigían justicia y castigo, otros empezaban a hablar de reconciliación y paz. Y poco a poco, el país comenzó a dividirse no solo por las armas… sino también por la manera de entender la verdad.</p>
                  </div>

                  <button 
                    className="boton-libro btn-libreria" 
                    onClick={() => onIrALibreria ? onIrALibreria() : alert("Redireccionando a la librería...")}
                  >
                    📚 IR A LA LIBRERÍA
                  </button>
                </div>
              ) : (
                <div className="animate-fade layout-col">
                  <h2 className="titulo-seccion">MENÚ DE CANALES</h2>
                  <ul className="lista-canales">
                    {guionCuento.map((cap, index) => (
                      <li key={index}>
                        <button 
                          className={`btn-canal ${subtituloActivo === index ? 'activo' : ''}`}
                          onClick={() => seleccionarCapitulo(index)}
                        >
                          <span className="btn-canal-numero">CH {String(index + 1).padStart(2, '0')}</span>
                          {/* Aquí quitamos el ".split" para que lea el nombre completo */}
                          <span className="btn-canal-texto">{cap.autor}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lomo-central"></div>

        {/* --- PÁGINA DERECHA --- */}
        <div className="hoja-libro hoja-derecha">
          <div className="marco-dorado-css marco-derecho">
            <div className="contenido-texto-libro">
              {pliegoActual === 1 ? (
                <div className="animate-fade layout-col space-between">
                  <h2 className="titulo-seccion">HITOS CLAVE</h2>
                  <ul className="lista-eventos">
                    <li><strong className="evento-titulo">2011: Ley de Víctimas</strong><p className="evento-desc">El Estado reconoce oficialmente a las víctimas. Ya no son solo cifras, tienen nombres y memorias.</p></li>
                    <li><strong className="evento-titulo">2012: Inicio Diálogos</strong><p className="evento-desc">Comienzan conversaciones formales con la guerrilla para buscar una salida política.</p></li>
                    <li><strong className="evento-titulo">2016: Plebiscito</strong><p className="evento-desc">Firma del acuerdo y sorpresiva victoria del "NO" en las urnas, demostrando la fractura social.</p></li>
                    <li className="no-linea"><strong className="evento-titulo">2017: Entrega de Armas</strong><p className="evento-desc">Entrega histórica de fusiles a la misión verificadora de la ONU.</p></li>
                  </ul>
                  <button className="boton-libro" onClick={irAPagina2}>
                    ENCENDER TELEVISOR →
                  </button>
                </div>
              ) : (
                <div className="animate-fade layout-col space-between tv-layout">
                  
                  {/* --- EL TELEVISOR DE NOTICIAS --- */}
                  <div className="tv-retro-carcasa">
                    <div className="tv-pantalla-container">
                      <div className="tv-scanlines"></div>
                      
                      {capituloSeguro.imagen ? (
                        <img src={capituloSeguro.imagen} alt={capituloSeguro.autor} className="tv-imagen-retro" />
                      ) : (
                        <div className="tv-ruido">
                          <h2>NOTIHISTÓRICO</h2>
                          <p>{faseAudio === 'intro' ? 'Iniciando emisión...' : 'Señal en Vivo...'}</p>
                        </div>
                      )}

                      {subtituloActivo > 0 && subtituloActivo < guionCuento.length - 1 && (
                        <div className="tv-overlay-noticias">
                          <div className="tv-badge-vivo">🔴 EN VIVO</div>
                          <div className="tv-banner-inferior">
                            <span className="tv-ticker">ÚLTIMA HORA</span>
                            <span className="tv-titular-texto">{capituloSeguro.autor}</span>
                          </div>
                        </div>
                      )}

                      {faseAudio === 'voz' && textoVisible && (
                        <div className="tv-subtitulos-box">
                          <p className="tv-subtitulos-texto">{textoVisible}</p>
                        </div>
                      )}
                    </div>

                    <div className="tv-controles">
                      <div className="tv-altavoz">
                        <div className="rejilla"></div><div className="rejilla"></div><div className="rejilla"></div>
                      </div>
                      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        <button className="tv-btn-play" onClick={togglePlay}>
                          {isPlaying ? '⏸ PAUSAR' : '▶ REPRODUCIR'}
                        </button>
                        <button className="tv-btn-play btn-restart" onClick={reiniciarTransmision}>
                          🔄 REINICIAR
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* --- FIN DEL TELEVISOR --- */}

                  <button className="boton-libro btn-volver" onClick={() => { setPliegoActual(1); setIsPlaying(false); }}>
                    ← APAGAR TV Y VOLVER
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decada2010;