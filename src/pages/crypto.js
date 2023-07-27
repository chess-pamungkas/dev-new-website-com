import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import CryptoContent from "../components/pages-content/crypto-content";
import PageLayout from "../components/shared/page-layout";

const CryptoPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo
        fsaTitle={t("page-crypto-title-fsa")}
        cysecTitle={t("system-page-404-title")}
        fsaDescription={t("page-crypto-description-fsa")}
        cysecDescription={""}
      />
      <CryptoContent />
    </PageLayout>
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
