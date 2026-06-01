import { useState } from 'react';

export default function QuizGame({ data }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === data.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQ = currentQuestion + 1;
    if (nextQ < data.questions.length) {
      setCurrentQuestion(nextQ);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="quiz-result">
        <h2>¡Quiz Terminado!</h2>
        <p>Tu puntuación: {score} de {data.questions.length}</p>
        <button onClick={restartGame}>Volver a Jugar</button>
      </div>
    );
  }

  const q = data.questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-question">
        <p>Pregunta {currentQuestion + 1} de {data.questions.length}</p>
        <h3>{q.question}</h3>
      </div>
      <div className="quiz-options">
        {q.options.map((opt, i) => (
          <button key={i} className="quiz-option-btn" onClick={() => handleAnswer(i)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
