import React, { useState } from "react";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/etf.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import etf from "../../../assets/images/top-markets/images/etf.svg";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { ETF_TRADING_SECTION } from "../../../helpers/config";
import animation from "../../../assets/images/bg/promotions/etf/etf.json";
import MarketingCircle from "../../marketing-circle";
import TopMarketLayout from "../../top-market-layout";
import Faq from "../../faq";
import { FAQ_ETF } from "../../../helpers/faq";
import TableComponent from "../../shared/table";
import { DATA_ETF } from "../../../helpers/top-market-tables";
import { updateTableDataWithLiveColumn } from "../../../helpers/services/update-table-data-with-live-column";

const ETFContent = () => {
  const { t } = useTranslation();
  const [tradingSymbols, setTradingSymbols] = useState([]);

  updateTableDataWithLiveColumn(DATA_ETF, tradingSymbols);

  const COLUMNS_ETF = [
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
    <>
      <TopMarket
        title={t("etf_top-market-title")}
        image={image}
        btn1Title={t("etf_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("etf_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="etf_top-market-promo-text"
          wordsToHighlight="etf-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker
        title={t("etf_trading-ticker-title")}
        pageSpecificSection={ETF_TRADING_SECTION}
        tradingSymbols={tradingSymbols}
        setTradingSymbols={setTradingSymbols}
      />
      <TopMarketPromotion
        className="etf-promotion"
        image={etf}
        btnTitle={t("etf_top-market-promo-btn")}
        link={REGISTRATION_LINK}
        note={
          <HighlightedLocalizationText
            localizationText="etf_top-market-promotion-promo-note"
            wordsToHighlight="etf_top-market-promotion-promo-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="etf_top-market-promotion-promo-text"
          wordsToHighlight="etf-top-market-promotion-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <MarketingCircle
        animation={animation}
        upper={
          <HighlightedLocalizationText
            localizationText="etf_marketing-circle-upper"
            wordsToHighlight="etf_marketing-circle-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        leftUpper={
          <HighlightedLocalizationText
            localizationText="etf_marketing-circle-left-upper"
            wordsToHighlight="etf_marketing-circle-left-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        rightUpper={
          <HighlightedLocalizationText
            localizationText="etf_marketing-circle-right-upper"
            wordsToHighlight="etf_marketing-circle-right-upper-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        bottom={
          <HighlightedLocalizationText
            localizationText="etf_marketing-circle-bottom"
            wordsToHighlight="etf_marketing-circle-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        leftBottom={
          <HighlightedLocalizationText
            localizationText="etf_marketing-circle-left-bottom"
            wordsToHighlight="etf_marketing-circle-left-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        rightBottom={
          <HighlightedLocalizationText
            localizationText="etf_marketing-circle-right-bottom"
            wordsToHighlight="etf_marketing-circle-right-bottom-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      />
      {/* Table should be hidden for now */}
      {/* <TopMarketLayout
        title={t("energies_top-market-layout-title")}
        btnTitle={t("energies_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_ETF}
          columns={COLUMNS_ETF}
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
      <Faq faq={FAQ_ETF} />
    </>
  );
};

export default ETFContent;
