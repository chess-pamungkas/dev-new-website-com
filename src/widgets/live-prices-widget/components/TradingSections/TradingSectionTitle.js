import { useEffect, useState } from "react";
import * as React from "react";
import cn from "classnames";

const TradingSectionTitle = ({
  section,
  selectedSection,
  setSelectedSection,
}) => {
  const [isSelected, setIsSelected] = useState(
    section.id === selectedSection.id
  );

  useEffect(() => {
    setIsSelected(section.id === selectedSection.id);
  }, [selectedSection]);

  return (
    <div
      className={cn("trading-section-title", {
        "trading-section-title__active": isSelected,
      })}
      onClick={() => {
        setSelectedSection(section);
      }}
    >
      {section.title}
    </div>
  );
};

export default TradingSectionTitle;
