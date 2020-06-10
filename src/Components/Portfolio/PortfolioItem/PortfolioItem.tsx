import React, { useState } from "react";
import "./portfolioItem.css";

interface Props {
  title: string;
  picture: string;
  expertise: Array<string>;
  website?: string;
  code?: string;
}

const PortfolioItem: React.FC<Props> = ({
  title,
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
        <div id="item-title">{title}</div>
        <div className="item-exp-container">
          {expertise.map((exp, index) => {
            return (
              <div id="item-exp" key={index}>
                {"/ " + exp}
              </div>
            );
          })}
        </div>
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
  );
};

export default PortfolioItem;
