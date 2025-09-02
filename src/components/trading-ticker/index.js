import React, { useEffect, useContext, useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import TradingSymbols from "./components/trading-symbols";
import { getTradingSections } from "../../helpers/config";
// import TradingSections from "./components/trading-sections";
import { filterSymbols } from "../../helpers/services/filter-symbols";
import TradingContext from "../../context/trading-context";
import { io } from "socket.io-client";
import { sendLog } from "../../helpers/services/log-service";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;

const TradingTicker = ({
  className,
  title,
  pageSpecificSection,
  isInfiniteAutoScroll,
  uniqueId = "default",
}) => {
  const tradingSection = getTradingSections();
  const {
    tradingSymbols: globalTradingSymbols,
    selectedSection: globalSelectedSection,
    setSelectedSection: setGlobalSelectedSection,
    setNeedToLoadSymbols: setGlobalNeedToLoadSymbols,
  } = useContext(TradingContext);

  // Local state for section-specific symbols
  const [localTradingSymbols, setLocalTradingSymbols] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // If pageSpecificSection is provided, fetch data independently
    if (pageSpecificSection && API_URL) {
      const newSocket = io(`${API_URL}ws-stocks/`);
      setSocket(newSocket);

      const fetchSectionData = () => {
        try {
          newSocket.emit("stocks", pageSpecificSection.id);
          newSocket.on("reply", (data) => {
            if (data) {
              setLocalTradingSymbols(data);
            }
          });
        } catch (error) {
          sendLog({ message: error.message, type: error.name });
        }
      };

      fetchSectionData();
      const intervalId = setInterval(fetchSectionData, 700);

      return () => {
        clearInterval(intervalId);
        newSocket.disconnect();
      };
    } else {
      // Use global context for homepage (no specific section)
      setGlobalSelectedSection(tradingSection[0]);
      setGlobalNeedToLoadSymbols(true);
      return () => setGlobalNeedToLoadSymbols(false);
    }
  }, [pageSpecificSection]);

  // Get the ordered symbols based on pageSpecificSection or all tradingSection
  const sectionsToUse = pageSpecificSection
    ? [pageSpecificSection]
    : tradingSection;

  // Use local symbols if we have pageSpecificSection, otherwise use global symbols
  const symbolsToUse = pageSpecificSection
    ? localTradingSymbols
    : globalTradingSymbols;

  const orderedSymbols = sectionsToUse
    .map((section) =>
      filterSymbols(symbolsToUse, section.id).map((symbol) => ({
        ...symbol,
        bid: String(symbol.bid),
        ask: String(symbol.ask),
        spread: String(symbol.spread),
      }))
    )
    .flat();

  return (
    <section className={cn("trading-ticker-wrapper", className)}>
      {/* <TradingSections
        tradingSection={tradingSection}
        title={title}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      /> */}
      <TradingSymbols
        symbols={orderedSymbols}
        isInfiniteAutoScroll={isInfiniteAutoScroll}
        uniqueId={uniqueId}
      />
    </section>
  );
};

TradingTicker.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  pageSpecificSection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  isInfiniteAutoScroll: PropTypes.bool,
  uniqueId: PropTypes.string,
};
export default TradingTicker;
