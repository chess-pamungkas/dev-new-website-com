import React from "react";
import cn from "classnames";
import TopMarket from "../../top-market";
import {
  MetaTrader5info,
  MetaTrader4info,
} from "../../../helpers/platforms.config";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import MetaTrader from "../../meta-trader";
import TopMarketPromotion from "../../top-market-promotion";
import icon from "../../../assets/images/icon--white.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import platforms from "../../../assets/images/platforms/platforms.svg";
import { isCySEC, isFSA } from "../../../helpers/entity-resolver";

const PlatformsPageContent = () => {
  const { t } = useTranslation();
  const { isXL } = useWindowSize();
  //converted this way as before was rendering [] and then again same data
  const META_TRADERS = isCySEC ? [MetaTrader5info()] : [MetaTrader4info()];
  // const META_TRADERS = [
  //   // Temporarily removed for the EU because of https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-166
  //   ...(isCySEC ? [] : [MetaTrader4info()]),
  //   MetaTrader5info(),
  // ];
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
            {/* Temporarily removed for the EU because of https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-166 */}
            {isFSA && (
              <img
                src={MetaTrader4info().icon}
                alt={t(MetaTrader4info().title)}
              />
            )}
            {isCySEC && (
              <img
                src={MetaTrader5info().icon}
                alt={t(MetaTrader5info().title)}
              />
            )}
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
