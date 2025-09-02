import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import LanguageContext from "../../../context/language-context";
import { ShowRegistrationPopup } from "../../../helpers/constants";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import BadgeJoinOurCommunityIcon from "../../../assets/images/icons/join-our-community/badge-join-our-community.svg";
import { CommunityButtons } from "../community-buttons";

const OurCommunityContent = ({
  customBadgeMessage,
  customTitle,
  customSubtitle,
  customPrimaryButton,
  customSecondaryButton,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const { isMobile } = useWindowSize();
  const { selectedLanguage } = useContext(LanguageContext);
  const { t } = useTranslationWithVariables();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Use custom content if provided, otherwise fall back to translations
  const badgeMessage = customBadgeMessage || t("our_community_badge_message");
  const title = customTitle || t("our_community_title");
  const subtitle = customSubtitle || t("our_community_subtitle");
  const primaryButtonText =
    customPrimaryButton || t("our_community_primary_button");
  const secondaryButtonText =
    customSecondaryButton || t("our_community_secondary_button");

  // Use custom click handlers if provided, otherwise use default popup
  const handlePrimaryClick = onPrimaryClick || handleShowRegistrationPopup;
  const handleSecondaryClick = onSecondaryClick || handleShowRegistrationPopup;

  return (
    <div className="our-community-content">
      <div className="our-community-content__container">
        <div className="our-community-content__left">
          <div className="our-community-content__badge">
            <div className="our-community-content__badge-content">
              <img
                src={BadgeJoinOurCommunityIcon}
                alt={badgeMessage}
                className="our-community-content__badge-icon"
              />
              <span className="our-community-content__badge-message">
                {badgeMessage}
              </span>
            </div>
          </div>

          <h2 className="our-community-content__title">{title}</h2>

          <p className="our-community-content__subtitle">{subtitle}</p>

          <div className="navbar-dropdown-highlight__button-group">
            <CommunityButtons
              onPrimaryClick={handlePrimaryClick}
              onSecondaryClick={handleSecondaryClick}
              customPrimaryButton={primaryButtonText}
              customSecondaryButton={secondaryButtonText}
            />
          </div>
        </div>

        <div className="our-community-content__right">
          <div className="our-community-content__image-container">
            {/* Background images are handled via CSS */}
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <ShowRegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          langParam={selectedLanguage.id}
        />
      )}
    </div>
  );
};

OurCommunityContent.propTypes = {
  customBadgeMessage: PropTypes.string,
  customTitle: PropTypes.string,
  customSubtitle: PropTypes.string,
  customPrimaryButton: PropTypes.string,
  customSecondaryButton: PropTypes.string,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
};

export default OurCommunityContent;
