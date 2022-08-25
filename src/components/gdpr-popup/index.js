import React, { useContext, useState } from "react";
import cn from "classnames";
import CookieContext from "../../context/cookie-context";
import { CookieTypeItem } from "./components/cookie-type-item";

const GDPR_COOKIE_TYPES = [
    {title: "Strictly necessary cookies", key: "necessary", initialValue: true, canBeChanged: false},
    {title: "Performance Cookies", key: "performance", initialValue: true, canBeChanged: true},
    {title: "Segmentation Cookies", key: "segmentation", initialValue: true, canBeChanged: true},
]

export const GDPRPopup = ({className}) => {
    const [acceptedCookies, setAcceptedCookies] = useState({"necessary": true, "performance": true, "segmentation": true})
    const { cookies, setCookie, handleCloseGDPRPopup, isShowGDPRPopup, acceptAllCookies, acceptCookies } = useContext(CookieContext)
  
    const onAcceptAll = () => {
      acceptAllCookies();
      handleCloseGDPRPopup();
      setCookie("cookiePopupShown", true, "necessary");
  }
    const onAcceptSelected = () => {
      acceptCookies(acceptedCookies);
      handleCloseGDPRPopup();
      setCookie("cookiePopupShown", true, "necessary");
  }

    const onClose = () => {
      handleCloseGDPRPopup();
    }
  
    return (
      <div className={cn("gdpr-popup", { "gdpr-popup--active": isShowGDPRPopup }, className)}>
          <div className="gdpr-popup__wrapper">
              <div className="gdpr-popup__content">
                  <div className="gdpr-popup__header"></div>
                  <div className="gdpr-popup__title">
                    Privacy Preference Center
                  </div>
                  <div className="gdpr-popup__description">
                    When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
                  </div>
                  <hr className="gdpr-popup__line" />
                  <div className="gdpr-popup__consent">
                    <div className="gdpr-popup__consent-title">Manage Consent Preferences</div>
                    <button className="gdpr-popup__btn" onClick={onAcceptAll}>ALLOW ALL</button>
                  </div>
                  {GDPR_COOKIE_TYPES.map((cookieType) => (
                        <CookieTypeItem cookieType={cookieType} acceptedCookies={acceptedCookies} setAcceptedCookies={setAcceptedCookies} />
                    ))}
                  <div className="gdpr-popup__buttons">
                      <button className="gdpr-popup__btn" onClick={onClose}>CLOSE</button>
                      <button className="gdpr-popup__btn" onClick={onAcceptSelected}>CONFIRM MY CHOICE</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }