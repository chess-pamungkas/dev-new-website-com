import React, { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useLocation } from "@reach/router";

const ReCaptchaProvider = ({ children, showBadge = false }) => {
  const recaptchaSiteKey = process.env.GATSBY_GOOGLE_CAPTCHA_SITE_KEY;
  const location = useLocation();

  useEffect(() => {
    if (!recaptchaSiteKey) return;

    // Check if we're on contact-us page
    const isContactUsPage =
      location?.pathname === "/contact-us" ||
      location?.pathname === "/contact-us/" ||
      location?.pathname?.includes("/contact-us");

    // Only load script if badge should be shown (contact-us page or popup registration)
    // This reduces JavaScript execution time on pages that don't need reCAPTCHA
    const shouldLoadScript = showBadge || isContactUsPage;

    if (shouldLoadScript) {
      // Load reCAPTCHA script manually only when needed
      if (!document.getElementById("google-recaptcha-v3")) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
        script.async = true;
        script.defer = true;
        script.id = "google-recaptcha-v3";
        script.setAttribute("loading", "lazy");
        document.body.appendChild(script);
      }
    }

    // Always update style to position badge at bottom left (even if script not loaded yet)
    // This ensures styling is ready when script loads
    let style = document.getElementById("recaptcha-badge-styles");
    if (!style) {
      style = document.createElement("style");
      style.id = "recaptcha-badge-styles";
      document.head.appendChild(style);
    }

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

    return () => {
      // Don't remove script on unmount - keep it loaded for better UX
      // Only remove style if needed (but we'll keep it for badge visibility control)
    };
  }, [showBadge, recaptchaSiteKey, location]);

  if (!recaptchaSiteKey) {
    return <>{children}</>;
  }

  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={recaptchaSiteKey}
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
          console.log("ReCaptcha Provider loaded");
        }}
      >
        {children}
      </GoogleReCaptchaProvider>
      <div id="captcha-placeholder" />
    </>
  );
};

export default ReCaptchaProvider;
