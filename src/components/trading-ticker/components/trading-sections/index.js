import React, { useState } from "react";
import TradingSectionTitle from "../trading-section-title";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import Dropdown from "../../../shared/dropdown";
import cn from "classnames";

export const TRADING_SECTIONS = [
  {
    id: 1,
    title: "main-trading-ticker-section-crypto",
  },
  {
    id: 2,
    title: "main-trading-ticker-section-forex",
  },
  {
    id: 3,
    title: "main-trading-ticker-section-shares",
  },
  {
    id: 4,
    title: "main-trading-ticker-section-energies",
  },
  {
    id: 5,
    title: "main-trading-ticker-section-commodities",
  },
  {
    id: 6,
    title: "main-trading-ticker-section-indices",
  },
  {
    id: 7,
    title: "main-trading-ticker-section-indices1",
  },
  {
    id: 8,
    title: "main-trading-ticker-section-indices2",
  },
  {
    id: 9,
    title: "main-trading-ticker-section-indices3",
  },
];

const TradingSections = ({
  className,
  selectedSection,
  setSelectedSection,
}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const { isMobile } = useWindowSize();

  return (
    <div className={cn("trading-sections-wrapper", className)}>
      <div className="trading-sections">
        {isMobile ? (
          <Dropdown
            selectedItem={selectedSection}
            items={TRADING_SECTIONS.map((item) => {
              return {
                title: item.title,
                value: item.id,
              };
            })}
            setSelectedItem={(item) => {
              setSelectedSection({
                title: item.title,
                id: item.value,
              });
            }}
            isDropdownShown
            isOpen={isDropdownOpened}
            setIsOpen={setIsDropdownOpened}
          />
        ) : (
          TRADING_SECTIONS.map((section) => (
            <TradingSectionTitle
              key={`tradingSection${section.id}`}
              section={section}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TradingSections;
