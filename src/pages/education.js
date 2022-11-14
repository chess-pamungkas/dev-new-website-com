import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Seo from "../components/shared/seo";
import Layout from "../components/shared/layout";
import { graphql } from "gatsby";
import EducationPageContent from "../components/pages-content/education-page-content";

const EducationPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-education-title")} />
      <EducationPageContent />
    </Layout>
  );
};

export default EducationPage;

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
