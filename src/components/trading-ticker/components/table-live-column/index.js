import React, { useState, useEffect } from "react";
import { GetRegistrationLink } from "../../../../helpers/constants";
import ButtonLink from "../../../shared/button-link";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TableLiveColumn = ({ symbol, tradingSymbols }) => {
  const NO_VALUE = "N/A";
  const [bidValue, setBidValue] = useState(NO_VALUE);
  const [askValue, setAskValue] = useState(NO_VALUE);
  const [direction, setDirection] = useState("up");
  const { t } = useTranslation();
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
          <span className="table__param-name">
            {t("index_trading-ticker-bid")}
          </span>
          <span className="table__param-value--up">{bidValue}</span>
        </div>
        <div className="table__param">
          <span className="table__param-name">
            {t("index_trading-ticker-ask")}
          </span>
          <span className={`table__param-value--${direction}`}>{askValue}</span>
        </div>
      </div>
      <div className="table__btn-wrapper">
        <ButtonLink
          link={GetRegistrationLink()}
          className={cn("table__btn", "table__btn--green")}
        >
          {t("index_trading-ticker-buy")}
        </ButtonLink>
        <ButtonLink
          link={GetRegistrationLink()}
          className={cn("table__btn", "table__btn--red")}
        >
          {t("index_trading-ticker-sell")}
        </ButtonLink>
      </div>
    </div>
  );
};

export default TableLiveColumn;
