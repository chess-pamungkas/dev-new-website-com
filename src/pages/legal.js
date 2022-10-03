import React, { useContext, useEffect, useState } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import image from "../assets/images/about-pages/legal-banner.svg";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import cysec from "../assets/images/about-pages/cysec.png";
import fsa from "../assets/images/about-pages/fsa.png";
import Documents from "../components/documents";
import { LEGAL_DOCS } from "../helpers/documents";
import ClientResolverContext from "../context/client-resolver-context";
import entities from "../enums/entities";
import { FSA_POSTFIX } from "../helpers/constants";
import cn from "classnames";

const LegalPage = () => {
  const { t } = useTranslation();
  const { isXL } = useWindowSize();
  const { currentEntity } = useContext(ClientResolverContext);

  const [sitePostfix, setSitePostfix] = useState("");
  const [isCySEC, setIsCySEC] = useState(null);

  useEffect(() => {
    setIsCySEC(currentEntity === entities.CYSEC);
    setSitePostfix(currentEntity === entities.FSA ? FSA_POSTFIX : "");
  }, [currentEntity]);

  return (
    <Layout>
      <Seo title={t("page-legal-title")} />
      <TopMarketPromotion
        className={cn("legal-page-promotion", {
          "legal-page-promotion--cysec": isCySEC,
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
        className="legal-page-esma"
        image={isCySEC ? cysec : fsa}
        btnTitle={isCySEC ? t("legal_top-market-promo-btn2") : null}
        note={
          isCySEC ? (
            t("legal_top-market-promo-note")
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
              <span className="bold">{t("legal_documents-text-bold")}</span>
              <span>{t("legal_documents-text")}</span>
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
        // TODO add real docs for fsa and cysec
        documents={LEGAL_DOCS}
      />
    </Layout>
  );
};

export default LegalPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
