import React from "react";

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
];
