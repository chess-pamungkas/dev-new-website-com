import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import Mt4PageContent from "../components/pages-content/mt4-page-content";

const MT4Page = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("page-mt4-title")}
        description={t("page-mt4-description")}
      />
      <Mt4PageContent />
    </Layout>
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
