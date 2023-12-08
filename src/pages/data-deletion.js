import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import DataDeletionContent from "../components/pages-content/data-deletion-page-content";

const DataDeletionPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
    <Seo
      title={t("page-data-deletion-title")}
      description={t("page-data-deletion-description")}
    />
    <DataDeletionContent />
  </>
  );
};

export default DataDeletionPage;

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
