import React from "react";

export function TransitionOverlay({ visible }) {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#0E0E14",
      zIndex: 100,
      opacity: visible ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity 0.12s ease-in-out",
    }} />
  );
}
