import React, { cloneElement, createElement } from "react";
import Layout from "./src/components/shared/layout";

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
  ]);
  setPostBodyComponents([
    <script
      key="live-chat"
      defer
      id="convrs-webchat"
      src={process.env.GATSBY_CONVRS_LIVECHAT}
    />,
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
  setHeadComponents([
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

// Inject preload and preconnect links early in head for optimal performance
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  pathname,
}) => {
  const headComponents = getHeadComponents();
  const earlyHints = [];

  // Preconnect hints - add these first for maximum impact
  const apiUrl = process.env.GATSBY_OQTIMA_API_URL;

  // Preconnect to API backend (600ms LCP savings per Lighthouse)
  // Use GATSBY_OQTIMA_API_URL from environment variable for each environment
  if (apiUrl) {
    try {
      const apiUrlObj = new URL(apiUrl);
      earlyHints.push(
        <link
          key="preconnect-api"
          rel="preconnect"
          href={apiUrlObj.origin}
          crossOrigin="anonymous"
        />,
        <link
          key="dns-prefetch-api"
          rel="dns-prefetch"
          href={apiUrlObj.origin}
        />
      );
    } catch (e) {
      // Invalid URL, skip silently
    }
  }

  // Preconnect to MetaTrader widget (critical for widget.js)
  earlyHints.push(
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
  earlyHints.push(
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

  // Preconnect to Trustpilot widget (in critical path)
  earlyHints.push(
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

  // Preload LCP image for homepage/main promotion pages
  if (pathname === "/" || pathname.match(/^\/[a-z]{2}\/?$/)) {
    earlyHints.push(
      <link
        key="preload-globe-image"
        rel="preload"
        as="image"
        href="/static/globe-9221a3a2c6689b620d91ba9459b8acc4.svg"
      />
    );
  }

  // Insert all early hints at the very beginning of head components
  replaceHeadComponents([...earlyHints, ...headComponents]);
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
