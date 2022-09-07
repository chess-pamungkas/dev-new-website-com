import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/energies.svg";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TradingTicker from "../components/trading-ticker";
import energies from "../assets/images/top-markets/images/energies.png";
import TopMarketPromotion from "../components/top-market-promotion";
import animation from "../assets/images/animations/indices.json";
import PromotionMarkets from "../components/promotion-markets";
import TopMarketLayout from "../components/top-market-layout";
import TableComponent from "../components/shared/table";
import { COLUMNS_ENERGIES, DATA_ENERGIES } from "../helpers/top-market-tables";
import Faq from "../components/faq";
import { FAQ_ENERGIES } from "../helpers/faq";

const TEnergiesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-energies-title")} />
      <TopMarket
        title={t("energies_top-market-title")}
        image={image}
        btn1Title={t("energies_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("energies_top-market-btn2")}
        link2={REGISTRATION_LINK}
        isChildrenHasSmallSize
      >
        <HighlightedLocalizationText
          localizationText="energies_top-market-promo-text"
          wordsToHighlight="energies-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker title={t("energies_trading-ticker-title")} />
      <TopMarketPromotion
        className="energies-promotion"
        image={energies}
        btnTitle={t("energies_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="energies_top-market-promotion-promo-text"
          wordsToHighlight="energies-top-market-promotion-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        // TODO replace with the real animation
        animation={animation}
        animationStyle={{
          height: 300,
        }}
        btnTitle={t("energies_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="energies_promotion-markets-promo-text"
          wordsToHighlight="energies-promotion-markets-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
      <TopMarketLayout
        title={t("energies_top-market-layout-title")}
        btnTitle={t("energies_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_ENERGIES}
          columns={COLUMNS_ENERGIES}
          isWrapperPadding
          tip={
            <span>
              <span className="bold">*MIN</span>&nbsp;-&nbsp;{t("table-tip1")}
              &nbsp;
              <span className="bold">AVG</span>&nbsp;-&nbsp;{t("table-tip2")}
              &nbsp;
            </span>
          }
          isSearch
        />
      </TopMarketLayout>
      <Faq faq={FAQ_ENERGIES} />
    </Layout>
  );
};

export default TEnergiesPage;

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
