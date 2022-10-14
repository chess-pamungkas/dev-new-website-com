import {
  METALS_PAGE_LINK,
  CRYPTO_PAGE_LINK,
  ENERGIES_PAGE_LINK,
  FOREX_PAGE_LINK,
  INDICES_PAGE_LINK,
  SHARES_PAGE_LINK,
} from "./constants";
import forexIcon from "../assets/images/all-markets/forex.svg";
import IndicesIcon from "../assets/images/all-markets/indices.svg";
import sharesIcon from "../assets/images/all-markets/shares.svg";
import CommoditiesIcon from "../assets/images/all-markets/commodities.svg";
import EnergiesIcon from "../assets/images/all-markets/energies.svg";
import CryptoIcon from "../assets/images/all-markets/crypto.svg";

const FOREX = {
  key: "forex",
  icon: forexIcon,
  title: "all-markets_market-items-list-forex-title",
  text: ["all-markets_market-items-list-forex-text"],
  isGrayBackground: false,
  link: FOREX_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_market-items-list-forex-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_market-items-list-forex-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_market-items-list-forex-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_market-items-list-forex-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_market-items-list-forex-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_market-items-list-forex-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_market-items-list-forex-adv7",
    },
  ],
};

const INDICES = {
  key: "indices",
  icon: IndicesIcon,
  title: "all-markets_market-items-list-indices-title",
  text: [
    "all-markets_market-items-list-indices-text",
    "all-markets_market-items-list-indices-text2",
    "all-markets_market-items-list-indices-text3",
  ],
  isGrayBackground: true,
  link: INDICES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_market-items-list-indices-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_market-items-list-indices-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_market-items-list-indices-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_market-items-list-indices-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_market-items-list-indices-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_market-items-list-indices-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_market-items-list-indices-adv7",
    },
  ],
};

const SHARES = {
  key: "shares",
  icon: sharesIcon,
  title: "all-markets_market-items-list-shares-title",
  text: ["all-markets_market-items-list-shares-text"],
  isGrayBackground: false,
  link: SHARES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_market-items-list-shares-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_market-items-list-shares-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_market-items-list-shares-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_market-items-list-shares-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_market-items-list-shares-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_market-items-list-shares-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_market-items-list-shares-adv7",
    },
  ],
};

const COMMODITIES = {
  key: "commodities",
  icon: CommoditiesIcon,
  title: "all-markets_market-items-list-commodities-title",
  text: ["all-markets_market-items-list-commodities-text", "all-markets_market-items-list-commodities-text2"],
  isGrayBackground: true,
  link: METALS_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_market-items-list-commodities-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_market-items-list-commodities-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_market-items-list-commodities-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_market-items-list-commodities-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_market-items-list-commodities-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_market-items-list-commodities-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_market-items-list-commodities-adv7",
    },
  ],
};

const ENERGIES = {
  key: "energies",
  icon: EnergiesIcon,
  title: "all-markets_market-items-list-energies-title",
  text: ["all-markets_market-items-list-energies-text"],
  isGrayBackground: false,
  link: ENERGIES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_market-items-list-energies-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_market-items-list-energies-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_market-items-list-energies-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_market-items-list-energies-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_market-items-list-energies-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_market-items-list-energies-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_market-items-list-energies-adv7",
    },
  ],
};

const CRYPTO = {
  key: "crypto",
  icon: CryptoIcon,
  title: "all-markets_market-items-list-crypto-title",
  text: ["all-markets_market-items-list-crypto-text"],
  isGrayBackground: true,
  link: CRYPTO_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_market-items-list-crypto-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_market-items-list-crypto-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_market-items-list-crypto-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_market-items-list-crypto-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_market-items-list-crypto-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_market-items-list-crypto-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_market-items-list-crypto-adv7",
    },
  ],
};

export const CYSEC_ALL_MARKETS = [
  FOREX,
  INDICES,
  SHARES,
  COMMODITIES,
  ENERGIES,
];

export const FSA_ALL_MARKETS = [...CYSEC_ALL_MARKETS, CRYPTO];
