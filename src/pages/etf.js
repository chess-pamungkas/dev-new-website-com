import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import ETFContent from "../components/pages-content/etf-page-content";

const ETFPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("page-etf-title")}
        description={t("page-etf-description")}
      />
      <ETFContent />
    </>
  );
};

export default ETFPage;

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
