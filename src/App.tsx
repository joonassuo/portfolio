import React, { useState } from "react";
import Frontpage from "./Components/Frontpage/Frontpage";
import About from "./Components/About/About";

const App: React.FC = () => {
  const [aboutClass, setAboutClass] = useState<string>("slide-out");
  const [showAbout, setShowAbout] = useState<boolean>(false);

  return (
    <div className="App">
      <Frontpage toggleAbout={setShowAbout} toggleAboutClass={setAboutClass} />
      {showAbout ? (
        <About slideClass={aboutClass} toggleClass={setAboutClass} />
      ) : null}
    </div>
  );
};

export default App;
