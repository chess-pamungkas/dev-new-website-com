import React from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import desktopTabTradingCalendarSVG from "../../../../assets/images/bg/trading-tools/tab-trading-calendar-desktop.svg";
import mobileTabTradingCalendarVG from "../../../../assets/images/bg/trading-tools/tab-trading-calendar-mobile.svg";
import desktopFeaturedIdeasSVG from "../../../../assets/images/bg/trading-tools/featured-ideas-desktop.svg";
import mobileFeaturedIdeasSVG from "../../../../assets/images/bg/trading-tools/featured-ideas-mobile.svg";
import desktopMrketBuzzVG from "../../../../assets/images/bg/trading-tools/market-buzz-desktop.svg";
import mobileMrketBuzzSVG from "../../../../assets/images/bg/trading-tools/market-buzz-mobile.svg";
import desktopAlphaGenerationSVG from "../../../../assets/images/bg/trading-tools/alpha-generation-desktop.svg";
import mobileAlphaGenerationSVG from "../../../../assets/images/bg/trading-tools/alpha-generation-mobile.svg";
import desktopGuideSVG from "../../../../assets/images/bg/trading-tools/guide-desktop.svg";
import mobileGuideSVG from "../../../../assets/images/bg/trading-tools/guide-mobile.svg";

const TradingToolsImageContent = () => {
  const { isMobile } = useWindowSize();

  const tabTradingCalendarSrc = isMobile
    ? mobileTabTradingCalendarVG
    : desktopTabTradingCalendarSVG;
  const featuredIdeasSrc = isMobile
    ? mobileFeaturedIdeasSVG
    : desktopFeaturedIdeasSVG;
  const marketBuzzSrc = isMobile ? mobileMrketBuzzSVG : desktopMrketBuzzVG;
  const alphaGenerationSrc = isMobile
    ? mobileAlphaGenerationSVG
    : desktopAlphaGenerationSVG;
  const guideSrc = isMobile ? mobileGuideSVG : desktopGuideSVG;

  return (
    <div className="fastin-fastout-section">
      <div className="fastin-fastout-section__container">
        <img
          src={tabTradingCalendarSrc}
          alt="Tab Trading Calendar Section"
          className="fastin-fastout-section__fastin-image"
        />
        <img
          src={featuredIdeasSrc}
          alt="Featured Ideas Section"
          className="fastin-fastout-your-money-image"
          style={{
            marginBottom: "50px",
          }}
        />
        <img
          src={marketBuzzSrc}
          alt="Market Buzz Section"
          className="fastin-fastout-your-money-image"
          style={{
            marginBottom: "50px",
          }}
        />
        <img
          src={alphaGenerationSrc}
          alt="Alpha Generation Section"
          className="fastin-fastout-your-money-image"
          style={{
            marginBottom: "50px",
          }}
        />
        <img
          src={guideSrc}
          alt="Guide Section"
          className="fastin-fastout-your-money-image"
        />
      </div>
    </div>
  );
};

export default TradingToolsImageContent;
