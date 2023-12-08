import * as React from "react";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import Seo from "../components/shared/seo";
import { graphql } from "gatsby";
import NotFoundContent from "../components/pages-content/not-found-page-content";

const NotFoundPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo title={t("system-page-404-title")} />
      <NotFoundContent />
    </>
  );
};

export default NotFoundPage;

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
