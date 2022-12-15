import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";

const MarketBuzzBlock = ({ img, title, description }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("mb-block")}>
      <div className="mb-block__img-wrapper">
        <img className="mb-block__img" src={img} alt={stringTransformToKebabCase(title)} />
      </div>
      <div className="mb-block__title-wrapper">
        <h2 className="mb-block__title">{t(title)}</h2>
        <p className="mb-block__description">{t(description)}</p>
      </div>
    </div>
  );
};

export default MarketBuzzBlock;
