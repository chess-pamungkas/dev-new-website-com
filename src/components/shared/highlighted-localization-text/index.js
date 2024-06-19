import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";

const HighlightedLocalizationText = ({
  localizationText = "",
  wordsToHighlight = "",
  primaryClassName = "",
  accentClassName = "",
  children,
}) => {
  const { t } = useTranslationWithVariables();

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

HighlightedLocalizationText.propTypes = {
  localizationText: PropTypes.string,
  wordsToHighlight: PropTypes.string,
  primaryClassName: PropTypes.string,
  accentClassName: PropTypes.string,
  children: PropTypes.node,
};
export default HighlightedLocalizationText;
