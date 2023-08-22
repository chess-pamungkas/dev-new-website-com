import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import CtraderPageContent from "../components/pages-content/ctrader-page-content";
import comingSoonImage from "../assets/images/system-info/coming-soon.svg";
import SystemInfoComponent from "../components/shared/system-info";

const CTraderPage = () => {
  const { t } = useTranslation();

  return (
    // Hidden for now
    <>
      {/* <Seo
        title={t("page-ctrader-title")}
        description={t("page-ctrader-description")}
      /> */}
      <Seo
        title={t("system-page-coming-soon-title")}
        fsaRobots={"noindex"}
        cysecRobots={"noindex"}
      />
      {/* <CtraderPageContent /> */}
      <SystemInfoComponent
          image={comingSoonImage}
          title={t("system-page-coming-soon-title")}
          subTitle={t("system-page-coming-soon-subtitle")}
          goBackBtnTitle={t("system-page-go-back-btn")}
        />
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
