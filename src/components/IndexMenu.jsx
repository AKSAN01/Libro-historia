import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const IndexMenu = () => {
  const menuItems = [
    {
      title: 'Inicio',
      path: '/',
      description: 'Página principal del libro y bienvenida.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      title: 'Línea del tiempo',
      path: '/timeline',
      description: 'Explora los momentos clave de nuestra historia.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="12" r="2"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="19" cy="12" r="2"></circle>
          <line x1="7" y1="12" x2="10" y2="12"></line>
          <line x1="14" y1="12" x2="17" y2="12"></line>
        </svg>
      )
    },
    {
      title: 'Explorar capítulos',
      path: '/timeline', // Redirigir por ahora también a la estantería
      description: 'Navega por los capítulos de la historia cada década.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      title: 'Sobre el proyecto',
      path: '/',
      description: 'Conoce más sobre el objetivo, equipo y proceso del proyecto.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      )
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ÍNDICE</h2>
      <div style={styles.divider}>
        <div style={styles.diamond}></div>
      </div>
      
      <div style={styles.menuList}>
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
            <motion.div 
              style={styles.menuItem}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(214, 194, 168, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div style={styles.iconBox}>
                {item.icon}
              </div>
              <div style={styles.textContainer}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemDescription}>{item.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    height: '100%',
  },
  title: {
    fontFamily: 'var(--font-title)',
    fontSize: '2.5rem',
    color: 'var(--petrol-blue)',
    letterSpacing: '0.1em',
    marginBottom: '10px',
    textAlign: 'center',
  },
  divider: {
    width: '60%',
    height: '1px',
    backgroundColor: 'var(--aged-gold)',
    position: 'relative',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diamond: {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--aged-paper)',
    border: '1px solid var(--aged-gold)',
    transform: 'rotate(45deg)',
    position: 'absolute',
  },
  menuList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 10px',
    cursor: 'pointer',
    borderRadius: '8px',
    borderBottom: '1px solid rgba(197, 155, 87, 0.3)', // subtle line separating items
  },
  iconBox: {
    width: '60px',
    height: '60px',
    backgroundColor: 'var(--warm-beige)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    color: 'var(--leather-brown)',
    marginRight: '20px',
    flexShrink: 0,
    border: '1px solid rgba(90, 62, 43, 0.2)', // leather brown with transparency
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.05)',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemTitle: {
    fontFamily: 'var(--font-subtitle)',
    fontSize: '1.5rem',
    color: 'var(--soft-ink)',
    marginBottom: '5px',
    fontWeight: '600',
  },
  itemDescription: {
    fontFamily: 'var(--font-text)',
    fontSize: '0.9rem',
    color: 'rgba(28, 26, 23, 0.7)', // soft-ink transparent
    lineHeight: '1.4',
  }
};
