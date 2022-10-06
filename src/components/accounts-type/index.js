import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import HighlightedLocalizationText from "../../components/shared/highlighted-localization-text";
import { ACCOUNT_TYPES } from "../../helpers/accounts-type.config";
import AccountType from "./account-type";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";

const AccountsType = ({ className }) => {
  const { t } = useTranslation();

  return (
    <section className={cn("accounts-type", className)}>
      <div className="accounts-type__desc-block">
        <h2 className="accounts-type__title">
          {t("accounts-type_accounts-type-title")}
        </h2>
        <p className="accounts-type__description">
          <HighlightedLocalizationText
            localizationText="accounts-type_accounts-type-description"
            wordsToHighlight="accounts-type_accounts-type-description-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </p>
      </div>
      {ACCOUNT_TYPES.map((block) => (
        <AccountType
          key={`account-type-${stringTransformToKebabCase(block.name)}`}
          {...block}
        />
      ))}
    </section>
  );
};

export default AccountsType;
