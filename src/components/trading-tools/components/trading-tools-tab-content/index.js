import React from "react";
import cn from "classnames";

const TradingToolsTabContent = ({ className, img1, img2, title, children }) => (
  <div className={cn("trading-tools-tab-content", className)}>
    <div className="trading-tools-tab-content__image-wrapper">
      <img
        src={img1}
        alt={title}
        className="trading-tools-tab-content__image"
      />
      {img2 && (
        <img
          src={img2}
          alt={title}
          className="trading-tools-tab-content__image"
        />
      )}
    </div>
    <div className="trading-tools-tab-content__text-wrapper">
      <h3 className="trading-tools-tab-content__title">{title}</h3>
      <div className="trading-tools-tab-content__text">{children}</div>
    </div>
  </div>
);

export default TradingToolsTabContent;
