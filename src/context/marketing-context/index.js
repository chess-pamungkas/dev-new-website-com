import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { isBrowser } from "../../helpers/services/is-browser";
import { getMarketingParamsFromUrl } from "../../helpers/services/marketing-service";

export const MarketingContext = createContext({});

export const MarketingContextProvider = ({ children }) => {
  const [params, setParams] = useState({});

  useEffect(() => {
    if (isBrowser()) {
      setParams(getMarketingParamsFromUrl());
    }
  }, []);

  return (
    <MarketingContext.Provider value={params}>
      {children}
    </MarketingContext.Provider>
  );
};
