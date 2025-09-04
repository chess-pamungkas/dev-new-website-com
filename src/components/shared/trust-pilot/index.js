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
  // Preload TrustPilot script on component mount for faster loading
  useEffect(() => {
    // Preload the script immediately when component mounts
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "script";
    preloadLink.href =
      "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    preloadLink.crossOrigin = "anonymous";
    document.head.appendChild(preloadLink);

    return () => {
      // Clean up preload link on unmount
      if (preloadLink.parentNode) {
        preloadLink.parentNode.removeChild(preloadLink);
      }
    };
  }, []);

  // Use Intersection Observer for lazy loading optimization
  useEffect(() => {
    const widgetElement = document.querySelector(".trust-pilot");
    if (!widgetElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Widget is visible, trigger initialization
            console.log("TrustPilot widget is visible, initializing...");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before widget becomes visible
        threshold: 0.1,
      }
    );

    observer.observe(widgetElement);

    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    // Load TrustBox script with optimized loading
    const loadTrustPilotScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="tp.widget.bootstrap.min.js"]')) {
        return Promise.resolve();
      }

      // Check if script was already loaded in this session
      try {
        if (sessionStorage.getItem("trustpilot-script-loaded") === "true") {
          console.log("TrustPilot script already loaded in this session");
          return Promise.resolve();
        }
      } catch (e) {
        // SessionStorage not available, continue with normal loading
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
        script.async = true;
        script.defer = true; // Add defer for better loading

        // Add preload hint for faster loading (only if not already exists)
        if (
          !document.querySelector(
            'link[rel="preload"][href*="tp.widget.bootstrap.min.js"]'
          )
        ) {
          const preloadLink = document.createElement("link");
          preloadLink.rel = "preload";
          preloadLink.as = "script";
          preloadLink.href =
            "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
          preloadLink.crossOrigin = "anonymous";
          document.head.appendChild(preloadLink);
        }

        script.onload = () => {
          console.log("TrustPilot script loaded successfully");
          // Cache the script for future use with better error handling
          if ("caches" in window && "serviceWorker" in navigator) {
            try {
              caches
                .open("trustpilot-cache")
                .then((cache) => {
                  // Use cache.put instead of cache.add for better error handling
                  return fetch(script.src)
                    .then((response) => {
                      if (response.ok) {
                        return cache.put(script.src, response);
                      }
                      throw new Error(`HTTP error! status: ${response.status}`);
                    })
                    .catch((err) => {
                      console.log("Cache fetch error:", err);
                      // Don't throw error, just log it
                    });
                })
                .catch((err) => console.log("Cache open error:", err));
            } catch (error) {
              console.log("Cache initialization error:", error);
              // Continue without caching
            }
          } else {
            // Fallback: Store in sessionStorage for basic caching
            try {
              sessionStorage.setItem("trustpilot-script-loaded", "true");
            } catch (e) {
              console.log("SessionStorage not available:", e);
            }
          }
          resolve();
        };
        script.onerror = (error) => {
          console.warn("Failed to load TrustPilot script:", error);
          // In development, don't reject the promise to prevent widget from breaking
          // Instead, resolve and let the widget handle the missing script gracefully
          if (process.env.NODE_ENV === "development") {
            console.log(
              "Development mode: Continuing without TrustPilot script"
            );
            resolve();
          } else {
            reject(new Error("TrustPilot script failed to load"));
          }
        };

        document.head.appendChild(script);
      });
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

    // Optimized widget initialization
    const initializeWidget = async () => {
      try {
        // Load script first with promise handling
        await loadTrustPilotScript();

        // Add CSS override immediately
        addGlobalCSS();

        // Reduced wait time for faster loading
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Check if TrustPilot is available, if not show fallback in development
        if (!window.Trustpilot && process.env.NODE_ENV === "development") {
          console.log(
            "TrustPilot not available in development, showing fallback"
          );
          const widget = document.querySelector(".trustpilot-widget");
          if (widget) {
            widget.innerHTML = `
              <div style="
                display: flex;
                align-items: center;
                gap: 8px;
                color: #ffffff;
                font-family: 'Sofia Pro', Arial, sans-serif;
                font-size: 13.6px;
                font-weight: 700;
                line-height: 24px;
                height: 24px;
              ">
                <span>★★★★★</span>
                <span>TrustPilot (Dev Mode)</span>
              </div>
            `;
          }
          return;
        }

        // Force TrustPilot to re-load the widget if it exists
        if (window.Trustpilot && window.Trustpilot.loadFromElement) {
          const widget = document.querySelector(".trustpilot-widget");
          if (widget) {
            // Clear any existing iframe first to force fresh load
            const existingIframe = widget.querySelector("iframe");
            if (existingIframe) {
              existingIframe.remove();
            }

            // Force reload the widget with faster timing
            try {
              await window.Trustpilot.loadFromElement(widget);
              console.log("TrustPilot widget loaded successfully");

              // Apply styling with reduced delays for faster appearance
              setTimeout(applyCustomStyling, 100);
              setTimeout(applyCustomStyling, 300);
              setTimeout(applyCustomStyling, 600);
            } catch (error) {
              console.log("Error reloading TrustPilot widget:", error);
              // Fallback to normal initialization
            }
          }
        }
      } catch (error) {
        console.log("Error initializing widget:", error);
        // In development, show fallback UI if widget fails to initialize
        if (process.env.NODE_ENV === "development") {
          const widget = document.querySelector(".trustpilot-widget");
          if (widget && !widget.innerHTML.includes("TrustPilot (Dev Mode)")) {
            widget.innerHTML = `
              <div style="
                display: flex;
                align-items: center;
                gap: 8px;
                color: #ffffff;
                font-family: 'Sofia Pro', Arial, sans-serif;
                font-size: 13.6px;
                font-weight: 700;
                line-height: 24px;
                height: 24px;
              ">
                <span>★★★★★</span>
                <span>TrustPilot (Dev Mode)</span>
              </div>
            `;
          }
        }
      }
    };

    // Initialize widget with requestIdleCallback for non-blocking loading
    const initWidget = () => {
      if (window.requestIdleCallback) {
        window.requestIdleCallback(
          () => {
            initializeWidget();
          },
          { timeout: 2000 }
        );
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
          initializeWidget();
        }, 100);
      }
    };

    initWidget();

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

    // Optimized MutationObserver for faster iframe detection
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const iframe = document.querySelector(".trustpilot-widget iframe");
          if (iframe) {
            // Apply styling immediately when iframe is detected
            applyCustomStyling();
            setTimeout(applyCustomStyling, 50);
            setTimeout(applyCustomStyling, 200);
            setTimeout(applyCustomStyling, 500);
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Optimized fallback styling attempts with faster timing
    const delays = [500, 1000, 1500, 2000];
    delays.forEach((delay) => {
      setTimeout(applyCustomStyling, delay);
    });

    // Continuous attempts for first 5 seconds only (reduced from 10 seconds)
    let attemptCount = 0;
    const intervalTimer = setInterval(() => {
      if (attemptCount < 5) {
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
        {/* <a
          href="https://www.trustpilot.com/review/oqtima.com"
          target="_blank"
          rel="noopener noreferrer"
          className="trust-pilot__link"
        >
          Trustpilot
        </a> */}
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
