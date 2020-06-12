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
  return (
    <div className={slideClass + " portfolio-item-container"}>
      <img src={picture} alt="screenshot" id="item-image" />
    </div>
  );
};

export default PortfolioItem;
