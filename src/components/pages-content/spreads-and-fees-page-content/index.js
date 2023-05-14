import React, { useEffect, useContext } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import TopMarket from "../../top-market";
import promotion from "../../../assets/images/spreads-and-fees/promotion.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TopMarketLayout from "../../top-market-layout";
import Tabs from "../../shared/tabs";
import TableComponent from "../../shared/table";
import {
  ColumnsSpreadTable2,
  DATA_SPREADS_TABLE_COMMODITIES,
  DataSpreadTable2,
  DATA_SPREADS_TABLE_CRYPTO,
  DATA_SPREADS_TABLE_FOREX,
  DATA_SPREADS_TABLE_INDICES,
  ColumnsSpreadTableIndices,
  ColumnsSpreadTableForex,
  ColumnsSpreadTableCommodities,
  GeneralTableColumns,
} from "../../../helpers/spreads-and-fees.config";
import TopMarketPromotion from "../../top-market-promotion";
import icon from "../../../assets/images/icon--white.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { updateTableDataWithLiveColumn } from "../../../helpers/services/update-table-data-with-live-column";
import {
  FOREX_TRADING_SECTION,
  INDICES_TRADING_SECTION,
  METALS_TRADING_SECTION,
  CRYPTO_TRADING_SECTION,
} from "../../../helpers/config";
import { isCySEC } from "../../../helpers/entity-resolver";
import TradingContext from "../../../context/trading-context";

const SpreadsAndFeesPageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();
  //TODO REFACTOR 31-88
  const {
    tradingSymbols,
    setSelectedSection,
    setNeedToLoadSymbols,
  } = useContext(TradingContext);

  const COLUMNS_SPREADS_TABLE_CRYPTO = [
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
          Header: "",
          accessor: "col23_mobile",
        },
        // {
        //   Header: "Avg",
        //   accessor: "col3",
        // },
      ],
    },
    {
      id: "group3",
      Header: t("oqtima-one-account"),
      columns: [
        {
          Header: "",
          accessor: "col45_mobile",
        },
        // {
        //   Header: "Avg",
        //   accessor: "col5",
        // },
      ],
    },
    {
      id: "group4",
      Header: "",
      columns: [
        {
          Header: "",
          accessor: "col6",
        },
      ],
    },
  ];
  updateTableDataWithLiveColumn(DATA_SPREADS_TABLE_INDICES, tradingSymbols);
  updateTableDataWithLiveColumn(DATA_SPREADS_TABLE_FOREX, tradingSymbols);
  updateTableDataWithLiveColumn(DATA_SPREADS_TABLE_COMMODITIES, tradingSymbols);
  updateTableDataWithLiveColumn(DATA_SPREADS_TABLE_CRYPTO, tradingSymbols);
  const tabs = [
    {
      id: 1,
      title: t("spreads_tabs_title1"),
      onClick: () => setSelectedSection(FOREX_TRADING_SECTION),
      content: (
        <>
          <TableComponent
            isWrapperPadding
            data={DATA_SPREADS_TABLE_FOREX}
            columns={ColumnsSpreadTableForex()}
            tableClassName={isRTL ? "spreads-table--rtl" : ""}
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
          {/* <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title1")}
          </Link> */}
        </>
      ),
    },
    {
      id: 2,
      title: t("spreads_tabs_title2"),
      onClick: () => setSelectedSection(INDICES_TRADING_SECTION),
      content: (
        <>
          <TableComponent
            isWrapperPadding
            data={DATA_SPREADS_TABLE_INDICES}
            columns={ColumnsSpreadTableIndices()}
            tableClassName={isRTL ? "spreads-table--rtl" : ""}
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
          {/* <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title2")}
          </Link> */}
        </>
      ),
    },
    {
      id: 3,
      title: t("spreads_tabs_title3"),
      onClick: () => setSelectedSection(METALS_TRADING_SECTION),
      content: (
        <>
          <TableComponent
            isWrapperPadding
            data={DATA_SPREADS_TABLE_COMMODITIES}
            columns={ColumnsSpreadTableCommodities()}
            tableClassName={isRTL ? "spreads-table--rtl" : ""}
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
          {/* <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title_Metals")}
          </Link> */}
        </>
      ),
    },
  ];

  const tabs2 = isCySEC
    ? tabs
    : [
        ...tabs,
        {
          id: 4,
          title: t("spreads_tabs_title4"),
          onClick: () => setSelectedSection(CRYPTO_TRADING_SECTION),
          content: (
            <>
              <TableComponent
                isWrapperPadding
                data={DATA_SPREADS_TABLE_CRYPTO}
                columns={GeneralTableColumns()}
                tableClassName={isRTL ? "spreads-table--rtl" : ""}
                tip={
                  <span>
                    <span className="bold">*MIN</span>&nbsp;-&nbsp;
                    {t("table-tip1")}
                    &nbsp;
                    <span className="bold">AVG</span>&nbsp;-&nbsp;
                    {t("table-tip2")}
                    &nbsp;
                  </span>
                }
                isSearch
              />
              {/* <Link className="spreads__table-link" to="/">
                {t("spreads_tabs_bottom_link_title")}
              </Link> */}
            </>
          ),
        },
      ];

  useEffect(() => {
    setSelectedSection(FOREX_TRADING_SECTION);
    setNeedToLoadSymbols(true);

    return () => setNeedToLoadSymbols(false);
  }, []);

  return (
    <>
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
        <Tabs tabList={tabs2} isMobileDropdown />
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
          data={DataSpreadTable2()}
          columns={ColumnsSpreadTable2()}
          className={cn("spreads--common-table", "spreads--second-table")}
        />
      </TopMarketLayout>

      <section className="swap-rate">
        <div className="swap-rate__wrapper">
          <h2 className="swap-rate__title">{t("spreads_faq-title")}</h2>
          <div className="swap-rate__subtitle">
            <span className="swap-rate__subtitle-text">
              {t("spreads_faq-subtitle1")}
            </span>
            <span className="swap-rate__subtitle-text">
              {t("spreads_faq-subtitle2")}
            </span>
            <span className="swap-rate__subtitle-text swap-rate__subtitle-text--bold">
              {t("spreads_faq-subtitle3")}
            </span>
            {/* removed based on this ticket https://oqtima-website.atlassian.net/browse/OW-239 */}
            {/* <span className="swap-rate__subtitle-text swap-rate__subtitle-text--bold">
              {t("spreads_faq-subtitle4")}
            </span> */}
          </div>
        </div>
      </section>

      <TopMarketPromotion
        className={cn("bottom-promotion", {
          "bottom-promotion--rtl": isRTL,
        })}
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("spreads_top-market-promo-btn3")}
        link={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText="spreads_top-market-promo-text3"
          wordsToHighlight="spreads_top-market-promo-text-accent3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </>
  );
};

export default SpreadsAndFeesPageContent;
