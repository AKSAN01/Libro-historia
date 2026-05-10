import React, { useState } from "react";
import { BandaTricolor } from "../components/BandaTricolor";
import { BookCover } from "../components/BookCover";

export function CoverPage({ onOpen }) {
  const [bookHover, setBookHover] = useState(false);
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => onOpen(), 700);
  };

  return (
    <div style={{
      position: "relative",
      width: "100%", height: "100vh",
      background: "#0E0E14",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      fontFamily: "Syne, sans-serif",
    }}>
      <BandaTricolor position="top" />
      <BandaTricolor position="bottom" />

      {/* Glow ambiental */}
      <div style={{ position: "absolute", left: "30%", top: "20%", width: 700, height: 600, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,56,147,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "5%", bottom: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(252,209,22,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Lado izquierdo - Texto */}
      <div style={{ flex: 1, padding: "0 64px", animation: "fadeUp 0.8s ease forwards", zIndex: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#8888A0", marginBottom: 24 }}>UNA AVENTURA EDUCATIVA</div>
        <h1 style={{
          fontFamily: "Fraunces, serif",
          fontSize: "clamp(56px, 6vw, 82px)",
          fontWeight: 900,
          lineHeight: 1.05,
          color: "#F0F0F8",
          marginBottom: 20,
        }}>
          La Historia<br />de Colombia
        </h1>
        {/* Subrayado tricolor */}
        <div style={{ display: "flex", gap: 0, marginBottom: 28, height: 5 }}>
          <div style={{ width: 80, background: "#FCD116", borderRadius: "3px 0 0 3px" }} />
          <div style={{ width: 40, background: "#003893" }} />
          <div style={{ width: 24, background: "#CE1126", borderRadius: "0 3px 3px 0" }} />
        </div>
        <p style={{ fontSize: 17, color: "#A0A0C0", lineHeight: 1.7, marginBottom: 48, maxWidth: 440 }}>
          Conflictos armados desde 1960 hasta 2026,<br />contados de manera amigable para ti.
        </p>
        <button
          onClick={handleOpen}
          style={{
            background: "#FCD116",
            color: "#0E0E14",
            border: "none",
            borderRadius: 30,
            padding: "16px 36px",
            fontSize: 15,
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: 0.5,
            transition: "transform 0.2s, box-shadow 0.2s",
            transform: bookHover ? "scale(1.04)" : "scale(1)",
            boxShadow: bookHover ? "0 0 32px rgba(252,209,22,0.35)" : "none",
          }}
          onMouseEnter={() => setBookHover(true)}
          onMouseLeave={() => setBookHover(false)}
        >
          Abrir el libro →
        </button>

        {/* Dots de décadas */}
        <div style={{ display: "flex", gap: 10, marginTop: 44, alignItems: "center" }}>
          {["1960", "1970", "1980", "1990", "2000", "2010", "2020"].map((yr, i) => (
            <div key={yr} style={{
              width: i === 0 ? 10 : 7,
              height: i === 0 ? 10 : 7,
              borderRadius: "50%",
              background: i === 0 ? "#FCD116" : "#252535",
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>

      {/* Lado derecho - Libro */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        {/* Círculo de fondo */}
        <div style={{
          position: "absolute",
          width: 380, height: 380,
          borderRadius: "50%",
          background: "#1A1A24",
          border: "1.5px solid rgba(252,209,22,0.12)",
        }} />
        <div style={{
          transform: opening ? "scale(2.5) translateY(-20px) rotateY(-10deg)" : "scale(1)",
          transition: opening ? "transform 0.6s cubic-bezier(0.4,0,0.2,1)" : "transform 0.3s ease",
          opacity: opening ? 0 : 1,
          zIndex: 20
        }}>
          <BookCover onOpen={handleOpen} animating={bookHover} />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
