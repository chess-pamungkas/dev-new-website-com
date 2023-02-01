import React, { useEffect, useState } from "react";
import axios from "axios";
import cn from "classnames";
import TradingSymbols from "./components/trading-symbols";
import {
  CYSEC_TRADING_SECTIONS,
  FSA_TRADING_SECTIONS,
} from "../../helpers/config";
import TradingSections from "./components/trading-sections";
import { useEntityPostfix } from "../../helpers/use-entity-postfix";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;

const TradingTicker = ({
  className,
  title,
  pageSpecificSection,
  isInfiniteAutoScroll,
  tradingSymbols,
  setTradingSymbols,
}) => {
  const [tradingSection, setTradingSection] = useState(CYSEC_TRADING_SECTIONS);
  const [selectedSection, setSelectedSection] = useState(
    CYSEC_TRADING_SECTIONS[0]
  );

  const { isCySEC } = useEntityPostfix();

  useEffect(() => {
    if (isCySEC) {
      setTradingSection(CYSEC_TRADING_SECTIONS);
      setSelectedSection(pageSpecificSection || CYSEC_TRADING_SECTIONS[0]);
    } else {
      setTradingSection(FSA_TRADING_SECTIONS);
      setSelectedSection(pageSpecificSection || FSA_TRADING_SECTIONS[0]);
    }
  }, [isCySEC, pageSpecificSection]);

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
        symbols={tradingSymbols}
        isInfiniteAutoScroll={isInfiniteAutoScroll}
      />
    </section>
  );
};

export default TradingTicker;
