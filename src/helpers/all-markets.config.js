import {
  AllMarketsCommoditiesIcon,
  AllMarketsCryptoIcon,
  AllMarketsEnergiesIcon,
  AllMarketsForexIcon,
  AllMarketsIndicesIcon,
  AllMarketsSharesIcon,
} from "../components/shared/icons";
import {
  COMMODITIES_PAGE_LINK,
  CRYPTO_PAGE_LINK,
  ENERGIES_PAGE_LINK,
  FOREX_PAGE_LINK,
  INDICES_PAGE_LINK,
  SHARES_PAGE_LINK,
} from "./constants";

const FOREX = {
  icon: AllMarketsForexIcon,
  title: "all-markets-forex-title",
  text: "all-markets-forex-text",
  isGrayBackground: false,
  link: FOREX_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets-forex-adv1",
    },
    {
      key: "adv2",
      text: "all-markets-forex-adv2",
    },
    {
      key: "adv3",
      text: "all-markets-forex-adv3",
    },
    {
      key: "adv4",
      text: "all-markets-forex-adv4",
    },
    {
      key: "adv5",
      text: "all-markets-forex-adv5",
    },
    {
      key: "adv6",
      text: "all-markets-forex-adv6",
    },
    {
      key: "adv7",
      text: "all-markets-forex-adv7",
    },
  ],
};

const INDICES = {
  icon: AllMarketsIndicesIcon,
  title: "all-markets-indices-title",
  text: "all-markets-indices-text",
  isGrayBackground: true,
  link: INDICES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets-indices-adv1",
    },
    {
      key: "adv2",
      text: "all-markets-indices-adv2",
    },
    {
      key: "adv3",
      text: "all-markets-indices-adv3",
    },
    {
      key: "adv4",
      text: "all-markets-indices-adv4",
    },
    {
      key: "adv5",
      text: "all-markets-indices-adv5",
    },
    {
      key: "adv6",
      text: "all-markets-indices-adv6",
    },
    {
      key: "adv7",
      text: "all-markets-indices-adv7",
    },
  ],
};

const SHARES = {
  icon: AllMarketsSharesIcon,
  title: "all-markets-shares-title",
  text: "all-markets-shares-text",
  isGrayBackground: false,
  link: SHARES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets-shares-adv1",
    },
    {
      key: "adv2",
      text: "all-markets-shares-adv2",
    },
    {
      key: "adv3",
      text: "all-markets-shares-adv3",
    },
    {
      key: "adv4",
      text: "all-markets-shares-adv4",
    },
    {
      key: "adv5",
      text: "all-markets-shares-adv5",
    },
    {
      key: "adv6",
      text: "all-markets-shares-adv6",
    },
    {
      key: "adv7",
      text: "all-markets-shares-adv7",
    },
  ],
};

const COMMODITIES = {
  icon: AllMarketsCommoditiesIcon,
  title: "all-markets-commodities-title",
  text: "all-markets-commodities-text",
  isGrayBackground: true,
  link: COMMODITIES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets-commodities-adv1",
    },
    {
      key: "adv2",
      text: "all-markets-commodities-adv2",
    },
    {
      key: "adv3",
      text: "all-markets-commodities-adv3",
    },
    {
      key: "adv4",
      text: "all-markets-commodities-adv4",
    },
    {
      key: "adv5",
      text: "all-markets-commodities-adv5",
    },
    {
      key: "adv6",
      text: "all-markets-commodities-adv6",
    },
    {
      key: "adv7",
      text: "all-markets-commodities-adv7",
    },
  ],
};

const ENERGIES = {
  icon: AllMarketsEnergiesIcon,
  title: "all-markets-energies-title",
  text: "all-markets-energies-text",
  isGrayBackground: false,
  link: ENERGIES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets-energies-adv1",
    },
    {
      key: "adv2",
      text: "all-markets-energies-adv2",
    },
    {
      key: "adv3",
      text: "all-markets-energies-adv3",
    },
    {
      key: "adv4",
      text: "all-markets-energies-adv4",
    },
    {
      key: "adv5",
      text: "all-markets-energies-adv5",
    },
    {
      key: "adv6",
      text: "all-markets-energies-adv6",
    },
    {
      key: "adv7",
      text: "all-markets-energies-adv7",
    },
  ],
};

const CRYPTO = {
  icon: AllMarketsCryptoIcon,
  title: "all-markets-crypto-title",
  text: "all-markets-crypto-text",
  isGrayBackground: true,
  link: CRYPTO_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets-crypto-adv1",
    },
    {
      key: "adv2",
      text: "all-markets-crypto-adv2",
    },
    {
      key: "adv3",
      text: "all-markets-crypto-adv3",
    },
    {
      key: "adv4",
      text: "all-markets-crypto-adv4",
    },
    {
      key: "adv5",
      text: "all-markets-crypto-adv5",
    },
    {
      key: "adv6",
      text: "all-markets-crypto-adv6",
    },
    {
      key: "adv7",
      text: "all-markets-crypto-adv7",
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
