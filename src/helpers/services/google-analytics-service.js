import { isBrowser } from "./is-browser";

export const sendClickEventToGA = (e, forceGA = false) => {
  if (isBrowser() && window.gtag) {
    if (forceGA) {
      window[`ga-disable-${process.env.GATSBY_GA}`] = false;
    }
    window.gtag("event", "click", {
      event_category: `${window.location.pathname}-button`,
      event_label: e.target.className,
      btn_text: e.target.innerText,
    });
  }
};
