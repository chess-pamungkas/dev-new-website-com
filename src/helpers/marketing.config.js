import heroImage from "../assets/images/person.png";
import dollarIcon from "../assets/images/icons/companies/marketing/dollar.svg";
import euroIcon from "../assets/images/icons/companies/marketing/euro.svg";
import rmbIcon from "../assets/images/icons/companies/marketing/rmb.svg";
import shibIcon from "../assets/images/icons/companies/marketing/shib.svg";
import ethIcon from "../assets/images/icons/companies/marketing/eth.svg";
import goldIcon from "../assets/images/icons/companies/marketing/gold.svg";
import oilBarrelIcon from "../assets/images/icons/companies/marketing/oilBarrel.svg";
import coffeeIcon from "../assets/images/icons/companies/marketing/coffee.svg";
import sp500Icon from "../assets/images/icons/companies/marketing/sp500.svg";
import dowJonesIcon from "../assets/images/icons/companies/marketing/dowJones.svg";
import nikkeiIcon from "../assets/images/icons/companies/marketing/nikkei.svg";

export const MARKETING_GET_PARAMS = {
  sect1: "_sect1",
  sect2: "_sect2",
  content: "utm_content",
};

const SECT2_LOGOS = {
  dollar: dollarIcon,
  euro: euroIcon,
  rmb: rmbIcon,
  shib: shibIcon,
  eth: ethIcon,
  gold: goldIcon,
  oilBarrel: oilBarrelIcon,
  coffee: coffeeIcon,
  sp500: sp500Icon,
  dowJones: dowJonesIcon,
  nikkei: nikkeiIcon,
};

// TODO change heros
export const CONTENT_HEROES = {
  default: {
    image: heroImage,
    name: "main-promotion-hero-gianluigi-buffon-name",
    text: "main-promotion-hero-gianluigi-buffon-text",
  },
  sea: {
    image: heroImage,
    name: "main-promotion-hero-sea-name",
    text: "main-promotion-hero-sea-text",
  },
  europe: {
    image: heroImage,
    name: "main-promotion-hero-europe-name",
    text: "main-promotion-hero-europe-text",
  },
  "south africa": {
    image: heroImage,
    name: "main-promotion-hero-south-africa-name",
    text: "main-promotion-hero-south-africa-text",
  },
  japan: {
    image: heroImage,
    name: "main-promotion-hero-japan-name",
    text: "main-promotion-hero-japan-text",
  },
  australia: {
    image: heroImage,
    name: "main-promotion-hero-australia-name",
    text: "main-promotion-hero-australia-text",
  },
};

export const SECT1_TEXT_SEQUENCES = {
  default: [
    "main-promotion-animated-text-forex-traders",
    "main-promotion-animated-text-day-traders",
    "main-promotion-animated-text-crypto-traders",
    "main-promotion-animated-text-stock-traders",
    "main-promotion-animated-text-you",
  ],
  forex: [
    "main-promotion-animated-text-forex-traders",
    "main-promotion-animated-text-day-traders",
    "main-promotion-animated-text-ea-traders",
    "main-promotion-animated-text-mt4-mt5-passionate",
    "main-promotion-animated-text-you",
  ],
  crypto: [
    "main-promotion-animated-text-crypto-traders",
    "main-promotion-animated-text-ea-traders",
    "main-promotion-animated-text-crypto-cfds-enthusiast",
    "main-promotion-animated-text-btc-signals-expert",
    "main-promotion-animated-text-you",
  ],
  commodities: [
    "main-promotion-animated-text-wti-and-brent-crude-oil-traders",
    "main-promotion-animated-text-natural-gas-traders",
    "main-promotion-animated-text-gold-enthusiast",
    "main-promotion-animated-text-silver-passionate",
    "main-promotion-animated-text-you",
  ],
  ea: [
    "main-promotion-animated-text-ea-for-mt4-and-mt5",
    "main-promotion-animated-text-scalpers",
    "main-promotion-animated-text-day-trader",
    "main-promotion-animated-text-quant-traders",
    "main-promotion-animated-text-you"
  ],
  expert: [
    "main-promotion-animated-text-expert-traders",
    "main-promotion-animated-text-scalpers",
    "main-promotion-animated-text-fundamental-or-technical-traders",
    "main-promotion-animated-text-ea-users",
    "main-promotion-animated-text-you",
  ],
  beginner: [
    "main-promotion-animated-text-novices-to-trading",
    "main-promotion-animated-text-traders-looking-for-education",
    "main-promotion-animated-text-traders-ready-to-graduate-to-the-next-level",
    "main-promotion-animated-text-mt4-and-mt5-graduates",
    "main-promotion-animated-text-you",
  ],
};

export const SECT2_GROUP1_COUNT_OF_WORDS_DEFAULT = 4;

export const SECT2_GROUP1_DEFAULT = [
  "Bitcoin",
  "Gold",
  "EUR/USD",
  "Crude Oil WTI",
  "TSLA",
  "XAU/USD",
  "AAPL",
  "GBP/USD",
  "AMZN",
  "S&P 500",
];

export const SECT2_GROUP2_DEFAULT = ["Ready?", "Go"];

export const SECT2_TEXT_SEQUENCES = {
  forex: {
    group1: [
      "EUR/USD",
      "USD/JPY",
      "GBP/USD",
      "AUD/USD",
      "USD/CAD",
      "USD/CNY",
      "USD/CHF",
      "USD/HKD",
      "EUR/GBP",
      "USD/KRW",
    ],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [SECT2_LOGOS.rmb, SECT2_LOGOS.dollar, SECT2_LOGOS.euro],
  },
  crypto: {
    group1: ["BTC", "ETH", "ADA", "XRP", "SOL", "SHIB", "NEO", "BNB"],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [SECT2_LOGOS.shib, SECT2_LOGOS.eth],
  },
  commodities: {
    group1: [
      "Gold",
      "Silver",
      "Platinum",
      "Crude Oil",
      "Brent Oil",
      "Soybean",
      "Palladium",
      "Copper",
      "Coffee Arabica",
      "Cotton",
      "Wheat",
    ],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [SECT2_LOGOS.coffee, SECT2_LOGOS.oilBarrel, SECT2_LOGOS.gold],
  },
  indices: {
    group1: [
      "S&P 500",
      "Dow Jones 30",
      "Dax",
      "Ftse100",
      "Nikkei",
      "Dax40",
      "Hong Kong 50",
      "Euro 50",
      "Euro Btp",
      "Australia 200",
      "Spain 35",
      "France 40",
      "Canada 40",
    ],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [SECT2_LOGOS.nikkei, SECT2_LOGOS.sp500, SECT2_LOGOS.dowJones],
  },
  stocks: {
    group1: ["TBC"],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [],
  },
};
