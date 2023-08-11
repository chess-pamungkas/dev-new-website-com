import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import Mt4PageContent from "../components/pages-content/mt4-page-content";
import { isCySEC } from "../helpers/entity-resolver";
import NotFoundContent from "../components/pages-content/not-found-page-content";

const MT4Page = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        fsaTitle={t("page-mt4-title")}
        fsaDescription={t("page-mt4-description")}
        cysecTitle={t("system-page-404-title")}
        cysecRobots={"noindex"}
      />
      {isCySEC ? <NotFoundContent /> : <Mt4PageContent />}
    </>
  );
};

export default MT4Page;

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
