import TradingSectionTitle from "../trading-section-title";
import * as React from "react";


const TradingSectionDropdown = ({ sections, selectedSection, setSelectedSection }) => {
  return (
    <div className="trading-section-dropdown">
      <div className="trading-sections">
        {sections.map((section) => (
          <TradingSectionTitle
            key={`tradingSection${section.id}`}
            section={section}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        ))}
      </div>
    </div>
  );
};

export default TradingSectionDropdown;
