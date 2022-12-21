import React, { useCallback } from "react";
import cn from "classnames";
import TopMarketPromotion from "../../top-market-promotion";
import animation from "../../../assets/images/animations/aggregator_MT5.json";
import { MT5_DOC } from "../../../helpers/documents";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MtPromotion from "../../mt-promotion";
import {
  COLUMNS_PLATFORMS,
  DATA_PLATFORMS,
  MT5_ADVANTAGES,
  MT5_DOWNLOAD_LINKS,
} from "../../../helpers/platforms.config";
import image from "../../../assets/images/mt4/MT4andMT5.png";
import TopMarketLayout from "../../top-market-layout";
import TableComponent from "../../shared/table";
import icon from "../../../assets/images/icon--white.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";

const Mt5PageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();
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
          <Link to={MT5_DOWNLOAD_LINKS.android}>
            {t("mt5_mt-promotion-download-android")}
          </Link>
          <Link to={MT5_DOWNLOAD_LINKS.ios}>
            {t("mt5_mt-promotion-download-ios")}
          </Link>
        </>
      ),
    },
    {
      id: 2,
      title: t("mt-promotion-tabs-desktop"),
      content: (
        <>
          <Link to={MT5_DOWNLOAD_LINKS.mac}>
            {t("mt5_mt-promotion-download-mac")}
          </Link>
          <Link to={MT5_DOWNLOAD_LINKS.windows}>
            {t("mt5_mt-promotion-download-windows")}
          </Link>{" "}
          <Link to={MT5_DOWNLOAD_LINKS.webtrader}>
            {t('"mt5_mt-promotion-download-webtrader"')}
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      <TopMarketPromotion
        className={cn("mt5-page-promotion", {
          "split-bg--rtl": isRTL,
          "mt-page-promotion--rtl": isRTL,
        })}
        image={animation}
        isLottieImage
        lottieStyle={getAnimationStyles()}
        btnClassName={cn({
          "button-link--ghost": isLG || isXL,
        })}
        btnTitle={t("mt5_top-market-promo-btn")}
        link={MT5_DOC}
        isDocumentLink
        note={
          <HighlightedLocalizationText
            localizationText="mt5_top-market-promo-note"
            wordsToHighlight="mt5_top-market-promo-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="mt5_top-market-promo-text"
          wordsToHighlight="mt5_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>

      <MtPromotion
        title={
          <HighlightedLocalizationText
            localizationText="mt5_top-market-promo-text2"
            wordsToHighlight="mt5_top-market-promo-text-accent2"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        advantagesTitle={t("mt5_market-items-list_title")}
        advantages={MT5_ADVANTAGES}
        downloadTitle={t("mt5_download-title")}
        image={image}
        tabs={tabs}
      />
      <TopMarketLayout
        title={
          <HighlightedLocalizationText
            localizationText="mt5_top-market-layout-title"
            wordsToHighlight="mt5_top-market-layout-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        className={cn("top-market-layout--mt", {
          "top-market-layout--mt--rtl": isRTL,
        })}
      >
        <TableComponent
          data={DATA_PLATFORMS}
          columns={COLUMNS_PLATFORMS}
          tableClassName={isRTL ? "mt-table--rtl" : ""}
        />
      </TopMarketLayout>
      {isXL && (
        <TopMarketPromotion
          className={cn("bottom-promotion", {
            "bottom-promotion--rtl": isRTL,
          })}
          image={icon}
          btnClassName="button-link--red"
          btnTitle={t("mt5_top-market-promo-btn3")}
          link={REGISTRATION_LINK}
        >
          <HighlightedLocalizationText
            localizationText="mt5_top-market-promo-text3"
            wordsToHighlight="mt5_top-market-promo-text-accent3"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </TopMarketPromotion>
      )}
    </>
  );
};

export default Mt5PageContent;
