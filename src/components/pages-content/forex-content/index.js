import React from "react";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/forex.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import forex from "../../../assets/images/top-markets/images/forex.svg";
import PromotionMarkets from "../../promotion-markets";
import animation from "../../../assets/images/animations/forex.json";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";

const ForexContent = () => {
  const { sitePostfix } = useEntityPostfix();
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  return (
    <>
      <TopMarket
        title={t("forex_top-market-title")}
        isTitleUppercase
        image={image}
        btn1Title={t("forex_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("forex_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="forex_top-market-promo-text"
          wordsToHighlight="forex-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker title={t("forex_trading-ticker-title")} />
      <TopMarketPromotion
        className="forex-promotion"
        image={forex}
        btnTitle={t("forex_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText={`forex_top-market-promotion-promo-text${sitePostfix}`}
          wordsToHighlight={`forex-top-market-promotion-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        animation={animation}
        animationStyle={{
          height: isMobile ? 246 : 382,
        }}
        btnTitle={t("forex_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="forex_promotion-markets-promo-text-1"
          wordsToHighlight="forex-promotion-markets-promo-text-accent-1"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="forex_promotion-markets-promo-text-2"
          wordsToHighlight="forex-promotion-markets-promo-text-accent-2"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="forex_promotion-markets-promo-text-3"
          wordsToHighlight="forex-promotion-markets-promo-text-accent-3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="forex_promotion-markets-promo-text-4"
          wordsToHighlight="forex-promotion-markets-promo-text-accent-4"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="forex_promotion-markets-promo-text-5"
          wordsToHighlight="forex-promotion-markets-promo-text-accent-5"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="forex_promotion-markets-promo-text-6"
          wordsToHighlight="forex-promotion-markets-promo-text-accent-6"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="forex_promotion-markets-promo-text-7"
          wordsToHighlight="forex-promotion-markets-promo-text-accent-7"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
    </>
  );
};

export default ForexContent;
