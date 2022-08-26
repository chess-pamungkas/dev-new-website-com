import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import ClientResolverContext from "../../../context/client-resolver-context";
import { useModal } from "../../../helpers/hooks/use-modal";
import RedirectPopup from "../../redirect-popup";
import { useEntityNotifications } from "../../../helpers/hooks/use-entity-notifications";

const CYSEC_STRIPE = (
  <div className="notification-stripe__cysec-wrapper">
    CFDs are complex instruments with a high risk of losing money rapidly due to
    leverage. <span className="highlighted-in-red">XX%</span> of retail investor
    accounts lose money when trading CFDs. It would be best to consider whether
    you understand how CFDs work and whether you can afford to take the high
    risk of losing the money you want to invest.
  </div>
);

const CYSEC_REDIRECT = (handlePopup, setIsHidden, setIsCysecRedirect) => (
  <div className="notification-stripe__redirection-wrapper">
    <div className="notification-stripe__content">
      Based on your geolocation, you may want to consider another of our
      licensed companies that may be better suited to you.
    </div>
    <div className="notification-stripe__actions">
      <button
        type="button"
        className="notification-stripe__button"
        onClick={() => {
          handlePopup();
        }}
      >
        Change site
      </button>
      <button
        type="button"
        className="notification-stripe__button"
        onClick={() => {
          setIsCysecRedirect(false);
          setIsHidden(true);
        }}
      >
        Close
      </button>
    </div>
  </div>
);

const NotificationStripe = ({ className, setSectionOptions }) => {
  const { clientConfig, currentEntity } = useContext(ClientResolverContext);
  const { isShow, handleOpen, handleClose } = useModal();
  const { isCysecNotification, isCysecRedirect, setIsCysecRedirect, isBannedPopup } =
    useEntityNotifications(handleOpen);

  const getContent = () => {
    if (isCysecNotification) {
      setIsHidden(false);
      return CYSEC_STRIPE;
    }

    if (isCysecRedirect) {
      setIsHidden(false);
      return CYSEC_REDIRECT(handleOpen, setIsHidden, setIsCysecRedirect);
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
      />
    </>
  );
};

export default NotificationStripe;
