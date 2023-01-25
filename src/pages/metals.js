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
import TradingTicker from "../components/trading-ticker";
import commodities from "../assets/images/top-markets/images/commodities.svg";
import TopMarketPromotion from "../components/top-market-promotion";
import TopMarketLayout from "../components/top-market-layout";
import TableComponent from "../components/shared/table";
import { DATA_METALS } from "../helpers/top-market-tables";
import Faq from "../components/faq";
import { FAQ_METALS } from "../helpers/faq";
import animation from "../assets/images/bg/promotions/metals/metals.json";
import { METALS_TRADING_SECTION } from "../helpers/config";
import MarketingCircle from "../components/marketing-circle";

const MetalsPage = () => {
  const { t } = useTranslation();

  const COLUMNS_METALS = [
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
    {
      id: "group4",
      Header: "",
      columns: [
        {
          Header: "Live",
          accessor: "col6",
        },
      ],
    },
  ];

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
      <TradingTicker
        title={t("metals_trading-ticker-title")}
        pageSpecificSection={METALS_TRADING_SECTION}
      />
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
      <MarketingCircle
        animation={animation}
        upper={
          <HighlightedLocalizationText
            localizationText="metals_marketing-circle-upper"
            wordsToHighlight="metals_marketing-circle-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        leftUpper={
          <HighlightedLocalizationText
            localizationText="metals_marketing-circle-left-upper"
            wordsToHighlight="metals_marketing-circle-left-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        rightUpper={
          <HighlightedLocalizationText
            localizationText="metals_marketing-circle-right-upper"
            wordsToHighlight="metals_marketing-circle-right-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        bottom={
          <HighlightedLocalizationText
            localizationText="metals_marketing-circle-bottom"
            wordsToHighlight="metals_marketing-circle-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        leftBottom={
          <HighlightedLocalizationText
            localizationText="metals_marketing-circle-left-bottom"
            wordsToHighlight="metals_marketing-circle-left-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        rightBottom={
          <HighlightedLocalizationText
            localizationText="metals_marketing-circle-right-bottom"
            wordsToHighlight="metals_marketing-circle-right-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      />
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
