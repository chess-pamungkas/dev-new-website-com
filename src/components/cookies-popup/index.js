import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import CookieContext from "../../context/cookie-context";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { isBrowser } from "../../helpers/services/is-browser";
import NotificationStripeContext from "../../context/notification-stripe-context";
import CommonContext from "../../context/common-context";

export const CookiesPopup = ({ className }) => {
  const { t } = useTranslation();
  const {
    handleOpenGDPRPopup,
    acceptAllCookies,
    isShowCookiePopup,
    handleCloseCookiePopup,
  } = useContext(CookieContext);
  const { expand } = useContext(NotificationStripeContext);
  const { sectionOptions } = useContext(CommonContext);
  const isCysecNotification = sectionOptions?.isCysecNotification;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isBrowser()) {
      setIsReady(true);
    }
  }, []);

  const acceptAll = (e) => {
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
        { "cookies-popup--higher": isCysecNotification && expand },
        {
          "cookies-popup--higher-if-collapsed": isCysecNotification && !expand,
        },
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
