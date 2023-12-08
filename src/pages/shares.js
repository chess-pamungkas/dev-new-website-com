import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import SharesContent from "../components/pages-content/shares-content";

const SharesPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        title={t("page-shares-title")}
        description={t("page-shares-description")}
      />
      <SharesContent />
    </>
  );
};

export default SharesPage;

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
