import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import MetalsContent from "../components/pages-content/metals-page-content";

const MetalsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("page-metals-title")}
        description={t("page-metals-description")}
      />
      <MetalsContent />
    </>
  );
};

export default MetalsPage;

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
