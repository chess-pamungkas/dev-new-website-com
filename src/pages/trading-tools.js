import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import TradingToolsPageContent from "../components/pages-content/trading-tools-page-content";
import PageLayout from "../components/shared/page-layout";

const TradingToolsPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo title={t("page-trading-tools-title")} />
      <TradingToolsPageContent />
    </PageLayout>
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
