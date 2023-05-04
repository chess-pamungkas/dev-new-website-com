import React from "react";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/etf.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import etf from "../../../assets/images/top-markets/images/etf.svg";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { ETF_TRADING_SECTION } from "../../../helpers/config";
import animation from "../../../assets/images/bg/promotions/etf/etf.json";
import MarketingCircle from "../../marketing-circle";
import Faq from "../../faq";
import { FAQ_ETF } from "../../../helpers/faq";

const ETFContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <TopMarket
        title={t("etf_top-market-title")}
        image={image}
        btn1Title={t("etf_top-market-btn1")}
        link1={GetRegistrationLink()}
        btn2Title={t("etf_top-market-btn2")}
        link2={GetRegistrationLink()}
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
        isInfiniteAutoScroll={true}
        animationDuration={"36s"}
        pageSpecificSection={ETF_TRADING_SECTION}
      />
      <TopMarketPromotion
        className="etf-promotion"
        image={etf}
        btnTitle={t("etf_top-market-promo-btn")}
        link={GetRegistrationLink()}
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
      <Faq faq={FAQ_ETF} />
    </>
  );
};

export default ETFContent;
