import TradingSectionTitle from "../trading-section-title";
import * as React from "react";

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

const TradingSections = ({ selectedSection, setSelectedSection }) => {
  return (
    <div className="trading-sections-wrapper">
      <div className="trading-sections">
        {TRADING_SECTIONS.map((section) => (
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

export default TradingSections;
