import React, { useState, useRef } from "react";
//import { css } from "@emotion/core";
import SkewLoader from "react-spinners/SkewLoader";
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
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const mobileTouchStart = useRef<number>(0);

  // On wheel event, change potfolio page
  const onWheel = (direction: number) => {
    if (
      disableWheel ||
      (direction > 0 && portfolioIndex === 3) ||
      (direction < 0 && portfolioIndex === -2)
    ) {
      return;
    }
    if (portfolioIndex === -1 && direction < 0) {
      setAboutClass("slide-in");
    } else if (portfolioIndex === -2 && direction > 0) {
      setAboutClass("slide-out");
    }
    if (aboutClass === "slide-in") setAboutClass("slide-out");
    let n = direction > 0 ? 1 : -1;
    let indx = portfolioIndex === null ? 0 : portfolioIndex + n;
    setScrollDirection(n);
    setPortfolioIndex(indx);
    // disable wheel for some time after scroll
    setDisableWheel(true);
    setTimeout(() => {
      setDisableWheel(false);
    }, 800);
  };

  return (
    <div
      className="App"
      onWheel={(e) => {
        onWheel(e.deltaY);
      }}
      onTouchStart={(e) => {
        mobileTouchStart.current = e.changedTouches[0].clientY;
      }}
      onTouchEnd={(e) => {
        let touchEnd = e.changedTouches[0].clientY;
        let delta = mobileTouchStart.current - touchEnd;
        let direction = delta > 0 ? 1 : -1;
        if (Math.abs(delta) > 60) onWheel(direction);
      }}
    >
      {showSpinner ? (
        <div className="loading-screen">
          <div className="spinner-container">
            <SkewLoader size={50} />
          </div>
        </div>
      ) : null}
      {portfolioIndex != null && portfolioIndex > -1 ? (
        <img
          className="to-top-button"
          src="/icons/close.png"
          alt="close"
          onClick={() => {
            setShowSpinner(true);
            setPortfolioIndex(-1);
            setTimeout(() => {
              setShowSpinner(false);
            }, 1000);
          }}
        />
      ) : null}
      <Frontpage toggleAboutClass={setAboutClass} aboutClass={aboutClass} />
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
            website={project.website}
            code={project.code}
          />
        );
      })}
      <About slideClass={aboutClass} toggleClass={setAboutClass} />
    </div>
  );
};

export default App;
