import entities from "../enums/entities";
import { FSA_POSTFIX } from "./constants";
import { isBrowser } from "./services/is-browser";

const FSA_ENTITY_DOMAIN = process.env.GATSBY_FSA_ENTITY_DOMAIN;
const CYSEC_ENTITY_DOMAIN = process.env.GATSBY_CYSEC_ENTITY_DOMAIN;

export const currentEntity = detectEntity();

// detect entity based on hostname .eu (CYSEC) or .com (FSA)
function detectEntity() {
    if (isBrowser()) {
        const hostname = window.location.hostname;
        if (hostname === 'localhost') return window.location.search.includes('com') ? entities.FSA : entities.CYSEC;
    
        const AWS_SERVER = 's3-website.eu-central-1.amazonaws.com';
        const name = hostname?.replace(AWS_SERVER, '') || '';
        return (name.includes('.eu') || name.includes('-eu')) ? entities.CYSEC : entities.FSA;
    }
}

export const isCySEC = currentEntity === entities.CYSEC;
export const isFSA = currentEntity === entities.FSA;

export const entityToRedirect = isCySEC ? FSA_ENTITY_DOMAIN: CYSEC_ENTITY_DOMAIN;
export const sitePostfix = isCySEC ? "" : "-fsa";
