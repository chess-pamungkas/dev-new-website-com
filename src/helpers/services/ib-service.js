import { navigate } from "gatsby";
import { isBrowser } from "./is-browser";

export const IB_PARAMS = {
  r_code: "r_code", // New parameter
  node: "node", // New parameter
};

const getParamsFromUrl = () => {
  return new URLSearchParams(window.location.search);
};

export const getIBParamsAndSetToStorage = () => {
  if (isBrowser()) {
    const params = getParamsFromUrl();
    const r_code = params.get(IB_PARAMS.r_code);
    const node = params.get(IB_PARAMS.node);
    const search = window.location.search; // Get the full query string

    // Check if the URL param starts with "?r_code="
    if (search.startsWith(`?${IB_PARAMS.r_code}=`)) {
      localStorage.setItem(IB_PARAMS.r_code, r_code);
      // Clear node if r_code is set
      localStorage.removeItem(IB_PARAMS.node);
    }
    // Check if the URL param starts with "?node="
    else if (search.startsWith(`?${IB_PARAMS.node}=`)) {
      localStorage.setItem(IB_PARAMS.node, node);
      // Clear r_code if node is set
      localStorage.removeItem(IB_PARAMS.r_code);
    }
    // If the URL does not start with either, do not set localStorage
    else {
      localStorage.removeItem(IB_PARAMS.r_code);
      localStorage.removeItem(IB_PARAMS.node);
    }

    const { pathname } = window.location;
    navigate(pathname);
  }
};

export const setIBparamsToLink = () => {
  if (isBrowser()) {
    const r_code = localStorage.getItem(IB_PARAMS.r_code);
    const node = localStorage.getItem(IB_PARAMS.node);

    /// Check conditions and construct the query string accordingly
    if (r_code) {
      return `?${IB_PARAMS.r_code}=${r_code}`; // Only r_code
    } else if (node) {
      return `?${IB_PARAMS.node}=${node}`; // Only node
    }
  }

  return "";
};
