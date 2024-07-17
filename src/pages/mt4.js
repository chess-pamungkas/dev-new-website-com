import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import Mt4PageContent from "../components/pages-content/mt4-page-content";

const MT4Page = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        fsaTitle={t("page-mt4-title")}
        fsaDescription={t("page-mt4-description")}
      />
      <Mt4PageContent />
    </>
  );
};

export default MT4Page;

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
