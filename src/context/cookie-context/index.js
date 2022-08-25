import React, { createContext, useState } from "react";
import Cookies from 'universal-cookie';
import { useModal } from "../../helpers/hooks/use-modal";

const CookieContext = createContext({});

export const CookieProvider = ({ children }) => {
  const cookies = new Cookies();
  const { isShow, handleOpen, handleClose } = useModal();
  const [isShowGDPRPopup, handleOpenGDPRPopup, handleCloseGDPRPopup] = [isShow, handleOpen, handleClose];
  const [cookieConsent, setCookieConsent] = useState(cookies.get("cookieConsent") || {})

  const getCookie = (cookieKey) => {
    return cookies.get(cookieKey)
  }

  const setCookie = (cookieKey, cookieValue, cookieType) => {
    console.log(cookieConsent)
    if (cookieConsent[cookieType]) {
      cookies.set(cookieKey, cookieValue, { path: '/' });
    }
  }

  const acceptCookies = (acceptedCookies) => {
    cookies.set("cookieConsent", acceptedCookies, { path: '/' });
    setCookieConsent(acceptedCookies);
  }

  const acceptAllCookies = () => {
    acceptCookies({"necessary": true, "performance": true, "segmentation": true})
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
