import React, { useState } from "react";
import Frontpage from "./Components/Frontpage/Frontpage";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import "./app.css";

const App: React.FC = () => {
  const [aboutClass, setAboutClass] = useState<string>("");
  const [portfolioOffset, setPortfolioOffset] = useState<number>(100);

  // Scroll portfolio on wheel event
  const getOffset = (direction: number): void => {
    direction < 0
      ? setPortfolioOffset(portfolioOffset + 4)
      : setPortfolioOffset(portfolioOffset - 4);
  };

  return (
    <div className="App">
      {aboutClass === "slide-out" || aboutClass === "" ? (
        <div className="scroll-mask" onWheel={(e) => getOffset(e.deltaY)}></div>
      ) : null}
      <Frontpage toggleAboutClass={setAboutClass} />
      <Portfolio offset={portfolioOffset} />
      <About slideClass={aboutClass} toggleClass={setAboutClass} />
    </div>
  );
};

export default App;
