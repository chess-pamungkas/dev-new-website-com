import React, { useEffect } from "react";
import PropTypes from "prop-types";

const TrustPilot = ({
  className = "",
  businessUnitId = "64ca3f86b3187fdf335b2740",
  templateId = "5419b732fbfb950b10de65e5", // Use same template as HTML file
  locale = "en-US",
  height = "24px", // Use same height as HTML file
  width = "100%",
  token = "5e065b16-d809-410f-ae86-bc22829c122d", // Use same token as HTML file
}) => {
  useEffect(() => {
    // Load TrustBox script EXACTLY like index.html (simple and reliable)
    const loadTrustPilotScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="tp.widget.bootstrap.min.js"]')) {
        return;
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      document.head.appendChild(script);
    };

    // Add global CSS override to document head
    const addGlobalCSS = () => {
      // Check if CSS already exists
      if (document.getElementById("trustpilot-override-css")) {
        return;
      }

      const style = document.createElement("style");
      style.id = "trustpilot-override-css";
      style.textContent = `
        /* Global CSS Override for TrustPilot Widget */
        .trustpilot-widget iframe {
          height: 24px !important;
          min-height: 24px !important;
          max-height: 24px !important;
          border: none !important;
          background: transparent !important;
        }
        
        /* Try to override iframe content if possible */
        .trustpilot-widget iframe * {
          color: #ffffff !important;
          font-family: "Sofia Pro", Arial, sans-serif !important;
          font-size: 13.6px !important;
          line-height: 24px !important;
          font-weight: 700 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Force widget re-initialization on language change
    const initializeWidget = async () => {
      try {
        // Load script first (exactly like index.html)
        loadTrustPilotScript();

        // Add CSS override
        addGlobalCSS();

        // Wait for script to be ready
        await new Promise((resolve) => setTimeout(resolve, 200));

        // Force TrustPilot to re-load the widget if it exists
        if (window.Trustpilot && window.Trustpilot.loadFromElement) {
          const widget = document.querySelector(".trustpilot-widget");
          if (widget) {
            // Clear any existing iframe first to force fresh load
            const existingIframe = widget.querySelector("iframe");
            if (existingIframe) {
              existingIframe.remove();
            }

            // Force reload the widget
            try {
              await window.Trustpilot.loadFromElement(widget);
              console.log("TrustPilot widget reloaded successfully");

              // Apply styling after widget loads
              setTimeout(applyCustomStyling, 200);
              setTimeout(applyCustomStyling, 500);
              setTimeout(applyCustomStyling, 1000);
            } catch (error) {
              console.log("Error reloading TrustPilot widget:", error);
              // Fallback to normal initialization
            }
          }
        }
      } catch (error) {
        console.log("Error initializing widget:", error);
      }
    };

    // Initialize widget
    initializeWidget();

    // Apply custom styling after widget loads
    const applyCustomStyling = () => {
      const iframe = document.querySelector(".trustpilot-widget iframe");
      if (iframe) {
        // Try to access iframe content
        try {
          if (iframe.contentDocument) {
            // Method 1: Inject CSS into iframe
            const style = iframe.contentDocument.createElement("style");
            style.textContent = `
              * { color: #ffffff !important; }
              body { color: #ffffff !important; }
              .tp-widget-wrapper { color: #ffffff !important; }
              .tp-widget-wrapper * { color: #ffffff !important; }
              #trust-score { color: #ffffff !important; }
              .tp-widget-trustscore { color: #ffffff !important; }
              a#profile-link { color: #ffffff !important; }
              #profile-link { color: #ffffff !important; }
              #tp-widget-logo { color: #21a653 !important; }
              .tp-widget-logo { color: #21a653 !important; }
            `;
            iframe.contentDocument.head.appendChild(style);

            // Method 2: Direct element styling
            const allElements = iframe.contentDocument.querySelectorAll("*");
            allElements.forEach((element) => {
              if (element.textContent && element.textContent.trim()) {
                element.style.color = "#ffffff";
                element.style.setProperty("color", "#ffffff", "important");

                // Special case for Trustpilot logo
                if (
                  element.id === "tp-widget-logo" ||
                  element.classList.contains("tp-widget-logo") ||
                  (element.textContent &&
                    element.textContent.includes("Trustpilot"))
                ) {
                  element.style.setProperty("color", "#21a653", "important");
                }
              }
            });
          }
        } catch (e) {
          console.log(
            "Cannot access iframe content due to CORS - trying alternative methods"
          );

          // Method 3: Try to manipulate iframe from outside
          iframe.style.filter = "invert(1) hue-rotate(180deg)";
          setTimeout(() => {
            iframe.style.filter = "none";
          }, 100);
        }

        // Method 4: Add CSS attributes to iframe
        iframe.setAttribute("data-theme", "dark");
        iframe.setAttribute("data-text-color", "white");

        // Method 5: Force iframe reload with custom CSS
        const originalSrc = iframe.src;
        if (originalSrc) {
          iframe.onload = () => {
            setTimeout(applyCustomStyling, 1000);
          };
        }
      }
    };

    // Use MutationObserver to detect iframe creation (like index.html auto-loading)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const iframe = document.querySelector(".trustpilot-widget iframe");
          if (iframe) {
            // Apply styling as soon as iframe is detected
            setTimeout(applyCustomStyling, 100);
            setTimeout(applyCustomStyling, 500);
            setTimeout(applyCustomStyling, 1000);
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Fallback styling attempts (reduced frequency to avoid interference)
    const delays = [1000, 2000, 3000, 5000];
    delays.forEach((delay) => {
      setTimeout(applyCustomStyling, delay);
    });

    // Continuous attempts for first 10 seconds only (like index.html quick loading)
    let attemptCount = 0;
    const intervalTimer = setInterval(() => {
      if (attemptCount < 10) {
        applyCustomStyling();
        attemptCount++;
      } else {
        clearInterval(intervalTimer);
      }
    }, 1000);

    return () => {
      clearInterval(intervalTimer);
      observer.disconnect();

      // Clean up widget on unmount to prevent stuck state
      const widget = document.querySelector(".trustpilot-widget");
      if (widget) {
        const existingIframe = widget.querySelector("iframe");
        if (existingIframe) {
          existingIframe.remove();
        }
      }
    };
  }, [locale, businessUnitId, templateId, token]); // Re-run when language changes

  return (
    <div className={`trust-pilot ${className}`}>
      <div
        className="trustpilot-widget"
        data-locale={locale}
        data-template-id={templateId}
        data-businessunit-id={businessUnitId}
        data-style-height={height}
        data-style-width={width}
        data-token={token}
        data-style-background-color="transparent"
        data-style-text-color="#ffffff"
        data-style-font-family="Sofia Pro, Arial, sans-serif"
        data-style-font-size="13.6px"
        data-style-font-weight="700"
        data-style-line-height="24px"
        data-theme="dark"
        data-text-color="white"
      >
        <a
          href="https://www.trustpilot.com/review/oqtima.com"
          target="_blank"
          rel="noopener noreferrer"
          className="trust-pilot__link"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
};

TrustPilot.propTypes = {
  className: PropTypes.string,
  businessUnitId: PropTypes.string,
  templateId: PropTypes.string,
  locale: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  token: PropTypes.string,
};

export default TrustPilot;
