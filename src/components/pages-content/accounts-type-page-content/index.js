import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TopMarketPromotion from "../../top-market-promotion";
import promotion from "../../../assets/images/accounts-type/promotion.svg";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import AccountsType from "../../accounts-type";
import middlePromotion from "../../../assets/images/accounts-type/middle-promotion.svg";
import { GetRegistrationLink } from "../../../helpers/constants";
import icon from "../../../assets/images/icon--white.svg";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import cn from "classnames";

const AccountsTypePageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  return (
    <>
      <TopMarketPromotion
        className={cn("accounts-type-page-promotion", {
          "accounts-type-page-promotion--rtl": isRTL,
        })}
        image={promotion}
      >
        <HighlightedLocalizationText
          localizationText="accounts-type_top-market-promo-text"
          wordsToHighlight="accounts-type_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
      <AccountsType />
      <TopMarketPromotion
        className="accounts-type-page-mid-promotion"
        image={middlePromotion}
        btnClassName="button-link--ghost"
        btnTitle={t("accounts-type_top-market-mid-promo-btn")}
        link={GetRegistrationLink()}
      />
      <TopMarketPromotion
        className={cn("bottom-promotion", {
          "bottom-promotion--rtl": isRTL,
        })}
        image={icon}
        btnClassName="button-link--ghost"
        btnTitle={t("accounts-type_top-market-bot-promo-btn")}
        link={GetRegistrationLink()}
      >
        <HighlightedLocalizationText
          localizationText="accounts-type_top-market-bot-promo-text"
          wordsToHighlight="accounts-type_top-market-bot-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </>
  );
};

export default AccountsTypePageContent