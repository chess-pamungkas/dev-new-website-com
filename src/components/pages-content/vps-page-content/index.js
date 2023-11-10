import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TopMarket from "../../top-market";
import topPromo from "../../../assets/images/vps/top-promo.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import VPSTopPromotion from "../../vps/components/vps-top-promotion";
import VPSCenterPromotion from "../../vps/components/vps-center-promotion";
import VPSBottomPromotion from "../../vps/components/bottom-promotion";
import VPSAdvantages from "../../vps/components/vps-advantages";
import { VPS_ADVANTAGES } from "../../../helpers/vps.config";

const VPSContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <TopMarket
        title={
          <HighlightedLocalizationText
            localizationText="vps_top-market-title"
            wordsToHighlight="vps_top-market-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
        image={topPromo}
        btn1Title={t("vps_top-market-btn")}
        link1={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText="vps_top-market-promo-text"
          wordsToHighlight="vps_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <VPSTopPromotion />
      <VPSCenterPromotion />
      <VPSAdvantages advantages={VPS_ADVANTAGES} />
      <VPSBottomPromotion />
    </>
  );
};

export default VPSContent;
