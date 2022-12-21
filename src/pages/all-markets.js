import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import AllMarkets from "../components/all-markets";
import MarketItemsList from "../components/all-markets/components/market-items-list";

const AllMarketsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("page-allmarkets-title")}
        description={t("page-allmarkets-description")}
      />
      <AllMarkets />
      <MarketItemsList />
    </Layout>
  );
};

export default AllMarketsPage;

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
