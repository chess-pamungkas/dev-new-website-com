import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import EnergiesContent from "../components/pages-content/energies-page-content";

const EnergiesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("page-energies-title")}
        description={t("page-energies-description")}
      />
      <EnergiesContent />
    </Layout>
  );
};

export default EnergiesPage;

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
