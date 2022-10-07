import React from "react";
import { graphql } from "gatsby";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import { REGISTRATION_LINK } from "../helpers/constants";
import icon from "../assets/images/icon--white.svg";
import promotion from "../assets/images/withdrawal/promotion.svg";
import TableComponent from "../components/shared/table";
import TopMarketLayout from "../components/top-market-layout";
import Tabs from "../components/shared/tabs";
import {
  COLUMNS_DEPOSIT,
  COLUMNS_WITHDRAWAL,
  DATA_DEPOSIT,
  DATA_WITHDRAWAL,
} from "../helpers/withdrawal.config";

const FundingPage = () => {
  const { t } = useTranslation();

  const tabs = [
    {
      id: 1,
      title: t("withdrawal_tabs_title1"),
      content: (
        <TableComponent
          data={DATA_DEPOSIT}
          columns={COLUMNS_DEPOSIT}
          className="withdrawal-table"
        />
      ),
    },
    {
      id: 2,
      title: t("withdrawal_tabs_title2"),
      content: (
        <TableComponent
          data={DATA_WITHDRAWAL}
          columns={COLUMNS_WITHDRAWAL}
          className={cn("withdrawal-table", "withdrawal-table--wide")}
        />
      ),
    },
  ];

  return (
    <Layout>
      <Seo title={t("page-withdrawal-title")} />
      <TopMarketPromotion
        className="withdrawal-page-promotion"
        image={promotion}
        note={
          <HighlightedLocalizationText
            localizationText="withdrawal_top-market-promo-note"
            wordsToHighlight="withdrawal_top-market-promo-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="withdrawal_top-market-promo-text"
          wordsToHighlight="withdrawal_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
      <TopMarketPromotion className="black-promotion">
        <span className="display-block">
          <HighlightedLocalizationText
            localizationText="withdrawal_top-market-promo-text2-1"
            wordsToHighlight="withdrawal_top-market-promo-text-accent2-1"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="display-block">
          <HighlightedLocalizationText
            localizationText="withdrawal_top-market-promo-text2-2"
            wordsToHighlight="withdrawal_top-market-promo-text-accent2-2"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="display-block">
          <HighlightedLocalizationText
            localizationText="withdrawal_top-market-promo-text2-3"
            wordsToHighlight="withdrawal_top-market-promo-text-accent2-3"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-red"
          />
        </span>
      </TopMarketPromotion>
      <TopMarketLayout className="top-market-layout--withdrawal">
        <Tabs tabList={tabs} />
      </TopMarketLayout>
      <TopMarketPromotion
        className="bottom-promotion"
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("withdrawal_top-market-promo-btn3")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="withdrawal_top-market-promo-text3"
          wordsToHighlight="withdrawal_top-market-promo-text-accent3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </Layout>
  );
};

export default FundingPage;

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
