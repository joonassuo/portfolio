import React, { useState } from "react";
import "./portfolioItem.css";

interface Props {
  index: number;
  title: string;
  legend: string;
  picture: string;
  expertise: Array<string>;
  website?: string;
  code?: string;
}

const PortfolioItem: React.FC<Props> = ({
  index,
  title,
  legend,
  picture,
  expertise,
  website,
  code,
}) => {
  const [showImage, setShowImage] = useState<boolean>(true);

  return (
    <div className="portfolio-item-container">
      <img
        style={{ opacity: showImage ? 1 : 0 }}
        src={picture}
        alt="screenshot"
        id="item-image"
        onMouseEnter={() => setShowImage(false)}
        onMouseLeave={() => setShowImage(true)}
      />
      <div id="item-info-container">
        <div id="item-title">
          .0{index + 1} {title}
        </div>
        <div id="item-legend">{legend}</div>
        <div className="item-exp-container">
          {expertise.map((exp, index) => {
            return (
              <div id="item-exp" key={index}>
                {"/ " + exp}
              </div>
            );
          })}
        </div>
        <div className="portfolio-links-container">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            id="item-website-link"
          >
            Website
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            id="item-code-link"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
