import React, { useState } from "react";
import cn from "classnames";

export const CookieCategoryItem = ({
  title,
  categoryKey,
  initialValue,
  canBeChanged,
  acceptedCookies,
  setAcceptedCookies,
  className,
}) => {
  const [checked, setChecked] = useState(initialValue);

  const onClick = () => {
    acceptedCookies[categoryKey] = !checked;
    setAcceptedCookies(acceptedCookies);
    setChecked(!checked);
  };

  return (
    <div className={cn("gdpr-popup__category", className)} key={categoryKey}>
      <div
        className={cn("gdpr-popup__category-title", {
          "gdpr-popup__category-title--disabled": !canBeChanged,
        })}
      >
        {title}
      </div>
      <label className="gdpr-popup__switch">
        <input
          className="gdpr-popup__checkbox"
          type="checkbox"
          checked={checked}
          id={categoryKey}
          onChange={canBeChanged ? onClick : undefined}
        />
        <span
          className={cn(
            "gdpr-popup__slider",
            { "gdpr-popup__slider--checked": checked },
            { "gdpr-popup__slider--disabled": !canBeChanged }
          )}
        ></span>
      </label>
    </div>
  );
};
