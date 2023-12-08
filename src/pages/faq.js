import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import HelpCenter from "../components/help-center";

const FaqPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo title={t("page-faq-title")} />
      <HelpCenter />
    </>
  );
};

export default FaqPage;

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
