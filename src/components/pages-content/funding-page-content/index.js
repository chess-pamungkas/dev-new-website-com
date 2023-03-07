import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TableComponent from "../../shared/table";
import {
  ColumnDeposit,
  ColumnWithdrawal,
  DataDeposit,
  DataWithdrawal,
} from "../../../helpers/withdrawal.config";
import TopMarketPromotion from "../../top-market-promotion";
import promotion from "../../../assets/images/withdrawal/promotion.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TopMarketLayout from "../../top-market-layout";
import Tabs from "../../shared/tabs";
import icon from "../../../assets/images/icon--white.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";

const FundingPageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();
  const { isCySEC } = useEntityPostfix();

  const tabs = [
    {
      id: 1,
      title: t("withdrawal_tabs_title1"),
      content: (
        <TableComponent
          data={DataDeposit()}
          columns={ColumnDeposit()}
          className="withdrawal-table"
        />
      ),
    },
    {
      id: 2,
      title: t("withdrawal_tabs_title2"),
      content: (
        <TableComponent
          data={DataWithdrawal()}
          columns={ColumnWithdrawal()}
          className={cn("withdrawal-table", "withdrawal-table--wide")}
        />
      ),
    },
  ];
  return (
    <>
      <TopMarketPromotion
        className={cn("withdrawal-page-promotion", {
          "split-bg--rtl": isRTL,
          "withdrawal-page-promotion--rtl": isRTL,
        })}
        image={promotion}
        note={
          <HighlightedLocalizationText
            localizationText={t(
              isCySEC
                ? "withdrawal_top-market-promo-note"
                : "withdrawal_top-market-promo-note-fsa"
            )}
            wordsToHighlight={t(
              isCySEC
                ? "withdrawal_top-market-promo-note-accent"
                : "withdrawal_top-market-promo-note-accent-fsa"
            )}
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
      <section className={cn("notes-block")}>
        <p className="notes-block__text">{t("withdrawal_disclaimer1")}</p>
        <p className="notes-block__text">{t("withdrawal_disclaimer2")}</p>
        <p className="notes-block__text">{t("withdrawal_disclaimer3")}</p>
      </section>
      <TopMarketPromotion
        className={cn("bottom-promotion", {
          "bottom-promotion--rtl": isRTL,
        })}
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("withdrawal_top-market-promo-btn3")}
        link={GetRegistrationLink()}
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
