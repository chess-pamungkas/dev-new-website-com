import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { navigate } from "gatsby";
import { I18nextContext } from "gatsby-plugin-react-i18next";
import { detectBrowserLanguage } from "../../helpers/services/detect-browser-settings";
import {
  FXBO_LANG_COOKIE_KEYS_MAP,
  LANG_SELECT_OPTIONS,
} from "../../helpers/lang-options.config";
import CookieContext from "../cookie-context";
import {
  FXBO_LAST_LANGUAGE_KEY,
  LAST_LANGUAGE_KEY,
  NECESSARY_COOKIE_KEY,
  PERFORMANCE_COOKIE_KEY,
} from "../../helpers/gdpr-cookie.config";
import { isBrowser } from "../../helpers/services/is-browser";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const { getCookie, setCookie } = useContext(CookieContext);
  const { language: i18Language } = useContext(I18nextContext);
  const browserLanguage = useMemo(() => detectBrowserLanguage(), []);
  const defaultLang = useMemo(
    () => LANG_SELECT_OPTIONS.find(({ isDefault }) => isDefault),
    []
  );

  const changeLanguage = (selectedLang) => {
    if (selectedLang.id !== i18Language) {
      if (isBrowser()) {
        const { pathname, search } = window.location;
        const navigatePath =
          `${selectedLang.URIPart}` + pathname.replace(`/${i18Language}/`, "/");
        navigate(`${navigatePath}${search}`);
      }
    }
  };

  const getLangFromUrl = () => {
    const { pathname } = window.location;
    const matches = pathname.match(/\/[a-z]{2}\//);
    if (matches) {
      const langCode = matches[0].slice(1, 3);
      return langCode;
    }
  };

  const findLanguage = useCallback(
    (languageId) => {
      return (
        LANG_SELECT_OPTIONS.find((item) => item.id === languageId) ||
        defaultLang
      );
    },
    [defaultLang]
  );

  const initialLanguageDetection = useCallback(
    // Language resolution order: language from URL -> language from cookie -> language from browser -> default (en)
    () =>
      findLanguage(
        getLangFromUrl() || getCookie(LAST_LANGUAGE_KEY) || browserLanguage
      ),
    [i18Language]
  );

  const [selectedLanguage, setSelectedLanguage] = useState(
    initialLanguageDetection()
  );

  useEffect(() => {
    changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    setCookie(LAST_LANGUAGE_KEY, selectedLanguage.id, PERFORMANCE_COOKIE_KEY);
    setCookie(
      FXBO_LAST_LANGUAGE_KEY,
      FXBO_LANG_COOKIE_KEYS_MAP[selectedLanguage.id],
      NECESSARY_COOKIE_KEY
    );
  }, [setCookie, selectedLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
