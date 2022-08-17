import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getMarketingParamsFromUrl } from "../../helpers/services/marketing-service";

export const MarketingContext = createContext({});

export const MarketingContextProvider = ({ children }) => {
  const [params, setParams] = useState({});

  useEffect(() => {
    if (window !== undefined) {
      setParams(getMarketingParamsFromUrl());
    }
  }, []);

  return (
    <MarketingContext.Provider value={params}>
      {children}
    </MarketingContext.Provider>
  );
};
