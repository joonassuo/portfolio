import React, { useState, useEffect } from "react";
import "./randomLine.css";

interface Props {
  position: number;
  speed: number;
  maxWidth: number;
}

const RandomLine: React.FC<Props> = ({ position, speed, maxWidth }) => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      if (width < maxWidth) setWidth(width + 1);
    }, speed);
  });

  // Set style on each render
  const style: object = {
    width: width + "px",
    top: position + "%",
  };
  return <div className="random-line" style={style}></div>;
};

export default RandomLine;
