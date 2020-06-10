import React from "react";
import "./portfolio.css";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import projects from "./projects.json";

interface Props {
  offset: number;
  opacity: number;
  scrollOffset: (direction: number) => void;
}

const Portfolio: React.FC<Props> = ({ offset, opacity, scrollOffset }) => {
  return (
    <div
      className="portfolio-container"
      onWheel={(e) => scrollOffset(e.deltaY)}
      style={{
        transform: "translateY(" + offset + "%)",
        opacity: opacity,
      }}
    >
      <div className="projects-container"></div>
      {projects.projects.map((project) => {
        return (
          <PortfolioItem
            title={project.title}
            expertise={project.expertise}
            picture={project.picture}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
