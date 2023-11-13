import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import VPSContent from "../components/pages-content/vps-page-content";

const VPSPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("page-vps-title")}
        description={t("page-vps-description")}
      />
      <VPSContent />
    </>
  );
};

export default VPSPage;

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
