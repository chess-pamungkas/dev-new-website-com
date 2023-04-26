import { useTranslation } from "gatsby-plugin-react-i18next";
import { useEntityPostfix } from "./use-entity-postfix";

const GeneralSpreadsTable = () => {
  const { t } = useTranslation();
  const GENERAL_SPREAD_TABLE = [
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
      Header: t("oqtima-ecn-account"),
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
      Header: t("oqtima-one-account"),
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
          Header: t("indices_table-market-header-group4"),
          accessor: "col6",
        },
      ],
    },
  ];
  return GENERAL_SPREAD_TABLE;
};

const ColumnsSpreadTableForex = () => {
  const { t } = useTranslation();
  const COLUMNS_SPREADS_TABLE_FOREX = [
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
      Header: t("oqtima-ecn-account"),
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
      Header: t("oqtima-one-account"),
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
          Header: t("indices_table-market-header-group4"),
          accessor: "col6",
        },
      ],
    },
  ];
  return COLUMNS_SPREADS_TABLE_FOREX;
};
export const DATA_SPREADS_TABLE_FOREX = [
  {
    col1: "AUDUSD",
    col2: "0.00",
    col3: "0.14",
    col4: "1.00",
    col5: "1.14",
  },
  {
    col1: "EURJPY",
    col2: "0.00",
    col3: "0.80",
    col4: "1.00",
    col5: "1.80",
  },
  {
    col1: "EURUSD",
    col2: "0.00",
    col3: "0.12",
    col4: "1.00",
    col5: "1.12",
  },
  {
    col1: "GBPCAD",
    col2: "0.00",
    col3: "2.09",
    col4: "1.00",
    col5: "3.09",
  },
  {
    col1: "GBPJPY",
    col2: "0.00",
    col3: "1.61",
    col4: "1.00",
    col5: "2.61",
  },
  {
    col1: "GBPUSD",
    col2: "0.00",
    col3: "0.36",
    col4: "1.00",
    col5: "1.36",
  },
  {
    col1: "USDCHF",
    col2: "0.00",
    col3: "0.60",
    col4: "1.00",
    col5: "1.60",
  },
  {
    col1: "NZDUSD",
    col2: "0.00",
    col3: "0.40",
    col4: "1.00",
    col5: "1.40",
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
          Header: "",
          accessor: "col1",
        },
      ],
    },
    {
      id: "group2",
      Header: t("oqtima-ecn-account"),
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
      Header: t("oqtima-one-account"),
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
          Header: t("indices_table-market-header-group4"),
          accessor: "col6",
        },
      ],
    },
  ];
  return COLUMNS_SPREADS_TABLE_INDICES;
};

export const DATA_SPREADS_TABLE_INDICES = [
  {
    col1: "USIDX",
    col2: "0.02",
    col3: "0.03",
    col4: "1.02",
    col5: "1.03",
  },
  {
    col1: "US2000",
    col2: "0.08",
    col3: "0.3",
    col4: "1.08",
    col5: "1.3",
  },
  {
    col1: "TW88",
    col2: "0.09",
    col3: "0.4",
    col4: "1.09",
    col5: "1.4",
  },
  {
    col1: "VIX",
    col2: "0.09",
    col3: "0.4",
    col4: "1.09",
    col5: "1.1",
  },
  {
    col1: "NETH25",
    col2: "0.3",
    col3: "0.4",
    col4: "1.3",
    col5: "1.4",
  },

  {
    col1: "FRA40",
    col2: "2",
    col3: "3.1",
    col4: "3",
    col5: "4.1",
  },
  {
    col1: "UK100",
    col2: "2",
    col3: "2.6",
    col4: "3",
    col5: "3.6",
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
          Header: "",
          accessor: "col1",
        },
      ],
    },
    {
      id: "group2",
      Header: t("oqtima-ecn-account"),
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
      Header: t("oqtima-one-account"),
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
          Header: t("indices_table-market-header-group4"),
          accessor: "col6",
        },
      ],
    },
  ];
  return COLUMNS_SPREADS_TABLE_COMMODITIES;
};

export const DATA_SPREADS_TABLE_COMMODITIES = [
  {
    col1: "XAGUSD",
    col2: "0.20",
    col3: "1.05",
    col4: "1.20",
    col5: "2.05",
  },
  {
    col1: "XAGEUR",
    col2: "0.50",
    col3: "0.50",
    col4: "1.50",
    col5: "1.50",
  },
  {
    col1: "XAUEUR",
    col2: "0.50",
    col3: "0.50",
    col4: "1.50",
    col5: "1.50",
  },
  {
    col1: "XAUUSD",
    col2: "0.70",
    col3: "0.79",
    col4: "1.70",
    col5: "1.79",
  },
  {
    col1: "XPTUSD",
    col2: "7.10",
    col3: "32.10",
    col4: "8.10",
    col5: "33.10",
  },
  {
    col1: "XPDUSD",
    col2: "1060.00",
    col3: "1616.68",
    col4: "1061.00",
    col5: "1617.68",
  },
];
const ColumnsSpreadTableCrypto = () => {
  const { t } = useTranslation();
  const COLUMNS_SPREADS_TABLE_CRYPTO = [
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
      Header: t("oqtima-ecn-account"),
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
      Header: t("oqtima-one-account"),
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
          Header: t("indices_table-market-header-group4"),
          accessor: "col6",
        },
      ],
    },
  ];
  return COLUMNS_SPREADS_TABLE_CRYPTO;
};

export const DATA_SPREADS_TABLE_CRYPTO = [
  {
    col1: "DOGEUSD",
    col2: "1.9",
    col3: "2.16",
    col4: "2.9",
    col5: "3.16",
  },
  {
    col1: "MATUSD",
    col2: "2.1",
    col3: "2.32",
    col4: "3.1",
    col5: "3.32",
  },
  {
    col1: "ADAUSD",
    col2: "2.1",
    col3: "2.38",
    col4: "3.1",
    col5: "3.38",
  },
  {
    col1: "XRPUSD",
    col2: "2.1",
    col3: "2.66",
    col4: "3.1",
    col5: "3.66",
  },
  {
    col1: "EOSUSD",
    col2: "2.1",
    col3: "9.07",
    col4: "3.1",
    col5: "10.07",
  },
  {
    col1: "DOTUSD",
    col2: "2.2",
    col3: "2.27",
    col4: "3.2",
    col5: "3.27",
  },
  {
    col1: "LNKUSD",
    col2: "2.3",
    col3: "2.3",
    col4: "3.3",
    col5: "3.42",
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
    Header: "OQtima ECN+ / OQtima One",
    columns: [
      {
        Header: "CFDs Minimum",
        accessor: "col2",
      },
    ],
  },
  {
    id: "group4",
    Header: "",
    columns: [
      {
        Header: "live",
        accessor: "col3",
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
  const { isCySEC } = useEntityPostfix();
  const { t } = useTranslation();
  const DATA_SPREADS_TABLE_2_CYSEC = [
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
  ];
  const DATA_SPREADS_TABLE_2_FSA = [
    ...DATA_SPREADS_TABLE_2_CYSEC,
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
  return isCySEC ? DATA_SPREADS_TABLE_2_CYSEC : DATA_SPREADS_TABLE_2_FSA;
};

export {
  ColumnsSpreadTableIndices,
  ColumnsSpreadTableCommodities,
  ColumnsSpreadTable2,
  DataSpreadTable2,
  ColumnsSpreadTableForex,
  ColumnsSpreadTableCrypto,
};
