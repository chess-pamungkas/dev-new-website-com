// reCAPTCHA Configuration
export const getRecaptchaConfig = () => {
  // Try multiple sources for the reCAPTCHA key
  const recaptchaKey =
    process.env.GOOGLE_CAPTCHA_SITE_KEY ||
    process.env.GATSBY_GOOGLE_CAPTCHA_SITE_KEY ||
    process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY;

  console.log("reCAPTCHA Configuration:", {
    key: recaptchaKey ? "Available" : "Not Available",
    environment: process.env.NODE_ENV,
    domain: typeof window !== "undefined" ? window.location.hostname : "server",
    sources: {
      GOOGLE_CAPTCHA_SITE_KEY: !!process.env.GOOGLE_CAPTCHA_SITE_KEY,
      GATSBY_GOOGLE_CAPTCHA_SITE_KEY:
        !!process.env.GATSBY_GOOGLE_CAPTCHA_SITE_KEY,
      REACT_APP_GOOGLE_CAPTCHA_SITE_KEY:
        !!process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY,
    },
  });

  return {
    siteKey: recaptchaKey,
    isAvailable: !!recaptchaKey,
  };
};
