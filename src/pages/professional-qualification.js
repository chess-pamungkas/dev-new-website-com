import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import ProfessionalQualificationPageContent from "../components/pages-content/professional-qualification-page-content";
import { isCySEC } from "../helpers/entity-resolver";
import NotFoundContent from "../components/pages-content/not-found-page-content";

const ProfessionalQualificationPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        fsaTitle={t("system-page-404-title")}
        cysecTitle={t("page-professional-qualification-title")}
        cysecDescription={t("page-professional-qualification-description")}
        fsaRobots={"noindex"}
      />
      {isCySEC ? <ProfessionalQualificationPageContent /> : <NotFoundContent />}
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
