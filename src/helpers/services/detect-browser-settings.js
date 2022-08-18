export const detectBrowserLanguage = () =>
  {
    var language = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language;
    return language.substring(0, 2);
  }
