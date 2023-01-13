import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import Mt4PageContent from "../components/pages-content/mt4-page-content";
import { useEntityPostfix } from "../helpers/use-entity-postfix";

const MT4Page = () => {
  const { t } = useTranslation();
  const { isCySEC } = useEntityPostfix();

  return (
    <Layout>
      <Seo
        title={t("page-mt4-title")}
        description={t("page-mt4-description")}
        // Temporary added for the EU because of https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-166
        robots={isCySEC ? "noindex" : ""}
      />
      <Mt4PageContent />
    </Layout>
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
