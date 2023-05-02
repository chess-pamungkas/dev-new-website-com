import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import handleClient from "./handle-client";
import { currentEntity } from "../../helpers/entity-resolver";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;
const ClientResolverContext = createContext({});

export const ClientResolverProvider = ({ children }) => {
  const [clientConfig, setClientConfig] = useState({});
  const [isPopupShown, setIsPopupShown] = useState(false);

  useEffect(() => {
    if (currentEntity) {
      axios
        .get(`${API_URL}client-detection?entity=${currentEntity}`)
        .then((response) => {
          setClientConfig(response.data);
          return response.data;
        })
        .then((clientConfig) =>
          handleClient(clientConfig, setIsPopupShown)
        )
        .catch((response) => console.log(response));
    }
  }, [currentEntity]);

  return (
    <ClientResolverContext.Provider
      value={{
        clientConfig,
        isPopupShown,
        setIsPopupShown,
      }}
    >
      {children}
    </ClientResolverContext.Provider>
  );
};

export default ClientResolverContext;
