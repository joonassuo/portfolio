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
      <div id="portfolio-title">Selected Work</div>
      <div className="projects-container">
        {projects.projects.map((project, index) => {
          return (
            <PortfolioItem
              index={index}
              title={project.title}
              legend={project.legend}
              expertise={project.expertise}
              picture={project.picture}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
