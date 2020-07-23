import React, { useEffect } from "react";
import "./frontpage.css";

interface Props {
  toggleAboutClass: (toggle: string) => void;
  portfolioIndex: number | null;
}

const Frontpage: React.FC<Props> = ({ toggleAboutClass, portfolioIndex }) => {
  useEffect(() => {
    window.scrollTo(0, 1);
  });

  return (
    <div
      className={
        portfolioIndex === null
          ? "test frontpage-container"
          : "frontpage-container"
      }
    >
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
