import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BookLayout = ({ leftPage, rightPage }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobilePage, setActiveMobilePage] = useState('left'); // 'left' o 'right'

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Estilos inline para componentes estructurales específicos del libro
  const styles = {
    container: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '10px' : '40px',
      perspective: '1500px'
    },
    leatherCover: {
      backgroundColor: '#3d2618', /* Color cuero estático, no temático */
      borderRadius: '8px',
      padding: isMobile ? '10px' : '15px',
      boxShadow: 'var(--book-shadow)',
      width: '100%',
      maxWidth: isMobile ? '500px' : '1400px',
      height: isMobile ? '95vh' : '85vh',
      display: 'flex',
      position: 'relative',
    },
    pagesContainer: {
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundColor: '#1F2E3D', /* Borde azul petróleo estático */
      padding: '4px',
      borderRadius: '4px',
      gap: isMobile ? '0' : '2px', // Espacio del lomo en desktop
    },
    page: {
      flex: 1,
      backgroundColor: 'var(--aged-paper)',
      backgroundImage: 'var(--paper-texture)',
      boxShadow: 'var(--page-shadow)',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '2px',
      display: 'flex',
      flexDirection: 'column',
    },
    pageContent: {
      flex: 1,
      padding: isMobile ? '20px' : '50px',
      overflowY: 'auto',
      position: 'relative',
      zIndex: 2,
    },
    spineShadowLeft: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '40px',
      background: 'linear-gradient(to left, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
      zIndex: 1,
      pointerEvents: 'none',
    },
    spineShadowRight: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '40px',
      background: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
      zIndex: 1,
      pointerEvents: 'none',
    },
    mobileToggleBtn: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      zIndex: 100,
      backgroundColor: 'var(--petrol-blue)',
      color: 'var(--aged-paper)',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '20px',
      fontFamily: 'var(--font-text)',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={styles.leatherCover}
      >
        <div style={styles.pagesContainer}>
          
          {/* Renderizado para Mobile: solo muestra una página a la vez */}
          {isMobile ? (
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeMobilePage}
                initial={{ opacity: 0, x: activeMobilePage === 'left' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeMobilePage === 'left' ? 20 : -20 }}
                transition={{ duration: 0.3 }}
                style={styles.page}
              >
                <div style={styles.pageContent}>
                  {activeMobilePage === 'left' ? leftPage : rightPage}
                </div>
                
                {/* Botón flotante para cambiar de página en móvil */}
                <button 
                  style={styles.mobileToggleBtn}
                  onClick={() => setActiveMobilePage(prev => prev === 'left' ? 'right' : 'left')}
                >
                  {activeMobilePage === 'left' ? 'Ver Índice ➡️' : '⬅️ Volver'}
                </button>
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Renderizado para Desktop: muestra ambas páginas */
            <>
              <div style={styles.page}>
                <div style={styles.pageContent}>
                  {leftPage}
                </div>
                <div style={styles.spineShadowLeft} />
              </div>
              <div style={styles.page}>
                <div style={styles.spineShadowRight} />
                <div style={styles.pageContent}>
                  {rightPage}
                </div>
              </div>
            </>
          )}

        </div>
      </motion.div>
    </div>
  );
};
