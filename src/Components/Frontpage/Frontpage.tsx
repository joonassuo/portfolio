import React, { useEffect } from "react";
import "./frontpage.css";

interface Props {
  toggleAboutClass: (toggle: string) => void;
  aboutClass: string;
}

const Frontpage: React.FC<Props> = ({ toggleAboutClass, aboutClass }) => {
  useEffect(() => {
    window.scrollTo(0, 1);
  });

  return (
    <div className="frontpage-container">
      <div className="mobile-about">
        <img src="/icons/arrow.png" alt="arrow" id="mobile-about-arrow" />
        <div className="mobile-about-title">about</div>
      </div>
      <div className="mobile-portfolio">
        <div className="mobile-portfolio-title">portfolio</div>
        <img src="/icons/arrow.png" alt="arrow" id="mobile-portfolio-arrow" />
      </div>
      <img id="frontpage-logo" src="/frontpage_logo.png" alt="logo" />
      <div
        className="hide-about-mask"
        onClick={() => {
          if (aboutClass === "slide-in") toggleAboutClass("slide-out");
        }}
      ></div>
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
