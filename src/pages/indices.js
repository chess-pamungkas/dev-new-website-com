import React from "react";
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
import { DATA_INDICES } from "../helpers/top-market-tables";
import Faq from "../components/faq";
import { FAQ_INDICES } from "../helpers/faq";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import indices from "../assets/images/top-markets/images/indices.svg";
import TopMarketPromotion from "../components/top-market-promotion";
import StaticImages from "../components/promotion-markets/static-images";
import MarketingImage from "../assets/images/bg/promotions/indices/indices@2x.png";
import animation from "../assets/images/bg/promotions/indices/indices.json";
import { INDICES_TRADING_SECTION } from "../helpers/config";

const IndicesPage = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const COLUMNS_INDICES = [
    {
      id: "group1",
      Header: "",
      columns: [
        {
          Header: "",
          accessor: "col1",
        },
      ],
    },
    {
      id: "group2",
      Header: t("oqtima-ecn-account"),
      columns: [
        {
          Header: "Min",
          accessor: "col2",
        },
        {
          Header: "Avg",
          accessor: "col3",
        },
      ],
    },
    {
      id: "group3",
      Header: t("oqtima-one-account"),
      columns: [
        {
          Header: "Min",
          accessor: "col4",
        },
        {
          Header: "Avg",
          accessor: "col5",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Seo
        title={t("page-indices-title")}
        description={t("page-indices-description")}
      />
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
      <TradingTicker
        title={t("indices_trading-ticker-title")}
        pageSpecificSection={INDICES_TRADING_SECTION}
      />
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
      <StaticImages
        image={MarketingImage}
        height={isMobile ? 400 : 800}
        animation={animation}
      />
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
