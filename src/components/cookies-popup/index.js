import React, { useContext } from "react";
import cn from "classnames";
import CookieContext from "../../context/cookie-context";
import { useModal } from "../../helpers/hooks/use-modal";
import { COOKIE_POPUP_SHOWN_KEY } from "../../helpers/gdpr-cookie.config";

export const CookiesPopup = ({ className }) => {
  const { cookies, handleOpenGDPRPopup, acceptAllCookies, cookieConsent } = useContext(CookieContext)
  const { isShow, handleOpen, handleClose } = useModal(!(cookies.get(COOKIE_POPUP_SHOWN_KEY) || false), false);

  console.log(cookieConsent)

  const acceptAll = () => {
    acceptAllCookies();
    handleClose();
  }

  const learnMore = () => {
    handleOpenGDPRPopup();
    handleClose();
  }

  return (
    <div className={cn("cookies-popup", { "cookies-popup--active": isShow }, className)}>
        <div className="cookies-popup__header"></div>
        <div className="cookies-popup__body">
            By clicking “Accept All”, you agree to store cookies on your device to enhance site navigation and user experience, analyse site usage, and offer a customised experience.
        </div>
        <div className="cookies-popup__buttons">
            <button className="cookies-popup__more-btn" onClick={learnMore}>Learn More</button>
            <button className="cookies-popup__accept-btn" onClick={acceptAll}>ACCEPT ALL</button>
        </div>
    </div>
  );
};