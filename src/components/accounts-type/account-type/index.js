import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import ButtonLink from "../../shared/button-link";
import { GetRegistrationLink } from "../../../helpers/constants";
import AccountTypeAdvantage from "../account-type-advantage";
import { stringTransformToKebabCase } from "../../../helpers/services/string-service";

const AccountType = ({
  className,
  title,
  name,
  btnTitle,
  gridArea,
  advantages,
}) => {
  const { t } = useTranslationWithVariables();

  return (
    <div className={cn("account-type", className, gridArea)}>
      <div className="account-type__header" />
      <p className="account-type__title">{t(title)}</p>
      <h2 className="account-type__name">{t(name)}</h2>
      {advantages.map((block) => (
        <AccountTypeAdvantage
          key={`account-type-adv-${stringTransformToKebabCase(block.title)}`}
          {...block}
        />
      ))}
      <ButtonLink link={GetRegistrationLink()} className="account-type__btn">
        {t(btnTitle)}
      </ButtonLink>
    </div>
  );
};

AccountType.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  gridArea: PropTypes.string,
  advantages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ).isRequired,
};
export default AccountType;
