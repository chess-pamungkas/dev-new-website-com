import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import CryptoContent from "../components/pages-content/crypto-content";

const CryptoPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        fsaTitle={t("page-crypto-title-fsa")}
        cysecTitle={t("system-page-404-title")}
        fsaDescription={t("page-crypto-description-fsa")}
        cysecDescription={""}
      />
      <CryptoContent />
    </Layout>
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
