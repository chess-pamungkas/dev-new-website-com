import React from "react";
import { graphql, Link } from "gatsby";
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
  COLUMNS_SPREADS_TABLE_2,
  COLUMNS_SPREADS_TABLE_COMMODITIES,
  COLUMNS_SPREADS_TABLE_CRYPTO,
  COLUMNS_SPREADS_TABLE_FOREX,
  COLUMNS_SPREADS_TABLE_INDICES,
  COLUMNS_SPREADS_TABLE_SHARES,
  DATA_SPREADS_TABLE_2,
  DATA_SPREADS_TABLE_COMMODITIES,
  DATA_SPREADS_TABLE_CRYPTO,
  DATA_SPREADS_TABLE_FOREX,
  DATA_SPREADS_TABLE_INDICES,
  DATA_SPREADS_TABLE_SHARES,
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
            data={DATA_SPREADS_TABLE_FOREX}
            columns={COLUMNS_SPREADS_TABLE_FOREX}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title")}
          </Link>
        </>
      ),
    },
    {
      id: 2,
      title: t("spreads_tabs_title2"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_INDICES}
            columns={COLUMNS_SPREADS_TABLE_INDICES}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title")}
          </Link>
        </>
      ),
    },
    {
      id: 3,
      title: t("spreads_tabs_title3"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_COMMODITIES}
            columns={COLUMNS_SPREADS_TABLE_COMMODITIES}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title")}
          </Link>
        </>
      ),
    },
    {
      id: 4,
      title: t("spreads_tabs_title4"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_CRYPTO}
            columns={COLUMNS_SPREADS_TABLE_CRYPTO}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title")}
          </Link>
        </>
      ),
    },
    {
      id: 5,
      title: t("spreads_tabs_title5"),
      content: (
        <>
          <TableComponent
            data={DATA_SPREADS_TABLE_SHARES}
            columns={COLUMNS_SPREADS_TABLE_SHARES}
            className={cn("spreads--common-table", "spreads--table")}
          />
          <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title")}
          </Link>
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
        isFaqBtnHidden
        title={t("spreads_faq-title")}
        subTitleTemplate={
          <div className={cn("faq__subtitle")}>
            <span className="faq__subtitle-text">
              {t("spreads_faq-subtitle1")}
            </span>
            <span className="faq__subtitle-text">
              {t("spreads_faq-subtitle2")}
            </span>
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
