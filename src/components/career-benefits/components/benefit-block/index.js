import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const BenefitBlock = ({ className, title, text, icon: Icon }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("benefit-block", className)}>
      <Icon className="benefit-block__icon" />
      <p className="benefit-block__title">{t(title)}</p>
      <p className="benefit-block__text">{t(text)}</p>
    </div>
  );
};

export default BenefitBlock;
