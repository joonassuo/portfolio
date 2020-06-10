import React from "react";
import "./frontpage.css";

interface Props {
  toggleAboutClass: (toggle: string) => void;
  scrollOffset: (direction: number) => void;
  opacity: number;
}

const Frontpage: React.FC<Props> = ({
  toggleAboutClass,
  scrollOffset,
  opacity,
}) => {
  return (
    <div
      className="frontpage-container"
      style={{ opacity: opacity }}
      onWheel={(e) => scrollOffset(e.deltaY)}
    >
      <div className="title-container">
        <div id="name">JOONAS SUONPERÄ</div>
        <div id="legend">Full-Stack Developer</div>
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
      </div>
      <div
        id="about"
        onClick={() => {
          toggleAboutClass("slide-in");
        }}
      >
        About
      </div>
      <div id="contact">Contact</div>
      <img src="/icons/arrow.png" alt="arrow" id="scroll-arrow" />
    </div>
  );
};

export default Frontpage;
