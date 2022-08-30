import * as React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TradingSectionTitle = ({
  section,
  selectedSection,
  setSelectedSection,
  className,
}) => {
  const { t } = useTranslation();

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
