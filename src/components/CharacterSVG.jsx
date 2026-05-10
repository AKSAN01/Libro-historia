import React from "react";

export function CharacterSVG({ headColor, bodyColor, flip = false }) {
  // Un diseño estilo Spy vs Spy abstracto y simplificado
  return (
    <svg
      width="80" height="145" viewBox="0 0 80 145"
      style={{ 
        transform: flip ? "scaleX(-1)" : "none", 
        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
        transition: "all 0.3s ease"
      }}
    >
      <ellipse cx="40" cy="30" rx="28" ry="28" fill={headColor} />
      <ellipse cx="29" cy="26" rx="6" ry="7" fill="white" opacity="0.95" />
      <ellipse cx="51" cy="26" rx="6" ry="7" fill="white" opacity="0.95" />
      <ellipse cx="30" cy="27" rx="3.5" ry="3.5" fill="#0d0d1a" />
      <ellipse cx="52" cy="27" rx="3.5" ry="3.5" fill="#0d0d1a" />
      <ellipse cx="31" cy="26" rx="1.2" ry="1.2" fill="white" />
      <ellipse cx="53" cy="26" rx="1.2" ry="1.2" fill="white" />
      
      {/* Expresión facial algo neutra/cómica */}
      <path d="M28 42 Q40 50 52 42" stroke="#0d0d1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Cuerpo simplificado (como los gabardinas) */}
      <rect x="16" y="62" width="48" height="60" rx="10" fill={bodyColor} />
      
      {/* Brazos */}
      <rect x="1" y="64" width="17" height="10" rx="5" fill={bodyColor} />
      <rect x="62" y="64" width="17" height="10" rx="5" fill={bodyColor} />
      
      {/* Piernas */}
      <rect x="20" y="116" width="16" height="24" rx="6" fill={bodyColor} />
      <rect x="44" y="116" width="16" height="24" rx="6" fill={bodyColor} />
      
      {/* Detalle sombra/cinturón */}
      <rect x="22" y="62" width="36" height="8" rx="0" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}
