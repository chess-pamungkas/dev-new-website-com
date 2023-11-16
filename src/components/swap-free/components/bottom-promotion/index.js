import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import ButtonLink from "../../../shared/button-link";

const SwapFreeBottomPromotion = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <section
      className={cn("swap-free-bottom-promotion", className, {
        "swap-free-bottom-promotion--rtl": isRTL,
      })}
    >
      <p className="swap-free-bottom-promotion__title">
        {
          <HighlightedLocalizationText
            localizationText="swap-free_bottom-promotion-title"
            wordsToHighlight="swap-free_bottom-promotion-title-accent"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-red"
          />
        }
      </p>
      <p className="swap-free-bottom-promotion__text">
        {t("swap-free_bottom-promotion-text")}
      </p>
      <ButtonLink className={"swap-free-bottom-promotion__btn"}>
        {t("swap-free_bottom-promotion-btn")}
      </ButtonLink>
    </section>
  );
};

export default SwapFreeBottomPromotion;
