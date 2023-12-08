import React from "react";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";

const VPSAdvantageItem = ({ className, icon, title, text }) => {
  const { t } = useTranslationWithVariables();
  return (
    <div className={cn("vps-advantage-item", className)}>
      <img src={icon} alt="" className="vps-advantage-item__icon" />
      <p className="vps-advantage-item__title">{t(title)}</p>
      <p className="vps-advantage-item__text">{t(text)}</p>
    </div>
  );
};

export default VPSAdvantageItem;
