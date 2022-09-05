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

const FOREX_COLUMNS_WITH_BTN = (
  <div className="table__info-column">
    <div className="table__params">
      <div className="table__param">
        <span className="table__param-name">Bid</span>
        <span className="table__param-value">0.77</span>
      </div>
      <div className="table__param">
        <span className="table__param-name">Ask</span>
        <span className="table__param-value">0.77</span>
      </div>
    </div>
    <div className="table__btn-wrapper">
      <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
        Buy
      </ButtonLink>
      <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
        Sell
      </ButtonLink>
    </div>
  </div>
);

export const DATA_FOREX = [
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: FOREX_COLUMNS_WITH_BTN,
  },
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: FOREX_COLUMNS_WITH_BTN,
  },
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: FOREX_COLUMNS_WITH_BTN,
  },
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: FOREX_COLUMNS_WITH_BTN,
  },
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: FOREX_COLUMNS_WITH_BTN,
  },

  {
    col1: "USDEUR",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: FOREX_COLUMNS_WITH_BTN,
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

const CRYPTO_COLUMNS_WITH_BTN = (
  <div className={cn("table__btn-wrapper", "table__btn-wrapper--row")}>
    <ButtonLink
      link="/"
      className={cn("table__btn", "table__btn--inline", "table__btn--green")}
    >
      Buy
    </ButtonLink>
    <ButtonLink
      link="/"
      className={cn("table__btn", "table__btn--inline", "table__btn--red")}
    >
      Sell
    </ButtonLink>
  </div>
);

export const DATA_CRYPTO = [
  {
    col1: "BTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "BCHUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "ETHUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "LTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "XRPUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "BNBUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "BTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "BNBUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "BTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
  {
    col1: "BTCUSD",
    col2: "20996",
    col3: "21017",
    col4: "2.1",
    col5: CRYPTO_COLUMNS_WITH_BTN,
  },
];

export const COLUMNS_INDICES = [
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

const INDICES_COLUMNS_WITH_BTN = (
  <div className="table__info-column">
    <div className="table__params">
      <div className="table__param">
        <span className="table__param-name">Bid</span>
        <span className="table__param-value">0.77</span>
      </div>
      <div className="table__param">
        <span className="table__param-name">Ask</span>
        <span className="table__param-value">0.77</span>
      </div>
    </div>
    <div className="table__btn-wrapper">
      <ButtonLink link="/" className={cn("table__btn", "table__btn--green")}>
        Buy
      </ButtonLink>
      <ButtonLink link="/" className={cn("table__btn", "table__btn--red")}>
        Sell
      </ButtonLink>
    </div>
  </div>
);

export const DATA_INDICES = [
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: INDICES_COLUMNS_WITH_BTN,
  },
  {
    col1: "EUSTX50",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: INDICES_COLUMNS_WITH_BTN,
  },
  {
    col1: "FRA40",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: INDICES_COLUMNS_WITH_BTN,
  },
  {
    col1: "GER30",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: INDICES_COLUMNS_WITH_BTN,
  },
  {
    col1: "NAS100",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: INDICES_COLUMNS_WITH_BTN,
  },

  {
    col1: "SGCSGD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
    col6: INDICES_COLUMNS_WITH_BTN,
  },
];