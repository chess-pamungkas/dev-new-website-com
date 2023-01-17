import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/shares.svg";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TradingTicker from "../components/trading-ticker";
import shares from "../assets/images/top-markets/images/shares.svg";
import TopMarketPromotion from "../components/top-market-promotion";
import animation from "../assets/images/animations/shares.json";
import PromotionMarkets from "../components/promotion-markets";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import TableComponent from "../components/shared/table";
import { COLUMNS_SHARES, DATA_SHARES } from "../helpers/top-market-tables";
import TopMarketLayout from "../components/top-market-layout";
import Faq from "../components/faq";
import { FAQ_SHARES } from "../helpers/faq";
import { SHARES_TRADING_SECTION } from "../helpers/config";

const SharesPage = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  return (
    <Layout>
      <Seo
        title={t("page-shares-title")}
        description={t("page-shares-description")}
      />
      <TopMarket
        title={t("shares_top-market-title")}
        image={image}
        isChildrenHasSmallSize
        btn1Title={t("shares_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("shares_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="shares_top-market-promo-text"
          wordsToHighlight="shares-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker
        title={t("shares_trading-ticker-title")}
        pageSpecificSection={SHARES_TRADING_SECTION}
        isInfiniteAutoScroll={true}
      />
      <TopMarketPromotion
        className="shares-promotion"
        image={shares}
        btnTitle={t("shares_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="shares_top-market-promotion-promo-text"
          wordsToHighlight="shares-top-market-promotion-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        className="promotion-markets--shares"
        animation={animation}
        animationStyle={{
          height: isMobile ? 301 : 473,
        }}
        btnTitle={t("shares_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-1"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-1"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-2"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-2"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-3"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-4"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-4"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-5"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-5"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-6"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-6"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-7"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-7"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
      <TopMarketLayout
        title={t("shares_top-market-layout-title")}
        btnTitle={t("shares_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_SHARES}
          columns={COLUMNS_SHARES}
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

      <Faq faq={FAQ_SHARES} />
    </Layout>
  );
};

export default SharesPage;

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
