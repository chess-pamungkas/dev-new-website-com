import React, { useContext } from "react";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/cripto.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import animation from "../../../assets/images/bg/promotions/crypto/crypto.json";
import TopMarketLayout from "../../top-market-layout";
import crypto from "../../../assets/images/top-markets/images/crypto.svg";

import {
  DATA_CRYPTO,
  GeneralTableColumns,
} from "../../../helpers/top-market-tables";
import TableComponent from "../../shared/table";
import { FAQ_CRYPTO } from "../../../helpers/faq";
import Faq from "../../faq";
import { CRYPTO_TRADING_SECTION } from "../../../helpers/config";
import MarketingCircle from "../../marketing-circle";
import { updateTableDataWithLiveColumn } from "../../../helpers/services/update-table-data-with-live-column";
import { sitePostfix } from "../../../helpers/entity-resolver";
import TradingContext from "../../../context/trading-context";

const CryptoContent = () => {
  const { t } = useTranslationWithVariables();
  const { tradingSymbols } = useContext(TradingContext);

  updateTableDataWithLiveColumn(DATA_CRYPTO, tradingSymbols);

  return (
    <>
      <TopMarket
        title={t(`crypto_top-market-title${sitePostfix}`)}
        image={image}
        btn1Title={t(`crypto_top-market-btn1${sitePostfix}`)}
        link1={GetRegistrationLink()}
        btn2Title={t(`crypto_top-market-btn2${sitePostfix}`)}
        btnClassName2={"button-link--lowercase"}
        link2={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText={`crypto_top-market-promo-text${sitePostfix}`}
          wordsToHighlight={`crypto-top-market-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker
        title={t(`crypto_trading-ticker-title${sitePostfix}`)}
        pageSpecificSection={CRYPTO_TRADING_SECTION}
      />
      <TopMarketPromotion
        className="crypto-promotion"
        image={crypto}
        btnTitle={t(`crypto_top-market-promo-btn${sitePostfix}`)}
        btnClassName={"button-link--lowercase"}
        link={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText={`crypto_top-market-promotion-promo-text${sitePostfix}`}
          wordsToHighlight={`crypto-top-market-promotion-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <MarketingCircle
        animation={animation}
        upper={
          <HighlightedLocalizationText
            localizationText={`crypto_marketing-circle-upper${sitePostfix}`}
            wordsToHighlight={`crypto_marketing-circle-upper-accent${sitePostfix}`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        leftUpper={
          <HighlightedLocalizationText
            localizationText={`crypto_marketing-circle-left-upper${sitePostfix}`}
            wordsToHighlight={`crypto_marketing-circle-left-upper-accent${sitePostfix}`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        rightUpper={
          <HighlightedLocalizationText
            localizationText={`crypto_marketing-circle-right-upper${sitePostfix}`}
            wordsToHighlight={`crypto_marketing-circle-right-upper-accent${sitePostfix}`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        bottom={
          <HighlightedLocalizationText
            localizationText={`crypto_marketing-circle-bottom${sitePostfix}`}
            wordsToHighlight={`crypto_marketing-circle-bottom-accent${sitePostfix}`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        leftBottom={
          <HighlightedLocalizationText
            localizationText={`crypto_marketing-circle-left-bottom${sitePostfix}`}
            wordsToHighlight={`crypto_marketing-circle-left-bottom-accent${sitePostfix}`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        rightBottom={
          <HighlightedLocalizationText
            localizationText={`crypto_marketing-circle-right-bottom${sitePostfix}`}
            wordsToHighlight={`crypto_marketing-circle-right-bottom-accent${sitePostfix}`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      />
      <TopMarketLayout
        title={t(`crypto_top-market-layout-title${sitePostfix}`)}
        btnTitle={t(`crypto_top-market-layout-btn${sitePostfix}`)}
        link={GetRegistrationLink()}
      >
        <TableComponent
          data={DATA_CRYPTO}
          columns={GeneralTableColumns()}
          isWrapperPadding
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
      </TopMarketLayout>
      <Faq faq={FAQ_CRYPTO} />
    </>
  );
};

export default CryptoContent;
