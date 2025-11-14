import React, { useEffect, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ReCaptchaProvider = ({ children, showBadge = false }) => {
  const recaptchaSiteKey = process.env.GATSBY_GOOGLE_CAPTCHA_SITE_KEY;
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy load reCAPTCHA only when needed (when form is visible or badge should be shown)
  useEffect(() => {
    if (!recaptchaSiteKey) return;

    // Check if reCAPTCHA is already loaded
    if (document.getElementById("google-recaptcha-v3") || window.grecaptcha) {
      setShouldLoad(true);
      return;
    }

    // Strategy: Load reCAPTCHA only when:
    // 1. User interacts with the page (scroll, click, touch)
    // 2. Form becomes visible (intersection observer)
    // 3. Badge should be shown
    const loadRecaptcha = () => {
      if (shouldLoad) return;
      setShouldLoad(true);
    };

    // Load immediately if badge should be shown
    if (showBadge) {
      loadRecaptcha();
      return;
    }

    // Otherwise, lazy load on user interaction
    const events = ["scroll", "touchstart", "mousedown", "keydown"];
    const loadOnInteraction = () => {
      loadRecaptcha();
      events.forEach((event) => {
        window.removeEventListener(event, loadOnInteraction, { passive: true });
      });
    };

    events.forEach((event) => {
      window.addEventListener(event, loadOnInteraction, { passive: true, once: true });
    });

    // Also check if any form is visible using Intersection Observer
    const forms = document.querySelectorAll("form");
    if (forms.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadRecaptcha();
              observer.disconnect();
            }
          });
        },
        { rootMargin: "50px" }
      );

      forms.forEach((form) => observer.observe(form));

      return () => {
        observer.disconnect();
        events.forEach((event) => {
          window.removeEventListener(event, loadOnInteraction, { passive: true });
        });
      };
    }

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, loadOnInteraction, { passive: true });
      });
    };
  }, [recaptchaSiteKey, showBadge, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || !recaptchaSiteKey) return;

    // Check if script already exists
    if (document.getElementById("google-recaptcha-v3")) return;

    // Load reCAPTCHA script with low priority
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.id = "google-recaptcha-v3";
    // Add loading="lazy" attribute for better performance
    script.setAttribute("loading", "lazy");

    document.body.appendChild(script);

    // Update style to position badge at bottom left
    const style = document.createElement("style");
    style.id = "recaptcha-badge-styles";
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
      // Don't remove script on unmount - keep it loaded for better UX
      const styleEl = document.getElementById("recaptcha-badge-styles");
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, [shouldLoad, showBadge, recaptchaSiteKey]);

  // Only render GoogleReCaptchaProvider when reCAPTCHA should be loaded
  if (!shouldLoad && !showBadge) {
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
