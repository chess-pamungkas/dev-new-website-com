import React from "react";
import Popup from "../shared/popup";
import cn from "classnames";
import entities from "../../enums/entities";
import { postClientConsent } from "../../helpers/services/client-consent-service";
import { CONSENT_TYPES } from "../../helpers/consent-types.config";
import { useTranslation } from "gatsby-plugin-react-i18next";

const RedirectPopup = ({
  clientConfig,
  currentEntity,
  isPopupOpen,
  handleClose,
  isBannedPopup,
  redirectEntity,
  setIsCysecRedirect,
  getCookie,
}) => {
  const { t } = useTranslation();
  const bannedPopupDescription = (country, entity) => (
    <>
      <p className="popup__paragraph">
        {t("popup-banned-description-part1")}&nbsp;
        <span className="highlighted-in-red">{country}</span>
        {t("popup-banned-description-part2")}&nbsp;
        <span className="highlighted-in-red">{entity}</span>&nbsp;
        {t("popup-banned-description-part3")}
      </p>
      <p className="popup__paragraph">{t("popup-banned-description-part4")}</p>
    </>
  );

  const softRedirectionDescription = () => (
    <>
      <p className="popup__paragraph">
        {t("popup-redirect-description-part1")}{" "}
        <span className="highlighted-in-red">{t("fsa-entity-name")}</span>{" "}
        {t("popup-redirect-description-part2")}
      </p>
      <p className="popup__paragraph">
        {t("popup-redirect-description-part3")}{" "}
        <span className="highlighted-in-red">{t("fsa-entity-name")}</span>{" "}
        {t("popup-redirect-description-part4")}
      </p>
    </>
  );

  const getButtons = () => {
    if (isBannedPopup) {
      return [
        {
          text: t("popup-banned-close-btn"),
          onClick: () => {
            handleClose(false);
            postClientConsent(
              clientConfig.ipAddress,
              currentEntity,
              getCookie,
              CONSENT_TYPES["bannedClose"]
            );
          },
        },
        {
          text: t("popup-banned-continue-btn"),
          onClick: () => {
            handleClose(false);
            postClientConsent(
              clientConfig.ipAddress,
              currentEntity,
              getCookie,
              CONSENT_TYPES["bannedContinue"]
            );
          },
        },
      ];
    } else {
      return [
        {
          text: t("popup-redirect-dont-confirm-btn"),
          onClick: () => {
            postClientConsent(
              clientConfig.ipAddress,
              currentEntity,
              getCookie,
              CONSENT_TYPES["redirectDoNotConfirm"]
            );
            window.location.replace(redirectEntity);
          },
          subTitle:
            currentEntity === entities.FSA
              ? "Redirect me to the EU related entity"
              : "",
        },
        {
          text: t("popup-redirect-confirm-btn"),
          onClick: () => {
            postClientConsent(
              clientConfig.ipAddress,
              currentEntity,
              getCookie,
              CONSENT_TYPES["redirectConfirm"]
            );
            setIsCysecRedirect(false);
            handleClose(false);
          },
        },
      ];
    }
  };

  const buildButtons = (buttons) => {
    return (
      <div className="popup__buttons">
        {buttons.map((button, i) => {
          return (
            <div className="popup__button-wrapper" key={`redirectButton${i}`}>
              <button
                type="button"
                className="popup__button"
                onClick={button.onClick}
              >
                {button.text}
              </button>

              {button.subTitle && (
                <div className="popup__button-subtitle">{button.subTitle}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Popup
      isPopupOpen={isPopupOpen}
      className={cn("popup--redirect", {
        "popup--banned": isBannedPopup,
      })}
    >
      <div className="popup__title">{t("popup-title")}</div>
      <div className="popup__text">
        {isBannedPopup &&
          bannedPopupDescription(
            clientConfig.countryName,
            currentEntity === entities.FSA
              ? t("fsa-entity-name")
              : t("cysec-entity-name")
          )}
        {!isBannedPopup && softRedirectionDescription()}
      </div>
      {buildButtons(getButtons())}
    </Popup>
  );
};

export default RedirectPopup;
