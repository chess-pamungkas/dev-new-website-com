import React, { useContext, useState } from "react";
import cn from "classnames";
import CookieContext from "../../context/cookie-context";
import { CookieCategoryItem } from "./components/cookie-category-item";
import {
  GDPR_COOKIE_CATEGORIES,
  DEFAULT_COOKIE_CONSENT,
  SEGMENTATION_COOKIE_KEY,
} from "../../helpers/gdpr-cookie.config";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { sendClickEventToGA } from "../../helpers/services/google-analytics-service";

export const GDPRPopup = ({ className }) => {
  const { t } = useTranslation();
  const [acceptedCookies, setAcceptedCookies] = useState(
    DEFAULT_COOKIE_CONSENT
  );
  const {
    handleCloseGDPRPopup,
    isShowGDPRPopup,
    acceptAllCookies,
    acceptCookies,
    handleOpenCookiePopup,
  } = useContext(CookieContext);

  const onAcceptAll = (e) => {
    sendClickEventToGA(e, true);
    acceptAllCookies();
    handleCloseGDPRPopup();
  };
  const onAcceptSelected = (e) => {
    sendClickEventToGA(e, acceptedCookies[SEGMENTATION_COOKIE_KEY]);
    acceptCookies(acceptedCookies);
    handleCloseGDPRPopup();
  };

  const onClose = () => {
    handleCloseGDPRPopup();
    handleOpenCookiePopup();
  };

  return (
    <div
      className={cn(
        "gdpr-popup",
        { "gdpr-popup--active": isShowGDPRPopup },
        className
      )}
    >
      <div className="gdpr-popup__wrapper">
        <div className="gdpr-popup__content">
          <div className="gdpr-popup__header" />
          <div className="gdpr-popup__title">{t("cookie-title")}</div>
          <div className="gdpr-popup__description">
            {t("cookie-description")}
          </div>
          <hr className="gdpr-popup__hr-line" />
          <div className="gdpr-popup__consent">
            <div className="gdpr-popup__consent-title">
              {t("cookie-consent-title")}
            </div>
            <button
              type="button"
              className="gdpr-popup__btn"
              onClick={onAcceptAll}
            >
              {t("cookie-consent-btn")}
            </button>
          </div>
          {GDPR_COOKIE_CATEGORIES.map((cookieCategory) => (
            <CookieCategoryItem
              key={cookieCategory.categoryKey}
              acceptedCookies={acceptedCookies}
              setAcceptedCookies={setAcceptedCookies}
              {...cookieCategory}
            />
          ))}
          <div className="gdpr-popup__buttons">
            <button type="button" className="gdpr-popup__btn" onClick={onClose}>
              {t("cookie-consent-close-btn")}
            </button>
            <button
              type="button"
              className="gdpr-popup__btn"
              onClick={onAcceptSelected}
            >
              {t("cookie-consent-confirm-btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
