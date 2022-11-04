import React, { useCallback } from "react";
import { graphql, Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import animation from "../assets/images/animations/aggregator_Trading.json";
import image from "../assets/images/mt4/trading-view.png";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import { TRADING_VIEW_DOC } from "../helpers/documents";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import { REGISTRATION_LINK } from "../helpers/constants";
import icon from "../assets/images/icon--white.svg";
import {
  TRADING_VIEW_ADVANTAGES,
  TRADING_VIEW_DOWNLOAD_LINKS,
} from "../helpers/platforms.config";
import MtPromotion from "../components/mt-promotion";
import cn from "classnames";

const TradingViewPage = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isLG, isXL } = useWindowSize();

  const getAnimationStyles = useCallback(() => {
    switch (true) {
      case isXL:
        return { height: 700 };
      case isLG:
        return { height: 444 };
      case isTablet:
        return { height: 540 };
      case isMobile:
        return { height: 358 };
      default:
        return { height: 358 };
    }
  }, [isMobile, isTablet, isLG, isXL]);

  const tabs = [
    {
      id: 1,
      title: t("mt-promotion-tabs-mobile"),
      content: (
        <>
          <Link to={TRADING_VIEW_DOWNLOAD_LINKS.android}>
            {t("trading-view_mt-promotion-download-android")}
          </Link>
          <Link to={TRADING_VIEW_DOWNLOAD_LINKS.ios}>
            {t("trading-view_mt-promotion-download-ios")}
          </Link>
        </>
      ),
    },
    {
      id: 2,
      title: t("mt-promotion-tabs-desktop"),
      content: (
        <>
          <Link to={TRADING_VIEW_DOWNLOAD_LINKS.mac}>
            {t("trading-view_mt-promotion-download-mac")}
          </Link>
          <Link to={TRADING_VIEW_DOWNLOAD_LINKS.windows}>
            {t("trading-view_mt-promotion-download-windows")}
          </Link>
          <Link to={TRADING_VIEW_DOWNLOAD_LINKS.webtrader}>
            {t("trading-view_mt-promotion-download-webtrader")}
          </Link>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Seo title={t("page-trading-view-title")} />
      <TopMarketPromotion
        className={cn("ctrader-page-promotion", "trading-view-page-promotion")}
        image={animation}
        isLottieImage
        lottieStyle={getAnimationStyles()}
        btnClassName="button-link--ghost"
        btnTitle={t("trading-view_top-market-promo-btn")}
        link={TRADING_VIEW_DOC}
        isDocumentLink
        note={
          <HighlightedLocalizationText
            localizationText="trading-view_top-market-promo-note"
            wordsToHighlight="trading-view_top-market-promo-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="trading-view_top-market-promo-text"
          wordsToHighlight="trading-view_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>

      <MtPromotion
        title={
          <HighlightedLocalizationText
            localizationText="trading-view_top-market-promo-text2"
            wordsToHighlight="trading-view_top-market-promo-text-accent2"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        advantagesTitle={t("trading-view_market-items-list_title")}
        advantages={TRADING_VIEW_ADVANTAGES}
        downloadTitle={t("trading-view_download-title")}
        image={image}
        tabs={tabs}
        className="mt-promotion--ctrader"
      />

      <TopMarketPromotion
        className="bottom-promotion"
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("trading-view_top-market-promo-btn3")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="trading-view_top-market-promo-text3"
          wordsToHighlight="trading-view_top-market-promo-text-accent3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </Layout>
  );
};

export default TradingViewPage;

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
