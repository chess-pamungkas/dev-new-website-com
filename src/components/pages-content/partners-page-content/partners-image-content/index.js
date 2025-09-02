import React from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import desktopFeturesSVG from "../../../../assets/images/partners/features-desktop.svg";
import mobileFeturesSVG from "../../../../assets/images/partners/features-mobile.svg";

const PartnersImageContent = () => {
  const { isMobile } = useWindowSize();

  const featuresSrc = isMobile ? mobileFeturesSVG : desktopFeturesSVG;

  return (
    <div className="fastin-fastout-section">
      <div className="fastin-fastout-section__container">
        <img
          src={featuresSrc}
          alt="Tab Trading Calendar Section"
          className="fastin-fastout-section__fastin-image"
        />
      </div>
    </div>
  );
};

export default PartnersImageContent;
