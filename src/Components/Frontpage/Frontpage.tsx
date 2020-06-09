import React from "react";
import "./frontpage.css";

interface Props {
  toggleAbout: (toggle: boolean) => void;
  toggleAboutClass: (toggle: string) => void;
}

const Frontpage: React.FC<Props> = ({ toggleAbout, toggleAboutClass }) => {
  return (
    <div className="frontpage-container">
      <div className="title-container">
        <div id="name">JOONAS SUONPERÄ</div>
        <div id="legend">Full-Stack Developer</div>
        <div className="links-container">
          <img
            src="/github.png"
            alt="github"
            className="social-link"
            id="github-icon"
          />
          <img
            src="/linkedin.png"
            alt="linkedin"
            className="social-link"
            id="linkedin-icon"
          />
          <img
            src="/email.png"
            alt="email"
            className="social-link"
            id="email-icon"
          />
        </div>
      </div>
      <div
        id="about"
        onClick={() => {
          toggleAbout(true);
          toggleAboutClass("slide-in");
        }}
      >
        About
      </div>
      <div id="contact">Contact</div>
      <img src="/arrow.png" alt="arrow" id="scroll-arrow" />
    </div>
  );
};

export default Frontpage;
