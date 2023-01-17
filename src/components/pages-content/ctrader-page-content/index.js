import React, { useCallback } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TopMarketPromotion from "../../top-market-promotion";
import animation from "../../../assets/images/animations/aggregator_cTrader.json";
import { CTRADER_DOC } from "../../../helpers/documents";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MtPromotion from "../../mt-promotion";
import {
  CTRADER_ADVANTAGES,
  CTRADER_DOWNLOAD_LINKS,
} from "../../../helpers/platforms.config";
import image from "../../../assets/images/mt4/cTrader.png";
import icon from "../../../assets/images/icon--white.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { Link } from "gatsby";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import cn from "classnames";

const CtraderPageContent = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isLG, isXL } = useWindowSize();
  const isRTL = useRtlDirection();

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
          <Link to={CTRADER_DOWNLOAD_LINKS.android}>
            {t("ctrader_mt-promotion-download-android")}
          </Link>
          <Link to={CTRADER_DOWNLOAD_LINKS.ios}>
            {t("ctrader_mt-promotion-download-ios")}
          </Link>
        </>
      ),
    },
    {
      id: 2,
      title: t("mt-promotion-tabs-desktop"),
      content: (
        <>
          <Link to={CTRADER_DOWNLOAD_LINKS.mac}>
            {t("ctrader_mt-promotion-download-mac")}
          </Link>
          <Link to={CTRADER_DOWNLOAD_LINKS.windows}>
            {t("ctrader_mt-promotion-download-windows")}
          </Link>
          <Link to={CTRADER_DOWNLOAD_LINKS.webtrader}>
            {t("ctrader_mt-promotion-download-webtrader")}
          </Link>
        </>
      ),
    },
    {
      id: 2,
      title: t("mt-promotion-tabs-webtrader"),
      content: (
        <>
          <Link to={CTRADER_DOWNLOAD_LINKS.webtrader}>
            {t("ctrader_mt-promotion-download-webtrader")}
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      <TopMarketPromotion
        className={cn("ctrader-page-promotion", {
          "split-bg--rtl": isRTL,
          "ctrader-page-promotion--rtl": isRTL,
        })}
        image={animation}
        isLottieImage
        lottieStyle={getAnimationStyles()}
        btnClassName="button-link--ghost"
        btnTitle={t("ctrader_top-market-promo-btn")}
        link={CTRADER_DOC}
        isDocumentLink
        note={
          <HighlightedLocalizationText
            localizationText="ctrader_top-market-promo-note"
            wordsToHighlight="ctrader_top-market-promo-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="ctrader_top-market-promo-text"
          wordsToHighlight="ctrader_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>

      <MtPromotion
        title={
          <HighlightedLocalizationText
            localizationText="ctrader_top-market-promo-text2"
            wordsToHighlight="ctrader_top-market-promo-text-accent2"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        advantagesTitle={t("ctrader_market-items-list_title")}
        advantages={CTRADER_ADVANTAGES}
        downloadTitle={t("ctrader_download-title")}
        image={image}
        tabs={tabs}
        className="mt-promotion--ctrader"
      />
      <TopMarketPromotion
        className={cn("bottom-promotion", {
          "bottom-promotion--rtl": isRTL,
        })}
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("ctrader_top-market-promo-btn3")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="ctrader_top-market-promo-text3"
          wordsToHighlight="ctrader_top-market-promo-text-accent3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </>
  );
};

export default CtraderPageContent;
