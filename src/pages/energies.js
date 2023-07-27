import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import EnergiesContent from "../components/pages-content/energies-page-content";
import PageLayout from "../components/shared/page-layout";

const EnergiesPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo
        title={t("page-energies-title")}
        description={t("page-energies-description")}
      />
      <EnergiesContent />
    </PageLayout>
  );
};

export default EnergiesPage;

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
