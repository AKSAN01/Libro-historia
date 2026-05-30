import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BookLayout } from './components/BookLayout';
import { WelcomePage } from './components/WelcomePage';
import { IndexMenu } from './components/IndexMenu';
import { Timeline } from './components/Timeline';
import { DecadePage } from './components/DecadePage';
import Decada2010 from './components/Decada2010';

function IndexView() {
  return (
    <>
      <BookLayout 
        leftPage={<WelcomePage />} 
        rightPage={<IndexMenu />} 
      />
      <div style={styles.bottomBar}>
        <div style={styles.periodLabel}>
          <span>1960 – Actualidad</span>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const location = useLocation();
  const isTimeline = location.pathname === '/timeline';

  return (
    <>
      {!isTimeline && <div className="noise-overlay"></div>}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<IndexView />} />
          <Route path="/timeline" element={<Timeline />} />
          
          {/* Ruta corregida para coincidir con el tag "10s" de tu archivo de datos */}
          <Route path="/decade/10s" element={<Decada2010 />} />
          
          {/* Ruta genérica para el resto de décadas */}
          <Route path="/decade/:tag" element={<DecadePage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

const styles = {
  bottomBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '15px',
    zIndex: 1000,
    pointerEvents: 'none',
  },
  periodLabel: {
    backgroundColor: 'var(--leather-brown)',
    color: 'var(--aged-gold)',
    padding: '5px 20px',
    borderRadius: '4px',
    fontFamily: 'var(--font-text)',
    fontSize: '0.9rem',
    border: '1px solid #3d2618',
    boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
    letterSpacing: '0.05em',
  }
};