import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/forex.svg";
import { FOREX_TEXT, PROMOTION_TEXT_FOREX } from "../helpers/top-market-texts";
import Layout from "../components/shared/layout";
import Tabs from "../components/shared/tabs";
import TableComponent from "../components/shared/table";
import Faq from "../components/faq";
import { FAQ_FOREX } from "../helpers/faq";
import { COLUMNS_FOREX, DATA_FOREX } from "../helpers/top-market-tables";
import PromotionMarkets from "../components/promotion-markets";
import animation from "../assets/images/animations/forex.json";
import TopMarketLayout from "../components/top-market-layout";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import Seo from "../components/shared/seo";
import forex from "../assets/images/promotions/promo1.svg";
import { PROMO_TEXT_FOREX } from "../helpers/promo-texts";
import TopMarketPromotion from "../components/top-market-promotion";
import TradingTicker from "../components/trading-ticker";

const ForexPage = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const tabs = [
    {
      id: 1,
      title: "Major",
      content: (
        <TableComponent
          data={DATA_FOREX}
          columns={COLUMNS_FOREX}
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
      ),
    },
    {
      id: 2,
      title: "Minor",
      content: (
        <TableComponent
          data={DATA_FOREX}
          columns={COLUMNS_FOREX}
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
      ),
    },
    {
      id: 3,
      title: "Exotic",
      content: (
        <TableComponent
          data={DATA_FOREX}
          columns={COLUMNS_FOREX}
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
      ),
    },
  ];

  return (
    <Layout>
      <Seo title={t("page-forex-title")} />
      <TopMarket
        title={t("forex_top-market-title")}
        image={image}
        btn1Title={t("forex_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("forex_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        {FOREX_TEXT}
      </TopMarket>
      <TradingTicker title={t("forex_trading-ticker-title")} />
      <TopMarketPromotion
        className="forex-promotion"
        // TODO replace with a real image
        image={forex}
        btnTitle={t("forex_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        {PROMO_TEXT_FOREX}
      </TopMarketPromotion>
      <PromotionMarkets
        animation={animation}
        animationStyle={{
          height: isMobile ? 246 : 382,
        }}
        promoText={PROMOTION_TEXT_FOREX}
      />
      <TopMarketLayout
        title={t("forex_top-market-layout-title")}
        btnTitle={t("forex_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <Tabs tabList={tabs} />
      </TopMarketLayout>

      <Faq faq={FAQ_FOREX} />
    </Layout>
  );
};

export default ForexPage;

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
