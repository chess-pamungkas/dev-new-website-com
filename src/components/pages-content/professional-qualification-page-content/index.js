import React from "react";
import TopMarket from "../../top-market";
import promotion from "../../../assets/images/professional-qualification/promotion.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import SplitTextPromotion from "../../split-text-promotion";
import { GetRegistrationLink } from "../../../helpers/constants";
import TopMarketPromotion from "../../top-market-promotion";
import cn from "classnames";
import icon from "../../../assets/images/icon--white.svg";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import AdvantageList from "../../professional-qualification/advantage-list";
import ButtonLink from "../../shared/button-link";
import EligibilityList from "../../professional-qualification/eligibility-list";

const ProfessionalQualificationPageContent = () => {
  const { t } = useTranslationWithVariables();
  const isRTL = useRtlDirection();

  return (
    <>
      <TopMarket
        className="top-market--professional-qualification"
        image={promotion}
        btn1Title={t(`professional-qualification_top-market-btn-fsa`)}
        link1="#eligibilityCriteria"
        isAnchorLink1
        title={
          <HighlightedLocalizationText
            localizationText={`professional-qualification_top-market-text-fsa`}
            wordsToHighlight={`professional-qualification_top-market-text-accent-fsa`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText={`professional-qualification_top-market-note-fsa`}
          wordsToHighlight={`professional-qualification_top-market-note-accent-fsa`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <AdvantageList
        title={
          <HighlightedLocalizationText
            localizationText={`professional-qualification_performance-title-fsa`}
            wordsToHighlight={`professional-qualification_performance-title-accent-fsa`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        text={t(`professional-qualification_performance-text-fsa`)}
      />
      <SplitTextPromotion
        id="eligibilityCriteria"
        title={t(`professional-qualification_text-banner-title-fsa`)}
        subtitle={t(`professional-qualification_text-banner-note-fsa`)}
        className="split-text-promotion--professional-qualification"
        button={
          <ButtonLink
            link={GetRegistrationLink()}
            className="button-link--red split-text-promotion__btn"
          >
            {t(`professional-qualification_text-banner-btn-fsa`)}
          </ButtonLink>
        }
        buttonNote={
          <HighlightedLocalizationText
            localizationText={`professional-qualification_text-banner-btn-note-fsa`}
            wordsToHighlight={`professional-qualification_text-banner-btn-note-accent-fsa`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      >
        <EligibilityList />
      </SplitTextPromotion>
      <TopMarketPromotion
        className={cn("bottom-promotion", {
          "bottom-promotion--rtl": isRTL,
        })}
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t(`professional-qualification_top-market-promo-btn3-fsa`)}
        link={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText={`professional-qualification_top-market-promo-text3-fsa`}
          wordsToHighlight={`professional-qualification_top-market-promo-text-accent3-fsa`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </>
  );
};

export default ProfessionalQualificationPageContent;
