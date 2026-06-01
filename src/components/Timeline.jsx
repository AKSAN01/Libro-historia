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
      <div style={styles.ambientLight} />

      <div style={styles.header}>
        <p style={styles.subtitle}>PROYECTO INTERACTIVO</p>
        <h1 style={styles.title}>Nuestra historia, década a década</h1>
        <div style={styles.divider}>
          <div style={styles.diamond}></div>
        </div>
        <p style={styles.description}>Bienvenido. Elige un capítulo en la estantería para comenzar a explorar la historia.</p>
      </div>

      <div className="shelf-scroll-container" style={styles.shelfWrapper}>
        <div style={styles.shelfTrack}>
          {/* Fondo de madera detrás de los libros */}
          <div style={styles.shelfBackPanel} />
          
          {decades.map((decade, index) => (
            <Link to={`/decade/${decade.tag}`} key={decade.tag} style={{ textDecoration: 'none', zIndex: 5 }}>
              <motion.div
                style={{
                  ...styles.bookSpine,
                  backgroundColor: decade.accentColor || 'var(--petrol-blue)',
                }}
                whileHover={{
                  y: -30, 
                  scale: 1.05,
                  boxShadow: '0 30px 40px -10px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 180, 80, 0.3)',
                  filter: 'brightness(1.15)',
                  zIndex: 10
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div style={styles.spine3DShadow} />
                <div style={styles.spineTextureTop} />

                <span style={styles.chapterLabel}>CAPÍTULO</span>
                <span style={styles.chapterNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div style={styles.spineDiamond} />

                <div style={styles.periodTextContainer}>
                  {decade.tag === 'about' ? (
                    <>
                      <span style={styles.periodText}>EQUIPO</span>
                      <span style={styles.periodText}>020-81</span>
                    </>
                  ) : (
                    <>
                      <span style={styles.periodText}>{decade.period.split('—')[0].trim()}</span>
                      <span style={styles.periodText}>{decade.period.split('—')[1].trim()}</span>
                    </>
                  )}
                </div>

                <div style={styles.spineIllustration} />
              </motion.div>
            </Link>
          ))}

          {/* Tabla principal de la estantería (Mueble rústico) */}
          <div style={styles.shelfBase}>
            <div style={styles.shelfLip} />
            {/* Soportes de madera tallada debajo de la repisa */}
            <div style={{ ...styles.shelfSupport, left: '60px' }} />
            <div style={{ ...styles.shelfSupport, right: '60px' }} />
          </div>
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
    background: 'linear-gradient(135deg, #1a0f07 0%, #0a0402 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 20px 40px',
    boxShadow: 'inset 0 0 200px rgba(0,0,0,0.95)', 
    overflowX: 'hidden',
  },
  ambientLight: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '900px',
    background: 'radial-gradient(ellipse, rgba(255, 160, 60, 0.12) 0%, transparent 65%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    width: '100%',
    maxWidth: '800px',
    zIndex: 1,
  },
  subtitle: {
    fontFamily: 'var(--font-text)',
    color: '#d4af37',
    fontWeight: '700',
    letterSpacing: '0.25em',
    fontSize: '0.85rem',
    marginBottom: '15px',
    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
  },
  title: {
    fontFamily: 'var(--font-title)',
    color: '#f4eae1',
    fontSize: '3.6rem',
    marginBottom: '20px',
    textShadow: '0 4px 15px rgba(0,0,0,0.9)',
  },
  divider: {
    width: '150px',
    height: '2px',
    backgroundColor: 'rgba(212, 175, 55, 0.4)',
    margin: '0 auto 20px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diamond: {
    width: '10px',
    height: '10px',
    backgroundColor: '#1a0f07',
    border: '2px solid #d4af37',
    transform: 'rotate(45deg)',
    position: 'absolute',
  },
  description: {
    fontFamily: 'var(--font-text)',
    color: '#c7b39b',
    fontSize: '1.15rem',
    lineHeight: '1.6',
    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
  },
  shelfWrapper: {
    width: '100%',
    maxWidth: '1400px',
    overflowX: 'auto',
    paddingTop: '60px', 
    paddingBottom: '120px', 
    WebkitOverflowScrolling: 'touch',
    display: 'flex',
    zIndex: 1,
  },
  shelfTrack: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '18px', 
    padding: '80px 100px 50px 100px', // 80px de padding superior para dar espacio al techo de la estantería
    minWidth: 'max-content',
    position: 'relative',
    margin: '0 auto', 
  },
  shelfBackPanel: {
    position: 'absolute',
    bottom: '50px', // Empieza justo donde termina la tabla
    left: '20px',
    right: '20px',
    top: '0px', // Sube por encima de los libros
    background: '#120703',
    // Textura de paneles de madera rústica verticales
    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(0,0,0,0.3) 100px, rgba(0,0,0,0.3) 102px), linear-gradient(to bottom, #2b170b 0%, #0d0401 100%)',
    border: '8px solid #0d0401',
    borderTop: '25px solid #1c0d05', // El 'techo' de la estantería
    borderBottom: 'none',
    borderRadius: '6px 6px 0 0',
    boxShadow: 'inset 0 40px 80px rgba(0,0,0,0.99), inset 0 0 20px rgba(0,0,0,0.8)', // Sombra oscura en el interior
    zIndex: 1,
  },
  shelfBase: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50px', // Repisa mucho más gruesa y prominente
    backgroundColor: '#2b170b',
    // Textura de tablón grueso horizontal
    backgroundImage: 'linear-gradient(to bottom, #4a2712 0%, #1c0d05 100%), repeating-linear-gradient(to right, transparent, transparent 150px, rgba(0,0,0,0.15) 150px, rgba(0,0,0,0.15) 300px)',
    borderRadius: '4px',
    boxShadow: '0 40px 60px -10px rgba(0,0,0,0.99), inset 0 3px 5px rgba(255, 180, 80, 0.4)',
    zIndex: 2,
  },
  shelfLip: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: 'linear-gradient(to bottom, rgba(255, 190, 100, 0.5) 0%, rgba(255, 190, 100, 0.0) 100%)',
    borderRadius: '4px 4px 0 0',
  },
  shelfSupport: {
    width: '45px',
    height: '60px',
    background: 'linear-gradient(to bottom, #1c0d05 0%, #080301 100%)',
    borderLeft: '4px solid #361b0d',
    borderRight: '4px solid #080301',
    position: 'absolute',
    top: '50px',
    borderRadius: '0 0 25px 25px',
    boxShadow: '8px 15px 25px rgba(0,0,0,0.9)',
    zIndex: 1,
  },
  bookSpine: {
    width: '95px', // Ligeramente más anchos
    minWidth: '95px',
    flexShrink: 0,
    height: '460px', 
    borderRadius: '5px 5px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '35px 0',
    position: 'relative',
    boxShadow: 'inset 6px 0 15px rgba(0,0,0,0.35), inset -6px 0 15px rgba(0,0,0,0.65), 5px 0 12px rgba(0,0,0,0.7)',
    cursor: 'pointer',
    overflow: 'hidden',
    transformOrigin: 'bottom center',
  },
  spine3DShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, rgba(255,255,255,0.12) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.45) 100%)',
    zIndex: 5,
    pointerEvents: 'none',
  },
  spineTextureTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '45px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
    zIndex: 4,
  },
  chapterLabel: {
    fontFamily: 'var(--font-text)',
    fontSize: '0.65rem',
    color: '#e8d5c4',
    opacity: 0.8,
    letterSpacing: '0.15em',
    marginBottom: '8px',
    zIndex: 6,
  },
  chapterNumber: {
    fontFamily: 'var(--font-title)',
    fontSize: '2.8rem',
    color: '#e8d5c4',
    fontWeight: 'bold',
    marginBottom: '25px',
    zIndex: 6,
    textShadow: '1px 2px 5px rgba(0,0,0,0.8)',
  },
  spineDiamond: {
    width: '7px',
    height: '7px',
    backgroundColor: '#d4af37',
    transform: 'rotate(45deg)',
    marginBottom: '35px',
    zIndex: 6,
    boxShadow: '1px 1px 3px rgba(0,0,0,0.8)',
  },
  periodTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    zIndex: 6,
  },
  periodText: {
    fontFamily: 'var(--font-title)',
    fontSize: '1.45rem',
    color: '#e8d5c4',
    writingMode: 'vertical-rl', 
    textOrientation: 'mixed',
    textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
    letterSpacing: '0.05em',
  },
  spineIllustration: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '190px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
    zIndex: 1,
  },
  footerHint: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    color: '#c7b39b',
    zIndex: 1,
  },
  icon: {
    fontSize: '2.2rem',
    opacity: 0.8,
    filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.8))',
  }
};
