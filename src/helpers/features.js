import { stages } from "./stages";
const features = {
  versionSentinel: "deployed",
};

const getEnv = () => {
  if (window.location.hostname === "localhost") return "local";
  return "production";
};

const hasFeature = (feature) => {
  const stage = features[feature];
  return stages[stage].includes(getEnv());
};

export { hasFeature };
