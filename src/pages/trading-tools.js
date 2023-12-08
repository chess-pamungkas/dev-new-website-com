import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import TradingToolsPageContent from "../components/pages-content/trading-tools-page-content";

const TradingToolsPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo title={t("page-trading-tools-title")} />
      <TradingToolsPageContent />
    </>
  );
};

export default TradingToolsPage;

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
