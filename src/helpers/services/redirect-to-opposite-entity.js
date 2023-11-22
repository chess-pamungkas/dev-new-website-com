import { oppositeTopLevelDomain, topLevelDomain } from "../entity-resolver";
import { isBrowser } from "./is-browser";

export const redirectToOppositeEntity = () => {
  if (isBrowser()) {
    const host = window.location.hostname;
    const oppositeHost = host.replace(topLevelDomain, oppositeTopLevelDomain);

    window.location.replace(
      `https://${oppositeHost}${window.location.pathname}`
    );
  }
};
