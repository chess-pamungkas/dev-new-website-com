import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

export const CookieCategoryItem = ({
  title,
  categoryKey,
  initialValue,
  canBeChanged,
  acceptedCookies,
  setAcceptedCookies,
  className,
}) => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(initialValue);

  const onClick = () => {
    if (!canBeChanged) return;

    acceptedCookies[categoryKey] = !checked;
    setAcceptedCookies(acceptedCookies);
    setChecked(!checked);
  };

  return (
    <div className={cn("gdpr-popup__category", className)}>
      <div
        className={cn("gdpr-popup__category-title", {
          "gdpr-popup__category-title--disabled": !canBeChanged,
        })}
      >
        {t(title)}
      </div>
      <label className="gdpr-popup__switch">
        <input
          className="gdpr-popup__checkbox"
          type="checkbox"
          checked={checked}
          id={categoryKey}
          onChange={onClick}
        />
        <span
          className={cn(
            "gdpr-popup__slider",
            { "gdpr-popup__slider--checked": checked },
            { "gdpr-popup__slider--disabled": !canBeChanged }
          )}
        />
      </label>
    </div>
  );
};
