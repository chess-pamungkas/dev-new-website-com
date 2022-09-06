import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const CompanyAdvantageBlock = ({ className, icon: Icon, title, textArray }) => {
  const { t } = useTranslation();
  return (
    <div className={cn("company-advantage-block", className)}>
      <div className="company-advantage-block__front">
        <Icon className="company-advantage-block__icon" />
        <p className="company-advantage-block__title">{t(title)}</p>
      </div>
      <div className="company-advantage-block__back">
        <p
          className={cn(
            "company-advantage-block__title",
            "company-advantage-block__title--back"
          )}
        >
          {t(title)}
        </p>
        <p className="company-advantage-block__text">
          {textArray.map((text) => (
            <span>{t(text)}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CompanyAdvantageBlock;
