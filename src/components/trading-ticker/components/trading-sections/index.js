import React, { useState } from "react";
import TradingSectionTitle from "../trading-section-title";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import Dropdown from "../../../shared/dropdown";
import cn from "classnames";

const TradingSections = ({
  className,
  title,
  selectedSection,
  setSelectedSection,
  tradingSection,
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
              items={tradingSection.map((item) => {
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
            tradingSection.map((section) => (
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