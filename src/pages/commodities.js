import React from "react";
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import {REGISTRATION_LINK} from "../helpers/constants";
import image from "../assets/images/top-markets/commodities.svg";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import {useWindowSize} from "../helpers/hooks/use-window-size";
import TradingTicker from "../components/trading-ticker";
import commodities from "../assets/images/top-markets/images/commodities.png";
import TopMarketPromotion from "../components/top-market-promotion";
import animation from "../assets/images/animations/crypto.json";
import PromotionMarkets from "../components/promotion-markets";
import TopMarketLayout from "../components/top-market-layout";
import TableComponent from "../components/shared/table";
import {COLUMNS_COMMODITIES, DATA_COMMODITIES} from "../helpers/top-market-tables";
import Faq from "../components/faq";
import {FAQ_COMMODITIES} from "../helpers/faq";

const CommoditiesPage = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

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
      <TradingTicker title={t("commodities_trading-ticker-title")} />
      <TopMarketPromotion
        className="commodities-promotion"
        image={commodities}
        btnTitle={t("commodities_top-market-promo-btn")}
        link={REGISTRATION_LINK}
        note={t("commodities_top-market-promotion-promo-note")}
      >
        <HighlightedLocalizationText
          localizationText="commodities_top-market-promotion-promo-text"
          wordsToHighlight="commodities-top-market-promotion-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        //TODO replace with the real animation
        animation={animation}
        animationStyle={{
          height: isMobile ? 301 : 473,
        }}
        btnTitle={t("commodities_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="commodities_promotion-markets-promo-text"
          wordsToHighlight="commodities-promotion-markets-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
      <TopMarketLayout
        title={t("commodities_top-market-layout-title")}
        btnTitle={t("commodities_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_COMMODITIES}
          columns={COLUMNS_COMMODITIES}
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

      <Faq faq={FAQ_COMMODITIES} />
    </Layout>
  );
};

export default CommoditiesPage;

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
