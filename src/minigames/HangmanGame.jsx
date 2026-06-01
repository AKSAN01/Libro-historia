import { useState } from 'react';

const HANGMAN_PICS = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
];

export default function HangmanGame({ data }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [mistakes, setMistakes] = useState(0);

  const wordObj = data.words[currentWordIndex];
  const word = wordObj.word.toUpperCase();
  const hint = wordObj.hint;

  const isGameOver = mistakes >= HANGMAN_PICS.length - 1;
  const isWinner = word.split('').every(l => guessedLetters.has(l) || l === ' ');

  const handleGuess = (letter) => {
    if (guessedLetters.has(letter) || isGameOver || isWinner) return;

    const newGuessed = new Set(guessedLetters);
    newGuessed.add(letter);
    setGuessedLetters(newGuessed);

    if (!word.includes(letter)) {
      setMistakes(m => m + 1);
    }
  };

  const nextWord = () => {
    if (currentWordIndex + 1 < data.words.length) {
      setCurrentWordIndex(i => i + 1);
      setGuessedLetters(new Set());
      setMistakes(0);
    } else {
      // Loop or finish
      setCurrentWordIndex(0);
      setGuessedLetters(new Set());
      setMistakes(0);
    }
  };

  const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('');

  return (
    <div className="hangman-container">
      <div className="hangman-drawing">
        {HANGMAN_PICS[mistakes]}
      </div>
      
      <p className="hangman-hint">Pista: {hint}</p>
      
      <div className="hangman-word">
        {word.split('').map((char, i) => (
          <span key={i} style={{ margin: '0 5px' }}>
            {char === ' ' ? ' ' : guessedLetters.has(char) || isGameOver ? char : '_'}
          </span>
        ))}
      </div>

      {!isGameOver && !isWinner && (
        <div className="hangman-keyboard">
          {alphabet.map(letter => (
            <button 
              key={letter}
              className="hangman-key"
              disabled={guessedLetters.has(letter)}
              onClick={() => handleGuess(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {isWinner && (
        <div className="hangman-message">
          <p>¡Correcto!</p>
          <button onClick={nextWord} className="minigame-back-btn">Siguiente Palabra</button>
        </div>
      )}

      {isGameOver && (
        <div className="hangman-message" style={{color: 'red'}}>
          <p>¡Perdiste! La palabra era {word}</p>
          <button onClick={() => { setMistakes(0); setGuessedLetters(new Set()); }} className="minigame-back-btn">
            Intentar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}
