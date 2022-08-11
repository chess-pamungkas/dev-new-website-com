import * as React from "react";
import cn from "classnames";

const TradingSectionTitle = ({
  section,
  selectedSection,
  setSelectedSection,
  className,
}) => {
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
    >
      {section.title}
    </div>
  );
};

export default TradingSectionTitle;
