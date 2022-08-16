export const detectBrowserLanguage = () =>
  (window.navigator.languages && window.navigator.languages[0]) ||
  window.navigator.language;
