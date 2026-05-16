import React from 'react';

export const Placeholder = ({ type = 'image', width = '100%', height = '200px', text = 'Espacio para contenido' }) => {
  return (
    <div style={{ ...styles.container, width, height }}>
      <div style={styles.inner}>
        {type === 'image' && <span style={styles.icon}>🖼️</span>}
        {type === 'video' && <span style={styles.icon}>🎥</span>}
        {type === 'audio' && <span style={styles.icon}>🎵</span>}
        <p style={styles.text}>{text}</p>
        <span style={styles.subText}>[Pendiente por otro equipo]</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(214, 194, 168, 0.4)', // warm-beige con transparencia
    border: '2px dashed var(--aged-gold)',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    margin: '10px 0',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: 'var(--leather-brown)',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '10px',
    opacity: 0.7,
  },
  text: {
    fontFamily: 'var(--font-title)',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '5px',
  },
  subText: {
    fontFamily: 'var(--font-text)',
    fontSize: '0.8rem',
    opacity: 0.8,
  }
};
