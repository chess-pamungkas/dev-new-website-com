import React, { useState, useEffect } from "react";
import { GetLoginLink } from "../../../../helpers/constants";
import ButtonLink from "../../../shared/button-link";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const NO_VALUE = "N/A";

function parseSymbols(symbol, tradingSymbols) {
  let symbolData = tradingSymbols.find((item) => item.symbol === symbol) || {};

  return {
    bid: symbolData.bid || NO_VALUE,
    ask: symbolData.ask || NO_VALUE,
    direction: symbolData.direction || NO_VALUE,
  };
}

const TableLiveColumn = ({ symbol, tradingSymbols }) => {
  const { t } = useTranslation();
  const { bid, ask, direction } = parseSymbols(symbol, tradingSymbols);

  return (
    <div className="table__info-column">
      <div className="table__params">
        <div className="table__param">
          <span className="table__param-name">
            {t("index_trading-ticker-bid")}
          </span>
          <span className="table__param-value--up">{bid}</span>
        </div>
        <div className="table__param">
          <span className="table__param-name">
            {t("index_trading-ticker-ask")}
          </span>
          <span className={`table__param-value--${direction}`}>{ask}</span>
        </div>
      </div>
      <div className="table__btn-wrapper">
        <ButtonLink
          link={GetLoginLink()}
          className={cn("table__btn", "table__btn--green")}
        >
          {t("index_trading-ticker-buy")}
        </ButtonLink>
        <ButtonLink
          link={GetLoginLink()}
          className={cn("table__btn", "table__btn--red")}
        >
          {t("index_trading-ticker-sell")}
        </ButtonLink>
      </div>
    </div>
  );
};

export default TableLiveColumn;
