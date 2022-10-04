import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import Faq from "../components/faq";
import {
  FAQ_ALL,
  FAQ_BEGINNERS,
  FAQ_MARKET,
  FAQ_QUICK_ANSWER,
} from "../helpers/faq";
import { stringTransformToKebabCase } from "../helpers/services/string-service";
import cn from "classnames";

const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-faq-title")} />
      <h2>{t("faq_quick-title")}</h2>
      <p>{t("faq_quick-subtitle")}</p>
      {FAQ_QUICK_ANSWER.map((item) => (
        <Faq
          key="faq-quick-answer"
          faq={item.content}
          className={cn("faq-page", "faq-page--quick-answer")}
          isFaqBtnHidden
        />
      ))}
      {FAQ_ALL.map((item) => (
        <Faq
          key={`faq-${stringTransformToKebabCase(item.title)}`}
          title={t(item.title)}
          faq={item.content}
          className={cn("faq-page", "faq-page--all")}
          isFaqBtnHidden
        />
      ))}
      <h2>{t("faq_market-title")}</h2>
      {FAQ_MARKET.map((item) => (
        <Faq
          key={`faq-${stringTransformToKebabCase(item.title)}`}
          title={t(item.title)}
          faq={item.content}
          className={cn("faq-page", "faq-page--market")}
          isFaqBtnHidden
        />
      ))}
      <h2>{t("faq_beginners-title")}</h2>
      {FAQ_BEGINNERS.map((item) => (
        <Faq
          key="faq-beginners-terminology"
          title={t(item.title)}
          faq={item.content}
          className={cn("faq-page", "faq-page--beginners")}
          isFaqBtnHidden
        />
      ))}
    </Layout>
  );
};

export default FaqPage;

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
