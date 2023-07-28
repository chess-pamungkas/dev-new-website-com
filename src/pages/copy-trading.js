import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import CopyTradingPageContent from "../components/pages-content/copy-trading-page-content";

const CopyTradingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t("page-copy-trading-title")} />
      <CopyTradingPageContent />
    </>
  );
};

export default CopyTradingPage;

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
