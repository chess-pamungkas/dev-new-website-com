import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/commodities.svg";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import TradingTicker from "../components/trading-ticker";
import commodities from "../assets/images/top-markets/images/commodities.svg";
import TopMarketPromotion from "../components/top-market-promotion";
import animation from "../assets/images/animations/commodities.json";
import PromotionMarkets from "../components/promotion-markets";
import TopMarketLayout from "../components/top-market-layout";
import TableComponent from "../components/shared/table";
import { COLUMNS_METALS, DATA_METALS } from "../helpers/top-market-tables";
import Faq from "../components/faq";
import { FAQ_METALS } from "../helpers/faq";

const MetalsPage = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  return (
    <Layout>
      <Seo
        title={t("page-metals-title")}
        description={t("page-metals-description")}
      />
      <TopMarket
        title={t("metals_top-market-title")}
        image={image}
        btn1Title={t("metals_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("metals_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="metals_top-market-promo-text"
          wordsToHighlight="metals-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker title={t("metals_trading-ticker-title")} />
      <TopMarketPromotion
        className="commodities-promotion"
        image={commodities}
        btnTitle={t("metals_top-market-promo-btn")}
        link={REGISTRATION_LINK}
        note={t("metals_top-market-promotion-promo-note")}
      >
        <HighlightedLocalizationText
          localizationText="metals_top-market-promotion-promo-text"
          wordsToHighlight="metals-top-market-promotion-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        animation={animation}
        animationStyle={{
          height: isMobile ? 228 : 448,
        }}
        btnTitle={t("metals_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="metals_promotion-markets-promo-text-1"
          wordsToHighlight="metals-promotion-markets-promo-text-accent-1"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="metals_promotion-markets-promo-text-2"
          wordsToHighlight="metals-promotion-markets-promo-text-accent-2"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="metals_promotion-markets-promo-text-3"
          wordsToHighlight="metals-promotion-markets-promo-text-accent-3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="metals_promotion-markets-promo-text-4"
          wordsToHighlight="metals-promotion-markets-promo-text-accent-4"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="metals_promotion-markets-promo-text-5"
          wordsToHighlight="metals-promotion-markets-promo-text-accent-5"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="metals_promotion-markets-promo-text-6"
          wordsToHighlight="metals-promotion-markets-promo-text-accent-6"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="metals_promotion-markets-promo-text-7"
          wordsToHighlight="metals-promotion-markets-promo-text-accent-7"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
      <TopMarketLayout
        title={t("metals_top-market-layout-title")}
        btnTitle={t("metals_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_METALS}
          columns={COLUMNS_METALS}
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

      <Faq faq={FAQ_METALS} />
    </Layout>
  );
};

export default MetalsPage;

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
