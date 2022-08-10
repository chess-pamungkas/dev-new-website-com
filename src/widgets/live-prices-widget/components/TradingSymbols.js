import TradingSymbol from './TradingSymbol';
import * as React from 'react';

const TradingSymbols = ({
  symbols
}) => {
  return (
    <div className="trading-items-wrapper">
      <div className="trading-items">
        {symbols.map(symbol =>
          <TradingSymbol key={`TradingSymbol${symbol.id}`} {...symbol} />
        )}
      </div>
    </div>
  )
}

export default TradingSymbols;