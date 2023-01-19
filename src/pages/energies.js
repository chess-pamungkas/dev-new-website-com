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
import TopMarketPromotion from "../components/top-market-promotion";
import energies from "../assets/images/top-markets/images/energies.svg";
import TopMarketLayout from "../components/top-market-layout";
import TableComponent from "../components/shared/table";
import { COLUMNS_ENERGIES, DATA_ENERGIES } from "../helpers/top-market-tables";
import Faq from "../components/faq";
import { FAQ_ENERGIES } from "../helpers/faq";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import StaticImages from "../components/promotion-markets/static-images";
import MarketingImage from "../assets/images/bg/promotions/energies/energies@2x.png";
import animation from "../assets/images/bg/promotions/energies/energy.json";
import { ENERGIES_TRADING_SECTION } from "../helpers/config";

const EnergiesPage = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  return (
    <Layout>
      <Seo
        title={t("page-energies-title")}
        description={t("page-energies-description")}
      />
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
      <TradingTicker
        title={t("energies_trading-ticker-title")}
        pageSpecificSection={ENERGIES_TRADING_SECTION}
      />
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
      <StaticImages
        image={MarketingImage}
        height={isMobile ? 400 : 800}
        animation={animation}
      />
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

export default EnergiesPage;

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
