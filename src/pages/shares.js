import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import SharesContent from "../components/pages-content/shares-content";

const SharesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("page-shares-title")}
        description={t("page-shares-description")}
      />
      <SharesContent />
    </>
  );
};

export default SharesPage;

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
