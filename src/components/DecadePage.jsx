import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { decades } from '../data/decades';
import { BookLayout } from './BookLayout';
import { Placeholder } from './Placeholder';

export const DecadePage = () => {
  const { tag } = useParams();
  const [page, setPage] = useState(1);

  // Buscamos la década, si no existe el tag, devolvemos null
  const decadeData = decades.find(d => d.tag === tag);

  // Pantalla de error si la década no existe
  if (!decadeData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100dvh', color: '#fff', backgroundColor: '#2b2b2b' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Década no encontrada.</h2>
          <Link to="/timeline" style={{ color: '#d6bc8e', textDecoration: 'none', fontSize: '1.2rem', marginTop: '10px', display: 'inline-block' }}>
            ← Volver a la estantería
          </Link>
        </div>
      </div>
    );
  }

  // ─── PÁGINA IZQUIERDA ────────────────────────
  const LeftPage = () => (
    <div className="contenido-texto-libro marco-dorado-css marco-izquierdo">
      <div className="layout-col space-between">
        <div>
          <h3 className="subtitulo-principal" style={{ color: decadeData.accentColor || '#a38c62' }}>
            CAPÍTULO {decadeData.index !== undefined ? decadeData.index + 1 : '...'}
          </h3>
          <h1 className="titulo-principal">{decadeData.period}</h1>
          <h2 className="tema-principal">{decadeData.title}</h2>
          
          <div className="contenedor-sinopsis">
            <p className="parrafo-estilo">{decadeData.description}</p>
            
            {decadeData.fact && (
              <div className="parrafo-estilo" style={{ 
                fontStyle: 'italic', 
                color: 'var(--leather-brown, #5d4a31)', 
                borderLeft: '3px solid #a38c62', 
                paddingLeft: '10px', 
                marginTop: '15px',
                backgroundColor: 'rgba(0,0,0,0.03)'
              }}>
                <strong>Dato clave:</strong> {decadeData.fact}
              </div>
            )}
          </div>
        </div>

        {/* Botón hacia la librería */}
        <Link to="/timeline" style={{ textDecoration: 'none', width: '100%' }}>
          <button className="boton-libro btn-libreria">
            📚 IR A LA LIBRERÍA
          </button>
        </Link>
      </div>
    </div>
  );

  // ─── PÁGINA DERECHA ────────────────────────
  const RightPage = () => (
    <div className="contenido-texto-libro marco-dorado-css marco-derecho">
      <div className="tv-layout">
        <h3 className="titulo-seccion">Archivo Visual</h3>
        
        {/* Televisor Retro */}
        <div className="tv-retro-carcasa">
          <div className="tv-pantalla-container">
            <div className="tv-scanlines" />
            <Placeholder type="video" height="100%" text="Video documental de la década" />
          </div>
          
          <div className="tv-controles">
            <div className="tv-altavoz">
              <div className="rejilla" />
              <div className="rejilla" />
              <div className="rejilla" />
            </div>
            <button className="tv-btn-play">CH ANCHOR</button>
          </div>
        </div>

        {/* Tarjetas informativas (Eventos clave) */}
        <div style={{ overflowY: 'auto', flex: 1, paddingRight: '5px' }}>
          {decadeData.cards && decadeData.cards.map((card, idx) => (
            <div key={idx} style={{ 
              padding: '10px', 
              borderLeft: `3px solid ${card.color || '#a38c62'}`, 
              marginBottom: '10px',
              backgroundColor: 'rgba(0,0,0,0.03)'
            }}>
              <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>{card.icon}</span>
              <strong style={{ fontSize: '0.95rem', color: '#3b2c17' }}>{card.title}: </strong>
              <span style={{ fontSize: '0.9rem', color: '#2b2b2b' }}>{card.body}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fondo-escritorio"
    >
      <BookLayout leftPage={<LeftPage />} rightPage={<RightPage />} />
    </motion.div>
  );
};