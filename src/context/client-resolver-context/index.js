import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import handleClient from "./handle-client";
import entities from "../../enums/entities";
import { isBrowser } from "../../helpers/services/is-browser";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;
const PUBLIC_IP_API_URL = process.env.GATSBY_PUBLIC_IP_API_URL;
const FSA_ENTITY_DOMAIN = process.env.GATSBY_FSA_ENTITY_DOMAIN;
const CYSEC_ENTITY_DOMAIN = process.env.GATSBY_CYSEC_ENTITY_DOMAIN;
const FSA_ENTITY_HOST = process.env.GATSBY_FSA_ENTITY_HOST;
const ClientResolverContext = createContext({});

export const ClientResolverProvider = ({ children }) => {
  const [clientConfig, setClientConfig] = useState({});
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [currentEntity, setCurrentEntity] = useState("");
  const [entityToRedirect, setEntityToRedirect] = useState("");

  useEffect(() => {
    if (isBrowser()) {
      const currentHost = window.location.host;
      const _currentEntity =
        currentHost === FSA_ENTITY_HOST ? entities.FSA : entities.CYSEC;
      setCurrentEntity(_currentEntity);
      setEntityToRedirect(
        _currentEntity === entities.FSA
          ? CYSEC_ENTITY_DOMAIN
          : FSA_ENTITY_DOMAIN
      );
    }
  }, []);

  useEffect(() => {
    function getClientConfig(ip) {
      axios
        .get(`${API_URL}client-detection/${ip}?entity=${currentEntity}`)
        .then((response) => {
          setClientConfig(response.data);
          return response.data;
        })
        .then((clientConfig) =>
          handleClient(clientConfig, entityToRedirect, setIsPopupShown)
        )
        .catch((response) => console.log(response));
    }

    if (currentEntity && entityToRedirect) {
      axios
        .get(PUBLIC_IP_API_URL)
        .then((response) => {
          getClientConfig(response.data.ip);
        })
        .catch((response) => console.log(response));
    }
  }, [currentEntity, entityToRedirect]);

  return (
    <ClientResolverContext.Provider
      value={{
        clientConfig,
        entityToRedirect,
        isPopupShown,
        setIsPopupShown,
        currentEntity,
      }}
    >
      {children}
    </ClientResolverContext.Provider>
  );
};

export default ClientResolverContext;
