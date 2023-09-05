import { navigate } from "gatsby";
import { isFSA } from "../entity-resolver";
import { isBrowser } from "./is-browser";

const IB_PARAMS = {
  lid: "lid",
  pid: "pid",
};

const getParamsFromUrl = () => {
  return new URLSearchParams(window.location.search);
};

export const getIBParamsAndSetToStorage = () => {
  if (isBrowser()) {
    const lid = getParamsFromUrl().get(IB_PARAMS.lid);
    const pid = getParamsFromUrl().get(IB_PARAMS.pid);
    if (pid && lid) {
      localStorage.setItem(
        IB_PARAMS.lid,
        getParamsFromUrl().get(IB_PARAMS.lid)
      );
      localStorage.setItem(
        IB_PARAMS.pid,
        getParamsFromUrl().get(IB_PARAMS.pid)
      );

      const { pathname } = window.location;
      navigate(pathname);
    }
  }
};

export const setIBparamsToLink = () => {
  if (isBrowser() && isFSA) {
    const pid = localStorage.getItem(IB_PARAMS.pid);
    const lid = localStorage.getItem(IB_PARAMS.lid);

    if (pid && lid) return `&${IB_PARAMS.lid}=${lid}&${IB_PARAMS.pid}=${pid}`;
  }

  return "";
};
