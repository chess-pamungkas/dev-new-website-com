import React, { useCallback, useEffect, useState, useRef } from "react";
import cn from "classnames";
import TopMarketPromotion from "../../top-market-promotion";
import animation from "../../../assets/images/animations/aggregator_MT4.json";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MtPromotion from "../../mt-promotion";
import {
  COLUMNS_PLATFORMS,
  DataPlatforms,
  CYSEC_MT4_ADVANTAGES,
  FSA_MT4_ADVANTAGES,
  MT4_DOWNLOAD_LINKS,
} from "../../../helpers/platforms.config";
import image from "../../../assets/images/mt4/MT4andMT5.png";
import TopMarketLayout from "../../top-market-layout";
import TableComponent from "../../shared/table";
import icon from "../../../assets/images/icon--white.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import { isIOS, isAndroid, isWindows, isMacOs } from "react-device-detect";
const Mt4PageContent = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isLG, isXL } = useWindowSize();
  const isRTL = useRtlDirection();
  const { isCySEC } = useEntityPostfix();
  const [mt4Advantages, setMt4Advantages] = useState([]);

  const downloadRef = useRef(null);

  const scrollToTarget = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setMt4Advantages(isCySEC ? CYSEC_MT4_ADVANTAGES : FSA_MT4_ADVANTAGES);
  }, [isCySEC]);

  const getOSDevice = useCallback(() => {
    switch (true) {
      case isIOS:
        return MT4_DOWNLOAD_LINKS.ios;
      case isAndroid:
        return MT4_DOWNLOAD_LINKS.android;
      case isWindows:
        return MT4_DOWNLOAD_LINKS.windows;
      case isMacOs:
        return MT4_DOWNLOAD_LINKS.mac;
      default:
        return MT4_DOWNLOAD_LINKS.windows;
    }
  }, [isIOS, isAndroid, isWindows, isMacOs]);

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
          <a href={MT4_DOWNLOAD_LINKS.android}>
            {t("mt4_mt-promotion-download-android")}
          </a>
          {isCySEC && (
            <a to={MT4_DOWNLOAD_LINKS.ios}>
              {t("mt4_mt-promotion-download-ios")}
            </a>
          )}
        </>
      ),
    },
    {
      id: 2,
      title: t("mt-promotion-tabs-desktop"),
      content: (
        <>
          <a href={MT4_DOWNLOAD_LINKS.mac}>
            {t("mt4_mt-promotion-download-mac")}
          </a>
          <a href={MT4_DOWNLOAD_LINKS.windows}>
            {t("mt4_mt-promotion-download-windows")}
          </a>
        </>
      ),
    },
    {
      id: 3,
      title: t("mt-promotion-tabs-webtrader"),
      content: (
        <>
          <a
            href={MT4_DOWNLOAD_LINKS.webtrader}
            target="_blank"
            rel="noreferrer"
          >
            {t("mt4_mt-promotion-download-webtrader")}
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      <TopMarketPromotion
        className={cn("mt4-page-promotion", {
          "split-bg--rtl": isRTL,
          "mt-page-promotion--rtl": isRTL,
        })}
        image={animation}
        isLottieImage
        lottieStyle={getAnimationStyles()}
        btnClassName={cn({
          "button-link--ghost": isLG || isXL,
        })}
        btnTitle={t("mt4_top-market-promo-btn")}
        // link={MT4_DOC}
        btnOnClick={scrollToTarget}
        link={getOSDevice()}
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
        advantages={mt4Advantages}
        downloadTitle={t("mt4_download-title")}
        image={image}
        tabs={tabs}
        ref={downloadRef}
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
        className={cn("top-market-layout--mt", {
          "top-market-layout--mt--rtl": isRTL,
        })}
      >
        <TableComponent
          data={DataPlatforms()}
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
    </>
  );
};

export default Mt4PageContent;
