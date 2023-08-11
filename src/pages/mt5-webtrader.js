import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import WebTraderLink from "../components/mt5-webtrader";
import CommonContext from "../context/common-context";
import comingSoonImage from "../assets/images/system-info/coming-soon.svg";
import SystemInfoComponent from "../components/shared/system-info";
import { isCySEC } from "../helpers/entity-resolver";
import { useTranslation } from "gatsby-plugin-react-i18next";

const MT5WebTraderPage = () => {
  const { setIsSearchBarAttached } = useContext(CommonContext);
  const { t } = useTranslation();

  useEffect(() => {
    setIsSearchBarAttached(false);

    return () => setIsSearchBarAttached(true);
  }, []);

  return (
    <>
      <Seo
        fsaTitle={t("system-page-coming-soon-title")}
        cysecTitle={"MT5 Web Trader"}
        fsaRobots={"noindex"}
      />
      {isCySEC ? (
        <WebTraderLink />
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

export default MT5WebTraderPage;

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
