import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import CareerContent from "../components/pages-content/career-content";

const CareerPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-career-title")} />
      <CareerContent />
    </Layout>
  );
};

export default CareerPage;

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
