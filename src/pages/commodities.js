import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import { COMMODITIES_TEXT } from "../helpers/top-market-texts";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";

const CommoditiesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-commodities-title")} />
      <TopMarket
        title="Commodities"
        image={image}
        btn1Title="Try our demo account"
        link1={REGISTRATION_LINK}
        btn2Title="Start trading FX now"
        link2={REGISTRATION_LINK}
      >
        {COMMODITIES_TEXT}
      </TopMarket>
    </Layout>
  );
};

export default CommoditiesPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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
