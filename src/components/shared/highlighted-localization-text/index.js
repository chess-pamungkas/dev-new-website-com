import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { stringTransformToKebabCase } from "../../../helpers/services/string-service";

const HighlightedLocalizationText = ({
  localizationText = '',
  wordsToHighlight = '',
  accentClassName = ''
}) => {
  const { t } = useTranslation();

  return (
    <>
      {t(localizationText).split(' ').map((word, i, array) => (
        <span
          key={`highlighted-localization-text-${stringTransformToKebabCase(word)}`}
          className={cn({
            [`${accentClassName}`]: [...t(wordsToHighlight)].includes(String(i + 1))
          })}
        >
          {word}
          {i !== array.length - 1 && ' '}
        </span>
      ))}
    </>
  );
};

export default HighlightedLocalizationText;
