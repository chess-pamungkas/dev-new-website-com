import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import DataDeletionContent from "../components/pages-content/data-deletion-page-content";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const DataDeletionPage = () => {
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
      <Seo
        title={t("page-data-deletion-title")}
        description={t("page-data-deletion-description")}
      />
      <DataDeletionContent />
      <div id="captcha-placeholder" />
    </GoogleReCaptchaProvider>
  );
};

export default DataDeletionPage;

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
