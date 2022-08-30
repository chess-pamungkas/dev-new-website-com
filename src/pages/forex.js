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
      title: "For Standard Accounts",
      content: (
        <TableComponent
          data={DATA_FOREX}
          columns={COLUMNS_FOREX}
          isPagination
          isSearch
          isSorting
        />
      ),
    },
    {
      id: 2,
      title: "For Micro Accounts",
      content: <></>,
    },
    {
      id: 3,
      title: "For Swap Free Standard Accounts",
      content: <></>,
    },
    {
      id: 4,
      title: "For Swap Free Micro Accounts",
      content: <></>,
    },
    {
      id: 5,
      title: "For Swap Ultra Low Standard Accounts",
      content: <></>,
    },
    {
      id: 6,
      title: "For Swap Ultra Low Micro Accounts",
      content: <></>,
    },
  ];

  return (
    <Layout>
      <Seo title={t("page-forex-title")} />
      <TopMarket
        title="Forex CFD"
        image={image}
        btn1Title="Try our demo account"
        link1={REGISTRATION_LINK}
        btn2Title="Start trading FX now"
        link2={REGISTRATION_LINK}
      >
        {FOREX_TEXT}
      </TopMarket>
      <TradingTicker title="Popular currency pairs" />
      <TopMarketPromotion
        className="forex-promotion"
        // TODO replace with a real image
        image={forex}
        btnTitle="Start trading forex CFD"
        link={REGISTRATION_LINK}
      >
        {PROMO_TEXT_FOREX}
      </TopMarketPromotion>
      <PromotionMarkets
        // TODO replace with responsive images
        animation={isMobile ? animation : animation}
        promoText={PROMOTION_TEXT_FOREX}
      />
      <TopMarketLayout
        title="Forex Trading Spreads / Conditions"
        btnTitle="Try Oqtima"
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
