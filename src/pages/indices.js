import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import IndicesContent from "../components/pages-content/indices-page-content";

const IndicesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("page-indices-title")}
        description={t("page-indices-description")}
      />
      <IndicesContent />
    </Layout>
  );
};

export default IndicesPage;

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
