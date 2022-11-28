import React from "react";
import TopMarketPromotion from "../../top-market-promotion";
import cn from "classnames";
import image from "../../../assets/images/about-pages/career.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { LogoTextMain } from "../../shared/icons";
import CareerPros from "../../career-pros";

const CareerContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  return (
    <>
      <TopMarketPromotion
        className={cn("career-page-promotion", {
          "career-page-promotion--rtl": isRTL,
        })}
        image={image}
        note={<LogoTextMain className="career-page-promotion__logo" />}
        btnTitle={t(`career_top-market-promo-btn`)}
        btnClassName="button-link--black"
        // TODO replace with the real link
        link={"/"}
        btnTitle2={t(`career_top-market-promo-btn2`)}
        // TODO replace with the real link
        link2={"/"}
        isButtonAndLink
      >
        <HighlightedLocalizationText
          localizationText="career_top-market-promo-text"
          wordsToHighlight="career_top-market-promo-text-accent"
          primaryClassName="highlighted-in-white"
          accentClassName="highlighted-in-black"
        />
      </TopMarketPromotion>
      <CareerPros />
    </>
  );
};

export default CareerContent;
