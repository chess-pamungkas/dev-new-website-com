import webTraderIcon from "../assets/images/icons/tools/webTrader.svg";
import iosIcon from "../assets/images/icons/tools/ios_black.svg";
import androidIcon from "../assets/images/icons/tools/android.svg";
import windowsIcon from "../assets/images/icons/tools/windows.svg";
import windows from "../assets/images/icons/tools/windows.svg";
import metaTrader4Icon from "../assets/images/icons/tools/metaTrader4.svg";
import metaTrader5Icon from "../assets/images/icons/tools/metaTrader5.svg";
import {
  AdvantageIcon1,
  AdvantageIcon2,
  AdvantageIcon3,
  AdvantageIcon4,
  AdvantageIcon5,
  AdvantageIcon6,
  AdvantageIcon7,
  QualityAdvantageIcon,
  SafetyAdvantageIcon,
  TrustAdvantageIcon,
} from "../components/shared/icons";

export const CYSEC_ADVANTAGES = [
  {
    icon: AdvantageIcon1,
    text: "index_performance-advantage1",
    accent: "performance-advantage1-accent",
  },
  {
    icon: AdvantageIcon2,
    text: "index_performance-advantage2",
    accent: "performance-advantage2-accent",
  },
  {
    icon: AdvantageIcon3,
    text: "index_performance-advantage3",
    accent: "performance-advantage3-accent",
  },
  {
    icon: AdvantageIcon4,
    text: "index_performance-advantage4",
    accent: "performance-advantage4-accent",
  },
  {
    icon: AdvantageIcon5,
    text: "index_performance-advantage5",
    accent: "performance-advantage5-accent",
  },
  {
    icon: AdvantageIcon6,
    text: "index_performance-advantage6",
    accent: "performance-advantage6-accent",
  },
  {
    icon: AdvantageIcon7,
    text: "index_performance-advantage7",
    accent: "performance-advantage7-accent",
  },
];

export const FSA_ADVANTAGES = [
  {
    icon: AdvantageIcon1,
    text: "index_performance-advantage1",
    accent: "performance-advantage1-accent",
  },
  {
    icon: AdvantageIcon2,
    text: "index_performance-advantage2-fsa",
    accent: "performance-advantage2-accent-fsa",
  },
  {
    icon: AdvantageIcon3,
    text: "index_performance-advantage3",
    accent: "performance-advantage3-accent",
  },
  {
    icon: AdvantageIcon5,
    text: "index_performance-advantage5-fsa",
    accent: "performance-advantage5-accent-fsa",
  },
  {
    icon: AdvantageIcon6,
    text: "index_performance-advantage6-fsa",
    accent: "performance-advantage6-accent-fsa",
  },
  {
    icon: AdvantageIcon7,
    text: "index_performance-advantage7",
    accent: "performance-advantage7-accent",
  },
];

export const MT4_PLATFORMS = {
  ios: {
    icon: iosIcon,
    title: "index_trading-tools-platforms-ios",
  },
  android: {
    icon: androidIcon,
    title: "index_trading-tools-platforms-android",
  },
  windows: {
    icon: windowsIcon,
    title: "index_trading-tools-platforms-windows",
  },
};

export const MOBILE_PLATFORMS = {
  ios: {
    icon: iosIcon,
    title: "index_trading-tools-platforms-ios",
  },
  android: {
    icon: androidIcon,
    title: "index_trading-tools-platforms-android",
  },
};

export const FSA_PLATFORMS = {
  webTrader: {
    icon: webTraderIcon,
    title: "index_trading-tools-platforms-webtrader",
  },
  ios: MOBILE_PLATFORMS.ios,
  android: MOBILE_PLATFORMS.android,
  metaTrader4: {
    icon: metaTrader4Icon,
    title: "index_trading-tools-platforms-metatrader4",
  },
  // Temporarily removed for the FSA
  // metaTrader5: {
  //   icon: metaTrader5Icon,
  //   title: "index_trading-tools-platforms-metatrader5",
  // },
};

export const CYSEC_PLATFORMS = {
  webTrader: {
    icon: webTraderIcon,
    title: "index_trading-tools-platforms-webtrader",
  },
  ios: MOBILE_PLATFORMS.ios,
  android: MOBILE_PLATFORMS.android,
  // Temporarily removed for the EU because of https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-166
  // metaTrader4: {
  //   icon: metaTrader4Icon,
  //   title: "index_trading-tools-platforms-metatrader4",
  // },
  metaTrader5: {
    icon: metaTrader5Icon,
    title: "index_trading-tools-platforms-metatrader5",
  },
};

export const ADDITIONAL_PLATFORMS = {
  windows: {
    icon: windows,
    title: "index_trading-tools-platforms-windows",
  },
};

export const COMPANY_ADVANTAGES = [
  {
    title: "company_company-advantages-title1",
    icon: SafetyAdvantageIcon,
    textArray: [
      "company_company-advantages-text1-1",
      "company_company-advantages-text1-2-fsa",
      "company_company-advantages-text1-3",
      "company_company-advantages-text1-4",
    ],
  },
  {
    title: "company_company-advantages-title2",
    icon: QualityAdvantageIcon,
    textArray: ["company_company-advantages-text2"],
  },
  {
    title: "company_company-advantages-title3",
    icon: TrustAdvantageIcon,
    textArray: ["company_company-advantages-text3"],
  },
];
export const CYSEC_COMPANY_ADVANTAGES = [
  {
    title: "company_company-advantages-title1",
    icon: SafetyAdvantageIcon,
    textArray: [
      "company_company-advantages-text1-1",
      "company_company-advantages-text1-2",
      "company_company-advantages-text1-3",
      "company_company-advantages-text1-4",
    ],
  },
  {
    title: "company_company-advantages-title2",
    icon: QualityAdvantageIcon,
    textArray: ["company_company-advantages-text2"],
  },
  {
    title: "company_company-advantages-title3",
    icon: TrustAdvantageIcon,
    textArray: ["company_company-advantages-text3"],
  },
];

export const CRYPTO_TRADING_SECTION = {
  id: "crypto",
  title: "index_trading-ticker-section-crypto",
};
export const FOREX_TRADING_SECTION = {
  id: "forex",
  title: "index_trading-ticker-section-forex",
};
export const SHARES_TRADING_SECTION = {
  id: "shares",
  title: "index_trading-ticker-section-shares",
};
export const ENERGIES_TRADING_SECTION = {
  id: "energies",
  title: "index_trading-ticker-section-energies",
};
export const METALS_TRADING_SECTION = {
  id: "metals",
  title: "index_trading-ticker-section-metals",
};
export const INDICES_TRADING_SECTION = {
  id: "indices",
  title: "index_trading-ticker-section-indices",
};
export const ETF_TRADING_SECTION = {
  id: "etf",
  title: "index_trading-ticker-section-etf",
};

export const CYSEC_TRADING_SECTIONS = [
  FOREX_TRADING_SECTION,
  SHARES_TRADING_SECTION,
  ENERGIES_TRADING_SECTION,
  METALS_TRADING_SECTION,
  INDICES_TRADING_SECTION,
  ETF_TRADING_SECTION,
];

export const FSA_TRADING_SECTIONS = [
  CRYPTO_TRADING_SECTION,
  ...CYSEC_TRADING_SECTIONS,
];
