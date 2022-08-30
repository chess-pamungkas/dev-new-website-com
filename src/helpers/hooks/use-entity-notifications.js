import { useState, useContext, useEffect } from "react";
import ClientResolverContext from "../../context/client-resolver-context";
import entities from "../../enums/entities";

export const useEntityNotifications = (handlePopupOpen) => {
  const { clientConfig, currentEntity } = useContext(ClientResolverContext);

  const [isCysecNotification, setIsCysecNotification] = useState(false);
  const [isCysecRedirect, setIsCysecRedirect] = useState(false);
  const [isBannedPopup, setIsBannedPopup] = useState(false);

  useEffect(() => {
    if (
      clientConfig &&
      Object.keys(clientConfig).length &&
      !clientConfig.banned &&
      !clientConfig.recommendedRedirect &&
      currentEntity === entities.CYSEC
    ) {
      setIsCysecNotification(true);
    }

    if (
      clientConfig &&
      Object.keys(clientConfig).length &&
      clientConfig.recommendedRedirect &&
      currentEntity !== entities.CYSEC
    ) {
      setIsCysecRedirect(true);
    }

    if (
      clientConfig &&
      Object.keys(clientConfig).length &&
      clientConfig.banned
    ) {
      if (handlePopupOpen) {
        handlePopupOpen();
      }
      setIsBannedPopup(
        clientConfig.banned && !clientConfig.recommendedRedirect
      );
    }
  }, [clientConfig, currentEntity, handlePopupOpen]);

  return {
    isCysecNotification,
    isCysecRedirect,
    setIsCysecRedirect,
    isBannedPopup,
  };
};
