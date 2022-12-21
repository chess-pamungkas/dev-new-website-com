import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import Mt5PageContent from "../components/pages-content/mt5-page-content";

const MT5Page = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("page-mt5-title")}
        description={t("page-mt5-description")}
      />
      <Mt5PageContent />
    </Layout>
  );
};

export default MT5Page;

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
