import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import bottomPromo from "../../../../assets/images/vps/bottom-promo.svg";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import ButtonLink from "../../../shared/button-link";

const VPSBottomPromotion = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <section
      className={cn("vps-bottom-promotion", className, {
        "vps-bottom-promotion--rtl": isRTL,
      })}
    >
      <div className={cn("vps-bottom-promotion__wrapper")}>
        <div className="vps-bottom-promotion__img-block">
          <img src={bottomPromo} alt="" className="vps-bottom-promotion__img" />
        </div>
        <div className="vps-bottom-promotion__text-block">
          <p className="vps-bottom-promotion__title">
            {
              <HighlightedLocalizationText
                localizationText="vps_bottom-promotion-title"
                wordsToHighlight="vps_bottom-promotion-title-accent"
                primaryClassName="highlighted-in-black"
                accentClassName="highlighted-in-white"
              />
            }
          </p>
          <ButtonLink className={"top-market__btn top-market__btn--white"}>
            {t("vps_bottom-promotion-btn")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default VPSBottomPromotion;
