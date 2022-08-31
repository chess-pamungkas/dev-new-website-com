import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import ClientResolverContext from "../../../context/client-resolver-context";
import { useModal } from "../../../helpers/hooks/use-modal";
import RedirectPopup from "../../redirect-popup";
import { useEntityNotifications } from "../../../helpers/hooks/use-entity-notifications";
import CookieContext from "../../../context/cookie-context";
import { useTranslation } from "gatsby-plugin-react-i18next";

const CYSEC_STRIPE = (t) => (
  <div className="notification-stripe__cysec-wrapper">
    {t("notification-stripe-cysec-part1")}&nbsp;
    <span className="highlighted-in-red">XX%</span>&nbsp;
    {t("notification-stripe-cysec-part2")}
  </div>
);

const CYSEC_REDIRECT = (handlePopup, setIsHidden, setIsCysecRedirect, t) => (
  <div className="notification-stripe__redirection-wrapper">
    <div className="notification-stripe__content">
      {t("notification-stripe-redirect-text")}
    </div>
    <div className="notification-stripe__actions">
      <button
        type="button"
        className="notification-stripe__button"
        onClick={() => {
          handlePopup();
        }}
      >
        {t("notification-stripe-change-btn")}
      </button>
      <button
        type="button"
        className="notification-stripe__button"
        onClick={() => {
          setIsCysecRedirect(false);
          setIsHidden(true);
        }}
      >
        {t("notification-stripe-close-btn")}
      </button>
    </div>
  </div>
);

const NotificationStripe = ({ className, setSectionOptions }) => {
  const { clientConfig, currentEntity } = useContext(ClientResolverContext);
  const { isShow, handleOpen, handleClose } = useModal();
  const {
    isCysecNotification,
    isCysecRedirect,
    setIsCysecRedirect,
    isBannedPopup,
  } = useEntityNotifications(handleOpen);
  const { getCookie } = useContext(CookieContext);
  const { t } = useTranslation();

  const getContent = () => {
    if (isCysecNotification) {
      setIsHidden(false);
      return CYSEC_STRIPE(t);
    }

    if (isCysecRedirect) {
      setIsHidden(false);
      return CYSEC_REDIRECT(handleOpen, setIsHidden, setIsCysecRedirect, t);
    }

    return null;
  };

  const [content, setContent] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setSectionOptions({ isCysecNotification, isCysecRedirect });
    setContent(getContent());
  }, [clientConfig, currentEntity, isCysecNotification, isCysecRedirect]);

  return (
    <>
      {!isHidden && content && (
        <div className={cn("notification-stripe", className)}>
          <div className={cn("notification-stripe__wrapper")}>{content}</div>
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
      />
    </>
  );
};

export default NotificationStripe;
