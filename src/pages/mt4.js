import React, { useCallback } from "react";
import { graphql, Link } from "gatsby";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import animation from "../assets/images/animations/aggregator_MT4.json";
import image from "../assets/images/mt4/MT4andMT5.png";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import { MT4_DOC } from "../helpers/documents";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import { REGISTRATION_LINK } from "../helpers/constants";
import icon from "../assets/images/icon--white.svg";
import {
  COLUMNS_PLATFORMS,
  DATA_PLATFORMS,
  MT4_ADVANTAGES,
  MT4_DOWNLOAD_LINKS,
} from "../helpers/platforms.config";
import MtPromotion from "../components/mt-promotion";
import TableComponent from "../components/shared/table";
import TopMarketLayout from "../components/top-market-layout";

const MT4Page = () => {
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
          <Link to={MT4_DOWNLOAD_LINKS.android}>
            {t("mt4_mt-promotion-download-android")}
          </Link>
          <Link to={MT4_DOWNLOAD_LINKS.ios}>
            {t("mt4_mt-promotion-download-ios")}
          </Link>
        </>
      ),
    },
    {
      id: 2,
      title: t("mt-promotion-tabs-desktop"),
      content: (
        <>
          <Link to={MT4_DOWNLOAD_LINKS.mac}>
            {t("mt4_mt-promotion-download-mac")}
          </Link>
          <Link to={MT4_DOWNLOAD_LINKS.windows}>
            {t("mt4_mt-promotion-download-windows")}
          </Link>
          <Link to={MT4_DOWNLOAD_LINKS.webtrader}>
            {t("mt4_mt-promotion-download-webtrader")}
          </Link>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Seo title={t("page-mt4-title")} />
      <TopMarketPromotion
        className="mt4-page-promotion"
        image={animation}
        isLottieImage
        lottieStyle={getAnimationStyles()}
        btnClassName={cn({
          "button-link--ghost": isLG || isXL,
        })}
        btnTitle={t("mt4_top-market-promo-btn")}
        link={MT4_DOC}
        isDocumentLink
        note={
          <HighlightedLocalizationText
            localizationText="mt4_top-market-promo-note"
            wordsToHighlight="mt4_top-market-promo-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="mt4_top-market-promo-text"
          wordsToHighlight="mt4_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>

      <MtPromotion
        title={
          <HighlightedLocalizationText
            localizationText="mt4_top-market-promo-text2"
            wordsToHighlight="mt4_top-market-promo-text-accent2"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        advantagesTitle={t("mt4_market-items-list_title")}
        advantages={MT4_ADVANTAGES}
        downloadTitle={t("mt4_download-title")}
        image={image}
        tabs={tabs}
      />
      <TopMarketLayout
        title={
          <HighlightedLocalizationText
            localizationText="mt4_top-market-layout-title"
            wordsToHighlight="mt4_top-market-layout-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        className="top-market-layout--mt"
      >
        <TableComponent data={DATA_PLATFORMS} columns={COLUMNS_PLATFORMS} />
      </TopMarketLayout>
      {isXL && (
        <TopMarketPromotion
          className="bottom-promotion"
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
