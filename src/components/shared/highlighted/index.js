import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const HighlightedLocalizationText = ({
  localizationText = '',
  wordsToHighlight = '',
  accentClassName = ''
}) => {
  const { t } = useTranslation();

  console.log(localizationText)

  return (
    <>
      {t(localizationText).split(' ').map((word, i, array) => (
        <span className={cn({
          [`${accentClassName}`]: [...t(wordsToHighlight)].includes(String(i + 1))
        })}>
          {word}
          {i !== array.length - 1 && ' '}
        </span>
      ))}
    </>
  );
};

export default HighlightedLocalizationText;
