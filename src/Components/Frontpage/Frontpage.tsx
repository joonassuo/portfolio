import React, { useEffect, useState } from "react";
import RandomLine from "./RandomLine/RandomLine";
import "./frontpage.css";

interface Props {
  toggleAboutClass: (toggle: string) => void;
  portfolioIndex: number | null;
}

interface Line {
  maxWidth: number;
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
    for (let i = 0; i < 15; i++) {
      var line = {
        maxWidth: getRandomNumber(30, 500),
        position: getRandomNumber(0, 100),
        speed: getRandomNumber(100, 500),
      };
      lineArray.push(line);
    }
    setLines(lineArray);
    console.log(lineArray);
  }, []);

  return (
    <div className="frontpage-container">
      {lines.map((line) => {
        return (
          <RandomLine
            maxWidth={line.maxWidth}
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
