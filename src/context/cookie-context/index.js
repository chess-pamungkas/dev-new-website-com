import React, { createContext, useState } from "react";
import Cookies from 'universal-cookie';
import { DEFAULT_COOKIE_CONSENT, COOKIE_CONSENT_KEY, COOKIE_POPUP_SHOWN_KEY } from "../../helpers/gdpr-cookie.config";
import { useModal } from "../../helpers/hooks/use-modal";

const CookieContext = createContext({});

export const CookieProvider = ({ children }) => {
  const cookies = new Cookies();
  const { isShow: isShowCookiePopup, handleOpen: handleOpenCookiePopup, handleClose: handleCloseCookiePopup } = useModal(!(cookies.get(COOKIE_POPUP_SHOWN_KEY) || false), false);
  const { isShow: isShowGDPRPopup, handleOpen: handleOpenGDPRPopup, handleClose: handleCloseGDPRPopup } = useModal();
  const [cookieConsent, setCookieConsent] = useState(cookies.get(COOKIE_CONSENT_KEY) || {})

  const getCookie = (cookieKey) => {
    return cookies.get(cookieKey)
  }

  const setCookie = (cookieKey, cookieValue, cookieType) => {
    if (cookieConsent[cookieType]) {
      cookies.set(cookieKey, cookieValue, { path: '/' });
    }
  }

  const acceptCookies = (acceptedCookies) => {
    cookies.set(COOKIE_CONSENT_KEY, acceptedCookies, { path: '/' });
    setCookieConsent(acceptedCookies);
    cookies.set(COOKIE_POPUP_SHOWN_KEY, true, { path: '/' });

  }

  const acceptAllCookies = () => {
    acceptCookies(DEFAULT_COOKIE_CONSENT)
  }

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
