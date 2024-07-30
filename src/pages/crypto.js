import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import CryptoContent from "../components/pages-content/crypto-content";

const CryptoPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        fsaTitle={t("page-crypto-title-fsa")}
        fsaDescription={t("page-crypto-description-fsa")}
      />
      <CryptoContent />
    </>
  );
};

export default CryptoPage;

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
