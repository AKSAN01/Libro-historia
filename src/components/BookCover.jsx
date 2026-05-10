import React from "react";

export function BookCover({ onOpen, animating }) {
  return (
    <div 
      style={{ 
        position: "relative", 
        cursor: "pointer", 
        transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)", 
        transform: animating ? "scale(1.05) rotateY(-5deg)" : "scale(1) rotateY(0deg)",
        transformStyle: "preserve-3d"
      }} 
      onClick={onOpen}
    >
      <div style={{ position: "relative", width: 260, height: 380, perspective: 1000, transformStyle: "preserve-3d" }}>
        {/* Grosor de las páginas (derecha) */}
        <div style={{
          position: "absolute", left: 30, top: 4, width: 230, height: 372,
          background: "#E0E0E0",
          borderRadius: "0 10px 10px 0",
          transform: "translateZ(-3px)",
          boxShadow: "inset -2px 0 5px rgba(0,0,0,0.1)"
        }} />

        {/* Lomo */}
        <div style={{
          position: "absolute", left: 0, top: 0,
          width: 30, height: 380,
          background: "linear-gradient(90deg, #060F1E 0%, #0A1628 100%)",
          borderRadius: "8px 0 0 8px",
          boxShadow: "inset -3px 0 8px rgba(0,0,0,0.5), 2px 0 5px rgba(0,0,0,0.3)",
          transform: "translateZ(1px)",
          zIndex: 2
        }} />
        
        {/* Portada Principal */}
        <div style={{
          position: "absolute", left: 30, top: 0,
          width: 230, height: 380,
          background: "linear-gradient(160deg, #0D1F3C 0%, #0A1628 100%)",
          borderRadius: "0 8px 8px 0",
          border: "1.5px solid rgba(0,56,147,0.5)",
          borderLeft: "none",
          overflow: "hidden",
          transform: "translateZ(1px)",
          boxShadow: "5px 5px 15px rgba(0,0,0,0.4)",
          zIndex: 3
        }}>
          {/* Franjas tricolor */}
          <div style={{ height: 8, background: "#FCD116" }} />
          <div style={{ height: 4, background: "#003893" }} />
          <div style={{ height: 4, background: "#CE1126" }} />
          
          <div style={{ padding: "36px 20px", display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#FCD116", marginBottom: 12, boxShadow: "0 0 16px rgba(252,209,22,0.4)" }} />
            <div style={{ fontSize: 13, fontFamily: "Syne, sans-serif", fontWeight: 700, letterSpacing: 4, color: "#FCD116", textAlign: "center" }}>COLOMBIA</div>
            <div style={{ fontSize: 42, fontFamily: "Fraunces, serif", fontWeight: 900, color: "#F0F0F8", textAlign: "center", lineHeight: 1.1, margin: "8px 0" }}>1960</div>
            <div style={{ fontSize: 14, fontFamily: "Syne, sans-serif", color: "#7080A0", textAlign: "center", fontWeight: 600 }}>— 2026</div>
            <div style={{ marginTop: 24, width: "70%", height: 1, background: "rgba(252,209,22,0.3)" }} />
            <div style={{ fontSize: 10, fontFamily: "Syne, sans-serif", color: "#7080A0", textAlign: "center", letterSpacing: 2, marginTop: 12, lineHeight: 1.6 }}>UNA AVENTURA<br/>EDUCATIVA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
