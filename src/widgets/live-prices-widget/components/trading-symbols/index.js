import TradingSymbol from "../trading-symbol";
import * as React from "react";

const TradingSymbols = ({ symbols }) => {
  return (
    <div className="trading-symbols-wrapper">
      <div className="trading-symbols">
        {symbols.map((symbol) => (
          <TradingSymbol key={`TradingSymbol${symbol.id}`} {...symbol} />
        ))}
      </div>
    </div>
  );
};

export default TradingSymbols;
