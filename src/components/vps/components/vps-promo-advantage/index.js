import React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";

const VPSPromoAdvantage = ({ img, title, titleAccent }) => {
  const isRTL = useRtlDirection();

  return (
    <div
      className={cn("vps-promo-advantage-item", {
        "vps-promo-advantage-item--rtl": isRTL,
      })}
    >
      <img className="vps-promo-advantage-item__img" src={img} alt={""} />
      <p className="vps-promo-advantage-item__title">
        {
          <HighlightedLocalizationText
            localizationText={title}
            wordsToHighlight={titleAccent}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      </p>
    </div>
  );
};

export default VPSPromoAdvantage;
