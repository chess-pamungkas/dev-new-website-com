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
  title: "all-markets_forex-title",
  text: "all-markets_forex-text",
  isGrayBackground: false,
  link: FOREX_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_forex-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_forex-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_forex-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_forex-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_forex-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_forex-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_forex-adv7",
    },
  ],
};

const INDICES = {
  icon: AllMarketsIndicesIcon,
  title: "all-markets_indices-title",
  text: "all-markets_indices-text",
  isGrayBackground: true,
  link: INDICES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_indices-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_indices-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_indices-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_indices-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_indices-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_indices-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_indices-adv7",
    },
  ],
};

const SHARES = {
  icon: AllMarketsSharesIcon,
  title: "all-markets_shares-title",
  text: "all-markets_shares-text",
  isGrayBackground: false,
  link: SHARES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_shares-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_shares-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_shares-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_shares-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_shares-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_shares-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_shares-adv7",
    },
  ],
};

const COMMODITIES = {
  icon: AllMarketsCommoditiesIcon,
  title: "all-markets_commodities-title",
  text: "all-markets_commodities-text",
  isGrayBackground: true,
  link: COMMODITIES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_commodities-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_commodities-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_commodities-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_commodities-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_commodities-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_commodities-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_commodities-adv7",
    },
  ],
};

const ENERGIES = {
  icon: AllMarketsEnergiesIcon,
  title: "all-markets_energies-title",
  text: "all-markets_energies-text",
  isGrayBackground: false,
  link: ENERGIES_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_energies-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_energies-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_energies-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_energies-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_energies-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_energies-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_energies-adv7",
    },
  ],
};

const CRYPTO = {
  icon: AllMarketsCryptoIcon,
  title: "all-markets_crypto-title",
  text: "all-markets_crypto-text",
  isGrayBackground: true,
  link: CRYPTO_PAGE_LINK,
  advantages: [
    {
      key: "adv1",
      text: "all-markets_crypto-adv1",
    },
    {
      key: "adv2",
      text: "all-markets_crypto-adv2",
    },
    {
      key: "adv3",
      text: "all-markets_crypto-adv3",
    },
    {
      key: "adv4",
      text: "all-markets_crypto-adv4",
    },
    {
      key: "adv5",
      text: "all-markets_crypto-adv5",
    },
    {
      key: "adv6",
      text: "all-markets_crypto-adv6",
    },
    {
      key: "adv7",
      text: "all-markets_crypto-adv7",
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
