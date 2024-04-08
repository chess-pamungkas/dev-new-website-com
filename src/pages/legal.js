import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import LegalContent from "../components/pages-content/legal-content";
import { isCySEC } from "../helpers/entity-resolver";
import LegalContentGlobal from "../components/pages-content/legal-global-content";

const LegalPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo title={t("page-legal-title")} />
      {isCySEC ? <LegalContent /> : <LegalContentGlobal />}
    </>
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
