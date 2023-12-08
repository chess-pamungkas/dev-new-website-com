import React from "react";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import cn from "classnames";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";

const MarketBuzzBlock = ({ img, title, description }) => {
  const { t } = useTranslationWithVariables();
  const isRTL = useRtlDirection();

  return (
    <div
      className={cn("mb-block", {
        "mb-block--rtl": isRTL,
      })}
    >
      <div className="mb-block__img-wrapper">
        <img
          className="mb-block__img"
          src={img}
          alt={stringTransformToKebabCase(title)}
        />
      </div>
      <div className="mb-block__title-wrapper">
        <h2 className="mb-block__title">{t(title)}</h2>
        <p className="mb-block__description">{t(description)}</p>
      </div>
    </div>
  );
};

export default MarketBuzzBlock;
