import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import SpreadsAndFeesPageContent from "../components/pages-content/spreads-and-fees-page-content";

const SpreadsFeesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("page-spreads-title")}
        description={t("page-spreads-description")}
      />
      <SpreadsAndFeesPageContent />
    </>
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
