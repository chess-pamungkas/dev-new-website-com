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

    // Check if r_code parameter exists in URL (regardless of position)
    if (r_code) {
      localStorage.setItem(IB_PARAMS.r_code, r_code);
      localStorage.removeItem(CAMPAIGN_PARAMS.campaign_code);

      // Only remove r_code parameter, preserve other query parameters
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete(IB_PARAMS.r_code);

      // Only update URL if we actually removed a parameter
      // Use replaceState to avoid navigation if URL hasn't changed significantly
      if (newUrl.search !== window.location.search) {
        window.history.replaceState({}, "", newUrl.toString());
      }
    }
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
