import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import TopMarket from "../../top-market";
import topPromo from "../../../assets/images/vps/top-promo.svg";
import { ShowRegistrationPopup } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import VPSTopPromotion from "../../vps/components/vps-top-promotion";
import VPSCenterPromotion from "../../vps/components/vps-center-promotion";
import VPSBottomPromotion from "../../vps/components/bottom-promotion";
import VPSAdvantages from "../../vps/components/vps-advantages";
import { VPS_ADVANTAGES } from "../../../helpers/vps.config";
import { setLangParam } from "../../../helpers/services/language-service";
import ContainerWrapper from "../../../components/shared/container-wrapper";
import Hero from "../../shared/hero";
import VpsImageContent from "./vps-image-content";
import OurCommunityContent from "../../../components/shared/our-community";

const VPSContent = ({ className, isShowHero = true }) => {
  const { t } = useTranslationWithVariables();
  const langParam = setLangParam(); // Get the language parameter
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <>
      <Hero
        className={className}
        isShowHero={isShowHero}
        heroType="vps"
        showWarning={false}
        showHandImage={false}
        showHeroImage={false}
        desktopBackground="url(../../assets/images/bg/vps/vps-desktop.svg)"
        mobileBackground="url(../../assets/images/bg/vps/vps-mobile.svg)"
      />

      <ContainerWrapper>
        <VpsImageContent />
      </ContainerWrapper>

      {/* Render the popup */}
      {isPopupOpen && (
        <ShowRegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          langParam={langParam} // Pass langParam if needed
        />
      )}
    </>
  );
};

VPSContent.propTypes = {
  className: PropTypes.string,
  isShowHero: PropTypes.bool,
};

export default VPSContent;
