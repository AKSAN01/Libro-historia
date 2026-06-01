import { NotihistoricoLayout } from './NotihistoricoLayout';

const HITOS_LEFT = [
  {
    id: 1, 
    year: '200X', 
    title: 'Título pendiente',
    shortDesc: 'Descripción corta pendiente.',
    guion: 'Guión pendiente para este hito.',
    images: [], 
    audioSrc: '',
    sfxSrc: '',
    datoClave: 'Dato clave pendiente',
    fichaLineas: ['Espacio reservado para datos'],
    color: '#228B22',
  }
];

const HITOS_RIGHT = [
  {
    id: 2, 
    year: '200X', 
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

export const Decada00s = () => {
  return (
    <NotihistoricoLayout 
      chapterIndex="5"
      period="2000 — 2009"
      subtitle="Plan Colombia y Seguridad Democrática"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 2000–2009"
      cdLabel="Digital"
      themeClass="theme-00s"
    />
  );
};
