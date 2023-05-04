import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { CYSEC_TRADING_SECTIONS } from "../../helpers/config";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;
const TradingContext = createContext({});

export const TradingProvider = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState(
    CYSEC_TRADING_SECTIONS[0]
  );
  const [tradingSymbols, setTradingSymbols] = useState([]);
  const [needToLoadSymbols, setNeedToLoadSymbols] = useState(false);

  useEffect(() => {
    let intervalId = undefined;
    if (needToLoadSymbols) {
      let previousOperation;
      intervalId = setInterval(() => {
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
