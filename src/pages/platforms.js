import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import PlatformsPageContent from "../components/pages-content/platforms-page-content";

const PlatformsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("page-platforms-title")}
        description={t("page-platforms-description")}
      />
      <PlatformsPageContent />
    </>
  );
};

export default PlatformsPage;

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
