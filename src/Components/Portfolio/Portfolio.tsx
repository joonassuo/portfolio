import React from "react";
import "./portfolio.css";

interface Props {
  offset: number;
}

const Portfolio: React.FC<Props> = ({ offset }) => {
  return (
    <div
      className="portfolio-container"
      style={{ transform: "translateY(" + offset + "%)" }}
    >
      Portfolio
    </div>
  );
};

export default Portfolio;
