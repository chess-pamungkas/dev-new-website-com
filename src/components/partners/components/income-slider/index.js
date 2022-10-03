import React from "react";
import cn from "classnames";
import Slider from "../../../shared/slider";
import { useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {
  CLIENTS_MARKS,
  COST_PER_CLIENT,
  DEFAULT_CLIENTS,
  MAX_CLIENTS,
  MIN_CLIENTS,
} from "../../../../helpers/partners.config";
import { formatMoney } from "../../../../helpers/services/format-money";

const IncomeSlider = ({ className }) => {
  const { t } = useTranslation();
  const [clientsCount, setClientsCount] = useState(DEFAULT_CLIENTS);
  const [totalIncome, setTotalIncome] = useState(
    DEFAULT_CLIENTS * COST_PER_CLIENT
  );

  const onSliderChange = (value) => {
    setClientsCount(value);
    setTotalIncome(value * COST_PER_CLIENT);
  };

  const renderMark = (props) => {
    return (
      <div className={props.className}>
        <span {...props} className={`${props.className}-v-line`} />
        <span {...props} className={`${props.className}-number`}>
          {props.key}
        </span>
      </div>
    );
  };

  return (
    <section className={cn("partners-income", className)}>
      <p className="partners-income__title">
        {t("partners_income-slider-title")}
      </p>
      <p className="partners-income__description">
        {t("partners_income-slider-description")}
      </p>
      <div className="partners-income__total-clients">
        <p className="partners-income__total-num">{clientsCount}</p>
        <p className="partners-income__total-note">
          {t("partners_income-slider-clients-note")}
        </p>
      </div>
      <Slider
        marks={CLIENTS_MARKS}
        minValue={MIN_CLIENTS}
        maxValue={MAX_CLIENTS}
        currentValue={clientsCount}
        onChange={onSliderChange}
        className={"partners-income__slider"}
        trackClassName={"partners-income__slider-track"}
        thumbClassName={"partners-income__slider-thumb"}
        markClassName={"partners-income__slider-mark"}
        renderMark={renderMark}
      />
      <div className="partners-income__total-income">
        <p className="partners-income__total-num">
          &#36; {formatMoney(totalIncome)}
        </p>
        <p className="partners-income__total-note">
          {t("partners_income-slider-income-note")}
        </p>
      </div>
    </section>
  );
};

export default IncomeSlider;
