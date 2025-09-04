import React, { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { getRecaptchaConfig } from "../../../config/recaptcha";

const ReCaptchaProvider = ({ children, showBadge = false }) => {
  const { siteKey: recaptchaKey, isAvailable } = getRecaptchaConfig();

  useEffect(() => {
    if (!isAvailable) {
      console.error("No reCAPTCHA key found");
      return;
    }

    // Check if script already exists
    if (document.getElementById("google-recaptcha-v3")) {
      console.log("reCAPTCHA script already loaded");
      return;
    }

    // Load reCAPTCHA script manually
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`;
    script.async = true;
    script.defer = true;
    script.id = "google-recaptcha-v3";

    // Add error handling
    script.onerror = (error) => {
      console.error("Failed to load reCAPTCHA script:", error);
    };

    script.onload = () => {
      console.log("reCAPTCHA script loaded successfully");
    };

    document.body.appendChild(script);

    // Update style to position badge at bottom left
    const style = document.createElement("style");
    style.innerHTML = `
      .grecaptcha-badge { 
        visibility: ${showBadge ? "visible" : "hidden"} !important;
        left: 0 !important;
        right: auto !important;
        bottom: 0 !important;
        position: fixed !important;
        z-index: 999999 !important;
        width: 70px !important;
        transition: width 0.3s ease !important;
        overflow: hidden !important;
        transform: none !important;
        direction: ltr !important;
      }
      .grecaptcha-badge:hover {
        width: 256px !important;
      }
      .grecaptcha-badge .grecaptcha-logo {
        transform: none !important;
      }
      [dir="rtl"] .grecaptcha-badge {
        transform: none !important;
      }
      [dir="rtl"] .grecaptcha-badge .grecaptcha-logo {
        transform: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.getElementById("google-recaptcha-v3");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      document.head.removeChild(style);
    };
  }, [showBadge]);

  // Debug environment variable
  console.log("Using reCAPTCHA key:", recaptchaKey);
  console.log("reCAPTCHA available:", isAvailable);

  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={recaptchaKey}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "body",
          nonce: undefined,
          id: "google-recaptcha-v3",
        }}
        language="en"
        useEnterprise={false}
        container={{
          element: "captcha-placeholder",
          parameters: {
            badge: "bottomleft",
            size: "invisible",
            theme: "light",
          },
        }}
        onLoad={() => {
          console.log("ReCaptcha Provider loaded successfully");
        }}
        onError={(error) => {
          console.error("ReCaptcha Provider error:", error);
        }}
      >
        {children}
      </GoogleReCaptchaProvider>
      <div id="captcha-placeholder" />
    </>
  );
};

export default ReCaptchaProvider;
