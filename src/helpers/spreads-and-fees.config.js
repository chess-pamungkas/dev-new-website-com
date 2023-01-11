export const COLUMNS_SPREADS_TABLE_FOREX = [
  {
    id: "group1",
    Header: "",
    columns: [
      {
        Header: "Currency Pair",
        accessor: "col1",
      },
    ],
  },
  {
    id: "group2",
    Header: "Oqtima ECN+ Account",
    columns: [
      {
        Header: "Minimum",
        accessor: "col2",
      },
      {
        Header: "Average",
        accessor: "col3",
      },
    ],
  },
  {
    id: "group3",
    Header: "Oqtima One Account",
    columns: [
      {
        Header: "Minimum",
        accessor: "col4",
      },
      {
        Header: "Average",
        accessor: "col5",
      },
    ],
  },
];

export const DATA_SPREADS_TABLE_FOREX = [
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },

  {
    col1: "USDEUR",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
];

export const COLUMNS_SPREADS_TABLE_INDICES = [
  {
    id: "group1",
    Header: "",
    columns: [
      {
        Header: "Index",
        accessor: "col1",
      },
    ],
  },
  {
    id: "group2",
    Header: "Oqtima ECN+ Account / Oqtima One Account",
    columns: [
      {
        Header: "Symbol",
        accessor: "col2",
      },
      {
        Header: "Minimum Spread",
        accessor: "col3",
      },
    ],
  },
];

export const DATA_SPREADS_TABLE_INDICES = [
  {
    col1: "US30",
    col2: "US30",
    col3: "2.4",
  },
  {
    col1: "GER40",
    col2: "GER40",
    col3: "0.9",
  },
  {
    col1: "UK100",
    col2: "UK100",
    col3: "1.0",
  },
  {
    col1: "NAS100",
    col2: "NAS100",
    col3: "1.0",
  },
  {
    col1: "US500",
    col2: "US500",
    col3: "0.4",
  },
];

export const COLUMNS_SPREADS_TABLE_COMMODITIES = [
  {
    id: "group1",
    Header: "",
    columns: [
      {
        Header: "Instrument",
        accessor: "col1",
      },
    ],
  },
  {
    id: "group2",
    Header: "Oqtima ECN+ / Oqtima One",
    columns: [
      {
        Header: "Symbol",
        accessor: "col2",
      },
      {
        Header: "Contract Size Per Lot",
        accessor: "col3",
      },
      {
        Header: "Contract Value Per Full Point",
        accessor: "col4",
      },
      {
        Header: "Minimum Spread",
        accessor: "col5",
      },
      {
        Header: "Average Spread*",
        accessor: "col6",
      },
      {
        Header: "Retail Leverage",
        accessor: "col7",
      },
    ],
  },
];

export const DATA_SPREADS_TABLE_COMMODITIES = [
  {
    col1: "Spot Gold ($)",
    col2: "XAUUSD",
    col3: "100 Ounces",
    col4: "100 USD",
    col5: "0.05",
    col6: "0.13",
    col7: "20:1",
  },
  {
    col1: "Spot Silver ($)",
    col2: "XAGUSD",
    col3: "5000 Ounces",
    col4: "50 USD",
    col5: "0.5",
    col6: "1.09",
    col7: "10:1",
  },
  {
    col1: "Spo Platinum",
    col2: "XPTUSD",
    col3: "100 Ounces",
    col4: "10 USD",
    col5: "2.33",
    col6: "4.94",
    col7: "10:1",
  },
  {
    col1: "Spot Palladium",
    col2: "XPDUSD",
    col3: "100 Ounces",
    col4: "10 USD",
    col5: "17.39",
    col6: "17.31",
    col7: "10:1",
  },
  {
    col1: "High-Grade Copper",
    col2: "Copper",
    col3: "2000 Lbs",
    col4: "2 USD",
    col5: "2.60",
    col6: "2.60",
    col7: "10:1",
  },
];

export const COLUMNS_SPREADS_TABLE_CRYPTO = [
  {
    id: "group1",
    Header: "",
    columns: [
      {
        Header: "Cryptocurrency",
        accessor: "col1",
      },
    ],
  },
  {
    id: "group2",
    Header: "Oqtima ECN+ / Oqtima One",
    columns: [
      {
        Header: "Symbol",
        accessor: "col2",
      },
      {
        Header: "Minimum Spread",
        accessor: "col3",
      },
      {
        Header: "Average Spread",
        accessor: "col4",
      },
    ],
  },
];

export const DATA_SPREADS_TABLE_CRYPTO = [
  {
    col1: "Bitcoin",
    col2: "BTCUSD",
    col3: "17.00",
    col4: "30.50",
  },
  {
    col1: "Bitcoin Cash",
    col2: "BCHUSD",
    col3: "0.28",
    col4: "0.50",
  },
  {
    col1: "Ethereum Cash",
    col2: "ETHUSD",
    col3: "3.00",
    col4: "5.30",
  },
  {
    col1: "Dogecoin",
    col2: "DOGEUSD",
    col3: "0.00",
    col4: "0.00",
  },
  {
    col1: "Ripple",
    col2: "XRPUSD",
    col3: "0.00",
    col4: "0.00",
  },
  {
    col1: "Crypto10 Index",
    col2: "Crypt010",
    col3: "90.00",
    col4: "90.00",
  },
  {
    col1: "Crypto20 Index",
    col2: "Crypt020",
    col3: "130.00",
    col4: "130.00",
  },
];

export const COLUMNS_SPREADS_TABLE_SHARES = [
  {
    id: "group1",
    Header: "",
    columns: [
      {
        Header: "Instrument",
        accessor: "col1",
      },
    ],
  },
  {
    id: "group2",
    Header: "Oqtima ECN+ / Oqtima One",
    columns: [
      {
        Header: "CFDs Minimum",
        accessor: "col2",
      },
    ],
  },
];

export const DATA_SPREADS_TABLE_SHARES = [
  {
    col1: "Apple",
    col2: "0 + Market Spread",
  },
  {
    col1: "Facebook",
    col2: "0 + Market Spread",
  },
  {
    col1: "Tesla",
    col2: "0 + Market Spread",
  },
  {
    col1: "Uber",
    col2: "0 + Market Spread",
  },
  {
    col1: "Amazon",
    col2: "0 + Market Spread",
  },
];

export const COLUMNS_SPREADS_TABLE_2 = [
  {
    accessor: "col1",
    Header: "Trading Account Currency",
  },
  {
    accessor: "col2",
    Header: "Commission Per 1 Lot (100,000 Base Currency)",
  },
];

export const DATA_SPREADS_TABLE_2 = [
  {
    col1: "USD",
    col2: "$ 3.50 per lot traded ($7 round turn)",
  },
  {
    col1: "EUR",
    col2: "€ 3.50 per lot traded (€7 round turn)",
  },
  {
    col1: "GBP",
    col2: "£ 3.00 per lot traded (£6 round turn)",
  },
  {
    col1: "CHF",
    col2: "₣ 3.50 per lot traded (₣ 7 round turn)",
  },
  {
    col1: "SGD",
    col2: "S$ 4 per lot traded (S$ 8 round turn)",
  },
  {
    col1: "JPY",
    col2: "¥500 per lot traded (¥1000 round turn)",
  },
  {
    col1: "CAD",
    col2: "Can$ 4.5 per lot traded (Can$ 9 per round turn)",
  },
  {
    col1: "ZAR",
    col2: "R 60 per lot traded (R 120 per round turn)",
  },
];
