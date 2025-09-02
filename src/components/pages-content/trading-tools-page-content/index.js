import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import TopMarket from "../../top-market";
import cn from "classnames";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import promotion from "../../../assets/images/trading-tools/promotion.svg";
import AlphaGeneration from "../../trading-tools/components/alpha-generation";
import icon from "../../../assets/images/icon--white.svg";
import { ShowRegistrationPopup } from "../../../helpers/constants";
import TopMarketPromotion from "../../top-market-promotion";
import FeaturedIdeas from "../../trading-tools/components/featured-ideas";
import MarketBuzz from "../../trading-tools/components/market-buzz";
import TradingCalendar from "../../trading-tools/components/trading-calendar";
import { setLangParam } from "../../../helpers/services/language-service";
import TradingToolsImageContent from "./trading-tools-image-content";
import Hero from "../../shared/hero";
import ContainerWrapper from "../../shared/container-wrapper";
import OurCommunityContent from "../../shared/our-community";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";

const TradingToolsPageContent = ({ className, isShowHero = true }) => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();
  const isRTL = useRtlDirection();
  const langParam = setLangParam(); // Get the language parameter
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const handleShowRegistrationPopup = ({ className, isShowHero = true }) => {
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
        heroType="trading-tools"
        showWarning={false}
        showHandImage={false}
        showHeroImage={false}
        desktopBackground="url(../../assets/images/bg/trading-tools/trading-tools-desktop.svg)"
        mobileBackground="url(../../assets/images/bg/trading-tools/trading-tools-mobile.svg)"
      />

      <ContainerWrapper>
        <TradingToolsImageContent />
      </ContainerWrapper>

      {isMobile ? (
        <OurCommunityContent />
      ) : (
        <ContainerWrapper>
          <OurCommunityContent />
        </ContainerWrapper>
      )}

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

TradingToolsPageContent.propTypes = {
  className: PropTypes.string,
  isShowHero: PropTypes.bool,
};

export default TradingToolsPageContent;
