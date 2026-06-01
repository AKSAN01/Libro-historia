import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { minigamesData } from './minigamesData';
import QuizGame from './QuizGame';
import HangmanGame from './HangmanGame';
import WordSearchGame from './WordSearchGame';
import './Minigames.css';

export default function MinigameRouter() {
  const { tag } = useParams();
  const navigate = useNavigate();
  
  const gameData = minigamesData[tag];

  if (!gameData) {
    return (
      <div className="minigame-error library-bg">
        <h2>Minijuego no encontrado para esta década.</h2>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  const renderGame = () => {
    switch (gameData.type) {
      case 'quiz':
        return <QuizGame data={gameData} />;
      case 'hangman':
        return <HangmanGame data={gameData} />;
      case 'wordsearch':
        return <WordSearchGame data={gameData} />;
      default:
        return <div>Juego desconocido</div>;
    }
  };

  return (
    <motion.div 
      className={`minigame-wrapper library-bg ${gameData.themeClass}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="minigame-header">
        <button className="minigame-back-btn" onClick={() => navigate(`/decade/${tag}`)}>
          ← Volver a la Década
        </button>
        <h1 className="minigame-title">{gameData.title}</h1>
      </div>
      
      <div className="minigame-content-area">
        {renderGame()}
      </div>
    </motion.div>
  );
}
