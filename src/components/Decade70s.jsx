import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Decade70s.css';

// ── Imports de audio ──────────────────────────────────────────────────────────
import audio1 from '../assets/70s/audio/70parte1.mp3';
import audio2 from '../assets/70s/audio/70parte2.mp3';
import audio3 from '../assets/70s/audio/70parte3.mp3';
import audio4 from '../assets/70s/audio/70parte4.mp3';
import audio5 from '../assets/70s/audio/70parte5.mp3';

// ── Imports de imágenes ───────────────────────────────────────────────────────
import img1_1 from '../assets/70s/imagenes/audio11.png';
import img1_2 from '../assets/70s/imagenes/audio12.png';
import img1_3 from '../assets/70s/imagenes/audio13.png';
import img2_1 from '../assets/70s/imagenes/audio21.png';
import img2_2 from '../assets/70s/imagenes/audio22.png';
import img2_3 from '../assets/70s/imagenes/audio23.png';
import img3_1 from '../assets/70s/imagenes/audio31.png';
import img3_2 from '../assets/70s/imagenes/audio32.png';
import img3_3 from '../assets/70s/imagenes/audio33.png';
import img4_1 from '../assets/70s/imagenes/audio41.png';
import img4_2 from '../assets/70s/imagenes/audio42.png';
import img4_3 from '../assets/70s/imagenes/audio43.png';
import img5_1 from '../assets/70s/imagenes/audio51.png';
import img5_2 from '../assets/70s/imagenes/audio52.png';
import img5_3 from '../assets/70s/imagenes/audio53.png';

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — idénticos al original
// ─────────────────────────────────────────────────────────────────────────────
const HITOS_LEFT = [
  {
    id: 1, year: '1970', title: 'Elecciones del 19 de Abril',
    shortDesc: 'Dudas, inconformidad y sospechas de fraude electoral sacuden al país.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Muy buenas noches, Colombia. Bienvenidos a Notihistórico, el noticiero de la historia. Abrimos esta emisión especial viajando al año 1970, una época en la que el país intentaba recuperar estabilidad después de años de violencia política entre liberales y conservadores.\n\n' +
      'Esta noche, la atención nacional se concentra en las elecciones presidenciales del 19 de abril. Durante horas, millones de colombianos permanecen atentos a la radio siguiendo el conteo de votos. Todo parecía indicar una posible victoria del general Gustavo Rojas Pinilla.\n\n' +
      'Sin embargo, con el avance de la madrugada, los resultados comienzan a cambiar. Finalmente, el candidato oficialista Misael Pastrana Borrero es declarado ganador. El anuncio provoca dudas, inconformidad y fuertes sospechas de fraude electoral.\n\n' +
      'Para muchos ciudadanos, aquella noche dejó la sensación de que el sistema político colombiano atravesaba una profunda crisis de legitimidad. Y mientras crecía la desconfianza… también comenzaban a surgir nuevas ideas de confrontación contra el Estado.',
    images: [img1_1, img1_2, img1_3], audioSrc: audio1,
    datoClave: '19 de abril de 1970 · Misael Pastrana Borrero · Gustavo Rojas Pinilla · Crisis de legitimidad',
    fichaLineas: ['Fecha: 19 abril 1970','Ganador oficial: Pastrana Borrero','Rival: Gral. Rojas Pinilla','Contexto: Frente Nacional','Resultado: Sospechas de fraude'],
    color: '#7a1a1a',
  },
  {
    id: 2, year: '1970–1974', title: 'Surgimiento del M-19',
    shortDesc: 'Un nuevo grupo insurgente irrumpe con acciones simbólicas y mediáticas.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'En noticias nacionales, empieza a llamar la atención un nuevo movimiento insurgente: el Movimiento 19 de Abril, más conocido como el M-19. A diferencia de otras guerrillas activas en el país, este grupo demuestra rápidamente interés por las acciones simbólicas y mediáticas.\n\n' +
      'Incluso antes de anunciar oficialmente su existencia, comienzan a aparecer mensajes extraños en distintos periódicos colombianos. "¿Falta de energía? Espere… M-19." Durante varios días, la población intenta entender el significado de aquella campaña.\n\n' +
      'Poco después, el grupo hace pública su existencia y empieza a protagonizar hechos que ocupan titulares nacionales. Año 1974. Un comando del M-19 ingresa a la Quinta de Bolívar, en Bogotá, y roba la espada de Simón Bolívar.\n\n' +
      'La noticia produce conmoción inmediata en todo el país. Más allá del valor histórico del objeto, la espada representaba uno de los símbolos políticos más importantes de América Latina. Junto al robo aparece un mensaje que rápidamente recorre Colombia: "Bolívar, tu espada vuelve a la lucha." Con este episodio, el M-19 logra convertirse en uno de los actores más visibles del panorama político y armado nacional.',
    images: [img2_1, img2_2, img2_3], audioSrc: audio2,
    datoClave: '1970–1974 · M-19 · Robo espada de Bolívar · Quinta de Bolívar, Bogotá',
    fichaLineas: ['Período: 1970 – 1974','Actor: M-19','Hecho: Robo espada de Bolívar','Lugar: Quinta de Bolívar','Mensaje: Acción simbólica'],
    color: '#1a7a3c',
  },
  {
    id: 3, year: '1978–1979', title: 'Estatuto de Seguridad y Tensión Social',
    shortDesc: 'El gobierno endurece el orden público y crecen las denuncias de abusos.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Y mientras aumentaban las acciones insurgentes, el gobierno nacional respondía fortaleciendo las medidas de seguridad. Con la llegada de Julio César Turbay Ayala a la presidencia, se implementa el llamado Estatuto de Seguridad.\n\n' +
      'Según el gobierno, esta estrategia buscaba combatir a las organizaciones armadas y recuperar el control del orden público. Sin embargo, distintos sectores comienzan a expresar preocupación por posibles abusos de autoridad.\n\n' +
      'Organizaciones sociales, estudiantes y líderes políticos denuncian detenciones arbitrarias, persecuciones y restricciones a ciertas libertades civiles. En varias universidades del país empieza a sentirse un ambiente de vigilancia permanente.\n\n' +
      'La tensión política aumenta. La desconfianza crece. Y poco a poco, Colombia comienza a entrar en una etapa marcada por la polarización y el miedo. Las ciudades ya no parecían completamente ajenas al conflicto armado.',
    images: [img3_1, img3_2, img3_3], audioSrc: audio3,
    datoClave: '1978–1979 · Julio César Turbay Ayala · Estatuto de Seguridad · Denuncias de abusos',
    fichaLineas: ['Período: 1978 – 1979','Presidente: Turbay Ayala','Medida: Estatuto de Seguridad','Crítica: Detenciones arbitrarias','Contexto: Polarización social'],
    color: '#8B3A0A',
  },
];

const HITOS_RIGHT = [
  {
    id: 4, year: '1978–1979', title: 'Robo de Armas del Cantón Norte',
    shortDesc: 'El M-19 roba más de cinco mil armas del Ejército colombiano en Bogotá.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN DE ÚLTIMA HORA\n\n' +
      'Interrumpimos esta emisión con información de última hora. 31 de diciembre de 1978. Mientras miles de colombianos celebraban la llegada del nuevo año, el M-19 ejecutaba una de las operaciones más impactantes de la década.\n\n' +
      'Durante semanas, miembros de la organización construyeron un túnel subterráneo que conducía directamente al Cantón Norte, una instalación militar del Ejército colombiano en Bogotá. La operación termina con el robo de más de cinco mil armas.\n\n' +
      'El hecho provoca una fuerte crisis de seguridad y deja en evidencia la capacidad operativa del grupo insurgente. Pero más allá de las armas desaparecidas, el episodio deja una preocupación aún mayor entre la población: la sensación de que el conflicto armado comenzaba a infiltrarse en el centro mismo de las instituciones del país.',
    images: [img4_1, img4_2, img4_3], audioSrc: audio4,
    datoClave: '31 de diciembre de 1978 · M-19 · Cantón Norte, Bogotá · Más de 5.000 armas robadas',
    fichaLineas: ['Fecha: 31 dic 1978','Actor: M-19','Lugar: Cantón Norte, Bogotá','Método: Túnel subterráneo','Botín: +5.000 armas'],
    color: '#5A0000',
  },
  {
    id: 5, year: '1979', title: 'Fin de la Década: Narcotráfico en Ascenso',
    shortDesc: 'Colombia cierra los 70 con tensión social y un nuevo fenómeno: el narcotráfico.',
    guion:
      'NOTIHISTÓRICO — EDICIÓN ESPECIAL\n\n' +
      'Así termina la década de 1970 en Colombia. Con una creciente desconfianza hacia la política. Con movimientos insurgentes ganando protagonismo nacional. Y con un Estado que responde mediante políticas de seguridad cada vez más estrictas.\n\n' +
      'La tensión social continúa acumulándose lentamente. Y mientras el país intenta contener esa fractura interna, un nuevo fenómeno comienza a aparecer silenciosamente en el panorama nacional…\n\n' +
      'el narcotráfico.\n\n' +
      'Hasta aquí esta emisión especial de Notihistórico, el noticiero de la historia. Muy buenas noches, Colombia.',
    images: [img5_1, img5_2, img5_3], audioSrc: audio5,
    datoClave: '1979 · Cierre de la década · Insurgencia · Inicio del narcotráfico en Colombia',
    fichaLineas: ['Período: Década de 1970','Crisis: Legitimidad política','Actor: Guerrillas (M-19)','Nuevo fenómeno: Narcotráfico','Proyección: Décadas de conflicto'],
    color: '#1a4a2a',
  },
];

import { NotihistoricoLayout } from './NotihistoricoLayout';

export const Decade70s = () => {
  return (
    <NotihistoricoLayout 
      chapterIndex="2"
      period="1970 — 1979"
      subtitle="Crisis, insurgencia y el inicio del narcotráfico"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 1970–1979"
      cdLabel="Interactiva 70s"
    />
  );
};
