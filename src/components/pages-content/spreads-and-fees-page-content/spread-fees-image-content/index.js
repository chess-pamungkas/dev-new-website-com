import React from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import desktopOurSpreadsSVG from "../../../../assets/images/bg/spreads-fees/our-spreads-desktop.svg";
import mobileOurSpreadsSVG from "../../../../assets/images/bg/spreads-fees/our-spreads-mobile.svg";
import desktopCommissionSVG from "../../../../assets/images/bg/spreads-fees/commission-desktop.svg";
import mobileCommissionSVG from "../../../../assets/images/bg/spreads-fees/commission-mobile.svg";
import desktopSwapRateSVG from "../../../../assets/images/bg/spreads-fees/swap-rate-desktop.svg";
import mobileSwapRateSVG from "../../../../assets/images/bg/spreads-fees/swap-rate-mobile.svg";

const SpreadsFeesImageContent = () => {
  const { isMobile } = useWindowSize();

  const ourSpreadsSrc = isMobile ? mobileOurSpreadsSVG : desktopOurSpreadsSVG;
  const commissionSrc = isMobile ? mobileCommissionSVG : desktopCommissionSVG;
  const swapRatesSrc = isMobile ? mobileSwapRateSVG : desktopSwapRateSVG;

  return (
    <div className="fastin-fastout-section">
      <div className="fastin-fastout-section__container">
        <img
          src={ourSpreadsSrc}
          alt="Our Spreads Section"
          className="fastin-fastout-section__fastin-image"
        />
        <img
          src={commissionSrc}
          alt="Commission Section"
          className="fastin-fastout-your-money-image"
          style={{
            marginBottom: "50px",
          }}
        />
        <img
          src={swapRatesSrc}
          alt="Swap Rates Section"
          className="fastin-fastout-your-money-image"
        />
      </div>
    </div>
  );
};

export default SpreadsFeesImageContent;
