import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import CryptoContent from "../components/pages-content/crypto-content";
import NotFoundContent from "../components/pages-content/not-found-page-content";
import { isCySEC } from "../helpers/entity-resolver";

const CryptoPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        fsaTitle={t("page-crypto-title-fsa")}
        cysecTitle={t("system-page-404-title")}
        fsaDescription={t("page-crypto-description-fsa")}
        cysecRobots={"noindex"}
      />
      {isCySEC ? <NotFoundContent /> : <CryptoContent />}
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
