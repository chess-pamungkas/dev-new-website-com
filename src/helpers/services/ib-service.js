import { navigate } from "gatsby";
import { isBrowser } from "./is-browser";
import { CAMPAIGN_PARAMS } from "./marketing-service";

export const IB_PARAMS = {
  r_code: "r_code", // New parameter
};

const getParamsFromUrl = () => {
  return new URLSearchParams(window.location.search);
};

export const getIBParamsAndSetToStorage = () => {
  if (isBrowser()) {
    const urlParams = getParamsFromUrl();
    const r_code = urlParams.get(IB_PARAMS.r_code);

    // Check if the URL parameter starts with `?${IB_PARAMS.r_code}=`
    if (window.location.search.startsWith(`?${IB_PARAMS.r_code}=`)) {
      if (r_code) {
        localStorage.setItem(IB_PARAMS.r_code, r_code);
        localStorage.removeItem(CAMPAIGN_PARAMS.campaign_code);
      }
    }

    const { pathname } = window.location;
    navigate(pathname);
  }
};

export const setIBparamsToLink = () => {
  if (isBrowser()) {
    const r_code = localStorage.getItem(IB_PARAMS.r_code);

    // Check conditions and construct the query string accordingly
    if (r_code) {
      return `?${IB_PARAMS.r_code}=${r_code}`; // Only r_code
    }
  }

  return "";
};
