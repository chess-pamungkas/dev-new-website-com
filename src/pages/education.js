import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Seo from "../components/shared/seo";
import { graphql } from "gatsby";
import EducationPageContent from "../components/pages-content/education-page-content";
import PageLayout from "../components/shared/page-layout";

const EducationPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo title={t("page-education-title")} />
      <EducationPageContent />
    </PageLayout>
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
