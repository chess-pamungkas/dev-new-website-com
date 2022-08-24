import React, { createContext } from "react";
import { useCookieConsentContext } from "@use-cookie-consent/react";
import Cookies from 'universal-cookie';
import { useModal } from "../../helpers/hooks/use-modal";

const CookieContext = createContext({});

export const CookieProvider = ({ children }) => {
  const cookies = new Cookies();
  const { consent } = useCookieConsentContext();
  const { isShow, handleOpen, handleClose } = useModal();
  const [isShowGDPRPopup, handleOpenGDPRPopup, handleCloseGDPRPopup] = [isShow, handleOpen, handleClose];

  const getCookie = (cookieKey) => {
    return cookies.get(cookieKey)
  }

  const setCookie = (cookieKey, cookieValue, cookieType) => {
    if (consent[cookieType]) {
      cookies.set(cookieKey, cookieValue, { path: '/' });
    }
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
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export default CookieContext;
