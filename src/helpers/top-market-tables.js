import React from "react";
import ButtonLink from "../components/shared/button-link";
import cn from "classnames";

export const DATA_FOREX = [
  {
    col1: "AUDNZD",
    col2: "0.00",
    col3: "1.12",
    col4: "1.00",
    col5: "2.12",
  },
  {
    col1: "AUDUSD",
    col2: "0.00",
    col3: "0.14",
    col4: "1.00",
    col5: "1.14",
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

export const DATA_CRYPTO = [
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
    col3: "2.42",
    col4: "3.3",
    col5: "3.42",
  },
];

export const DATA_SHARES = [
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

export const DATA_METALS = [
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

export const DATA_INDICES = [
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

export const DATA_ENERGIES = [
  {
    col1: "AUDCAD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
  {
    col1: "EUSTX50",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
  {
    col1: "FRA40",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
  {
    col1: "GER30",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
  {
    col1: "NAS100",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },

  {
    col1: "SGCSGD",
    col2: "0",
    col3: "0.4",
    col4: "0",
    col5: "0.4",
  },
];
