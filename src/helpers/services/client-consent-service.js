import axios from "axios";
import { GOOGLE_ANALYTICS_KEY } from "../gdpr-cookie.config";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;

export const postClientConsent = (ipAddress, currentEntity, getCookie, consentString) => {
    const data = {
      gaId: getCookie(GOOGLE_ANALYTICS_KEY),
      ipAddress: ipAddress,
      entity: currentEntity,
      consentType: consentString,
    }
    axios.post(`${API_URL}client-consent`, data).then(response => console.log(response));
  }