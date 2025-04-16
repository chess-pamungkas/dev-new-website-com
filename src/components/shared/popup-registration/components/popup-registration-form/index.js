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
  const { selectedLanguage } = useContext(LanguageContext);

  // Parse params safely
  const safeParams = useMemo(() => {
    try {
      console.log("Raw params received:", params);

      let parsedParams = {};

      // Try to parse JSON if params is a string
      if (typeof params === "string") {
        try {
          parsedParams = JSON.parse(params);
          console.log("Parsed params from JSON string:", parsedParams);
        } catch (jsonErr) {
          console.warn("Could not parse params as JSON:", jsonErr);
          // If JSON parsing fails, assume it might be a simple string like a language code
          if (params && params.length <= 5) {
            // Most language codes are 2-5 chars
            parsedParams = { langParam: params };
            console.log("Treating string as language code:", parsedParams);
          }
        }
      } else {
        parsedParams = params || {};
        console.log("Using params as object:", parsedParams);
      }

      // IMPORTANT FIX: Sanitize the langParam if it contains a query string format
      if (parsedParams.langParam) {
        // Check if langParam mistakenly contains "?language=" or similar prefixes
        const langValue = parsedParams.langParam;

        if (langValue.includes("?")) {
          console.log(
            "Detected malformed langParam with query string:",
            langValue
          );

          // Try to extract the actual language value from the query string
          try {
            // Handle cases like "?language=en" or "?lang=en"
            const queryMatch = langValue.match(
              /[?&](language|lang|locale)=([^&]+)/i
            );
            if (queryMatch && queryMatch[2]) {
              console.log(
                `Fixing malformed langParam: ${langValue} → ${queryMatch[2]}`
              );
              parsedParams.langParam = queryMatch[2];
            } else {
              // If we can't extract the language, default to "en"
              console.log(
                `Could not extract language from malformed langParam: ${langValue}, defaulting to "en"`
              );
              parsedParams.langParam = "en";
            }
          } catch (err) {
            console.warn("Error sanitizing langParam:", err);
            // Default to "en" if we can't parse the language
            parsedParams.langParam = "en";
          }
        }
      }

      // Explicitly check for URL parameters that might contain language info
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        console.log("URL search params:", window.location.search);

        // Check for language parameters with various names
        const urlLangParam =
          urlParams.get("language") ||
          urlParams.get("lang") ||
          urlParams.get("locale") ||
          urlParams.get("i18nextLng");

        // Only override if URL contains language param and it's not already set
        if (urlLangParam && !parsedParams.langParam) {
          parsedParams.langParam = urlLangParam;
          console.log("Using language from URL query params:", urlLangParam);
        }

        // Handle data-lang parameter which may be set as br (for brazilian portuguese)
        const urlDataLang = urlParams.get("data-lang");
        if (urlDataLang && !parsedParams.langParam) {
          parsedParams.langParam = urlDataLang;
          console.log("Using data-lang from URL query params:", urlDataLang);
        }

        // NEW: If URL parameters are empty, try to extract language from the iframe's src attribute
        // This is needed because some environments (like dev.oqt-ima.com) may not properly pass URL parameters
        if (!parsedParams.langParam && window.location.pathname) {
          // Check if we're in a language-specific path like /br/popup-registration
          const pathParts = window.location.pathname.split("/").filter(Boolean);
          if (pathParts.length > 0) {
            const possibleLang = pathParts[0];
            // Check if the first part of the path is a language code (typically 2-5 chars)
            if (possibleLang && possibleLang.length <= 5) {
              parsedParams.langParam = possibleLang;
              console.log("Extracted language from URL path:", possibleLang);
            }
          }
        }

        // Log all URL params for debugging
        console.log("All URL parameters:");
        urlParams.forEach((value, key) => {
          console.log(`${key}: ${value}`);
        });
      }

      console.log("Final safeParams:", parsedParams);
      return parsedParams;
    } catch (e) {
      console.error("Error parsing params:", e);
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

    // Extra logging to trace language detection
    console.log("Initial language detection:", {
      fromSafeParams: safeParams.langParam,
      fromMessage: languageFromMessage,
      fromUrl: languageFromUrl,
      fromContext: selectedLanguage?.id,
      initialValue: initialLanguage,
      urlPath: typeof window !== "undefined" ? window.location.pathname : "N/A",
    });

    // Check if we're in a path like /br/ and if so, ensure we're using 'br'
    if (typeof window !== "undefined" && window.location.pathname) {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      if (pathParts.length > 0 && pathParts[0] === "br") {
        if (initialLanguage !== "br") {
          console.log(
            `Detected URL path /br/ but using language ${initialLanguage}, forcing to 'br'`
          );
          initialLanguage = "br";
        }
      }
    }

    // Normalize Brazilian Portuguese variations
    const brVariations = ["br", "pt-br", "pt_br", "pt-BR", "pt_BR"];
    if (brVariations.includes(initialLanguage.toLowerCase())) {
      console.log(
        `Normalizing Brazilian Portuguese code from ${initialLanguage} to pt`
      );
      initialLanguage = "pt";
    }

    console.log("Language source priority:", {
      langParamFromSafeParams: safeParams.langParam,
      languageFromMessage,
      languageFromUrl,
      contextLanguage: selectedLanguage?.id,
      finalChoice: initialLanguage,
    });

    // Log nilai akhir yang digunakan
    const finalLanguageCode =
      PORTAL_LANGUAGES_MAP[initialLanguage] || initialLanguage || "en";
    console.log(
      `Final language code being used: ${finalLanguageCode} (from source: ${initialLanguage})`
    );
  }, [safeParams, languageFromMessage, languageFromUrl, selectedLanguage]);

  // Update state values when params change
  useEffect(() => {
    console.log("safeParams changed in useEffect:", safeParams);

    if (safeParams.referral_type) {
      setReferralType(safeParams.referral_type);
      console.log(
        "Setting referral_type from safeParams:",
        safeParams.referral_type
      );
    }
    if (safeParams.referral_value) {
      setReferralValue(safeParams.referral_value);
      console.log(
        "Setting referral_value from safeParams:",
        safeParams.referral_value
      );
    }

    // Update language from safeParams if available
    if (safeParams.langParam) {
      console.log("Setting language from safeParams:", safeParams.langParam);
      // Prioritas tertinggi adalah langParam dari safeParams
      setLanguageFromUrl(null); // Reset language from URL
      setLanguageFromMessage(null); // Reset language from message

      // We'll set languageFromUrl based on safeParams.langParam
      // This ensures our language priority logic works correctly
      setLanguageFromUrl(safeParams.langParam);
    }
  }, [safeParams]);

  // Listen for messages from parent window with higher priority
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === "REGISTRATION_PARAMS") {
        const data = event.data.data || {};
        console.log("Received message from parent:", data);

        const msgReferralType = data.referral_type || null;
        const msgReferralValue = data.referral_value || null;
        const msgLanguage = data.language || data.lang || null;

        // ADDED: Extract client information from message
        const msgIpAddress = data.ip_address || null;
        const msgCountryName = data.country_name || null;
        const msgCountryCode = data.country_code || null;

        if (msgReferralType) setReferralType(msgReferralType);
        if (msgReferralValue) setReferralValue(msgReferralValue);

        // ADDED: Set client information if available
        if (msgIpAddress) setClientIpAddress(msgIpAddress);
        if (msgCountryName) setClientCountryName(msgCountryName);
        if (msgCountryCode) setClientCountryCode(msgCountryCode);

        // Set langParam from message if available
        if (msgLanguage) {
          // We'll update this directly in safeParams via effect
          console.log("Received language from parent window:", msgLanguage);
          // Store language from message to override context language
          setLanguageFromMessage(msgLanguage);
        }

        // ADDED: Log received data for debugging
        console.log("Client data from message:", {
          ip: msgIpAddress,
          country: msgCountryName,
          code: msgCountryCode,
          language: msgLanguage,
          referral_type: msgReferralType,
          referral_value: msgReferralValue,
        });
      }
    };

    window.addEventListener("message", handleMessage);

    // Try to extract parameters directly from URL immediately
    const extractUrlParams = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        console.log("URL search params:", window.location.search);

        // Check all possible parameter formats for referral
        const urlReferralType =
          urlParams.get("referral_type") ||
          urlParams.get("referralType") ||
          urlParams.get("referral-type");

        const urlReferralValue =
          urlParams.get("referral_value") ||
          urlParams.get("referralValue") ||
          urlParams.get("referral-value");

        if (urlReferralType) setReferralType(urlReferralType);
        if (urlReferralValue) setReferralValue(urlReferralValue);

        // Extract language parameters for debugging
        const langParam =
          urlParams.get("language") ||
          urlParams.get("lang") ||
          urlParams.get("locale") ||
          urlParams.get("i18nextLng") ||
          urlParams.get("langParam");

        // IMPROVED: First check for language in URL parameters
        let detectedLanguage = null;

        if (langParam) {
          console.log("Extracted language from URL query:", langParam);
          detectedLanguage = langParam;
        }

        // Check data-lang parameter specifically (highest priority for Brazilian Portuguese)
        const dataLang = urlParams.get("data-lang");
        if (dataLang) {
          console.log("Found data-lang in URL:", dataLang);
          detectedLanguage = dataLang;
        }

        // NEW: If URL parameters don't contain language, try to extract from pathname
        if (!detectedLanguage && window.location.pathname) {
          const pathParts = window.location.pathname.split("/").filter(Boolean);
          if (pathParts.length > 0) {
            const possibleLang = pathParts[0];
            // Check if first path segment looks like a language code
            if (possibleLang && possibleLang.length <= 5) {
              console.log("Extracted language from URL path:", possibleLang);
              detectedLanguage = possibleLang;
            }
          }
        }

        // Set the language if detected from any source
        if (detectedLanguage) {
          setLanguageFromUrl(detectedLanguage);
          console.log("Setting languageFromUrl to:", detectedLanguage);
        } else {
          console.log("No language detected from URL or path");
        }
      } catch (err) {
        console.error("Error extracting URL parameters:", err);
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

  console.log("safeParams", safeParams);
  console.log("languageFromMessage", languageFromMessage);
  console.log("languageFromUrl", languageFromUrl);
  console.log("selectedLanguage", selectedLanguage);

  // Use the language parameter also to detect RTL
  // UPDATED: Implementasi prioritas language yang jelas
  // Prioritas: 1. langParam dari safeParams, 2. message, 3. URL param, 4. context, 5. fallback "en"
  let effectiveLanguage =
    safeParams.langParam ||
    languageFromMessage ||
    languageFromUrl ||
    selectedLanguage?.id ||
    "en";

  // SANITIZE: Function to clean up language codes that might be malformed
  const sanitizeLanguageCode = (code) => {
    // If code contains "?", it's likely malformed
    if (code && code.includes("?")) {
      // Try to extract the language part
      const match = code.match(/[?&](language|lang|locale)=([^&]+)/i);
      if (match && match[2]) {
        console.log(
          `Sanitizing malformed language code: ${code} → ${match[2]}`
        );
        return match[2];
      }
      // Default to English if we can't extract
      console.log(
        `Could not sanitize malformed language code: ${code}, defaulting to "en"`
      );
      return "en";
    }

    // If code is longer than 5 chars and not a common format like "zh-CN"
    if (code && code.length > 5 && !code.match(/^[a-z]{2}-[A-Z]{2}$/)) {
      console.log(
        `Suspicious language code detected: ${code}, defaulting to "en"`
      );
      return "en";
    }

    return code;
  };

  // Clean up the language code before using it
  effectiveLanguage = sanitizeLanguageCode(effectiveLanguage);

  // Log language resolution to debug why the language is changing
  console.log("Language resolution path:", {
    step1_safeParams: safeParams.langParam,
    step2_languageFromMessage: languageFromMessage,
    step3_languageFromUrl: languageFromUrl,
    step4_contextLanguage: selectedLanguage?.id,
    finalChoice: effectiveLanguage,
    urlPath: typeof window !== "undefined" ? window.location.pathname : "N/A",
  });

  // Force the path language when present in URL
  if (typeof window !== "undefined" && window.location.pathname) {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const pathLang = pathParts[0];
      if (pathLang && pathLang.length <= 5) {
        console.log(
          `Forcing language from URL path: ${pathLang} (overriding ${effectiveLanguage})`
        );
        effectiveLanguage = pathLang;
      }
    }
  }

  // Normalize Brazilian Portuguese variations
  const brVariations = ["br", "pt-br", "pt_br", "pt-BR", "pt_BR"];
  if (brVariations.includes(effectiveLanguage.toLowerCase())) {
    console.log(
      `Normalizing Brazilian Portuguese code from ${effectiveLanguage} to pt`
    );
    effectiveLanguage = "pt";
  }

  // Log effective language untuk debugging
  console.log(
    `Using effective language: ${effectiveLanguage} (before RTL check)`
  );

  // Check untuk RTL language
  const forcedRTL = RTL_LANGUAGES.includes(effectiveLanguage);
  const isRTLMode = isRTL || forcedRTL;

  // Map ke language code portal untuk API
  // Special handling for Brazilian Portuguese - ensure it maps to "pt" for API calls
  let portalLanguageCode;

  // First normalize effectiveLanguage to lowercase for case-insensitive comparison
  const effectiveLangLower = effectiveLanguage.toLowerCase();

  // Check if it's a Brazilian Portuguese variant
  if (
    effectiveLangLower === "br" ||
    effectiveLangLower === "pt" ||
    effectiveLangLower === "pt-br" ||
    effectiveLangLower === "pt_br"
  ) {
    // All Brazilian Portuguese variations should map to "pt" for API calls
    portalLanguageCode = "pt";
    console.log(
      `Mapping Brazilian Portuguese code ${effectiveLanguage} to "pt" for API calls (Special handling)`
    );
  } else {
    // For other languages, use the standard mapping
    portalLanguageCode =
      PORTAL_LANGUAGES_MAP[effectiveLanguage] || effectiveLanguage || "en";

    console.log(
      `Using standard language mapping: ${effectiveLanguage} → ${portalLanguageCode}`
    );
  }

  // FINAL VALIDATION: Make sure portalLanguageCode doesn't contain invalid characters
  if (
    portalLanguageCode &&
    (portalLanguageCode.includes("?") || portalLanguageCode.length > 5)
  ) {
    console.log(
      `Invalid portalLanguageCode detected: "${portalLanguageCode}", fixing to "en"`
    );
    portalLanguageCode = "en";
  }

  // Double-check if we're in a Brazilian Portuguese URL path but didn't catch it earlier
  if (typeof window !== "undefined" && window.location.pathname) {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0 && pathParts[0].toLowerCase() === "br") {
      console.log(
        "Force override: Detected Brazilian Portuguese in URL path /br/"
      );
      portalLanguageCode = "pt";
    }
  }

  // Log hasil akhir untuk debugging
  console.log(`Final portalLanguageCode: ${portalLanguageCode}`);
  console.log(`RTL mode: ${isRTLMode ? "yes" : "no"}`);

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

    // Anti multi-click implementation with improved tracking
    const target = e.currentTarget;

    // Check if link is in process (throttling)
    if (target.getAttribute("data-processing") === "true") {
      return;
    }

    // Set flag to prevent repeated clicks
    target.setAttribute("data-processing", "true");

    // Track which window was opened
    let policyWindow = null;
    let linkHandledByParent = false;

    // Reset flag after 3 seconds
    setTimeout(() => {
      target.removeAttribute("data-processing");
    }, 3000);

    // Handle differently based on context
    if (window.parent !== window) {
      // If inside an iframe, first try sending a message to parent window
      try {
        // Setup a listener to detect if the parent successfully handled the link
        const messageListener = (event) => {
          if (
            event.data &&
            event.data.type === "OQTIMA_LINK_OPENED" &&
            event.data.url === url
          ) {
            linkHandledByParent = true;
            window.removeEventListener("message", messageListener);
          }
        };

        // Add the listener before sending the message
        window.addEventListener("message", messageListener);

        // Send message to parent
        window.parent.postMessage(
          {
            type: "OQTIMA_OPEN_LINK",
            url: url,
            isPolicyLink: true,
            policyType: url.toLowerCase().includes("privacy")
              ? "privacy"
              : "cookie",
            timestamp: Date.now(),
          },
          "*"
        );

        // As a fallback, try to open directly after a short delay
        // This only happens if the parent handler doesn't handle it
        setTimeout(() => {
          // Remove the listener since we're handling it ourselves now
          window.removeEventListener("message", messageListener);

          // Only open if parent didn't already handle it
          if (!linkHandledByParent && !policyWindow) {
            console.log("Parent did not handle link opening, using fallback");
            try {
              policyWindow = window.open(url, "_blank", "noopener,noreferrer");

              // If window was blocked, show a hint to the user
              if (!policyWindow) {
                console.warn(
                  "Popup was blocked by browser - consider enabling popups for this site"
                );
              }
            } catch (err) {
              console.error("Error opening policy link directly:", err);
            }
          }
        }, 800); // Increased timeout to give parent more time to respond
      } catch (err) {
        console.error("Error sending message to parent for policy link:", err);

        // Fallback to direct opening if message sending fails
        try {
          policyWindow = window.open(url, "_blank", "noopener,noreferrer");
        } catch (innerErr) {
          console.error("Error in fallback policy link opening:", innerErr);
        }
      }
    } else {
      // If not in an iframe, open the link directly
      try {
        policyWindow = window.open(url, "_blank", "noopener,noreferrer");

        // If window was blocked, show a hint to the user
        if (!policyWindow) {
          console.warn(
            "Popup was blocked by browser - consider enabling popups for this site"
          );
        }
      } catch (err) {
        console.error("Error opening policy link directly:", err);
      }
    }
  };

  useEffect(() => {
    const fetchPolicyLinks = async () => {
      try {
        // Create a local copy of portalLanguageCode that we can modify within this function scope
        let apiLanguageCode = portalLanguageCode;

        console.log(
          `Attempting to fetch policy links for language: ${apiLanguageCode}`
        );

        // Force check one more time for Brazilian Portuguese
        // This ensures that even if we somehow missed it earlier, we'll catch it here
        const urlPath =
          typeof window !== "undefined" ? window.location.pathname : "";
        if (urlPath.includes("/br/")) {
          if (apiLanguageCode !== "pt") {
            console.log(
              `CRITICAL FIX: URL path contains /br/ but apiLanguageCode is ${apiLanguageCode}, forcing to 'pt'`
            );
            apiLanguageCode = "pt";
          }
        }

        // Special log for Brazilian Portuguese
        if (apiLanguageCode === "pt") {
          console.log(
            `Note: Using Portuguese ("pt") for policy links - this handles Brazilian Portuguese.` +
              ` Original language code was: ${effectiveLanguage}, path: ${urlPath}`
          );
        }

        // Debug info about where the language code came from
        console.log("Language code source tracing:", {
          safeParams: safeParams.langParam,
          languageFromMessage,
          languageFromUrl,
          selectedLanguage: selectedLanguage?.id,
          effectiveLanguage,
          portalLanguageCode,
          apiLanguageCode,
          urlPath,
        });

        const response = await axios.get(`${API_URL}crm-register/policy-links`);
        const { privacy_policy, cookie_policy } = response.data;

        console.log("Available policy languages:", {
          privacy: privacy_policy.map((p) => p.language),
          cookie: cookie_policy.map((c) => c.language),
        });

        // First try to find policy in user's language
        let privacyLink = privacy_policy.find(
          (p) => p.language === apiLanguageCode
        )?.oss_url;

        let cookieLink = cookie_policy.find(
          (c) => c.language === apiLanguageCode
        )?.oss_url;

        // Log language match result
        console.log(
          `Privacy policy direct match for ${apiLanguageCode}: ${
            privacyLink ? "found" : "not found"
          }`
        );
        console.log(
          `Cookie policy direct match for ${apiLanguageCode}: ${
            cookieLink ? "found" : "not found"
          }`
        );

        // If not found, fallback to English
        if (!privacyLink) {
          privacyLink = privacy_policy.find(
            (p) => p.language === "en"
          )?.oss_url;
          console.log(
            `Privacy policy not found in ${apiLanguageCode}, using English version: ${privacyLink}`
          );
        }

        if (!cookieLink) {
          cookieLink = cookie_policy.find((c) => c.language === "en")?.oss_url;
          console.log(
            `Cookie policy not found in ${apiLanguageCode}, using English version: ${cookieLink}`
          );
        }

        setPolicyLinks({
          privacyPolicy: privacyLink || "",
          cookiePolicy: cookieLink || "",
        });

        console.log("Final policy links set:", {
          privacyPolicy: privacyLink || "",
          cookiePolicy: cookieLink || "",
        });
      } catch (error) {
        console.error("Error fetching policy links:", error);
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

    // Use code-based error mapping
    if (code && ERROR_CODE_MAP[code]) {
      setErrorMessage(t(ERROR_CODE_MAP[code]));
    } else {
      // If no code or no mapping for the code, just use the message directly
      setErrorMessage(message);
    }
  };

  const handleRegistrationtForm = async (values) => {
    const token = await executeRecaptcha("popup_registration");

    // Create a local copy of portalLanguageCode that we can modify
    let submissionLanguage = portalLanguageCode;

    // CRITICAL FIX: Additional safety check to ensure language is valid
    // If language still contains "?" or is longer than 5 chars, it's probably invalid
    if (
      submissionLanguage &&
      (submissionLanguage.includes("?") || submissionLanguage.length > 5)
    ) {
      console.log(
        `CRITICAL: Invalid language detected before submission: "${submissionLanguage}", defaulting to "en"`
      );
      submissionLanguage = "en";
    }

    // Check if we're in a Brazilian Portuguese URL path
    const urlPath =
      typeof window !== "undefined" ? window.location.pathname : "";
    if (urlPath.includes("/br/") && submissionLanguage !== "pt") {
      console.log(
        `Form submission: URL path contains /br/ but language is ${submissionLanguage}, forcing to 'pt'`
      );
      submissionLanguage = "pt";
    }

    console.log(
      `Submitting form with language: ${submissionLanguage} (derived from: ${effectiveLanguage})`
    );

    try {
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

      // Validate if policy links are available
      if (!policyLinks.privacyPolicy || !policyLinks.cookiePolicy) {
        console.warn("Missing policy links during form submission");
        // Still include them in submission but log the issue
        sendLog({
          message: "Registration submitted with missing policy links",
          type: "PolicyWarning",
          privacy: policyLinks.privacyPolicy,
          cookie: policyLinks.cookiePolicy,
        });
      }

      // Only add referral parameters if we have them
      if (referral_type) {
        submissionData.referral_type = referral_type;
      }

      if (referral_value) {
        submissionData.referral_value = referral_value;
      }

      console.log("Submitting registration with data:", {
        ip: submissionData.register_ip,
        language: submissionLanguage,
        originalLanguage: effectiveLanguage,
        country: values.country,
        code: values.country_code,
        referral_type,
        referral_value,
      });

      const response = await axios.post(
        `${API_URL}crm-register`,
        submissionData
      );

      if (response.data.code && response.data.code !== 200) {
        handleApiResponse(false, response.data.message, response.data.code);
      } else {
        handleApiResponse(true);

        const redirectAddress = response.data.redirect_address;
        console.log("redirectAddress", redirectAddress);
        // if (redirectAddress) {
        //   // Check if we're in an iframe
        //   if (window.parent !== window) {
        //     // ENHANCED: Send multiple message formats to ensure compatibility

        //     // 1. Standard object format with REDIRECT_TO_URL type
        //     window.parent.postMessage(
        //       {
        //         type: "REDIRECT_TO_URL",
        //         url: redirectAddress,
        //         success: true,
        //         timestamp: Date.now(),
        //       },
        //       "*"
        //     );

        //     // 2. Alternative object format with redirectUrl property
        //     window.parent.postMessage(
        //       {
        //         type: "REDIRECT_TO_URL",
        //         redirectUrl: redirectAddress,
        //         success: true,
        //         timestamp: Date.now(),
        //       },
        //       "*"
        //     );

        //     // 3. Registration success format
        //     window.parent.postMessage(
        //       {
        //         type: "REGISTRATION_SUCCESS",
        //         url: redirectAddress,
        //         redirectUrl: redirectAddress,
        //         success: true,
        //         timestamp: Date.now(),
        //       },
        //       "*"
        //     );

        //     // 4. Simple string format (for the global handler)
        //     window.parent.postMessage(`redirect:${redirectAddress}`, "*");

        //     // 5. Direct URL string (for simple string extraction)
        //     setTimeout(() => {
        //       window.parent.postMessage(redirectAddress, "*");
        //     }, 100);

        //     // ENHANCED: Try direct redirection approach for some browsers
        //     try {
        //       // Some browsers allow this in certain contexts
        //       if (window.top) {
        //         setTimeout(() => {
        //           try {
        //             window.top.location.href = redirectAddress;
        //           } catch (err) {
        //             console.log("Could not directly set top location", err);
        //           }
        //         }, 300);
        //       }
        //     } catch (err) {
        //       console.log("Could not access top window", err);
        //     }

        //     // ENHANCED: As a final fallback, try to save to localStorage for use on page reload
        //     try {
        //       localStorage.setItem("OQTIMA_PENDING_REDIRECT", redirectAddress);

        //       // Set a flag to indicate successful registration
        //       localStorage.setItem("OQTIMA_REGISTRATION_SUCCESS", "true");
        //       localStorage.setItem(
        //         "OQTIMA_REGISTRATION_TIMESTAMP",
        //         Date.now().toString()
        //       );
        //     } catch (err) {
        //       console.log("Could not save to localStorage", err);
        //     }
        //   } else {
        //     // If not in iframe, redirect normally
        //     window.location.href = redirectAddress;
        //   }
        // }
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
      console.log("URL path parts:", pathParts);

      if (pathParts.length > 0) {
        const possibleLang = pathParts[0];
        // Check if it looks like a language code (typically 2-5 characters)
        if (possibleLang && possibleLang.length <= 5) {
          console.log("Found language in URL path:", possibleLang);

          // CHANGE: Always set language from URL path regardless of other sources
          // This ensures the URL path language takes precedence over context language
          console.log(
            "Force setting languageFromUrl from URL path:",
            possibleLang
          );
          setLanguageFromUrl(possibleLang);

          // Add debugging to show the override
          console.log("Language override from URL path:", {
            pathLang: possibleLang,
            contextLang: selectedLanguage?.id,
            override: true,
          });
        }
      }
    }
  }, []);

  return (
    <Formik
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
          const matchingCountry = countries.find((c) => c.name === countryName);
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
            })}
            dir={isRTLMode ? "rtl" : "ltr"}
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
                  })}
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
                        isCountryOpen ? "custom-dropdown__selected--open" : ""
                      }`}
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                    >
                      {selectedCountry || (
                        <span className="custom-dropdown__placeholder">
                          {t("popup-registration-countryOfResidence") + " *"}
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
                          isCodeOpen ? "custom-dropdown__selected--open" : ""
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
                      placeholder={t("popup-registration-phoneNumber") + " *"}
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
                    I agree to allow the company to process my personal data to
                    meet its regulatory obligations and I have read and
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
                "button-link--disabled": false,
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
  );
};

export default PopupRegistrationForm;
