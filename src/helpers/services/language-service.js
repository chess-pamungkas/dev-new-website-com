import { navigate } from "gatsby";
import { LAST_LANGUAGE_KEY } from "../gdpr-cookie.config";
import { LANG_SELECT_OPTIONS } from "../lang-options.config";
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
  // used to find the /{ln}/ part and extract the language
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

export const changeI18nLanguage = (selectedLang) => {
  // used to update the actual path with the selected language (e.g. from /forex to /fr/forex)
  if (isBrowser()) {
    const { pathname, search } = window.location;
    if (!pathname.startsWith(`/${selectedLang.id}/`)) {
      const navigatePath =
        `${selectedLang.URIPart}` + pathname.replace(/\/[a-z]{2}\//, "/");
      navigate(`${navigatePath}${search}`);
    }
  }
};

export const detectInitialLanguage = (recommendedLanguage) => {
  // Language resolution order: language from URL -> language from cookie -> recommended language (from backend config) -> default (en)
  return findLangById(
    getLangFromUrl() || langFromCookie || recommendedLanguage
  );
};
