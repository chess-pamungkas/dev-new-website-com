import { isBrowser } from "./services/is-browser";
const stages = {
  off: [],
  dev: ["local", "development"],
  test: ["local", "development", "staging"],
  prod: ["local", "development", "staging", "production"],
  deployed: ["development", "staging", "production"],
};

const features = {
  versionSentinel: "deployed",
};

const getEnv = () => {
  if (isBrowser() && window.location.hostname === "localhost") {
    return "local";
  }
  return "production";
};

const hasFeature = (feature) => {
  const stage = features[feature];
  return stages[stage].includes(getEnv());
};

export { hasFeature, stages };
