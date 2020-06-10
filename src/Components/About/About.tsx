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
        src="/icons/arrow.png"
        alt="back-arrow"
        id="about-back"
        onClick={() => toggleClass("slide-out")}
      />
      <div id="quote">
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minus
        veniam nemo possimus unde? Illum a expedita distinctio minus tempore."
      </div>
      <div id="languages-label-container">
        <div id="languages-label">languages</div>
        <div className="strikethrough"></div>
      </div>
      <div className="languages-container">
        <img
          src="/langs/react.png"
          alt="react"
          id="react-icon"
          className="languages-icon"
        />
        <img
          src="/langs/redux.png"
          alt="redux"
          id="redux-icon"
          className="languages-icon"
        />
        <img
          src="/langs/javascript.png"
          alt="javascript"
          id="javascript-icon"
          className="languages-icon"
        />
        <img
          src="/langs/typescript.png"
          alt="typescript"
          id="typescript-icon"
          className="languages-icon"
        />
        <img
          src="/langs/c.png"
          alt="c"
          id="c-icon"
          className="languages-icon"
        />
        <img
          src="/langs/node.png"
          alt="node"
          id="node-icon"
          className="languages-icon"
        />
      </div>
      <div id="other-tech-label-container">
        <div id="other-tech-label">other tech</div>
        <div className="strikethrough"></div>
      </div>
      <div className="tech-container">
        <img
          src="/tech/aws.png"
          alt="aws"
          id="aws-icon"
          className="tech-icon"
        />
        <img
          src="/tech/mongo.png"
          alt="mongo"
          id="mongo-icon"
          className="tech-icon"
        />
        <img
          src="/tech/docker.png"
          alt="docker"
          id="docker-icon"
          className="tech-icon"
        />
        <img
          src="/tech/linux.png"
          alt="linux"
          id="linux-icon"
          className="tech-icon"
        />
      </div>
    </div>
  );
};

export default About;
