import React from "react";
import cn from "classnames";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import { useTranslation } from "gatsby-plugin-react-i18next";

const SwapFreeAdvantageItem = ({
  className,
  icon,
  title,
  titleAccent,
  titleObject,
}) => {
  const { t } = useTranslation();
  return (
    <div className={cn("swap-free-advantage-item", className)}>
      <img src={icon} alt="" className="swap-free-advantage-item__icon" />
      {title && (
        <p className="swap-free-advantage-item__title">
          <HighlightedLocalizationText
            localizationText={title}
            wordsToHighlight={titleAccent}
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-red"
          />
        </p>
      )}
      {titleObject && (
        <p className="swap-free-advantage-item__title">
          {t(titleObject.p1)}&nbsp;
          <a href={titleObject.link} target="_blank" rel="noreferrer">
            {t(titleObject.linkText)}
          </a>
          &nbsp;
          {t(titleObject.p2)}
        </p>
      )}
    </div>
  );
};

export default SwapFreeAdvantageItem;
