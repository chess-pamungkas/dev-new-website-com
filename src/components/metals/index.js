import React, { useState, useContext } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../helpers/hooks/use-translation-with-vars";
import { ShowRegistrationPopup } from "../../helpers/constants";
import { MarketingContext } from "../../context/marketing-context";
import {
  CONTENT_HEROES,
  SECT1_TEXT_SEQUENCES,
  getDefaultTextSequence,
} from "../../helpers/marketing.config";
import { transformParamToKey } from "../../helpers/services/marketing-service";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import LanguageContext from "../../context/language-context";

const Metals = ({ className, isShowHero = true }) => {
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

  const hero =
    CONTENT_HEROES[transformParamToKey(content)] || CONTENT_HEROES.default;

  const titles =
    SECT1_TEXT_SEQUENCES[transformParamToKey(sect1)] || DEFAULT_TEXT_SEQUENCE;

  return (
    <>
      <section
        className={cn("metals", className, {
          "metals--rtl": isRTL,
        })}
      >
        <div className="metals__hero-container">
          {/* Hero Background Image */}
          <div className="metals__hero-bg"></div>

          <div className="container">
            {/* Content Container */}
            <div className="metals__content-container">
              {/* Badge Group */}
              <div className="metals__badge-group">
                <div className="metals__badge-content">
                  <span className="metals__badge-message">
                    {t("metals_badge-text")}
                  </span>
                  <svg
                    className="metals__badge-arrow"
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
              </div>

              {/* Heading */}
              <h1 className="metals__heading">
                <span className="metals__title">
                  {t("metals_metals-title")
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index <
                          t("metals_metals-title").split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                </span>
              </h1>

              {/* Subheading */}
              <p className="metals__subheading">{t("metals_metals-text")}</p>

              {/* Button Container */}
              <div className="metals__button-container">
                <div className="metals__buttons">
                  <button
                    type="button"
                    className="metals__button-primary"
                    onClick={handleShowRegistrationPopup}
                  >
                    <span className="metals__button-text">
                      {t("button-start-trading")}
                    </span>
                    <span className="metals__button-arrow">
                      <svg
                        width="9.33"
                        height="9.33"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.50004H10.3333M10.3333 5.50004L5.66667 0.833374M10.3333 5.50004L5.66667 10.1667"
                          stroke="currentColor"
                          strokeWidth="1.3333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="metals__button-secondary"
                    onClick={handleShowRegistrationPopup}
                  >
                    <span className="metals__button-text">
                      {t("button-try-demo")}
                    </span>
                    <span className="metals__button-arrow">
                      <svg
                        width="9.33"
                        height="9.33"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.50004H10.3333M10.3333 5.50004L5.66667 0.833374M10.3333 5.50004L5.66667 10.1667"
                          stroke="currentColor"
                          strokeWidth="1.3333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Pilot Section */}
            <div className="metals__trust-pilot">
              <span className="metals__trust-rating">
                {t("metals_trust-rating")}
              </span>
              <div className="metals__trust-stars">
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
              <span className="metals__trust-reviews">
                {t("index_main-promotion-reviews")}
              </span>
              <div className="metals__trust-brand">
                <svg
                  className="metals__trust-logo"
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
                <span className="metals__trust-name">
                  {t("metals_trust-name")}
                </span>
              </div>
            </div>
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

Metals.propTypes = {
  className: PropTypes.string,
  isShowHero: PropTypes.bool,
};
export default Metals;
