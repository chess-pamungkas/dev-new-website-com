import React, { createContext, useState } from "react";
import Cookies from "universal-cookie";
import {
  DEFAULT_COOKIE_CONSENT,
  COOKIE_CONSENT_KEY,
  IS_SHOW_COOKIE_POPUP_KEY,
  GLOBAL_COOKIE_PATH,
} from "../../helpers/gdpr-cookie.config";
import { useModal } from "../../helpers/hooks/use-modal";

const CookieContext = createContext({});

export const CookieProvider = ({ children }) => {
  const cookies = new Cookies();

  const showCookiePopup = cookies.get(IS_SHOW_COOKIE_POPUP_KEY) === undefined;

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

  const getCookie = (cookieKey) => {
    return cookies.get(cookieKey);
  };

  const setCookie = (cookieKey, cookieValue, cookieType) => {
    if (cookieConsent[cookieType]) {
      // TODO: Probably need to change the expiration time
      cookies.set(cookieKey, cookieValue, { path: GLOBAL_COOKIE_PATH });
    }
  };

  const acceptCookies = (acceptedCookies) => {
    // TODO: Send client consents to the backend
    cookies.set(COOKIE_CONSENT_KEY, acceptedCookies, {
      path: GLOBAL_COOKIE_PATH,
    });
    setCookieConsent(acceptedCookies);
    cookies.set(IS_SHOW_COOKIE_POPUP_KEY, false, { path: GLOBAL_COOKIE_PATH });
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
