import React, { useContext } from "react";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/commodities.svg";
import { GetLoginLink } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import commodities from "../../../assets/images/top-markets/images/commodities.svg";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { METALS_TRADING_SECTION } from "../../../helpers/config";
import animation from "../../../assets/images/bg/promotions/metals/metals.json";
import MarketingCircle from "../../marketing-circle";
import TopMarketLayout from "../../top-market-layout";
import Faq from "../../faq";
import { FAQ_METALS } from "../../../helpers/faq";
import TableComponent from "../../shared/table";
import {
  DATA_METALS,
  GeneralTableColumns,
} from "../../../helpers/top-market-tables";
import { updateTableDataWithLiveColumn } from "../../../helpers/services/update-table-data-with-live-column";
import TradingContext from "../../../context/trading-context";

const MetalsContent = () => {
  const { t } = useTranslation();
  const { tradingSymbols } = useContext(TradingContext);

  updateTableDataWithLiveColumn(DATA_METALS, tradingSymbols);

  return (
    <>
      <TopMarket
        title={t("metals_top-market-title")}
        image={image}
        btn1Title={t("metals_top-market-btn1")}
        link1={GetLoginLink()}
        btn2Title={t("metals_top-market-btn2")}
        link2={GetLoginLink()}
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
        link={GetLoginLink()}
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
        link={GetLoginLink()}
      >
        <TableComponent
          data={DATA_METALS}
          columns={GeneralTableColumns()}
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
    </>
  );
};

export default MetalsContent;
