import React, { useCallback, useEffect, useState, useRef } from "react";
import cn from "classnames";
import TopMarketPromotion from "../../top-market-promotion";
import animation from "../../../assets/images/animations/aggregator_MT5.json";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MtPromotion from "../../mt-promotion";
import {
  CYSEC_MT5_ADVANTAGES,
  FSA_MT5_ADVANTAGES,
  MT5_DOWNLOAD_LINKS,
} from "../../../helpers/platforms.config";
import image from "../../../assets/images/mt4/MT4andMT5.png";
import icon from "../../../assets/images/icon--white.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import { isIOS, isAndroid, isWindows, isMacOs } from "react-device-detect";
import { Link } from "gatsby";
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

  const getOSDevice = useCallback(() => {
    switch (true) {
      case isIOS:
        //enable when fsa links available,
        // return isCySEC ? MT5_DOWNLOAD_LINKS.iosEU : MT5_DOWNLOAD_LINKS.iosFSA;
        return MT5_DOWNLOAD_LINKS.iosEU;
      case isAndroid:
        return isCySEC
          ? MT5_DOWNLOAD_LINKS.androidEU
          : MT5_DOWNLOAD_LINKS.androidFSA;
      case isWindows:
        return isCySEC
          ? MT5_DOWNLOAD_LINKS.windowsEU
          : MT5_DOWNLOAD_LINKS.windowsFSA;
      case isMacOs:
        return MT5_DOWNLOAD_LINKS.mac;
      default:
        return isCySEC
          ? MT5_DOWNLOAD_LINKS.windowsEU
          : MT5_DOWNLOAD_LINKS.windowsFSA;
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
      content: isCySEC ? (
        <>
          <a href={MT5_DOWNLOAD_LINKS.androidEU}>
            {t("mt5_mt-promotion-download-android")}
          </a>

          <a href={MT5_DOWNLOAD_LINKS.iosEU}>
            {t("mt5_mt-promotion-download-ios")}
          </a>
        </>
      ) : (
        <>
          <a href={MT5_DOWNLOAD_LINKS.androidFSA}>
            {t("mt5_mt-promotion-download-android")}
          </a>
        </>
      ),
    },
    {
      id: 2,
      title: t("mt-promotion-tabs-desktop"),
      content: isCySEC ? (
        <>
          <a href={MT5_DOWNLOAD_LINKS.mac}>
            {t("mt5_mt-promotion-download-mac")}
          </a>
          <a href={MT5_DOWNLOAD_LINKS.windowsEU}>
            {t("mt5_mt-promotion-download-windows")}
          </a>
        </>
      ) : (
        <>
          <a href={MT5_DOWNLOAD_LINKS.mac}>
            {t("mt5_mt-promotion-download-mac")}
          </a>
          <a href={MT5_DOWNLOAD_LINKS.windowsFSA}>
            {t("mt5_mt-promotion-download-windows")}
          </a>
        </>
      ),
    },
    {
      id: 3,
      title: t("mt-promotion-tabs-webtrader"),
      content: isCySEC ? (
        <>
          <a
            href={MT5_DOWNLOAD_LINKS.webtrader}
            target="_blank"
            rel="noreferrer"
          >
            {t("mt5_mt-promotion-download-webtrader")}
          </a>
        </>
      ) : (
        <Link to="/"> {t("mt5_mt-promotion-download-webtrader")}</Link>
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
      {isXL && (
        <TopMarketPromotion
          className={cn("bottom-promotion", {
            "bottom-promotion--rtl": isRTL,
          })}
          image={icon}
          btnClassName="button-link--red"
          btnTitle={t("mt5_top-market-promo-btn3")}
          link={GetRegistrationLink()}
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
