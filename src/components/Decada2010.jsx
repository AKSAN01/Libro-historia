import React, { useState, useEffect, useRef } from 'react';
import './Libro.css'; 

const Decada2010 = () => {
  const [pliegoActual, setPliegoActual] = useState(1);
  const [subtituloActivo, setSubtituloActivo] = useState(-1);
  const [introReproducida, setIntroReproducida] = useState(false);
  
  const audioRef = useRef(new Audio());
  const sfxRef = useRef(new Audio());

  // Rutas de imágenes corregidas con el espacio en lugar del guion bajo
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

  useEffect(() => {
    if (pliegoActual === 2) {
      if (!introReproducida) {
        sfxRef.current.pause();
        audioRef.current.pause();
        sfxRef.current.src = "/SFX10s/13.mp3"; 
        sfxRef.current.play().catch(e => console.log("Intro bloqueada", e));
        sfxRef.current.onended = () => {
          setIntroReproducida(true);
          setSubtituloActivo(0); 
        };
      } 
      else if (subtituloActivo >= 0 && subtituloActivo < guionCuento.length) {
        sfxRef.current.pause();
        audioRef.current.pause();

        sfxRef.current.src = guionCuento[subtituloActivo].sfx;
        sfxRef.current.play().catch(e => console.log("SFX bloqueado", e));

        sfxRef.current.onended = () => {
          audioRef.current.src = `/audios 2010s/${subtituloActivo + 1}.mp3`;
          audioRef.current.play().catch(e => console.log("Voz bloqueada", e));
          
          audioRef.current.onended = () => {
            if (subtituloActivo < guionCuento.length - 1) {
              setSubtituloActivo(prev => prev + 1);
            } else {
              setSubtituloActivo(-1); 
            }
          };
        };
      }
    } else {
      setIntroReproducida(false);
      setSubtituloActivo(-1);
      sfxRef.current.pause();
      audioRef.current.pause();
    }
    
    return () => { 
      sfxRef.current.pause();
      audioRef.current.pause();
    };
  }, [subtituloActivo, pliegoActual, introReproducida]);

  useEffect(() => {
    if (pliegoActual !== 2) {
      setSubtituloActivo(-1);
    }
  }, [pliegoActual]);

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
                <div className="animate-fade">
                  <h1 className="titulo-principal">DÉCADA DEL 2010</h1>
                  <h2 className="subtitulo-principal">El Juego de Espejos</h2>
                  <h3 className="tema-principal">Sinopsis</h3>
                  <p className="parrafo-estilo">
                    Colombia entra a la década de 2010 cargando décadas de guerra, bombas, secuestros y miedo. Pero esta vez el conflicto ya no se veía igual.
                  </p>
                  <p className="parrafo-estilo">
                    Ahora las discusiones no solo estaban en la selva o en los campos de combate… también aparecían en el Congreso, en las redes sociales, en las mesas familiares y en los titulares de televisión.
                  </p>
                  <p className="parrafo-estilo">
                    Mientras unos exigían justicia y castigo, otros empezaban a hablar de reconciliación y paz. Y poco a poco, el país comenzó a dividirse no solo por las armas… sino también por la manera de entender la verdad.
                  </p>
                </div>
              ) : (
                <div className="animate-fade layout-col layout-center">
                  <h2 className="titulo-seccion">Crónica de una Nación</h2>
                  <div className="caja-narracion">
                    {subtituloActivo !== -1 ? (
                      <div key={subtituloActivo} className="burbuja-texto animate-fade">
                        <strong className="narrador-nombre">
                          {guionCuento[subtituloActivo].autor}
                        </strong>
                        <p className="narrador-texto">
                          {guionCuento[subtituloActivo].texto}
                        </p>
                      </div>
                    ) : (
                      <p className="emision-fin">La emisión ha finalizado.</p>
                    )}
                  </div>
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
                    <li>
                      <strong className="evento-titulo">2011: Ley de Víctimas</strong>
                      <p className="evento-desc">El Estado reconoce oficialmente a las víctimas. Ya no son solo cifras, tienen nombres y memorias.</p>
                    </li>
                    <li>
                      <strong className="evento-titulo">2012: Inicio Diálogos</strong>
                      <p className="evento-desc">Comienzan conversaciones formales con la guerrilla para buscar una salida política.</p>
                    </li>
                    <li>
                      <strong className="evento-titulo">2016: Plebiscito (El Veredicto)</strong>
                      <p className="evento-desc">Firma del acuerdo y sorpresiva victoria del "NO" en las urnas, demostrando la fractura social.</p>
                    </li>
                    <li className="no-linea">
                      <strong className="evento-titulo">2017: Entrega de Armas</strong>
                      <p className="evento-desc">Entrega histórica de fusiles a la misión verificadora de la ONU.</p>
                    </li>
                  </ul>
                  <button className="boton-libro" onClick={() => setPliegoActual(2)}>
                    SIGUIENTE PÁGINA →
                  </button>
                </div>
              ) : (
                <div className="animate-fade layout-col space-between">
                  
                  {/* --- EL TELEVISOR DE NOTICIAS --- */}
                  <div className="tv-contenedor">
                    <div className="tv-marco">
                      <div className="tv-pantalla">
                        
                        {/* Control de la imagen a mostrar */}
                        {subtituloActivo !== -1 && guionCuento[subtituloActivo].imagen ? (
                          <img 
                            src={guionCuento[subtituloActivo].imagen} 
                            alt={guionCuento[subtituloActivo].autor} 
                            className="tv-imagen animate-fade" 
                          />
                        ) : (
                          <div className="tv-ruido">
                            <h2>NOTIHISTÓRICO</h2>
                            <p>Señal Interrumpida...</p>
                          </div>
                        )}

                        {/* Overlay estilo canal de noticias */}
                        {subtituloActivo > 0 && subtituloActivo < guionCuento.length - 1 && (
                          <div className="tv-overlay">
                            <div className="tv-badge-vivo">🔴 EN VIVO</div>
                            <div className="tv-banner-inferior">
                              <span className="tv-ticker">ÚLTIMA HORA</span>
                              <span className="tv-titular-texto">{guionCuento[subtituloActivo].autor}</span>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                  {/* --- FIN DEL TELEVISOR --- */}

                  <button className="boton-libro btn-volver" onClick={() => setPliegoActual(1)}>
                    ← VOLVER
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