import React, { useState, useContext, useEffect, useRef, useMemo } from "react";
import { Formik } from "formik";
import cn from "classnames";
import { PopupRegistrationSchema } from "../../../../../validations/popup-registration";
import axios from "axios";
import { Trans, useTranslation } from "react-i18next";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useTranslationWithVariables } from "../../../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../../../helpers/hooks/use-rtl-direction";
import { sendLog } from "../../../../../helpers/services/log-service";
import countries from "../../../../shared/countries";
import ClientResolverContext from "../../../../../context/client-resolver-context";
import { PORTAL_LANGUAGES_MAP } from "../../../../../helpers/lang-options.config";
import LanguageContext from "../../../../../context/language-context";
import arrowDownIcon from "../../../../../assets/images/icons/arrow-down.png";
import { cleanRTLAttributes } from "../../index";

const RTL_LANGUAGES = ["ar"];

const ERROR_CODE_MAP = {
  99: "popup-registration-error-unexpected",
  10001: "popup-registration-error-invalid-data",
  10002: "popup-registration-error-operation-failure",
  10017: "popup-registration-error-signature-verification",
  40018: "popup-registration-error-blacklisted",
  40035: "popup-registration-error-ip-blocked",
  41009: "popup-registration-error-referral-code",
  41040: "popup-registration-error-registration-failed",
  80003: "popup-registration-error-password-format",
  80084: "popup-registration-error-email-format",
  80051: "popup-registration-error-email-taken",
};

const CodeDropdown = ({
  searchCode,
  setSearchCode,
  selectedCountryCode,
  handleCodeSelect,
  t,
  codeOptionsRef,
  setIsCodeOpen,
  errors,
  touched,
}) => {
  const initialActiveIndex = useMemo(() => {
    if (!selectedCountryCode) return 0;
    return (
      countries.findIndex((country) => country.code === selectedCountryCode) ||
      0
    );
  }, [selectedCountryCode]);

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const filteredCodes = useMemo(() => {
    if (!searchCode) return countries;
    const searchTerm = searchCode.toLowerCase().trim();

    if (/^[+\d]/.test(searchTerm)) {
      return countries.filter((country) =>
        country.code.replace("+", "").startsWith(searchTerm.replace("+", ""))
      );
    }
    return countries.filter((country) =>
      country.name.toLowerCase().startsWith(searchTerm)
    );
  }, [searchCode]);

  useEffect(() => {
    setActiveIndex(0);
  }, [searchCode]);

  useEffect(() => {
    if (codeOptionsRef.current && selectedCountryCode) {
      const selectedElement = codeOptionsRef.current.querySelector(
        ".custom-dropdown__option--selected"
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "center", behavior: "auto" });
      }
    }
  }, [selectedCountryCode]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < filteredCodes.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCodes.length > 0) {
          handleCodeSelect(filteredCodes[activeIndex].code);
          setSearchCode("");
          setIsCodeOpen(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="custom-dropdown__content">
      <input
        type="text"
        className={cn("custom-dropdown__search", {
          "custom-dropdown__search--error":
            errors.country_code && touched.country_code,
        })}
        placeholder={t("popup-registration-search")}
        value={searchCode}
        onChange={(e) => setSearchCode(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <div className="custom-dropdown__options" ref={codeOptionsRef}>
        {filteredCodes.map((country, index) => (
          <div
            key={`${country.code}-${index}`}
            className={`custom-dropdown__option ${
              selectedCountryCode === country.code
                ? "custom-dropdown__option--selected"
                : ""
            } ${
              index === activeIndex ? "custom-dropdown__option--active" : ""
            }`}
            onClick={() => {
              handleCodeSelect(country.code);
              setSearchCode("");
              setIsCodeOpen(false);
            }}
          >
            {`${country.name} ${country.code}`}
          </div>
        ))}
      </div>
      {errors.country_code && touched.country_code && (
        <div className="popup-registration__error">
          {t(errors.country_code)}
        </div>
      )}
    </div>
  );
};

const CountryDropdown = ({
  searchCountry,
  setSearchCountry,
  selectedCountry,
  handleCountrySelect,
  t,
  countryOptionsRef,
  filteredCountries,
  setFieldValue,
  setIsCountryOpen,
  errors,
  touched,
}) => {
  const initialActiveIndex = useMemo(() => {
    if (!selectedCountry) return 0;
    return (
      countries.findIndex((country) => country.name === selectedCountry) || 0
    );
  }, [selectedCountry]);

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  useEffect(() => {
    setActiveIndex(0);
  }, [searchCountry]);

  useEffect(() => {
    if (countryOptionsRef.current && selectedCountry) {
      const selectedElement = countryOptionsRef.current.querySelector(
        ".custom-dropdown__option--selected"
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "center", behavior: "auto" });
      }
    }
  }, [selectedCountry]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < filteredCountries.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCountries.length > 0) {
          handleCountrySelect(filteredCountries[activeIndex].name);
          setSearchCountry("");
          setIsCountryOpen(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="custom-dropdown__content">
      <input
        type="text"
        className={cn("custom-dropdown__search", {
          "custom-dropdown__search--error": errors.country && touched.country,
        })}
        placeholder={t("popup-registration-search")}
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <div className="custom-dropdown__options" ref={countryOptionsRef}>
        {filteredCountries.map((country, index) => (
          <div
            key={country.name}
            className={`custom-dropdown__option ${
              selectedCountry === country.name
                ? "custom-dropdown__option--selected"
                : ""
            } ${
              index === activeIndex ? "custom-dropdown__option--active" : ""
            }`}
            onClick={() => {
              handleCountrySelect(country.name);
              setSearchCountry("");
              setIsCountryOpen(false);
            }}
          >
            {country.name}
          </div>
        ))}
      </div>
      {errors.country && touched.country && (
        <div className="popup-registration__error">{t(errors.country)}</div>
      )}
    </div>
  );
};

// Wrapper component to force remount when RTL changes
const RTLAwareForm = ({ children, isRTLMode, language }) => {
  // Use a key to force remount of child components when RTL changes
  return (
    <div
      key={`${isRTLMode ? "rtl" : "ltr"}-${language || "default"}-wrapper`}
      data-rtl={isRTLMode ? "true" : "false"}
      dir={isRTLMode ? "rtl" : "ltr"}
      style={{
        direction: isRTLMode ? "rtl" : "ltr",
        textAlign: isRTLMode ? "right" : "left",
      }}
    >
      {children}
    </div>
  );
};

const PopupRegistrationForm = ({ params }) => {
  const { t } = useTranslationWithVariables();
  const isRTL = useRtlDirection();
  const countryOptionsRef = useRef(null);
  const codeOptionsRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSentSuccessful, setIsSentSuccessful] = useState(null);
  const API_URL = process.env.GATSBY_OQTIMA_API_URL;
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { clientConfig } = useContext(ClientResolverContext);
  const { selectedLanguage, setCurrentLanguage } = useContext(LanguageContext);

  // Add effect to prevent incorrect language and RTL settings
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("PopupRegistrationForm: Checking language settings");

      // Detect if we have explicit language in params
      let specificLanguage = null;
      let dataLang = null;

      try {
        // Try to get language from params
        if (typeof params === "string") {
          const parsedParams = JSON.parse(params);
          if (parsedParams.langParam) {
            specificLanguage = parsedParams.langParam;
          }
          if (parsedParams.dataLang) {
            dataLang = parsedParams.dataLang;
          }
        } else if (params) {
          if (params.langParam) {
            specificLanguage = params.langParam;
          }
          if (params.dataLang) {
            dataLang = params.dataLang;
          }
        }

        // Check URL search params
        if (!specificLanguage) {
          const urlParams = new URLSearchParams(window.location.search);
          specificLanguage = urlParams.get("language") || urlParams.get("lang");

          if (!dataLang) {
            dataLang = urlParams.get("data-lang");
          }
        }

        console.log(
          "Detected languages - specificLanguage:",
          specificLanguage,
          "dataLang:",
          dataLang
        );

        // Store in sessionStorage for this tab only
        if (specificLanguage) {
          try {
            sessionStorage.setItem("oqtima_tab_language", specificLanguage);
          } catch (e) {
            /* ignore */
          }
        }

        // CRITICAL FIX: Handle conflict between data-lang="ar" and language="en"
        // If we have a language param of "en" but data-lang of "ar", explicitly force "en"
        if (
          specificLanguage &&
          specificLanguage.toLowerCase() === "en" &&
          dataLang &&
          dataLang.toLowerCase() === "ar"
        ) {
          console.log(
            "CRITICAL FIX: Detected conflict between language='en' and data-lang='ar'"
          );
          console.log("Forcing English language and LTR mode");

          // Fix document attributes
          document.documentElement.setAttribute("dir", "ltr");
          document.body.setAttribute("dir", "ltr");
          document.documentElement.setAttribute("lang", "en");

          // Remove RTL classes
          document.documentElement.classList.remove(
            "rtl-active",
            "rtl",
            "is-rtl"
          );
          document.body.classList.remove("rtl-active", "rtl", "is-rtl");

          // Fix global flags
          window.__FORCE_RTL__ = false;
          window.__ORIGINAL_RTL__ = false;
          window.gatsby_i18next_language = "en";

          // Save correct language to sessionStorage (tab specific)
          try {
            sessionStorage.setItem("oqtima_tab_language", "en");
            // Only set localStorage if it already has a value
            if (localStorage.getItem("i18nextLng")) {
              localStorage.setItem("i18nextLng", "en");
            }
          } catch (e) {
            /* ignore */
          }

          // Add special override to prevent automatic RTL detection
          window.__OQTIMA_DISABLE_AUTO_RTL__ = true;

          // Force visual refresh
          document.body.style.display = "none";
          setTimeout(() => {
            document.body.style.display = "";
          }, 10);
        }
        // If we have a specific language and it's not Arabic, ensure we're not in RTL mode
        else if (specificLanguage && specificLanguage.toLowerCase() !== "ar") {
          console.log(`Form detected non-Arabic language: ${specificLanguage}`);

          // Fix incorrect RTL settings
          if (
            document.documentElement.dir === "rtl" ||
            document.documentElement.getAttribute("lang") === "ar" ||
            document.documentElement.classList.contains("rtl-active")
          ) {
            console.log("CORRECTING INCORRECT RTL SETTINGS");

            // Fix document attributes
            document.documentElement.setAttribute("dir", "ltr");
            document.body.setAttribute("dir", "ltr");
            document.documentElement.setAttribute("lang", specificLanguage);

            // Remove RTL classes
            document.documentElement.classList.remove(
              "rtl-active",
              "rtl",
              "is-rtl"
            );
            document.body.classList.remove("rtl-active", "rtl", "is-rtl");

            // Fix global flags
            if (window.__FORCE_RTL__) window.__FORCE_RTL__ = false;
            if (window.__ORIGINAL_RTL__) window.__ORIGINAL_RTL__ = false;
            if (window.gatsby_i18next_language === "ar") {
              try {
                window.gatsby_i18next_language = specificLanguage;
              } catch (e) {
                /* ignore */
              }
            }

            // Save correct language to sessionStorage (per tab)
            try {
              sessionStorage.setItem("oqtima_tab_language", specificLanguage);
              // Only set localStorage if it already has a value
              if (localStorage.getItem("i18nextLng")) {
                localStorage.setItem("i18nextLng", specificLanguage);
              }
            } catch (e) {
              /* ignore */
            }

            // Force visual refresh
            document.body.style.display = "none";
            setTimeout(() => {
              document.body.style.display = "";
            }, 10);
          }
        }
      } catch (e) {
        console.error("Error checking language settings:", e);
      }
    }
  }, [params]);

  // Parse params safely
  const safeParams = useMemo(() => {
    try {
      let parsedParams = {};
      console.log("Raw params:", params);

      // Try to parse JSON if params is a string
      if (typeof params === "string") {
        try {
          // Try standard JSON parsing first
          parsedParams = JSON.parse(params);
          console.log("Successfully parsed params as JSON:", parsedParams);
        } catch (jsonErr) {
          console.warn("JSON parsing failed:", jsonErr.message);

          // Check if the string might contain referral parameters in a non-standard format
          if (
            params.includes("referral_type") ||
            params.includes("referral_value")
          ) {
            console.log(
              "Found referral params in string, attempting alternate parsing"
            );

            // Try to extract referral parameters using regex
            const referralTypeMatch = params.match(
              /referral_type["|']?\s*:\s*(?:"|')?([^"',}]*)(?:"|')?/i
            );
            const referralValueMatch = params.match(
              /referral_value["|']?\s*:\s*(?:"|')?([^"',}]*)(?:"|')?/i
            );

            if (referralTypeMatch && referralTypeMatch[1]) {
              parsedParams.referral_type = referralTypeMatch[1].trim();
              console.log(
                "Extracted referral_type:",
                parsedParams.referral_type
              );
            }

            if (referralValueMatch && referralValueMatch[1]) {
              parsedParams.referral_value = referralValueMatch[1].trim();
              console.log(
                "Extracted referral_value:",
                parsedParams.referral_value
              );
            }
          }

          // If the string is simple (like a language code), parse it as a language
          else if (params && params.length <= 7) {
            // Most language codes are 2-5 chars
            parsedParams = { langParam: params };
          }
        }
      } else if (params && typeof params === "object") {
        // Handle case where params is already an object
        parsedParams = { ...params };
        console.log("Params is already an object:", parsedParams);
      }

      // Ensure referral parameters exist and are properly formatted
      if (parsedParams.referral_type) {
        // Make sure it's not a string "null" or "undefined"
        if (
          parsedParams.referral_type === "null" ||
          parsedParams.referral_type === "undefined"
        ) {
          parsedParams.referral_type = null;
        }
        // Convert string numbers to actual numbers
        else if (!isNaN(parsedParams.referral_type)) {
          parsedParams.referral_type = Number(parsedParams.referral_type);
        }
      }

      if (parsedParams.referral_value) {
        // Make sure it's not a string "null" or "undefined"
        if (
          parsedParams.referral_value === "null" ||
          parsedParams.referral_value === "undefined"
        ) {
          parsedParams.referral_value = null;
        }
      }

      // Store referral parameters in sessionStorage for persistence
      if (typeof window !== "undefined") {
        if (parsedParams.referral_type) {
          try {
            sessionStorage.setItem(
              "oqtima_referral_type",
              parsedParams.referral_type
            );
          } catch (e) {
            /* ignore storage errors */
          }
        }

        if (parsedParams.referral_value) {
          try {
            sessionStorage.setItem(
              "oqtima_referral_value",
              parsedParams.referral_value
            );
          } catch (e) {
            /* ignore storage errors */
          }
        }
      }

      // IMPORTANT FIX: Sanitize the langParam if it contains a query string format
      if (parsedParams.langParam) {
        // Check if langParam mistakenly contains "?language=" or similar prefixes
        const langValue = parsedParams.langParam;

        if (langValue.includes("?")) {
          // Try to extract the actual language value from the query string
          try {
            // Handle cases like "?language=en" or "?lang=en"
            const queryMatch = langValue.match(
              /[?&](language|lang|locale)=([^&]+)/i
            );
            if (queryMatch && queryMatch[2]) {
              parsedParams.langParam = queryMatch[2];
            } else {
              // If we can't extract the language, default to "en"
              parsedParams.langParam = "en";
            }
          } catch (err) {
            // Default to "en" if we can't parse the language
            parsedParams.langParam = "en";
          }
        }
      }

      // Explicitly check for URL parameters that might contain language info
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);

        // Check for language parameters with various names
        const urlLangParam =
          urlParams.get("language") ||
          urlParams.get("lang") ||
          urlParams.get("locale") ||
          urlParams.get("i18nextLng");

        // Only override if URL contains language param and it's not already set
        if (urlLangParam && !parsedParams.langParam) {
          parsedParams.langParam = urlLangParam;
        }

        // Handle data-lang parameter which may be set as br (for brazilian portuguese)
        const urlDataLang = urlParams.get("data-lang");
        if (urlDataLang && !parsedParams.langParam) {
          parsedParams.langParam = urlDataLang;
        }

        // Check for referral parameters in URL - these take precedence
        const urlReferralType =
          urlParams.get("referral_type") ||
          urlParams.get("referralType") ||
          urlParams.get("referral-type");

        const urlReferralValue =
          urlParams.get("referral_value") ||
          urlParams.get("referralValue") ||
          urlParams.get("referral-value");

        if (urlReferralType) {
          parsedParams.referral_type = !isNaN(urlReferralType)
            ? Number(urlReferralType)
            : urlReferralType;
          console.log(
            "Using referral_type from URL params:",
            parsedParams.referral_type
          );
        }

        if (urlReferralValue) {
          parsedParams.referral_value = urlReferralValue;
          console.log(
            "Using referral_value from URL params:",
            parsedParams.referral_value
          );
        }

        // NEW: If URL parameters are empty, try to extract language from the iframe's src attribute
        // This is needed because some environments (like dev.oqt-ima.com) may not properly pass URL parameters
        if (!parsedParams.langParam && window.location.pathname) {
          // Check if we're in a language-specific path like /br/popup-registration
          const pathParts = window.location.pathname.split("/").filter(Boolean);
          if (pathParts.length > 0) {
            const possibleLang = pathParts[0];
            // Check if the first part of the path is a language code (typically 2-5 chars)
            if (possibleLang && possibleLang.length <= 7) {
              parsedParams.langParam = possibleLang;
            }
          }
        }
      }

      // Log the final parsed parameters
      console.log("Final parsed parameters:", parsedParams);
      return parsedParams;
    } catch (e) {
      console.error("Error parsing parameters:", e);
      return {};
    }
  }, [params]);

  // Store referral parameters in state with defaults from parsed params
  const [referral_type, setReferralType] = useState(
    safeParams.referral_type || null
  );
  const [referral_value, setReferralValue] = useState(
    safeParams.referral_value || null
  );

  // ADDED: Store country and IP information with defaults
  const [clientIpAddress, setClientIpAddress] = useState(null);
  const [clientCountryName, setClientCountryName] = useState(null);
  const [clientCountryCode, setClientCountryCode] = useState(null);

  // ADDED: State untuk menampung language dari berbagai sumber
  const [languageFromUrl, setLanguageFromUrl] = useState(null);
  const [languageFromMessage, setLanguageFromMessage] = useState(null);

  // ADDED: Debug logger untuk nilai language yang sedang digunakan
  useEffect(() => {
    // Start with the source language following our priority order
    let initialLanguage =
      safeParams.langParam ||
      languageFromMessage ||
      languageFromUrl ||
      selectedLanguage?.id ||
      "en";

    // Check if we're in a path like /br/ and if so, ensure we're using 'br'
    if (typeof window !== "undefined" && window.location.pathname) {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      if (pathParts.length > 0 && pathParts[0] === "br") {
        if (initialLanguage !== "br") {
          initialLanguage = "br";
        }
      }
    }

    // Normalize Brazilian Portuguese variations
    const brVariations = ["br", "pt-br", "pt_br", "pt-BR", "pt_BR"];
    if (brVariations.includes(initialLanguage.toLowerCase())) {
      initialLanguage = "pt";
    }

    // Get final language code
    const finalLanguageCode =
      PORTAL_LANGUAGES_MAP[initialLanguage] || initialLanguage || "en";
  }, [safeParams, languageFromMessage, languageFromUrl, selectedLanguage]);

  // Update state values when params change
  useEffect(() => {
    console.log("safeParams updated:", safeParams);

    // Handle referral_type - could be number or string
    if (
      safeParams.referral_type !== undefined &&
      safeParams.referral_type !== null
    ) {
      // Convert string to number if it's numeric
      const typeValue = !isNaN(safeParams.referral_type)
        ? Number(safeParams.referral_type)
        : safeParams.referral_type;

      console.log("Setting referral_type state to:", typeValue);
      setReferralType(typeValue);

      // Also store in session storage for persistence
      try {
        sessionStorage.setItem("oqtima_referral_type", typeValue);
        // Also set as a global variable as a fallback
        window.__OQTIMA_REFERRAL_TYPE__ = typeValue;
      } catch (e) {
        /* ignore storage errors */
      }
    }

    // Handle referral_value
    if (
      safeParams.referral_value !== undefined &&
      safeParams.referral_value !== null
    ) {
      console.log(
        "Setting referral_value state to:",
        safeParams.referral_value
      );
      setReferralValue(safeParams.referral_value);

      // Also store in session storage for persistence
      try {
        sessionStorage.setItem(
          "oqtima_referral_value",
          safeParams.referral_value
        );
        // Also set as a global variable as a fallback
        window.__OQTIMA_REFERRAL_VALUE__ = safeParams.referral_value;
      } catch (e) {
        /* ignore storage errors */
      }
    }

    // Update language from safeParams if available
    if (safeParams.langParam) {
      // Highest priority is langParam from safeParams
      setLanguageFromUrl(null); // Reset language from URL
      setLanguageFromMessage(null); // Reset language from message

      // We'll set languageFromUrl based on safeParams.langParam
      // This ensures our language priority logic works correctly
      setLanguageFromUrl(safeParams.langParam);
    }

    // Debug log for referral parameters
    console.log("Current referral state values:");
    console.log("- referral_type:", referral_type);
    console.log("- referral_value:", referral_value);
  }, [safeParams]);

  // Listen for messages from parent window with higher priority
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === "REGISTRATION_PARAMS") {
        const data = event.data.data || {};

        const msgReferralType = data.referral_type || null;
        const msgReferralValue = data.referral_value || null;
        const msgLanguage = data.language || data.lang || null;

        // ADDED: Extract client information from message
        const msgIpAddress = data.ip_address || null;
        const msgCountryName = data.country_name || null;
        const msgCountryCode = data.country_code || null;

        // Log received parameters
        console.log("Received parameters from parent window:", {
          referral_type: msgReferralType,
          referral_value: msgReferralValue,
          language: msgLanguage,
        });

        // Set state values
        if (msgReferralType) setReferralType(msgReferralType);
        if (msgReferralValue) setReferralValue(msgReferralValue);

        // ADDED: Set client information if available
        if (msgIpAddress) setClientIpAddress(msgIpAddress);
        if (msgCountryName) setClientCountryName(msgCountryName);
        if (msgCountryCode) setClientCountryCode(msgCountryCode);

        // IMPORTANT: ENHANCED STORAGE - Store values in both sessionStorage and localStorage for redundancy
        try {
          if (msgReferralType) {
            sessionStorage.setItem("oqtima_referral_type", msgReferralType);
            localStorage.setItem("oqtima_referral_type", msgReferralType);
            console.log(
              "Successfully stored referral_type in storage:",
              msgReferralType
            );
          }

          if (msgReferralValue) {
            sessionStorage.setItem("oqtima_referral_value", msgReferralValue);
            localStorage.setItem("oqtima_referral_value", msgReferralValue);
            console.log(
              "Successfully stored referral_value in storage:",
              msgReferralValue
            );
          }

          // Set global variables as additional backup
          window.__OQTIMA_REFERRAL_TYPE__ = msgReferralType;
          window.__OQTIMA_REFERRAL_VALUE__ = msgReferralValue;
        } catch (e) {
          console.error("Error storing referral parameters:", e);
        }

        // Set langParam from message if available
        if (msgLanguage) {
          // Store language from message to override context language
          setLanguageFromMessage(msgLanguage);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Try to extract parameters directly from URL immediately
    const extractUrlParams = () => {
      try {
        console.log("Extracting URL parameters...");
        const urlParams = new URLSearchParams(window.location.search);

        // Create a collection of all parameters for debugging
        const allParams = {};
        urlParams.forEach((value, key) => {
          allParams[key] = value;
        });
        console.log("All URL parameters:", allParams);

        // Check all possible parameter formats for referral
        const urlReferralType =
          urlParams.get("referral_type") ||
          urlParams.get("referralType") ||
          urlParams.get("referral-type");

        const urlReferralValue =
          urlParams.get("referral_value") ||
          urlParams.get("referralValue") ||
          urlParams.get("referral-value");

        console.log("URL referral_type:", urlReferralType);
        console.log("URL referral_value:", urlReferralValue);

        // Immediately set found referral parameters to state and sessionStorage
        if (urlReferralType) {
          // Convert to number if it's numeric
          const numericType = !isNaN(urlReferralType)
            ? Number(urlReferralType)
            : urlReferralType;
          console.log(
            "Setting referral_type state from URL parameter:",
            numericType
          );
          setReferralType(numericType);

          // ENHANCED: Store in BOTH sessionStorage and localStorage for redundancy
          try {
            sessionStorage.setItem("oqtima_referral_type", numericType);
            localStorage.setItem("oqtima_referral_type", numericType);
            window.__OQTIMA_REFERRAL_TYPE__ = numericType;
            console.log("Stored referral_type in storage:", numericType);
          } catch (storageErr) {
            console.error(
              "Failed to store referral_type in storage:",
              storageErr
            );
          }
        }

        if (urlReferralValue) {
          console.log(
            "Setting referral_value state from URL parameter:",
            urlReferralValue
          );
          setReferralValue(urlReferralValue);

          // ENHANCED: Store in BOTH sessionStorage and localStorage for redundancy
          try {
            sessionStorage.setItem("oqtima_referral_value", urlReferralValue);
            localStorage.setItem("oqtima_referral_value", urlReferralValue);
            window.__OQTIMA_REFERRAL_VALUE__ = urlReferralValue;
            console.log("Stored referral_value in storage:", urlReferralValue);
          } catch (storageErr) {
            console.error(
              "Failed to store referral_value in storage:",
              storageErr
            );
          }
        }

        // ENHANCED: Check for safeParams referral values if URL params not found
        if (!urlReferralType && safeParams && safeParams.referral_type) {
          const safeParamsType = !isNaN(safeParams.referral_type)
            ? Number(safeParams.referral_type)
            : safeParams.referral_type;

          console.log("Found referral_type in safeParams:", safeParamsType);
          setReferralType(safeParamsType);

          // Store in storage for persistence
          try {
            sessionStorage.setItem("oqtima_referral_type", safeParamsType);
            localStorage.setItem("oqtima_referral_type", safeParamsType);
            window.__OQTIMA_REFERRAL_TYPE__ = safeParamsType;
            console.log(
              "Stored safeParams referral_type in storage:",
              safeParamsType
            );
          } catch (e) {
            console.error("Failed to store safeParams referral_type:", e);
          }
        }

        if (!urlReferralValue && safeParams && safeParams.referral_value) {
          console.log(
            "Found referral_value in safeParams:",
            safeParams.referral_value
          );
          setReferralValue(safeParams.referral_value);

          // Store in storage for persistence
          try {
            sessionStorage.setItem(
              "oqtima_referral_value",
              safeParams.referral_value
            );
            localStorage.setItem(
              "oqtima_referral_value",
              safeParams.referral_value
            );
            window.__OQTIMA_REFERRAL_VALUE__ = safeParams.referral_value;
            console.log(
              "Stored safeParams referral_value in storage:",
              safeParams.referral_value
            );
          } catch (e) {
            console.error("Failed to store safeParams referral_value:", e);
          }
        }

        // If not found in URL or safeParams, try sessionStorage (for popup mode)
        if (
          !urlReferralType &&
          !(safeParams && safeParams.referral_type) &&
          typeof window !== "undefined"
        ) {
          const storedReferralType =
            sessionStorage.getItem("oqtima_referral_type") ||
            localStorage.getItem("oqtima_referral_type");

          if (storedReferralType) {
            console.log("Found referral_type in storage:", storedReferralType);

            // Convert to number if it's numeric
            const numericType = !isNaN(storedReferralType)
              ? Number(storedReferralType)
              : storedReferralType;
            setReferralType(numericType);
          }
        }

        if (
          !urlReferralValue &&
          !(safeParams && safeParams.referral_value) &&
          typeof window !== "undefined"
        ) {
          const storedReferralValue =
            sessionStorage.getItem("oqtima_referral_value") ||
            localStorage.getItem("oqtima_referral_value");

          if (storedReferralValue) {
            console.log(
              "Found referral_value in storage:",
              storedReferralValue
            );
            setReferralValue(storedReferralValue);
          }
        }

        // Check global window variables as a fallback
        if (
          !urlReferralType &&
          !(safeParams && safeParams.referral_type) &&
          !referral_type &&
          typeof window !== "undefined"
        ) {
          if (window.__OQTIMA_REFERRAL_TYPE__ !== undefined) {
            console.log(
              "Found referral_type in window globals:",
              window.__OQTIMA_REFERRAL_TYPE__
            );

            // Convert to number if it's numeric
            const numericType = !isNaN(window.__OQTIMA_REFERRAL_TYPE__)
              ? Number(window.__OQTIMA_REFERRAL_TYPE__)
              : window.__OQTIMA_REFERRAL_TYPE__;

            setReferralType(numericType);

            // Also update sessionStorage for consistency
            try {
              sessionStorage.setItem("oqtima_referral_type", numericType);
              localStorage.setItem("oqtima_referral_type", numericType);
            } catch (e) {
              /* ignore storage errors */
            }
          }
        }

        if (
          !urlReferralValue &&
          !(safeParams && safeParams.referral_value) &&
          !referral_value &&
          typeof window !== "undefined"
        ) {
          if (window.__OQTIMA_REFERRAL_VALUE__ !== undefined) {
            console.log(
              "Found referral_value in window globals:",
              window.__OQTIMA_REFERRAL_VALUE__
            );
            setReferralValue(window.__OQTIMA_REFERRAL_VALUE__);

            // Also update sessionStorage for consistency
            try {
              sessionStorage.setItem(
                "oqtima_referral_value",
                window.__OQTIMA_REFERRAL_VALUE__
              );
              localStorage.setItem(
                "oqtima_referral_value",
                window.__OQTIMA_REFERRAL_VALUE__
              );
            } catch (e) {
              /* ignore storage errors */
            }
          }
        }

        // Set language from URL if available
        let detectedLanguage = null;

        // Try all possible language parameter names
        const languageParams = ["language", "lang", "locale", "i18nextLng"];
        for (const param of languageParams) {
          const value = urlParams.get(param);
          if (value) {
            detectedLanguage = value;
            break;
          }
        }

        // Check data-lang parameter specifically (highest priority for Brazilian Portuguese)
        const dataLang = urlParams.get("data-lang");
        if (dataLang) {
          detectedLanguage = dataLang;
        }

        // NEW: If URL parameters don't contain language, try to extract from pathname
        if (!detectedLanguage && window.location.pathname) {
          const pathParts = window.location.pathname.split("/").filter(Boolean);
          if (pathParts.length > 0) {
            const possibleLang = pathParts[0];
            // Check if first path segment looks like a language code
            if (possibleLang && possibleLang.length <= 7) {
              detectedLanguage = possibleLang;
            }
          }
        }

        // Set the language if detected from any source
        if (detectedLanguage) {
          setLanguageFromUrl(detectedLanguage);
        }

        // Log current referral parameter state
        console.log("Current referral parameter state after URL extraction:");
        console.log("- referral_type:", referral_type);
        console.log("- referral_value:", referral_value);

        // Log sessionStorage state for verification
        try {
          console.log("SessionStorage state for referral parameters:");
          console.log(
            "- oqtima_referral_type:",
            sessionStorage.getItem("oqtima_referral_type")
          );
          console.log(
            "- oqtima_referral_value:",
            sessionStorage.getItem("oqtima_referral_value")
          );
          console.log("LocalStorage state for referral parameters:");
          console.log(
            "- oqtima_referral_type:",
            localStorage.getItem("oqtima_referral_type")
          );
          console.log(
            "- oqtima_referral_value:",
            localStorage.getItem("oqtima_referral_value")
          );
        } catch (e) {
          console.error("Error reading storage:", e);
        }
      } catch (err) {
        console.error("Error extracting parameters:", err);
      }
    };

    // Extract parameters from URL immediately
    extractUrlParams();

    // Try again after a short delay (for late-loading cases)
    const timeout = setTimeout(extractUrlParams, 500);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timeout);
    };
  }, []);

  // ENHANCED: Additional component mount effect to ensure referral parameters are loaded
  useEffect(() => {
    // This effect runs once on component mount to ensure referral parameters are loaded from all possible sources
    console.log("Running additional referral parameter initialization");

    try {
      // Check if already set in state
      if (!referral_type || !referral_value) {
        console.log(
          "Referral parameters not fully set in state, checking all sources"
        );

        // Check sources in priority order: URL params -> safeParams -> sessionStorage -> localStorage -> global vars

        // 1. First check URL params
        const urlParams = new URLSearchParams(window.location.search);
        const urlReferralType =
          urlParams.get("referral_type") || urlParams.get("referralType");
        const urlReferralValue =
          urlParams.get("referral_value") || urlParams.get("referralValue");

        // 2. Check safeParams
        const safeParamsType = safeParams?.referral_type;
        const safeParamsValue = safeParams?.referral_value;

        // 3. Check sessionStorage
        const sessionType = sessionStorage.getItem("oqtima_referral_type");
        const sessionValue = sessionStorage.getItem("oqtima_referral_value");

        // 4. Check localStorage
        const localType = localStorage.getItem("oqtima_referral_type");
        const localValue = localStorage.getItem("oqtima_referral_value");

        // 5. Check global variables
        const globalType = window.__OQTIMA_REFERRAL_TYPE__;
        const globalValue = window.__OQTIMA_REFERRAL_VALUE__;

        // Set referral_type using priority order
        const finalType =
          urlReferralType ||
          safeParamsType ||
          sessionType ||
          localType ||
          globalType;
        if (finalType && !referral_type) {
          console.log(
            "Setting referral_type from combined sources:",
            finalType
          );

          // Parse as number if numeric
          const numericType = !isNaN(finalType) ? Number(finalType) : finalType;
          setReferralType(numericType);

          // Ensure it's stored in both sessionStorage and localStorage
          try {
            sessionStorage.setItem("oqtima_referral_type", String(numericType));
            localStorage.setItem("oqtima_referral_type", String(numericType));
            window.__OQTIMA_REFERRAL_TYPE__ = numericType;
            console.log(
              "Stored final referral_type in all storage mechanisms:",
              numericType
            );
          } catch (e) {
            console.error("Error storing final referral_type:", e);
          }
        }

        // Set referral_value using priority order
        const finalValue =
          urlReferralValue ||
          safeParamsValue ||
          sessionValue ||
          localValue ||
          globalValue;
        if (finalValue && !referral_value) {
          console.log(
            "Setting referral_value from combined sources:",
            finalValue
          );
          setReferralValue(finalValue);

          // Ensure it's stored in both sessionStorage and localStorage
          try {
            sessionStorage.setItem("oqtima_referral_value", finalValue);
            localStorage.setItem("oqtima_referral_value", finalValue);
            window.__OQTIMA_REFERRAL_VALUE__ = finalValue;
            console.log(
              "Stored final referral_value in all storage mechanisms:",
              finalValue
            );
          } catch (e) {
            console.error("Error storing final referral_value:", e);
          }
        }
      } else {
        console.log("Referral parameters already set in state:", {
          referral_type,
          referral_value,
        });

        // Ensure the state values are reflected in storage
        try {
          if (referral_type) {
            sessionStorage.setItem(
              "oqtima_referral_type",
              String(referral_type)
            );
            localStorage.setItem("oqtima_referral_type", String(referral_type));
            window.__OQTIMA_REFERRAL_TYPE__ = referral_type;
          }

          if (referral_value) {
            sessionStorage.setItem("oqtima_referral_value", referral_value);
            localStorage.setItem("oqtima_referral_value", referral_value);
            window.__OQTIMA_REFERRAL_VALUE__ = referral_value;
          }
        } catch (e) {
          console.error(
            "Error synchronizing referral parameters to storage:",
            e
          );
        }
      }
    } catch (e) {
      console.error("Error in referral parameter initialization effect:", e);
    }
  }, []);

  // Function to get the best language to use
  const getEffectiveLanguage = () => {
    try {
      // First, check for data-lang attribute
      const dataLangElements = document.querySelectorAll("[data-lang]");
      if (dataLangElements.length > 0) {
        const dataLang = dataLangElements[0].getAttribute("data-lang");
        if (dataLang) {
          console.log(
            "PopupRegistrationForm: Using data-lang attribute:",
            dataLang
          );
          return dataLang.toLowerCase();
        }
      }

      // Next, check for language from URL path (highest priority after data-lang)
      if (typeof window !== "undefined" && window.location.pathname) {
        const pathParts = window.location.pathname.split("/").filter(Boolean);
        if (pathParts.length > 0) {
          const possibleLang = pathParts[0];
          if (possibleLang && possibleLang.length <= 7) {
            console.log(
              "PopupRegistrationForm: Using language from URL path:",
              possibleLang
            );
            return possibleLang.toLowerCase();
          }
        }
      }

      // Next, check for language from safeParams
      if (safeParams && safeParams.langParam) {
        console.log(
          "PopupRegistrationForm: Using safeParams.langParam:",
          safeParams.langParam
        );
        return safeParams.langParam.toLowerCase();
      }

      // Then check URL parameters
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get("lang") || urlParams.get("langParam");
        if (langParam) {
          console.log(
            "PopupRegistrationForm: Using URL language parameter:",
            langParam
          );
          return langParam.toLowerCase();
        }
      }

      // Next, check if language is set in window globals
      if (typeof window !== "undefined" && window.__OQTIMA_LANG_MUST_USE) {
        console.log(
          "PopupRegistrationForm: Using window.__OQTIMA_LANG_MUST_USE:",
          window.__OQTIMA_LANG_MUST_USE
        );
        return window.__OQTIMA_LANG_MUST_USE.toLowerCase();
      }

      // Finally, check sessionStorage
      if (typeof window !== "undefined" && window.sessionStorage) {
        const sessionLang = sessionStorage.getItem("oqtima_tab_language");
        if (sessionLang) {
          console.log(
            "PopupRegistrationForm: Using sessionStorage language:",
            sessionLang
          );
          return sessionLang.toLowerCase();
        }
      }

      // Default to whatever was selected or English
      return (selectedLanguage && selectedLanguage.id) || "en";
    } catch (e) {
      console.error("Error determining effective language:", e);
      return "en";
    }
  };

  // Find the active language
  const effectiveLanguage = getEffectiveLanguage();

  // Save it immediately to sessionStorage
  if (
    typeof window !== "undefined" &&
    window.sessionStorage &&
    effectiveLanguage
  ) {
    try {
      sessionStorage.setItem("oqtima_tab_language", effectiveLanguage);
      const isRTL = RTL_LANGUAGES.includes(effectiveLanguage);
      sessionStorage.setItem("oqtima_tab_rtl", isRTL ? "true" : "false");
      console.log(
        `PopupRegistrationForm: Saved language to sessionStorage: ${effectiveLanguage}, RTL: ${isRTL}`
      );

      // Set language on document element
      document.documentElement.setAttribute("lang", effectiveLanguage);
      document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    } catch (e) {
      console.warn(
        "PopupRegistrationForm: Could not save language to sessionStorage:",
        e
      );
    }
  }

  // Check untuk RTL language
  const forcedRTL = RTL_LANGUAGES.includes(effectiveLanguage);
  const isRTLMode = isRTL || forcedRTL;

  // First parse and extract the language parameters
  useEffect(() => {
    if (typeof window === "undefined") return;

    // First parse and extract the language parameters
    // Check for language explicitly set in params (FIRST PRIORITY)
    let langParam, dataLang, urlLanguage, browserLanguage, nativeLanguage;

    try {
      if (params) {
        const parsedParams =
          typeof params === "string" ? JSON.parse(params) : params;
        langParam = parsedParams.langParam;
        dataLang = parsedParams.dataLang;
        urlLanguage = parsedParams.language;
        browserLanguage = parsedParams.browserLanguage;
        nativeLanguage = parsedParams.nativeLanguage;
      }
    } catch (e) {
      console.warn("Error parsing params:", e);
    }

    // Log initial params for debugging
    console.log("Registration form detected language parameters:", {
      langParam,
      dataLang,
      urlLanguage,
      browserLanguage,
      nativeLanguage,
    });

    // Create final specific language variable with proper prioritization
    const specificLanguage = langParam || urlLanguage || dataLang;

    if (specificLanguage) {
      console.log(`Using specific language: ${specificLanguage}`);

      // ADDED: Clean RTL attributes for non-Arabic languages
      if (specificLanguage.toLowerCase() !== "ar") {
        console.log(
          `Non-Arabic language detected (${specificLanguage}), cleaning RTL attributes`
        );
        cleanRTLAttributes();
      }

      // For RTL languages, update the language context
      if (setCurrentLanguage && typeof setCurrentLanguage === "function") {
        try {
          // Create proper language object expected by the context
          const isRtlLang = RTL_LANGUAGES.includes(
            specificLanguage.toLowerCase()
          );
          const langObject = {
            id: specificLanguage,
            title: specificLanguage.toUpperCase(),
            URIPart: `/${specificLanguage}/`,
            isRTL: isRtlLang,
          };
          setCurrentLanguage(langObject);
        } catch (e) {
          console.warn("Error updating language context:", e);
        }
      }

      // Make i18next aware of our language
      try {
        // Never call i18n.changeLanguage directly here - it could cause infinite loops
        // The LanguageContext will handle it
        if (
          window.i18next &&
          window.i18next.language !== specificLanguage.toLowerCase()
        ) {
          console.log(
            `Form detected language mismatch: i18next=${window.i18next.language}, form=${specificLanguage}`
          );
        }
      } catch (e) {
        console.warn("Error checking i18next language:", e);
      }
    }
  }, [params]);

  // NEW: Add specific effect to monitor language changes and handle RTL cleanup
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Function to check and fix RTL attributes based on the current language
    const handleLanguageRTLCheck = () => {
      try {
        // Get the current language from document or effectiveLanguage or fallback to "en"
        const currentLang = document.documentElement.getAttribute("lang");
        const portalLanguageCode = currentLang || effectiveLanguage || "en";
        console.log("portalLanguageCode", portalLanguageCode);

        // Check if it's in the RTL languages list
        const isRTLLanguage = RTL_LANGUAGES.includes(portalLanguageCode);

        // Always save the current language to persist across tab navigation
        if (typeof window !== "undefined" && portalLanguageCode) {
          // Store language in sessionStorage for this tab session
          sessionStorage.setItem("oqtima_tab_language", portalLanguageCode);
          sessionStorage.setItem(
            "oqtima_tab_rtl",
            isRTLLanguage ? "true" : "false"
          );

          // Don't let it default to 'en' if another language is specified
          if (portalLanguageCode !== "en") {
            // Ensure the language isn't overridden
            window.__OQTIMA_LANG_MUST_USE = portalLanguageCode;
            window.__OQTIMA_COMPONENT_LANGUAGE = portalLanguageCode;
            window.__OQTIMA_LOCKED_LANG = portalLanguageCode;
          }
        }

        // Only clean RTL attributes if switching from RTL to non-RTL
        if (isRTLMode && !isRTLLanguage) {
          console.log("Language change detected:", portalLanguageCode);
          if (portalLanguageCode !== "ar") {
            console.log(
              `Non-Arabic language '${portalLanguageCode}' detected, cleaning RTL attributes`
            );
            cleanRTLAttributes();
          }
        }
        // Apply RTL if needed but wasn't active before
        else if (!isRTLMode && isRTLLanguage) {
          console.log(`Setting up RTL for language: ${portalLanguageCode}`);

          // Force RTL to be applied properly
          document.documentElement.classList.add("rtl-active");
          document.documentElement.setAttribute("dir", "rtl");
          document.body.classList.add("rtl-active");
          document.body.setAttribute("dir", "rtl");

          // Update global RTL flags
          window.__FORCE_RTL__ = true;
          window.__ORIGINAL_RTL__ = true;
        }

        return isRTLLanguage;
      } catch (e) {
        console.error("Error in language/RTL check:", e);
        return false;
      }
    };

    // Run check immediately
    handleLanguageRTLCheck();

    // Set up observer to monitor language attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "lang") {
          handleLanguageRTLCheck();
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    // Cleanup on unmount
    return () => observer.disconnect();
  }, [effectiveLanguage, selectedLanguage, isRTLMode]);

  // Map ke language code portal untuk API
  // Special handling for language code mapping
  let portalLanguageCode;

  // First normalize effectiveLanguage to lowercase for case-insensitive comparison
  const effectiveLangLower = effectiveLanguage.toLowerCase();

  // Create a mapping object for special language code conversions
  const languageMapping = {
    // Brazilian Portuguese variations
    br: "pt",
    pt: "pt",
    "pt-br": "pt",
    pt_br: "pt",
    // Chinese variations
    cn: "zh-Hans",
    zh: "zh-Hant",
  };

  // Check if we have a special mapping for this language
  if (languageMapping[effectiveLangLower]) {
    portalLanguageCode = languageMapping[effectiveLangLower];
    console.log(
      `Mapping language code '${effectiveLangLower}' to '${portalLanguageCode}' for API calls`
    );
  } else {
    // For other languages, use the standard mapping or fallback to the original code
    portalLanguageCode =
      PORTAL_LANGUAGES_MAP[effectiveLanguage] || effectiveLanguage;
    console.log(`Using standard/original language code: ${portalLanguageCode}`);
  }

  console.log("Final portalLanguageCode:", portalLanguageCode);

  // Double-check if we're in a Brazilian Portuguese URL path but didn't catch it earlier
  if (typeof window !== "undefined" && window.location.pathname) {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0 && pathParts[0].toLowerCase() === "br") {
      portalLanguageCode = "pt";
    }
  }

  // Double-check if we're in a language-specific URL path but didn't catch it earlier
  if (typeof window !== "undefined" && window.location.pathname) {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const pathLang = pathParts[0].toLowerCase();

      // Check specifically for Chinese path
      if (pathLang === "cn" && portalLanguageCode !== "zh-Hans") {
        console.log(
          "Detected Chinese language path '/cn/', overriding to zh-Hans"
        );
        portalLanguageCode = "zh-Hans";
      }

      // Check for Brazilian Portuguese path
      if (pathLang === "br" && portalLanguageCode !== "pt") {
        console.log(
          "Detected Brazilian Portuguese path '/br/', overriding to pt"
        );
        portalLanguageCode = "pt";
      }

      // Log the final path-checked language code
      console.log(
        `Path check complete, using language code: ${portalLanguageCode}`
      );
    }
  }

  // Get translation function outside the effect to avoid the error
  const { i18n } = useTranslation();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchCode, setSearchCode] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [policyLinks, setPolicyLinks] = useState({
    privacyPolicy: "",
    cookiePolicy: "",
  });

  // Function to handle policy link clicks
  const handlePolicyLinkClick = (e, url) => {
    e.preventDefault();

    // Validate URL
    if (!url) {
      console.error("Empty or invalid policy URL");
      return;
    }

    console.log(`Attempting to open policy link: ${url}`);

    // Anti multi-click implementation
    const target = e.currentTarget;
    if (target.getAttribute("data-processing") === "true") {
      return;
    }

    // Set flag to prevent repeated clicks
    target.setAttribute("data-processing", "true");

    // Get policy type from URL
    const policyType = url.toLowerCase().includes("privacy")
      ? "Privacy"
      : url.toLowerCase().includes("cookie")
      ? "Cookie"
      : url.toLowerCase().includes("terms")
      ? "Terms"
      : "Policy";

    // Try to open the window directly
    let policyWindow = null;
    try {
      policyWindow = window.open(url, "_blank", "noopener,noreferrer");

      // Check if the window opened successfully
      if (policyWindow && !policyWindow.closed) {
        // Success
        console.log(`Successfully opened policy link: ${url}`);
        setTimeout(() => {
          target.removeAttribute("data-processing");
        }, 1000);
      } else {
        // Window.open was blocked
        console.warn(`window.open was blocked for ${url}`);

        // Log the blocked attempt
        console.log(`Policy link was blocked by the browser: ${url}`);

        // Reset processing state after delay
        setTimeout(() => {
          target.removeAttribute("data-processing");
        }, 1000);

        // Track analytics if available
        try {
          if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
              event: "policy_link_blocked",
              policyType: policyType,
              url: url,
            });
          }
        } catch (err) {
          // Ignore analytics errors
        }
      }
    } catch (err) {
      console.error("Error opening policy window:", err);

      // Reset the processing state
      target.removeAttribute("data-processing");
    }
  };

  useEffect(() => {
    const fetchPolicyLinks = async () => {
      try {
        // Create a local copy of portalLanguageCode that we can modify within this function scope
        let apiLanguageCode = portalLanguageCode;

        // Force check one more time for Brazilian Portuguese
        // This ensures that even if we somehow missed it earlier, we'll catch it here
        const urlPath =
          typeof window !== "undefined" ? window.location.pathname : "";
        if (urlPath.includes("/br/")) {
          if (apiLanguageCode !== "pt") {
            apiLanguageCode = "pt";
          }
        }

        const response = await axios.get(`${API_URL}crm-register/policy-links`);
        const { privacy_policy, cookie_policy } = response.data;

        // First try to find policy in user's language
        let privacyLink = privacy_policy.find(
          (p) => p.language === apiLanguageCode
        )?.oss_url;

        let cookieLink = cookie_policy.find(
          (c) => c.language === apiLanguageCode
        )?.oss_url;

        // If not found, fallback to English
        if (!privacyLink) {
          privacyLink = privacy_policy.find(
            (p) => p.language === "en"
          )?.oss_url;
        }

        if (!cookieLink) {
          cookieLink = cookie_policy.find((c) => c.language === "en")?.oss_url;
        }

        setPolicyLinks({
          privacyPolicy: privacyLink || "",
          cookiePolicy: cookieLink || "",
        });
      } catch (error) {
        sendLog({ message: error.message, type: error.name });
      }
    };

    fetchPolicyLinks();
  }, [portalLanguageCode, API_URL]);

  const filteredCountries = useMemo(() => {
    if (!searchCountry) return countries;
    const searchTerm = searchCountry.toLowerCase();
    return countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
  }, [searchCountry]);

  const handleApiResponse = (isSuccessful, message = "", code = null) => {
    setIsSentSuccessful(isSuccessful);
    // If message is an object, try to extract the actual message
    let actualMessage = message;
    if (typeof message === "object") {
      actualMessage = message.message || JSON.stringify(message);
    }

    // Handle specific error messages without codes
    if (!code) {
      const lowerMessage = actualMessage.toLowerCase();

      // Check for various email validation error patterns
      if (lowerMessage.includes("email must be an email")) {
        setErrorMessage(t("popup-registration-error-email-format"));
        return;
      }
    }

    // Use code-based error mapping
    if (code && ERROR_CODE_MAP[code]) {
      setErrorMessage(t(ERROR_CODE_MAP[code]));
    } else {
      // If no code or no mapping for the code, use the message
      setErrorMessage(actualMessage);
    }

    // Log final error message being set
    console.log("Final error message:", errorMessage);
  };

  const handleRegistrationtForm = async (values) => {
    const token = await executeRecaptcha("popup_registration");

    // Create a local copy of portalLanguageCode that we can modify
    let submissionLanguage = portalLanguageCode;
    console.log("submissionLanguage", submissionLanguage);

    // Check if we're in a Brazilian Portuguese URL path
    const urlPath =
      typeof window !== "undefined" ? window.location.pathname : "";
    if (urlPath.includes("/br/") && submissionLanguage !== "pt") {
      submissionLanguage = "pt";
    }

    try {
      // CRITICAL FIX: Ensure referral parameters are included by checking all possible sources
      // Create a comprehensive collection of all possible sources of referral parameters
      const referralSources = {
        // Component state (highest priority)
        state: {
          referral_type: referral_type,
          referral_value: referral_value,
        },
        // Safe params from props
        safeParams: {
          referral_type: safeParams.referral_type,
          referral_value: safeParams.referral_value,
        },
        // URL parameters direct check
        url: {},
        // Session storage
        sessionStorage: {},
        // Local storage
        localStorage: {},
        // Global variables
        global: {},
        // Data attributes from closest container
        dataAttributes: {},
      };

      // Fill the sources with actual values

      // 1. Check URL parameters
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const urlReferralType =
          urlParams.get("referral_type") ||
          urlParams.get("referralType") ||
          urlParams.get("referral-type");

        const urlReferralValue =
          urlParams.get("referral_value") ||
          urlParams.get("referralValue") ||
          urlParams.get("referral-value");

        referralSources.url = {
          referral_type: urlReferralType,
          referral_value: urlReferralValue,
        };
      }

      // 2. Check session storage
      try {
        referralSources.sessionStorage = {
          referral_type: sessionStorage.getItem("oqtima_referral_type"),
          referral_value: sessionStorage.getItem("oqtima_referral_value"),
        };
      } catch (e) {
        console.error("Error reading session storage:", e);
      }

      // 3. Check local storage
      try {
        referralSources.localStorage = {
          referral_type: localStorage.getItem("oqtima_referral_type"),
          referral_value: localStorage.getItem("oqtima_referral_value"),
        };
      } catch (e) {
        console.error("Error reading local storage:", e);
      }

      // 4. Check global variables
      if (typeof window !== "undefined") {
        referralSources.global = {
          referral_type: window.__OQTIMA_REFERRAL_TYPE__,
          referral_value: window.__OQTIMA_REFERRAL_VALUE__,
        };
      }

      // 5. Check data attributes on container element (as a last resort)
      try {
        if (typeof document !== "undefined") {
          const container = document.querySelector("[data-oqtima-register]");
          if (container) {
            referralSources.dataAttributes = {
              referral_type: container.getAttribute("data-referral-type"),
              referral_value: container.getAttribute("data-referral-value"),
            };
          }
        }
      } catch (e) {
        console.error("Error reading data attributes:", e);
      }

      // Log all sources for debugging
      console.log("All referral parameter sources:", referralSources);

      // Get final referral parameters with priority order
      const finalReferralType =
        referralSources.state.referral_type ||
        referralSources.url.referral_type ||
        referralSources.safeParams.referral_type ||
        referralSources.sessionStorage.referral_type ||
        referralSources.localStorage.referral_type ||
        referralSources.global.referral_type ||
        referralSources.dataAttributes.referral_type;

      const finalReferralValue =
        referralSources.state.referral_value ||
        referralSources.url.referral_value ||
        referralSources.safeParams.referral_value ||
        referralSources.sessionStorage.referral_value ||
        referralSources.localStorage.referral_value ||
        referralSources.global.referral_value ||
        referralSources.dataAttributes.referral_value;

      // Convert referral_type to number if it's a numeric string
      const normalizedReferralType =
        finalReferralType !== null && finalReferralType !== undefined
          ? !isNaN(finalReferralType)
            ? Number(finalReferralType)
            : finalReferralType
          : null;

      // Log the final values
      console.log("Final normalized referral parameters:");
      console.log(
        "- referral_type:",
        normalizedReferralType,
        "(type:",
        typeof normalizedReferralType,
        ")"
      );
      console.log(
        "- referral_value:",
        finalReferralValue,
        "(type:",
        typeof finalReferralValue,
        ")"
      );

      // IMPORTANT: If we have referral parameters, store them one more time to ensure they are available
      // for future form submissions or page refreshes
      try {
        if (
          normalizedReferralType !== null &&
          normalizedReferralType !== undefined
        ) {
          sessionStorage.setItem(
            "oqtima_referral_type",
            String(normalizedReferralType)
          );
          localStorage.setItem(
            "oqtima_referral_type",
            String(normalizedReferralType)
          );
          window.__OQTIMA_REFERRAL_TYPE__ = normalizedReferralType;
        }

        if (finalReferralValue) {
          sessionStorage.setItem("oqtima_referral_value", finalReferralValue);
          localStorage.setItem("oqtima_referral_value", finalReferralValue);
          window.__OQTIMA_REFERRAL_VALUE__ = finalReferralValue;
        }
      } catch (e) {
        console.error("Error storing final referral parameters:", e);
      }

      // Prepare submission data with referral parameters
      const submissionData = {
        ...values,
        token,
        language: submissionLanguage,
        redirect: "register",
        register_ip: clientIpAddress || clientConfig.ipAddress || "",
        agreement: true,
        privacy: policyLinks.privacyPolicy,
        cookie: policyLinks.cookiePolicy,
      };

      // CRITICAL FIX: Always include referral parameters if we have them
      if (
        normalizedReferralType !== null &&
        normalizedReferralType !== undefined
      ) {
        submissionData.referral_type = normalizedReferralType;
      }

      if (finalReferralValue) {
        submissionData.referral_value = finalReferralValue;
      }

      // Debug info - redact token for security
      console.log("Final API submission data:", {
        ...submissionData,
        token: submissionData.token ? "REDACTED" : null,
      });

      const response = await axios.post(
        `${API_URL}crm-register`,
        submissionData
      );
      console.log("API response:", response.data);
      if (response.data.code && response.data.code !== 200) {
        handleApiResponse(false, response.data.message, response.data.code);
      } else {
        handleApiResponse(true);

        const redirectAddress = response.data.redirect_address;
        if (redirectAddress) {
          // Check if we're in an iframe
          if (window.parent !== window) {
            // ENHANCED: Send multiple message formats to ensure compatibility

            // 1. Standard object format with REDIRECT_TO_URL type
            window.parent.postMessage(
              {
                type: "REDIRECT_TO_URL",
                url: redirectAddress,
                success: true,
                timestamp: Date.now(),
              },
              "*"
            );

            // 2. Alternative object format with redirectUrl property
            window.parent.postMessage(
              {
                type: "REDIRECT_TO_URL",
                redirectUrl: redirectAddress,
                success: true,
                timestamp: Date.now(),
              },
              "*"
            );

            // 3. Registration success format
            window.parent.postMessage(
              {
                type: "REGISTRATION_SUCCESS",
                url: redirectAddress,
                redirectUrl: redirectAddress,
                success: true,
                timestamp: Date.now(),
              },
              "*"
            );

            // 4. Simple string format (for the global handler)
            window.parent.postMessage(`redirect:${redirectAddress}`, "*");

            // 5. Direct URL string (for simple string extraction)
            setTimeout(() => {
              window.parent.postMessage(redirectAddress, "*");
            }, 100);

            // ENHANCED: Try direct redirection approach for some browsers
            try {
              // Some browsers allow this in certain contexts
              if (window.top) {
                setTimeout(() => {
                  try {
                    window.top.location.href = redirectAddress;
                  } catch (err) {
                    // Could not set top location
                  }
                }, 300);
              }
            } catch (err) {
              // Could not access top window
            }

            // ENHANCED: As a final fallback, try to save to sessionStorage for use on page reload
            try {
              sessionStorage.setItem(
                "OQTIMA_PENDING_REDIRECT",
                redirectAddress
              );

              // Set a flag to indicate successful registration
              sessionStorage.setItem("OQTIMA_REGISTRATION_SUCCESS", "true");
              sessionStorage.setItem(
                "OQTIMA_REGISTRATION_TIMESTAMP",
                Date.now().toString()
              );
            } catch (err) {
              // Could not save to sessionStorage
            }
          } else {
            // If not in iframe, redirect normally
            window.location.href = redirectAddress;
          }
        }
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      const errorCode = error.response?.data?.code;
      sendLog({ message: error.message, type: error.name, code: errorCode });
      handleApiResponse(false, errorMessage, errorCode);
    }
  };

  // Special hook to extract language from URL path on component mount
  // This is needed for environments like dev.oqt-ima.com where URL parameters might not be properly passed
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname) {
      // Check if we're in a path like /br/popup-registration
      const pathParts = window.location.pathname.split("/").filter(Boolean);

      if (pathParts.length > 0) {
        const possibleLang = pathParts[0];
        // Check if it looks like a language code (typically 2-5 characters)
        if (possibleLang && possibleLang.length <= 7) {
          // CHANGE: Always set language from URL path regardless of other sources
          // This ensures the URL path language takes precedence over context language
          setLanguageFromUrl(possibleLang);
        }
      }
    }
  }, []);

  useEffect(() => {
    console.log("Setting up message listeners for referral parameters");

    // Request parameters from parent window when component mounts
    if (window.parent && window.parent !== window) {
      try {
        console.log("Requesting parameters from parent window");
        window.parent.postMessage(
          {
            type: "OQTIMA_REQUEST_PARAMS",
            timestamp: Date.now(),
          },
          "*"
        );
      } catch (e) {
        console.error("Error requesting parameters from parent:", e);
      }
    }

    // Listen for parameter messages from parent window
    const handleMessages = (event) => {
      try {
        // For security, you might want to check the origin
        if (
          event.data &&
          typeof event.data === "object" &&
          event.data.type === "REGISTRATION_PARAMS"
        ) {
          console.log(
            "Received registration parameters from parent:",
            event.data
          );

          const params = event.data.data || {};
          let shouldUpdateState = false;
          let newReferralType = referral_type;
          let newReferralValue = referral_value;

          // Process referral_type
          if (
            params.referral_type !== undefined &&
            params.referral_type !== null
          ) {
            // Convert to number if it's numeric
            if (!isNaN(Number(params.referral_type))) {
              newReferralType = Number(params.referral_type);
            } else {
              newReferralType = params.referral_type;
            }
            shouldUpdateState = true;

            // Store in sessionStorage for persistence
            try {
              sessionStorage.setItem(
                "oqtima_referral_type",
                newReferralType.toString()
              );
              console.log(
                "Stored referral_type in sessionStorage:",
                newReferralType
              );
            } catch (e) {
              console.error(
                "Failed to store referral_type in sessionStorage:",
                e
              );
            }
          }

          // Process referral_value
          if (
            params.referral_value !== undefined &&
            params.referral_value !== null
          ) {
            newReferralValue = params.referral_value;
            shouldUpdateState = true;

            // Store in sessionStorage for persistence
            try {
              sessionStorage.setItem(
                "oqtima_referral_value",
                newReferralValue.toString()
              );
              console.log(
                "Stored referral_value in sessionStorage:",
                newReferralValue
              );
            } catch (e) {
              console.error(
                "Failed to store referral_value in sessionStorage:",
                e
              );
            }
          }

          // Update state if needed
          if (shouldUpdateState) {
            console.log("Updating state with new referral parameters:", {
              referral_type: newReferralType,
              referral_value: newReferralValue,
            });
            setReferralType(newReferralType);
            setReferralValue(newReferralValue);
          }
        }
      } catch (e) {
        console.error("Error processing message:", e);
      }
    };

    window.addEventListener("message", handleMessages);

    return () => {
      window.removeEventListener("message", handleMessages);
    };
  }, [referral_type, referral_value, setReferralType, setReferralValue]);

  return (
    <RTLAwareForm isRTLMode={isRTLMode} language={effectiveLanguage}>
      <div className="popup-registration__form-container">
        <Formik
          key={`${isRTLMode ? "rtl" : "ltr"}-${effectiveLanguage}-form`}
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            country: clientConfig?.countryName || "",
            country_code: clientConfig?.countryCode
              ? countries.find(
                  (country) =>
                    country.name.toLowerCase() ===
                    clientConfig.countryName.toLowerCase()
                )?.code || ""
              : "",
            mobile: "",
            is_subscribe: 1,
            agreement: 0,
          }}
          validationSchema={PopupRegistrationSchema}
          onSubmit={handleRegistrationtForm}
          validateOnMount={true}
          enableReinitialize={true}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setTouched,
            isSubmitting,
          }) => {
            // Move the initialization effect here where setFieldValue is available
            useEffect(() => {
              if (clientConfig?.countryName) {
                const matchingCountry = countries.find(
                  (country) =>
                    country.name.toLowerCase() ===
                    clientConfig.countryName.toLowerCase()
                );
                if (matchingCountry) {
                  setSelectedCountry(matchingCountry.name);
                  setSelectedCountryCode(matchingCountry.code);
                  setFieldValue("country", matchingCountry.name, true);
                  setFieldValue("country_code", matchingCountry.code, true);
                }
              }
            }, [clientConfig, setFieldValue]);

            const handleCountrySelect = (countryName) => {
              setSelectedCountry(countryName);
              const matchingCountry = countries.find(
                (c) => c.name === countryName
              );
              if (matchingCountry?.code) {
                setSelectedCountryCode(matchingCountry.code);
                setFieldValue("country_code", matchingCountry.code, true);
              }
              setFieldValue("country", countryName, true);
              setIsCountryOpen(false);
              setSearchCountry("");
            };

            const handleCodeSelect = (code) => {
              setSelectedCountryCode(code);
              const matchingCountry = countries.find((c) => c.code === code);
              if (matchingCountry?.name) {
                setSelectedCountry(matchingCountry.name);
                setFieldValue("country", matchingCountry.name, true);
              }
              setFieldValue("country_code", code, true);
              setIsCodeOpen(false);
              setSearchCode("");
            };

            return (
              <form
                onSubmit={handleSubmit}
                className={cn("popup-registration__form", {
                  "popup-registration__form--rtl": isRTLMode,
                  "popup-registration__form--submitting": isSubmitting,
                  "popup-registration__form--success":
                    isSentSuccessful === true,
                  "popup-registration__form--error": isSentSuccessful === false,
                })}
                dir={isRTLMode ? "rtl" : "ltr"}
                data-rtl={isRTLMode ? "true" : "false"}
                style={{
                  textAlign: isRTLMode ? "right" : "left",
                  direction: isRTLMode ? "rtl" : "ltr",
                }}
                noValidate
              >
                {/* Name Fields */}
                <div className="name-fields" style={{ marginBottom: "20px" }}>
                  <div className="popup-registration__field">
                    <label className="popup-registration__label">
                      {t("popup-registration-firstName")} *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder={t("popup-registration-firstName") + " *"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first_name}
                      className={cn("popup-registration__input", {
                        "popup-registration__input--error":
                          errors.first_name && touched.first_name,
                      })}
                      noValidate
                    />
                    {errors.first_name && touched.first_name && (
                      <div className="popup-registration__error">
                        {t(errors.first_name)}
                      </div>
                    )}
                  </div>
                  <div className="popup-registration__field">
                    <label className="popup-registration__label">
                      {t("popup-registration-lastName")} *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder={t("popup-registration-lastName") + " *"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                      className={cn("popup-registration__input", {
                        "popup-registration__input--error":
                          errors.last_name && touched.last_name,
                      })}
                      noValidate
                    />
                    {errors.last_name && touched.last_name && (
                      <div className="popup-registration__error">
                        {t(errors.last_name)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div
                  className="popup-registration__row"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="popup-registration__field">
                    <label className="popup-registration__label">
                      {t("popup-registration-email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("popup-registration-email") + " *"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={cn("popup-registration__input", {
                        "popup-registration__input--error":
                          errors.email && touched.email,
                        "popup-registration__input--rtl": isRTLMode,
                        "rtl-element": isRTLMode,
                      })}
                      dir={isRTLMode ? "rtl" : "ltr"}
                      style={isRTLMode ? { textAlign: "right" } : {}}
                      noValidate
                    />
                    {errors.email && touched.email && (
                      <div className="popup-registration__error">
                        {t(errors.email)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Country, Code, Phone Fields */}
                <div
                  className="popup-registration__row"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="three-fields-container">
                    {/* Country Field */}
                    <div className="popup-registration__field country-field">
                      <label className="popup-registration__label">
                        {t("popup-registration-countryOfResidence")} *
                      </label>
                      <div className="custom-dropdown">
                        <div
                          className={`custom-dropdown__selected ${
                            selectedCountry
                              ? "custom-dropdown__selected--has-value"
                              : ""
                          } ${
                            isCountryOpen
                              ? "custom-dropdown__selected--open"
                              : ""
                          }`}
                          onClick={() => setIsCountryOpen(!isCountryOpen)}
                        >
                          {selectedCountry || (
                            <span className="custom-dropdown__placeholder">
                              {t("popup-registration-countryOfResidence") +
                                " *"}
                            </span>
                          )}
                          <img
                            src={arrowDownIcon}
                            alt="dropdown"
                            className="custom-dropdown__arrow"
                          />
                        </div>
                        {isCountryOpen && (
                          <CountryDropdown
                            searchCountry={searchCountry}
                            setSearchCountry={setSearchCountry}
                            selectedCountry={selectedCountry}
                            handleCountrySelect={handleCountrySelect}
                            t={t}
                            countryOptionsRef={countryOptionsRef}
                            filteredCountries={filteredCountries}
                            setFieldValue={setFieldValue}
                            setIsCountryOpen={setIsCountryOpen}
                            errors={errors}
                            touched={touched}
                          />
                        )}
                      </div>
                      {errors.country && touched.country && (
                        <div className="popup-registration__error">
                          {t(errors.country)}
                        </div>
                      )}
                    </div>

                    {/* Mobile wrapper for Code and Phone */}
                    <div className="mobile-code-phone">
                      {/* Code Field */}
                      <div className="popup-registration__field code-field">
                        <label className="popup-registration__label">
                          {t("popup-registration-countryCode")} *
                        </label>
                        <div className="custom-dropdown">
                          <div
                            className={`custom-dropdown__selected ${
                              selectedCountryCode
                                ? "custom-dropdown__selected--has-value"
                                : ""
                            } ${
                              isCodeOpen
                                ? "custom-dropdown__selected--open"
                                : ""
                            }`}
                            onClick={() => setIsCodeOpen(!isCodeOpen)}
                          >
                            {selectedCountryCode || (
                              <span className="custom-dropdown__placeholder">
                                {t("popup-registration-countryCode") + " *"}
                              </span>
                            )}
                            <img
                              src={arrowDownIcon}
                              alt="dropdown"
                              className="custom-dropdown__arrow"
                            />
                          </div>
                          {isCodeOpen && (
                            <CodeDropdown
                              searchCode={searchCode}
                              setSearchCode={setSearchCode}
                              selectedCountryCode={selectedCountryCode}
                              handleCodeSelect={handleCodeSelect}
                              t={t}
                              codeOptionsRef={codeOptionsRef}
                              setIsCodeOpen={setIsCodeOpen}
                              errors={errors}
                              touched={touched}
                            />
                          )}
                        </div>
                        {errors.country_code && touched.country_code && (
                          <div className="popup-registration__error">
                            {t(errors.country_code)}
                          </div>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div className="popup-registration__field phone-field">
                        <label className="popup-registration__label">
                          {t("popup-registration-phoneNumber")} *
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          placeholder={
                            t("popup-registration-phoneNumber") + " *"
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.mobile}
                          className={cn("popup-registration__input", {
                            "popup-registration__input--error":
                              errors.mobile && touched.mobile,
                          })}
                          noValidate
                        />
                        {errors.mobile && touched.mobile && (
                          <div className="popup-registration__error">
                            {t(errors.mobile)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter Subscription */}
                <div
                  className="popup-registration__newsletter"
                  style={{ marginBottom: "20px" }}
                >
                  <input
                    type="checkbox"
                    name="is_subscribe"
                    checked={values.is_subscribe}
                    onChange={(e) =>
                      setFieldValue("is_subscribe", e.target.checked ? 1 : 0)
                    }
                  />
                  {t("popup-registration-acceptMarketing")}
                </div>

                {/* Consent */}
                <div
                  className="popup-registration__consent"
                  style={{ marginBottom: "20px" }}
                >
                  <span className="popup-registration__consent-text">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={values.agreement}
                      onChange={(e) =>
                        setFieldValue("agreement", e.target.checked ? 1 : 0)
                      }
                    />
                    <span>
                      <Trans i18nKey="popup-registration-consent" ns="index">
                        I agree to allow the company to process my personal data
                        to meet its regulatory obligations and I have read and
                        understood the
                        <a
                          href={policyLinks.privacyPolicy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                          onClick={(e) =>
                            handlePolicyLinkClick(e, policyLinks.privacyPolicy)
                          }
                        >
                          Privacy Policy
                        </a>
                        and
                        <a
                          href={policyLinks.cookiePolicy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                          onClick={(e) =>
                            handlePolicyLinkClick(e, policyLinks.cookiePolicy)
                          }
                        >
                          Cookie Policy
                        </a>
                        of the Company.
                      </Trans>
                    </span>
                  </span>
                  {errors.agreement && touched.agreement && (
                    <div
                      className={cn(
                        "popup-registration__error",
                        "popup-registration__error--agreement"
                      )}
                    >
                      {t("popup-registration-agreement-required")}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={cn("continue-button", {
                    "button-link--disabled": isSubmitting,
                  })}
                  style={{ marginTop: "auto", marginBottom: "20px" }}
                  onClick={async (e) => {
                    e.preventDefault();
                    // Touch all fields to show validation errors
                    await setTouched(
                      {
                        first_name: true,
                        last_name: true,
                        email: true,
                        country: true,
                        country_code: true,
                        mobile: true,
                        agreement: true,
                        is_subscribe: true,
                      },
                      true
                    );

                    // Validate all fields
                    Object.keys(values).forEach((field) => {
                      setFieldValue(field, values[field], true);
                    });

                    // If form is valid, submit it
                    if (Object.keys(errors).length === 0) {
                      handleSubmit();
                    }
                  }}
                >
                  {t("popup-registration-continue")}
                </button>

                {/* Error Message */}
                {errorMessage && (
                  <p
                    className="popup-registration-error-message"
                    style={{ color: "red", marginBottom: "20px" }}
                  >
                    {errorMessage}
                  </p>
                )}
              </form>
            );
          }}
        </Formik>
      </div>
    </RTLAwareForm>
  );
};

export default PopupRegistrationForm;
