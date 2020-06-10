import React from "react";
import "./portfolio.css";

interface Props {
  offset: number;
  opacity: number;
}

const Portfolio: React.FC<Props> = ({ offset, opacity }) => {
  return (
    <div
      className="portfolio-container"
      style={{
        transform: "translateY(" + offset + "%)",
        opacity: opacity,
      }}
    >
      Portfolio
    </div>
  );
};

export default Portfolio;
