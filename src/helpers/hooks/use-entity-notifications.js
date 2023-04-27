import { useState, useContext, useEffect } from "react";
import ClientResolverContext from "../../context/client-resolver-context";
import entities from "../../enums/entities";
import { isBrowser } from "../services/is-browser";
import { REDIRECT_OR_BANNED_POPUP_SHOWN_KEY } from "../gdpr-cookie.config";
import { currentEntity } from "../entity-resolver";

export const useEntityNotifications = (handlePopupOpen) => {
  const { clientConfig } = useContext(ClientResolverContext);

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
      currentEntity !== entities.CYSEC &&
      isBrowser() &&
      !window.sessionStorage.getItem(REDIRECT_OR_BANNED_POPUP_SHOWN_KEY)
    ) {
      setIsCysecRedirect(true);
    }

    if (
      clientConfig &&
      Object.keys(clientConfig).length &&
      clientConfig.banned &&
      isBrowser() &&
      !window.sessionStorage.getItem(REDIRECT_OR_BANNED_POPUP_SHOWN_KEY)
    ) {
      if (handlePopupOpen) {
        handlePopupOpen();
      }
      setIsBannedPopup(
        clientConfig.banned && !clientConfig.recommendedRedirect
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientConfig, currentEntity]);

  return {
    isCysecNotification,
    isCysecRedirect,
    setIsCysecRedirect,
    isBannedPopup,
  };
};
