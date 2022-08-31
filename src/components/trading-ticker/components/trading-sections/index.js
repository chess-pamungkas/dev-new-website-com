import React, { useState } from "react";
import TradingSectionTitle from "../trading-section-title";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import Dropdown from "../../../shared/dropdown";
import cn from "classnames";

// TODO: move constant to helpers
export const TRADING_SECTIONS = [
  {
    id: 1,
    title: "index_trading-ticker-section1",
  },
  {
    id: 2,
    title: "index_trading-ticker-section2",
  },
  {
    id: 3,
    title: "index_trading-ticker-section3",
  },
  {
    id: 4,
    title: "index_trading-ticker-section4",
  },
  {
    id: 5,
    title: "index_trading-ticker-section5",
  },
  {
    id: 6,
    title: "index_trading-ticker-section6",
  },
  {
    id: 7,
    title: "index_trading-ticker-section7",
  },
  {
    id: 8,
    title: "index_trading-ticker-section8",
  },
  {
    id: 9,
    title: "index_trading-ticker-section9",
  },
];

const TradingSections = ({
  className,
  title,
  selectedSection,
  setSelectedSection,
}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const { isMobile } = useWindowSize();

  return (
    <div className={cn("trading-sections-wrapper", className)}>
      {title ? (
        <div className="trading-sections">
          <h4 className="trading-sections__header">{title}</h4>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default TradingSections;
