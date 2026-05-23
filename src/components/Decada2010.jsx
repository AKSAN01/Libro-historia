import React, { useState, useEffect, useRef } from 'react';
import './Libro.css'; 

const Decada2010 = () => {
  const [pliegoActual, setPliegoActual] = useState(1);
  const [subtituloActivo, setSubtituloActivo] = useState(-1);
  const audioRef = useRef(new Audio());

  const guionCuento = [
    { autor: "Presentador", texto: "Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, y abrimos esta emisión especial en una nueva década marcada por una pregunta que parece perseguir al país entero:¿Y ahora qué? Después de más de medio siglo de conflicto armado, Colombia intenta encontrar una salida mientras crecen las discusiones sobre memoria, justicia y paz. Porque la guerra seguía presente… pero cada vez era más difícil distinguir dónde terminaba el conflicto y dónde comenzaba la política." },
    { autor: "2011: El Archivo de los Nadie", texto: "“En noticias nacionales, el Estado colombiano da un paso histórico. Durante años, el país habló únicamente de cifras: número de muertos, desaparecidos, secuestros y masacres. Pero en 2011 comienza un cambio importante. Con la Ley de Víctimas y Restitución de Tierras, el Estado empieza a reconocer oficialmente a las víctimas del conflicto armado. Ya no eran solamente estadísticas. Ahora tenían nombres, historias, familias y memorias. Muchos colombianos sintieron que, por primera vez, el país empezaba a mirar de frente a todas aquellas personas que durante décadas habían permanecido invisibles.” " },
    { autor: "2012: Hablar con el Enemigo", texto: "“Atención, Colombia. El gobierno del presidente Juan Manuel Santos confirma oficialmente el inicio de diálogos de paz con las FARC en La Habana, Cuba. La noticia sacude al país entero. Después de más de cincuenta años de guerra, el gobierno y la guerrilla más antigua de América Latina se sientan a negociar. Mientras algunos ciudadanos celebran la posibilidad del fin del conflicto, otros expresan indignación y desconfianza. Las opiniones comienzan a dividirse. Para unos, negociar significaba esperanza. Para otros, significaba impunidad. Y poco a poco, una sola palabra empezó a dominar todas las conversaciones del país: la paz.”" },
    { autor: "2016: El Bolígrafo de Titanio", texto: "“Después de varios años de negociación, llega finalmente uno de los momentos más simbólicos de la historia reciente de Colombia. Gobierno y FARC firman oficialmente el acuerdo de paz. Y hasta el bolígrafo utilizado en la ceremonia tenía un mensaje. Había sido fabricado con el casquillo de una bala. La idea era clara: lo que antes servía para destruir… ahora serviría para escribir un nuevo capítulo para el país. Para muchos colombianos, aquel momento representó esperanza, alivio y la posibilidad de cerrar una etapa de violencia. Pero para otros, persistían las dudas sobre el verdadero alcance del acuerdo.”" },
    { autor: "2016: El Veredicto", texto: "“Y justo cuando parecía que todo estaba decidido… el país entero fue llamado a votar. Colombia debía aprobar o rechazar el acuerdo de paz mediante un plebiscito nacional. Millones de personas siguieron los resultados desde televisores, radios, celulares y redes sociales. La tensión era total. Y entonces llegó el resultado inesperado. Ganó el NO. Pero por una diferencia mínima. Menos del uno por ciento. Literalmente, Colombia quedó dividida en dos. Las discusiones llegaron a las familias, a las universidades, a los grupos de amigos y a las redes sociales. La polarización creció rápidamente. Era como si la guerra hubiera cambiado de escenario: ya no solamente se peleaba con armas… ahora también se peleaba con opiniones, discursos y versiones distintas del país.”" },
    { autor: "2017: La Gran Entrega", texto: "“En un hecho que durante décadas pareció imposible, las FARC comienzan oficialmente la entrega de armas ante organismos internacionales. Miles de fusiles son almacenados en contenedores supervisados por la ONU. Las imágenes recorren el mundo entero. Muchos colombianos creen estar viendo el final de una guerra histórica. Sin embargo, especialistas advierten que el panorama sigue siendo complejo. Porque cuando un grupo armado abandona ciertos territorios… otros actores ilegales intentan ocupar ese espacio. La paz apenas comenzaba, y el país todavía enfrentaba enormes desafíos.” " },
    { autor: "2019: El Retorno", texto: "“Y cuando muchos pensaban que el conflicto comenzaba a cerrarse… aparece un nuevo video que vuelve a generar preocupación nacional. Antiguos comandantes de las FARC reaparecen armados y anuncian su regreso a la lucha ilegal. Las imágenes producen temor e incertidumbre en distintos sectores del país. Para muchos colombianos, la sensación era extraña y dolorosa: como si la historia estuviera intentando repetirse una vez más. El miedo regresaba lentamente. Y la idea de un final definitivo para el conflicto parecía alejarse nuevamente.”" },
    { autor: "Cierre", texto: "“Porque el conflicto colombiano nunca fue solamente una guerra de balas. También fue una disputa por la memoria, por la verdad y por la manera de entender la historia. Y mientras esas heridas sigan abiertas… esta historia todavía no termina. Hasta aquí esta emisión especial de Notihistórico, el noticiero de la historia. Muy buenas noches, Colombia.”" }
  ];

  // Lógica de sincronización perfecta (onended)
  useEffect(() => {
    if (pliegoActual === 2 && subtituloActivo >= 0 && subtituloActivo < guionCuento.length) {
      audioRef.current.pause();
      audioRef.current.src = `/audios 2010s/${subtituloActivo + 1}.mp3`;
      audioRef.current.play().catch(e => console.log("Espera interacción", e));

      audioRef.current.onended = () => {
        if (subtituloActivo < guionCuento.length - 1) {
          setSubtituloActivo(prev => prev + 1);
        } else {
          setSubtituloActivo(-1); // Fin de la narración
        }
      };
    } else {
      audioRef.current.pause();
      audioRef.current.onended = null;
    }
    
    return () => { audioRef.current.onended = null; };
  }, [subtituloActivo, pliegoActual]);

  useEffect(() => {
    if (pliegoActual === 2) {
      setSubtituloActivo(0);
    } else {
      setSubtituloActivo(-1);
    }
  }, [pliegoActual]);

  return (
    <div className="fondo-escritorio">
      <div className="libro-abierto">
        
        <div className="marcador-ribbon">
          <span style={{ color: '#d6bc8e', display: 'block', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>2010</span>
        </div>

        {/* --- MITAD IZQUIERDA --- */}
        <div className="pagina pagina-izquierda">
          <div className="margen-interno">
            
            {pliegoActual === 1 ? (
              <div className="contenido-pagina animate-fade">
                <h1 style={{ fontFamily: 'serif', fontSize: '2.5rem', color: '#1a2f4c' }}>
                  Década del 2010: El Juego de Espejos
                </h1>
                <h3 style={{ color: '#8b7355', borderBottom: '1px solid #8b7355', paddingBottom: '10px' }}>
                  Un Cambio de Rumbo
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginTop: '20px' }}>
                  Colombia entra a la década de 2010 cargando décadas de guerra. Sin embargo, en este periodo el conflicto ya no se veía igual.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                  Las discusiones se trasladaron de la selva a los escenarios políticos y digitales: el Congreso, las redes sociales y las mesas familiares se convirtieron en los nuevos campos de batalla por la verdad y la memoria.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                  Mientras unos exigían justicia, otros hablaban de reconciliación. El país comenzó a dividirse no solo por las armas, sino por la interpretación de su propia historia.
                </p>
              </div>
            ) : (
              /* --- PÁGINA 2: NARRACIÓN ESTILO SLIDESHOW --- */
              <div className="contenido-pagina" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontFamily: 'serif', color: '#1a2f4c', marginBottom: '20px' }}>
                  Crónica de una Nación
                </h2>
                
                <div style={{ minHeight: '350px', display: 'flex', alignItems: 'center' }}>
                  {subtituloActivo !== -1 ? (
                    <div key={subtituloActivo} className="animate-fade" style={{ padding: '20px', borderLeft: '5px solid #d6bc8e', backgroundColor: 'rgba(26, 47, 76, 0.05)', borderRadius: '4px' }}>
                      <strong style={{ color: '#d6bc8e', display: 'block', marginBottom: '10px', fontSize: '1.2rem' }}>
                        {guionCuento[subtituloActivo].autor}
                      </strong>
                      <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#1a2f4c' }}>
                        {guionCuento[subtituloActivo].texto}
                      </p>
                    </div>
                  ) : (
                    <p style={{ fontStyle: 'italic', color: '#aaa' }}>La emisión ha finalizado.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pliegue-central"></div>

        {/* --- MITAD DERECHA --- */}
        <div className="pagina pagina-derecha">
          <div className="margen-interno">
            
            {pliegoActual === 1 ? (
              <div className="contenido-pagina animate-fade" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h2 style={{ fontFamily: 'serif', color: '#1a2f4c', textAlign: 'center', marginBottom: '30px' }}>
                  Hitos Clave
                </h2>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <li style={{ borderBottom: '1px dashed #d6bc8e', paddingBottom: '15px' }}>
                    <strong style={{ fontSize: '1.2rem', color: '#1a2f4c' }}>2011 - Ley de Víctimas</strong>
                    <p style={{ margin: '5px 0 0 0', color: '#555' }}>El Estado reconoce oficialmente a las víctimas. Ya no son solo cifras, tienen nombres y memorias.</p>
                  </li>
                  <li style={{ borderBottom: '1px dashed #d6bc8e', paddingBottom: '15px' }}>
                    <strong style={{ fontSize: '1.2rem', color: '#1a2f4c' }}>2012 - Diálogos de La Habana</strong>
                    <p style={{ margin: '5px 0 0 0', color: '#555' }}>Comienzan conversaciones formales con la guerrilla para buscar una salida política.</p>
                  </li>
                  <li style={{ borderBottom: '1px dashed #d6bc8e', paddingBottom: '15px' }}>
                    <strong style={{ fontSize: '1.2rem', color: '#1a2f4c' }}>2016 - Acuerdo y Plebiscito</strong>
                    <p style={{ margin: '5px 0 0 0', color: '#555' }}>Firma del acuerdo y sorpresiva victoria del "NO" en las urnas, demostrando la fractura social.</p>
                  </li>
                  <li style={{ borderBottom: '1px dashed #d6bc8e', paddingBottom: '15px' }}>
                    <strong style={{ fontSize: '1.2rem', color: '#1a2f4c' }}>2017 - Dejación de Armas</strong>
                    <p style={{ margin: '5px 0 0 0', color: '#555' }}>Entrega histórica de fusiles a la misión verificadora de la ONU.</p>
                  </li>
                </ul>

                <button 
                  onClick={() => setPliegoActual(2)}
                  style={{ alignSelf: 'flex-end', padding: '10px 20px', backgroundColor: '#1a2f4c', color: '#f4ecd8', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'serif', fontSize: '1.1rem' }}
                >
                  Siguiente Página →
                </button>
              </div>
            ) : (
              <div className="contenido-pagina animate-fade" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '100%', height: '400px', border: '3px dashed #d6bc8e', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#8b7355', backgroundColor: 'rgba(214, 188, 142, 0.1)', borderRadius: '8px' }}>
                    <p>Espacio libre para imágenes ilustrativas</p>
                  </div>
                </div>

                <button 
                  onClick={() => setPliegoActual(1)}
                  style={{ alignSelf: 'flex-start', padding: '10px 20px', backgroundColor: 'transparent', color: '#1a2f4c', border: '1px solid #1a2f4c', borderRadius: '4px', cursor: 'pointer', fontFamily: 'serif', fontSize: '1.1rem' }}
                >
                  ← Volver
                </button>
              </div>
            )}

          </div>
        </div>

        <div className="barra-inferior"></div>
      </div>
    </div>
  );
};

export default Decada2010;