import React from "react";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/shares.svg";
import shares from "../../../assets/images/top-markets/images/shares.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { SHARES_TRADING_SECTION } from "../../../helpers/config";
import Faq from "../../faq";
import { FAQ_SHARES } from "../../../helpers/faq";
import animation from "../../../assets/images/bg/promotions/shares/shares.json";
import MarketingCircle from "../../marketing-circle";

const SharesContent = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <TopMarket
        title={
          <HighlightedLocalizationText
            localizationText={t(`shares_top-market-title-fsa`)}
            wordsToHighlight="shares_top-market-title-accent"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-black"
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
          localizationText={`shares_top-market-promo-text-fsa`}
          wordsToHighlight={`shares_top-market-promo-text-accent-fsa`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker
        title={t("shares_trading-ticker-title")}
        pageSpecificSection={SHARES_TRADING_SECTION}
      />
      <TopMarketPromotion
        className="shares-promotion"
        image={shares}
        btnTitle={t("shares_top-market-promo-btn")}
        link={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText={`shares_top-market-promotion-promo-text-fsa`}
          wordsToHighlight={`shares_top-market-promotion-promo-text-accent-fsa`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <MarketingCircle
        animation={animation}
        upper={
          <HighlightedLocalizationText
            localizationText={`shares_marketing-circle-upper-fsa`}
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
