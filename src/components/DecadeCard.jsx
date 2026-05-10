import React, { useState } from "react";

export function DecadeCard({ card }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "#1E1E2E" : "#181828",
        border: `1.5px solid ${hover ? card.color + "60" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 14,
        padding: "18px 20px",
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        transform: hover ? "translateX(4px)" : "none",
        boxShadow: hover ? `0 4px 12px ${card.color}20` : "none"
      }}
    >
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 4,
        background: card.color, borderRadius: "4px 0 0 4px",
      }} />
      <div style={{ paddingLeft: 8 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#F0F0F8", marginBottom: 6, fontFamily: "Syne, sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
          <span>{card.icon}</span> 
          <span>{card.title}</span>
        </div>
        <div style={{ fontSize: 13, color: "#8888A0", lineHeight: 1.6 }}>{card.body}</div>
      </div>
    </div>
  );
}
