const LANG_CODE_CHARS_COUNT = 2;

export const detectBrowserLanguage = () => {
  const language =
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language;
  return language.substring(0, LANG_CODE_CHARS_COUNT);
};
