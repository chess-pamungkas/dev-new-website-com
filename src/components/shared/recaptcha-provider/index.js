import React, { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ReCaptchaProvider = ({ children, showBadge = false }) => {
  useEffect(() => {
    // Load reCAPTCHA script manually
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.GATSBY_CAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.id = "google-recaptcha-v3";

    script.onload = () => {
      console.log("reCAPTCHA script loaded successfully");
    };

    script.onerror = (error) => {
      console.error("Error loading reCAPTCHA script:", error);
    };

    document.body.appendChild(script);

    // Add style to hide/show badge based on showBadge prop
    const style = document.createElement("style");
    style.innerHTML = `
      .grecaptcha-badge { 
        visibility: ${showBadge ? "visible" : "hidden"} !important;
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

  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY}
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
