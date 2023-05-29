import entities from "../enums/entities";

const FSA_ENTITY_DOMAIN = process.env.GATSBY_FSA_ENTITY_DOMAIN;
const CYSEC_ENTITY_DOMAIN = process.env.GATSBY_CYSEC_ENTITY_DOMAIN;

// FSA or CYSEC, change it right here for development if needed
export const currentEntity = process.env.GATSBY_ENTITY;

export const isCySEC = currentEntity === entities.CYSEC;
export const isFSA = currentEntity === entities.FSA;

function DetectIsLandingPage() {
  if (isBrowser()) {
    const hostname = window.location.hostname;
    return hostname.includes(".lp");
  }
}

export const isLandingPage = DetectIsLandingPage();
// export const isLandingPage = true;

// TODO: We can get entity to redirect from the backend and not store domains in the env vars
export const entityToRedirect = isCySEC
  ? FSA_ENTITY_DOMAIN
  : CYSEC_ENTITY_DOMAIN;
export const sitePostfix = isCySEC ? "" : "-fsa";

export const topLevelDomain = isCySEC ? "eu" : "com";
