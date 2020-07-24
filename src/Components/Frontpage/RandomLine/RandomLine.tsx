import React, { useEffect } from "react";
import "./randomLine.css";

interface Props {
  position: number;
  speed: number;
  maxHeight: number;
}

const RandomLine: React.FC<Props> = ({ position, speed, maxHeight }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--height", maxHeight + "px");
    document.documentElement.style.setProperty("--speed", speed + "s");
  });

  return <div className="random-line" style={{ left: position + "%" }}></div>;
};

export default RandomLine;
