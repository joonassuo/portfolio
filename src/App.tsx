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
    let increment = direction < 0 ? 1 : -1;
    setPortfolioOffset(portfolioOffset + 4 * increment);
  };

  return (
    <div className="App">
      <Frontpage
        toggleAboutClass={setAboutClass}
        opacity={portfolioOffset / 100}
        scrollOffset={getOffset}
      />
      <Portfolio
        offset={portfolioOffset}
        opacity={1 - portfolioOffset / 100}
        scrollOffset={getOffset}
      />
      <About slideClass={aboutClass} toggleClass={setAboutClass} />
    </div>
  );
};

export default App;
