import React from "react";
import { graphql } from "gatsby";
// import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import Mt4WebTraderLink from "../components/mt4-webtrader";

const MT4WebTraderPage = () => {
  // const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={"MT4 Web Trader"} description={"need description"} />
      <Mt4WebTraderLink />
    </Layout>
  );
};

export default MT4WebTraderPage;

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
