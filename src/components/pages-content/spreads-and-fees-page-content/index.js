import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import TopMarket from "../../top-market";
import promotion from "../../../assets/images/spreads-and-fees/promotion.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TopMarketLayout from "../../top-market-layout";
import Tabs from "../../shared/tabs";
import TableComponent from "../../shared/table";
import {
  COLUMNS_SPREADS_TABLE_2,
  COLUMNS_SPREADS_TABLE_COMMODITIES,
  COLUMNS_SPREADS_TABLE_CRYPTO,
  COLUMNS_SPREADS_TABLE_FOREX,
  COLUMNS_SPREADS_TABLE_INDICES,
  DATA_SPREADS_TABLE_2,
  DATA_SPREADS_TABLE_COMMODITIES,
  DATA_SPREADS_TABLE_CRYPTO,
  DATA_SPREADS_TABLE_FOREX,
  DATA_SPREADS_TABLE_INDICES,
} from "../../../helpers/spreads-and-fees.config";
import TopMarketPromotion from "../../top-market-promotion";
import icon from "../../../assets/images/icon--white.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import { Link } from "gatsby";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";

const SpreadsAndFeesPageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();
  const { isCySEC } = useEntityPostfix();

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
            tableClassName={isRTL ? "spreads-table--rtl" : ""}
          />
          <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title1")}
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
            tableClassName={isRTL ? "spreads-table--rtl" : ""}
          />
          <Link className="spreads__table-link" to="/">
            {t("spreads_tabs_bottom_link_title2")}
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
            tableClassName={isRTL ? "spreads-table--rtl" : ""}
          />
        </>
      ),
    },
    ...(isCySEC
      ? []
      : [
          {
            id: 4,
            title: t("spreads_tabs_title4"),
            content: (
              <>
                <TableComponent
                  data={DATA_SPREADS_TABLE_CRYPTO}
                  columns={COLUMNS_SPREADS_TABLE_CRYPTO}
                  className={cn("spreads--common-table", "spreads--table")}
                  tableClassName={isRTL ? "spreads-table--rtl" : ""}
                />
                <Link className="spreads__table-link" to="/">
                  {t("spreads_tabs_bottom_link_title")}
                </Link>
              </>
            ),
          },
        ]),
  ];

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
        link={REGISTRATION_LINK}
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
