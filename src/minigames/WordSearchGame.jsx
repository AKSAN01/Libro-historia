import { useState, useEffect, useCallback } from 'react';

// Generador simple de sopa de letras
function generateGrid(size, words) {
  let grid = Array(size).fill(null).map(() => Array(size).fill(''));
  const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  
  // Colocar palabras horizontal o verticalmente de forma ingenua
  words.forEach(word => {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 100) {
      const dir = Math.random() > 0.5 ? 'H' : 'V';
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);
      
      if (dir === 'H' && col + word.length <= size) {
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          if (grid[row][col + i] !== '' && grid[row][col + i] !== word[i]) canPlace = false;
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) grid[row][col + i] = word[i];
          placed = true;
        }
      } else if (dir === 'V' && row + word.length <= size) {
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          if (grid[row + i][col] !== '' && grid[row + i][col] !== word[i]) canPlace = false;
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) grid[row + i][col] = word[i];
          placed = true;
        }
      }
      attempts++;
    }
  });

  // Llenar vacíos
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
  return grid;
}

export default function WordSearchGame({ data }) {
  const [grid, setGrid] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState(new Set());
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(() => {
    setGrid(generateGrid(data.gridSize || 10, data.words));
    setFoundWords(new Set());
  }, [data]);

  const handlePointerDown = (r, c) => {
    setIsSelecting(true);
    setSelectedCells([{ r, c }]);
  };

  const handlePointerEnter = (r, c) => {
    if (!isSelecting) return;
    // Solo permitir selecciones horizontales o verticales simples
    const start = selectedCells[0];
    if (r === start.r || c === start.c) {
      let newSelection = [];
      if (r === start.r) {
        const minC = Math.min(start.c, c);
        const maxC = Math.max(start.c, c);
        for (let i = minC; i <= maxC; i++) newSelection.push({ r, c: i });
      } else {
        const minR = Math.min(start.r, r);
        const maxR = Math.max(start.r, r);
        for (let i = minR; i <= maxR; i++) newSelection.push({ r: i, c });
      }
      setSelectedCells(newSelection);
    }
  };

  const handlePointerUp = () => {
    setIsSelecting(false);
    
    // Verificar si la selección forma una palabra válida
    const selectedWord1 = selectedCells.map(cell => grid[cell.r][cell.c]).join('');
    const selectedWord2 = selectedWord1.split('').reverse().join('');
    
    let match = null;
    data.words.forEach(w => {
      if (w === selectedWord1 || w === selectedWord2) match = w;
    });

    if (match && !foundWords.has(match)) {
      setFoundWords(prev => new Set(prev).add(match));
    }
    
    // Dejar la selección resaltada un momento y luego limpiar,
    // o simplemente limpiar la selección activa
    setTimeout(() => setSelectedCells([]), 300);
  };

  const isSelected = (r, c) => selectedCells.some(cell => cell.r === r && cell.c === c);
  
  // Nota: Deberíamos rastrear qué celdas pertenecen a las palabras ya encontradas para marcarlas en permanente.
  // Por simplicidad en este prototipo, solo marcaremos la lista de la derecha.

  const isWinner = foundWords.size === data.words.length;

  return (
    <div className="wordsearch-container" onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp}>
      <div className="wordsearch-grid" style={{ gridTemplateColumns: `repeat(${data.gridSize || 10}, 1fr)` }}>
        {grid.map((row, r) => 
          row.map((letter, c) => (
            <div 
              key={`${r}-${c}`}
              className={`wordsearch-cell ${isSelected(r, c) ? 'selected' : ''}`}
              onPointerDown={() => handlePointerDown(r, c)}
              onPointerEnter={() => handlePointerEnter(r, c)}
            >
              {letter}
            </div>
          ))
        )}
      </div>

      <div className="wordsearch-sidebar">
        <h3>Palabras a buscar:</h3>
        <ul className="wordsearch-wordlist">
          {data.words.map(w => (
            <li key={w} className={foundWords.has(w) ? 'found' : ''}>{w}</li>
          ))}
        </ul>

        {isWinner && (
          <div className="hangman-message" style={{marginTop: '20px'}}>
            <p>¡Completado!</p>
          </div>
        )}
      </div>
    </div>
  );
}
