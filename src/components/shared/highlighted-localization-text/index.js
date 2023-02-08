import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const HighlightedLocalizationText = ({
  localizationText = "",
  wordsToHighlight = "",
  primaryClassName = "",
  accentClassName = "",
  children,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {t(localizationText)
        .split(" ")
        .map((word, i, array) => {
          const isWordHighlighted = t(wordsToHighlight)
            .split(",")
            .includes(String(i + 1));

          return (
            <span
              key={`highlighted-localization-text-${i}`}
              className={cn(
                { [`${accentClassName}`]: isWordHighlighted },
                {
                  [`${primaryClassName}`]:
                    !isWordHighlighted && primaryClassName,
                }
              )}
            >
              {word}
              {i !== array.length - 1 && " "}
            </span>
          );
        })}

      {children}
    </>
  );
};

export default HighlightedLocalizationText;
