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
    <div className="trading-item">
      <div className="trading-item__title">
        {name}
      </div>
      <div className="trading-item__data">
        <div className="trading-item__option">
          <div className="trading-item__option-title">
            Bid
          </div>
          <div className="trading-item__option-value">
            {bid}
          </div>
        </div>

        <div className="trading-item__option">
          <div className="trading-item__option-title">
            Ask
          </div>
          <div className="trading-item__option-value">
            {ask}
          </div>
        </div>

        <div className="trading-item__option">
          <div className="trading-item__option-title">
            Spread
          </div>
          <div className="trading-item__option-value">
            {spread}
          </div>
        </div>

        <div className="trading-item__option">
          <div className="trading-item__option-title">
            Trend
          </div>
          <div className="trading-item__option-value">
            {trend}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingSymbol;