import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import promotion from "../assets/images/accounts-type/promotion.svg";
import middlePromotion from "../assets/images/accounts-type/middle-promotion.svg";
import icon from "../assets/images/icon--white.svg";
import { REGISTRATION_LINK } from "../helpers/constants";
import AccountsType from "../components/accounts-type";

const AccountsTypePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-accounts-type-title")} />
      <TopMarketPromotion
        className="accounts-type-page-promotion"
        image={promotion}
      >
        <HighlightedLocalizationText
          localizationText="accounts-type_top-market-promo-text"
          wordsToHighlight="accounts-type_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
      <AccountsType />
      <TopMarketPromotion
        className="accounts-type-page-mid-promotion"
        image={middlePromotion}
        btnClassName="button-link--ghost"
        btnTitle={t("accounts-type_top-market-mid-promo-btn")}
        link={REGISTRATION_LINK}
      />
      <TopMarketPromotion
        className="accounts-type-page-bottom-promotion"
        image={icon}
        btnClassName="button-link--ghost"
        btnTitle={t("accounts-type_top-market-bot-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="accounts-type_top-market-bot-promo-text"
          wordsToHighlight="accounts-type_top-market-bot-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </Layout>
  );
};

export default AccountsTypePage;

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
