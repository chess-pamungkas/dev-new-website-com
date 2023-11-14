import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import VPSContent from "../components/pages-content/vps-page-content";
import NotFoundContent from "../components/pages-content/not-found-page-content";
import { isCySEC } from "../helpers/entity-resolver";

const VPSPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        fsaTitle={t("page-vps-title")}
        cysecTitle={t("system-page-404-title")}
        fsaDescription={t("page-vps-description")}
        cysecRobots={"noindex"}
      />
      {isCySEC ? <NotFoundContent /> : <VPSContent />}
    </>
  );
};

export default VPSPage;

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
