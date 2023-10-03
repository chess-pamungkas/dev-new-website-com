import React from "react";
import cn from "classnames";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import { useTranslation } from "gatsby-plugin-react-i18next";

const AdvantageBlock = ({ className, icon: Icon, text, accent, subtext }) => {
  const { i18n } = useTranslation();

  return (
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
      {i18n.language === "jp" &&
        subtext && ( // Conditionally render subtext for Japanese locale
          <p className="advantage-block__text">
            <HighlightedLocalizationText
              localizationText={subtext}
              wordsToHighlight={accent}
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-red"
            />
          </p>
        )}
    </div>
  );
};

export default AdvantageBlock;
