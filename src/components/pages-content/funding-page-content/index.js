import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TableComponent from "../../shared/table";
import {
  COLUMNS_DEPOSIT,
  COLUMNS_WITHDRAWAL,
  DATA_DEPOSIT,
  DATA_WITHDRAWAL,
} from "../../../helpers/withdrawal.config";
import TopMarketPromotion from "../../top-market-promotion";
import promotion from "../../../assets/images/withdrawal/promotion.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TopMarketLayout from "../../top-market-layout";
import Tabs from "../../shared/tabs";
import icon from "../../../assets/images/icon--white.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";

const FundingPageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  const tabs = [
    {
      id: 1,
      title: t("withdrawal_tabs_title1"),
      content: (
        <TableComponent
          data={DATA_DEPOSIT}
          columns={COLUMNS_DEPOSIT}
          className="withdrawal-table"
        />
      ),
    },
    {
      id: 2,
      title: t("withdrawal_tabs_title2"),
      content: (
        <TableComponent
          data={DATA_WITHDRAWAL}
          columns={COLUMNS_WITHDRAWAL}
          className={cn("withdrawal-table", "withdrawal-table--wide")}
        />
      ),
    },
  ];
  return (
    <>
      <TopMarketPromotion
        className={cn("withdrawal-page-promotion", {
          "withdrawal-page-promotion--rtl": isRTL,
        })}
        image={promotion}
        note={
          <HighlightedLocalizationText
            localizationText="withdrawal_top-market-promo-note"
            wordsToHighlight="withdrawal_top-market-promo-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="withdrawal_top-market-promo-text"
          wordsToHighlight="withdrawal_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
      <TopMarketPromotion
        className={cn("black-promotion", {
          "funding-black-promotion--rtl": isRTL,
        })}
      >
        <span className="display-block">
          <HighlightedLocalizationText
            localizationText="withdrawal_top-market-promo-text2-1"
            wordsToHighlight="withdrawal_top-market-promo-text-accent2-1"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="display-block">
          <HighlightedLocalizationText
            localizationText="withdrawal_top-market-promo-text2-2"
            wordsToHighlight="withdrawal_top-market-promo-text-accent2-2"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="display-block">
          <HighlightedLocalizationText
            localizationText="withdrawal_top-market-promo-text2-3"
            wordsToHighlight="withdrawal_top-market-promo-text-accent2-3"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-red"
          />
        </span>
      </TopMarketPromotion>
      <TopMarketLayout className="top-market-layout--withdrawal">
        <Tabs tabList={tabs} />
      </TopMarketLayout>
      <TopMarketPromotion
        className="bottom-promotion"
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("withdrawal_top-market-promo-btn3")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="withdrawal_top-market-promo-text3"
          wordsToHighlight="withdrawal_top-market-promo-text-accent3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </>
  );
};

export default FundingPageContent;
