import { stages } from "./stages";
import { isBrowser } from "./services/is-browser";
const features = {
  versionSentinel: "deployed",
};

const getEnv = () => {
  if (isBrowser()) {
    if (window.location.hostname === "localhost") return "local";
    return "production";
  }
  // Default or fallback environment
  return "server"; // or any default environment you prefer
};

const hasFeature = (feature) => {
  const stage = features[feature];
  return stages[stage].includes(getEnv());
};

export { hasFeature };
