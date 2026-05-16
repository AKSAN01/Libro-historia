import React from 'react';
import { motion } from 'framer-motion';
import { Placeholder } from './Placeholder';

export const WelcomePage = () => {
  return (
    <div style={styles.container}>
      {/* Ribbon Bookmark */}
      <div style={styles.ribbon}>
        <span style={styles.ribbonIcon}>📖</span>
        <span style={styles.ribbonText}>Historia de<br/>Colombia</span>
        <div style={styles.ribbonTail}></div>
      </div>

      <div style={styles.content}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={styles.greeting}
        >
          Bienvenido a tu
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={styles.title}
        >
          Historia de<br/>
          <span style={styles.titleHighlight}>Colombia</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={styles.subtitle}
        >
          Un viaje interactivo por los momentos<br/>que construyeron nuestro país.
        </motion.p>
      </div>

      {/* Image Placeholder for the bottom illustration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={styles.imageSection}
      >
        <Placeholder type="image" height="250px" text="Ilustración histórica de portada" />
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  ribbon: {
    position: 'absolute',
    top: '-50px', // Sticks out of the page slightly
    left: '20px',
    backgroundColor: 'var(--petrol-blue)',
    width: '70px',
    padding: '20px 5px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
    zIndex: 10,
  },
  ribbonIcon: {
    fontSize: '1.5rem',
    marginBottom: '5px',
  },
  ribbonText: {
    fontFamily: 'var(--font-subtitle)',
    color: 'var(--aged-paper)',
    fontSize: '0.7rem',
    textAlign: 'center',
    lineHeight: '1.2',
  },
  ribbonTail: {
    position: 'absolute',
    bottom: '-15px',
    left: 0,
    width: 0,
    height: 0,
    borderLeft: '35px solid var(--petrol-blue)',
    borderRight: '35px solid var(--petrol-blue)',
    borderBottom: '15px solid transparent',
  },
  content: {
    marginTop: '100px', // Make space for ribbon
    paddingLeft: '20px',
  },
  greeting: {
    fontFamily: 'var(--font-subtitle)',
    fontSize: '1.2rem',
    color: 'var(--soft-ink)',
    marginBottom: '10px',
  },
  title: {
    fontSize: '4rem',
    lineHeight: '1',
    marginBottom: '20px',
  },
  titleHighlight: {
    color: 'var(--aged-gold)',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--leather-brown)',
    lineHeight: '1.5',
    marginBottom: '40px',
  },
  imageSection: {
    marginTop: 'auto', // Pushes to bottom
    width: '100%',
  }
};
