import React from "react";
import cn from "classnames";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";

const HowToStartItem = ({ className, icon, text, accent }) => {
  return (
    <div className={cn("partners-start-item", className)}>
      <img src={icon} alt="" className="partners-start-item__icon" />
      <p className="partners-start-item__text">
        <HighlightedLocalizationText
          localizationText={text}
          wordsToHighlight={accent}
          primaryClassName="highlighted-in-white"
          accentClassName="highlighted-in-red"
        />
      </p>
    </div>
  );
};

export default HowToStartItem;
