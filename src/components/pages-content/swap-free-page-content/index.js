import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TopMarket from "../../top-market";
import topPromo from "../../../assets/images/swap-free/top-promo.png";
import { GetRegistrationLink } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import SwapFreeTopPromotion from "../../swap-free/components/swap-free-top-promotion";
import SwapFreeCenterPromotion from "../../swap-free/components/swap-free-center-promotion";
import SwapFreeAdvantages from "../../swap-free/components/swap-free-advantages";
import { SWAP_FREE_ADVANTAGES } from "../../../helpers/swap-free.config";
import SwapFreeBottomPromotion from "../../swap-free/components/bottom-promotion";

const SwapFreeContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <TopMarket
        title={
          <HighlightedLocalizationText
            localizationText="swap-free_top-market-title"
            wordsToHighlight="swap-free_top-market-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
        image={topPromo}
        btn1Title={t("swap-free_top-market-btn")}
        link1={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText="swap-free_top-market-promo-text"
          wordsToHighlight="swap-free_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <SwapFreeTopPromotion />
      <SwapFreeCenterPromotion />
      <SwapFreeAdvantages advantages={SWAP_FREE_ADVANTAGES} />
      <SwapFreeBottomPromotion />
    </>
  );
};

export default SwapFreeContent;
