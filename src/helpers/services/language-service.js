import { LAST_LANGUAGE_KEY } from "../gdpr-cookie.config";
import { LANG_SELECT_OPTIONS } from "../lang-options.config";
import { detectBrowserLanguage } from "./detect-browser-settings";
import { isBrowser } from "./is-browser";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const defaultLang = LANG_SELECT_OPTIONS.find(
  ({ isDefault }) => isDefault
);

const findLangById = (languageId) => {
  return (
    LANG_SELECT_OPTIONS.find((item) => item.id === languageId) || defaultLang
  );
};

const getLangFromUrl = () => {
  if (isBrowser()) {
    const { pathname } = window.location;
    const matches = pathname.match(/\/[a-z]{2}\//);
    if (matches) {
      const langCode = matches[0].slice(1, 3);
      return langCode;
    }
  }
};

const langFromCookie = cookies.get(LAST_LANGUAGE_KEY);

const browserLanguage = detectBrowserLanguage();

export const detectInitialLanguage = () => {
  // Language resolution order: language from URL -> language from cookie -> language from browser -> default (en)
  return findLangById(getLangFromUrl() || langFromCookie);
};
