import React from "react";
import "./indexsidebar.css";

interface Props {
  portfolioIndex: number | null;
}

const IndexSidebar: React.FC<Props> = ({ portfolioIndex }) => {
  const indexes = [];
  for (let i = 0; i < 13; i++) {
    indexes.push(i);
  }

  return (
    <div className="index-sidebar-container">
      {indexes.map((i) => {
        return (
          <div
            className="index-number"
            style={{
              color: portfolioIndex === i ? "orange" : "lightgray",
            }}
          >
            {i < 10 ? ".0" + i : "." + i}
          </div>
        );
      })}
    </div>
  );
};

export default IndexSidebar;
