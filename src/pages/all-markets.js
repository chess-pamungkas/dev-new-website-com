import React, { useState, useContext, useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import AllMarkets from "../components/all-markets";
import {
  CYSEC_ALL_MARKETS,
  FSA_ALL_MARKETS,
} from "../helpers/all-markets.config";
import MarketItem from "../components/all-markets/components/market-item";
import ClientResolverContext from "../context/client-resolver-context";
import entities from "../enums/entities";

const AllMarketsPage = () => {
  const { t } = useTranslation();
  const [markets, setMarkets] = useState([]);
  const { currentEntity } = useContext(ClientResolverContext);

  useEffect(() => {
    setMarkets(
      currentEntity === entities.CYSEC ? CYSEC_ALL_MARKETS : FSA_ALL_MARKETS
    );
  }, [currentEntity]);

  return (
    <Layout>
      <Seo title={t("page-allmarkets-title")} />
      <AllMarkets />
      {markets.map((item) => (
        <MarketItem {...item} />
      ))}
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
