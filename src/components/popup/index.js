import cn from "classnames";
import React, { useContext } from "react";
import EntityResolverContext from "../../context/client-resolver-context/entity-resolver-context";

const Popup = ({ className }) => {
  const { clientConfig, entityToRedirect, isPopupShown, setIsPopupShown } =
    useContext(EntityResolverContext);
  const isBanned = clientConfig.banned || false;
  const isRecommendedRedirect = clientConfig.recommendedRedirect || false;
  const redirectTo = (entity) => {
    window.location.replace(entity);
  };

  const getButtonsList = () => {
    if (isBanned) {
      return [
        { text: "Close", onClick: () => setIsPopupShown(false) },
        { text: "Continue", onClick: () => setIsPopupShown(false) },
      ];
    } else if (isRecommendedRedirect) {
      return [
        { text: "Do not confirm", onClick: () => redirectTo(entityToRedirect) },
        { text: "Confirm", onClick: () => setIsPopupShown(false) },
      ];
    }
  };

  const addButtons = (buttons) => {
    return (
      <div className="popup__buttons">
        {buttons.map((button) => {
          return (
            <button type="button" onClick={button.onClick}>
              {button.text}
            </button>
          );
        })}
      </div>
    );
  };

  // FYI: Just a placeholder with ip detection logic. Should be reworked
  return isPopupShown ? (
    <div className={cn("popup", className)}>
      <div className="popup__title">
        {isBanned ? "Banned title" : ""}
        {isRecommendedRedirect ? "Recommended redirect title" : ""}
      </div>
      <div className="popup__text">
        {isBanned ? "Banned text" : ""}
        {isRecommendedRedirect ? "Recommended redirect text" : ""}
      </div>
      {addButtons(getButtonsList())}
    </div>
  ) : null;
};

export default Popup;
