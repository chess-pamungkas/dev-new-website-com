import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import Mt4PageContent from "../components/pages-content/mt4-page-content";
import { isCySEC } from "../helpers/entity-resolver";
import comingSoonImage from "../assets/images/system-info/coming-soon.svg";
import SystemInfoComponent from "../components/shared/system-info";
import PageLayout from "../components/shared/page-layout";

const MT4Page = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo
        fsaTitle={t("page-mt4-title")}
        fsaDescription={t("page-mt4-description")}
        cysecTitle={t("system-page-coming-soon-title")}
        cysecDescription={""}
        // Temporary added for the EU because of https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-166
        fsaRobots={""}
        cysecRobots={"noindex"}
      />
      {isCySEC ? (
        <SystemInfoComponent
          image={comingSoonImage}
          title={t("system-page-coming-soon-title")}
          subTitle={t("system-page-coming-soon-subtitle")}
          goBackBtnTitle={t("system-page-go-back-btn")}
        />
      ) : (
        <Mt4PageContent />
      )}
    </PageLayout>
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
