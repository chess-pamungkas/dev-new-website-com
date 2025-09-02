import React from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import desktopFeatures1SVG from "../../../../assets/images/bg/swap-free/features1-desktop.svg";
import mobileFeatures1SVG from "../../../../assets/images/bg/swap-free/features1-mobile.svg";
import desktopFeatures2SVG from "../../../../assets/images/bg/swap-free/features2-desktop.svg";
import mobileFeatures2SVG from "../../../../assets/images/bg/swap-free/features2-mobile.svg";
import desktopFeatures3SVG from "../../../../assets/images/bg/swap-free/features3-desktop.svg";
import mobileFeatures3SVG from "../../../../assets/images/bg/swap-free/features3-mobile.svg";

const VpsImageContent = () => {
  const { isMobile } = useWindowSize();

  const features1Src = isMobile ? mobileFeatures1SVG : desktopFeatures1SVG;
  const features2Src = isMobile ? mobileFeatures2SVG : desktopFeatures2SVG;
  const features3Src = isMobile ? mobileFeatures3SVG : desktopFeatures3SVG;

  return (
    <div className="fastin-fastout-section">
      <div className="fastin-fastout-section__container">
        <img
          src={features1Src}
          alt="Features 1 Section"
          className="fastin-fastout-section__fastin-image"
        />
        <img
          src={features2Src}
          alt="Features 2 Section"
          className="fastin-fastout-your-money-image"
          style={{
            marginBottom: "50px",
          }}
        />
        <img
          src={features3Src}
          alt="Features 3 Section"
          className="fastin-fastout-your-money-image"
          style={{
            marginBottom: "50px",
          }}
        />
      </div>
    </div>
  );
};

export default VpsImageContent;
