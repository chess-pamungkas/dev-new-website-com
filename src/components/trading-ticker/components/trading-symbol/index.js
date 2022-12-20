import * as React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TradingSymbol = ({ className, symbol, direction, bid, ask, spread }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <div
      className={cn("trading-symbol", className, {
        "trading-symbol--rtl": isRTL,
      })}
    >
      <div className="trading-symbol__block">
        <div className="trading-symbol__title-wrapper">
          <p className="trading-symbol__title">{symbol}</p>
          <span className="trading-symbol__title-delimiter" />
        </div>
        <div className="trading-symbol__data">
          <div className="trading-symbol__option">
            <div className="trading-symbol__option-title">
              {t("index_trading-ticker-bid")}
            </div>
            <div className="trading-symbol__option-value trading-symbol__option-value--up">
              {bid}
            </div>
          </div>

          <div className="trading-symbol__option">
            <div className="trading-symbol__option-title">
              {t("index_trading-ticker-ask")}
            </div>
            <div
              className={cn("trading-symbol__option-value", {
                "trading-symbol__option-value--up": direction === "up",
                "trading-symbol__option-value--down": direction === "down",
              })}
            >
              {ask}
            </div>
          </div>

          <div className="trading-symbol__option">
            <div className="trading-symbol__option-title">
              {t("index_trading-ticker-spread")}
            </div>
            <div className="trading-symbol__option-value">{spread}</div>
          </div>
        </div>
      </div>
      <div className="trading-symbol__actions">
        <button className="trading-symbol__buy">
          {t("index_trading-ticker-buy")}
        </button>
        <button className="trading-symbol__sell">
          {t("index_trading-ticker-sell")}
        </button>
      </div>
    </div>
  );
};

export default TradingSymbol;