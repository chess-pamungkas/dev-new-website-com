import React from "react";
import TopMarketPromotion from "../../top-market-promotion";
import promotion from "../../../assets/images/partners/promotion.svg";
import cn from "classnames";
import { GetRegistrationLink } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import IncomeSlider from "../../partners/components/income-slider";
import PartnersAdvantages from "../../partners/components/advantages";
import { PARTNERS_ADVANTAGES } from "../../../helpers/partners.config";
import HowToStart from "../../partners/components/how-to-start";
import icon from "../../../assets/images/icon--white.svg";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";

const PartnersPageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  return (
    <>
      <TopMarketPromotion
        className={cn("partners-page-promotion", {
          "partners-page-promotion--rtl": isRTL,
        })}
        image={promotion}
        btnClassName={cn("button-link--ghost")}
        btnTitle={t("partners_top-market-promo-btn")}
        link={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText="partners_top-market-promo-text"
          wordsToHighlight="partners_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
      <IncomeSlider />
      <PartnersAdvantages
        title={
          <HighlightedLocalizationText
            localizationText="partners_advantages-title"
            wordsToHighlight="partners_advantages-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        advantages={PARTNERS_ADVANTAGES}
      />
      <HowToStart />
      <TopMarketPromotion
        className={cn("partners-page-bottom-promotion", {
          "partners-page-bottom-promotion--rtl": isRTL,
        })}
        image={icon}
      >
        <HighlightedLocalizationText
          localizationText="partners_top-market-bot-promo-text"
          wordsToHighlight="partners_top-market-bot-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </>
  );
};

export default PartnersPageContent;
