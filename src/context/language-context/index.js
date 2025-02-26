import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import PropTypes from "prop-types";
import CookieContext from "../cookie-context";
import {
  LAST_LANGUAGE_KEY,
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
    setSelectedLanguage(initialLang);
  }, [initialLang]);

  useEffect(() => {
    // Update language
    changeI18nLanguage(selectedLanguage);

    // Handle RTL
    const rtlLanguages = ["ar"];
    const isRTL = rtlLanguages.includes(selectedLanguage.id);

    // Set RTL direction
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    if (isRTL) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [selectedLanguage]);

  useEffect(() => {
    setCookie(LAST_LANGUAGE_KEY, selectedLanguage.id, PERFORMANCE_COOKIE_KEY);
  }, [setCookie, selectedLanguage]);

  useEffect(() => {
    if (selectedLanguage.id === "jp") {
      document.body.classList.add("jp-font");
    } else {
      document.body.classList.remove("jp-font");
    }
  }, [selectedLanguage]);

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

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LanguageContext;
