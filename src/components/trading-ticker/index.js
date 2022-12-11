import React, { useEffect, useState } from "react";
import TradingSymbols from "./components/trading-symbols";
import cn from "classnames";
import {
  CYSEC_TRADING_SECTIONS,
  FSA_TRADING_SECTIONS,
} from "../../helpers/config";
import TradingSections from "./components/trading-sections";
import { useEntityPostfix } from "../../helpers/use-entity-postfix";

// TO DO remove after provided API
const TRADING_SYMBOLS = [
  {
    id: 1,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 2,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 3,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 4,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 5,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 6,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 7,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 8,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 9,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 10,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
  {
    id: 11,
    name: "BTCUSD",
    direction: 1,
    bid: 13.22,
    ask: "0.95%",
    spread: 13,
    trend: "0.72%",
  },
];

const TradingTicker = ({ className, title }) => {
  const [tradingSection, setTradingSection] = useState(CYSEC_TRADING_SECTIONS);
  const [selectedSection, setSelectedSection] = useState(
    CYSEC_TRADING_SECTIONS[0]
  );
  const [tradingSymbols, setTradingSymbols] = useState(TRADING_SYMBOLS);

  const { isCySEC } = useEntityPostfix();

  useEffect(() => {
    if (isCySEC) {
      setTradingSection(CYSEC_TRADING_SECTIONS);
      setSelectedSection(CYSEC_TRADING_SECTIONS[0]);
    } else {
      setTradingSection(FSA_TRADING_SECTIONS);
      setSelectedSection(FSA_TRADING_SECTIONS[0]);
    }
  }, [isCySEC]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // to do remove changing trading symbols
      setTradingSymbols(
        TRADING_SYMBOLS.map((symbol) => {
          return {
            ...symbol,
            direction: new Date().getTime() % 2 === 1 ? 1 : 0,
            bid: new Date().getTime() % 2 === 1 ? 13.22 : 15.66,
            ask: new Date().getTime() % 2 === 1 ? "0.95%" : "0.85%",
            spread: new Date().getTime() % 2 === 1 ? 13 : 12,
            trend: "0.72%",
          };
        })
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <section className={cn("trading-ticker-wrapper", className)}>
      <TradingSections
        tradingSection={tradingSection}
        title={title}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <TradingSymbols symbols={tradingSymbols} />
    </section>
  );
};

export default TradingTicker;
