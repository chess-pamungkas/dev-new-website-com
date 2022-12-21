import React from "react";
import TopMarket from "../../top-market";
import promotion from "../../../assets/images/professional-qualification/promotion.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import SplitTextPromotion from "../../split-text-promotion";
import TopMarketLayout from "../../top-market-layout";
import TableComponent from "../../shared/table";
import {
  COLUMNS_PROFESSIONAL_QUALIFICATION,
  DATA_PROFESSIONAL_QUALIFICATION,
} from "../../../helpers/copy-trading.config";
import TextBanner from "../../text-banner";
import { LOGIN_LINK, REGISTRATION_LINK } from "../../../helpers/constants";
import TopMarketPromotion from "../../top-market-promotion";
import cn from "classnames";
import icon from "../../../assets/images/icon--white.svg";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import AdvantageList from "../../professional-qualification/advantage-list";

const ProfessionalQualificationPageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  return (
    <>
      <TopMarket
        className="top-market--professional-qualification"
        image={promotion}
        btn1Title={t("professional-qualification_top-market-btn")}
        link1="#eligibilityCriteria"
        isAnchorLink1
        title={
          <HighlightedLocalizationText
            localizationText="professional-qualification_top-market-text"
            wordsToHighlight="professional-qualification_top-market-text-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="professional-qualification_top-market-note"
          wordsToHighlight="professional-qualification_top-market-note-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <AdvantageList
        title={
          <HighlightedLocalizationText
            localizationText="professional-qualification_performance-title"
            wordsToHighlight="professional-qualification_performance-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      />
      <SplitTextPromotion
        title={t("professional-qualification_split-text-promotion-title")}
        className="split-text-promotion--professional-qualification"
        table={
          <TopMarketLayout className="top-market-layout--professional-qualification">
            <TableComponent
              data={DATA_PROFESSIONAL_QUALIFICATION}
              columns={COLUMNS_PROFESSIONAL_QUALIFICATION}
              className="professional-qualification-table"
            />
          </TopMarketLayout>
        }
      >
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_split-text-promotion-text1"
            wordsToHighlight="professional-qualification_split-text-promotion-text1-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_split-text-promotion-text2"
            wordsToHighlight="professional-qualification_split-text-promotion-text2-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_split-text-promotion-text3"
            wordsToHighlight="professional-qualification_split-text-promotion-text3-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_split-text-promotion-text4"
            wordsToHighlight="professional-qualification_split-text-promotion-text4-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
      </SplitTextPromotion>
      <TextBanner
        title={
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-title"
            wordsToHighlight="professional-qualification_text-banner-title-accent"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-black"
          />
        }
        note={
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-note"
            wordsToHighlight="professional-qualification_text-banner-note-accent"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-black"
          />
        }
        btnTitle1={t("professional-qualification_text-banner-btn1")}
        link1={REGISTRATION_LINK}
        btnTitle2={t("professional-qualification_text-banner-btn2")}
        link2={LOGIN_LINK}
        id="eligibilityCriteria"
      >
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-text1"
            wordsToHighlight="professional-qualification_text-banner-text1-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-text2"
            wordsToHighlight="professional-qualification_text-banner-text2-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-text3"
            wordsToHighlight="professional-qualification_text-banner-text3-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </span>
      </TextBanner>
      <TopMarketPromotion
        className={cn("bottom-promotion", {
          "bottom-promotion--rtl": isRTL,
        })}
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("professional-qualification_top-market-promo-btn3")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="professional-qualification_top-market-promo-text3"
          wordsToHighlight="professional-qualification_top-market-promo-text-accent3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </>
  );
};

export default ProfessionalQualificationPageContent;
