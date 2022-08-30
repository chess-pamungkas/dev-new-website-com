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

export const SECT2_GROUP1_COUNT_OF_WORDS_DEFAULT = 5;

export const SECT2_GROUP1_DEFAULT = [
  "main-trade-with-promotion-bitcoin",
  "main-trade-with-promotion-gold",
  "main-trade-with-promotion-EUR/USD",
  "main-trade-with-promotion-crude-oil-wti",
  "main-trade-with-promotion-tsla",
  "main-trade-with-promotion-XAU/USD",
  "main-trade-with-promotion-aapl",
  "main-trade-with-promotion-GBP/USD",
  "main-trade-with-promotion-amzn",
  "main-trade-with-promotion-s&p-500",
];

export const SECT2_GROUP2_DEFAULT = ["What's hot now!"];

export const SECT2_TEXT_SEQUENCES = {
  forex: {
    group1: [
      "main-trade-with-promotion-EUR/USD",
      "main-trade-with-promotion-USD/JPY",
      "main-trade-with-promotion-GBP/USD",
      "main-trade-with-promotion-AUD/USD",
      "main-trade-with-promotion-USD/CAD",
      "main-trade-with-promotion-USD/CNY",
      "main-trade-with-promotion-USD/CHF",
      "main-trade-with-promotion-USD/HKD",
      "main-trade-with-promotion-EUR/GBP",
      "main-trade-with-promotion-USD/KRW",
    ],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [SECT2_LOGOS.rmb, SECT2_LOGOS.dollar, SECT2_LOGOS.euro],
  },
  crypto: {
    group1: [
      "main-trade-with-promotion-BTC",
      "main-trade-with-promotion-ETH",
      "main-trade-with-promotion-ADA",
      "main-trade-with-promotion-XRP",
      "main-trade-with-promotion-SOL",
      "main-trade-with-promotion-SHIB",
      "main-trade-with-promotion-NEO",
      "main-trade-with-promotion-BNB"
    ],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [SECT2_LOGOS.shib, SECT2_LOGOS.eth],
  },
  commodities: {
    group1: [
      "main-trade-with-promotion-gold",
      "main-trade-with-promotion-silver",
      "main-trade-with-promotion-platinum",
      "main-trade-with-promotion-crude-oil",
      "main-trade-with-promotion-brent-oil",
      "main-trade-with-promotion-soybean",
      "main-trade-with-promotion-palladium",
      "main-trade-with-promotion-copper",
      "main-trade-with-promotion-coffee-arabica",
      "main-trade-with-promotion-cotton",
      "main-trade-with-promotion-wheat",
    ],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [SECT2_LOGOS.coffee, SECT2_LOGOS.oilBarrel, SECT2_LOGOS.gold],
  },
  indices: {
    group1: [
      "main-trade-with-promotion-s&p-500",
      "main-trade-with-promotion-dow-jones-30",
      "main-trade-with-promotion-dax",
      "main-trade-with-promotion-ftse100",
      "main-trade-with-promotion-nikkei",
      "main-trade-with-promotion-dax40",
      "main-trade-with-promotion-hong-kong-50",
      "main-trade-with-promotion-euro-50",
      "main-trade-with-promotion-euro-btp",
      "main-trade-with-promotion-australia-200",
      "main-trade-with-promotion-spain-35",
      "main-trade-with-promotion-france-40",
      "main-trade-with-promotion-canada-40",
    ],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [SECT2_LOGOS.nikkei, SECT2_LOGOS.sp500, SECT2_LOGOS.dowJones],
  },
  stocks: {
    group1: ["main-trade-with-promotion-TBC"],
    group2: SECT2_GROUP2_DEFAULT,
    symbols: [],
  },
};
