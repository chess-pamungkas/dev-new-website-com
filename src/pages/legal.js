import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import LegalContent from "../components/pages-content/legal-content";
import PageLayout from "../components/shared/page-layout";

const LegalPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo title={t("page-legal-title")} />
      <LegalContent />
    </PageLayout>
  );
};

export default LegalPage;

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
