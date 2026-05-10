import React from "react";

export function BandaTricolor({ position = "top" }) {
  const style = {
    position: "absolute",
    left: 0, right: 0,
    [position]: 0,
    display: "flex",
    flexDirection: position === "top" ? "column" : "column-reverse",
    zIndex: 20,
  };
  
  return (
    <div style={style}>
      <div style={{ height: 12, background: "#FCD116" }} />
      <div style={{ height: 6, background: "#003893" }} />
      <div style={{ height: 6, background: "#CE1126" }} />
    </div>
  );
}
