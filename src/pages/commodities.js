import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";

const CommoditiesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-commodities-title")} />
      <TopMarket
        title={t("commodities_top-market-title")}
        image={image}
        btn1Title={t("commodities_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("commodities_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="commodities_top-market-promo-text"
          wordsToHighlight="commodities-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
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
