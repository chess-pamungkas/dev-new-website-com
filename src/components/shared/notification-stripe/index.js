import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import ClientResolverContext from "../../../context/client-resolver-context";
import { useModal } from "../../../helpers/hooks/use-modal";
import RedirectPopup from "../../redirect-popup";
import { useEntityNotifications } from "../../../helpers/hooks/use-entity-notifications";
import CookieContext from "../../../context/cookie-context";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { sendClickEventToGA } from "../../../helpers/services/google-analytics-service";
import {
  RISK_DISCLOSURE_DOC,
  RISK_DISCLOSURE_DOC_FSA,
} from "../../../helpers/documents";
import { setRedirectOrBannedPopupShown } from "../../../helpers/services/set-redirect-or-banned-popup-shown";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import expandIcon from "../../../assets/images/icons/accordion.svg";
import collapseIcon from "../../../assets/images/icons/accordion-active.svg";
import NotificationStripeContext from "../../../context/notification-stripe-context";
import { isBrowser } from "../../../helpers/services/is-browser";
import {
  MT5_WEB_TRADER_LINK,
  MT4_WEB_TRADER_LINK,
} from "../../../helpers/constants";
import { entityToRedirect, currentEntity, isCySEC } from "../../../helpers/entity-resolver";

export const CysecStripe = ({ t, isCySEC }) => {
  const { expand, setExpand } = useContext(NotificationStripeContext);
  const { isMobile } = useWindowSize();

  return (
    <div className="notification-stripe__cysec-wrapper">
      <span className={cn("notification-stripe__text", { collapsed: !expand })}>
        {t("notification-stripe-cysec")}&nbsp;
        <a
          className="notification-stripe__link"
          href={isCySEC ? RISK_DISCLOSURE_DOC : RISK_DISCLOSURE_DOC_FSA}
          target="_blank"
          rel="noreferrer"
        >
          {t("notification-stripe-cysec-link")}
        </a>
      </span>
      {isMobile && (
        <span>
          <img
            width="25"
            onClick={() => setExpand(!expand)}
            src={expand ? collapseIcon : expandIcon}
          />
        </span>
      )}
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
            setRedirectOrBannedPopupShown();
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
  const { clientConfig } = useContext(
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

  const { isMobile, isMD } = useWindowSize();
  const { expand } = useContext(NotificationStripeContext);

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

  useEffect(() => {
    if (isMobile) {
      let livechatindex = document.getElementById(
        "convrs-chat-channel-container"
      );

      if (isBrowser()) {
        let livechatisMobile = document.getElementById(
          "convrs-chat-channel-container"
        );

        const path = window.location.pathname;
        const pageMt5 = path.endsWith("/mt5-webtrader/");
        const pageMt4 = path.endsWith("/mt4-webtrader/");
        if (pageMt5) {
          livechatisMobile.style.display = "none";
          if (isCysecNotification) {
            setIsHidden(true);
          }
        }
        if (pageMt4) livechatisMobile.style.display = "none";
      }

      if (livechatindex) {
        livechatindex.style.setProperty("z-index", "1");
      }
    }
    if (isCysecNotification) {
      let bottom;

      switch (true) {
        case isMobile:
          bottom = expand ? "190px" : "65px";
          break;
        case isMD:
          bottom = "110px";
          break;
        default:
          bottom = "10px";
      }

      let livechat = document.getElementById("convrs-chat-channel-container");

      if (livechat) {
        livechat.style.bottom = bottom;
      }
    }
  }, [isCysecNotification, isMobile, isMD, expand]);

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

            {isCysecNotification && <CysecStripe t={t} isCySEC={isCySEC} />}
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
