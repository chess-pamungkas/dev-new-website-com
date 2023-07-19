import React, { createContext, useEffect, useState } from "react";
import { getTradingSections } from "../../helpers/config";
import { io } from "socket.io-client";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;
const TradingContext = createContext({});
const socket = io(`${API_URL}ws-stocks/`);

export const TradingProvider = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState(
    getTradingSections()[0]
  );
  const [tradingSymbols, setTradingSymbols] = useState([]);
  const [needToLoadSymbols, setNeedToLoadSymbols] = useState(false);

  useEffect(() => {
    let intervalId = undefined;
    if (needToLoadSymbols) {
      intervalId = setInterval(() => {
        try {
          if (API_URL) {
            socket.emit("stocks", selectedSection.id);
            socket.on("reply", (data) => {
              if (data) setTradingSymbols(data);
            });
          }
        } catch (e) {
          console.log(e);
        }
      }, 700);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [selectedSection, needToLoadSymbols]);

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

export default TradingContext;
