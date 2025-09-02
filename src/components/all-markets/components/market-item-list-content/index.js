import React from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import InternalLink from "../../../shared/internal-link";
import desktopContentSVG from "../../../../assets/images/bg/all-markets-content-desktop.svg";
import mobileContentSVG from "../../../../assets/images/bg/all-markets-content-mobile.svg";

const MarketItemListContent = () => {
  const { isMobile } = useWindowSize();
  const { t } = useTranslationWithVariables();

  const contentSrc = isMobile ? mobileContentSVG : desktopContentSVG;

  return (
    <div className="market-item-list-content">
      <div className="market-item-list-content__container">
        <img
          src={contentSrc}
          alt="All Markets Content"
          className="market-item-list-content__content-image"
        />
      </div>
    </div>
  );
};

export default MarketItemListContent;
