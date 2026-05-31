import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { decades } from '../data/decades';
import { BookLayout } from './BookLayout';
import { Placeholder } from './Placeholder';
import { Decade90s } from './Decade90s'; // ← El componente personalizado del Capítulo 4
import { Decade80s } from './Decade80s';
import { Decade60s } from './Decade60s';
import { Decade70s } from './Decade70s.jsx';

export const DecadePage = () => {
  const { tag } = useParams();
  // Buscamos la década, si no existe el tag, devolvemos null
  const decadeData = decades.find(d => d.tag === tag);

  // Pantalla de error si la década no existe
  if (!decadeData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#fff' }}>
        <div>
          <h2>Década no encontrada.</h2>
          <Link to="/" style={{ color: '#d6bc8e' }}>Volver a la estantería</Link>
        </div>
      </div>
    );
  }

  if (tag === '60s') return <Decade60s />;
  if (tag === '70s') return <Decade70s />;
  if (tag === '80s') return <Decade80s />;
  if (tag === '90s') return <Decade90s />;

  // ─── Ruta genérica para las demás décadas ────────────────────────
  const [page, setPage] = useState(1);

  if (!decadeData) return <div>Década no encontrada.</div>;

  const getText = (a, b) => {
    const full = (a || '') + ' ' + (b || '');
    const mid = Math.ceil(full.length / 2);
    return [full.slice(0, mid), full.slice(mid)];
  };

  const [col1, col2] = page === 1
    ? getText(decadeData.intro1, decadeData.intro2)
    : getText(decadeData.intro3, decadeData.intro4);

  const LeftPage = () => (
    <div style={styles.pageContent}>
      <Link to="/" style={styles.backLink}>← Volver a la estantería</Link>
      
      {/* Añadimos un fallback al índice por si acaso no está definido en el objeto */}
      <h3 style={{...styles.subtitle, color: decadeData.accentColor || '#d6bc8e'}}>
        CAPÍTULO {decadeData.index !== undefined ? decadeData.index + 1 : '...'}
      </h3>
      
      <h1 style={styles.title}>{decadeData.period}</h1>
      <h2 style={styles.chapterTitle}>{decadeData.title}</h2>
      
      <p style={styles.description}>{decadeData.description}</p>
      
      {decadeData.fact && (
        <div style={styles.factBox}>
          <strong>Dato clave:</strong> {decadeData.fact}
        </div>
      )}
    </div>
  );

  const RightPage = () => (
    <div style={styles.pageContent}>
      <Placeholder type="video" height="300px" text="Video documental de la década" />
      
      <div style={styles.cardsContainer}>
        {/* Añadimos un check para asegurarnos que 'cards' existe */}
        {decadeData.cards && decadeData.cards.map((card, idx) => (
          <div key={idx} style={{...styles.card, borderLeftColor: card.color || '#d6bc8e'}}>
            <span style={styles.cardIcon}>{card.icon}</span>
            <div>
              <h4 style={styles.cardTitle}>{card.title}</h4>
              <p style={styles.cardBody}>{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const getAnimation = (tag) => {
    switch (tag) {
      case '50s': return { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" } };
      case '00s': return { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, ease: "easeOut" } };
      case '10s': return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 2, ease: "easeIn" } }; // Simulando una aparición lenta
      case '20s': return { 
        initial: { opacity: 0, scale: 1.05, filter: 'hue-rotate(90deg)' }, 
        animate: { opacity: 1, scale: 1, filter: 'hue-rotate(0deg)' }, 
        transition: { duration: 0.6, type: 'spring' } 
      };
      default: return { initial: { opacity: 0, filter: 'blur(10px)' }, animate: { opacity: 1, filter: 'blur(0px)' }, transition: { duration: 0.8, ease: "easeOut" } };
    }
  };
  
  const anim = getAnimation(tag);

  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
      transition={anim.transition}
      className="library-bg"
      style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <div className={`theme-${tag}`} style={{ flex: 1, display: 'flex' }}>
        <BookLayout leftPage={<LeftPage />} rightPage={<RightPage />} />
      </div>
    </motion.div>
  );
};

const styles = {
  pageContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  backLink: {
    fontFamily: 'var(--font-text)',
    color: 'var(--soft-ink)',
    opacity: 0.8,
    textDecoration: 'none',
    fontWeight: 'bold',
    marginBottom: '20px',
    display: 'inline-block',
  },
  subtitle: {
    fontFamily: 'var(--font-text)',
    letterSpacing: '0.15em',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  title: {
    fontFamily: 'var(--font-title)',
    fontSize: '3.5rem',
    color: 'var(--soft-ink)',
    lineHeight: '1',
    marginBottom: '10px',
  },
  capitalRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  capitalLetter: {
    fontFamily: 'var(--font-title)',
    fontSize: '5rem',
    lineHeight: '1',
    color: 'var(--aged-gold)',
    border: '2px solid var(--aged-gold)',
    padding: '0 10px',
  },
  chapterTitle: {
    fontFamily: 'var(--font-subtitle)',
    fontSize: '2rem',
    color: 'var(--leather-brown)',
  },
  columnsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    flex: 1,
    overflow: 'hidden',
  },
  column: {
    fontFamily: 'var(--font-text)',
    fontSize: '0.9rem',
    color: 'var(--soft-ink)',
    lineHeight: '1.6',
    overflow: 'hidden',
    textAlign: 'justify',
  },
  audio: {
    width: '100%',
    marginTop: '15px',
  },
  pageBtn: {
    alignSelf: 'flex-end',
    background: 'none',
    border: '1px solid var(--aged-gold)',
    color: 'var(--aged-gold)',
    fontFamily: 'var(--font-text)',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '10px',
  },
  factBox: {
    backgroundColor: 'rgba(214, 194, 168, 0.3)',
    padding: '20px',
    borderLeft: '4px solid var(--aged-gold)',
    fontFamily: 'var(--font-text)',
    color: 'var(--leather-brown)',
    fontStyle: 'italic',
    marginTop: 'auto',
  },
  imagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flex: 1,
  },
};