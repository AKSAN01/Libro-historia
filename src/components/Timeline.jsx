import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { decades } from '../data/decades';

export const Timeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={styles.pageContainer}
    >
      <Link to="/" style={styles.backButton}>
        ← Volver al Índice
      </Link>

      <div style={styles.header}>
        <p style={styles.subtitle}>LÍNEA DEL TIEMPO</p>
        <h1 style={styles.title}>Nuestra historia, década a década</h1>
        <div style={styles.divider}>
          <div style={styles.diamond}></div>
        </div>
        <p style={styles.description}>Explora los capítulos de nuestra historia.</p>
      </div>

      <div className="shelf-scroll-container" style={styles.shelfWrapper}>
        <div style={styles.shelfTrack}>
          {decades.map((decade, index) => (
            <Link to={`/decade/${decade.tag}`} key={decade.tag} style={{ textDecoration: 'none' }}>
              <motion.div
                style={{
                  ...styles.bookSpine,
                  backgroundColor: decade.accentColor || 'var(--petrol-blue)',
                }}
                whileHover={{
                  y: -30, // Se levanta mucho más
                  scale: 1.1,
                  boxShadow: '0 30px 40px -10px rgba(0, 0, 0, 0.7)',
                  filter: 'brightness(1.15)',
                  zIndex: 10
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Textura superior e inferior del lomo */}
                <div style={styles.spineTextureTop} />

                <span style={styles.chapterLabel}>CAPÍTULO</span>
                <span style={styles.chapterNumber}>0{index + 1}</span>
                <div style={styles.spineDiamond} />

                <div style={styles.periodTextContainer}>
                  <span style={styles.periodText}>{decade.period.split('—')[0].trim()}</span>
                  <span style={styles.periodText}>{decade.period.split('—')[1].trim()}</span>
                </div>

                {/* Ilustración de fondo en la base del lomo simulando el mockup */}
                <div style={styles.spineIllustration} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <div style={styles.footerHint}>
        <span style={styles.icon}>📖</span>
        <p>Cada capítulo representa una década de historia,<br />llenos de cambios, desafíos y transformaciones.</p>
      </div>
    </motion.div>
  );
};

const styles = {
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: 'var(--aged-paper)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px 40px', // increased top padding for back button
    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3)', // viñeta oscura
    overflowX: 'hidden',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    width: '100%',
    maxWidth: '800px',
  },
  subtitle: {
    fontFamily: 'var(--font-text)',
    color: 'var(--aged-gold)',
    fontWeight: '600',
    letterSpacing: '0.15em',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  title: {
    fontFamily: 'var(--font-title)',
    color: 'var(--soft-ink)',
    fontSize: '3rem',
    marginBottom: '20px',
  },
  divider: {
    width: '100px',
    height: '1px',
    backgroundColor: 'var(--aged-gold)',
    margin: '0 auto 20px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diamond: {
    width: '6px',
    height: '6px',
    backgroundColor: 'var(--aged-paper)',
    border: '1px solid var(--aged-gold)',
    transform: 'rotate(45deg)',
    position: 'absolute',
  },
  description: {
    fontFamily: 'var(--font-text)',
    color: 'var(--leather-brown)',
    fontSize: '1.1rem',
  },
  backButton: {
    position: 'absolute',
    left: '20px',
    top: '20px',
    textDecoration: 'none',
    color: 'var(--petrol-blue)',
    fontFamily: 'var(--font-text)',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderRadius: '4px',
    transition: 'all 0.2s',
    zIndex: 100,
    backgroundColor: 'var(--aged-paper)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
  },
  shelfWrapper: {
    width: '100%',
    maxWidth: '1200px',
    overflowX: 'auto',
    paddingTop: '60px', // Espacio para que el libro se levante sin cortarse
    paddingBottom: '30px', // Espacio para la sombra de la estantería
    WebkitOverflowScrolling: 'touch',
    display: 'flex', // Inherits justify-content from class
  },
  shelfTrack: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '8px',
    padding: '0 20px',
    minWidth: 'max-content',
    borderBottom: '20px solid var(--leather-brown)', // La estantería
    boxShadow: '0 15px 20px -10px rgba(0,0,0,0.5)',
    margin: '0 auto', // Centers the track inside the wrapper if it fits
  },
  bookSpine: {
    width: '80px',
    minWidth: '80px', // Evita que se aplasten en móvil
    flexShrink: 0,
    height: '450px', // Libros altos
    borderRadius: '3px 3px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 0',
    position: 'relative',
    boxShadow: 'inset 5px 0 10px rgba(0,0,0,0.2), inset -5px 0 10px rgba(0,0,0,0.4), 2px 0 5px rgba(0,0,0,0.5)',
    cursor: 'pointer',
    overflow: 'hidden',
    transformOrigin: 'bottom center',
  },
  spineTextureTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '30px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
  },
  chapterLabel: {
    fontFamily: 'var(--font-text)',
    fontSize: '0.6rem',
    color: 'var(--aged-paper)',
    opacity: 0.8,
    letterSpacing: '0.1em',
    marginBottom: '5px',
    zIndex: 2,
  },
  chapterNumber: {
    fontFamily: 'var(--font-subtitle)',
    fontSize: '2.5rem',
    color: 'var(--aged-paper)',
    fontWeight: 'bold',
    marginBottom: '20px',
    zIndex: 2,
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
  },
  spineDiamond: {
    width: '4px',
    height: '4px',
    backgroundColor: 'var(--aged-gold)',
    transform: 'rotate(45deg)',
    marginBottom: '20px',
    zIndex: 2,
  },
  periodTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
    zIndex: 2,
  },
  periodText: {
    fontFamily: 'var(--font-title)',
    fontSize: '1.2rem',
    color: 'var(--aged-paper)',
    opacity: 0.9,
    writingMode: 'vertical-rl', // Texto vertical
    textOrientation: 'mixed',
    textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
  },
  spineIllustration: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '150px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
    zIndex: 1,
  },
  footerHint: {
    marginTop: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    color: 'var(--leather-brown)',
  },
  icon: {
    fontSize: '2rem',
    opacity: 0.7,
  }
};
