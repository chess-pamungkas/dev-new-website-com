import React from "react";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";

const AccountTypeAdvantage = ({
  className,
  title,
  value,
  isIcon,
  icon,
  skipHr,
  smallValue,
  higherLine,
}) => {
  const { t } = useTranslationWithVariables();

  return (
    <div className={cn("account-type-advantage", className)}>
      <p className="account-type-advantage__title">{t(title)}</p>
      {isIcon ? (
        <img className="account-type-advantage__icon" src={icon} alt="" />
      ) : (
        <p
          className={cn("account-type-advantage__value", {
            "account-type-advantage__value--small": smallValue,
            "account-type-advantage__value--higher": higherLine,
          })}
        >
          {t(value)}
        </p>
      )}
      {!skipHr && <hr className="account-type-advantage__hr" />}
    </div>
  );
};

export default AccountTypeAdvantage;
