import * as React from 'react';

const TradingSymbol = ({
  name,
  direction,
  bid,
  ask,
  spread,
  trend
}) => {
  return (
    <div className="trading-symbol">
      <div className="trading-symbol__title">
        <span>{name}</span>
      </div>
      <div className="trading-symbol__data">
        <div className="trading-symbol__option">
          <div className="trading-symbol__option-title">
            Bid
          </div>
          <div className="trading-symbol__option-value trading-symbol__option-value--up">
            {bid}
          </div>
        </div>

        <div className="trading-symbol__option">
          <div className="trading-symbol__option-title">
            Ask
          </div>
          <div className={`trading-symbol__option-value ${direction ? 'trading-symbol__option-value--up' : 'trading-symbol__option-value--down'}`}>
            {ask}
          </div>
        </div>

        <div className="trading-symbol__option">
          <div className="trading-symbol__option-title">
            Spread
          </div>
          <div className="trading-symbol__option-value">
            {spread}
          </div>
        </div>

        <div className="trading-symbol__option">
          <div className="trading-symbol__option-title">
            Trend
          </div>
          <div className={`trading-symbol__option-value ${direction ? 'trading-symbol__option-value--up' : 'trading-symbol__option-value--down'}`}>
            {trend}
          </div>
        </div>
      </div>
      <div className="trading-symbol__actions">
        <button className="trading-symbol__buy">
          Buy
        </button>
        <button className="trading-symbol__sell">
          Sell
        </button>
      </div>
    </div>
  )
}

export default TradingSymbol;