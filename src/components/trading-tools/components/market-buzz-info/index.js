import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import image from "../../../../assets/images/trading-tools/market-buzz.png";
import { MARKET_BUZZ_INFO } from "../../../../helpers/trading-tools.config";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";

const MarketBuzzInfo = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("mb-info", className)}>
      <img
        src={image}
        className="mb-info__img"
        alt={t("trading-tools_market-buzz_title")}
      />
      <div className="mb-info__wrapper">
        {MARKET_BUZZ_INFO.map((item) => (
          <div
            className="mb-info__block"
            key={stringTransformToKebabCase(t(item.description))}
          >
            <p className="mb-info__title">{t(item.title)}</p>
            <p className="mb-info__description">{t(item.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketBuzzInfo;
