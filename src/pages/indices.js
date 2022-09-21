import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import indicesSvg from "../assets/images/top-markets/indices.svg";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TradingTicker from "../components/trading-ticker";
import TopMarketLayout from "../components/top-market-layout";
import TableComponent from "../components/shared/table";
import { COLUMNS_INDICES, DATA_INDICES } from "../helpers/top-market-tables";
import Faq from "../components/faq";
import { FAQ_INDICES } from "../helpers/faq";
import animation from "../assets/images/animations/indices.json";
import PromotionMarkets from "../components/promotion-markets";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import indices from "../assets/images/top-markets/images/indices.svg";
import TopMarketPromotion from "../components/top-market-promotion";

const IndicesPage = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isLG, isXL } = useWindowSize();

  const getAnimationStyles = useCallback(() => {
    switch (true) {
      case isXL:
        return { height: 536 };
      case isLG:
        return { height: 311 };
      case isTablet:
        return { height: 383 };
      case isMobile:
        return { height: 276 };
      default:
        return { height: 276 };
    }
  }, [isMobile, isTablet, isLG, isXL]);

  return (
    <Layout>
      <Seo title={t("page-indices-title")} />
      <TopMarket
        title={
          <HighlightedLocalizationText
            localizationText="indices_top-market-title"
            wordsToHighlight="indices-top-market-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
        isChildrenHasSmallSize
        image={indicesSvg}
        btn1Title={t("indices_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("indices_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="indices_top-market-promo-text"
          wordsToHighlight="indices-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker title={t("indices_trading-ticker-title")} />
      <TopMarketPromotion
        className="indices-promotion"
        image={indices}
        btnTitle={t("indices_top-market-promo-btn")}
        link={REGISTRATION_LINK}
        note={t("indices_top-market-promotion-promo-note")}
      >
        <HighlightedLocalizationText
          localizationText="indices_top-market-promotion-promo-text"
          wordsToHighlight="indices-top-market-promotion-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        animation={animation}
        animationStyle={getAnimationStyles()}
        btnTitle={t("indices_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="indices_promotion-markets-promo-text-1"
          wordsToHighlight="indices-promotion-markets-promo-text-accent-1"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="indices_promotion-markets-promo-text-2"
          wordsToHighlight="indices-promotion-markets-promo-text-accent-2"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="indices_promotion-markets-promo-text-3"
          wordsToHighlight="indices-promotion-markets-promo-text-accent-3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="indices_promotion-markets-promo-text-4"
          wordsToHighlight="indices-promotion-markets-promo-text-accent-4"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="indices_promotion-markets-promo-text-5"
          wordsToHighlight="indices-promotion-markets-promo-text-accent-5"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="indices_promotion-markets-promo-text-6"
          wordsToHighlight="indices-promotion-markets-promo-text-accent-6"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="indices_promotion-markets-promo-text-7"
          wordsToHighlight="indices-promotion-markets-promo-text-accent-7"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
      <TopMarketLayout
        title={t("indices_top-market-layout-title")}
        btnTitle={t("indices_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_INDICES}
          columns={COLUMNS_INDICES}
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
      <Faq faq={FAQ_INDICES} />
    </Layout>
  );
};

export default IndicesPage;

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
