import React, { useState, useContext } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { ShowRegistrationPopup } from "../../../helpers/constants";
import { MarketingContext } from "../../../context/marketing-context";
import {
  CONTENT_HEROES,
  SECT1_TEXT_SEQUENCES,
  getDefaultTextSequence,
} from "../../../helpers/marketing.config";
import { transformParamToKey } from "../../../helpers/services/marketing-service";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import LanguageContext from "../../../context/language-context";
import { HeroButtons, ButtonPrimaryHero } from "../reusable-buttons";
import FaqSearchBar from "../../help-center/faq-search-bar";
import TrustPilot from "../trust-pilot";

const HeroC = ({
  className,
  isShowHero = true,
  // Custom props for different hero types
  heroType = "main-promotion", // main-promotion, all-markets, forex, metals
  customBadgeText,
  customTitle,
  customSubtitle,
  customPrimaryButtonText,
  customSecondaryButtonText,
  customWarningText,
  showWarning = true,
  showHandImage = true,
  showHeroImage = true,
  showTrustPilot = true,
  // Background images
  desktopBackground,
  mobileBackground,
  // Custom styling
  customClassNames = {},
  // FAQ specific props
  setSearchResults,
  setNoSearchResult,
}) => {
  const { t } = useTranslationWithVariables();
  const { selectedLanguage } = useContext(LanguageContext);
  const { content, sect1 } = useContext(MarketingContext);
  const isRTL = useRtlDirection();
  const DEFAULT_TEXT_SEQUENCE = getDefaultTextSequence(selectedLanguage.id);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePrimaryButtonClick = () => {
    // For MT4 and MT5, scroll to platform section instead of opening popup
    if (heroType === "mt4" || heroType === "mt5") {
      const platformSection = document.getElementById(
        "mt-advantage-list__platform-section"
      );
      if (platformSection) {
        platformSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (heroType === "contact-us") {
      // For contact-us, scroll to the form section
      const contactFormSection = document.getElementById(
        "contact-us__form-section"
      );
      if (contactFormSection) {
        contactFormSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (heroType === "legal") {
      // For contact-us, scroll to the form section
      const contactFormSection = document.getElementById("legalDocuments");
      if (contactFormSection) {
        contactFormSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      handleShowRegistrationPopup();
    }
  };

  const handleSecondaryButtonClick = () => {
    // For partners, redirect to contact-us page
    if (heroType === "partners") {
      window.location.href = "/contact-us";
    } else {
      handleShowRegistrationPopup();
    }
  };

  const hero =
    CONTENT_HEROES[transformParamToKey(content)] || CONTENT_HEROES.default;

  const titles =
    SECT1_TEXT_SEQUENCES[transformParamToKey(sect1)] || DEFAULT_TEXT_SEQUENCE;

  // Get translation keys based on hero type
  const getTranslationKeys = () => {
    switch (heroType) {
      case "all-markets":
        return {
          badge: customBadgeText || "all-markets_badge-text",
          title: customTitle || "all-markets_all-markets-title",
          subtitle: customSubtitle || "all-markets_all-markets-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "forex":
        return {
          badge: customBadgeText || "forex_badge-text",
          title: customTitle || "forex_forex-title",
          subtitle: customSubtitle || "forex_forex-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "metals":
        return {
          badge: customBadgeText || "metals_badge-text",
          title: customTitle || "metals_metals-title",
          subtitle: customSubtitle || "metals_metals-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "account-types":
        return {
          badge: customBadgeText || "accounts-type_badge-text",
          title: customTitle || "accounts-type_accounts-type-title",
          subtitle: customSubtitle || "accounts-type_accounts-type-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "funding-withdrawals":
        return {
          badge: customBadgeText || "funding-withdrawals_badge-text",
          title: customTitle || "funding-withdrawals_funding-withdrawals-title",
          subtitle:
            customSubtitle || "funding-withdrawals_funding-withdrawals-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "spreads-fees":
        return {
          badge: customBadgeText || "spreads-fees_badge-text",
          title: customTitle || "spreads-fees_spreads-fees-title",
          subtitle: customSubtitle || "spreads-fees_spreads-fees-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "trading-tools":
        return {
          badge: customBadgeText || "trading-tools_badge-text",
          title: customTitle || "trading-tools_trading-tools-title",
          subtitle: customSubtitle || "trading-tools_trading-tools-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "vps":
        return {
          badge: customBadgeText || "vps_badge-text",
          title: customTitle || "vps_vps-title",
          subtitle: customSubtitle || "vps_vps-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "swap-free":
        return {
          badge: customBadgeText || "swap-free_badge-text",
          title: customTitle || "swap-free_swap-free-title",
          subtitle: customSubtitle || "swap-free_swap-free-text",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "mt4":
        return {
          badge: customBadgeText || "mt4_badge-text",
          title: customTitle || "mt4_mt4-title",
          subtitle: customSubtitle || "mt4_mt4-text",
          primaryButton: customPrimaryButtonText || "btn-download-mt4",
          secondaryButton: null, // Hide secondary button for MT4
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "mt5":
        return {
          badge: customBadgeText || "mt5_badge-text",
          title: customTitle || "mt5_mt5-title",
          subtitle: customSubtitle || "mt5_mt5-text",
          primaryButton: customPrimaryButtonText || "btn-download-mt5",
          secondaryButton: null, // Hide secondary button for MT5
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "company":
        return {
          badge: customBadgeText || "company_badge-text",
          title: customTitle || "company_company-title",
          subtitle: customSubtitle || "company_company-text",
          primaryButton: null, // Hide primary button for company
          secondaryButton: null, // Hide secondary button for company
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "partners":
        return {
          badge: customBadgeText || "partners_badge-text",
          title: customTitle || "partners_partners-title",
          subtitle: customSubtitle || "partners_partners-text",
          primaryButton: customPrimaryButtonText || "partners_button-apply-now",
          secondaryButton:
            customSecondaryButtonText || "partners_button-contact-us",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "contact-us":
        return {
          badge: customBadgeText || "contact-us_badge-text",
          title: customTitle || "contact-us_contact-us-title",
          subtitle: customSubtitle || "contact-us_contact-us-text",
          primaryButton:
            customPrimaryButtonText || "contact-us_button-apply-now",
          secondaryButton:
            customSecondaryButtonText || "contact-us_button-contact-us",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "legal":
        return {
          badge: customBadgeText || "legal_badge-text",
          title: customTitle || "legal_legal-title",
          subtitle: customSubtitle || "legal_legal-text",
          primaryButton: customPrimaryButtonText || "legal_button-download",
          secondaryButton: null, // Hide secondary button for Legal
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      case "faq":
        return {
          badge: customBadgeText || "faq_badge-text",
          title: customTitle || "faq_faq-title",
          subtitle: customSubtitle || "faq_faq-text",
          primaryButton: null, // Hide primary button for FAQ
          secondaryButton: null, // Hide secondary button for FAQ
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
      default: // main-promotion
        return {
          badge: customBadgeText || "index_main-promotion-badge",
          title: customTitle || "index_main-promotion-title",
          subtitle: customSubtitle || "index_main-promotion-subtitle",
          primaryButton: customPrimaryButtonText || "button-start-trading",
          secondaryButton: customSecondaryButtonText || "button-try-demo",
          warning: customWarningText || "index_main-promotion-warning",
          reviews: "index_main-promotion-reviews",
        };
    }
  };

  const translationKeys = getTranslationKeys();

  return (
    <>
      <section
        className={cn(`${heroType}`, className, {
          [`${heroType}--rtl`]: isRTL,
        })}
      >
        <div className={`${heroType}__hero-container`}>
          {/* Hero Background Image */}
          <div className={`${heroType}__hero-bg`}>
            {showHeroImage && <div className={`${heroType}__hero-img`}></div>}
          </div>

          <div className="container">
            {/* Content Container */}
            <div className={`${heroType}__content-container`}>
              {/* Badge Group */}
              <div className={`${heroType}__badge-group`}>
                {heroType === "faq" ? (
                  // Custom FAQ Badge Structure
                  <div className={`${heroType}__badge`}>
                    <div className={`${heroType}__badge-icon`}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2188_5347)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.5 0C1.56701 0 0 1.56701 0 3.5V10.5C0 12.433 1.56701 14 3.5 14H10.5C12.433 14 14 12.433 14 10.5V3.5C14 1.56701 12.433 0 10.5 0H3.5ZM7.94143 3.82614C7.55629 3.04573 6.44343 3.04573 6.05829 3.82614L5.50641 4.9444L4.27233 5.12373C3.41109 5.24887 3.06721 6.30721 3.6904 6.91467L4.58339 7.78512L4.37259 9.01425C4.22547 9.87203 5.12577 10.5261 5.8961 10.1212L6.99986 9.54086L8.10369 10.1212C8.87397 10.5261 9.77431 9.87203 9.62717 9.01425L9.41633 7.78512L10.3093 6.91467C10.9325 6.30721 10.5887 5.24887 9.72741 5.12373L8.49338 4.9444L7.94143 3.82614Z"
                            fill="#FF4400"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2188_5347">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className={`${heroType}__badge-text`}>
                      {t(translationKeys.badge)}
                    </span>
                  </div>
                ) : (
                  // Default Badge Structure
                  <div className={`${heroType}__badge-content`}>
                    <span className={`${heroType}__badge-message`}>
                      {t(translationKeys.badge)}
                    </span>
                    <svg
                      className={`${heroType}__badge-arrow`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.50004H10.3333M10.3333 5.50004L5.66667 0.833374M10.3333 5.50004L5.66667 10.1667"
                        stroke="#FF4400"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Heading */}
              <h1 className={`${heroType}__heading`}>
                <span className={`${heroType}__title`}>
                  {t(translationKeys.title)
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index <
                          t(translationKeys.title).split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                </span>
              </h1>

              {/* Subheading */}
              <p className={`${heroType}__subheading`}>
                {t(translationKeys.subtitle)}
              </p>

              {/* Search Bar for FAQ */}
              {heroType === "faq" && setSearchResults && setNoSearchResult && (
                <div className={`${heroType}__search-container`}>
                  <FaqSearchBar
                    setSearchResults={setSearchResults}
                    setNoSearchResult={setNoSearchResult}
                  />
                </div>
              )}

              {/* Trust Pilot Section for FAQ */}
              {heroType === "faq" && showTrustPilot && (
                <div className={`${heroType}__trust-pilot`}>
                  <span className={`${heroType}__trust-rating`}>Excellent</span>
                  <div className={`${heroType}__trust-stars`}>
                    {/* 5 stars SVG */}
                    <svg
                      width="122"
                      height="24"
                      viewBox="0 0 122 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.3978 0.667297H0.732422V23.3327H23.3978V0.667297Z"
                        fill="#219653"
                      />
                      <path
                        d="M47.952 0.667297H25.2866V23.3327H47.952V0.667297Z"
                        fill="#219653"
                      />
                      <path
                        d="M72.5062 0.667297H49.8408V23.3327H72.5062V0.667297Z"
                        fill="#219653"
                      />
                      <path
                        d="M97.0604 0.667297H74.395V23.3327H97.0604V0.667297Z"
                        fill="#219653"
                      />
                      <path
                        d="M121.614 0.667297H98.9487V23.3327H121.614V0.667297Z"
                        fill="#219653"
                      />
                      <path
                        d="M12.0647 15.9427L15.5118 15.0691L16.9519 19.5078L12.0647 15.9427ZM19.9976 10.2055H13.9299L12.0647 4.49194L10.1995 10.2055H4.13184L9.04267 13.747L7.1775 19.4605L12.0883 15.9191L15.1104 13.747L19.9976 10.2055Z"
                        fill="white"
                      />
                      <path
                        d="M36.6189 15.9427L40.0659 15.0691L41.5061 19.5078L36.6189 15.9427ZM44.5518 10.2055H38.4841L36.6189 4.49194L34.7537 10.2055H28.686L33.5969 13.747L31.7317 19.4605L36.6425 15.9191L39.6646 13.747L44.5518 10.2055Z"
                        fill="white"
                      />
                      <path
                        d="M61.1731 15.9427L64.6201 15.0691L66.0603 19.5078L61.1731 15.9427ZM69.106 10.2055H63.0383L61.1731 4.49194L59.3079 10.2055H53.2402L58.1511 13.747L56.2859 19.4605L61.1967 15.9191L64.2188 13.747L69.106 10.2055Z"
                        fill="white"
                      />
                      <path
                        d="M85.7268 15.9427L89.1739 15.0691L90.6141 19.5078L85.7268 15.9427ZM93.6597 10.2055H87.592L85.7268 4.49194L83.8617 10.2055H77.7939L82.7048 13.747L80.8396 19.4605L85.7504 15.9191L88.7725 13.747L93.6597 10.2055Z"
                        fill="white"
                      />
                      <path
                        d="M110.282 15.9427L113.729 15.0691L115.169 19.5078L110.282 15.9427ZM118.214 10.2055H112.147L110.282 4.49194L108.416 10.2055H102.349L107.259 13.747L105.394 19.4605L110.305 15.9191L113.327 13.747L118.214 10.2055Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className={`${heroType}__trust-reviews`}>
                    {t(translationKeys.reviews)}
                  </span>
                  <div className={`${heroType}__trust-brand`}>
                    <svg
                      className={`${heroType}__trust-logo`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.01248 11.9428L11.4595 11.0692L12.8997 15.5079L8.01248 11.9428ZM15.9454 6.20563H9.87765L8.01248 0.492065L6.14731 6.20563H0.0795898L4.99043 9.7471L3.12525 15.4607L8.03609 11.9192L11.0581 9.7471L15.9454 6.20563Z"
                        fill="#219653"
                      />
                    </svg>
                    <span className={`${heroType}__trust-name`}>
                      Trustpilot
                    </span>
                  </div>
                </div>
              )}

              {/* Button Container */}
              {(translationKeys.primaryButton ||
                translationKeys.secondaryButton) && (
                <div className={`${heroType}__button-container`}>
                  {translationKeys.secondaryButton ? (
                    <HeroButtons
                      primaryText={t(translationKeys.primaryButton)}
                      secondaryText={t(translationKeys.secondaryButton)}
                      onPrimaryClick={handlePrimaryButtonClick}
                      onSecondaryClick={handleSecondaryButtonClick}
                    />
                  ) : translationKeys.primaryButton ? (
                    <ButtonPrimaryHero
                      text={t(translationKeys.primaryButton)}
                      onClick={handlePrimaryButtonClick}
                      className={
                        heroType === "mt4"
                          ? "mt4-hero-button"
                          : heroType === "mt5"
                          ? "mt5-hero-button"
                          : heroType === "legal"
                          ? "legal-hero-button"
                          : ""
                      }
                    />
                  ) : null}

                  {/* Warning Container */}
                  {showWarning && (
                    <div className={`${heroType}__warning-container`}>
                      <svg
                        className={`${heroType}__warning-icon`}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2188_8291)">
                          <path
                            d="M15.6676 11.9985L10.0155 1.60859C9.10744 0.0798092 6.89378 0.077778 5.98447 1.60859L0.332715 11.9985C-0.595597 13.5606 0.528309 15.5388 2.34778 15.5388H13.652C15.47 15.5388 16.5959 13.5622 15.6676 11.9985ZM8 13.6638C7.48318 13.6638 7.0625 13.2431 7.0625 12.7263C7.0625 12.2095 7.48318 11.7888 8 11.7888C8.51681 11.7888 8.9375 12.2095 8.9375 12.7263C8.9375 13.2431 8.51681 13.6638 8 13.6638ZM8.9375 9.91381C8.9375 10.4306 8.51681 10.8513 8 10.8513C7.48318 10.8513 7.0625 10.4306 7.0625 9.91381V5.22631C7.0625 4.7095 7.48318 4.28881 8 4.28881C8.51681 4.28881 8.9375 4.7095 8.9375 5.22631V9.91381Z"
                            fill="#FF4400"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2188_8291">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className={`${heroType}__warning-text`}>
                        {t(translationKeys.warning)}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Trust Pilot Section for all other hero types */}
            {showTrustPilot && heroType !== "faq" && (
              <div className={`${heroType}__trust-pilot`}>
                <span className={`${heroType}__trust-rating`}>Excellent</span>
                <div className={`${heroType}__trust-stars`}>
                  {/* 5 stars SVG */}
                  <svg
                    width="122"
                    height="24"
                    viewBox="0 0 122 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.3978 0.667297H0.732422V23.3327H23.3978V0.667297Z"
                      fill="#219653"
                    />
                    <path
                      d="M47.952 0.667297H25.2866V23.3327H47.952V0.667297Z"
                      fill="#219653"
                    />
                    <path
                      d="M72.5062 0.667297H49.8408V23.3327H72.5062V0.667297Z"
                      fill="#219653"
                    />
                    <path
                      d="M97.0604 0.667297H74.395V23.3327H97.0604V0.667297Z"
                      fill="#219653"
                    />
                    <path
                      d="M121.614 0.667297H98.9487V23.3327H121.614V0.667297Z"
                      fill="#219653"
                    />
                    <path
                      d="M12.0647 15.9427L15.5118 15.0691L16.9519 19.5078L12.0647 15.9427ZM19.9976 10.2055H13.9299L12.0647 4.49194L10.1995 10.2055H4.13184L9.04267 13.747L7.1775 19.4605L12.0883 15.9191L15.1104 13.747L19.9976 10.2055Z"
                      fill="white"
                    />
                    <path
                      d="M36.6189 15.9427L40.0659 15.0691L41.5061 19.5078L36.6189 15.9427ZM44.5518 10.2055H38.4841L36.6189 4.49194L34.7537 10.2055H28.686L33.5969 13.747L31.7317 19.4605L36.6425 15.9191L39.6646 13.747L44.5518 10.2055Z"
                      fill="white"
                    />
                    <path
                      d="M61.1731 15.9427L64.6201 15.0691L66.0603 19.5078L61.1731 15.9427ZM69.106 10.2055H63.0383L61.1731 4.49194L59.3079 10.2055H53.2402L58.1511 13.747L56.2859 19.4605L61.1967 15.9191L64.2188 13.747L69.106 10.2055Z"
                      fill="white"
                    />
                    <path
                      d="M85.7268 15.9427L89.1739 15.0691L90.6141 19.5078L85.7268 15.9427ZM93.6597 10.2055H87.592L85.7268 4.49194L83.8617 10.2055H77.7939L82.7048 13.747L80.8396 19.4605L85.7504 15.9191L88.7725 13.747L93.6597 10.2055Z"
                      fill="white"
                    />
                    <path
                      d="M110.282 15.9427L113.729 15.0691L115.169 19.5078L110.282 15.9427ZM118.214 10.2055H112.147L110.282 4.49194L108.416 10.2055H102.349L107.259 13.747L105.394 19.4605L110.305 15.9191L113.327 13.747L118.214 10.2055Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className={`${heroType}__trust-reviews`}>
                  {t(translationKeys.reviews)}
                </span>
                <div className={`${heroType}__trust-brand`}>
                  <svg
                    className={`${heroType}__trust-logo`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.01248 11.9428L11.4595 11.0692L12.8997 15.5079L8.01248 11.9428ZM15.9454 6.20563H9.87765L8.01248 0.492065L6.14731 6.20563H0.0795898L4.99043 9.7471L3.12525 15.4607L8.03609 11.9192L11.0581 9.7471L15.9454 6.20563Z"
                      fill="#219653"
                    />
                  </svg>
                  <span className={`${heroType}__trust-name`}>Trustpilot</span>
                </div>
              </div>
            )}

            {/* Hand Image - positioned on the right side */}
            {showHandImage && (
              <div className={`${heroType}__hand-container`}>
                <div className={`${heroType}__hand-img`}></div>
              </div>
            )}
          </div>
        </div>
      </section>
      {isPopupOpen && (
        <ShowRegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          langParam={selectedLanguage.id}
        />
      )}
    </>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  isShowHero: PropTypes.bool,
  heroType: PropTypes.oneOf([
    "main-promotion",
    "all-markets",
    "forex",
    "metals",
    "mt4",
    "mt5",
    "company",
    "partners",
    "contact-us",
    "legal",
    "faq",
  ]),
  customBadgeText: PropTypes.string,
  customTitle: PropTypes.string,
  customSubtitle: PropTypes.string,
  customPrimaryButtonText: PropTypes.string,
  customSecondaryButtonText: PropTypes.string,
  customWarningText: PropTypes.string,
  showWarning: PropTypes.bool,
  showHandImage: PropTypes.bool,
  showHeroImage: PropTypes.bool,
  showTrustPilot: PropTypes.bool,
  desktopBackground: PropTypes.string,
  mobileBackground: PropTypes.string,
  customClassNames: PropTypes.object,
  // FAQ specific props
  setSearchResults: PropTypes.func,
  setNoSearchResult: PropTypes.func,
};

export default HeroC;
