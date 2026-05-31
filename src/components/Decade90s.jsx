import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Decade90s.css';

// ── Imports de audio ──────────────────────────────────────────────────────────
import audio1 from '../assets/90s/audio/hito1.mp3';
import audio2 from '../assets/90s/audio/hito2.mp3';
import audio3 from '../assets/90s/audio/hito3.mp3';
import audio4 from '../assets/90s/audio/hito4.mp3';
import audio5 from '../assets/90s/audio/hito5.mp3';
import audio6 from '../assets/90s/audio/hito6.mp3';
import audio7 from '../assets/90s/audio/hito7.mp3';

// ── Imports de imágenes ───────────────────────────────────────────────────────
import img1_1 from '../assets/90s/imagenes/hito1_foto1.png';
import img1_2 from '../assets/90s/imagenes/hito1_foto2.png';
import img1_3 from '../assets/90s/imagenes/hito1_foto3.png';
import img2_1 from '../assets/90s/imagenes/hito2_foto1.png';
import img2_2 from '../assets/90s/imagenes/hito2_foto2.png';
import img2_3 from '../assets/90s/imagenes/hito2_foto3.png';
import img3_1 from '../assets/90s/imagenes/hito3_foto1.png';
import img3_2 from '../assets/90s/imagenes/hito3_foto2.png';
import img4_1 from '../assets/90s/imagenes/hito4_foto1.png';
import img4_2 from '../assets/90s/imagenes/hito4_foto2.png';
import img5_1 from '../assets/90s/imagenes/hito5_foto1.png';
import img5_2 from '../assets/90s/imagenes/hito5_foto2.png';
import img6_1 from '../assets/90s/imagenes/hito6_foto1.png';
import img6_2 from '../assets/90s/imagenes/hito6_foto2.png';
import img7_1 from '../assets/90s/imagenes/hito7_foto1.png';
import img7_2 from '../assets/90s/imagenes/hito7_foto2.png';
import img7_3 from '../assets/90s/imagenes/hito7_foto3.png';

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — idénticos al original
// ─────────────────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1, year: '1990–1993', title: 'Violencia del Narcotráfico',
    shortDesc: 'Atentados, asesinatos y enfrentamientos sacuden al país.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Muy buenas noches, Colombia. Somos Notihistórico, el noticiero de la historia, e iniciamos esta emisión con noticias preocupantes sobre la creciente violencia que afecta al país.\n\n' +
      'Continúan los atentados, asesinatos y enfrentamientos relacionados con el narcotráfico, mientras aumentan las tensiones entre el Estado y grupos criminales liderados por reconocidos capos de la droga.\n\n' +
      'La preocupación ciudadana crece ante una situación de orden público cada vez más compleja. Desde la redacción de Notihistórico, seguiremos informando.',
    images: [img1_1, img1_2, img1_3], audioSrc: audio1,
    datoClave: '1990–1993 · Cartel de Medellín · Narcoterrorismo · Crisis de orden público nacional',
    fichaLineas: ['Período: 1990 – 1993','Actor: Cartel de Medellín','Tipo: Narcoterrorismo','Afectados: Civiles, jueces, políticos','Contexto: Crisis de orden público'],
    color: '#7a1a1a',
  },
  {
    id: 2, year: '1991', title: 'Constitución Política de 1991',
    shortDesc: 'Reforma política que amplía derechos y moderniza el Estado.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'En noticias nacionales, el gobierno del presidente César Gaviria promueve una nueva Constitución para el país. Esta reforma busca fortalecer la democracia, ampliar los derechos ciudadanos y modernizar las instituciones del Estado.\n\n' +
      'Sin embargo, algunas decisiones generan debate, especialmente aquellas relacionadas con la extradición y su posible impacto en la lucha contra el narcotráfico.\n\n' +
      'Colombia estrena un pacto social que reconoce por primera vez su diversidad étnica, crea la acción de tutela y establece la Corte Constitucional como guardiana de los derechos fundamentales.',
    images: [img2_1, img2_2, img2_3], audioSrc: audio2,
    datoClave: '4 de julio de 1991 · Gobierno Gaviria · 380 artículos · Reemplaza la Constitución de 1886',
    fichaLineas: ['Fecha: 4 julio 1991','Promotor: Presidente Gaviria','Artículos: 380','Reemplaza: Constitución 1886','Nuevo: Acción de tutela'],
    color: '#1a7a3c',
  },
  {
    id: 3, year: '1991', title: 'Entrega de Pablo Escobar',
    shortDesc: 'El capo más buscado del mundo se entrega bajo sus propias condiciones.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Atención, última hora. Pablo Emilio Escobar Gaviria se entrega oficialmente a las autoridades colombianas.\n\n' +
      'La decisión ocurre en medio de los recientes cambios constitucionales y bajo un acuerdo que le permite permanecer en un centro de reclusión especial conocido como "La Catedral", construido bajo sus propias condiciones.\n\n' +
      'El país permanece atento al rumbo de este caso. Los analistas advierten: el capo negoció sus términos, eligió su guardia y mantiene el control de su organización desde adentro.',
    images: [img3_1, img3_2], audioSrc: audio3,
    datoClave: '1991 · La Catedral, Envigado · Decreto de sometimiento a la justicia · Gobierno Gaviria',
    fichaLineas: ['Fecha: 19 junio 1991','Lugar: La Catedral, Envigado','Marco: Decreto sometimiento','Gobierno: Gaviria','Nota: Construida por él mismo'],
    color: '#8B3A0A',
  },
];

const HITOS_RIGHT = [
  {
    id: 4, year: '1992', title: 'Fuga de Pablo Escobar',
    shortDesc: 'El capo escapa de La Catedral cuando el gobierno intenta trasladarlo.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Interrumpimos nuestra programación con información de última hora. Se confirma la fuga de Pablo Escobar de la prisión conocida como La Catedral.\n\n' +
      'Autoridades adelantan operativos de búsqueda, mientras aumenta la preocupación por el posible regreso de episodios de violencia asociados al narcotráfico.\n\n' +
      'El Bloque de Búsqueda, apoyado por la DEA y el Gobierno de Estados Unidos, inicia las operaciones más intensas de la historia reciente del país.',
    images: [img4_1, img4_2], audioSrc: audio4,
    datoClave: '22 de julio de 1992 · La Catedral, Envigado · Inicio del Bloque de Búsqueda',
    fichaLineas: ['Fecha: 22 julio 1992','Lugar: La Catedral, Envigado','Respuesta: Bloque de Búsqueda','Apoyo: DEA / EE.UU.','Impacto: Crisis credibilidad gobierno'],
    color: '#5A0000',
  },
  {
    id: 5, year: '1993', title: 'Muerte de Pablo Escobar',
    shortDesc: 'El Bloque de Búsqueda abate al capo en Los Olivos, Medellín.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'En noticias de última hora, autoridades confirman la muerte de Pablo Emilio Escobar Gaviria en el barrio Los Olivos, en Medellín, tras un operativo del Bloque de Búsqueda.\n\n' +
      'Diversos sectores esperan que este hecho represente el inicio de una etapa de mayor tranquilidad para el país, aunque persisten preocupaciones sobre el futuro del narcotráfico.\n\n' +
      'Dieciséis meses duró la cacería más intensa de la historia colombiana.',
    images: [img5_1, img5_2], audioSrc: audio5,
    datoClave: '2 de diciembre de 1993 · Los Olivos, Medellín · Bloque de Búsqueda · Fin del Cartel de Medellín',
    fichaLineas: ['Fecha: 2 dic 1993','Lugar: Los Olivos, Medellín','Operativo: Bloque de Búsqueda','Cacería: 16 meses','Resultado: Fin Cartel Medellín'],
    color: '#7a1a1a',
  },
  {
    id: 6, year: '1998–1999', title: 'Crisis Económica',
    shortDesc: 'Recesión, desempleo masivo y dificultades para miles de familias.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Atención colombianos: estos años no han sido los mejores para la economía colombiana, que hoy enfrenta momentos difíciles. El desempleo se agudiza y miles de familias reportan dificultades económicas.\n\n' +
      'Expertos señalan problemas relacionados con la apertura económica de años anteriores, desequilibrios fiscales y una desaceleración de la economía.\n\n' +
      'El gobierno hace un llamado a la calma mientras se anuncian nuevas medidas económicas.',
    images: [img6_1, img6_2], audioSrc: audio6,
    datoClave: '1998–1999 · Gobierno Pastrana · Crisis fiscal · Desempleo masivo',
    fichaLineas: ['Período: 1998–1999','Desempleo: +20%','Crisis: Colapso UPAC','Causa: Apertura económica','Gobierno: Pastrana'],
    color: '#4a3a00',
  },
  {
    id: 7, year: '1999–2000', title: 'Plan Colombia',
    shortDesc: 'Estrategia antidrogas con apoyo de EE.UU. contra violencia y narcotráfico.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Última hora: dada la crisis económica y en especial el aumento de cultivos y del mercado del narcotráfico, el gobierno nacional anuncia oficialmente el inicio del Plan Colombia.\n\n' +
      'Una estrategia que busca fortalecer la seguridad, combatir el narcotráfico y reducir la violencia con apoyo internacional, especialmente de Estados Unidos.\n\n' +
      'Hasta aquí esta emisión especial. Continuaremos informando sobre los hechos que marcan el rumbo de Colombia. Muy buenas noches.',
    images: [img7_1, img7_2, img7_3], audioSrc: audio7,
    datoClave: '1999–2000 · Gobierno Pastrana · Plan Colombia · Apoyo de EE.UU.',
    fichaLineas: ['Período: 1999–2000','Inversión: USD $7.500M','Aliado: Estados Unidos','Estrategia: Fumigación + militar','Gobierno: Pastrana'],
    color: '#1a4a2a',
  },
];

const HITOS = [...HITOS_LEFT, ...HITOS_RIGHT];

import { NotihistoricoLayout } from './NotihistoricoLayout';

export const Decade90s = () => {
  return (
    <NotihistoricoLayout 
      chapterIndex="4"
      period="1990 — 2000"
      subtitle="Narcotráfico, constitución y crisis"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 1990–2000"
      cdLabel="Interactiva 90s"
    />
  );
};
