import React from "react";
import "./portfolio.css";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import projects from "./projects.json";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
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
