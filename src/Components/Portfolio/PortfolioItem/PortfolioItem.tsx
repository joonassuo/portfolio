import React, { useState } from "react";
import "./portfolioItem.css";

interface Props {
  index: number;
  slideClass: string;
  title: string;
  legend: string;
  picture: string;
  expertise: Array<string>;
  website?: string;
  code?: string;
}

const PortfolioItem: React.FC<Props> = ({
  index,
  slideClass,
  title,
  legend,
  picture,
  expertise,
  website,
  code,
}) => {
  const [slideDetails, setSlideDetails] = useState<string>("");

  return (
    <div className={slideClass + " portfolio-item-container"}>
      <div className="portfolio-item-mask">
        <div className="mask-expertise">
          {expertise.map((e, i) => {
            return i > 0 ? " / " + e.toUpperCase() : "" + e.toUpperCase();
          })}
        </div>
        <div className="title-legend-container">
          <div className="mask-title">{title.toUpperCase()}</div>
          <div className="mask-legend">{legend.toUpperCase()}</div>
        </div>
        <div
          className="mask-toggle-info-button"
          onClick={() => setSlideDetails("slide-from-right")}
        >
          <img src="/icons/arrow.png" alt="arrow" />
        </div>
      </div>
      <img src={picture} alt="screenshot" id="item-image" />
      <div className={slideDetails + " portfolio-item-details"}>
        <div
          className="mask-toggle-info-button"
          onClick={() => setSlideDetails("slide-to-right")}
        >
          <img src="/icons/arrow.png" alt="arrow" id="toggle-back" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
