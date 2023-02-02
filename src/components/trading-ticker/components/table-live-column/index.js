import React, { useState, useEffect } from "react";
import { REGISTRATION_LINK } from "../../../../helpers/constants";
import ButtonLink from "../../../shared/button-link";
import cn from "classnames";

const TableLiveColumn = ({ symbol, tradingSymbols }) => {
  const NO_VALUE = "N/A";
  const [bidValue, setBidValue] = useState(NO_VALUE);
  const [askValue, setAskValue] = useState(NO_VALUE);
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    let symbolData =
      tradingSymbols.find((item) => item.symbol === symbol) || {};
    setBidValue(symbolData.bid || NO_VALUE);
    setAskValue(symbolData.ask || NO_VALUE);
    setDirection(symbolData.direction || "up");
  }, [tradingSymbols, symbol]);

  return (
    <div className="table__info-column">
      <div className="table__params">
        <div className="table__param">
          <span className="table__param-name">Bid</span>
          <span className="table__param-value--up">{bidValue}</span>
        </div>
        <div className="table__param">
          <span className="table__param-name">Ask</span>
          <span className={`table__param-value--${direction}`}>{askValue}</span>
        </div>
      </div>
      <div className="table__btn-wrapper">
        <ButtonLink
          link={REGISTRATION_LINK}
          className={cn("table__btn", "table__btn--green")}
        >
          Buy
        </ButtonLink>
        <ButtonLink
          link={REGISTRATION_LINK}
          className={cn("table__btn", "table__btn--red")}
        >
          Sell
        </ButtonLink>
      </div>
    </div>
  );
};

export default TableLiveColumn;
