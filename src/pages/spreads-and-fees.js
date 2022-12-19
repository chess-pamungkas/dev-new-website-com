import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import SpreadsAndFeesPageContent from "../components/pages-content/spreads-and-fees-page-content";

const SpreadsFeesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("page-spreads-title")}
        description={t("page-spreads-description")}
      />
      <SpreadsAndFeesPageContent />
    </Layout>
  );
};

export default SpreadsFeesPage;

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
