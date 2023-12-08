import React from "react";
import { graphql } from "gatsby";

import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";

import Seo from "../components/shared/seo";

import FundingPageContent from "../components/pages-content/funding-page-content";

const FundingPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        title={t("page-withdrawal-title")}
        description={t("page-withdrawal-description")}
      />
      <FundingPageContent />
    </>
  );
};

export default FundingPage;

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
