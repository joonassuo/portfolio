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
        A web-designer and full-stack developer from Helsinki, Finland. Working
        as a Freelancer.
        <br />
        <br />
        Always on the lookout for new and exciting projects - please don't
        hesitate to contact me for business enquiries.
      </div>
      <div className="about-links-container">
        <a
          href="https://github.com/joonassuo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="shit" src="/social/github.png" alt="github" />
        </a>
        <a
          href="https://linkedin.com/in/joonassuonpera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="shit" src="/social/linkedin.png" alt="linkedin" />
        </a>
        <a href="mailto:joonas.suonpera@gmail.com">
          <img className="shit" src="/social/email.png" alt="email" />
        </a>
      </div>
      <div className="about-line"></div>

      <div className="about-stack-container">
        <div className="stack-left">
          <div className="stack-title">TECH</div>
          <div className="stack">
            angular
            <br />
            c<br />
            graphQL
            <br />
            html & css
            <br />
            javascript
            <br />
            nodeJS
            <br />
            postgreSQL
            <br />
            python
            <br />
            react & redux
            <br />
            react native
            <br />
            typescript
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
