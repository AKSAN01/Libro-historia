import { NotihistoricoLayout } from './NotihistoricoLayout';

const HITOS_LEFT = [
  {
    id: 1, 
    year: '195X', 
    title: 'Título pendiente',
    shortDesc: 'Descripción corta pendiente.',
    guion: 'Guión pendiente para este hito.',
    images: [], 
    audioSrc: '',
    sfxSrc: '',
    datoClave: 'Dato clave pendiente',
    fichaLineas: ['Espacio reservado para datos'],
    color: '#CE1126',
  }
];

const HITOS_RIGHT = [
  {
    id: 2, 
    year: '195X', 
    title: 'Título pendiente',
    shortDesc: 'Descripción corta pendiente.',
    guion: 'Guión pendiente para este hito.',
    images: [], 
    audioSrc: '',
    sfxSrc: '',
    datoClave: 'Dato clave pendiente',
    fichaLineas: ['Espacio reservado para datos'],
    color: '#003893',
  }
];

export const Decada50s = () => {
  return (
    <NotihistoricoLayout 
      chapterIndex="1"
      period="1950 — 1959"
      subtitle="La Violencia y el Frente Nacional"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 1950–1959"
      cdLabel="Cinta"
      themeClass="theme-50s"
    />
  );
};
