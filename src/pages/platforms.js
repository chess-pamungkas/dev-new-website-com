import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import image from "../assets/images/top-markets/cripto.svg";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import MetaTrader from "../components/meta-trader";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import { META_TRADER_4, META_TRADER_5 } from "../helpers/platfoms.config";
import cn from "classnames";

const PlatformsPage = () => {
  const { t } = useTranslation();
  const META_TRADERS = [META_TRADER_4, META_TRADER_5];

  return (
    <Layout>
      <Seo title={t("page-platforms-title")} />
      <TopMarket
        className={cn("top-market--platforms")}
        image={image}
        subImageTemplate={
          <div className={cn("top-market__trader-tools")}>
            <img src={META_TRADER_4.icon} alt={t(META_TRADER_4.title)} />
            <img src={META_TRADER_5.icon} alt={t(META_TRADER_5.title)} />
          </div>
        }
      >
        <HighlightedLocalizationText
          localizationText="platforms_top-market-promo-text"
          wordsToHighlight="platforms-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      {META_TRADERS.map((trader) => (
        <MetaTrader {...trader} />
      ))}
    </Layout>
  );
};

export default PlatformsPage;

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
