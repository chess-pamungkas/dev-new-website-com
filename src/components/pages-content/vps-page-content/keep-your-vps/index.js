import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import featuresIcon from "../../../../assets/images/icons/features.svg";
import maintainBalanceIcon from "../../../../assets/images/icons/vps/maintain-a-$500-balance.svg";
import monthlyTradingIcon from "../../../../assets/images/icons/vps/monthly-trading-requirement.svg";
import KeepYourVPSDesktopBg from "../../../../assets/images/bg/vps/keep-your-vps-forever-desktop.svg";
import KeepYourVPSMobileBg from "../../../../assets/images/bg/vps/keep-your-vps-forever-mobile.svg";
import { ShowRegistrationPopup } from "../../../../helpers/constants";
import LanguageContext from "../../../../context/language-context";
import { ButtonPrimaryStandard } from "../../../shared/reusable-buttons";

const KeepYourVPS = ({ className }) => {
  const { t } = useTranslationWithVariables();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const backgroundSrc = isMobile ? KeepYourVPSMobileBg : KeepYourVPSDesktopBg;

  return (
    <section className={`keep-your-vps ${className || ""}`}>
      {/* Background Images */}
      <div className="keep-your-vps-bg">
        <img
          src={backgroundSrc}
          alt="Keep Your VPS Forever Background"
          className="keep-your-vps-bg__image"
        />
      </div>

      {/* Header */}
      <div className="keep-your-vps-header">
        <div className="badge-row">
          <img src={featuresIcon} alt="Features Badge" />
          <span className="badge-label">{t("keep_your_vps_badge_text")}</span>
        </div>
        <h2 className="keep-your-vps-title">{t("keep_your_vps_title")}</h2>
        <p className="keep-your-vps-subtitle">{t("keep_your_vps_subtitle")}</p>
      </div>

      {/* Cards */}
      <div className="keep-your-vps-cards container">
        {/* Card 1: Maintain a $500 balance */}
        <div className="keep-your-vps-card maintain-balance-card">
          <div className="card-icon">
            <img
              src={maintainBalanceIcon}
              alt={t("keep_your_vps_card1_title")}
            />
          </div>
          <h3 className="card-title">{t("keep_your_vps_card1_title")}</h3>
          <p className="card-description">
            {t("keep_your_vps_card1_description")}
          </p>
        </div>

        {/* Card 2: Monthly Trading Requirement */}
        <div className="keep-your-vps-card monthly-trading-card">
          <div className="card-icon">
            <img src={monthlyTradingIcon} alt="Monthly Trading Requirement" />
          </div>
          <h3 className="card-title">{t("keep_your_vps_card2_title")}</h3>
          <p className="card-description">
            {t("keep_your_vps_card2_description")}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="keep-your-vps-footer">
        <p className="keep-your-vps-footer-text">
          {t("keep_your_vps_footer_text")}
        </p>
      </div>

      {/* Registration Popup */}
      {isPopupOpen && (
        <ShowRegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          langParam={selectedLanguage.id}
        />
      )}
    </section>
  );
};

export default KeepYourVPS;
