import * as React from "react";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";

const TradingSectionTitle = ({
  section,
  selectedSection,
  setSelectedSection,
  className,
}) => {
  const { t } = useTranslationWithVariables();

  return (
    <div
      className={cn(
        "trading-section-title",
        {
          "trading-section-title__active": section.id === selectedSection.id,
        },
        className
      )}
      onClick={() => {
        setSelectedSection(section);
      }}
      role="presentation"
    >
      {t(section.title)}
    </div>
  );
};

export default TradingSectionTitle;
