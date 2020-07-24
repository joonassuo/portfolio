import React, { useEffect, useState } from "react";
import RandomLine from "./RandomLine/RandomLine";
import "./frontpage.css";

interface Props {
  toggleAboutClass: (toggle: string) => void;
  portfolioIndex: number | null;
}

interface Line {
  maxHeight: number;
  position: number;
  speed: number;
}

const getRandomNumber: Function = (min: number, max: number): number => {
  return min + Math.random() * (max - min);
};

const Frontpage: React.FC<Props> = ({ toggleAboutClass, portfolioIndex }) => {
  const [lines, setLines] = useState<Array<Line>>([]);

  useEffect(() => {
    window.scrollTo(0, 1);
    var lineArray: Array<Line> = [];
    for (let i = 0; i < 400; i++) {
      var line = {
        maxHeight: getRandomNumber(812, 812),
        position: getRandomNumber(0, 100),
        speed: getRandomNumber(2, 2),
      };
      lineArray.push(line);
    }
    setLines(lineArray);
    console.log(lineArray);
  }, []);

  return (
    <div className="frontpage-container">
      {lines.map((line) => {
        setTimeout(() => {}, 500);

        return (
          <RandomLine
            maxHeight={line.maxHeight}
            position={line.position}
            speed={line.speed}
          />
        );
      })}
      <img id="frontpage-logo" src="/frontpage_logo.png" alt="logo" />
      <div className="links-container">
        <img
          src="/social/github.png"
          alt="github"
          className="social-link"
          id="github-icon"
        />
        <img
          src="/social/linkedin.png"
          alt="linkedin"
          className="social-link"
          id="linkedin-icon"
        />
        <img
          src="/social/email.png"
          alt="email"
          className="social-link"
          id="email-icon"
        />
      </div>
      <div
        id="about"
        onClick={() => {
          toggleAboutClass("slide-in");
        }}
      >
        About
      </div>
      <img src="/icons/arrow.png" alt="arrow" id="scroll-arrow" />
    </div>
  );
};

export default Frontpage;
