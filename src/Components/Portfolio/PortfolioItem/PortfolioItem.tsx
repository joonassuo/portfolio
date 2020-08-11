import React, { useState, useRef, SetStateAction } from "react";
import "./portfolioItem.css";
import Div100vh from "react-div-100vh";

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
  client: string;
  setShowSpinner: React.Dispatch<SetStateAction<boolean>>;
  setPortfolioIndex: React.Dispatch<SetStateAction<number | null>>;
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
  client,
  setShowSpinner,
  setPortfolioIndex,
}) => {
  const [slideDetails, setSlideDetails] = useState<string>("");
  const mobileTouchX = useRef<number>(0);
  const mobileTouchY = useRef<number>(0);

  return (
    <Div100vh
      className={slideClass + " portfolio-item-container"}
      // Close details on wheel if necessary
      onWheel={(e) => {
        if (slideDetails === "slide-from-right")
          setSlideDetails("slide-to-right");
      }}
      // MOBILE TOUCH EVENTS
      onTouchStart={(e) => {
        // Store touch start X and Y coords in ref
        mobileTouchX.current = e.changedTouches[0].clientX;
        mobileTouchY.current = e.changedTouches[0].clientY;
      }}
      onTouchEnd={(e) => {
        // Get end coordinates for touch end X and Y
        let touchEndX = e.changedTouches[0].clientX;
        let touchEndY = e.changedTouches[0].clientY;
        let deltaX = mobileTouchX.current - touchEndX;
        let deltaY = mobileTouchY.current - touchEndY;
        let directionX = deltaX > 0 ? 1 : -1;

        // If enough swipe, slide view
        if (Math.abs(deltaX) > 60) {
          directionX === 1
            ? setSlideDetails("slide-from-right")
            : setSlideDetails("slide-to-right");
        }
        if (Math.abs(deltaY) > 60 && slideDetails === "slide-from-right") {
          setSlideDetails("slide-to-right");
        }
      }}
    >
      <img
        className="to-top-button"
        src="/icons/close.png"
        alt="close"
        onClick={() => {
          setShowSpinner(true);
          setPortfolioIndex(-1);
          setTimeout(() => {
            setShowSpinner(false);
          }, 1000);
        }}
      />
      <div className="portfolio-item-mask">
        <div className="portfolio-item-index">
          {index < 10 ? ".0" + (index + 1) : "." + (index + 1)}
        </div>
        <div className="line-appear" id="line"></div>
        <div className="mask-expertise animate-appear">
          {expertise.map((e, i) => {
            return i > 0 ? " / " + e : "" + e;
          })}
        </div>
        <div className="title-legend-container">
          <div className="mask-title animate-spacing" id="title">
            {title.toUpperCase()}
          </div>
          <div className="mask-legend animate-appear">
            {legend.toUpperCase()}
          </div>
        </div>
        <div
          className="mask-toggle-info-button animate-appear"
          onClick={() => setSlideDetails("slide-from-right")}
        >
          <img src="/icons/arrow-white.png" alt="arrow" />
        </div>
      </div>
      <div className="portfolio-item-picture-container">
        <img
          src={picture}
          alt="screenshot"
          className="item-image"
          id={"item-image-" + title.toLowerCase()}
        />
      </div>
      <div className={slideDetails + " portfolio-item-details"}>
        <div
          className="mask-toggle-info-button"
          onClick={() => setSlideDetails("slide-to-right")}
        >
          <img src="/icons/arrow-white.png" alt="arrow" id="toggle-back" />
        </div>
        <div className="details-picture-container">
          <img
            src={picture}
            alt="screenshot"
            className="details-image"
            id={"details-image-" + title.toLowerCase()}
          />
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
              <div className="details-body">
                {stack.map((s, i) => {
                  return i > 0 ? " / " + s.toLowerCase() : "" + s.toLowerCase();
                })}
              </div>
            </div>
            <div className="details-right">
              <div className="details-title">DESCRIPTION</div>
              <div className="details-body">{description}</div>
              {website ? (
                <a
                  href={website}
                  className="details-link"
                  id="link-live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              ) : null}
              {code ? (
                <a
                  href={code}
                  className="details-link"
                  id="link-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              ) : null}
            </div>
          </div>
          {/* ------------- MOBILE DETAILS -------------- */}
          <div className="mobile-details-content">
            <div
              className="mask-toggle-info-button"
              onClick={() => setSlideDetails("slide-to-right")}
            >
              <img src="/icons/arrow.png" alt="arrow" id="details-back" />
            </div>
            <div className="mobile-details-description">
              <div className="details-title">DESCRIPTION</div>
              <div className="details-body">{"'" + description + "'"}</div>
            </div>
            <div className="details-line"></div>
            <div className="details-left">
              <div className="details-title">CLIENT</div>
              <div className="details-title">PROJECT</div>
              <div className="details-title">STACK</div>
              {website ? <div className="details-title">LIVE</div> : null}
              {code ? <div className="details-title">CODE</div> : null}
            </div>
            <div className="details-right">
              <div className="details-body">{client}</div>
              <div className="details-body">
                {expertise.map((e, i) => {
                  return i > 0 ? " / " + e : "" + e;
                })}
              </div>
              <div className="details-body">
                {stack.map((s, i) => {
                  return i > 0 ? " / " + s : "" + s;
                })}
              </div>
              {website ? (
                <a
                  href={website}
                  className="details-link details-body"
                  id="link-live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website.replace(/https:\/\/|http:\/\//gi, "")}
                </a>
              ) : null}
              {code ? (
                <a
                  href={code}
                  className="details-link details-body"
                  id="link-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {code.replace(/https:\/\/|http:\/\//gi, "")}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Div100vh>
  );
};

export default PortfolioItem;
