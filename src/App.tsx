import React, { useState, useEffect } from "react";
import Frontpage from "./Components/Frontpage/Frontpage";
import About from "./Components/About/About";
import projects from "./Components/Portfolio/projects.json";
import "./app.css";
import PortfolioItem from "./Components/Portfolio/PortfolioItem/PortfolioItem";

const App: React.FC = () => {
  const [aboutClass, setAboutClass] = useState<string>("");
  const [portfolioIndex, setPortfolioIndex] = useState<number>(-1);

  useEffect(() => {});

  // On wheel event, change potfolio page
  const onWheel = (direction: number) => {
    setPortfolioIndex(portfolioIndex + direction / 100);
  };

  return (
    <div
      className="App"
      onWheel={(e) => {
        e.preventDefault();
        onWheel(e.deltaY);
      }}
    >
      <h2
        style={{
          position: "fixed",
          top: 0,
        }}
      >
        {portfolioIndex}
      </h2>
      <Frontpage toggleAboutClass={setAboutClass} />
      {projects.projects.map((project, index) => {
        return (
          <PortfolioItem
            index={index}
            slideClass={portfolioIndex === index ? "slide-up" : "slide-down"}
            expertise={project.expertise}
            legend={project.legend}
            picture={project.picture}
            title={project.title}
          />
        );
      })}
      <About slideClass={aboutClass} toggleClass={setAboutClass} />
    </div>
  );
};

export default App;
