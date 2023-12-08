import React from "react";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import { Logo } from "../../../shared/icons";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";

const ProsBlock = ({ className, title, titleAccent, text }) => {
  const { t } = useTranslationWithVariables();

  return (
    <div className={cn("pros-block", className)}>
      <Logo className="pros-block__icon" />
      <p className="pros-block__title">
        <HighlightedLocalizationText
          localizationText={title}
          wordsToHighlight={titleAccent}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </p>
      <p className="pros-block__text">
        {text.map((item, index) => (
          <span
            key={`${stringTransformToKebabCase(title)}-desc-${index}`}
            className="display-block"
          >
            {t(item)}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ProsBlock;
