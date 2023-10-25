import React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../../../../../helpers/hooks/use-rtl-direction";
import { useTranslation } from "gatsby-plugin-react-i18next";

const FeatureItem = ({ img, title, description }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <div
      className={cn("feature-item", {
        "feature-item--rtl": isRTL,
      })}
    >
      <img className="feature-item__img" src={img} alt={""} />
      <h2 className="feature-item__title">{t(title)}</h2>
      <p className="feature-item__description">{t(description)}</p>
    </div>
  );
};

export default FeatureItem;
