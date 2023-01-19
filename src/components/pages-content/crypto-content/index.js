import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/cripto.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import StaticImages from "../../../components/promotion-markets/static-images";
import MarketingImage from "../../../assets/images/bg/promotions/crypto/crypto@2x.png";
import animation from "../../../assets/images/bg/promotions/crypto/crypto.json";
import TopMarketLayout from "../../top-market-layout";
import crypto from "../../../assets/images/top-markets/images/crypto.svg";

import {
  COLUMNS_CRYPTO,
  DATA_CRYPTO,
} from "../../../helpers/top-market-tables";
import TableComponent from "../../shared/table";
import { FAQ_CRYPTO } from "../../../helpers/faq";
import Faq from "../../faq";
import NotFoundContent from "../not-found-page-content";
import { CRYPTO_TRADING_SECTION } from "../../../helpers/config";

const CryptoContent = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  const { sitePostfix, isCySEC } = useEntityPostfix();

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
          <StaticImages
            image={MarketingImage}
            height={isMobile ? 400 : 800}
            animation={animation}
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
