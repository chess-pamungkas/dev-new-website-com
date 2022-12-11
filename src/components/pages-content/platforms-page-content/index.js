import React from "react";
import cn from "classnames";
import TopMarket from "../../top-market";
import {
  META_TRADER_4,
  META_TRADER_5,
} from "../../../helpers/platforms.config";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MetaTrader from "../../meta-trader";
import TopMarketPromotion from "../../top-market-promotion";
import icon from "../../../assets/images/icon--white.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import platforms from "../../../assets/images/platforms/platforms.svg";

const PlatformsPageContent = () => {
  const { t } = useTranslation();
  const { isXL } = useWindowSize();
  const META_TRADERS = [META_TRADER_4, META_TRADER_5];
  const isRTL = useRtlDirection();

  return (
    <>
      <TopMarket
        className={cn("top-market--platforms", {
          "top-market--platforms--rtl": isRTL,
        })}
        image={platforms}
        subImageTemplate={
          <div className={cn("top-market__trader-tools")}>
            <img src={META_TRADER_4.icon} alt={t(META_TRADER_4.title)} />
            <img src={META_TRADER_5.icon} alt={t(META_TRADER_5.title)} />
          </div>
        }
      >
        <HighlightedLocalizationText
          localizationText="platforms_top-market-promo-text"
          wordsToHighlight="platforms_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      {META_TRADERS.map((trader) => (
        <MetaTrader {...trader} />
      ))}
      {isXL && (
        <TopMarketPromotion
          className={cn("bottom-promotion", {
            "bottom-promotion--rtl": isRTL,
          })}
          image={icon}
          btnClassName="button-link--red"
          btnTitle={t("platforms_top-market-promo-btn")}
          link={REGISTRATION_LINK}
        >
          <HighlightedLocalizationText
            localizationText="platforms_top-market-promo-text"
            wordsToHighlight="platforms_top-market-promo-text-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </TopMarketPromotion>
      )}
    </>
  );
};

export default PlatformsPageContent;
