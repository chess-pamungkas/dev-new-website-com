import privacyPolicy from "../assets/documents/Privacy_Policy.pdf";
import termsAndConditions from "../assets/documents/Terms_and_Conditions.pdf";
import visaLogo from "../assets/images/icons/payments/visa.png";
import masterCardLogo from "../assets/images/icons/payments/mastercard.png";
import bankwireLogo from "../assets/images/icons/payments/bankwire.png";
import netellerLogo from "../assets/images/icons/payments/neteller.png";
import revolutLogo from "../assets/images/icons/payments/revolut.png";
import skrillLogo from "../assets/images/icons/payments/skrill.png";
import wiseLogo from "../assets/images/icons/payments/wise.png";

export const WINDOW_SIZE_SM = 375;
export const WINDOW_SIZE_MD = 768;
export const WINDOW_SIZE_LG = 1024;
export const WINDOW_SIZE_XL = 1920;

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

export const HOME_PAGE_LINK = "/";
export const LOGIN_LINK = "/";
export const REGISTRATION_LINK = "/";
export const LEARN_MORE_LINK = "/";
export const TERMS_OF_USE_LINK = termsAndConditions;
export const PRIVACY_POLICY_LINK = privacyPolicy;
export const COMPANY_PAGE_LINK = "/company";
export const LEGAL_PAGE_LINK = "/legal";
export const SEARCH_PAGE_LINK = "/search";
export const CRYPTO_PAGE_LINK = "/crypto";
export const INDICES_PAGE_LINK = "/indices";
export const FOREX_PAGE_LINK = "/forex";
export const SHARES_PAGE_LINK = "/shares";
export const ENERGIES_PAGE_LINK = "/energies";
export const COMMODITIES_PAGE_LINK = "/commodities";
export const PLATFORMS_LINK = "/platforms";
export const ALL_MARKETS_PAGE_LINK = "/all-markets";
export const MT4_PAGE_LINK = "/mt4";
export const MT5_PAGE_LINK = "/mt5";
export const WITHDRAWAL_PAGE_LINK = "/withdrawal";
export const PROFESSIONAL_QUALIFICATION_PAGE_LINK = "/professional-qualification";
export const PARTNERS_PAGE_LINK = "/partners"

export const FAQ_LINK = "/";

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
