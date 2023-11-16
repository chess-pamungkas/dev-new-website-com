import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import NotFoundContent from "../components/pages-content/not-found-page-content";
import { isCySEC } from "../helpers/entity-resolver";
import SwapFreeContent from "../components/pages-content/swap-free-page-content";

const SwapFreePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        fsaTitle={t("page-swap-free-title")}
        cysecTitle={t("system-page-404-title")}
        fsaDescription={t("page-swap-free-description")}
        cysecRobots={"noindex"}
      />
      {isCySEC ? <NotFoundContent /> : <SwapFreeContent />}
    </>
  );
};

export default SwapFreePage;

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
