import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import featuresIcon from "../../../../assets/images/icons/features.svg";
import minimumDepositIcon from "../../../../assets/images/icons/vps/minimum-$3000-deposit.svg";
import minimumTradingVolumeIcon from "../../../../assets/images/icons/vps/minimum-trading-volume.svg";
import { ShowRegistrationPopup } from "../../../../helpers/constants";
import LanguageContext from "../../../../context/language-context";
import { ButtonPrimaryStandard } from "../../../shared/reusable-buttons";

const GetComplimentaryVPS = ({ className }) => {
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

  return (
    <section className={`get-complimentary-vps ${className || ""}`}>
      {/* Header */}
      <div className="get-complimentary-vps-header">
        <div className="badge-row">
          <img src={featuresIcon} alt="Features Badge" />
          <span className="badge-label">
            {t("get_complimentary_vps_badge_text")}
          </span>
        </div>
        <h2 className="get-complimentary-vps-title">
          {t("get_complimentary_vps_title")}
        </h2>
        <p className="get-complimentary-vps-subtitle">
          {t("get_complimentary_vps_subtitle")}
        </p>
      </div>

      {/* Cards */}
      <div className="get-complimentary-vps-cards container">
        {/* Card 1: Minimum $3000 deposit */}
        <div className="get-complimentary-vps-card minimum-deposit-card">
          <div className="card-icon">
            <img
              src={minimumDepositIcon}
              alt={t("get_complimentary_vps_card1_title")}
            />
          </div>
          <h3 className="card-title">
            {t("get_complimentary_vps_card1_title")}
          </h3>
          <p className="card-description">
            {t("get_complimentary_vps_card1_description")}
          </p>
        </div>

        {/* Card 2: Minimum trading volume of 5 Lots Forex */}
        <div className="get-complimentary-vps-card minimum-trading-card">
          <div className="card-icon">
            <img
              src={minimumTradingVolumeIcon}
              alt={t("get_complimentary_vps_card2_title")}
            />
          </div>
          <h3 className="card-title">
            {t("get_complimentary_vps_card2_title")}
          </h3>
          <p className="card-description">
            {t("get_complimentary_vps_card2_description")}
          </p>
        </div>
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

GetComplimentaryVPS.propTypes = {
  className: PropTypes.string,
};

export default GetComplimentaryVPS;
