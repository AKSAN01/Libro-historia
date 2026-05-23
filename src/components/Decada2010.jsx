import React, { useState, useEffect, useRef } from 'react';
import './Libro.css'; // Asumiendo que usas el CSS del esqueleto que creamos

const guionCuento = [
  { autor: "Presentador", texto: "¿Y ahora qué? Después de medio siglo, Colombia intenta encontrar una salida mientras crecen las discusiones sobre memoria y justicia." },
  { autor: "Archivo de los Nadie", texto: "En 2011, con la Ley de Víctimas, el país mira de frente a quienes fueron invisibles durante décadas. Ya no son estadísticas." },
  { autor: "Hablar con el Enemigo", texto: "Atención: El gobierno inicia diálogos de paz. Para unos, negociar es esperanza; para otros, significa impunidad." },
  { autor: "El Veredicto", texto: "Inesperado: Gana el NO por menos del 1%. Colombia queda dividida en dos. La guerra cambió de escenario: ahora es de opiniones." },
  { autor: "La Gran Entrega", texto: "Miles de fusiles son almacenados ante la ONU. Parecía el final, pero nuevos desafíos territoriales emergen." }
];

const Decada2010 = () => {
  // Estado para simular "pasar la página" (1 = Primeras dos páginas, 2 = Segundas dos páginas)
  const [pliegoActual, setPliegoActual] = useState(1);
  
  // Estado para controlar qué subtítulo se está mostrando en la animación
  const [subtituloActivo, setSubtituloActivo] = useState(-1);
  const intervaloRef = useRef(null);

  // Efecto para animar los subtítulos cuando se llega a la página 3
  useEffect(() => {
    if (pliegoActual === 2) {
      setSubtituloActivo(0);
      intervaloRef.current = window.setInterval(() => {
        setSubtituloActivo((prev) => {
          if (prev < guionCuento.length - 1) {
            return prev + 1;
          }
          if (intervaloRef.current) {
            window.clearInterval(intervaloRef.current);
            intervaloRef.current = null;
          }
          return prev;
        });
      }, 5000); // Cambia el subtítulo cada 5 segundos (ajusta este tiempo según necesites)
    } else {
      setSubtituloActivo(-1);
    }

    return () => {
      if (intervaloRef.current) {
        window.clearInterval(intervaloRef.current);
        intervaloRef.current = null;
      }
    };
  }, [pliegoActual]);

  return (
    <div className="fondo-escritorio">
      <div className="libro-abierto">
        
        {/* Marcador superior */}
        <div className="marcador-ribbon">
          <span style={{ color: '#d6bc8e', display: 'block', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>2010</span>
        </div>

        {/* --- MITAD IZQUIERDA --- */}
        <div className="pagina pagina-izquierda">
          <div className="margen-interno">
            
            {pliegoActual === 1 ? (
              /* PÁGINA 1: INTRODUCCIÓN */
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
              /* PÁGINA 3: ANIMACIÓN DEL CUENTO (SUBTÍTULOS) */
              <div className="contenido-pagina animate-fade">
                <h2 style={{ fontFamily: 'serif', color: '#1a2f4c', marginBottom: '30px' }}>
                  Crónica de una Nación
                </h2>
                <div className="contenedor-subtitulos" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {guionCuento.map((linea, index) => (
                    <div 
                      key={index}
                      style={{
                        padding: '15px',
                        backgroundColor: index === subtituloActivo ? 'rgba(26, 47, 76, 0.9)' : 'transparent',
                        color: index === subtituloActivo ? '#fff' : 'rgba(51, 51, 51, 0.3)',
                        borderLeft: index === subtituloActivo ? '5px solid #d6bc8e' : '5px solid transparent',
                        borderRadius: '4px',
                        transition: 'all 0.5s ease',
                        transform: index === subtituloActivo ? 'scale(1.02)' : 'scale(1)',
                        opacity: index <= subtituloActivo ? 1 : 0 // Oculta los que no han pasado
                      }}
                    >
                      <strong style={{ color: index === subtituloActivo ? '#d6bc8e' : 'inherit', display: 'block', marginBottom: '5px' }}>
                        {linea.autor}
                      </strong>
                      <span style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>{linea.texto}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* --- PLIEGUE CENTRAL --- */}
        <div className="pliegue-central"></div>

        {/* --- MITAD DERECHA --- */}
        <div className="pagina pagina-derecha">
          <div className="margen-interno">
            
            {pliegoActual === 1 ? (
              /* PÁGINA 2: HITOS QUE MARCARON LA DÉCADA */
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

                {/* Botón para pasar a la página 3 y 4 */}
                <button 
                  onClick={() => setPliegoActual(2)}
                  style={{ alignSelf: 'flex-end', padding: '10px 20px', backgroundColor: '#1a2f4c', color: '#f4ecd8', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'serif', fontSize: '1.1rem' }}
                >
                  Siguiente Página →
                </button>
              </div>
            ) : (
              /* PÁGINA 4: ESPACIO LIBRE PARA IMÁGENES */
              <div className="contenido-pagina animate-fade" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  {/* AQUÍ TUS COMPAÑEROS PUEDEN INSERTAR SUS IMÁGENES <img src="..." /> */}
                  <div style={{ width: '100%', height: '400px', border: '3px dashed #d6bc8e', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#8b7355', backgroundColor: 'rgba(214, 188, 142, 0.1)', borderRadius: '8px' }}>
                    <p>Espacio libre para imágenes ilustrativas</p>
                  </div>
                </div>

                {/* Botón para regresar a la página 1 y 2 */}
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