import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import CookieContext from "../../context/cookie-context";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { isBrowser } from "../../helpers/services/is-browser";
import { sendClickEventToGA } from "../../helpers/services/google-analytics-service";

export const CookiesPopup = ({ className, isCysecNotification }) => {
  const { t } = useTranslation();
  const {
    handleOpenGDPRPopup,
    acceptAllCookies,
    isShowCookiePopup,
    handleCloseCookiePopup,
  } = useContext(CookieContext);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isBrowser()) {
      setIsReady(true);
    }
  }, []);

  const acceptAll = (e) => {
    sendClickEventToGA(e, true);
    acceptAllCookies();
    handleCloseCookiePopup();
  };

  const learnMore = () => {
    handleCloseCookiePopup();
    handleOpenGDPRPopup();
  };

  return (
    <div
      className={cn(
        "cookies-popup",
        { "cookies-popup--active": isShowCookiePopup && isReady },
        { "cookies-popup--higher": isCysecNotification },
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
