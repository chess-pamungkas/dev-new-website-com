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
    name: "Gianluigi Buffon",
    text: "goalkeeper legend and veteran trader, trades with Oqtima.",
  },
  sea: {
    image: heroImage,
    name: "Sea",
    text: "goalkeeper legend and veteran trader, trades with Oqtima.",
  },
  europe: {
    image: heroImage,
    name: "Europe",
    text: "goalkeeper legend and veteran trader, trades with Oqtima.",
  },
  "south africa": {
    image: heroImage,
    name: "South Africa",
    text: "goalkeeper legend and veteran trader, trades with Oqtima.",
  },
  japan: {
    image: heroImage,
    name: "Japan",
    text: "goalkeeper legend and veteran trader, trades with Oqtima.",
  },
  australia: {
    image: heroImage,
    name: "Australia",
    text: "goalkeeper legend and veteran trader, trades with Oqtima.",
  },
};

export const SECT1_TEXT_SEQUENCES = {
  default: [
    "Forex Traders",
    "Day Traders",
    "Crypto Traders",
    "Stock Traders",
    "You",
  ],
  forex: [
    "Forex Traders",
    "Day Traders",
    "EA Traders",
    "MT4 – MT5 Passionate",
    "You",
  ],
  crypto: [
    "Crypto Traders",
    "EA Traders",
    "Crypto CFDs enthusiast",
    "BTC signals expert",
    "You",
  ],
  commodities: [
    "WTI and Brent Crude Oil Traders",
    "Natural Gas Traders",
    "Gold Enthusiast",
    "Silver Passionate",
    "You",
  ],
  ea: ["EA for MT4 & MT5", "Scalpers", "Day Trader", "Quant traders", "You"],
  expert: [
    "Expert traders",
    "Scalpers",
    "Fundamental or Technical traders",
    "EA users",
    "You",
  ],
  beginner: [
    "Novices to trading",
    "Traders looking for education",
    "Traders ready to graduate to the next level",
    "MT4 and MT5 graduates",
    "You",
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
