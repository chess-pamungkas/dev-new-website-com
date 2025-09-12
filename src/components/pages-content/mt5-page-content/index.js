import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import TopMarketPromotion from "../../top-market-promotion";
import animation from "../../../assets/images/animations/aggregator_MT5.json";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MtPromotion from "../../mt-promotion";
import {
  getMT5Advantages,
  getMT5DownloadLink,
  mt5DownloadTabs,
  getAnimationStyle,
} from "../../../helpers/platforms.config";
import image from "../../../assets/images/mt5/mt5.svg";
import icon from "../../../assets/images/icon--white.svg";
import { ShowRegistrationPopup } from "../../../helpers/constants";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { isIOS, isAndroid, isWindows, isMacOs } from "react-device-detect";
import { setLangParam } from "../../../helpers/services/language-service";
import Hero from "../../shared/hero";
import ContainerWrapper from "../../shared/container-wrapper";
import AccountComparison from "../../shared/account-comparison";
import OurCommunityContent from "../../shared/our-community";

const Mt5PageContent = ({ className, isShowHero = true }) => {
  const { t } = useTranslationWithVariables();
  const isRTL = useRtlDirection();
  const { isMobile, isTablet, isLG, isXL } = useWindowSize();
  const mt5Advantages = getMT5Advantages();
  const downloadRef = useRef(null);
  const langParam = setLangParam(); // Get the language parameter
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  //No need at MT5 as theres no null value at download section.  Enable when MT5 is at .COM and empty values
  // const scrollToTarget = () => {
  //   downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const getMT5DownloadLinkByDevice = useCallback(getMT5DownloadLink, [
    isIOS,
    isAndroid,
    isWindows,
    isMacOs,
  ]);

  const getAnimationStyles = useCallback(getAnimationStyle, [
    isMobile,
    isTablet,
    isLG,
    isXL,
  ]);

  return (
    <>
      <Hero
        className={className}
        isShowHero={isShowHero}
        heroType="mt5"
        showWarning={false}
        showHandImage={false}
        showHeroImage={false}
        desktopBackground="url(../../assets/images/bg/hero/mt5/mt5-desktop.svg)"
        mobileBackground="url(../../assets/images/bg/hero/mt5/mt5-mobile.svg)"
      />

      <ContainerWrapper>
        <MtPromotion
          title={
            <HighlightedLocalizationText
              localizationText="mt5_top-market-promo-text2"
              wordsToHighlight="mt5_top-market-promo-text-accent2"
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-red"
            />
          }
          advantagesTitle={t("mt5_market-items-list_title")}
          advantages={mt5Advantages}
          downloadTitle={t("mt5_download-title")}
          image={image}
          platformType="mt5"
          ref={downloadRef}
        />
      </ContainerWrapper>
      <div className="mt5-page-content">
        <AccountComparison />
      </div>
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

Mt5PageContent.propTypes = {
  className: PropTypes.string,
  isShowHero: PropTypes.bool,
};

export default Mt5PageContent;
