import React, { useEffect, useState } from "react";
import axios from "axios";
import cn from "classnames";
import TradingSymbols from "./components/trading-symbols";
import {
  CYSEC_TRADING_SECTIONS,
  FSA_TRADING_SECTIONS,
} from "../../helpers/config";
import TradingSections from "./components/trading-sections";
import { filterSymbols } from "../../helpers/services/filter-symbols";
import { isCySEC } from "../../helpers/entity-resolver";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;

const TradingTicker = ({
  className,
  title,
  pageSpecificSection,
  isInfiniteAutoScroll,
  tradingSymbols,
  setTradingSymbols,
  animationDuration,
}) => {
  const tradingSection = isCySEC ? CYSEC_TRADING_SECTIONS: FSA_TRADING_SECTIONS;
  const [selectedSection, setSelectedSection] = useState(
    pageSpecificSection || CYSEC_TRADING_SECTIONS[0]
  );

  [tradingSymbols, setTradingSymbols] = tradingSymbols
    ? [tradingSymbols, setTradingSymbols]
    : useState([]);

  useEffect(() => {
    let previousOperation;
    const intervalId = setInterval(() => {
      try {
        if (API_URL) {
          if (!previousOperation) {
            previousOperation = axios
              .get(`${API_URL}stock-quotes/${selectedSection.id}`)
              .then((response) => {
                setTradingSymbols(response.data);
              })
              .catch((err) => console.error(err))
              .finally(() => (previousOperation = null));
          }
        }
      } catch (e) {
        console.log(e);
      }
    }, 700);

    return () => clearInterval(intervalId);
  }, [selectedSection]);

  return (
    <section className={cn("trading-ticker-wrapper", className)}>
      <TradingSections
        tradingSection={tradingSection}
        title={title}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <TradingSymbols
        symbols={filterSymbols(tradingSymbols, selectedSection.id)}
        isInfiniteAutoScroll={isInfiniteAutoScroll}
        animationDuration={animationDuration}
      />
    </section>
  );
};

export default TradingTicker;
