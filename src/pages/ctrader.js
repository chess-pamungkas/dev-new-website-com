import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import CtraderPageContent from "../components/pages-content/ctrader-page-content";
import NotFoundContent from "../components/pages-content/not-found-page-content";


const CTraderPage = () => {
  const { t } = useTranslationWithVariables();
  // Temporarily hidden https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-539
  return (
    // <>
    //   <Seo
    //     title={t("page-ctrader-title")}
    //     description={t("page-ctrader-description")}
    //   />
    //   <CtraderPageContent />
    // </>
    <>
    <Seo
      title={t("system-page-404-title")}
      robots={"noindex"}
    />
    <NotFoundContent />
  </>
  );
};

export default CTraderPage;

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
