import React from "react";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import { DIR_LTR, DIR_RTL } from "../../../../helpers/constants";
import MarketBuzzInfo from "../market-buzz-info";
import { MARKET_BUZZ_BLOCKS } from "../../../../helpers/trading-tools.config";
import MarketBuzzBlock from "../market-buzz-block";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";

const MarketBuzz = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

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
      </div>
    </section>
  );
};

export default MarketBuzz;
