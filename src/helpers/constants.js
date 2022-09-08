import privacyPolicy from "../assets/documents/Privacy_Policy.pdf";
import termsAndConditions from "../assets/documents/Terms_and_Conditions.pdf";

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
export const REGISTRATION_LINK = "/";
export const LEARN_MORE_LINK = "/";
export const TERMS_OF_USE_LINK = termsAndConditions;
export const PRIVACY_POLICY_LINK = privacyPolicy;
export const SEARCH_PAGE_LINK = "/search";
export const CRYPTO_PAGE_LINK = "/crypto";
export const INDICES_PAGE_LINK = "/indices";
export const FOREX_PAGE_LINK = "/forex";
export const SHARES_PAGE_LINK = "/shares";
export const ENERGIES_PAGE_LINK = "/energies";
export const COMMODITIES_PAGE_LINK = "/commodities";

export const FAQ_LINK = "/";

export const ANGLE_ICON_COLOR = {
  black: "#232323",
  red: "#ff4400",
  white: "#ffffff",
};

export const TABLE_PAGE_SIZES = [5, 10, 15];
