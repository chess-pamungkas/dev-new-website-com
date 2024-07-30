import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import TestChessContent from "../components/pages-content/test-chess-content";

const TestChess = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        fsaTitle={t("test-chess-title")}
        fsaDescription={t("test-chess-description")}
      />
      <TestChessContent />
    </>
  );
};

export default TestChess;

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
