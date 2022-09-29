import React from "react";
import { graphql } from "gatsby";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";

import promotion from "../assets/images/spreads-and-fees/promotion.svg";
import TopMarket from "../components/top-market";
import TopMarketLayout from "../components/top-market-layout";
import TableComponent from "../components/shared/table";
import TopMarketPromotion from "../components/top-market-promotion";
import icon from "../assets/images/icon--white.svg";
import { REGISTRATION_LINK } from "../helpers/constants";
import Faq from "../components/faq";
import { FAQ_SPREADS_AND_FEES } from "../helpers/faq";
import {
  COLUMNS_SPREADS_TABLE_1,
  COLUMNS_SPREADS_TABLE_2,
  DATA_SPREADS_TABLE_1,
  DATA_SPREADS_TABLE_2,
} from "../helpers/spreads-and-fees.config";
import Tabs from "../components/shared/tabs";

const SpreadsFeesPage = () => {
  const { t } = useTranslation();

  const tabs = [
    {
      id: 1,
      title: t("spreads_tabs_title1"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_1}
            columns={COLUMNS_SPREADS_TABLE_1}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <a href="/" className="spreads__table-link">
            {t("spreads_tabs_bottom_link_title")}
          </a>
        </>
      ),
    },
    {
      id: 2,
      title: t("spreads_tabs_title2"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_1}
            columns={COLUMNS_SPREADS_TABLE_1}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <a href="/" className="spreads__table-link">
            {t("spreads_tabs_bottom_link_title")}
          </a>
        </>
      ),
    },
    {
      id: 3,
      title: t("spreads_tabs_title3"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_1}
            columns={COLUMNS_SPREADS_TABLE_1}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <a href="/" className="spreads__table-link">
            {t("spreads_tabs_bottom_link_title")}
          </a>
        </>
      ),
    },
    {
      id: 4,
      title: t("spreads_tabs_title4"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_1}
            columns={COLUMNS_SPREADS_TABLE_1}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <a href="/" className="spreads__table-link">
            {t("spreads_tabs_bottom_link_title")}
          </a>
        </>
      ),
    },
    {
      id: 5,
      title: t("spreads_tabs_title5"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_1}
            columns={COLUMNS_SPREADS_TABLE_1}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <a href="/" className="spreads__table-link">
            {t("spreads_tabs_bottom_link_title")}
          </a>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Seo title={t("page-spreads-title")} />
      <TopMarket
        className={cn("top-market--spreads-page")}
        image={promotion}
        title={
          <HighlightedLocalizationText
            localizationText="spreads_top-market-promo-text"
            wordsToHighlight="spreads_top-market-promo-text-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="spreads_top-market-promo-note"
          wordsToHighlight="spreads_top-market-promo-note-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>

      <TopMarketLayout
        className="top-market-layout--spreads"
        title={t("spreads_first-table-title")}
      >
        <Tabs tabList={tabs} isMobileDropdown />
      </TopMarketLayout>

      <TopMarketLayout
        className="top-market-layout--spreads top-market-layout--spreads-second"
        headerTemplate={
          <div className={cn("top-market-layout__header")}>
            <h2 className={cn("top-market-layout__title")}>
              {t("spreads_second-table-title")}
            </h2>
            <p className={cn("top-market-layout__subtitle")}>
              {t("spreads_second-table-subtitle")}
            </p>
          </div>
        }
      >
        <TableComponent
          data={DATA_SPREADS_TABLE_2}
          columns={COLUMNS_SPREADS_TABLE_2}
          className={cn("spreads--common-table", "spreads--second-table")}
        />
      </TopMarketLayout>

      <Faq
        className={cn("faq--spreads")}
        faq={FAQ_SPREADS_AND_FEES}
        isFaqBtnHidden={true}
        title={t("spreads_faq-title")}
        subTitleTemplate={
          <div className={cn("faq__subtitle")}>
            <div>{t("spreads_faq-subtitle1")}</div>
            <div>{t("spreads_faq-subtitle2")}</div>
          </div>
        }
      />

      <TopMarketPromotion
        className="bottom-promotion"
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("spreads_top-market-promo-btn3")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="spreads_top-market-promo-text3"
          wordsToHighlight="spreads_top-market-promo-text-accent3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </Layout>
  );
};

export default SpreadsFeesPage;

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
