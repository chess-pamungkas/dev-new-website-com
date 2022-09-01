import React, { createContext, useEffect, useState, useContext } from "react";
import { detectBrowserLanguage } from "../../helpers/services/detect-browser-settings";
import ClientResolverContext from "../client-resolver-context";
import { LANG_SELECT_OPTIONS } from "../../helpers/lang-options.config";
import CookieContext from "../cookie-context";
import {
  LAST_LANGUAGE_KEY,
  PERFORMANCE_COOKIE_KEY,
} from "../../helpers/gdpr-cookie.config";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const { clientConfig } = useContext(ClientResolverContext);
  const { getCookie, setCookie } = useContext(CookieContext);

  const findLanguage = (languageId) => {
    return (
      LANG_SELECT_OPTIONS.find((item) => item.id === languageId) ||
      LANG_SELECT_OPTIONS[0]
    );
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    findLanguage(getCookie(LAST_LANGUAGE_KEY))
  );

  useEffect(() => {
    if (window !== undefined && clientConfig.forceToEnglish !== undefined) {
      const lastLanguage = getCookie(LAST_LANGUAGE_KEY);

      if (lastLanguage !== undefined) {
        setSelectedLanguage(findLanguage(lastLanguage));
      } else if (clientConfig.forceToEnglish) {
        setSelectedLanguage(LANG_SELECT_OPTIONS[0]);
      } else {
        setSelectedLanguage(findLanguage(detectBrowserLanguage()));
      }
      setCookie(LAST_LANGUAGE_KEY, selectedLanguage.id, PERFORMANCE_COOKIE_KEY);
    }
  }, [clientConfig, getCookie, setCookie, selectedLanguage.id]);

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
