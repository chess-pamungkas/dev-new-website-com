import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import DataDeletionContent from "../components/pages-content/data-deletion-page-content";
import NotFoundContent from "../components/pages-content/not-found-page-content";
import { isCySEC } from "../helpers/entity-resolver";

const DataDeletionPage = () => {
  const { t } = useTranslation();

  return (
    <>
    <Seo
      fsaTitle={t("page-data-deletion-title")}
      cysecTitle={t("system-page-404-title")}
      fsaDescription={t("page-data-deletion-description")}
    />
    {isCySEC ? <NotFoundContent /> : <DataDeletionContent />}
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
