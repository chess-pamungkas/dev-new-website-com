import React, { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { getTradingSections } from "../../helpers/config";
import { io } from "socket.io-client";
import { sendLog } from "../../helpers/services/log-service";
import { isBrowser } from "../../helpers/services/is-browser";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;
const TradingContext = createContext({});

export const TradingProvider = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState(
    getTradingSections()[0]
  );
  const [tradingSymbols, setTradingSymbols] = useState([]);
  const [needToLoadSymbols, setNeedToLoadSymbols] = useState(false);
  const [socketReady, setSocketReady] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    if (!API_URL || !isBrowser()) {
      return undefined;
    }

    const normalizedUrl = API_URL.endsWith("/")
      ? `${API_URL}ws-stocks/`
      : `${API_URL}/ws-stocks/`;

    try {
      const socketInstance = io(normalizedUrl, {
        transports: ["websocket"],
      });
      socketRef.current = socketInstance;
      setSocketReady(true);

      return () => {
        socketInstance.off("reply");
        socketInstance.disconnect();
        socketRef.current = null;
        setSocketReady(false);
      };
    } catch (error) {
      sendLog({ message: error.message, type: error.name });
      return undefined;
    }
  }, []);

  useEffect(() => {
    const socketInstance = socketRef.current;
    if (!socketInstance || !API_URL || !socketReady) {
      return undefined;
    }

    const fetchData = () => {
      try {
        if (API_URL) {
          socketInstance.emit("stocks", selectedSection.id);
        }
      } catch (error) {
        sendLog({ message: error.message, type: error.name });
      }
    };

    const handleReply = (data) => {
      if (data) setTradingSymbols(data);
    };

    socketInstance.on("reply", handleReply);
    fetchData(); // Initial fetch

    let intervalId;
    if (needToLoadSymbols) {
      intervalId = setInterval(fetchData, 700);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      socketInstance.off("reply", handleReply);
    };
  }, [selectedSection?.id, needToLoadSymbols, socketReady]);

  return (
    <TradingContext.Provider
      value={{
        selectedSection,
        setSelectedSection,
        tradingSymbols,
        setTradingSymbols,
        needToLoadSymbols,
        setNeedToLoadSymbols,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

TradingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default TradingContext;
