import visaLogo from "../assets/images/icons/payments/visa.png";
import masterCardLogo from "../assets/images/icons/payments/mastercard.png";
import bankwireLogo from "../assets/images/icons/payments/bankwire.png";
import netellerLogo from "../assets/images/icons/payments/neteller.png";
import revolutLogo from "../assets/images/icons/payments/revolut.png";
import skrillLogo from "../assets/images/icons/payments/skrill.png";
import wiseLogo from "../assets/images/icons/payments/wise.png";
import LanguageContext from "../context/language-context";
import { useContext } from "react";
import { FXBO_LANG_URL_KEYS_MAP } from "./lang-options.config";
import { isCySEC, topLevelDomain } from "./entity-resolver";
import { setIBparamsToLink } from "./services/ib-service";

export const WINDOW_SIZE_SM = 375;
export const WINDOW_SIZE_MD = 768;
export const WINDOW_SIZE_LG = 1024;
export const WINDOW_SIZE_XL = 1920;

export const SM_MAX_WIDTH = 767;
export const MD_MAX_WIDTH = 1023;
export const LG_MAX_WIDTH = 1919;

export const BURGER_MENU_LINES_COUNT = 3;
export const DROPDOWN_SEARCH_ITEMS_TO_SHOW = 3;
export const SEARCH_RESULTS_FIRST_BUNDLE = 1;
export const SEARCH_RESULTS_BUNDLE_SIZE = 10;
export const SEARCH_MIN_QUERY_LENGTH = 2;
export const SEARCH_PARAM_NAME = "q";
export const LINK_TO_HIGHLIGHTED_TEXT_PARAM_NAME = "#:~:text";
export const INITIAL_SEARCH_STATE = {
  query: "",
  results: [],
  noResultsFound: false,
};

export const FSA_POSTFIX = "-fsa";

export const DIR_LTR = "ltr";
export const DIR_RTL = "rtl";

const CONTACT_PHONE = "357 25010490";
const CONTACT_PHONE_FSA = "44 2045867126";
export const CONTACT_PHONE_FSA_2 = "248 4632034";
const CONTACT_EMAIL = "support@oqtima.eu";
const CONTACT_EMAIL_FSA = "support@oqtima.com";
export const CONTACT_ADDRESS =
  "Franklin Roosevelt 247-block C, Office 101, Limassol 3046";

export const HOME_PAGE_LINK = "/";

export const getContactPhone = () =>
  isCySEC ? CONTACT_PHONE : CONTACT_PHONE_FSA;
export const getContactEmail = () =>
  isCySEC ? CONTACT_EMAIL : CONTACT_EMAIL_FSA;

export const GetRegistrationLink = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return `https://my.oqtima.${topLevelDomain}${
    FXBO_LANG_URL_KEYS_MAP[selectedLanguage.id]
  }/register/${setIBparamsToLink()}`;
};

export const GetLoginLink = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return `https://my.oqtima.${topLevelDomain}${
    FXBO_LANG_URL_KEYS_MAP[selectedLanguage.id]
  }/login/`;
};

export const GetDepositLink = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return `https://my.oqtima.${topLevelDomain}${
    FXBO_LANG_URL_KEYS_MAP[selectedLanguage.id]
  }/funds/deposit/`;
};

export const COMING_SOON_PAGE_LINK = "/coming-soon";
export const COMPANY_PAGE_LINK = "/company";
export const LEGAL_PAGE_LINK = "/legal";
export const CONTACT_US_PAGE_LINK = "/contact-us";
export const FAQ_PAGE_LINK = "/faq";
export const SEARCH_PAGE_LINK = "/search";
export const CRYPTO_PAGE_LINK = "/crypto";
export const INDICES_PAGE_LINK = "/indices";
export const FOREX_PAGE_LINK = "/forex";
export const SHARES_PAGE_LINK = "/shares";
export const ENERGIES_PAGE_LINK = "/energies";
export const METALS_PAGE_LINK = "/metals";
export const PLATFORMS_LINK = "/platforms";
export const ALL_MARKETS_PAGE_LINK = "/all-markets";
export const MT4_PAGE_LINK = "/mt4";
export const MT5_PAGE_LINK = "/mt5";
export const CTRADER_PAGE_LINK = "/ctrader";
export const TRADING_VIEW_PAGE_LINK = "/trading-view";
export const WITHDRAWAL_PAGE_LINK = "/funding";
export const SPREADS_AND_FEES_PAGE_LINK = "/spreads-and-fees";
export const PROFESSIONAL_QUALIFICATION_PAGE_LINK =
  "/professional-qualification";
export const PARTNERS_PAGE_LINK = "/partners";
export const ACCOUNTS_TYPE_PAGE_LINK = "/accounts-type";
export const ETF_PAGE_LINK = "/etf";

export const MT5_WEB_TRADER_LINK = "/mt5-webtrader";
export const MT4_WEB_TRADER_LINK = "/mt4-webtrader";

export const ANGLE_ICON_COLOR = {
  black: "#232323",
  red: "#ff4400",
  white: "#ffffff",
};

export const TABLE_PAGE_SIZES = [5, 10, 15];

export const PAYMENT_SYSTEMS = {
  visa: {
    alt: "Visa",
    logo: visaLogo,
  },
  masterCard: {
    alt: "MasterCard",
    logo: masterCardLogo,
  },
  bankwire: {
    alt: "Bank Wire",
    logo: bankwireLogo,
  },
  neteller: {
    alt: "Neteller",
    logo: netellerLogo,
  },
  revolut: {
    alt: "Revolut",
    logo: revolutLogo,
  },
  skrill: {
    alt: "Skrill",
    logo: skrillLogo,
  },
  wise: {
    alt: "TransferWise",
    logo: wiseLogo,
  },
};

export const YOUTUBE_VIDEO_SHARE_LINK = "https://youtu.be/";
