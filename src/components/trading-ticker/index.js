import * as React from 'react';
import { useEffect, useState } from 'react';
import TradingSections, { TRADING_SECTIONS } from './components/trading-sections';
import TradingSymbols from './components/trading-symbols';
import cn from "classnames";

// TO DO remove after provided API
const TRADING_SYMBOLS = [
  {
    id: 1,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 2,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 3,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 4,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 5,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 6,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 7,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 8,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 9,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 10,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  },{
    id: 11,
    name: 'BTCUSD',
    direction: 1,
    bid: 13.22,
    ask: '0.95%',
    spread: 13,
    trend: '0.72%',
  }
];

const TradingTicker = ({className}) => {
  const [selectedSection, setSelectedSection] = useState(TRADING_SECTIONS[0]);
  const [tradingSymbols, setTradingSymbols] = useState(TRADING_SYMBOLS);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // to do remove changing trading symbols
      setTradingSymbols(
        TRADING_SYMBOLS.map(symbol => {
          return {
            ...symbol,
            direction:  new Date().getTime() % 2 === 1 ? 1 : 0,
            bid: new Date().getTime() % 2 === 1 ? 13.22 : 15.66,
            ask: new Date().getTime() % 2 === 1 ? '0.95%' : '0.85%',
            spread: new Date().getTime() % 2 === 1 ? 13 : 12,
            trend: '0.72%',
          }
        })
      )
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, )

  return (
    <section className={cn("trading-ticker-wrapper", className)}>
      <TradingSections
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <TradingSymbols symbols={tradingSymbols}/>
    </section>
  );
};

export default TradingTicker;
