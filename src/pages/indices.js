import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import IndicesContent from "../components/pages-content/indices-page-content";

const IndicesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("page-indices-title")}
        description={t("page-indices-description")}
      />
      <IndicesContent />
    </>
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
