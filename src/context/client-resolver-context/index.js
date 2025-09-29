import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import handleClient from "./handle-client";
import { currentEntity } from "../../helpers/entity-resolver";
import { sendLog } from "../../helpers/services/log-service";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;
const ClientResolverContext = createContext({});

export const ClientResolverProvider = ({ children }) => {
  const [clientConfig, setClientConfig] = useState({});
  const [isPopupShown, setIsPopupShown] = useState(false);

  useEffect(() => {
    if (currentEntity && API_URL) {
      axios
        .get(`${API_URL}client-detection?entity=${currentEntity}`)
        .then((response) => {
          setClientConfig(response.data);
          return response.data;
        })
        .then((clientConfig) => handleClient(clientConfig, setIsPopupShown))
        .catch((error) => {
          // Only log errors in development, suppress 500 errors from dev server
          if (
            process.env.NODE_ENV === "development" &&
            error.response?.status === 500
          ) {
            console.warn(
              "Client detection API temporarily unavailable:",
              error.message
            );
          } else {
            sendLog({ message: error.message, type: error.name });
          }
        });
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

ClientResolverProvider.propTypes = {
  children: PropTypes.node.isRequired, // children prop is required and must be a node
};
export default ClientResolverContext;
