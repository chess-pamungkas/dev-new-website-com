import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import Seo from "../components/shared/seo";
import TopMarket from "../components/top-market";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import image from "../assets/images/about-pages/contact-us.svg";
import ContactUs from "../components/contact-us";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ContactUsPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY}
      container={{
        element: "captcha-placeholder",
        parameters: {
          badge: "bottomleft",
          theme: "light",
        },
      }}
    >
      <Seo title={t("page-contact-title")} />
      <TopMarket
        title={
          <HighlightedLocalizationText
            localizationText="contact-us_top-market-title"
            wordsToHighlight="contact-us_top-market-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
        image={image}
      >
        <HighlightedLocalizationText
          localizationText="contact-us_top-market-promo-text"
          wordsToHighlight="contact-us-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <ContactUs />
      <div id="captcha-placeholder" />
    </GoogleReCaptchaProvider>
  );
};

export default ContactUsPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
