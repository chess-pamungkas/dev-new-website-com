import React, { useContext } from "react";
import cn from "classnames";
import CookieContext from "../../context/cookie-context";

export const CookiesPopup = ({ className }) => {
  const {
    handleOpenGDPRPopup,
    acceptAllCookies,
    isShowCookiePopup,
    handleCloseCookiePopup,
  } = useContext(CookieContext);

  const acceptAll = () => {
    acceptAllCookies();
    handleCloseCookiePopup();
  };

  const learnMore = () => {
    handleOpenGDPRPopup();
    handleCloseCookiePopup();
  };

  return (
    <div
      className={cn(
        "cookies-popup",
        { "cookies-popup--active": isShowCookiePopup },
        className
      )}
    >
      <div className="cookies-popup__header"></div>
      <div className="cookies-popup__body">
        By clicking “Accept All”, you agree to store cookies on your device to
        enhance site navigation and user experience, analyse site usage, and
        offer a customised experience.
      </div>
      <div className="cookies-popup__buttons">
        <button className="cookies-popup__more-btn" onClick={learnMore}>
          Learn More
        </button>
        <button className="cookies-popup__accept-btn" onClick={acceptAll}>
          ACCEPT ALL
        </button>
      </div>
    </div>
  );
};
