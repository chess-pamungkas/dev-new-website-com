import React from "react";
import Popup from "../shared/popup";
import cn from "classnames";
import entities from "../../enums/entities";

const RedirectPopup = ({
  clientConfig,
  currentEntity,
  isPopupOpen,
  handleClose,
  isBannedPopup,
  redirectEntity,
  setIsCysecRedirect,
}) => {
  const bannedPopupDescription = (country, ipAddress, entity) => (
    <>
      <p className="popup__paragraph">
        Your IP shows you are located in{" "}
        <span className="highlighted-in-red">{country}</span>. Our{" "}
        <span className="highlighted-in-red">{entity}</span> authorised body
        cannot accept residents of{" "}
        <span className="highlighted-in-red">{ipAddress}</span>.
      </p>
      <p className="popup__paragraph">
        If you are a resident of a different country, we apologise for the
        inconvenience; please click on continue to access the website.
      </p>
    </>
  );

  const softRedirectionDescription = (
    <>
      <p className="popup__paragraph">
        Based on your Geo-Location, we wish to inform you that{" "}
        <span className="highlighted-in-red">
          {process.env.GATSBY_FSA_ENTITY_NAME}
        </span>{" "}
        operates the website you are visiting now. This entity is not
        established in the European Union or regulated by an EU National
        Competent Authority.
      </p>
      <p className="popup__paragraph">
        Should you wish to proceed, please confirm that your decision was made
        independently and at your exclusive initiative and that no solicitation
        has been made by{" "}
        <span className="highlighted-in-red">
          {process.env.GATSBY_FSA_ENTITY_NAME}
        </span>{" "}
        or any of its related entities.
      </p>
    </>
  );

  const getButtons = () => {
    if (isBannedPopup) {
      return [
        {
          text: "Close",
          onClick: () => handleClose(false),
        },
        { text: "Continue", onClick: () => handleClose(false) },
      ];
    } else {
      return [
        {
          text: "Do not confirm",
          onClick: () => {
            window.location.replace(redirectEntity);
          },
          subTitle:
            currentEntity === entities.FSA
              ? "Redirect me to the EU related entity"
              : "",
        },
        {
          text: "Confirm",
          onClick: () => {
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
      handlePopupClose={handleClose}
      className={cn("popup--redirect", {
        "popup--banned": isBannedPopup,
      })}
    >
      <div className="popup__title">Please Read</div>
      <div className="popup__text">
        {isBannedPopup &&
          bannedPopupDescription(
            clientConfig.countryName,
            clientConfig.ipAddress,
            currentEntity === entities.FSA
              ? process.env.GATSBY_FSA_ENTITY_NAME
              : process.env.GATSBY_CYSEC_ENTITY_NAME
          )}
        {!isBannedPopup && softRedirectionDescription}
      </div>
      {buildButtons(getButtons())}
    </Popup>
  );
};

export default RedirectPopup;
