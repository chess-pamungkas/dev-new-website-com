import React, { useContext } from "react";
import cn from "classnames";
import CookieContext from "../../context/cookie-context";
import { useTranslation } from "gatsby-plugin-react-i18next";

export const CookiesPopup = ({ className }) => {
  const { t } = useTranslation();
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
      <div className="cookies-popup__header" />
      <div className="cookies-popup__body">
        <span>{t("cookie-popup-body")}</span>
      </div>
      <div className="cookies-popup__buttons">
        <button
          type="button"
          className="cookies-popup__more-btn"
          onClick={learnMore}
        >
          {t("cookie-popup-bnt-learn-more")}
        </button>
        <button
          type="button"
          className="cookies-popup__accept-btn"
          onClick={acceptAll}
        >
          {t("cookie-popup-bnt-accept-all")}
        </button>
      </div>
    </div>
  );
};
