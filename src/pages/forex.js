import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import { REGISTRATION_LINK } from "../helpers/constants";
import Layout from "../components/shared/layout";
import Tabs from "../components/shared/tabs";
import TableComponent from "../components/shared/table";
import Faq from "../components/faq";
import { FAQ_FOREX } from "../helpers/faq";
import { COLUMNS_FOREX, DATA_FOREX } from "../helpers/top-market-tables";
import TopMarketLayout from "../components/top-market-layout";
import Seo from "../components/shared/seo";
import ForexContent from "../components/pages-content/forex-content";

const ForexPage = () => {
  const { t } = useTranslation();

  // TODO:get data from API
  const tabs = [
    {
      id: 1,
      title: "Major",
      content: (
        <TableComponent
          data={DATA_FOREX}
          columns={COLUMNS_FOREX}
          tip={
            <span>
              <span className="bold">*MIN</span>&nbsp;-&nbsp;{t("table-tip1")}
              &nbsp;
              <span className="bold">AVG</span>&nbsp;-&nbsp;{t("table-tip2")}
              &nbsp;
            </span>
          }
          isSearch
        />
      ),
    },
    {
      id: 2,
      title: "Minor",
      content: (
        <TableComponent
          data={DATA_FOREX}
          columns={COLUMNS_FOREX}
          tip={
            <span>
              <span className="bold">*MIN</span>&nbsp;-&nbsp;{t("table-tip1")}
              &nbsp;
              <span className="bold">AVG</span>&nbsp;-&nbsp;{t("table-tip2")}
              &nbsp;
            </span>
          }
          isSearch
        />
      ),
    },
    {
      id: 3,
      title: "Exotic",
      content: (
        <TableComponent
          data={DATA_FOREX}
          columns={COLUMNS_FOREX}
          tip={
            <span>
              <span className="bold">*MIN</span>&nbsp;-&nbsp;{t("table-tip1")}
              &nbsp;
              <span className="bold">AVG</span>&nbsp;-&nbsp;{t("table-tip2")}
              &nbsp;
            </span>
          }
          isSearch
        />
      ),
    },
  ];

  return (
    <Layout>
      <Seo title={t("page-forex-title")} />
      <ForexContent />
      <TopMarketLayout
        title={t("forex_top-market-layout-title")}
        btnTitle={t("forex_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <Tabs tabList={tabs} />
      </TopMarketLayout>
      <Faq faq={FAQ_FOREX} />
    </Layout>
  );
};

export default ForexPage;

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
