import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import ProfessionalQualificationPageContent from "../components/pages-content/professional-qualification-page-content";

const ProfessionalQualificationPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("page-professional-qualification-title")}
        description={t("page-professional-qualification-description")}
      />
      <ProfessionalQualificationPageContent />
    </Layout>
  );
};

export default ProfessionalQualificationPage;

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
