import React from "react";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import cn from "classnames";
import {
  DIR_LTR,
  DIR_RTL,
  GetRegistrationLink,
} from "../../../../helpers/constants";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import AlphaGenerationTabs from "../alpha-generation-tabs";
import ButtonLink from "../../../shared/button-link";

const AlphaGeneration = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslationWithVariables();

  return (
    <section
      id="alphaGeneration"
      className={cn("alpha-generation", className, {
        "alpha-generation--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="alpha-generation__wrapper">
        <div className="alpha-generation__title-wrapper">
          <h2 className="alpha-generation__title">
            {t("trading-tools_alpha-generation_title")}
          </h2>
          <p className="alpha-generation__subtitle">
            {t("trading-tools_alpha-generation_subtitle")}
          </p>
          <p className="alpha-generation__description">
            {t("trading-tools_alpha-generation_description")}
          </p>
        </div>
        <AlphaGenerationTabs />
        <ButtonLink
          link={GetRegistrationLink()}
          className="button-link button-link--red trading-tools-btn"
        >
          {t("trading-tools_top-market-promo-btn3")}
        </ButtonLink>
      </div>
    </section>
  );
};

export default AlphaGeneration;
