import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import { DIR_LTR, DIR_RTL } from "../../../../helpers/constants";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import AlphaGenerationTabs from "../alpha-generation-tabs";

const AlphaGeneration = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <section
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
      </div>
    </section>
  );
};

export default AlphaGeneration;
