import React from "react";
import ButtonLink from "../components/shared/button-link";
import cn from "classnames";

export const DATA_FOREX_MAJOR = [
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
];

export const DATA_FOREX_MINOR = [
  {
    col1: "AUDCAD",
    col2: "0.05",
    col3: "0.11",
    col4: "1.05",
    col5: "1.11",
  },
  {
    col1: "AUDCHF",
    col2: "0.05",
    col3: "0.09",
    col4: "1.05",
    col5: "1.09",
  },
  {
    col1: "AUDCNH",
    col2: "0.58",
    col3: "2.80",
    col4: "1.58",
    col5: "3.80",
  },
  {
    col1: "AUDJPY",
    col2: "2.00",
    col3: "6.66",
    col4: "3.00",
    col5: "7.66",
  },
  {
    col1: "AUDNZD",
    col2: "0.00",
    col3: "0.11",
    col4: "1.00",
    col5: "1.11",
  },
  {
    col1: "AUDSGD",
    col2: "0.08",
    col3: "0.23",
    col4: "1.08",
    col5: "1.23",
  },
  {
    col1: "AUDZAR",
    col2: "0.84",
    col3: "7.57",
    col4: "1.84",
    col5: "8.57",
  },
  {
    col1: "CADCHF",
    col2: "0.05",
    col3: "0.11",
    col4: "1.05",
    col5: "1.11",
  },
  {
    col1: "CADJPY",
    col2: "2.00",
    col3: "10.23",
    col4: "3.00",
    col5: "11.23",
  },
  {
    col1: "CHFJPY",
    col2: "5.00",
    col3: "16.08",
    col4: "6.00",
    col5: "17.08",
  },
  {
    col1: "EURAUD",
    col2: "0.05",
    col3: "0.12",
    col4: "1.05",
    col5: "1.12",
  },
  {
    col1: "EURCAD",
    col2: "0.05",
    col3: "0.12",
    col4: "1.05",
    col5: "1.12",
  },
  {
    col1: "EURCHF",
    col2: "0.03",
    col3: "0.09",
    col4: "1.03",
    col5: "1.09",
  },
  {
    col1: "EURGBP",
    col2: "0.02",
    col3: "0.06",
    col4: "1.02",
    col5: "1.06",
  },
  {
    col1: "EURJPY",
    col2: "0.00",
    col3: "7.95",
    col4: "1.00",
    col5: "8.95",
  },
  {
    col1: "EURNZD",
    col2: "0.05",
    col3: "0.22",
    col4: "1.05",
    col5: "1.22",
  },
  {
    col1: "GBPAUD",
    col2: "0.05",
    col3: "0.27",
    col4: "1.05",
    col5: "1.27",
  },
  {
    col1: "GBPCAD",
    col2: "0.00",
    col3: "0.21",
    col4: "1.00",
    col5: "1.21",
  },
  {
    col1: "GBPCHF",
    col2: "0.05",
    col3: "0.22",
    col4: "1.05",
    col5: "1.22",
  },
  {
    col1: "GBPJPY",
    col2: "0.00",
    col3: "1.60",
    col4: "1.00",
    col5: "2.60",
  },
  {
    col1: "USDSGD",
    col2: "0.06",
    col3: "0.17",
    col4: "1.06",
    col5: "1.17",
  },
];

export const DATA_FOREX_EXOTIC = [];

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
    col1: "XBRUSD",
    col2: "2.00",
    col3: "3.66",
    col4: "3.00",
    col5: "4.66",
  },
  {
    col1: "XTIUSD",
    col2: "4.00",
    col3: "4.01",
    col4: "5.00",
    col5: "5.01",
  },
  {
    col1: "XNGUSD",
    col2: "0.00",
    col3: "5.43",
    col4: "1.00",
    col5: "6.43",
  },
];

export const DATA_ETF = [];
