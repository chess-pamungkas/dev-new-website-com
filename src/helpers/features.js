import { stages } from "./stages";
const features = {
  versionSentinel: "deployed",
};

const getEnv = () => {
  if (typeof window !== "undefined") {
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
