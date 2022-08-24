import React, { useContext, useState } from "react";
import { useCookieConsentContext } from "@use-cookie-consent/react";
import cn from "classnames";
import CookieContext from "../../context/cookie-context";
import { CookieTypeItem } from "./components/cookie-type-item";

const GDPR_COOKIE_TYPES = ["session", "persistent", "necessary", "preferences", "statistics", "marketing", "firstParty", "thirdParty"]

export const GDPRPopup = ({className}) => {
    const { consent, acceptAllCookies, declineAllCookies, acceptCookies } =
    useCookieConsentContext();
    const [acceptedCookies, setAcceptedCookies] = useState({})
    const { cookies, setCookie, handleCloseGDPRPopup, isShowGDPRPopup } = useContext(CookieContext)
  
    const acceptAll = () => {
      acceptAllCookies();
      handleCloseGDPRPopup();
      setCookie("cookiePopupShown", true, "necessary");
  }
    const acceptSelected = () => {
      acceptCookies(acceptedCookies);
      handleCloseGDPRPopup();
      setCookie("cookiePopupShown", true, "necessary");
  }
  
    return (
      <div className={cn("gdpr-popup", { "gdpr-popup--active": isShowGDPRPopup }, className)}>
          <div className="gdpr-popup__wrapper">
              <div className="gdpr-popup__content">
                  <div className="gdpr-popup__header"></div>
                  <div className="gdpr-popup__title">
                      Choose which cookies to store
                  </div>
                  <div className="gdpr-popup__items">
                      {GDPR_COOKIE_TYPES.map((cookieType) => (
                          <CookieTypeItem cookieType={cookieType} acceptedCookies={acceptedCookies} setAcceptedCookies={setAcceptedCookies} />
                      ))}
                  </div>
                  <div className="gdpr-popup__buttons">
                      <button className="gdpr-popup__accept-btn" onClick={acceptAll}>ACCEPT ALL</button>
                      <button className="gdpr-popup__accept-btn" onClick={acceptSelected}>ACCEPT SELECTED</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }