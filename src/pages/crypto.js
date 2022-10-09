import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import { REGISTRATION_LINK } from "../helpers/constants";
import Layout from "../components/shared/layout";
import TopMarketLayout from "../components/top-market-layout";
import { COLUMNS_CRYPTO, DATA_CRYPTO } from "../helpers/top-market-tables";
import TableComponent from "../components/shared/table";
import { FAQ_CRYPTO } from "../helpers/faq";
import Faq from "../components/faq";
import Seo from "../components/shared/seo";
import CryptoContent from "../components/pages-content/crypto-content";

const CryptoPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-crypto-title")} />
      <CryptoContent />
      <TopMarketLayout
        title={t("crypto_top-market-layout-title")}
        btnTitle={t("crypto_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_CRYPTO}
          columns={COLUMNS_CRYPTO}
          isWrapperPadding
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
      </TopMarketLayout>
      <Faq faq={FAQ_CRYPTO} />
    </Layout>
  );
};

export default CryptoPage;

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
