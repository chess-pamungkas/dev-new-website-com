import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import PropTypes from "prop-types";
import { Trans } from "react-i18next";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { currentEntity } from "../../../helpers/entity-resolver";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import bulletImage from "../../../assets/images/icons/bullet.png";
import closemage from "../../../assets/images/icons/close-icon.svg";
import PopupRegistrationForm from "./components/popup-registration-form";

const RTL_LANGUAGES = ["ar"];

// New function to thoroughly clean RTL attributes
export const cleanRTLAttributes = () => {
  if (typeof window === "undefined") return;

  // Check if the current language is Arabic
  const isArabic = () => {
    // Check multiple sources for language information
    const htmlLang = document.documentElement.getAttribute("lang");
    const sessionLang = sessionStorage.getItem("oqtima_tab_language");
    const localStorageLang = localStorage.getItem("i18nextLng");
    const globalLang = window.__OQTIMA_COMPONENT_LANGUAGE;

    // Check if any of these sources indicate Arabic
    return (
      (htmlLang && htmlLang.toLowerCase() === "ar") ||
      (sessionLang && sessionLang.toLowerCase() === "ar") ||
      (localStorageLang && localStorageLang.toLowerCase() === "ar") ||
      (globalLang && globalLang.toLowerCase() === "ar")
    );
  };

  console.log("Cleaning all RTL attributes and classes");

  // Remove RTL classes from document element
  // document.documentElement.classList.remove("rtl-active", "rtl", "is-rtl");
  // document.documentElement.setAttribute("dir", "ltr");
  // document.documentElement.removeAttribute("data-rtl");

  // Remove RTL classes from body
  // document.body.classList.remove("rtl-active", "rtl", "is-rtl");
  // document.body.removeAttribute("dir", "rtl");
  // document.body.removeAttribute("data-rtl");

  // Remove RTL styles
  const rtlStyleElement = document.getElementById(
    "popup-registration-rtl-styles"
  );
  if (rtlStyleElement) rtlStyleElement.remove();

  const rtlStylesheet = document.getElementById("rtl-stylesheet");
  if (rtlStylesheet) rtlStylesheet.remove();

  const rtlInlineStyles = document.getElementById("rtl-inline-styles");
  if (rtlInlineStyles) rtlInlineStyles.remove();

  // Reset global RTL flags
  if (window.__FORCE_RTL__) window.__FORCE_RTL__ = false;
  if (window.__ORIGINAL_RTL__) window.__ORIGINAL_RTL__ = false;

  // Remove RTL from registration containers
  const registrationContainers = document.querySelectorAll(
    ".popup-registration"
  );
  // if (registrationContainers.length > 0) {
  //   registrationContainers.forEach((container) => {
  //     container.classList.remove(
  //       "rtl-active",
  //       "popup-registration--rtl",
  //       "rtl",
  //       "is-rtl"
  //     );
  //     container.setAttribute("dir", "ltr");
  //     container.removeAttribute("data-rtl");
  //   });
  // }

  // Reset form elements
  // const rtlElements = document.querySelectorAll(
  //   "[dir='rtl'], .rtl-element, [data-rtl='true']"
  // );
  // if (rtlElements.length > 0) {
  //   rtlElements.forEach((el) => {
  //     el.classList.remove("rtl-element", "rtl-active", "rtl", "is-rtl");
  //     el.setAttribute("dir", "ltr");
  //     el.removeAttribute("data-rtl");
  //   });
  // }

  // Force a complete removal on the body tag specifically
  // document.body.className = document.body.className
  //   .replace(/rtl(-active)?|is-rtl/gi, "")
  //   .trim();
  // document.body.setAttribute("dir", "ltr");
  // document.body.removeAttribute("data-rtl");
  // document.body.style.direction = "ltr";

  // Force UI update by triggering a reflow
  const reflow = document.body.offsetHeight;

  console.log("RTL cleanup completed");
};

// Function to completely reset RTL state by forcing a page reload if needed
export const forceCompleteRTLReset = (forceReload = false) => {
  // Try the normal cleanup first
  cleanRTLAttributes();

  // Store the current language to maintain it across reload
  const currentLang = document.documentElement.getAttribute("lang") || "en";

  // Save current scroll position
  const scrollPos = window.scrollY || document.documentElement.scrollTop;

  if (forceReload) {
    console.log("Forcing complete RTL reset with page reload");

    // Save important state in sessionStorage (it persists across reloads)
    try {
      sessionStorage.setItem("oqtima_reset_language", currentLang);
      sessionStorage.setItem("oqtima_reset_scroll", scrollPos.toString());
      sessionStorage.setItem("oqtima_reset_time", Date.now().toString());

      // Set a flag to indicate we've forced a reload
      sessionStorage.setItem("oqtima_rtl_reset", "true");
    } catch (e) {
      console.error("Failed to save state before reload:", e);
    }

    // Append a timestamp to force a clean reload
    const separator = window.location.search ? "&" : "?";
    window.location.href =
      window.location.href + separator + "_rtl_reset=" + Date.now();
  }
};

// Helper function to detect if loaded from landing page/popup script
const isLoadedFromExternalScript = () => {
  try {
    // Check if we're in an iframe
    const isInIframe = window !== window.top;
    // Check if the script is loaded (check both old and new naming conventions)
    const hasPopupScript = !!document.querySelector(
      'script[src*="registration-popup-script"]'
    );
    // Check if we have URL parameters that typically come from the popup script
    const urlParams = new URLSearchParams(window.location.search);
    const hasPopupParams =
      urlParams.has("langParam") || urlParams.has("referral_type");

    return isInIframe || hasPopupScript || hasPopupParams;
  } catch (e) {
    // If we can't access window.top due to cross-origin, we're in an iframe
    return true;
  }
};

// Initialize tab-specific language on page load
if (typeof window !== "undefined") {
  try {
    // OPTIMIZED: Unified cookie and session storage check
    // Define cookie getter function
    const getCookie = (name) => {
      const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)")
      );
      return match ? match[2] : undefined;
    };

    // Get language and RTL settings with priority order:
    // 1. URL path (highest priority)
    // 2. Cookie values (for cross-domain)
    // 3. Session storage (for same-tab)

    // First check URL path for language
    let effectiveLanguage = null;
    let effectiveRtl = false;

    // Check URL path for language code
    if (window.location.pathname) {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      if (pathParts.length > 0 && pathParts[0].length <= 5) {
        effectiveLanguage = pathParts[0];
        // For Arabic language from URL, force RTL
        if (effectiveLanguage === "ar") {
          effectiveRtl = true;
        }
      }
    }

    // If no language from URL path, check cookies
    if (!effectiveLanguage) {
      const cookieLanguage = getCookie("oqtima_tab_language");
      const cookieRtl = getCookie("oqtima_tab_rtl");

      if (cookieLanguage) {
        effectiveLanguage = cookieLanguage;
        // For Arabic, always force RTL
        if (cookieLanguage === "ar") {
          effectiveRtl = true;
        } else {
          effectiveRtl = cookieRtl === "true";
        }
      }
    }

    // If still no language, check session storage
    if (!effectiveLanguage) {
      const sessionLanguage = sessionStorage.getItem("oqtima_tab_language");
      const sessionRtl = sessionStorage.getItem("oqtima_tab_rtl");

      if (sessionLanguage) {
        effectiveLanguage = sessionLanguage;
        // For Arabic, always force RTL
        if (sessionLanguage === "ar") {
          effectiveRtl = true;
        } else {
          effectiveRtl = sessionRtl === "true";
        }
      }
    }

    // If we found a language, apply it
    if (effectiveLanguage) {
      console.log(`Using language: ${effectiveLanguage}, RTL: ${effectiveRtl}`);

      // Set in session storage for consistency
      sessionStorage.setItem("oqtima_tab_language", effectiveLanguage);
      sessionStorage.setItem("oqtima_tab_rtl", effectiveRtl ? "true" : "false");

      // Set global variables
      window.__OQTIMA_COMPONENT_LANGUAGE = effectiveLanguage;
      window.__OQTIMA_LOCKED_LANG = effectiveLanguage;
      window.__FORCE_RTL__ = effectiveRtl;
      window.__ORIGINAL_RTL__ = effectiveRtl;

      // Set HTML attributes immediately
      document.documentElement.setAttribute("lang", effectiveLanguage);
      document.documentElement.setAttribute(
        "dir",
        effectiveRtl ? "rtl" : "ltr"
      );

      // Update classes
      // if (effectiveRtl) {
      //   document.documentElement.classList.add("rtl-active");
      //   document.body.classList.add("rtl-active");
      // } else {
      //   document.documentElement.classList.remove(
      //     "rtl-active",
      //     "rtl",
      //     "is-rtl"
      //   );
      //   document.body.classList.remove("rtl-active", "rtl", "is-rtl");
      // }

      // If not Arabic, ensure no RTL attributes
      if (effectiveLanguage !== "ar") {
        cleanRTLAttributes();
      }
    }

    // Make cleanRTLAttributes function globally available
    window.cleanRTLAttributes = cleanRTLAttributes;

    // Use a single MutationObserver to watch for language changes
    const languageObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "lang") {
          const currentLang = document.documentElement.getAttribute("lang");
          if (currentLang && currentLang.toLowerCase() !== "ar") {
            cleanRTLAttributes();
          }
        }
      }
    });

    // Start observing language changes
    languageObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
  } catch (e) {
    console.warn("Could not initialize tab-specific language:", e);
  }
}

const benefitsConfig = [
  { label: "popup-registration-benefits-pips", entities: ["CYSEC", "FSA"] },
  { label: "popup-registration-benefits-commissions", entities: ["FSA"] },
  { label: "popup-registration-benefits-currenciesFSA", entities: ["FSA"] },
  {
    label: "popup-registration-benefits-verification",
    entities: ["CYSEC", "FSA"],
  },
  { label: "popup-registration-benefits-depositMethodsFSA", entities: ["FSA"] },
  {
    label: "popup-registration-benefits-transfers",
    entities: ["CYSEC", "FSA"],
  },
  {
    label: "popup-registration-benefits-diversificationFSA",
    entities: ["FSA"],
  },
  {
    label: "popup-registration-benefits-diversificationCYSEC",
    entities: ["CYSEC"],
  },
  {
    label: "popup-registration-benefits-connection",
    entities: ["CYSEC", "FSA"],
  },
  {
    label: "popup-registration-benefits-liquidity",
    entities: ["CYSEC", "FSA"],
  },
  { label: "popup-registration-benefits-ecn", entities: ["CYSEC", "FSA"] },
  { label: "popup-registration-benefits-productsCYSEC", entities: ["CYSEC"] },
  { label: "popup-registration-benefits-devices", entities: ["CYSEC", "FSA"] },
  { label: "popup-registration-benefits-toolsFSA", entities: ["FSA"] },
  { label: "popup-registration-benefits-toolsCYSEC", entities: ["CYSEC"] },
  { label: "popup-registration-benefits-currenciesCYSEC", entities: ["CYSEC"] },
  { label: "popup-registration-benefits-serviceFSA", entities: ["FSA"] },
  { label: "popup-registration-benefits-serviceCYSEC", entities: ["CYSEC"] },
];

// Add loading spinner styles
const LoadingSpinner = () => (
  <div className="popup-registration__loading">
    <div className="popup-registration__spinner"></div>
  </div>
);

const PopupRegistration = ({ isOpen, onClose, className, params }) => {
  const { t } = useTranslationWithVariables();
  const isRTL = useRtlDirection();
  const { isMobile } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);
  const [isExternalLoad] = useState(isLoadedFromExternalScript());

  // FIRST EFFECT: Handle reset state after a forced reload
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if we've just reloaded because of RTL issues
    const hasReset = sessionStorage.getItem("oqtima_rtl_reset") === "true";
    if (hasReset) {
      console.log("Detected page was reloaded to fix RTL issues");

      try {
        // Get the saved language
        const savedLang = sessionStorage.getItem("oqtima_reset_language");
        if (savedLang) {
          console.log(`Applying saved language after reload: ${savedLang}`);
          document.documentElement.setAttribute("lang", savedLang);

          // If it's not Arabic, make sure we clean RTL
          if (savedLang.toLowerCase() !== "ar") {
            cleanRTLAttributes();
          }
        }

        // Restore scroll position if needed
        const savedScroll = sessionStorage.getItem("oqtima_reset_scroll");
        if (savedScroll) {
          window.scrollTo(0, parseInt(savedScroll, 10));
        }

        // Clear the reset flags
        sessionStorage.removeItem("oqtima_rtl_reset");
        sessionStorage.removeItem("oqtima_reset_language");
        sessionStorage.removeItem("oqtima_reset_scroll");
        sessionStorage.removeItem("oqtima_reset_time");
      } catch (e) {
        console.error("Error handling post-reload state:", e);
      }
    }

    // Check URL for the reset parameter and remove it to clean the URL
    if (window.location.search.includes("_rtl_reset=")) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("_rtl_reset");
        window.history.replaceState({}, document.title, url.toString());
      } catch (e) {
        console.warn("Failed to clean URL after reset:", e);
      }
    }
  }, []);

  console.log("params Oke", params);
  // Parse params safely and store in state to survive rerenders
  const [parsedParams, setParsedParams] = useState(() => {
    try {
      if (typeof params === "string") {
        return JSON.parse(params);
      }
      return params || {};
    } catch (e) {
      console.error("Error parsing params:", e);
      return {};
    }
  });

  // Clear any existing RTL settings on initial mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Generate unique session ID for this tab to avoid cross-tab contamination
    if (!window.__OQTIMA_SESSION_ID__) {
      window.__OQTIMA_SESSION_ID__ =
        Date.now().toString(36) + Math.random().toString(36).substr(2);
      console.log("New session initialized:", window.__OQTIMA_SESSION_ID__);
    }

    // Create a clean slate for language settings
    const cleanLanguageState = () => {
      // Remove RTL styles
      const rtlStyles = document.getElementById(
        "popup-registration-rtl-styles"
      );
      if (rtlStyles) rtlStyles.remove();

      // Reset document attributes
      const htmlLang = document.documentElement.getAttribute("lang") || "";
      const htmlDir = document.documentElement.getAttribute("dir") || "";

      console.log("Initial state - html lang:", htmlLang, "dir:", htmlDir);

      // Only reset if we're not supposed to be in RTL mode
      // if (!params?.dataLang || params.dataLang !== "ar") {
      //   // Remove RTL classes
      //   document.documentElement.classList.remove(
      //     "rtl-active",
      //     "rtl",
      //     "is-rtl"
      //   );
      //   document.body.classList.remove("rtl-active", "rtl", "is-rtl");

      //   // Force LTR for non-Arabic language
      //   // if (htmlDir === "rtl" && (!htmlLang || htmlLang !== "ar")) {
      //   //   document.documentElement.setAttribute("dir", "ltr");
      //   //   document.body.setAttribute("dir", "ltr");
      //   //   console.log("Force reset RTL to LTR on initial load");
      //   // }
      // }

      // Use sessionStorage instead of localStorage to avoid cross-tab contamination
      try {
        // Store language state in session storage (per tab)
        const desiredLang =
          params?.langParam || params?.language || params?.dataLang || "en";
        sessionStorage.setItem("oqtima_tab_language", desiredLang);
        console.log("Tab language set to:", desiredLang);

        // Override any localStorage settings with the sessionStorage value
        if (window.gatsby_i18next_language) {
          window.gatsby_i18next_language = desiredLang;
        }
      } catch (e) {
        console.warn("Error setting session storage:", e);
      }
    };

    // Run cleanup immediately
    cleanLanguageState();

    // Listen for storage events from other tabs (defensive measure)
    const handleStorageEvent = (event) => {
      if (
        event.key === "i18nextLng" ||
        event.key === "gatsby-i18next-language"
      ) {
        // Don't let other tabs affect our language
        try {
          const tabLang = sessionStorage.getItem("oqtima_tab_language");
          if (tabLang) {
            localStorage.setItem("i18nextLng", tabLang);
            console.log(
              "Prevented cross-tab language contamination, restored:",
              tabLang
            );
          }
        } catch (e) {
          console.warn("Error in storage event handler:", e);
        }
      }
    };

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, [params]);

  // Log initial params for debugging
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Current window location:", window.location.pathname);
      console.log("Current window search:", window.location.search);

      // Debug existing language settings
      console.log("Current language settings:");
      console.log(
        "- document.documentElement.lang:",
        document.documentElement.lang
      );
      console.log(
        "- document.documentElement.dir:",
        document.documentElement.dir
      );

      if (window.localStorage) {
        console.log(
          "- localStorage i18nextLng:",
          localStorage.getItem("i18nextLng")
        );
      }

      if (window.gatsby_i18next_language) {
        console.log(
          "- gatsby_i18next_language:",
          window.gatsby_i18next_language
        );
      }

      console.log("Parameters passed to component:", params);
      console.log("Parsed parameters:", parsedParams);
    }
  }, []);

  // Update parsed params when the input params change
  useEffect(() => {
    try {
      console.log("params", params);
      if (typeof params === "string") {
        const newParams = JSON.parse(params);
        setParsedParams((prevParams) => ({
          ...prevParams,
          ...newParams,
          // Preserve referral parameters if they exist in current state but not in new params
          referral_type: newParams.referral_type || prevParams.referral_type,
          referral_value: newParams.referral_value || prevParams.referral_value,
        }));
      } else if (params) {
        setParsedParams((prevParams) => ({
          ...prevParams,
          ...params,
          // Preserve referral parameters if they exist in current state but not in new params
          referral_type: params.referral_type || prevParams.referral_type,
          referral_value: params.referral_value || prevParams.referral_value,
        }));
      }
    } catch (e) {
      console.error("Error updating params:", e);
    }
  }, [params]);

  // Lock the language and RTL state immediately
  const forcedLanguage = parsedParams?.langParam;

  // FIXED: Reset any global language variables that might be causing issues
  useEffect(() => {
    if (typeof window !== "undefined" && forcedLanguage) {
      // Clear any overriding language settings
      if (window.__OQTIMA_COMPONENT_LANGUAGE !== forcedLanguage) {
        window.__OQTIMA_COMPONENT_LANGUAGE = forcedLanguage;
      }

      if (window.__OQTIMA_LOCKED_LANG !== forcedLanguage) {
        window.__OQTIMA_LOCKED_LANG = forcedLanguage;
      }

      // Try to clear Gatsby i18next language if not matching
      if (
        window.gatsby_i18next_language &&
        window.gatsby_i18next_language !== forcedLanguage
      ) {
        try {
          window.gatsby_i18next_language = forcedLanguage;
        } catch (e) {
          console.warn("Could not update gatsby_i18next_language");
        }
      }

      // Override i18next language storage if needed
      try {
        if (localStorage.getItem("i18nextLng") !== forcedLanguage) {
          localStorage.setItem("i18nextLng", forcedLanguage);
        }
      } catch (e) {
        console.warn("Could not update localStorage i18nextLng");
      }

      console.log("Language forced to:", forcedLanguage);
    }
  }, [forcedLanguage]);

  // Enhanced RTL detection - only use Arabic language to trigger RTL
  // FIXED: Make the RTL detection more specific and explicit
  let forcedRTL = false;

  // Check if we already have an RTL setting in sessionStorage (set by parent script)
  if (typeof window !== "undefined") {
    const storedRtl = sessionStorage.getItem("oqtima_tab_rtl");
    if (storedRtl === "true") {
      forcedRTL = true;
      console.log(
        "RTL mode enabled from sessionStorage oqtima_tab_rtl setting"
      );
    }
  }

  // Check if auto RTL detection is specifically disabled
  if (typeof window !== "undefined" && window.__OQTIMA_DISABLE_AUTO_RTL__) {
    console.log(
      "RTL detection explicitly disabled by __OQTIMA_DISABLE_AUTO_RTL__"
    );
    forcedRTL = false;
  }
  // Only set forcedRTL if language is explicitly set to an RTL language
  else if (
    forcedLanguage &&
    RTL_LANGUAGES.includes(forcedLanguage.toLowerCase())
  ) {
    forcedRTL = true;
    console.log(`RTL mode enabled from forcedLanguage: ${forcedLanguage}`);
  }
  // Check data-lang attribute but ONLY if forcedLanguage is not set
  else if (
    !forcedLanguage &&
    parsedParams?.dataLang &&
    RTL_LANGUAGES.includes(parsedParams.dataLang.toLowerCase())
  ) {
    // CRITICAL FIX: Only enable RTL for data-lang="ar" if we don't have an explicit non-RTL language
    if (
      !(
        parsedParams.language &&
        !RTL_LANGUAGES.includes(parsedParams.language.toLowerCase())
      )
    ) {
      forcedRTL = true;
      console.log(`RTL mode enabled from data-lang: ${parsedParams.dataLang}`);
    } else {
      console.log(
        `RTL mode disabled because explicit language overrides data-lang`
      );
    }
  }
  // Check language parameter
  else if (
    !forcedRTL &&
    parsedParams?.language &&
    RTL_LANGUAGES.includes(parsedParams.language.toLowerCase())
  ) {
    forcedRTL = true;
    console.log(
      `RTL mode enabled from language parameter: ${parsedParams.language}`
    );
  }
  // URL path check only if no other language indicators exist
  else if (
    !forcedLanguage &&
    !parsedParams?.dataLang &&
    typeof window !== "undefined"
  ) {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.includes("ar")) {
      forcedRTL = true;
      console.log("RTL mode enabled from URL path: /ar/");
    } else {
      // IMPORTANT: Explicitly disable RTL for non-Arabic paths
      forcedRTL = false;
      console.log("RTL mode explicitly disabled for non-Arabic path");
    }
  }

  // Override RTL detection if we have a direct conflict between HTML lang and RTL settings
  if (typeof window !== "undefined") {
    const htmlLang = document.documentElement.getAttribute("lang");
    if (htmlLang && htmlLang.toLowerCase() === "ar") {
      // If HTML lang is Arabic, force RTL regardless of other settings
      forcedRTL = true;
      console.log(`Forcing RTL mode because HTML lang="${htmlLang}" is Arabic`);
    } else if (
      htmlLang &&
      !RTL_LANGUAGES.includes(htmlLang.toLowerCase()) &&
      forcedRTL
    ) {
      console.log(
        `Overriding RTL detection because HTML lang="${htmlLang}" is not an RTL language`
      );
      forcedRTL = false;

      // IMPORTANT: Call the cleanup function explicitly for non-Arabic languages
      if (htmlLang && htmlLang.toLowerCase() !== "ar") {
        cleanRTLAttributes();
      }
    }
  }

  // Check global RTL flags too
  if (typeof window !== "undefined" && window.__FORCE_RTL__) {
    forcedRTL = true;
    console.log("RTL mode enabled from global __FORCE_RTL__ flag");
  }

  const isRTLMode = forcedRTL || isRTL;

  // // Add effect to update RTL mode when forcedLanguage changes
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   // First, clear any previous RTL settings
  //   document.documentElement.classList.remove("rtl-active");
  //   document.body.classList.remove("rtl-active");
  //   const existingRtlStyle = document.getElementById(
  //     "popup-registration-rtl-styles"
  //   );
  //   if (existingRtlStyle) existingRtlStyle.remove();

  //   console.log("Updating RTL mode:", isRTLMode ? "RTL" : "LTR");

  //   // Update global flags when language changes
  //   window.__ORIGINAL_LANGUAGE__ = forcedLanguage || params?.langParam || "en";
  //   window.__FORCE_RTL__ = isRTLMode;
  //   window.__ORIGINAL_RTL__ = isRTLMode;

  //   // IMPROVED LANGUAGE HANDLING: Check the language and set it correctly first
  //   const effectiveLanguage =
  //     forcedLanguage || params?.langParam || (isRTLMode ? "ar" : "en");
  //   document.documentElement.setAttribute("lang", effectiveLanguage);

  //   // If language is not Arabic, ensure RTL attributes are removed
  //   if (effectiveLanguage.toLowerCase() !== "ar") {
  //     cleanRTLAttributes();
  //     return; // Exit early - no need to apply RTL styles for non-Arabic languages
  //   }

  //   // Update document classes and attributes immediately
  //   document.documentElement.setAttribute("dir", isRTLMode ? "rtl" : "ltr");
  //   document.body.setAttribute("dir", isRTLMode ? "rtl" : "ltr");

  //   // if (isRTLMode) {
  //   //   document.documentElement.classList.add("rtl-active");
  //   //   document.documentElement.classList.add("rtl");
  //   //   document.documentElement.setAttribute("data-rtl", "true");
  //   //   document.body.classList.add("rtl-active");
  //   //   document.body.classList.add("rtl");
  //   //   document.body.setAttribute("data-rtl", "true");
  //   // } else {
  //   //   // Remove all possible RTL classes
  //   //   document.documentElement.classList.remove("rtl-active", "rtl", "is-rtl");
  //   //   document.body.classList.remove("rtl-active", "rtl", "is-rtl");
  //   //   // Remove data attributes related to RTL
  //   //   document.documentElement.removeAttribute("data-rtl");
  //   //   document.body.removeAttribute("data-rtl");
  //   // }

  //   // Force UI update by triggering a reflow
  //   const reflow = document.body.offsetHeight;

  //   // Use MutationObserver to ensure RTL settings persist
  //   if (isRTLMode) {
  //     const observer = new MutationObserver((mutations) => {
  //       mutations.forEach((mutation) => {
  //         if (
  //           mutation.attributeName === "dir" ||
  //           mutation.attributeName === "lang" ||
  //           mutation.attributeName === "class"
  //         ) {
  //           // Only reapply RTL settings if language is still Arabic
  //           const currentLang = document.documentElement.getAttribute("lang");
  //           if (currentLang && currentLang.toLowerCase() === "ar") {
  //             // Reapply RTL settings if they were changed
  //             if (
  //               document.documentElement.getAttribute("dir") !== "rtl" ||
  //               !document.documentElement.classList.contains("rtl-active")
  //             ) {
  //               console.log(
  //                 "Reapplying RTL settings after external modification"
  //               );
  //               document.documentElement.setAttribute("dir", "rtl");
  //               document.documentElement.classList.add("rtl-active", "rtl");
  //               document.documentElement.setAttribute("data-rtl", "true");
  //             }
  //           } else if (currentLang && currentLang.toLowerCase() !== "ar") {
  //             // Language is not Arabic - ensure RTL is cleaned up
  //             cleanRTLAttributes();
  //             observer.disconnect(); // No need to keep observing
  //           }
  //         }
  //       });
  //     });

  //     // Start observing the document element
  //     observer.observe(document.documentElement, {
  //       attributes: true,
  //       attributeFilter: ["dir", "lang", "class"],
  //     });

  //     // Clean up observer on unmount or when RTL changes
  //     return () => observer.disconnect();
  //   }

  //   console.log(
  //     `Language state updated - Language: ${
  //       forcedLanguage || "default"
  //     }, RTL mode: ${isRTLMode}`
  //   );
  // }, [forcedLanguage, isRTLMode, params]);

  // Add loading state management
  const [isStylesLoaded, setIsStylesLoaded] = React.useState(false);
  const styleLoadedRef = React.useRef(false);
  const initialRenderRef = React.useRef(true);

  // Preload styles effect - runs immediately
  useEffect(() => {
    if (typeof window === "undefined" || !isExternalLoad) return;

    // Add initial loading styles to prevent flash
    const preloadStyle = document.createElement("style");
    preloadStyle.id = "popup-registration-preload-styles";
    preloadStyle.innerHTML = `
      /* Initial state styles */
      .popup-registration {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.3s ease-in-out;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2147483647;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
      
      .popup-registration.styles-loaded {
        visibility: visible;
        opacity: 1;
      }

      .popup-registration__wrapper {
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      /* Mobile styles */
      @media screen and (max-width: 767px) {
        .popup-registration {
          background: #fff;
        }

        .popup-registration__wrapper {
          padding: 0;
        }

        .popup-registration__container {
          margin: 0;
          border-radius: 0;
          min-height: 100vh;
          flex-direction: column !important;
          overflow-y: auto !important;
        }

        .popup-registration__sidebar {
          flex-shrink: 0;
          z-index: 2;
        }

        .popup-registration__content {
          flex: 1;
          position: relative;
          z-index: 1;
        }
      }

      /* Loading spinner styles */
      .popup-registration__loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2147483648;
      }

      .popup-registration__spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #ff4400;
        border-radius: 50%;
        animation: popup-registration-spin 1s linear infinite;
      }

      @keyframes popup-registration-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* Prevent content shift during load */
      .popup-registration__container {
        opacity: 0;
        transform: scale(0.98);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
      }

      .styles-loaded .popup-registration__container {
        opacity: 1;
        transform: scale(1);
      }

      /* Hide content until fully loaded */
      .popup-registration__content,
      .popup-registration__sidebar {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      .styles-loaded .popup-registration__content,
      .styles-loaded .popup-registration__sidebar {
        opacity: 1;
      }
    `;
    document.head.appendChild(preloadStyle);

    return () => {
      const preloadStyleEl = document.getElementById(
        "popup-registration-preload-styles"
      );
      if (preloadStyleEl) preloadStyleEl.remove();
    };
  }, [isExternalLoad]);

  // Content ready effect
  useEffect(() => {
    if (!isOpen || !isExternalLoad) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
      requestAnimationFrame(() => {
        setIsStylesLoaded(true);
        setTimeout(() => {
          setIsContentReady(true);
        }, 300);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [isOpen, isExternalLoad]);

  // Separate effect for initial setup
  useEffect(() => {
    if (typeof window === "undefined" || !isExternalLoad) return;

    // Set initial flags
    window.__DISABLE_LANGUAGE_REDIRECT__ = true;
    window.__FORCE_LANGUAGE__ = true;
    window.__PREVENT_LANGUAGE_PATH_REDIRECT__ = true;
    window.__USING_URL_LANG_PARAM__ = true;
    window.__FORCE_RTL__ = isRTLMode;
    window.__ORIGINAL_LANGUAGE__ = forcedLanguage || params?.langParam || "en";
    window.__ORIGINAL_RTL__ = isRTLMode;

    // Block language detection immediately
    if (window.i18next?.services?.languageDetector) {
      window.i18next.services.languageDetector.detect = () =>
        window.__ORIGINAL_LANGUAGE__;
    }

    return () => {
      window.__DISABLE_LANGUAGE_REDIRECT__ = false;
      window.__FORCE_LANGUAGE__ = false;
      window.__PREVENT_LANGUAGE_PATH_REDIRECT__ = false;
      window.__USING_URL_LANG_PARAM__ = false;
      window.__FORCE_RTL__ = false;
    };
  }, [isExternalLoad]);

  // Add language detection logic to maintain RTL for Arabic language
  if (typeof window !== "undefined") {
    try {
      // Check if the current language is Arabic
      const checkIfArabic = () => {
        // Check multiple sources for language information
        const htmlLang = document.documentElement.getAttribute("lang");
        const sessionLang = sessionStorage.getItem("oqtima_tab_language");
        const localStorageLang = localStorage.getItem("i18nextLng");
        const globalLang = window.__OQTIMA_COMPONENT_LANGUAGE;

        // Check if any of these sources indicate Arabic
        const isArabic =
          (htmlLang && htmlLang.toLowerCase() === "ar") ||
          (sessionLang && sessionLang.toLowerCase() === "ar") ||
          (localStorageLang && localStorageLang.toLowerCase() === "ar") ||
          (globalLang && globalLang.toLowerCase() === "ar");

        return isArabic;
      };

      // If Arabic is the current language, ensure RTL attributes are set
      // if (checkIfArabic()) {
      //   console.log("Arabic language detected - maintaining RTL attributes");

      //   // Set RTL attributes on HTML element
      //   document.documentElement.setAttribute("dir", "rtl");
      //   document.documentElement.setAttribute("lang", "ar");
      //   document.documentElement.classList.add("rtl-active", "rtl");
      //   document.documentElement.setAttribute("data-rtl", "true");

      //   // Set RTL attributes on body element
      //   document.body.setAttribute("dir", "rtl");
      //   document.body.classList.add("rtl-active", "rtl");
      //   document.body.setAttribute("data-rtl", "true");

      //   // Set global RTL flags
      //   window.__FORCE_RTL__ = true;
      //   window.__ORIGINAL_RTL__ = true;

      //   // Store RTL setting in session storage
      //   sessionStorage.setItem("oqtima_tab_rtl", "true");
      // }
    } catch (e) {
      console.warn("Error in initial Arabic language detection:", e);
    }
  }

  // Add effect to extract URL parameters for language and RTL settings right at component mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Function to extract and apply URL parameters
    const extractUrlParameters = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);

        // Check for language params in URL with priority
        const languageParams = ["language", "lang", "data-lang", "langParam"];
        let detectedLanguage = null;

        // First check language from URL params
        for (const param of languageParams) {
          const value = urlParams.get(param);
          if (value) {
            console.log(
              `Detected language from URL parameter '${param}': ${value}`
            );
            detectedLanguage = value;
            break;
          }
        }

        // Check for RTL parameter in URL
        const rtlValue = urlParams.get("isRtl") || urlParams.get("oqtima_rtl");
        const isRtlMode = rtlValue === "true" || detectedLanguage === "ar";

        // Apply detected language and RTL settings immediately
        if (detectedLanguage) {
          console.log(
            `Setting language from URL: ${detectedLanguage}, RTL: ${isRtlMode}`
          );

          // Store in sessionStorage
          sessionStorage.setItem("oqtima_tab_language", detectedLanguage);
          sessionStorage.setItem(
            "oqtima_tab_rtl",
            isRtlMode ? "true" : "false"
          );

          // Apply to document
          document.documentElement.setAttribute("lang", detectedLanguage);
          document.documentElement.setAttribute(
            "dir",
            isRtlMode ? "rtl" : "ltr"
          );

          // Set global variables
          window.__OQTIMA_COMPONENT_LANGUAGE = detectedLanguage;
          window.__OQTIMA_LOCKED_LANG = detectedLanguage;
          window.__FORCE_RTL__ = isRtlMode;
          window.__ORIGINAL_RTL__ = isRtlMode;

          // Apply RTL classes if needed
          // if (isRtlMode) {
          //   document.documentElement.classList.add("rtl-active");
          //   document.body.classList.add("rtl-active");
          // } else {
          //   document.documentElement.classList.remove(
          //     "rtl-active",
          //     "rtl",
          //     "is-rtl"
          //   );
          //   document.body.classList.remove("rtl-active", "rtl", "is-rtl");
          // }

          // Return true to indicate parameters were found and applied
          return true;
        }

        return false;
      } catch (e) {
        console.warn("Error extracting URL parameters:", e);
        return false;
      }
    };

    // Run as soon as component mounts
    extractUrlParameters();
  }, []);

  // Add message handling for parent page communication
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Notify parent that iframe is loaded
    if (window.parent && window.parent !== window) {
      try {
        window.parent.postMessage(
          {
            type: "IFRAME_LOADED",
            timestamp: Date.now(),
          },
          "*"
        );
        console.log("[Form] Sent IFRAME_LOADED message to parent");
      } catch (e) {
        console.warn("[Form] Error sending message to parent:", e);
      }
    }

    // Handler for messages from parent page
    const handleParentMessage = (event) => {
      // Only process messages with explicit types
      if (!event.data || typeof event.data !== "object" || !event.data.type) {
        return;
      }

      console.log("[Form] Received message from parent:", event.data.type);

      // Handle language setting message
      if (event.data.type === "SET_LANGUAGE") {
        const { language, isRTL } = event.data;

        console.log(
          `[Form] Setting language from parent message: ${language}, RTL: ${isRTL}`
        );

        // Store in sessionStorage
        sessionStorage.setItem("oqtima_tab_language", language);
        sessionStorage.setItem("oqtima_tab_rtl", isRTL ? "true" : "false");

        // Set document attributes
        document.documentElement.setAttribute("lang", language);
        document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

        // Set RTL classes
        // if (isRTL) {
        //   document.documentElement.classList.add("rtl-active");
        //   document.body.classList.add("rtl-active");
        // } else {
        //   document.documentElement.classList.remove(
        //     "rtl-active",
        //     "rtl",
        //     "is-rtl"
        //   );
        //   document.body.classList.remove("rtl-active", "rtl", "is-rtl");
        // }

        // Set global variables
        window.__OQTIMA_COMPONENT_LANGUAGE = language;
        window.__OQTIMA_LOCKED_LANG = language;
        window.__FORCE_RTL__ = isRTL;
        window.__ORIGINAL_RTL__ = isRTL;

        // Send confirmation back to parent
        try {
          window.parent.postMessage(
            {
              type: "LANGUAGE_SET_SUCCESS",
              language,
              isRTL,
              timestamp: Date.now(),
            },
            "*"
          );
        } catch (e) {
          console.warn("[Form] Error sending confirmation to parent:", e);
        }
      }

      // Handle referral setting message
      if (event.data.type === "SET_REFERRAL") {
        const { referral_type, referral_value } = event.data;

        console.log(
          `[Form] Setting referral from parent message: type=${referral_type}, value=${referral_value}`
        );

        // Store in sessionStorage and global variables
        if (referral_type !== undefined && referral_type !== null) {
          sessionStorage.setItem("oqtima_referral_type", referral_type);
          window.__OQTIMA_REFERRAL_TYPE__ = referral_type;
        }

        if (referral_value !== undefined && referral_value !== null) {
          sessionStorage.setItem("oqtima_referral_value", referral_value);
          window.__OQTIMA_REFERRAL_VALUE__ = referral_value;
        }

        // Send confirmation back to parent
        try {
          window.parent.postMessage(
            {
              type: "REFERRAL_SET_SUCCESS",
              referral_type,
              referral_value,
              timestamp: Date.now(),
            },
            "*"
          );
        } catch (e) {
          console.warn("[Form] Error sending confirmation to parent:", e);
        }
      }

      // Handle close request
      if (event.data.type === "CLOSE_POPUP") {
        console.log("[Form] Received close request from parent");
        if (typeof onClose === "function") {
          onClose();
        }
      }
    };

    // Add message listener
    window.addEventListener("message", handleParentMessage);

    // Clean up on unmount
    return () => {
      window.removeEventListener("message", handleParentMessage);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const benefits = benefitsConfig.filter(({ entities }) =>
    entities.includes(currentEntity)
  );

  const handleClose = () => {
    // Try to send message to parent window that close button was pressed
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage("close_popup", "*");
        window.parent.postMessage(
          {
            type: "OQTIMA_CLOSE_POPUP",
            source: "close_button",
            timestamp: Date.now(),
          },
          "*"
        );
      }
    } catch (err) {
      console.error("Error sending close message to parent:", err);
    }

    if (typeof onClose === "function") {
      onClose();
    }
  };

  const popupContent = (
    <>
      {isLoading && isExternalLoad && <LoadingSpinner />}
      <div
        key={isRTLMode ? "rtl" : "ltr"}
        className={cn("popup-registration", {
          "popup-registration--rtl": isRTLMode,
          "styles-loaded": isStylesLoaded,
          "content-ready": isContentReady,
          "popup-registration--external": isExternalLoad,
          "popup-registration--internal": !isExternalLoad,
          "rtl-active": isRTLMode,
          rtl: isRTLMode,
        })}
        data-rtl={isRTLMode ? "true" : "false"}
        dir={isRTLMode ? "rtl" : "ltr"}
        style={{
          ...(isExternalLoad
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: 9999,
              }
            : {
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }),
          ...(isRTLMode ? { direction: "rtl" } : { direction: "ltr" }),
        }}
      >
        <div
          className={cn("popup-registration__wrapper", {
            "popup-registration__wrapper--rtl": isRTLMode,
            "rtl-active": isRTLMode,
            rtl: isRTLMode,
          })}
          dir={isRTLMode ? "rtl" : "ltr"}
          data-rtl={isRTLMode ? "true" : "false"}
        >
          <div
            key={isRTLMode ? "rtl-container" : "ltr-container"}
            className={cn("popup-registration__container", className, {
              "popup-registration__container--rtl": isRTLMode,
              "rtl-active": isRTLMode,
              rtl: isRTLMode,
            })}
            dir={isRTLMode ? "rtl" : "ltr"}
            style={
              isRTLMode
                ? {
                    flexDirection: "row-reverse !important",
                    display: "flex !important",
                    direction: "rtl",
                  }
                : {}
            }
            data-rtl={isRTLMode ? "true" : "false"}
          >
            <div
              className={cn("popup-registration__sidebar", {
                "popup-registration__sidebar--rtl": isRTLMode,
                "rtl-active": isRTLMode,
                rtl: isRTLMode,
              })}
              data-rtl={isRTLMode ? "true" : "false"}
              dir={isRTLMode ? "rtl" : "ltr"}
              style={
                isRTLMode ? { order: "2 !important", direction: "rtl" } : {}
              }
            >
              {(isRTLMode ||
                isMobile ||
                window.matchMedia("(orientation: landscape)").matches) && (
                <img
                  src={closemage}
                  alt="Close"
                  className={cn(
                    isRTLMode
                      ? "popup-registration__sidebar--rtl__close--rtl"
                      : "popup-registration__sidebar__close-mobile",
                    className
                  )}
                  onClick={handleClose}
                />
              )}
              <div className="sidebar-area">
                <div
                  className={cn("popup-registration__sidebar__title", {
                    "popup-registration__sidebar--rtl__title--rtl": isRTLMode,
                  })}
                >
                  <Trans i18nKey="popup-registration-title" ns="index">
                    <span className="normal-text">Embark on the</span>
                    <span className="highlighted">
                      <span className="white-text">OQTIMA Trading</span>
                      <span className="journey">Journey</span>
                    </span>
                  </Trans>
                </div>
              </div>
            </div>
            <div
              className={cn("popup-registration__content", {
                "popup-registration__content--rtl": isRTLMode,
                "rtl-active": isRTLMode,
                rtl: isRTLMode,
              })}
              data-rtl={isRTLMode ? "true" : "false"}
              dir={isRTLMode ? "rtl" : "ltr"}
              style={
                isRTLMode ? { order: "1 !important", direction: "rtl" } : {}
              }
            >
              {!isRTLMode && !isMobile && (
                <img
                  src={closemage}
                  alt="Close"
                  className="popup-registration__close"
                  onClick={handleClose}
                />
              )}
              <h1
                className={cn("popup-registration-register", {
                  "popup-registration-register--rtl": isRTLMode,
                })}
              >
                {t("popup-registration-register")}
              </h1>
              <PopupRegistrationForm params={JSON.stringify(parsedParams)} />
              <div className="risk-warning-container">
                <div className="risk-warning-content">
                  <p className="risk-warning-text">
                    {t("popup-registration-riskWarning")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(popupContent, document.body);
};

const Bullet = () => {
  return (
    <img
      src={bulletImage}
      alt="Bullet"
      style={{ width: "10px", height: "10px" }}
      className="object-cover"
    />
  );
};

PopupRegistration.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupRegistration;
