import React from "react";
import cn from "classnames";
import HighlightedLocalizationText from '../../../shared/highlighted-localization-text';

const AdvantageBlock = ({
  className,
  icon: Icon,
  text,
  accent
}) => (
  <div className={cn("advantage-block", className)}>
    <div className="advantage-block__icon-wrapper">
      <Icon className="advantage-block__icon" />
    </div>
    <p className="advantage-block__text">
      <HighlightedLocalizationText
        localizationText={text}
        wordsToHighlight={accent}
        primaryClassName="highlighted-in-black"
        accentClassName="highlighted-in-red"
      />
    </p>
  </div>
);

export default AdvantageBlock;
