import React from "react";
import "./about.css";

interface Props {
  slideClass: string;
  toggleClass: (aboutClass: string) => void;
}

const About: React.FC<Props> = ({ slideClass, toggleClass }) => {
  return (
    <div id="about-container" className={slideClass}>
      <div className="about-title">.about</div>
      <div className="about-description">
        A web-designer and full-stack developer from Helsinki, Finland. Master
        of Science and student at Hive Helsinki.
        <br />
        <br />
        Always on the lookout for new and exciting projects - please don't
        hesitate to contact me for enquiries.
      </div>
      <div className="about-line"></div>
      <div className="about-stack-container">
        <div className="stack-left">
          <div className="stack-title">STACK</div>
          <div className="stack">
            c<br />
            html & css
            <br />
            javascript
            <br />
            nodejs
            <br />
            react
            <br />
            redux
            <br />
            typescript
          </div>
        </div>
        <div className="stack-right">
          <div className="stack-title">TECH</div>
          <div className="tech">
            aws
            <br />
            docker
            <br />
            linux
            <br />
            mongodb
          </div>
        </div>
      </div>
      <div className="about-links-container">
        <a
          href="https://github.com/joonassuo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/social/github.png"
            alt="github"
            className="social-link"
            id="github-icon"
          />
        </a>
        <a
          href="https://linkedin.com/in/joonassuonpera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/social/linkedin.png"
            alt="linkedin"
            className="social-link"
            id="linkedin-icon"
          />
        </a>
        <a href="mailto:joonas.suonpera@gmail.com">
          <img
            src="/social/email.png"
            alt="email"
            className="social-link"
            id="email-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
