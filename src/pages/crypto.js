import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import CryptoContent from "../components/pages-content/crypto-content";
import { useEntityPostfix } from "../helpers/use-entity-postfix";
import NotFoundContent from "../components/pages-content/not-found-page-content";

const CryptoPage = () => {
  const { t } = useTranslation();
  const { isCySEC } = useEntityPostfix();

  return (
    <Layout>
      <Seo
        title={t(isCySEC ? "system-page-404-title" : "page-crypto-title")}
        description={t(isCySEC ? "" : "page-crypto-description")}
      />
      {isCySEC ? <NotFoundContent /> : <CryptoContent />}
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
