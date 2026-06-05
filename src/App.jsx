import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Timeline } from './components/Timeline';
import { DecadePage } from './components/DecadePage';
import Decada2010 from './components/Decada2010';
import { Decada20s } from './components/Decada20s';
import MinigameRouter from './minigames/MinigameRouter';

export default function App() {
  const location = useLocation();
  const isTimeline = location.pathname === '/';

  return (
    <>
      {!isTimeline && <div className="noise-overlay"></div>}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Timeline />} />
          
          {/* Ruta corregida para coincidir con el tag "10s" de tu archivo de datos */}
          <Route path="/decade/10s" element={<Decada2010 />} />
          <Route path="/decade/20s" element={<Decada20s />} />
          
          {/* Ruta para minijuegos */}
          <Route path="/minigame/:tag" element={<MinigameRouter />} />
          
          {/* Ruta genérica para el resto de décadas */}
          <Route path="/decade/:tag" element={<DecadePage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
