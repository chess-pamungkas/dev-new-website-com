import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import Mt5PageContent from "../components/pages-content/mt5-page-content";
import { isCySEC } from "../helpers/entity-resolver";
import comingSoonImage from "../assets/images/system-info/coming-soon.svg";
import SystemInfoComponent from "../components/shared/system-info";

const MT5Page = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        fsaTitle={t("system-page-coming-soon-title")}
        cysecTitle={t("page-mt5-title")}
        cysecDescription={t("page-mt5-description")}
        fsaRobots={"noindex"}
      />
      {isCySEC ? (
        <Mt5PageContent />
      ) : (
        <SystemInfoComponent
          image={comingSoonImage}
          title={t("system-page-coming-soon-title")}
          subTitle={t("system-page-coming-soon-subtitle")}
          goBackBtnTitle={t("system-page-go-back-btn")}
        />
      )}
    </>
  );
};

export default MT5Page;

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
