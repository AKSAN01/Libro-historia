import { NotihistoricoLayout } from './NotihistoricoLayout';

const HITOS_LEFT = [
  {
    id: 1, 
    year: '202X', 
    title: 'Título pendiente',
    shortDesc: 'Descripción corta pendiente.',
    guion: 'Guión pendiente para este hito.',
    images: [], 
    audioSrc: '',
    sfxSrc: '',
    datoClave: 'Dato clave pendiente',
    fichaLineas: ['Espacio reservado para datos'],
    color: '#00A86B',
  }
];

const HITOS_RIGHT = [
  {
    id: 2, 
    year: '202X', 
    title: 'Título pendiente',
    shortDesc: 'Descripción corta pendiente.',
    guion: 'Guión pendiente para este hito.',
    images: [], 
    audioSrc: '',
    sfxSrc: '',
    datoClave: 'Dato clave pendiente',
    fichaLineas: ['Espacio reservado para datos'],
    color: '#8B0000',
  }
];

export const Decada20s = () => {
  return (
    <NotihistoricoLayout 
      chapterIndex="7"
      period="2020 — 2026"
      subtitle="Nuevos Retos y Estallido Social"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 2020–2026"
      cdLabel="Streaming"
      themeClass="theme-20s"
    />
  );
};
