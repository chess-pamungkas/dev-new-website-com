import TradingSectionTitle from './TradingSectionTitle';
import * as React from 'react';

export const TRADING_SECTIONS = [{
  id: 1,
  title: 'Crypto'
}, {
  id: 2,
  title: 'Forex'
}, {
  id: 3,
  title: 'Shares'
}, {
  id: 4,
  title: 'Energies'
}, {
  id: 5,
  title: 'Commodities'
}, {
  id: 6,
  title: 'Indices'
}];

const TradingSections = ({
  selectedSection,
  setSelectedSection
}) => {
  return (
    <div className="live-prices-sections">
      {TRADING_SECTIONS.map(section =>
        <TradingSectionTitle
          key={`livePricesSection${section.id}`}
          section={section}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      )}
    </div>
  )
}

export default TradingSections