import * as React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { useTranslation } from "gatsby-plugin-react-i18next";
import upArrow from "../../../../assets/images/trading-ticker/up-arrow.svg";
import downArrow from "../../../../assets/images/trading-ticker/down-arrow.svg";
import ButtonLink from "../../../shared/button-link";
import { GetLoginLink } from "../../../../helpers/constants";

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
          <img
            src={direction === "up" ? upArrow : downArrow}
            className="trading-symbol__arrow"
          />
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
        <ButtonLink
          link={GetLoginLink()}
          className="trading-symbol__buy button-link--without-bg-trading"
        >
          {t("index_trading-ticker-buy")}
        </ButtonLink>
        <ButtonLink
          link={GetLoginLink()}
          className="trading-symbol__sell button-link--without-bg-trading"
        >
          {t("index_trading-ticker-sell")}
        </ButtonLink>
      </div>
    </div>
  );
};

export default TradingSymbol;
