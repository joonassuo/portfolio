import React, { useState } from "react";
import Frontpage from "./Components/Frontpage/Frontpage";
import About from "./Components/About/About";

const App: React.FC = () => {
  const [aboutClass, setAboutClass] = useState<string>("");

  return (
    <div className="App">
      <Frontpage toggleAboutClass={setAboutClass} />
      <About slideClass={aboutClass} toggleClass={setAboutClass} />
    </div>
  );
};

export default App;
