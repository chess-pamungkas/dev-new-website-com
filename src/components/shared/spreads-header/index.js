import React from "react";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import SpreadsIcon from "../../../assets/images/icons/main-page/features-execution-excellence/features.svg";

const SpreadsHeader = ({ tradingType }) => {
  const { t } = useTranslationWithVariables();

  return (
    <div className="spreads-header">
      <div className="spreads-badge">
        <img src={SpreadsIcon} alt="Spreads" className="spreads-badge__icon" />
        <span className="spreads-badge__text">{t("spreads-badge-text")}</span>
      </div>
      <h2 className="spreads-title">
        {t("spreads-title", { tradingType: t(`${tradingType}-text`) })}
      </h2>
      <p className="spreads-subtitle">{t("spreads-subtitle")}</p>
    </div>
  );
};

SpreadsHeader.propTypes = {
  tradingType: PropTypes.string.isRequired, // e.g., "metals", "forex", "crypto"
};

export default SpreadsHeader;
