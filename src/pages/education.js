import React from "react";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import Seo from "../components/shared/seo";
import { graphql } from "gatsby";
import EducationPageContent from "../components/pages-content/education-page-content";

const EducationPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo title={t("page-education-title")} />
      <EducationPageContent />
    </>
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
