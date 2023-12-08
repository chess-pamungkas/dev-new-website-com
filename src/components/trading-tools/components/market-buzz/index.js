import React from "react";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import cn from "classnames";
import {
  DIR_LTR,
  DIR_RTL,
  GetRegistrationLink,
} from "../../../../helpers/constants";
import MarketBuzzInfo from "../market-buzz-info";
import { MARKET_BUZZ_BLOCKS } from "../../../../helpers/trading-tools.config";
import MarketBuzzBlock from "../market-buzz-block";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import ButtonLink from "../../../shared/button-link";

const MarketBuzz = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslationWithVariables();

  return (
    <section
      id="marketBuzz"
      className={cn("market-buzz", className, {
        "market-buzz--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="market-buzz__wrapper">
        <div className="market-buzz__title-wrapper">
          <h2 className="market-buzz__title">
            {t("trading-tools_market-buzz_title")}
          </h2>
          <p className="market-buzz__subtitle">
            {t("trading-tools_market-buzz_subtitle")}
          </p>
          <p className="market-buzz__description">
            {t("trading-tools_market-buzz_description")}
          </p>
        </div>
        <MarketBuzzInfo />
        {MARKET_BUZZ_BLOCKS.map((item) => (
          <MarketBuzzBlock
            key={stringTransformToKebabCase(item.title)}
            title={item.title}
            description={item.description}
            img={item.image}
          />
        ))}
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

export default MarketBuzz;
