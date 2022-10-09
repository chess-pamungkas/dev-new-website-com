import React from "react";
import { useEntityPostfix } from "../../helpers/use-entity-postfix";
import TopMarket from "../top-market";
import image from "../../assets/images/top-markets/shares.svg";
import shares from "../../assets/images/top-markets/images/shares.svg";
import { REGISTRATION_LINK } from "../../helpers/constants";
import HighlightedLocalizationText from "../shared/highlighted-localization-text";
import TradingTicker from "../trading-ticker";
import TopMarketPromotion from "../top-market-promotion";
import PromotionMarkets from "../promotion-markets";
import animation from "../../assets/images/animations/shares.json";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../helpers/hooks/use-window-size";

const SharesContent = () => {
  const { sitePostfix } = useEntityPostfix();
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  return (
    <>
      <TopMarket
        title={t("shares_top-market-title")}
        image={image}
        isChildrenHasSmallSize
        btn1Title={t("shares_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("shares_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText={`shares_top-market-promo-text${sitePostfix}`}
          wordsToHighlight="shares-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker title={t("shares_trading-ticker-title")} />
      <TopMarketPromotion
        className="shares-promotion"
        image={shares}
        btnTitle={t("shares_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="shares_top-market-promotion-promo-text"
          wordsToHighlight="shares-top-market-promotion-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        className="promotion-markets--shares"
        animation={animation}
        animationStyle={{
          height: isMobile ? 301 : 473,
        }}
        btnTitle={t("shares_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-1"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-1"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-2"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-2"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-3"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-4"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-4"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-5"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-5"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-6"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-6"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-7"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-7"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
    </>
  );
};

export default SharesContent;
