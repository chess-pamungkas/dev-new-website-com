import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import TradingViewPageContent from "../components/pages-content/trading-view-page-content";

const TradingViewPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-trading-view-title")} />
      <TradingViewPageContent />
    </Layout>
  );
};

export default TradingViewPage;

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
