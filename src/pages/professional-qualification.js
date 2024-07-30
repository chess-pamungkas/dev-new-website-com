import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import ProfessionalQualificationPageContent from "../components/pages-content/professional-qualification-page-content";

const ProfessionalQualificationPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        fsaTitle={t("page-professional-qualification-title")}
        fsaDescription={t("page-professional-qualification-description")}
      />
      <ProfessionalQualificationPageContent />
    </>
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
