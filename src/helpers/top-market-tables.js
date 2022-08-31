import React from "react";
import ButtonLink from "../components/shared/button-link";
import cn from "classnames";

export const COLUMNS_FOREX = [
  {
    id: "group1",
    Header: "",
    columns: [
      {
        Header: "",
        accessor: "col1",
      },
    ],
  },
  {
    id: "group2",
    Header: "ECN+ Account",
    columns: [
      {
        Header: "Min",
        accessor: "col2",
      },
      {
        Header: "Avg",
        accessor: "col3",
      },
    ],
  },
  {
    id: "group3",
    Header: "Simple Account",
    columns: [
      {
        Header: "Min",
        accessor: "col4",
      },
      {
        Header: "Avg",
        accessor: "col5",
      },
    ],
  },
  {
    id: "group4",
    Header: "",
    columns: [
      {
        Header: "Live",
        accessor: "col6",
      },
    ],
  },
];

export const DATA_FOREX = [
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
    col1: "USDEUR",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: (
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
