import * as React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";

const TradingSymbol = ({
  className,
  symbol,
  direction,
  bid,
  ask,
  spread,
}) => {
  const isRTL = useRtlDirection();

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
            <div className="trading-symbol__option-title">Bid</div>
            <div className="trading-symbol__option-value trading-symbol__option-value--up">
              {bid}
            </div>
          </div>

          <div className="trading-symbol__option">
            <div className="trading-symbol__option-title">Ask</div>
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
            <div className="trading-symbol__option-title">Spread</div>
            <div className="trading-symbol__option-value">{spread}</div>
          </div>

        </div>
      </div>
      <div className="trading-symbol__actions">
        <button className="trading-symbol__buy">Buy</button>
        <button className="trading-symbol__sell">Sell</button>
      </div>
    </div>
  );
};

export default TradingSymbol;