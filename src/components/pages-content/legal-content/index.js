import React from "react";
import TopMarketPromotion from "../../top-market-promotion";
import cn from "classnames";
import image from "../../../assets/images/about-pages/legal-banner.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import cysec from "../../../assets/images/about-pages/cysec.png";
import Documents from "../../documents";
import { getLegalDocs } from "../../../helpers/documents";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { isCySEC } from "../../../helpers/entity-resolver";

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
        btnTitle={t("legal_top-market-promo-btn-cysec")}
        link="#legalDocuments"
        isAnchorLink
      >
        <HighlightedLocalizationText
          localizationText={"legal_top-market-promo-text-cysec"}
          wordsToHighlight={"legal_top-market-promo-text-accent-cysec"}
          primaryClassName="highlighted-in-black"
          accentClassName={isXL ? "highlighted-in-red" : "highlighted-in-white"}
        />
      </TopMarketPromotion>
      <TopMarketPromotion
        className={cn("legal-page-esma", {
          "legal-page-esma--rtl": isRTL,
        })}
        image={cysecImg}
        btnTitle={t("legal_top-market-promo-btn2-cysec")}
        note={t("legal_top-market-promo-note-cysec")}
        link="#legalDocuments"
        isAnchorLink
      >
        <HighlightedLocalizationText
          localizationText={"legal_top-market-promo-text2-cysec"}
          wordsToHighlight={"legal_top-market-promo-text-accent2-cysec"}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <Documents
        title={t("legal_documents-title-cysec")}
        text={
          <>
            <span className="bold">{t("legal_documents-text-bold-cysec")}</span>
            <span>{t("legal_documents-text-cysec")}</span>
          </>
        }
        documents={getLegalDocs()}
      />
    </>
  );
};

export default LegalContent;
