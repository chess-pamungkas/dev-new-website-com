import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import VPSContent from "../components/pages-content/vps-page-content";

const VPSPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        fsaTitle={t("page-vps-title")}
        fsaDescription={t("page-vps-description")}
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
