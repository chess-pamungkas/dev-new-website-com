import React from "react";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/shares.svg";
import shares from "../../../assets/images/top-markets/images/shares.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import PromotionMarkets from "../../promotion-markets";
import animation from "../../../assets/images/animations/shares.json";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { SHARES_TRADING_SECTION } from "../../../helpers/config";
import Faq from "../../faq";
import { FAQ_SHARES } from "../../../helpers/faq";

const SharesContent = () => {
  const { sitePostfix } = useEntityPostfix();
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const COLUMNS_SHARES = [
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
      <TopMarket
        title={t(`shares_top-market-title${sitePostfix}`)}
        image={image}
        isChildrenHasSmallSize
        btn1Title={t("shares_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("shares_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText={`shares_top-market-promo-text${sitePostfix}`}
          wordsToHighlight={`shares_top-market-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker
        title={t("shares_trading-ticker-title")}
        pageSpecificSection={SHARES_TRADING_SECTION}
        isInfiniteAutoScroll={true}
      />
      <TopMarketPromotion
        className="shares-promotion"
        image={shares}
        btnTitle={t("shares_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText={`shares_top-market-promotion-promo-text${sitePostfix}`}
          wordsToHighlight={`shares_top-market-promotion-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        className="promotion-markets--shares"
        animation={animation}
        animationStyle={{
          height: isMobile ? 301 : 473,
        }}
        btnTitle={t("shares_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-1"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-1"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-2"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-2"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-3"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-4"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-4"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-5"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-5"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-6"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-6"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="shares_promotion-markets-promo-text-7"
          wordsToHighlight="shares-promotion-markets-promo-text-accent-7"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
      {/*Removed due to ticket https://oqtima-website.atlassian.net/browse/OW-209?atlOrigin=eyJpIjoiMDlmNzI4YTk4NzZjNGYxMmIxMmRiMzE1NjdlYTdmMTIiLCJwIjoiaiJ9 */}
      {/* <TopMarketLayout
        title={t("shares_top-market-layout-title")}
        btnTitle={t("shares_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_SHARES}
          columns={COLUMNS_SHARES}
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
      </TopMarketLayout> */}

      <Faq faq={FAQ_SHARES} />
    </>
  );
};

export default SharesContent;
