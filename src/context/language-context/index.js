import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { FXBO_LANG_COOKIE_KEYS_MAP } from "../../helpers/lang-options.config";
import CookieContext from "../cookie-context";
import {
  FXBO_LAST_LANGUAGE_KEY,
  LAST_LANGUAGE_KEY,
  NECESSARY_COOKIE_KEY,
  PERFORMANCE_COOKIE_KEY,
} from "../../helpers/gdpr-cookie.config";
import {
  detectInitialLanguage,
  changeI18nLanguage,
} from "../../helpers/services/language-service";
import ClientResolverContext from "../client-resolver-context";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const { setCookie } = useContext(CookieContext);
  const { clientConfig } = useContext(ClientResolverContext);
  const initialLang = useMemo(
    () => detectInitialLanguage(clientConfig?.recommendedLanguage),
    [clientConfig]
  );

  const [selectedLanguage, setSelectedLanguage] = useState(initialLang);

  useEffect(() => {
    // update actual language if initital was changed (e.g. if clientConfig was updated)
    setSelectedLanguage(initialLang);
  }, [initialLang]);

  useEffect(() => {
    // update the actual path with the selected language (e.g. from /forex to /fr/forex)
    changeI18nLanguage(selectedLanguage);
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
