import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";

const ProsBlock = ({ className, title, text, icon: Icon, description }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("pros-block", className)}>
      <div className="pros-block__title-wrapper">
        <p className="pros-block__title">{t(title)}</p>
        <p className="pros-block__subtitle">{t(text)}</p>
      </div>
      <div className="pros-block__icon-wrapper">
        <Icon className="pros-block__icon" />
        <div className="pros-block__description">
          {description.map((item) => (
            <div
              key={`career-pros-desc-${stringTransformToKebabCase(item.text)}`}
              className="pros-block__description-block"
            >
              <p className="pros-block__description-title">
                <HighlightedLocalizationText
                  localizationText={item.title}
                  wordsToHighlight={item.titleAccent}
                  primaryClassName="highlighted-in-black"
                  accentClassName="highlighted-in-red"
                />
              </p>
              <p className="pros-block__description-text">
                <HighlightedLocalizationText
                  localizationText={item.text}
                  wordsToHighlight={item.textAccent}
                  primaryClassName="highlighted-in-black"
                  accentClassName="highlighted-in-red"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProsBlock;
