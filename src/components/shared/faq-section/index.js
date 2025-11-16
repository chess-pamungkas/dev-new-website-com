import React from "react";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { ButtonPrimaryStandard } from "../reusable-buttons";
import Faq from "../../faq";
import SpreadsIcon from "../../../assets/images/icons/main-page/features-execution-excellence/features.svg";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { useI18next } from "gatsby-plugin-react-i18next";

const FaqSection = ({
  faqData,
  className = "",
  badgeTextKey = "faq-badge-text",
  titleKey = "faq-title",
  subtitleKey = "faq-subtitle",
  buttonTextKey = "faq-button-text",
  onFaqButtonClick,
}) => {
  const { t } = useTranslationWithVariables();
  const isRTL = useRtlDirection();
  const { navigate } = useI18next();

  const handleFaqButtonClick = () => {
    if (onFaqButtonClick) {
      onFaqButtonClick();
    } else {
      // Default behavior - navigate to FAQ page
      // Use navigate from useI18next to preserve language prefix in browser history
      navigate("/faq");
    }
  };

  return (
    <div
      className={`faq-section ${className} ${isRTL ? `${className}--rtl` : ""}`}
    >
      {/* Left Side - Badge, Title, Subtitle, Button */}
      <div className="faq-left">
        <div className="faq-badge">
          <div className="faq-badge-icon">
            <img src={SpreadsIcon} alt="FAQ" />
          </div>
          <span className="faq-badge-text">{t(badgeTextKey)}</span>
        </div>
        <h2 className="faq-title">{t(titleKey)}</h2>
        <p className="faq-subtitle">{t(subtitleKey)}</p>
        <ButtonPrimaryStandard
          text={t(buttonTextKey)}
          onClick={handleFaqButtonClick}
          showArrow={true}
        />
      </div>

      {/* Right Side - FAQ Items */}
      <div className="faq-right">
        {/* Comprehensive FAQ Component - Using help-center structure */}
        {faqData && faqData.length > 0 && (
          <Faq
            faq={faqData}
            className="faq--help-center"
            title={null}
            isFaqBtnHidden={true}
          />
        )}
      </div>
    </div>
  );
};

FaqSection.propTypes = {
  faqData: PropTypes.array.isRequired,
  className: PropTypes.string,
  badgeTextKey: PropTypes.string,
  titleKey: PropTypes.string,
  subtitleKey: PropTypes.string,
  buttonTextKey: PropTypes.string,
  onFaqButtonClick: PropTypes.func,
};

export default FaqSection;
