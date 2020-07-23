import React, { useState, useEffect } from "react";
import "./randomLine.css";

interface Props {
  position: number;
  speed: number;
  maxHeight: number;
}

const RandomLine: React.FC<Props> = ({ position, speed, maxHeight }) => {
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      if (height < maxHeight) setHeight(height + 1);
    }, speed);
  });

  // Set style on each render
  const style: object = {
    height: height + "px",
    left: position + "%",
  };
  return <div className="random-line" style={style}></div>;
};

export default RandomLine;
