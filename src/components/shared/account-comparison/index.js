import React, { useState, useContext, useEffect } from "react";
import BadgeAccountComparisonIcon from "../../../assets/images/icons/account-comparison/badge-account-comparison.svg";
import BadgeMostPopularIcon from "../../../assets/images/icons/account-comparison/badge-most-popular.svg";
import StarMostPopularIcon from "../../../assets/images/icons/account-comparison/star-most-popular.svg";
import BadgeBeginnerChoiceIcon from "../../../assets/images/icons/account-comparison/badge-beginner-choice.svg";
import StarBeginnerChoiceIcon from "../../../assets/images/icons/account-comparison/star-beginner-choice.svg";
import CircleMarkIcon from "../../../assets/images/icons/circle-mark.svg";
import AccountComparisonDesktopBg from "../../../assets/images/bg/account-comparison/account-comparison-desktop.svg";
import AccountComparisonMobileBg from "../../../assets/images/bg/account-comparison/account-comparison-mobile.svg";
import { ShowRegistrationPopup } from "../../../helpers/constants";
import LanguageContext from "../../../context/language-context";
import {
  ButtonPrimaryComparison,
  ButtonSecondaryComparison,
  ButtonPrimaryComparisonZero,
  ButtonContainer,
} from "../reusable-buttons";

const AccountComparison = () => {
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

  const ecnFeatures = [
    "$1.5 commission per side",
    "Spreads from 0.0 pips (consistent)",
    "Up to 1:1000 leverage",
    "Best for: Active traders, scalpers, EAs",
  ];

  const zeroFeatures = [
    "Commission-free trading",
    "Spreads from 1.0 pips",
    "Up to 1:1000 leverage",
    "Best for: Beginners, swing traders",
  ];

  const sharedFeatures = [
    { text: "900+ Instruments", icon: "🌐" },
    { text: "MT4/MT5", icon: "📊" },
    { text: "Negative Balance Protection", icon: "🛡️" },
    { text: "24/7 Support", icon: "🎧" },
  ];

  const backgroundSrc = isMobile
    ? AccountComparisonMobileBg
    : AccountComparisonDesktopBg;

  return (
    <section className="account-comparison-content">
      {/* Background Images */}
      <div className="account-comparison-bg">
        <img
          src={backgroundSrc}
          alt="Account Comparison Background"
          className="account-comparison-bg__image"
        />
      </div>

      {/* Header */}
      <div className="account-comparison-header">
        <div className="badge-row">
          <img
            src={BadgeAccountComparisonIcon}
            alt="Account Comparison Badge"
          />
          <span className="badge-label">Account Comparison</span>
        </div>
        <h2 className="account-comparison-title">
          Choose Your <span className="highlight">Trading Edge</span>
        </h2>
        <p className="account-comparison-subtitle">
          Two powerful accounts designed for different trading styles
        </p>
      </div>

      {/* Account Cards */}
      <div className="account-cards container">
        {/* ECN+ Card */}
        <div className="account-card ecn-card">
          <div className="card-header">
            <div className="card-badge">
              <img src={BadgeMostPopularIcon} alt="Most Popular" />
              <span>Most Popular</span>
            </div>
          </div>
          <div className="card-stars">
            <img src={StarMostPopularIcon} alt="Stars" />
          </div>

          <h3 className="card-title">ECN+</h3>

          <p className="card-description">
            Choose ECN+ if you: Trade frequently (10+ trades/month), Use
            scalping strategies, Run Expert Advisors, Lowest possible costs
          </p>

          <ul className="card-features">
            {ecnFeatures.map((feature, index) => (
              <li key={index} className="feature-item">
                <div className="feature-icon">
                  <img src={CircleMarkIcon} alt="Feature Icon" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="card-buttons">
            {/* <ButtonContainer> */}
            <ButtonPrimaryComparison
              text="Start ECN+"
              onClick={handleShowRegistrationPopup}
            />
            <ButtonSecondaryComparison
              text="Try a Demo Account"
              onClick={handleShowRegistrationPopup}
            />
            {/* </ButtonContainer> */}
          </div>
        </div>

        {/* Zero+ Card */}
        <div className="account-card zero-card">
          <div className="card-header">
            <div className="card-badge">
              <img src={BadgeBeginnerChoiceIcon} alt="Beginners Choice" />
              <span>Beginners choice</span>
            </div>
          </div>
          <div className="card-stars">
            <img src={StarBeginnerChoiceIcon} alt="Star" />
          </div>

          <h3 className="card-title">Zero+</h3>

          <p className="card-description">
            Choose Zero if you: Prefer simple pricing, Trade occasionally, New
            to CFD trading, Avoid commission calculations
          </p>

          <ul className="card-features">
            {zeroFeatures.map((feature, index) => (
              <li key={index} className="feature-item">
                <div className="feature-icon">
                  <img src={CircleMarkIcon} alt="Feature Icon" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="card-buttons">
            {/* <ButtonContainer> */}
            <ButtonPrimaryComparisonZero
              text="Start Zero+"
              onClick={handleShowRegistrationPopup}
            />
            <ButtonSecondaryComparison
              text="Try a Demo Account"
              onClick={handleShowRegistrationPopup}
            />
            {/* </ButtonContainer> */}
          </div>
        </div>
      </div>

      {/* Shared Features */}
      <div className="shared-features">
        <div className="shared-features-content">
          Shared Features: 🌍 900+ Instruments | 💻 MT4/MT5 | 🛡️ Negative
          Balance Protection | 📞 24/7 Support
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

export default AccountComparison;
