import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import handleClient from "./handle-client";
import entities from "../../enums/entities";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;
const PUBLIC_IP_API_URL = process.env.GATSBY_PUBLIC_IP_API_URL;
const FSA_ENTITY_DOMAIN = process.env.GATSBY_FSA_ENTITY_DOMAIN;
const CYSEC_ENTITY_DOMAIN = process.env.GATSBY_CYSEC_ENTITY_DOMAIN;
const ClientResolverContext = createContext({});

export const ClientResolverProvider = ({ children }) => {
  const [clientConfig, setClientConfig] = useState({});
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [entityToRedirect, setEntityToRedirect] = useState("");

  useEffect(() => {
    const currentHost = window.location.host;
    const currentEntity =
      currentHost === FSA_ENTITY_DOMAIN ? entities.FSA : entities.CYSEC;
    setEntityToRedirect(
      currentEntity === entities.FSA ? CYSEC_ENTITY_DOMAIN : FSA_ENTITY_DOMAIN
    );

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

    axios
      .get(PUBLIC_IP_API_URL)
      .then((response) => {
        getClientConfig(response.data.ip);
      })
      .catch((response) => console.log(response));
  }, [entityToRedirect]);

  return (
    <ClientResolverContext.Provider
      value={{
        clientConfig,
        entityToRedirect,
        isPopupShown,
        setIsPopupShown,
      }}
    >
      {children}
    </ClientResolverContext.Provider>
  );
};

export default ClientResolverContext;
