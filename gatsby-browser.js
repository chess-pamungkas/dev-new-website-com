import { cloneElement, createElement } from "react";
import Layout from "./src/components/shared/layout";

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

// Service Worker management
if ("serviceWorker" in navigator) {
  if (process.env.NODE_ENV === "development") {
    // In development, unregister any existing service workers
    window.addEventListener("load", () => {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
          console.log("Service Worker unregistered for development");
        });
      });
    });
  } else {
    // In production, register the service worker
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((registrationError) => {
          console.log("Service Worker registration failed:", registrationError);
        });
    });
  }
}

const scheduleConvrsWidgetLoad = () => {
  if (typeof window === "undefined") return;
  if (window.__OQTIMA_CONVRS_LOADING__) return;

  const loadScript = () => {
    if (document.getElementById("convrs-webchat")) return;
    const src = process.env.GATSBY_CONVRS_LIVECHAT;
    if (!src) return;

    const script = document.createElement("script");
    script.id = "convrs-webchat";
    script.src = src;
    script.async = true;
    script.setAttribute("data-loaded-late", "true");
    document.body.appendChild(script);
  };

  const requestIdle = window.requestIdleCallback
    ? (cb) => window.requestIdleCallback(cb, { timeout: 5000 })
    : (cb) => setTimeout(cb, 1500);

  const triggerLoad = () => {
    if (window.__OQTIMA_CONVRS_LOADING__) return;
    window.__OQTIMA_CONVRS_LOADING__ = true;
    requestIdle(loadScript);
  };

  if (document.readyState === "complete") {
    triggerLoad();
  } else {
    window.addEventListener("load", triggerLoad, { once: true });
  }
};

export const onClientEntry = () => {
  scheduleConvrsWidgetLoad();
};

export const onRouteUpdate = () => {
  scheduleConvrsWidgetLoad();
};
