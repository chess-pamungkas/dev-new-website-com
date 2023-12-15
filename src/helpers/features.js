import { stages } from "./stages";
import { isBrowser } from "./services/is-browser";

const features = {
  versionSentinel: "deployed",
};

const getEnv = () => {
  if (isBrowser) {
    if (window.location.hostname === "localhost") return "local";
    return "production";
  }

  return "server";
};

const hasFeature = (feature) => {
  const stage = features[feature];
  return stages[stage].includes(getEnv());
};

export { hasFeature };
