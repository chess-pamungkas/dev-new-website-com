import { useState, useContext, useEffect } from "react";
import ClientResolverContext from "../../context/client-resolver-context";
import { isBrowser } from "../services/is-browser";
import { REDIRECT_OR_BANNED_POPUP_SHOWN_KEY } from "../gdpr-cookie.config";
import { isCySEC } from "../entity-resolver";

export const useEntityNotifications = (handlePopupOpen) => {
  const { clientConfig } = useContext(ClientResolverContext);

  const [isRiskWarningNotification, setIsRiskWarningNotification] =
    useState(false);
  const [
    isRecommendedRedirectNotification,
    setIsRecommendedRedirectNotification,
  ] = useState(false);
  const [isBannedPopup, setIsBannedPopup] = useState(false);

  useEffect(() => {
    if (isCySEC) {
      setIsRiskWarningNotification(true);
    }

    if (
      clientConfig &&
      Object.keys(clientConfig).length &&
      clientConfig.recommendedRedirect &&
      !isCySEC &&
      isBrowser() &&
      !window.sessionStorage.getItem(REDIRECT_OR_BANNED_POPUP_SHOWN_KEY)
    ) {
      setIsRecommendedRedirectNotification(true);
    }

    if (
      clientConfig &&
      Object.keys(clientConfig).length &&
      (clientConfig.banned || clientConfig.forceRedirectPopup) &&
      isBrowser() &&
      !window.sessionStorage.getItem(REDIRECT_OR_BANNED_POPUP_SHOWN_KEY)
    ) {
      if (handlePopupOpen) {
        handlePopupOpen();
      }
      setIsBannedPopup(
        clientConfig.banned &&
          !clientConfig.recommendedRedirect &&
          !clientConfig.forceRedirectPopup
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientConfig]);

  return {
    isRiskWarningNotification,
    isRecommendedRedirectNotification,
    setIsRecommendedRedirectNotification,
    isBannedPopup,
  };
};
