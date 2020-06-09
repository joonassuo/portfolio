import React from "react";
import "./about.css";

interface Props {
  slideClass: string;
  toggleClass: (aboutClass: string) => void;
}

const About: React.FC<Props> = ({ slideClass, toggleClass }) => {
  return (
    <div id="about-container" className={slideClass}>
      <img
        src="/arrow.png"
        alt="back-arrow"
        id="about-back"
        onClick={() => toggleClass("slide-out")}
      />
    </div>
  );
};

export default About;
