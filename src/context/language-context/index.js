import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { navigate } from "gatsby";
import { I18nextContext } from "gatsby-plugin-react-i18next";
import { detectBrowserLanguage } from "../../helpers/services/detect-browser-settings";
import ClientResolverContext from "../client-resolver-context";
import { LANG_SELECT_OPTIONS } from "../../helpers/lang-options.config";
import CookieContext from "../cookie-context";
import {
  LAST_LANGUAGE_KEY,
  PERFORMANCE_COOKIE_KEY,
} from "../../helpers/gdpr-cookie.config";
import { isBrowser } from "../../helpers/services/is-browser";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const { clientConfig } = useContext(ClientResolverContext);
  const { getCookie, setCookie } = useContext(CookieContext);
  const { language: i18Language } = useContext(I18nextContext);
  const browserLanguage = useMemo(() => detectBrowserLanguage(), []);
  const defaultLang = useMemo(
    () => LANG_SELECT_OPTIONS.find(({ isDefault }) => isDefault), []
  );

  const findLanguage = useCallback(languageId => {
    return (
      LANG_SELECT_OPTIONS.find((item) => item.id === languageId) ||
      defaultLang
    );
  }, [defaultLang]);

  const initialLanguageDetection = useCallback(() => {
    if (i18Language !== defaultLang.id) return findLanguage(i18Language);

    return findLanguage(getCookie(LAST_LANGUAGE_KEY) || browserLanguage)
  }, [
    i18Language,
    defaultLang,
    findLanguage,
    getCookie,
    browserLanguage
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState(
    initialLanguageDetection()
  );

  useEffect(() => {
    if (isBrowser() && clientConfig.forceToEnglish !== undefined) {
      const lastLanguage = getCookie(LAST_LANGUAGE_KEY);

      if (lastLanguage !== undefined) {
        setSelectedLanguage(findLanguage(lastLanguage));
      } else if (clientConfig.forceToEnglish) {
        setSelectedLanguage(defaultLang);
      }
    }
  }, [
    clientConfig,
    getCookie,
    defaultLang,
    findLanguage
  ]);

  useEffect(() => {
    if (!selectedLanguage.id) return;

    const { pathname, search } = window.location;
    if (selectedLanguage.id === defaultLang.id) {
      const processedPathname = pathname.replace(`/${i18Language}/`, '/');
      const navigatePath = processedPathname || '/';
      navigate(`${navigatePath}${search}`);
      return;
    };

    const navigatePath = `/${selectedLanguage.id}` + pathname.replace(`/${i18Language}/`, '/')
    navigate(`${navigatePath}${search}`);
  }, [
    selectedLanguage,
    defaultLang,
    i18Language
  ]);

  useEffect(() => {
    setCookie(LAST_LANGUAGE_KEY, selectedLanguage.id, PERFORMANCE_COOKIE_KEY);
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
