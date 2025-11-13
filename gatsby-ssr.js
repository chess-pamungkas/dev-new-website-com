import React, { cloneElement, createElement } from "react";
import Layout from "./src/components/shared/layout";

// Critical font assets (importing ensures hashed URLs are available at build time)
import SofiaProRegularWoff2 from "./src/assets/fonts/SofiaProRegular.woff2";
import SofiaProMediumWoff2 from "./src/assets/fonts/SofiaProMedium.woff2";
import SofiaProBoldWoff2 from "./src/assets/fonts/SofiaProBold.woff2";
import SofiaProBlackWoff2 from "./src/assets/fonts/SofiaProBlack.woff2";
import RobotoMediumTtf from "./src/assets/fonts/Roboto-Medium.ttf";
// Critical LCP images (globe image is the LCP element)
import GlobeImage from "./src/assets/images/bg/hero/main-promotion/globe.svg";
import HandImage from "./src/assets/images/bg/hero/main-promotion/hand.svg";

export const onRenderBody = ({
  setPostBodyComponents,
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setPreBodyComponents([
    // // Default content for Google bot fast mode (Hidden for users)
    <section
      key="default-nojs-content"
      id="default-nojs"
      className="main-promotion"
    >
      <div className="main-promotion__wrapper">
        <div className="main-promotion__block">
          <h1 className="main-promotion__title-wrapper">
            <span className="main-promotion__title">
              A Perfectly optimised trading experience for YOU
            </span>
          </h1>
        </div>
      </div>
      <div className="promotion">
        <div className="promotion__wrapper">
          <div className="promotion__block">
            <div className="promotion__description">
              Start building your trading portfolio with as little as $20 USD or
              equivalent, with 8 base currencies available. Trade EURUSD, XAUUSD
              and many other assets with one of the lowest average spreads in
              the industry, starting at 0.0 pips. Your money, your way, enjoy
              instant withdrawals with multiple withdrawal methods and multiple
              trusted funding channels with no fees.
            </div>
          </div>
          <div className="promotion__block">
            <img src="" alt="" className="promotion__img" />
          </div>
        </div>
      </div>
    </section>,
    ,
    <script
      key="clean-bis-attributes"
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var nodes=document.querySelectorAll('[bis_skin_checked]');for(var i=0;i<nodes.length;i++){nodes[i].removeAttribute('bis_skin_checked');}}catch(e){}})();`,
      }}
    />,
  ]);
  setPostBodyComponents([
    <script
      key="livechat-management"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Manage livechat z-index and behavior to prevent conflicts with burger menu
            function manageLivechatZIndex() {
              try {
                const livechatElements = document.querySelectorAll('[id*="convrs"], [class*="convrs"]');
                
                if (livechatElements.length === 0) {
                  return; // No livechat elements yet, skip management
                }
                
                livechatElements.forEach(el => {
                  if (el && el.style) {
                    // Check if livechat is hidden by burger menu
                    const isBurgerMenuHidden = el.getAttribute('data-burger-menu-hidden') === 'true';
                    if (isBurgerMenuHidden) {
                      // Don't modify if burger menu has hidden it
                      return;
                    }
                    
                    // Check if burger menu is open
                    const burgerMenuCheckbox = document.getElementById('bmt');
                    const isBurgerMenuOpen = burgerMenuCheckbox && burgerMenuCheckbox.checked;
                    
                    if (isBurgerMenuOpen) {
                      // Hide livechat when burger menu is open
                      el.style.setProperty('display', 'none', 'important');
                      el.style.setProperty('visibility', 'hidden', 'important');
                      el.style.setProperty('pointer-events', 'none', 'important');
                      return;
                    }
                    
                    // Check if we're on a webtrader page
                    const currentPath = window.location.pathname;
                    const isWebtraderPage = currentPath.includes('webtrader');
                    
                    if (isWebtraderPage) {
                      // Hide livechat on webtrader pages
                      el.style.setProperty('display', 'none', 'important');
                      el.style.setProperty('visibility', 'hidden', 'important');
                      el.style.setProperty('pointer-events', 'none', 'important');
                      return;
                    }
                    
                    // For normal pages, ensure livechat is visible and properly z-indexed
                    // Only set z-index, don't touch display/visibility to let livechat show naturally
                    el.style.setProperty('z-index', '21', 'important');
                    
                    // Force LTR direction for live chat widget in RTL pages
                    const isRTL = document.documentElement.getAttribute('dir') === 'rtl' || 
                                 document.body.getAttribute('dir') === 'rtl' ||
                                 document.documentElement.dir === 'rtl';
                    if (isRTL) {
                      el.style.setProperty('direction', 'ltr', 'important');
                      el.setAttribute('dir', 'ltr');
                      
                      // Apply LTR to all child elements
                      const allChildren = el.querySelectorAll('*');
                      allChildren.forEach(child => {
                        if (child.style) {
                          child.style.setProperty('direction', 'ltr', 'important');
                          child.style.setProperty('text-align', 'left', 'important');
                        }
                        if (child.setAttribute) {
                          child.setAttribute('dir', 'ltr');
                        }
                      });
                    }
                  }
                });
              } catch (error) {
                // Silent fail to avoid console spam
              }
            }
            
            // Monitor for dynamically added livechat elements
            let observer;
            try {
              observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                      if (node.nodeType === 1 && (node.id && node.id.includes('convrs') || 
                          (node.className && typeof node.className === 'string' && node.className.includes('convrs')))) {
                        console.log('🔵 Livechat element detected, managing...');
                        setTimeout(manageLivechatZIndex, 100);
                        
                        // Also apply LTR styling immediately for new elements
                        const isRTL = document.documentElement.getAttribute('dir') === 'rtl' || 
                                     document.body.getAttribute('dir') === 'rtl' ||
                                     document.documentElement.dir === 'rtl';
                        if (isRTL && node.style) {
                          node.style.setProperty('direction', 'ltr', 'important');
                          if (node.setAttribute) {
                            node.setAttribute('dir', 'ltr');
                          }
                        }
                      }
                    });
                  }
                });
              });
              
              // Start observing
              if (document.body) {
                observer.observe(document.body, {
                  childList: true,
                  subtree: true
                });
              }
            } catch (error) {
              // Silent fail
            }
            
            // Run management on burger menu state change
            document.addEventListener('click', function(e) {
              const burgerTrigger = e.target.closest('.burger-menu__trigger');
              if (burgerTrigger) {
                setTimeout(manageLivechatZIndex, 100);
              }
            });
            
            // Run immediately after a delay to let livechat load
            setTimeout(manageLivechatZIndex, 2000);
            
            // Run on DOM ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(manageLivechatZIndex, 2000);
              });
            }
          })();
        `,
      }}
    />,
    <script
      key="mt-widget"
      type="text/javascript"
      src="https://metatraderweb.app/trade/widget.js"
    />,
  ]);
  // Preconnect hints - add in onRenderBody to ensure they're in HTML
  const apiUrl = process.env.GATSBY_OQTIMA_API_URL;
  const preconnectLinks = [];

  // Preconnect to API backend (env or default)
  const apiOrigins = new Set();
  if (apiUrl) {
    try {
      apiOrigins.add(new URL(apiUrl).origin);
    } catch (e) {
      // Invalid URL, ignore
    }
  }

  apiOrigins.forEach((origin) => {
    preconnectLinks.push(
      <link
        key={`preconnect-api-${origin}`}
        rel="preconnect"
        href={origin}
        crossOrigin="anonymous"
      />,
      <link
        key={`dns-prefetch-api-${origin}`}
        rel="dns-prefetch"
        href={origin}
      />
    );
  });

  // Preconnect to MetaTrader widget
  preconnectLinks.push(
    <link
      key="preconnect-metatrader"
      rel="preconnect"
      href="https://metatraderweb.app"
      crossOrigin="anonymous"
    />,
    <link
      key="dns-prefetch-metatrader"
      rel="dns-prefetch"
      href="https://metatraderweb.app"
    />
  );

  // Preconnect to Conv.rs livechat
  preconnectLinks.push(
    <link
      key="preconnect-convrs"
      rel="preconnect"
      href="https://webchat.conv.rs"
      crossOrigin="anonymous"
    />,
    <link
      key="dns-prefetch-convrs"
      rel="dns-prefetch"
      href="https://webchat.conv.rs"
    />
  );

  // Preconnect to Trustpilot widget
  preconnectLinks.push(
    <link
      key="preconnect-trustpilot"
      rel="preconnect"
      href="https://widget.trustpilot.com"
      crossOrigin="anonymous"
    />,
    <link
      key="dns-prefetch-trustpilot"
      rel="dns-prefetch"
      href="https://widget.trustpilot.com"
    />
  );

  // Preconnect to Google Fonts (used by third-party widgets like Trustpilot)
  // Note: We can't control font-display for fonts loaded by third-party scripts,
  // but preconnecting helps reduce latency
  preconnectLinks.push(
    <link
      key="preconnect-google-fonts"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="dns-prefetch-google-fonts"
      rel="dns-prefetch"
      href="https://fonts.gstatic.com"
    />
  );

  /*
   * NOTE: Third-party resource limitations (cannot be fixed directly):
   *
   * 1. Cache lifetimes for third-party resources:
   *    - Trustpilot widgets (widget.trustpilot.com) - Cache headers controlled by Trustpilot
   *    - MetaTrader widget (metatraderweb.app) - Cache headers controlled by MetaTrader
   *    These resources are served by third-party servers, so we cannot set cache headers.
   *    Preconnect hints are added above to reduce connection latency.
   *
   * 2. Font display for Google Fonts:
   *    - Google Fonts loaded by third-party scripts (e.g., Trustpilot) don't have font-display
   *    - We cannot add font-display to fonts loaded by third-party scripts
   *    - Preconnect hints are added above to help with font loading performance
   *
   * To improve these metrics, contact the third-party providers:
   * - Trustpilot: Request better cache headers and font-display support
   * - MetaTrader: Request better cache headers
   */

  setHeadComponents([
    // Preconnect hints - add first for early discovery
    ...preconnectLinks,
    // Preload critical fonts used above the fold
    <link
      key="preload-font-sofia-regular"
      rel="preload"
      href={SofiaProRegularWoff2}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-font-sofia-medium"
      rel="preload"
      href={SofiaProMediumWoff2}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-font-sofia-bold"
      rel="preload"
      href={SofiaProBoldWoff2}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-font-sofia-black"
      rel="preload"
      href={SofiaProBlackWoff2}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-font-roboto-medium"
      rel="preload"
      href={RobotoMediumTtf}
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    // Default title and description for Google bot fast mode
    <title key="default-title">
      Forex & CFD Trading on Stocks, Indices, Oil, Gold by OQtima™
    </title>,
    <meta
      key="default-description"
      name="description"
      content="Forex, cfd trading on stocks, indices, oil and gold with the most advanced trading platforms. Trade with OQtima™, a licensed forex broker."
    />,
    <meta key="og-type" property="og:type" content="website" />,
    <meta
      key="og-title"
      property="og:title"
      content="Forex & CFD Trading on Stocks, Indices, Oil, Gold by OQtima™"
    />,
    <meta
      key="og-desc"
      property="og:description"
      content="Forex, cfd trading on stocks, indices, oil and gold with the most advanced trading platforms. Trade with OQtima™, a licensed forex broker."
    />,
    <meta key="og-img" property="og:image" content="/preview.jpeg" />,
    <meta key="tw-card" name="twitter:card" content="summary_large_image" />,
    <meta
      key="tw-title"
      name="twitter:title"
      content="Forex & CFD Trading on Stocks, Indices, Oil, Gold by OQtima™"
    />,
    <meta
      key="tw-desc"
      name="twitter:description"
      content="Forex, cfd trading on stocks, indices, oil and gold with the most advanced trading platforms. Trade with OQtima™, a licensed forex broker."
    />,
    <meta key="tw-img" name="twitter:image" content="/preview.jpeg" />,
  ]);
};

// Preload LCP images early in HTML head for optimal performance
// This ensures images are discoverable in initial document (required by PageSpeed Insights)
// Globe image is the LCP element, so it must be preloaded first in initial HTML
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  pathname,
}) => {
  const headComponents = getHeadComponents();
  const earlyHints = [];

  // Preload LCP images for homepage/main promotion pages
  // These must be in initial HTML, not added later by React/Helmet
  if (pathname === "/" || pathname.match(/^\/[a-z]{2}\/?$/)) {
    // Globe image is the LCP element - must be preloaded first
    earlyHints.push(
      <link
        key="preload-globe-image"
        rel="preload"
        as="image"
        href={GlobeImage}
        fetchpriority="high"
      />
    );
    // Hand image is also important for hero section
    earlyHints.push(
      <link
        key="preload-hand-image"
        rel="preload"
        as="image"
        href={HandImage}
        fetchpriority="high"
      />
    );
  }

  // Insert preload links at the very beginning of head components
  if (earlyHints.length > 0) {
    replaceHeadComponents([...earlyHints, ...headComponents]);
  }
};

export const wrapPageElement = ({ element }) => {
  // Don't remove the if statement, it will break everything!!!
  // Workaround to apply localization to layout content, plugin doesn't do this by default
  if (Object.keys(element.props).length !== 0) {
    const newElement = cloneElement(
      element,
      element.props,
      cloneElement(
        element.props.children,
        element.props.children.props,
        createElement(Layout, undefined, element.props.children.props.children)
      )
    );
    return newElement;
  }

  return element;
};
