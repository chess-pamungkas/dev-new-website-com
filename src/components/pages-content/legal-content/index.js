import React from "react";
import TopMarketPromotion from "../../top-market-promotion";
import cn from "classnames";
import image from "../../../assets/images/about-pages/legal-banner.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import cysec from "../../../assets/images/about-pages/cysec.svg";
import fsa from "../../../assets/images/about-pages/fsa.png";
import Documents from "../../documents";
import { getLegalDocs } from "../../../helpers/documents";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { isCySEC, sitePostfix } from "../../../helpers/entity-resolver";

const LegalContent = () => {
  const { t } = useTranslationWithVariables();
  const { isXL, isLG } = useWindowSize();
  const isRTL = useRtlDirection();
  const cysecImg = isXL || isLG ? cysec : null;

  return (
    <>
      <TopMarketPromotion
        className={cn("legal-page-promotion", {
          "legal-page-promotion--cysec": isCySEC,
          "legal-page-promotion--rtl": isRTL,
        })}
        image={image}
        btnTitle={t(`legal_top-market-promo-btn${sitePostfix}`)}
        link="#legalDocuments"
        isAnchorLink
      >
        <HighlightedLocalizationText
          localizationText={`legal_top-market-promo-text${sitePostfix}`}
          wordsToHighlight={`legal_top-market-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName={isXL ? "highlighted-in-red" : "highlighted-in-white"}
        />
      </TopMarketPromotion>
      <TopMarketPromotion
        className={cn("legal-page-esma", {
          "legal-page-esma--rtl": isRTL,
        })}
        image={isCySEC ? cysecImg : fsa}
        btnTitle={isCySEC ? t("legal_top-market-promo-btn2-cysec") : null}
        note={
          isCySEC ? (
            t("legal_top-market-promo-note-cysec")
          ) : (
            <>
              <span className="bold">
                {t("legal_top-market-promo-note1-fsa")}
              </span>
              <span>{t("legal_top-market-promo-note2-fsa")}</span>
              <br />
              <br />
              <span className="bold">
                {t("legal_top-market-promo-note3-fsa")}
              </span>
              <span>{t("legal_top-market-promo-note4-fsa")}</span>
            </>
          )
        }
        link="#legalDocuments"
        isAnchorLink
      >
        <HighlightedLocalizationText
          localizationText={`legal_top-market-promo-text2${sitePostfix}`}
          wordsToHighlight={`legal_top-market-promo-text-accent2${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <Documents
        title={t(`legal_documents-title${sitePostfix}`)}
        text={
          isCySEC ? (
            <>
              <span className="bold">
                {t("legal_documents-text-bold-cysec")}
              </span>
              <span>{t("legal_documents-text-cysec")}</span>
            </>
          ) : (
            <>
              <span className="bold">
                <HighlightedLocalizationText
                  localizationText={`legal_documents-text-bold-fsa`}
                  wordsToHighlight={`legal_documents-text-bold-accent-fsa`}
                  primaryClassName="highlighted-in-black"
                  accentClassName="highlighted-in-red"
                />
              </span>
              <span>{t("legal_documents-text-fsa")}</span>
            </>
          )
        }
        documents={getLegalDocs()}
      />
    </>
  );
};

export default LegalContent;
