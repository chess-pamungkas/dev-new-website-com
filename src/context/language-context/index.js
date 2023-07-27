import React, { createContext, useContext, useEffect, useState } from "react";
import { navigate } from "gatsby";
import { FXBO_LANG_COOKIE_KEYS_MAP } from "../../helpers/lang-options.config";
import CookieContext from "../cookie-context";
import {
  FXBO_LAST_LANGUAGE_KEY,
  LAST_LANGUAGE_KEY,
  NECESSARY_COOKIE_KEY,
  PERFORMANCE_COOKIE_KEY,
} from "../../helpers/gdpr-cookie.config";
import { isBrowser } from "../../helpers/services/is-browser";
import { detectInitialLanguage } from "../../helpers/services/language-service";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const { setCookie } = useContext(CookieContext);

  const changeLanguage = (selectedLang) => {
    if (isBrowser()) {
      const { pathname, search } = window.location;
      if (!pathname.startsWith(`/${selectedLang.id}/`)) {
        const navigatePath =
          `${selectedLang.URIPart}` + pathname.replace(/\/[a-z]{2}\//, "/");
        navigate(`${navigatePath}${search}`);
      }
    }
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    detectInitialLanguage()
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
