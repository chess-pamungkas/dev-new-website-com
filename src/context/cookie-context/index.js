import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import {
  DEFAULT_COOKIE_CONSENT,
  COOKIE_CONSENT_KEY,
  IS_SHOW_COOKIE_POPUP_KEY,
  GLOBAL_COOKIE_PATH,
  SEGMENTATION_COOKIE_KEY,
  DEFAULT_COOKIE_AGE,
} from "../../helpers/gdpr-cookie.config";
import { useModal } from "../../helpers/hooks/use-modal";
import { postClientConsent } from "../../helpers/services/client-consent-service";
import ClientResolverContext from "../client-resolver-context";

const CookieContext = createContext({});

export const CookieProvider = ({ children }) => {
  const cookies = new Cookies();
  const showCookiePopup =
    cookies.get(IS_SHOW_COOKIE_POPUP_KEY) === undefined ? true : false;
  const {
    isShow: isShowCookiePopup,
    handleOpen: handleOpenCookiePopup,
    handleClose: handleCloseCookiePopup,
  } = useModal(showCookiePopup, false);
  const {
    isShow: isShowGDPRPopup,
    handleOpen: handleOpenGDPRPopup,
    handleClose: handleCloseGDPRPopup,
  } = useModal();
  const [cookieConsent, setCookieConsent] = useState(
    cookies.get(COOKIE_CONSENT_KEY) || {}
  );
  // const [gaId, setGaId] = useState(undefined);
  const { clientConfig, currentEntity } = useContext(ClientResolverContext);

  useEffect(() => {
    if (window !== undefined && !cookieConsent[SEGMENTATION_COOKIE_KEY]) {
      // desable ga
      // window.gtag('consent', 'update', {
      //   'ad_storage': 'denied',
      //   'analytics_storage': 'denied'
      // });
      console.log("Disable GA cookie here")
    } else if (window !== undefined && cookieConsent[SEGMENTATION_COOKIE_KEY]) {
      // enable ga
      // window.gtag('consent', 'update', {
      //   'ad_storage': 'granted',
      //   'analytics_storage': 'granted'
      // });
      console.log("Enable GA cookie here")
    }
  }, [cookieConsent])

  const getCookie = (cookieKey) => {
    return cookies.get(cookieKey);
  };

  const setCookie = (cookieKey, cookieValue, cookieType) => {
    if (cookieConsent[cookieType]) {
      // TODO: Probably need to change the expiration time
      cookies.set(cookieKey, cookieValue, { path: GLOBAL_COOKIE_PATH, maxAge: DEFAULT_COOKIE_AGE });
    }
  };

  const acceptCookies = (acceptedCookies) => {
    cookies.set(COOKIE_CONSENT_KEY, acceptedCookies, {
      path: GLOBAL_COOKIE_PATH, maxAge: DEFAULT_COOKIE_AGE
    });
    setCookieConsent(acceptedCookies);
    cookies.set(IS_SHOW_COOKIE_POPUP_KEY, false, { path: GLOBAL_COOKIE_PATH, maxAge: DEFAULT_COOKIE_AGE });
    const consent = `Accepted cookies: ${Object.keys(acceptedCookies).filter(item => acceptedCookies[item]).join(", ")}`;
    postClientConsent(clientConfig.ipAddress, currentEntity, getCookie, consent);
  };

  const acceptAllCookies = () => {
    acceptCookies(DEFAULT_COOKIE_CONSENT);
  };

  return (
    <CookieContext.Provider
      value={{
        cookies,
        getCookie,
        setCookie,
        isShowGDPRPopup,
        handleCloseGDPRPopup,
        handleOpenGDPRPopup,
        isShowCookiePopup,
        handleOpenCookiePopup,
        handleCloseCookiePopup,
        cookieConsent,
        acceptCookies,
        acceptAllCookies,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export default CookieContext;
