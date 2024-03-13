import axios from "axios";
import { currentEntity } from "../entity-resolver";
import { isBrowser } from "./is-browser";

const API_URL = process.env.GATSBY_OQTIMA_API_URL;

const getEnv = () => {
	if (isBrowser() && window.location.hostname === 'localhost') return 'local';
	return process.env.GATSBY_ENV;
};

export const sendLog = (errorData) => {
  const userAgent = isBrowser() ? navigator.userAgent: undefined;
  const source = isBrowser() ? window.location.href: undefined;
  const data = {
    env: getEnv(),
    content: [{ ...errorData, userAgent, source }],
  };
  axios
    .post(`${API_URL}log`, data)
    .catch((response) => console.log(response));
};
