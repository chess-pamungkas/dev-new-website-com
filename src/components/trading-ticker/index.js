import React, { useEffect, useContext, useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import TradingSymbols from "./components/trading-symbols";
import { getTradingSections } from "../../helpers/config";
import TradingSections from "./components/trading-sections";
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
  uniqueId,
}) => {
  const tradingSection = getTradingSections();
  const {
    tradingSymbols: globalTradingSymbols,
    selectedSection: globalSelectedSection,
    setSelectedSection,
    setNeedToLoadSymbols,
  } = useContext(TradingContext);

  // Local state for page-specific sections (like in all-markets page)
  const [localTradingSymbols, setLocalTradingSymbols] = useState([]);
  const [localSelectedSection, setLocalSelectedSection] = useState(
    pageSpecificSection || tradingSection[0]
  );

  // Determine if this is a page-specific ticker or homepage ticker
  const isHomepage = !title && !pageSpecificSection;
  const isPageSpecific = !!pageSpecificSection;

  // For page-specific sections, fetch their own data
  useEffect(() => {
    if (!isPageSpecific) {
      // Homepage ticker - use global context
      setSelectedSection(tradingSection[0]);
      setNeedToLoadSymbols(true);
      return () => setNeedToLoadSymbols(false);
    }

    // Page-specific ticker - use local socket connection
    const socket = io(`${API_URL}ws-stocks/`);

    const fetchData = () => {
      try {
        if (API_URL && pageSpecificSection) {
          socket.emit("stocks", pageSpecificSection.id);
          socket.on("reply", (data) => {
            if (data) setLocalTradingSymbols(data);
          });
        }
      } catch (error) {
        sendLog({ message: error.message, type: error.name });
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 700);

    return () => {
      clearInterval(intervalId);
      socket.disconnect();
    };
  }, [pageSpecificSection?.id]);

  // Determine which symbols and section to use
  const symbols = isPageSpecific ? localTradingSymbols : globalTradingSymbols;
  const selectedSection = isPageSpecific
    ? localSelectedSection
    : globalSelectedSection;

  return (
    <section className={cn("trading-ticker-wrapper", className)}>
      {isHomepage && (
        <TradingSections
          tradingSection={tradingSection}
          title={title}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      )}
      <TradingSymbols
        symbols={filterSymbols(symbols, selectedSection.id)}
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
