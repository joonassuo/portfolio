import React, { useState, useEffect, useRef } from "react";
import Frontpage from "./Components/Frontpage/Frontpage";
import About from "./Components/About/About";
import projects from "./Components/Portfolio/projects.json";
import "./app.css";
import "./animations.css";
import PortfolioItem from "./Components/Portfolio/PortfolioItem/PortfolioItem";

const App: React.FC = () => {
  const [aboutClass, setAboutClass] = useState<string>("");
  const [portfolioIndex, setPortfolioIndex] = useState<number | null>(null);
  const [scrollDirection, setScrollDirection] = useState<number | null>(null);
  const [disableWheel, setDisableWheel] = useState<boolean>(false);
  const mobileTouchStart = useRef<number>(0);

  useEffect(() => {
    document.body.addEventListener("touchstart", (e) => {
      e.preventDefault();
    });
  });

  // On wheel event, change potfolio page
  const onWheel = (direction: number) => {
    if (disableWheel) {
      return;
    }
    let n = direction > 0 ? 1 : -1;
    let indx = portfolioIndex === null ? 0 : portfolioIndex + n;
    setScrollDirection(n);
    setPortfolioIndex(indx);
    // disable wheel for some time after scroll
    setDisableWheel(true);
    setTimeout(() => {
      setDisableWheel(false);
    }, 1000);
  };

  return (
    <div
      className="App"
      onWheel={(e) => {
        e.preventDefault();
        onWheel(e.deltaY);
      }}
      onTouchStart={(e) => {
        e.preventDefault();
        mobileTouchStart.current = e.changedTouches[0].clientY;
      }}
      onTouchEnd={(e) => {
        let touchEnd = e.changedTouches[0].clientY;
        let delta = mobileTouchStart.current - touchEnd;
        let direction = delta > 0 ? 1 : -1;
        if (Math.abs(delta) > 10) onWheel(direction);
      }}
    >
      <Frontpage
        toggleAboutClass={setAboutClass}
        portfolioIndex={portfolioIndex}
      />
      {projects.projects.map((project, index) => {
        let scrollClass;
        if (portfolioIndex === null) {
          scrollClass = "portfolio-item-on-bottom";
        } else if (portfolioIndex === index) {
          scrollClass =
            scrollDirection === 1 ? "slide-from-bottom" : "slide-from-top";
        } else if (portfolioIndex - index === 1 && scrollDirection === 1) {
          scrollClass = "slide-to-top";
        } else if (portfolioIndex - index === -1 && scrollDirection === -1) {
          scrollClass = "slide-to-bottom";
        } else {
          scrollClass =
            portfolioIndex > index
              ? "portfolio-item-on-top"
              : "portfolio-item-on-bottom";
        }
        return (
          <PortfolioItem
            index={index}
            slideClass={scrollClass}
            expertise={project.expertise}
            legend={project.legend}
            stack={project.stack}
            description={project.description}
            picture={project.picture}
            title={project.title}
            client={project.client}
            style={project.style}
          />
        );
      })}
      <About slideClass={aboutClass} toggleClass={setAboutClass} />
    </div>
  );
};

export default App;
