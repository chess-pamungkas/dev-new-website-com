import React from "react";
import ButtonLink from "../components/shared/button-link";
import cn from "classnames";

export const COLUMNS_FOREX = [
  {
    Header: <span>Currency Pair</span>,
    accessor: "col1", // accessor is the "key" in the data
  },
  {
    Header: (
      <span>
        Minimum Price
        <br />
        Fluctuation
      </span>
    ),
    accessor: "col2",
  },
  {
    Header: (
      <span>
        Spreads
        <br />
        As Low As*
      </span>
    ),
    accessor: "col3",
  },
  {
    Header: (
      <span>
        Average
        <br />
        Spreads*
      </span>
    ),
    accessor: "col4",
  },
  {
    Header: (
      <span>
        Long Swap
        <br />
        Value (Points)**
      </span>
    ),
    accessor: "col5",
  },
  {
    Header: (
      <span>
        Short Swap
        <br />
        (Points)**
      </span>
    ),
    accessor: "col6",
  },
  {
    Header: <span>Value Of 1 Lot</span>,
    accessor: "col7",
  },
  {
    Header: (
      <span>
        Limit And Stop
        <br />
        Levels***
      </span>
    ),
    accessor: "col8",
  },
];

export const DATA_FOREX = [
  {
    col1: "AUDCAD",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDCHF",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDJPY",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDNZD",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDUSD",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDUSD",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDUSD",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDUSD",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDUSD",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "AUDUSD",
    col2: "0.00001",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
  {
    col1: "eeee",
    col2: "0.%5555555",
    col3: "0.00028",
    col4: "0.0003",
    col5: "-5.83",
    col6: "-1.97",
    col7: "100000 AUD",
    col8: "0",
  },
];

export const COLUMNS_CRYPTO = [
  {
    Header: <span />,
    accessor: "col1",
  },
  {
    Header: <span>Bid</span>,
    accessor: "col2",
  },
  {
    Header: <span>Ask</span>,
    accessor: "col3",
  },
  {
    Header: <span>Spread</span>,
    accessor: "col4",
  },
  {
    Header: <span />,
    accessor: "col5",
  },
];

export const DATA_CRYPTO = [
  {
    col1: "BTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "BCHUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "ETHUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "LTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "XRPUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "BNBUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "BTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "BNBUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "BTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
  {
    col1: "BTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: (
      <div className="table__btn-wrapper">
        <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
          Buy
        </ButtonLink>
        <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
          Sell
        </ButtonLink>
      </div>
    ),
  },
];
