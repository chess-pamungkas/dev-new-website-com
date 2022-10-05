import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ButtonLink from "../../shared/button-link";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import AccountTypeAdvantage from "../account-type-advantage";
import { stringTransformToKebabCase } from "../../../helpers/services/string-service";

const AccountType = ({ className, title, name, btnTitle, advantages }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("account-type", className)}>
      <div className="account-type__header" />
      <p className="account-type__title">{t(title)}</p>
      <h2 className="account-type__name">{t(name)}</h2>
      {advantages.map((block) => (
        <AccountTypeAdvantage
          key={`account-type-adv-${stringTransformToKebabCase(block.title)}`}
          {...block}
        />
      ))}
      <ButtonLink link={REGISTRATION_LINK} className="account-type__btn">
        {t(btnTitle)}
      </ButtonLink>
    </div>
  );
};

export default AccountType;
