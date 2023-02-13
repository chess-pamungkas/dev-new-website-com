import { useTranslation } from "gatsby-plugin-react-i18next";

const ColumnsSpreadTableForex = () => {
  const { t } = useTranslation();
  const COLUMNS_SPREADS_TABLE_FOREX = [
    {
      id: "group1",
      Header: "",
      columns: [
        {
          Header: t("spreads_account-group1-header1"),
          accessor: "col1",
        },
      ],
    },
    {
      id: "group2",
      Header: t("spreads_account-group2-table-name1"),
      columns: [
        {
          Header: t("spreads_account-group2-header1"),
          accessor: "col2",
        },
        {
          Header: t("spreads_account-group2-header2"),
          accessor: "col3",
        },
      ],
    },
    {
      id: "group3",
      Header: t("spreads_account-group2-table-name2"),
      columns: [
        {
          Header: t("spreads_account-group2-header1"),
          accessor: "col4",
        },
        {
          Header: t("spreads_account-group2-header2"),
          accessor: "col5",
        },
      ],
    },
  ];
  return COLUMNS_SPREADS_TABLE_FOREX;
};
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
const ColumnsSpreadTableIndices = () => {
  const { t } = useTranslation();
  const COLUMNS_SPREADS_TABLE_INDICES = [
    {
      id: "group1",
      Header: "",
      columns: [
        {
          Header: t("spreads_account-indices-group2-header1"),
          accessor: "col1",
        },
      ],
    },
    {
      id: "group2",
      Header: t("spreads_account-indices-group2-table-name"),
      columns: [
        {
          Header: t("spreads_account-indices-group2-header2"),
          accessor: "col2",
        },
        {
          Header: t("spreads_account-indices-group2-header3"),
          accessor: "col3",
        },
      ],
    },
  ];
  return COLUMNS_SPREADS_TABLE_INDICES;
};

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
const ColumnsSpreadTableCommodities = () => {
  const { t } = useTranslation();
  const COLUMNS_SPREADS_TABLE_COMMODITIES = [
    {
      id: "group1",
      Header: "",
      columns: [
        {
          Header: t("spreads_account_commodities-group1-header1"),
          accessor: "col1",
        },
      ],
    },
    {
      id: "group2",
      Header: t("spreads_account-commodities-group2-table-name"),
      columns: [
        {
          Header: t("spreads_account_commodities-group2-header1"),
          accessor: "col2",
        },
        {
          Header: t("spreads_account_commodities-group2-header2"),
          accessor: "col3",
        },
        {
          Header: t("spreads_account_commodities-group2-header3"),
          accessor: "col4",
        },
        {
          Header: t("spreads_account_commodities-group2-header4"),
          accessor: "col5",
        },
        {
          Header: t("spreads_account_commodities-group2-header5"),
          accessor: "col6",
        },
        {
          Header: t("spreads_account_commodities-group2-header6"),
          accessor: "col7",
        },
      ],
    },
  ];
  return COLUMNS_SPREADS_TABLE_COMMODITIES;
};

const DataSpreadTableCommodities = () => {
  const { t } = useTranslation();
  const DATA_SPREADS_TABLE_COMMODITIES = [
    {
      col1: t("spreads_account_tables-commodities-col1"),
      col2: "XAUUSD",
      col3: t("spreads_account_tables-commodities-col1_3"),
      col4: "100 USD",
      col5: "0.05",
      col6: "0.13",
      col7: "20:1",
    },
    {
      col1: t("spreads_account_tables-commodities-col2"),
      col2: "XAGUSD",
      col3: t("spreads_account_tables-commodities-col2_3"),
      col4: "50 USD",
      col5: "0.5",
      col6: "1.09",
      col7: "10:1",
    },
    {
      col1: t("spreads_account_tables-commodities-col3"),
      col2: "XPTUSD",
      col3: t("spreads_account_tables-commodities-col3_3"),
      col4: "10 USD",
      col5: "2.33",
      col6: "4.94",
      col7: "10:1",
    },
    {
      col1: t("spreads_account_tables-commodities-col4"),
      col2: "XPDUSD",
      col3: t("spreads_account_tables-commodities-col4_3"),
      col4: "10 USD",
      col5: "17.39",
      col6: "17.31",
      col7: "10:1",
    },
    {
      col1: t("spreads_account_tables-commodities-col5"),
      col2: "Copper",
      col3: t("spreads_account_tables-commodities-col5_3"),
      col4: "2 USD",
      col5: "2.60",
      col6: "2.60",
      col7: "10:1",
    },
  ];
  return DATA_SPREADS_TABLE_COMMODITIES;
};

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

const ColumnsSpreadTable2 = () => {
  const { t } = useTranslation();
  const COLUMNS_SPREADS_TABLE_2 = [
    {
      accessor: "col1",
      Header: t("spreads_account-columns-table2-col1-header1"),
    },
    {
      accessor: "col2",
      Header: t("spreads_account-columns-table2-col2-header2"),
    },
  ];
  return COLUMNS_SPREADS_TABLE_2;
};

const DataSpreadTable2 = () => {
  const { t } = useTranslation();
  const DATA_SPREADS_TABLE_2 = [
    {
      col1: "USD",
      col2: t("spreads_account-data-table2-col2-1"),
    },
    {
      col1: "EUR",
      col2: t("spreads_account-data-table2-col2-2"),
    },
    {
      col1: "GBP",
      col2: t("spreads_account-data-table2-col2-3"),
    },
    {
      col1: "CHF",
      col2: t("spreads_account-data-table2-col2-4"),
    },
    {
      col1: "SGD",
      col2: t("spreads_account-data-table2-col2-5"),
    },
    {
      col1: "JPY",
      col2: t("spreads_account-data-table2-col2-6"),
    },
    {
      col1: "CAD",
      col2: t("spreads_account-data-table2-col2-7"),
    },
    {
      col1: "ZAR",
      col2: t("spreads_account-data-table2-col2-8"),
    },
  ];
  return DATA_SPREADS_TABLE_2;
};

export {
  ColumnsSpreadTableForex,
  ColumnsSpreadTableIndices,
  ColumnsSpreadTableCommodities,
  DataSpreadTableCommodities,
  ColumnsSpreadTable2,
  DataSpreadTable2,
};
