import React, { useState } from "react";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/shares.svg";
import shares from "../../../assets/images/top-markets/images/shares.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { SHARES_TRADING_SECTION } from "../../../helpers/config";
import Faq from "../../faq";
import { FAQ_SHARES } from "../../../helpers/faq";
import animation from "../../../assets/images/bg/promotions/shares/shares.json";
import MarketingCircle from "../../marketing-circle";
import { updateTableDataWithLiveColumn } from "../../../helpers/services/update-table-data-with-live-column";
import { DATA_SHARES } from "../../../helpers/top-market-tables";

const SharesContent = () => {
  const { sitePostfix } = useEntityPostfix();
  const { t } = useTranslation();
  const [tradingSymbols, setTradingSymbols] = useState([]);

  updateTableDataWithLiveColumn(DATA_SHARES, tradingSymbols);

  //unused code block.
  // const COLUMNS_SHARES = [
  //   {
  //     id: "group1",
  //     Header: "",
  //     columns: [
  //       {
  //         Header: "",
  //         accessor: "col1",
  //       },
  //     ],
  //   },
  //   {
  //     id: "group2",
  //     Header: t("oqtima-ecn-account"),
  //     columns: [
  //       {
  //         Header: "Min",
  //         accessor: "col2",
  //       },
  //       {
  //         Header: "Avg",
  //         accessor: "col3",
  //       },
  //     ],
  //   },
  //   {
  //     id: "group3",
  //     Header: t("oqtima-one-account"),
  //     columns: [
  //       {
  //         Header: "Min",
  //         accessor: "col4",
  //       },
  //       {
  //         Header: "Avg",
  //         accessor: "col5",
  //       },
  //     ],
  //   },
  //   {
  //     id: "group4",
  //     Header: "",
  //     columns: [
  //       {
  //         Header: "Live",
  //         accessor: "col6",
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <TopMarket
        title={
          <HighlightedLocalizationText
            localizationText={t(`shares_top-market-title${sitePostfix}`)}
            wordsToHighlight="shares_top-market-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
        image={image}
        isChildrenHasSmallSize
        btn1Title={t("shares_top-market-btn1")}
        link1={GetRegistrationLink()}
        btn2Title={t("shares_top-market-btn2")}
        link2={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText={`shares_top-market-promo-text${sitePostfix}`}
          wordsToHighlight={`shares_top-market-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker
        title={t("shares_trading-ticker-title")}
        pageSpecificSection={SHARES_TRADING_SECTION}
        isInfiniteAutoScroll={true}
        tradingSymbols={tradingSymbols}
        setTradingSymbols={setTradingSymbols}
      />
      <TopMarketPromotion
        className="shares-promotion"
        image={shares}
        btnTitle={t("shares_top-market-promo-btn")}
        link={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText={`shares_top-market-promotion-promo-text${sitePostfix}`}
          wordsToHighlight={`shares_top-market-promotion-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <MarketingCircle
        animation={animation}
        upper={
          <HighlightedLocalizationText
            localizationText="shares_marketing-circle-upper"
            wordsToHighlight="shares_marketing-circle-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        leftUpper={
          <HighlightedLocalizationText
            localizationText="shares_marketing-circle-left-upper"
            wordsToHighlight="shares_marketing-circle-left-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        rightUpper={
          <HighlightedLocalizationText
            localizationText="shares_marketing-circle-right-upper"
            wordsToHighlight="shares_marketing-circle-right-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        bottom={
          <HighlightedLocalizationText
            localizationText="shares_marketing-circle-bottom"
            wordsToHighlight="shares_marketing-circle-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        leftBottom={
          <HighlightedLocalizationText
            localizationText="shares_marketing-circle-left-bottom"
            wordsToHighlight="shares_marketing-circle-left-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        rightBottom={
          <HighlightedLocalizationText
            localizationText="shares_marketing-circle-right-bottom"
            wordsToHighlight="shares_marketing-circle-right-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      />
      {/*Removed due to ticket https://oqtima-website.atlassian.net/browse/OW-209?atlOrigin=eyJpIjoiMDlmNzI4YTk4NzZjNGYxMmIxMmRiMzE1NjdlYTdmMTIiLCJwIjoiaiJ9 */}
      {/* <TopMarketLayout
        title={t("shares_top-market-layout-title")}
        btnTitle={t("shares_top-market-layout-btn")}
        link={GetRegistrationLink()}
      >
        <TableComponent
          data={DATA_SHARES}
          columns={COLUMNS_SHARES}
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
      </TopMarketLayout> */}

      <Faq faq={FAQ_SHARES} />
    </>
  );
};

export default SharesContent;
