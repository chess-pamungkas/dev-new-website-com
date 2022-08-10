import * as React from 'react';
import { useState } from 'react';

import './styles.scss';
import TradingSymbols from './components/TradingSymbols';
import TradingSections, { TRADING_SECTIONS } from './components/TradingSections';


const LivePrices = ({children}) => {
  return (
    <div className="live-prices-wrapper">{children}</div>
  )
}

const LivePricesWidget = () => {
  const [selectedSection, setSelectedSection] = useState(TRADING_SECTIONS[0]);

  return (
      <LivePrices>
        <TradingSections
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <TradingSymbols symbols={[
          {
            id: 1,
            name: 'BTCUSD',
            direction: 1,
            bid: 13.22,
            ask: '0.95%',
            spread: 13,
            trend: '0.72%',
          }
        ]}/>
      </LivePrices>
  );
};

export default LivePricesWidget;
