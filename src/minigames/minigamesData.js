export const minigamesData = {
  '60s': {
    type: 'quiz',
    themeClass: 'theme-60s',
    title: 'Quiz de los 60s: El Origen',
    questions: [
      {
        question: '¿Qué evento marcó el inicio del Frente Nacional?',
        options: [
          'La toma del Palacio de Justicia',
          'El acuerdo entre Liberales y Conservadores',
          'La operación Marquetalia',
          'La entrega de armas del M-19'
        ],
        correctAnswer: 1
      },
      {
        question: '¿En qué año se lanzó la operación militar sobre Marquetalia?',
        options: ['1964', '1960', '1970', '1966'],
        correctAnswer: 0
      },
      {
        question: '¿Qué sacerdote se unió al ELN y murió en 1966?',
        options: ['Camilo Torres', 'Manuel Pérez', 'Gaspar García', 'Domingo Laín'],
        correctAnswer: 0
      }
    ]
  },
  '70s': {
    type: 'hangman',
    themeClass: 'theme-70s',
    title: 'Ahorcado: Palabras de los 70s',
    words: [
      { word: 'FRAUDE', hint: 'Sospecha en las elecciones presidenciales de 1970.' },
      { word: 'BOLIVAR', hint: 'El M-19 robó su espada en 1974.' },
      { word: 'ESTATUTO', hint: 'Medida de seguridad impuesta por Turbay Ayala.' },
      { word: 'TURBAY', hint: 'Presidente que endureció el orden público.' }
    ]
  },
  '80s': {
    type: 'wordsearch',
    themeClass: 'theme-80s',
    title: 'Sopa de Letras: Los años del terror',
    gridSize: 10,
    words: ['PALACIO', 'GALAN', 'CARTEL', 'TERROR', 'JUSTICIA']
  },
  '90s': {
    type: 'quiz',
    themeClass: 'theme-90s',
    title: 'Quiz Constitucional y Conflicto (90s)',
    questions: [
      {
        question: '¿Qué figura jurídica fundamental fue creada por la Constitución de 1991?',
        options: ['La Extradición', 'La Acción de Tutela', 'El Plebiscito', 'El Estado de Sitio'],
        correctAnswer: 1
      },
      {
        question: '¿Cómo se llamaba la cárcel construida por Pablo Escobar?',
        options: ['La Picota', 'La Modelo', 'La Catedral', 'El Buen Pastor'],
        correctAnswer: 2
      },
      {
        question: '¿Qué país apoyó financieramente el "Plan Colombia"?',
        options: ['Francia', 'Reino Unido', 'Estados Unidos', 'España'],
        correctAnswer: 2
      }
    ]
  },
  '10s': {
    type: 'hangman',
    themeClass: 'theme-10s',
    title: 'Ahorcado: Los Acuerdos de Paz',
    words: [
      { word: 'PLEBISCITO', hint: 'Mecanismo de participación ciudadana votado en 2016.' },
      { word: 'HABANA', hint: 'Ciudad donde se desarrollaron los diálogos de paz.' },
      { word: 'ACUERDO', hint: 'Pacto final firmado entre el gobierno y las FARC.' },
      { word: 'PAZ', hint: 'El objetivo principal de las negociaciones.' }
    ]
  }
};
