import React, { useState, useRef, useEffect } from "react";
import "./portfolioItem.css";

interface Props {
  index: number;
  slideClass: string;
  title: string;
  legend: string;
  picture: string;
  expertise: Array<string>;
  stack: Array<string>;
  description: string;
  website?: string;
  code?: string;
  style?: string;
  client: string;
}

const PortfolioItem: React.FC<Props> = ({
  index,
  slideClass,
  title,
  legend,
  picture,
  expertise,
  stack,
  description,
  website,
  code,
  style,
  client,
}) => {
  const [slideDetails, setSlideDetails] = useState<string>("");

  // Set styles according to each project
  useEffect(() => {
    if (style) {
      document
        .getElementById("item-image-" + index)
        ?.setAttribute("style", style);
    }
  });

  return (
    <div className={slideClass + " portfolio-item-container"}>
      <div className="portfolio-item-mask">
        <div className="portfolio-item-index">
          {index < 10 ? ".0" + (index + 1) : "." + (index + 1)}
        </div>
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
      <div className="portfolio-item-picture-container">
        <img
          src={picture}
          alt="screenshot"
          className="item-image"
          id={"item-image-" + index}
        />
      </div>
      <div className={slideDetails + " portfolio-item-details"}>
        <div
          className="mask-toggle-info-button"
          onClick={() => setSlideDetails("slide-to-right")}
        >
          <img src="/icons/arrow.png" alt="arrow" id="toggle-back" />
        </div>
        <div className="details-picture-container">
          <img src={picture} alt="screenshot" id="details-image" />
        </div>
        <div className="details-container">
          <div className="details-content">
            <div className="details-left">
              <div className="details-title">CLIENT</div>
              <div className="details-body">{client}</div>
              <div className="details-title">PROJECT</div>
              <div className="details-body">
                {expertise.map((e, i) => {
                  return i > 0 ? " / " + e.toLowerCase() : "" + e.toLowerCase();
                })}
              </div>
              <div className="details-title">STACK</div>
              <div>
                {stack.map((s, i) => {
                  return i > 0 ? " / " + s.toLowerCase() : "" + s.toLowerCase();
                })}
              </div>
            </div>
            <div className="details-right">
              <div className="details-title">DESCRIPTION</div>
              <div className="details-body">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
