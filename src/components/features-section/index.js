import React from "react";
import { useWindowSize } from "../../helpers/hooks/use-window-size";
import { useTranslationWithVariables } from "../../helpers/hooks/use-translation-with-vars";

// Background images
import desktopBigCardBg from "../../assets/images/bg/main-page/badge-features-big-desktop.svg";
import mobileBigCardBg from "../../assets/images/bg/main-page/badge-features-big-mobile.svg";

// Small card background images - Desktop
import cardPaymentsSecurityDesktop from "../../assets/images/bg/main-page/card-payments-security-desktop.svg";
import cardSuperiorTradingConditionsDesktop from "../../assets/images/bg/main-page/card-superior-trading-conditions-desktop.svg";
import cardDemoAccountDesktop from "../../assets/images/bg/main-page/card-demo-account-desktop.svg";

// Small card background images - Mobile
import cardPaymentsSecurityMobile from "../../assets/images/bg/main-page/card-payments-security-mobile.svg";
import cardSuperiorTradingConditionsMobile from "../../assets/images/bg/main-page/card-superior-trading-conditions-mobile.svg";
import cardDemoAccountMobile from "../../assets/images/bg/main-page/card-demo-account-mobile.svg";

// Card content images
import tier1BanksDesktop from "../../assets/images/main-page/tier1-banks-desktop.svg";
import tier1BanksMobile from "../../assets/images/main-page/tier1-banks-mobile.svg";
import chooseLanguageDesktop from "../../assets/images/main-page/choose-your-language-desktop.svg";
import chooseLanguageMobile from "../../assets/images/main-page/choose-your-language-mobile.svg";

// Feature icons
import ClientSecurityIcon from "../../assets/images/icons/main-page/features/features-client-security-regulation.svg";
import MultiLanguageIcon from "../../assets/images/icons/main-page/features/features-multi-language-support.svg";
import PaymentsIcon from "../../assets/images/icons/main-page/features/features-payments-security.svg";
import TradingConditionsIcon from "../../assets/images/icons/main-page/features/features-superior-trading-conditions.svg";
import DemoAccountIcon from "../../assets/images/icons/main-page/features/features-demo-account.svg";
import FeaturesIcon from "../../assets/images/icons/features.svg";

const FeaturesContent = () => {
  const { isMobile } = useWindowSize();
  const { t } = useTranslationWithVariables();

  const bigCardBg = isMobile ? mobileBigCardBg : desktopBigCardBg;
  const tier1BanksImg = isMobile ? tier1BanksMobile : tier1BanksDesktop;
  const chooseLanguageImg = isMobile
    ? chooseLanguageMobile
    : chooseLanguageDesktop;

  // Small card background images based on device
  const smallCardBgs = {
    payments: isMobile
      ? cardPaymentsSecurityMobile
      : cardPaymentsSecurityDesktop,
    trading: isMobile
      ? cardSuperiorTradingConditionsMobile
      : cardSuperiorTradingConditionsDesktop,
    demo: isMobile ? cardDemoAccountMobile : cardDemoAccountDesktop,
  };

  return (
    <div className="features-content-section">
      <div className="features-content-section__container">
        {/* Header Section */}
        <div className="features-content-section__header">
          <div className="features-content-section__badge">
            <img
              src={FeaturesIcon}
              alt="Features"
              className="features-content-section__badge-icon"
            />
            <span className="features-content-section__badge-text">
              Features
            </span>
          </div>
          <h2 className="features-content-section__title">Why Choose OQtima</h2>
          <p className="features-content-section__subtitle">
            Experience the difference of true cost efficiency
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-content-section__grid">
          {/* Top Row - Big Cards */}
          <div className="features-content-section__big-cards">
            {/* Client Security & Regulation */}
            <div className="features-content-section__card features-content-section__card--big">
              <div
                className="features-content-section__card-bg"
                style={{ backgroundImage: `url(${bigCardBg})` }}
              >
                {/* Left Content Container (302px width) */}
                <div className="features-content-section__card-left">
                  <div className="features-content-section__card-header">
                    <img
                      src={ClientSecurityIcon}
                      alt="Client Security"
                      className="features-content-section__card-icon"
                    />
                    <h3 className="features-content-section__card-title">
                      Client Security & Regulation
                    </h3>
                  </div>
                  <p className="features-content-section__card-description">
                    Your funds are secure with segregated accounts at Tier-1
                    banks and negative balance protection. We operate with full
                    regulatory transparency for your peace of mind.
                  </p>
                </div>

                {/* Right Illustration Container (302px width) */}
                <div className="features-content-section__card-right">
                  <div className="features-content-section__card-graphic">
                    <img
                      src={tier1BanksImg}
                      alt="Tier 1 Banks"
                      className="features-content-section__card-graphic-img tier1-banks-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 24/7 Multi-Language Support */}
            <div className="features-content-section__card features-content-section__card--big">
              <div
                className="features-content-section__card-bg"
                style={{ backgroundImage: `url(${bigCardBg})` }}
              >
                {/* Left Content Container (302px width) */}
                <div className="features-content-section__card-left">
                  <div className="features-content-section__card-header">
                    <img
                      src={MultiLanguageIcon}
                      alt="Multi Language Support"
                      className="features-content-section__card-icon"
                    />
                    <h3 className="features-content-section__card-title">
                      24/7 Multi-Language Support
                    </h3>
                  </div>
                  <p className="features-content-section__card-description">
                    Get round-the-clock assistance via live chat, phone, email,
                    WhatsApp, and Telegram. Our specialists support you in
                    English, Arabic, Spanish, and Portuguese.
                  </p>
                </div>

                {/* Right Illustration Container (302px width) */}
                <div className="features-content-section__card-right">
                  <div className="features-content-section__card-graphic">
                    <img
                      src={chooseLanguageImg}
                      alt="Choose Your Language"
                      className="features-content-section__card-graphic-img choose-language-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Small Cards */}
          <div className="features-content-section__small-cards">
            {/* Payments & Security */}
            <div className="features-content-section__card features-content-section__card--small">
              <div
                className="features-content-section__card-bg"
                style={{ backgroundImage: `url(${smallCardBgs.payments})` }}
              >
                <div className="features-content-section__card-content">
                  <div className="features-content-section__card-header">
                    <img
                      src={PaymentsIcon}
                      alt="Payments & Security"
                      className="features-content-section__card-icon"
                    />
                    <h3 className="features-content-section__card-title">
                      Payments & Security
                    </h3>
                  </div>
                  <p className="features-content-section__card-description">
                    Enjoy convenient regional payment methods, local banking
                    options, and cryptocurrency support. We offer same-day
                    withdrawals and ensure your funds and data are always
                    secure.
                  </p>
                </div>
              </div>
            </div>

            {/* Superior Trading Conditions */}
            <div className="features-content-section__card features-content-section__card--small">
              <div
                className="features-content-section__card-bg"
                style={{ backgroundImage: `url(${smallCardBgs.trading})` }}
              >
                <div className="features-content-section__card-content">
                  <div className="features-content-section__card-header">
                    <img
                      src={TradingConditionsIcon}
                      alt="Superior Trading Conditions"
                      className="features-content-section__card-icon"
                    />
                    <h3 className="features-content-section__card-title">
                      Superior Trading Conditions
                    </h3>
                  </div>
                  <p className="features-content-section__card-description">
                    Trade with an industry-leading $1.5 commission per side and
                    spreads from 0.0 pips. Access 900+ instruments with up to
                    1:1000 leverage, all supported by advanced technology.
                  </p>
                </div>
              </div>
            </div>

            {/* $10,000 Demo Account */}
            <div className="features-content-section__card features-content-section__card--small">
              <div
                className="features-content-section__card-bg"
                style={{ backgroundImage: `url(${smallCardBgs.demo})` }}
              >
                <div className="features-content-section__card-content">
                  <div className="features-content-section__card-header">
                    <img
                      src={DemoAccountIcon}
                      alt="Demo Account"
                      className="features-content-section__card-icon"
                    />
                    <h3 className="features-content-section__card-title">
                      $10,000 Demo Account
                    </h3>
                  </div>
                  <p className="features-content-section__card-description">
                    Practice with a $10,000 virtual balance on our full platform
                    under real market conditions. No risk, no time limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContent;
