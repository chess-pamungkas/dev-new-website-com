import React, { createContext, useEffect, useState, useContext } from "react";
import { detectBrowserLanguage } from "../../helpers/services/detect-browser-settings";
import ClientResolverContext from "../client-resolver-context"
import { LANG_SELECT_OPTIONS } from "../../helpers/lang-options.config";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANG_SELECT_OPTIONS[0]);
  const { clientConfig } = useContext(ClientResolverContext);

  const findLanguage = (languageId) => {
    return LANG_SELECT_OPTIONS.find((item) => item.id === languageId) || LANG_SELECT_OPTIONS[0];
  }

  useEffect(() => {
    if (window !== undefined && clientConfig.forceToEnglish !== undefined) {
      // TODO: First check cookies here
      if (clientConfig.forceToEnglish) {
        setSelectedLanguage(LANG_SELECT_OPTIONS[0]);
      } else {
        setSelectedLanguage(findLanguage(detectBrowserLanguage()));
      }
      // TODO: Apply localization
    }
  }, [selectedLanguage, clientConfig])

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
