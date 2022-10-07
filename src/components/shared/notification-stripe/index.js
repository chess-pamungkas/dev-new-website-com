import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import ClientResolverContext from "../../../context/client-resolver-context";
import { useModal } from "../../../helpers/hooks/use-modal";
import RedirectPopup from "../../redirect-popup";
import { useEntityNotifications } from "../../../helpers/hooks/use-entity-notifications";
import CookieContext from "../../../context/cookie-context";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { sendClickEventToGA } from "../../../helpers/services/google-analytics-service";
import { RISK_DISCLOSURE_DOC } from "../../../helpers/documents";

export const CysecStripe = ({ t }) => {
  return (
    <div className="notification-stripe__cysec-wrapper">
      <span className="notification-stripe__text">
        {t("notification-stripe-cysec")}&nbsp;
        <a
          className="notification-stripe__link"
          href={RISK_DISCLOSURE_DOC}
          target="_blank"
          rel="noreferrer"
        >
          {t("notification-stripe-cysec-link")}
        </a>
      </span>
    </div>
  );
};

const CysecRedirect = ({ handleOpen, setIsHidden, setIsCysecRedirect, t }) => {
  return (
    <div className="notification-stripe__redirection-wrapper">
      <div className="notification-stripe__content">
        <span>{t("notification-stripe-redirect-text")}</span>
      </div>
      <div className="notification-stripe__actions">
        <button
          type="button"
          className="notification-stripe__button"
          onClick={(e) => {
            handleOpen();
            sendClickEventToGA(e);
          }}
        >
          {t("notification-stripe-change-btn")}
        </button>
        <button
          type="button"
          className="notification-stripe__button"
          onClick={(e) => {
            setIsCysecRedirect(false);
            setIsHidden(true);
            sendClickEventToGA(e);
          }}
        >
          {t("notification-stripe-close-btn")}
        </button>
      </div>
    </div>
  );
};

const NotificationStripe = ({ className, setSectionOptions }) => {
  const { clientConfig, currentEntity, entityToRedirect } = useContext(
    ClientResolverContext
  );
  const { isShow, handleOpen, handleClose } = useModal();
  const {
    isCysecNotification,
    isCysecRedirect,
    setIsCysecRedirect,
    isBannedPopup,
  } = useEntityNotifications(handleOpen);
  const { getCookie } = useContext(CookieContext);
  const { t } = useTranslation();

  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setSectionOptions({ isCysecNotification, isCysecRedirect });

    if (isCysecNotification) {
      setIsHidden(false);
    }

    if (isCysecRedirect) {
      setIsHidden(false);
    }

    if (!isCysecRedirect && !isCysecNotification) {
      setIsHidden(true);
    }
  }, [
    clientConfig,
    currentEntity,
    isCysecNotification,
    isCysecRedirect,
    setSectionOptions,
  ]);
  return (
    <>
      {!isHidden && (isCysecNotification || isCysecRedirect) && (
        <div className={cn("notification-stripe", className)}>
          <div className={cn("notification-stripe__wrapper")}>
            {isCysecRedirect && (
              <CysecRedirect
                handleOpen={handleOpen}
                setIsHidden={setIsHidden}
                setIsCysecRedirect={setIsCysecRedirect}
                t={t}
              />
            )}

            {isCysecNotification && <CysecStripe t={t} />}
          </div>
        </div>
      )}

      <RedirectPopup
        clientConfig={clientConfig}
        currentEntity={currentEntity}
        isBannedPopup={isBannedPopup}
        isPopupOpen={isShow}
        handleClose={handleClose}
        setIsCysecRedirect={setIsCysecRedirect}
        getCookie={getCookie}
        redirectEntity={entityToRedirect}
      />
    </>
  );
};

export default NotificationStripe;
