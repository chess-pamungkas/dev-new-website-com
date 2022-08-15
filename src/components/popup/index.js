import React, { useContext } from "react";
import EntityResolverContext from "../../context/client-resolver-context/entity-resolver-context";

const Popup = () => {
  const { clientConfig, entityToRedirect, isPopupShown, setIsPopupShown } =
    useContext(EntityResolverContext);
  const isBanned = clientConfig.banned || false;
  const isRecommendedRedirect = clientConfig.recommendedRedirect || false;
  const redirectTo = (entity) => {
    window.location.replace(entity);
  };

  // FYI: Just a placeholder with ip detection logic. Should be reworked
  return isPopupShown ? (
    <div className="popup">
      <div className="popup__title">
        {isBanned ? "Banned title" : ""}
        {isRecommendedRedirect ? "Recommended redirect title" : ""}
      </div>
      <div className="popup__text">
        {isBanned ? "Banned text" : ""}
        {isRecommendedRedirect ? "Recommended redirect text" : ""}
      </div>
      {isBanned ? (
        <div className="popup__buttons">
          <button type="button" onClick={() => setIsPopupShown(false)}>
            Close
          </button>
          <button type="button" onClick={() => setIsPopupShown(false)}>
            Continue
          </button>
        </div>
      ) : (
        ""
      )}
      {isRecommendedRedirect ? (
        <div className="popup__buttons">
          <button type="button" onClick={() => redirectTo(entityToRedirect)}>
            Do not confirm
          </button>
          <button type="button" onClick={() => setIsPopupShown(false)}>
            Confirm
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  ) : null;
};

export default Popup;
