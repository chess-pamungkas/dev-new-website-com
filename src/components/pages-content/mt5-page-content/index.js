import React, { useCallback, useEffect, useState, useRef } from "react";
import cn from "classnames";
import TopMarketPromotion from "../../top-market-promotion";
import animation from "../../../assets/images/animations/aggregator_MT5.json";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MtPromotion from "../../mt-promotion";
import {
  COLUMNS_PLATFORMS,
  CYSEC_MT5_ADVANTAGES,
  FSA_MT5_ADVANTAGES,
  MT5_DOWNLOAD_LINKS,
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

const Mt5PageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();
  const { isMobile, isTablet, isLG, isXL } = useWindowSize();
  const { isCySEC } = useEntityPostfix();
  const [mt5Advantages, setMt5Advantages] = useState([]);
  const downloadRef = useRef(null);

  const scrollToTarget = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMt5Advantages(isCySEC ? CYSEC_MT5_ADVANTAGES : FSA_MT5_ADVANTAGES);
  }, [isCySEC]);

  //TODO REFACTOR
  const DATA_PLATFORMS = [
    {
      col1: t("mt4_table-data-platform-col1-1"),
      col2: "4",
      col3: "3",
    },
    {
      col1: t("mt4_table-data-platform-col1-2"),
      col2: "6",
      col3: "3",
    },
    {
      col1: t("mt4_table-data-platform-col1-3"),
      col2: "Untitled",
      col3: "3",
    },
    {
      col1: t("mt4_table-data-platform-col1-4"),
      col2: "38",
      col3: "38",
    },
    {
      col1: t("mt4_table-data-platform-col1-5"),
      col2: "Mql5",
      col3: "Mql4",
    },
    {
      col1: t("mt4_table-data-platform-col1-6"),
      col2: "21",
      col3: "9",
    },
    {
      col1: t("mt4_table-data-platform-col1-7"),
      col2: "44",
      col3: "31",
    },
    {
      col1: t("mt4_table-data-platform-col1-8"),
      col2: t("mt4_table-data-platform-col2-8"),
      col3: t("mt4_table-data-platform-col3-8"),
    },
    {
      col1: t("mt4_table-data-platform-col1-9"),
      col2: t("mt4_table-data-platform-col2-9"),
      col3: t("mt4_table-data-platform-col3-9"),
    },
    {
      col1: t("mt4_table-data-platform-col1-10"),
      col2: t("mt4_table-data-platform-col2-10"),
      col3: t("mt4_table-data-platform-col3-10"),
    },
    {
      col1: t("mt4_table-data-platform-col1-11"),
      col2: t("mt4_table-data-platform-col2-11"),
      col3: t("mt4_table-data-platform-col3-11"),
    },
  ];

  const getOSDevice = useCallback(() => {
    switch (true) {
      case isIOS:
        return MT5_DOWNLOAD_LINKS.ios;
      case isAndroid:
        return isCySEC
          ? MT5_DOWNLOAD_LINKS.androidFSA
          : MT5_DOWNLOAD_LINKS.androidEU;
      case isWindows:
        return MT5_DOWNLOAD_LINKS.windows;
      case isMacOs:
        return MT5_DOWNLOAD_LINKS.mac;
      default:
        return MT5_DOWNLOAD_LINKS.windows;
    }
  }, [isIOS, isAndroid, isWindows, isMacOs]);
  console.log(isWindows, "WINDOWS");
  console.log(getOSDevice);

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
          <a to={MT5_DOWNLOAD_LINKS.android}>
            {t("mt5_mt-promotion-download-android")}
          </a>
          {/*
          Metaquotes Apps are no longer available for iOS unless you have downloaded them before September 2022
           <Link to={MT5_DOWNLOAD_LINKS.ios}>
            {t("mt5_mt-promotion-download-ios")}
          </Link> */}
        </>
      ),
    },
    {
      id: 2,
      title: t("mt-promotion-tabs-desktop"),
      content: (
        <>
          <a href={MT5_DOWNLOAD_LINKS.mac}>
            {t("mt5_mt-promotion-download-mac")}
          </a>
          <a href={MT5_DOWNLOAD_LINKS.windows}>
            {t("mt5_mt-promotion-download-windows")}
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
            href={MT5_DOWNLOAD_LINKS.webtrader}
            target="_blank"
            rel="noreferrer"
          >
            {t("mt5_mt-promotion-download-webtrader")}
          </a>
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
        btnOnClick={scrollToTarget}
        link={getOSDevice()}
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
        advantages={mt5Advantages}
        downloadTitle={t("mt5_download-title")}
        image={image}
        tabs={tabs}
        ref={downloadRef}
      />
      {/* Temporarily removed for the EU because of https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-183 */}
      {!isCySEC && (
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
      )}
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
