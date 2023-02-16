import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import WebTraderLink from "../components/mt5-web-trader";

const MT5WebTraderPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("page-MT5-web-trader-title")}
        description={t("page-MT5-web-trader-description")}
      />
      <WebTraderLink />
    </Layout>
  );
};

export default MT5WebTraderPage;

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
