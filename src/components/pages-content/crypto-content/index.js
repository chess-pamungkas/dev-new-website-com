import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/cripto.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import animation from "../../../assets/images/bg/promotions/crypto/crypto.json";
import TopMarketLayout from "../../top-market-layout";
import crypto from "../../../assets/images/top-markets/images/crypto.svg";

import { DATA_CRYPTO } from "../../../helpers/top-market-tables";
import TableComponent from "../../shared/table";
import { FAQ_CRYPTO } from "../../../helpers/faq";
import Faq from "../../faq";
import NotFoundContent from "../not-found-page-content";
import { CRYPTO_TRADING_SECTION } from "../../../helpers/config";
import MarketingCircle from "../../marketing-circle";

const CryptoContent = () => {
  const { t } = useTranslation();
  const { sitePostfix, isCySEC } = useEntityPostfix();

  const COLUMNS_CRYPTO = [
    {
      id: "group1",
      Header: "",
      columns: [
        {
          Header: "",
          accessor: "col1",
        },
      ],
    },
    {
      id: "group2",
      Header: t("oqtima-ecn-account"),
      columns: [
        {
          Header: "Min",
          accessor: "col2",
        },
        {
          Header: "Avg",
          accessor: "col3",
        },
      ],
    },
    {
      id: "group3",
      Header: t("oqtima-one-account"),
      columns: [
        {
          Header: "Min",
          accessor: "col4",
        },
        {
          Header: "Avg",
          accessor: "col5",
        },
      ],
    },
    {
      id: "group4",
      Header: "",
      columns: [
        {
          Header: "Live",
          accessor: "col6",
        },
      ],
    },
  ];

  return (
    <>
      {isCySEC ? (
        <NotFoundContent />
      ) : (
        <>
          <TopMarket
            title={t(`crypto_top-market-title${sitePostfix}`)}
            image={image}
            btn1Title={t(`crypto_top-market-btn1${sitePostfix}`)}
            link1={REGISTRATION_LINK}
            btn2Title={t(`crypto_top-market-btn2${sitePostfix}`)}
            link2={REGISTRATION_LINK}
          >
            <HighlightedLocalizationText
              localizationText={`crypto_top-market-promo-text${sitePostfix}`}
              wordsToHighlight={`crypto-top-market-promo-text-accent${sitePostfix}`}
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-white"
            />
          </TopMarket>
          <TradingTicker
            title={t(`crypto_trading-ticker-title${sitePostfix}`)}
            pageSpecificSection={CRYPTO_TRADING_SECTION}
          />
          <TopMarketPromotion
            className="crypto-promotion"
            image={crypto}
            btnTitle={t(`crypto_top-market-promo-btn${sitePostfix}`)}
            link={REGISTRATION_LINK}
          >
            <HighlightedLocalizationText
              localizationText={`crypto_top-market-promotion-promo-text${sitePostfix}`}
              wordsToHighlight={`crypto-top-market-promotion-promo-text-accent${sitePostfix}`}
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-red"
            />
          </TopMarketPromotion>
          <MarketingCircle
            animation={animation}
            upper={
              <HighlightedLocalizationText
                localizationText={`crypto_marketing-circle-upper${sitePostfix}`}
                wordsToHighlight={`crypto_marketing-circle-upper-accent${sitePostfix}`}
                primaryClassName="highlighted-in-black"
                accentClassName="highlighted-in-red"
              />
            }
            leftUpper={
              <HighlightedLocalizationText
                localizationText={`crypto_marketing-circle-left-upper${sitePostfix}`}
                wordsToHighlight={`crypto_marketing-circle-left-upper-accent${sitePostfix}`}
                primaryClassName="highlighted-in-black"
                accentClassName="highlighted-in-red"
              />
            }
            rightUpper={
              <HighlightedLocalizationText
                localizationText={`crypto_marketing-circle-right-upper${sitePostfix}`}
                wordsToHighlight={`crypto_marketing-circle-right-upper-accent${sitePostfix}`}
                primaryClassName="highlighted-in-black"
                accentClassName="highlighted-in-red"
              />
            }
            bottom={
              <HighlightedLocalizationText
                localizationText={`crypto_marketing-circle-bottom${sitePostfix}`}
                wordsToHighlight={`crypto_marketing-circle-bottom-accent${sitePostfix}`}
                primaryClassName="highlighted-in-black"
                accentClassName="highlighted-in-red"
              />
            }
            leftBottom={
              <HighlightedLocalizationText
                localizationText={`crypto_marketing-circle-left-bottom${sitePostfix}`}
                wordsToHighlight={`crypto_marketing-circle-left-bottom-accent${sitePostfix}`}
                primaryClassName="highlighted-in-black"
                accentClassName="highlighted-in-red"
              />
            }
            rightBottom={
              <HighlightedLocalizationText
                localizationText={`crypto_marketing-circle-right-bottom${sitePostfix}`}
                wordsToHighlight={`crypto_marketing-circle-right-bottom-accent${sitePostfix}`}
                primaryClassName="highlighted-in-black"
                accentClassName="highlighted-in-red"
              />
            }
          />
          <TopMarketLayout
            title={t(`crypto_top-market-layout-title${sitePostfix}`)}
            btnTitle={t(`crypto_top-market-layout-btn${sitePostfix}`)}
            link={REGISTRATION_LINK}
          >
            <TableComponent
              data={DATA_CRYPTO}
              columns={COLUMNS_CRYPTO}
              isWrapperPadding
              tip={
                <span>
                  <span className="bold">*MIN</span>&nbsp;-&nbsp;
                  {t("table-tip1")}
                  &nbsp;
                  <span className="bold">AVG</span>&nbsp;-&nbsp;
                  {t("table-tip2")}
                  &nbsp;
                </span>
              }
              isSearch
            />
          </TopMarketLayout>
          <Faq faq={FAQ_CRYPTO} />
        </>
      )}
    </>
  );
};

export default CryptoContent;
