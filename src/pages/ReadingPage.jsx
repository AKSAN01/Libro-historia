import React from "react";
import { BandaTricolor } from "../components/BandaTricolor";
import { CharacterSVG } from "../components/CharacterSVG";
import { DecadeCard } from "../components/DecadeCard";
import { decades } from "../data/decades";

export function ReadingPage({ decade, onNext, onPrev, isFirst, isLast, flipping }) {
  const d = decades[decade];
  const progress = ((decade + 1) / decades.length) * 100;

  return (
    <div style={{
      position: "relative",
      width: "100%", height: "100vh",
      background: "#0E0E14",
      display: "flex",
      overflow: "hidden",
      fontFamily: "Syne, sans-serif",
      // Efecto de página visible
      boxShadow: "inset 10px 0 30px rgba(0,0,0,0.5)"
    }}>
      <BandaTricolor position="top" />
      <BandaTricolor position="bottom" />

      {/* ── SIDEBAR IZQUIERDO ── */}
      <div style={{
        width: 340,
        minWidth: 340,
        background: "#131320",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        padding: "48px 36px 36px",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}>
        {/* Líneas verticales tricolor */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, display: "flex", flexDirection: "row-reverse" }}>
          <div style={{ width: 4, background: "#FCD116", height: "100%" }} />
          <div style={{ width: 2, background: "#003893", height: "100%" }} />
          <div style={{ width: 2, background: "#CE1126", height: "100%" }} />
        </div>

        {/* Número de década decorativo */}
        <div 
          key={`tag-${d.tag}`}
          style={{
            fontFamily: "Fraunces, serif",
            fontSize: 140,
            fontWeight: 900,
            color: "#1E1E30",
            lineHeight: 1,
            position: "absolute",
            top: 30,
            left: 20,
            userSelect: "none",
            animation: "fadeUpTag 0.6s ease"
          }}
        >
          {d.tag}
        </div>

        {/* Título del período */}
        <div style={{ marginTop: 140, position: "relative", zIndex: 2, animation: "slideRight 0.5s ease" }} key={`info-${d.tag}`}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: "#666680", marginBottom: 12 }}>PERÍODO</div>
          <div style={{
            fontFamily: "Fraunces, serif",
            fontSize: 30,
            fontWeight: 900,
            color: "#F0F0F8",
            marginBottom: 14,
          }}>{d.period}</div>

          {/* Subrayado tricolor */}
          <div style={{ display: "flex", gap: 0, marginBottom: 20, height: 4 }}>
            <div style={{ width: 50, background: "#FCD116", borderRadius: "2px 0 0 2px" }} />
            <div style={{ width: 25, background: "#003893" }} />
            <div style={{ width: 15, background: "#CE1126", borderRadius: "0 2px 2px 0" }} />
          </div>

          <div style={{ fontSize: 13, color: "#7070A0", lineHeight: 1.7, marginBottom: 32 }}>{d.description}</div>
        </div>

        {/* Personajes */}
        <div 
          key={`chars-${d.tag}`}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 24,
            flex: 1,
            paddingBottom: 8,
            position: "relative",
            animation: "fadeUpChar 0.7s ease forwards"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <CharacterSVG headColor={d.groupA.headColor} bodyColor={d.groupA.bodyColor} />
            <div style={{ fontSize: 11, fontWeight: 700, color: d.groupA.headColor, marginTop: 8, letterSpacing: 1 }}>{d.groupA.name}</div>
          </div>
          <div style={{
            fontFamily: "Fraunces, serif",
            fontSize: 22,
            fontWeight: 900,
            color: "#CE1126",
            paddingBottom: 52,
          }}>{d.vs}</div>
          <div style={{ textAlign: "center" }}>
            <CharacterSVG headColor={d.groupB.headColor} bodyColor={d.groupB.bodyColor} flip />
            <div style={{ fontSize: 11, fontWeight: 700, color: d.groupB.headColor, marginTop: 8, letterSpacing: 1 }}>{d.groupB.name}</div>
          </div>
        </div>
      </div>

      {/* ── CONTENIDO PRINCIPAL ── */}
      <div 
        key={`content-${d.tag}`}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "56px 52px 40px",
          overflow: "hidden",
          animation: "slideIn 0.4s ease forwards",
        }}
      >
        {/* Título de la época */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: "#666680", marginBottom: 10 }}>LO QUE PASÓ EN ESTA ÉPOCA</div>
          <h2 style={{
            fontFamily: "Fraunces, serif",
            fontSize: 36,
            fontWeight: 900,
            color: "#F0F0F8",
            lineHeight: 1.15,
          }}>{d.title}</h2>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
          {d.cards.map((card, i) => (
            <div key={i} style={{ animation: `slideIn ${(i+1)*0.2 + 0.2}s ease forwards`, opacity: 0 }}>
              <DecadeCard card={card} />
            </div>
          ))}
        </div>

        {/* Dato curioso */}
        <div style={{
          background: "rgba(252,209,22,0.07)",
          border: "1px solid rgba(252,209,22,0.2)",
          borderRadius: 12,
          padding: "16px 20px",
          marginTop: 20,
          display: "flex",
          gap: 14,
          alignItems: "flex-start",
          animation: "slideIn 1s ease forwards", opacity: 0
        }}>
          <span style={{ fontSize: 20, flexShrink: 0 }}>💡</span>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#FCD116", letterSpacing: 1.5, marginBottom: 5 }}>¿SABÍAS QUE...?</div>
            <div style={{ fontSize: 13, color: "#C8C840", lineHeight: 1.6 }}>{d.fact}</div>
          </div>
        </div>

        {/* Barra de progreso + navegación */}
        <div style={{ marginTop: 28, animation: "slideIn 1.2s ease forwards", opacity: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: "#666680", letterSpacing: 1 }}>PERÍODO {decade + 1} DE {decades.length}</span>
            <span style={{ fontSize: 11, color: "#FCD116" }}>{d.period}</span>
          </div>
          <div style={{ height: 4, background: "#1E1E30", borderRadius: 2, marginBottom: 24 }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "#FCD116",
              borderRadius: 2,
              transition: "width 0.5s ease",
            }} />
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={onPrev}
              disabled={isFirst}
              style={{
                background: "transparent",
                color: isFirst ? "#333348" : "#8888A0",
                border: `1px solid ${isFirst ? "#1E1E30" : "rgba(136,136,160,0.3)"}`,
                borderRadius: 24,
                padding: "12px 28px",
                fontSize: 13,
                fontFamily: "Syne, sans-serif",
                fontWeight: 600,
                cursor: isFirst ? "default" : "pointer",
                transition: "all 0.2s",
              }}
            >
              ← Anterior
            </button>
            <button
              onClick={onNext}
              disabled={isLast}
              style={{
                background: isLast ? "#1A1A28" : "#FCD116",
                color: isLast ? "#333348" : "#0E0E14",
                border: "none",
                borderRadius: 24,
                padding: "12px 28px",
                fontSize: 13,
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                cursor: isLast ? "default" : "pointer",
                transition: "all 0.2s, transform 0.15s",
                letterSpacing: 0.3,
              }}
              onMouseEnter={e => { if (!isLast) e.target.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { e.target.style.transform = "scale(1)"; }}
            >
              {isLast ? "Fin del período" : `Siguiente época →`}
            </button>

            {/* Botón cerrar libro */}
            <button
              onClick={() => window.location.reload()}
              style={{
                marginLeft: "auto",
                background: "transparent",
                color: "#444460",
                border: "1px solid #1E1E30",
                borderRadius: 24,
                padding: "12px 22px",
                fontSize: 12,
                fontFamily: "Syne, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.target.style.color = "#F0F0F8"; }}
              onMouseLeave={e => { e.target.style.color = "#444460"; }}
            >
              ✕ Cerrar
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUpTag {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUpChar {
          from { opacity: 0; transform: translateY(40px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
