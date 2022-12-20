import TradingSymbol from "../trading-symbol";
import * as React from "react";
import cn from "classnames";

const TradingSymbols = ({ className, symbols }) => {
  return (
    <div className={cn("trading-symbols-wrapper", className)}>
      <div className="trading-symbols">
        {symbols.map((symbol) => (
          <TradingSymbol key={`TradingSymbol${symbol.symbol}`} {...symbol} />
        ))}
      </div>
    </div>
  );
};

export default TradingSymbols;