import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AboutPage.css';

export const AboutPage = ({ data }) => {
  return (
    <div className="about-root">
      {/* Fondo cálido e íntimo */}
      <div className="about-bg">
        <div className="about-bg-blob about-bg-blob--1"></div>
        <div className="about-bg-blob about-bg-blob--2"></div>
      </div>

      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/" className="about-back">
            <span className="about-back-arrow">←</span> Volver a la estantería
          </Link>
          <h2 className="about-subtitle">{data.period}</h2>
          <h1 className="about-title">{data.title}</h1>
          <p className="about-desc">{data.description}</p>
        </motion.div>

        <div className="about-cards">
          {data.cards.map((card, idx) => (
            <motion.div 
              key={idx}
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, ease: "easeOut" }}
              style={{ '--card-color': card.color }}
            >
              <div className="about-card-icon-wrapper" style={{ backgroundColor: `${card.color}15`, color: card.color }}>
                <span className="about-card-icon">{card.icon}</span>
              </div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-body">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="about-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="about-fact">
            <span className="about-fact-icon">✨</span>
            <p>{data.fact}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
