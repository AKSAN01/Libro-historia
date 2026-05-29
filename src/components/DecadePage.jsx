import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { decades } from '../data/decades';
import { BookLayout } from './BookLayout';
import { Placeholder } from './Placeholder';
import { Decade90s } from './Decade90s'; // ← El componente personalizado del Capítulo 4
import { Decade60s } from './Decade60s';

export const DecadePage = () => {
  const { tag } = useParams();

  // ─── Ruta especial para los 90s ─────────────────────────────────
  if (tag === '90s') {
    return <Decade90s />;
  }
  if (tag === '60s'){
    return <Decade60s/>
  }

  // ─── Ruta genérica para las demás décadas ────────────────────────
  const decadeData = decades.find(d => d.tag === tag);

  if (!decadeData) {
    return <div>Década no encontrada.</div>;
  }

  const LeftPage = () => (
    <div style={styles.pageContent}>
      <Link to="/timeline" style={styles.backLink}>← Volver a la estantería</Link>
      <h3 style={{...styles.subtitle, color: decadeData.accentColor}}>CAPÍTULO {decadeData.index + 1}</h3>
      <h1 style={styles.title}>{decadeData.period}</h1>
      <h2 style={styles.chapterTitle}>{decadeData.title}</h2>
      
      <p style={styles.description}>{decadeData.description}</p>
      
      <div style={styles.factBox}>
        <strong>Dato clave:</strong> {decadeData.fact}
      </div>
    </div>
  );

  const RightPage = () => (
    <div style={styles.pageContent}>
      <Placeholder type="video" height="300px" text="Video documental de la década" />
      
      <div style={styles.cardsContainer}>
        {decadeData.cards.map((card, idx) => (
          <div key={idx} style={{...styles.card, borderLeftColor: card.color}}>
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

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width: '100%', height: '100vh', backgroundColor: 'var(--soft-ink)' }}
    >
      <BookLayout leftPage={<LeftPage />} rightPage={<RightPage />} />
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
    color: 'var(--petrol-blue)',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginBottom: '30px',
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
  chapterTitle: {
    fontFamily: 'var(--font-subtitle)',
    fontSize: '2rem',
    color: 'var(--leather-brown)',
    marginBottom: '30px',
  },
  description: {
    fontFamily: 'var(--font-text)',
    fontSize: '1.1rem',
    color: 'var(--soft-ink)',
    lineHeight: '1.6',
    marginBottom: '30px',
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
  cardsContainer: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderLeft: '4px solid',
    borderRadius: '0 4px 4px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  cardIcon: {
    fontSize: '1.5rem',
    marginRight: '15px',
  },
  cardTitle: {
    fontFamily: 'var(--font-text)',
    fontWeight: 'bold',
    color: 'var(--petrol-blue)',
    marginBottom: '5px',
  },
  cardBody: {
    fontFamily: 'var(--font-text)',
    fontSize: '0.9rem',
    color: 'var(--soft-ink)',
    lineHeight: '1.4',
  }
};
