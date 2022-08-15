import React, { useState } from "react";
import TradingSectionTitle from "../trading-section-title";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import TradingSectionDropdown from "../trading-section-dropdown";
import cn from "classnames";

export const TRADING_SECTIONS = [
  {
    id: 1,
    title: "Crypto",
  },
  {
    id: 2,
    title: "Forex",
  },
  {
    id: 3,
    title: "Shares",
  },
  {
    id: 4,
    title: "Energies",
  },
  {
    id: 5,
    title: "Commodities",
  },
  {
    id: 6,
    title: "Indices",
  },
  {
    id: 7,
    title: "Indices1",
  },
  {
    id: 8,
    title: "Indices2",
  },
  {
    id: 9,
    title: "Indices3",
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
          <TradingSectionDropdown
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
