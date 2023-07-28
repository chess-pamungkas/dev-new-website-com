import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Seo from "../components/shared/seo";
import SystemInfoComponent from "../components/shared/system-info";
import image from "../assets/images/system-info/coming-soon.svg";
import { graphql } from "gatsby";

const ComingSoonPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t("system-page-coming-soon-title")} />
      <SystemInfoComponent
        image={image}
        title={t("system-page-coming-soon-title")}
        subTitle={t("system-page-coming-soon-subtitle")}
        goBackBtnTitle={t("system-page-go-back-btn")}
      />
    </>
  );
};

export default ComingSoonPage;

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
