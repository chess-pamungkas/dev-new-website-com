import React from "react";
import { graphql } from "gatsby";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import animation from "../assets/images/animations/indices.json";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import { MT4_DOC } from "../helpers/documents";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import { REGISTRATION_LINK } from "../helpers/constants";
import icon from "../assets/images/icon--white.svg";
import MarketItemAdvantageList from "../components/all-markets/components/market-item-advantage-list";
import { MT4_ADVANTAGES } from "../helpers/platforms.config";
import { MT4_PLATFORMS } from "../helpers/config";

const MT4Page = () => {
  const { t } = useTranslation();
  const { isLG, isXL } = useWindowSize();

  return (
    <Layout>
      <Seo title={t("page-mt4-title")} />
      <TopMarketPromotion
        className="mt4-page-promotion"
        // TODO replace with the real animation
        image={animation}
        isLottieImage
        lottieStyle={{
          height: 536,
        }}
        btnClassName={cn({
          "button-link--ghost": isLG || isXL,
        })}
        btnTitle={t("mt4_top-market-promo-btn")}
        link={MT4_DOC}
        isDocumentLink
      >
        <HighlightedLocalizationText
          localizationText="mt4_top-market-promo-text"
          wordsToHighlight="mt4_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName={"highlighted-in-white"}
        />
      </TopMarketPromotion>
      <TopMarketPromotion
        className="mt4-page-advantage-promotion"
        // TODO replace with the real animation
        image={animation}
        isLottieImage
        lottieStyle={{
          height: 536,
        }}
        btnClassName="button-link--red"
        btnTitle={t("mt4_top-market-promo-btn")}
        link={MT4_DOC}
        isDocumentLink
        isAdditionalBlock
        additionalBlock={
          <div className="mt4-page-advantage-promotion__img-wrapper">
            {Object.values(MT4_PLATFORMS).map((platform) => (
              <img
                key={`mt4-${platform.title}`}
                src={platform.icon}
                alt="platform.title"
                className="mt4-page-advantage-promotion__img"
              />
            ))}
          </div>
        }
      >
        <HighlightedLocalizationText
          localizationText="mt4_top-market-promo-text2"
          wordsToHighlight="mt4_top-market-promo-text-accent2"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <div className="mt4-page-advantages">
          <MarketItemAdvantageList
            advantages={MT4_ADVANTAGES}
            className="mt4-market-item-advantages"
          />
        </div>
      </TopMarketPromotion>
      {isXL && (
        <TopMarketPromotion
          className="mt4-page-bottom-promotion"
          image={icon}
          btnClassName="button-link--red"
          btnTitle={t("mt4_top-market-promo-btn3")}
          link={REGISTRATION_LINK}
        >
          <HighlightedLocalizationText
            localizationText="mt4_top-market-promo-text3"
            wordsToHighlight="mt4_top-market-promo-text-accent3"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </TopMarketPromotion>
      )}
    </Layout>
  );
};

export default MT4Page;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
