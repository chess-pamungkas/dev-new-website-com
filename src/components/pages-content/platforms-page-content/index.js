import React from "react";
import cn from "classnames";
import TopMarket from "../../top-market";
import { getTradersList } from "../../../helpers/platforms.config";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MetaTrader from "../../meta-trader";
import TopMarketPromotion from "../../top-market-promotion";
import icon from "../../../assets/images/icon--white.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import platforms from "../../../assets/images/platforms/platforms.svg";

const PlatformsPageContent = () => {
  const { t } = useTranslationWithVariables();
  const { isXL } = useWindowSize();
  const META_TRADERS = getTradersList();
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
            {META_TRADERS.map((trader) => (
              <img key={trader.title} src={trader.icon} alt={t(trader.title)} />
            ))}
          </div>
        }
      >
        <HighlightedLocalizationText
          localizationText="platforms_top-market-promo-text"
          wordsToHighlight="platforms-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      {META_TRADERS.map((trader, index) => (
        <MetaTrader key={trader.id || trader.title || index} {...trader} />
      ))}
      {isXL && (
        <TopMarketPromotion
          className={cn("bottom-promotion", {
            "bottom-promotion--rtl": isRTL,
          })}
          image={icon}
          btnClassName="button-link--red"
          btnTitle={t("platforms_bottom-top-market-promo-btn")}
          link={GetRegistrationLink()}
        >
          <HighlightedLocalizationText
            localizationText="platforms_bottom-top-market-promo-text"
            wordsToHighlight="platforms_bottom-top-market-promo-text-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </TopMarketPromotion>
      )}
    </>
  );
};

export default PlatformsPageContent;
