import React from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import desktopAboutOqtimaSVG from "../../../../assets/images/about-pages/about-oqtima-desktop.svg";
import mobileAboutOqtimaSVG from "../../../../assets/images/about-pages/about-oqtima-mobile.svg";
import desktopSafetyQualityTradingSVG from "../../../../assets/images/about-pages/safety-quality-trust-desktop.svg";
import mobileSafetyQualityTradingSVG from "../../../../assets/images/about-pages/safety-quality-trust-mobile.svg";

const CompanyImageContent = () => {
  const { isMobile } = useWindowSize();

  const aboutOqtimaSrc = isMobile
    ? mobileAboutOqtimaSVG
    : desktopAboutOqtimaSVG;
  const safetyQualityTradingSrc = isMobile
    ? mobileSafetyQualityTradingSVG
    : desktopSafetyQualityTradingSVG;

  return (
    <div className="fastin-fastout-section">
      <div className="fastin-fastout-section__container">
        <img
          src={aboutOqtimaSrc}
          alt="Tab Trading Calendar Section"
          className="fastin-fastout-section__fastin-image"
        />
        <img
          src={safetyQualityTradingSrc}
          alt="Featured Ideas Section"
          className="fastin-fastout-your-money-image"
          style={{
            marginBottom: "50px",
          }}
        />
      </div>
    </div>
  );
};

export default CompanyImageContent;
