import ButtonLink from "../components/shared/button-link";
import cn from "classnames";
import React from "react";
import { PAYMENT_SYSTEMS, GetDepositLink } from "./constants";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { isCySEC, sitePostfix } from "./entity-resolver";

export const ColumnDeposit = () => {
  const { t } = useTranslation();

  const COLUMNS_DEPOSIT = [
    {
      accessor: "col1",
      Header: t("withdrawal_column_title1"),
    },
    {
      accessor: "col2",
      Header: t("withdrawal_column_title2"),
    },
    {
      accessor: "col3",
      Header: t("deposit_column_title3"),
    },
    {
      accessor: "col4",
      Header: t("withdrawal_column_title4"),
    },
    {
      accessor: "col5",
      Header: t("withdrawal_column_title5"),
    },
    {
      accessor: "col6",
      Header: "",
    },
  ];
  return COLUMNS_DEPOSIT;
};

const DEPOSIT_COLUMNS_WITH_BTN = () => {
  const { t } = useTranslation();
  return (
    <ButtonLink link={GetDepositLink()} className={cn("withdrawal-table__btn")}>
      {t("withdrawal_data_btn")}
    </ButtonLink>
  );
};

const FSA_CURRENCIES = "USD, BRL, EUR, AUD, CHE, JPY, CNY, CAD";
const CYSEC_CURRENCIES = "EUR, USD, GBP, CHF";

export const DataDeposit = () => {
  const { t } = useTranslation();
  const CURRENCIES = isCySEC ? CYSEC_CURRENCIES : FSA_CURRENCIES;
  const DATA_DEPOSIT = [
    {
      col1: (
        <>
          <span>{t("withdrawal_data_title1")}</span>
          <div className="table__img-wrapper">
            <img
              src={PAYMENT_SYSTEMS.visa.logo}
              alt={PAYMENT_SYSTEMS.visa.alt}
            />
            <img
              src={PAYMENT_SYSTEMS.masterCard.logo}
              alt={PAYMENT_SYSTEMS.masterCard.alt}
            />
            <img
              src={PAYMENT_SYSTEMS.wise.logo}
              alt={PAYMENT_SYSTEMS.wise.alt}
            />
            <img
              src={PAYMENT_SYSTEMS.revolut.logo}
              alt={PAYMENT_SYSTEMS.revolut.alt}
            />
          </div>
        </>
      ),
      col2: t("withdrawal_data_col1"),
      col3: "$200",
      col4: t("deposit_data_col3"),
      col5: CURRENCIES,
      col6: DEPOSIT_COLUMNS_WITH_BTN(),
    },
    {
      col1: (
        <>
          <span>{t("withdrawal_data_title2")}</span>
          <div className="table__img-wrapper">
            <img
              src={PAYMENT_SYSTEMS.skrill.logo}
              alt={PAYMENT_SYSTEMS.skrill.alt}
            />
            <img
              src={PAYMENT_SYSTEMS.neteller.logo}
              alt={PAYMENT_SYSTEMS.neteller.alt}
            />
          </div>
        </>
      ),
      col2: t("withdrawal_data_col1"),
      col3: "$200",
      col4: t("deposit_data_col3"),
      col5: CURRENCIES,
      col6: DEPOSIT_COLUMNS_WITH_BTN(),
    },
    {
      col1: (
        <>
          <span>{t("withdrawal_data_title3")}</span>
          <div className="table__img-wrapper">
            <img
              src={PAYMENT_SYSTEMS.bankwire.logo}
              alt={PAYMENT_SYSTEMS.bankwire.alt}
            />
          </div>
        </>
      ),
      col2: t("deposit_data_col2"),
      col3: "$200",
      col4: t("deposit_data_col3_v2"),
      col5: CURRENCIES,
      col6: DEPOSIT_COLUMNS_WITH_BTN(),
    },
  ];
  return DATA_DEPOSIT;
};
export const ColumnWithdrawal = () => {
  const { t } = useTranslation();
  const COLUMNS_WITHDRAWAL = [
    {
      accessor: "col1",
      Header: t("withdrawal_column_title1"),
    },
    {
      accessor: "col2",
      Header: t("withdrawal_column_title2"),
    },
    {
      accessor: "col3",
      Header: t("withdrawal_column_title3"),
    },
    {
      accessor: "col4",
      Header: t("withdrawal_column_title4"),
    },
  ];
  return COLUMNS_WITHDRAWAL;
};
export const DataWithdrawal = () => {
  const { t } = useTranslation();
  const DATA_WITHDRAWAL = [
    {
      col1: (
        <>
          <span>{t("withdrawal_data_title1")}</span>
          <div className="table__img-wrapper">
            <img
              src={PAYMENT_SYSTEMS.visa.logo}
              alt={PAYMENT_SYSTEMS.visa.alt}
            />
            <img
              src={PAYMENT_SYSTEMS.masterCard.logo}
              alt={PAYMENT_SYSTEMS.masterCard.alt}
            />
            <img
              src={PAYMENT_SYSTEMS.wise.logo}
              alt={PAYMENT_SYSTEMS.wise.alt}
            />
            <img
              src={PAYMENT_SYSTEMS.revolut.logo}
              alt={PAYMENT_SYSTEMS.revolut.alt}
            />
          </div>
        </>
      ),
      col2: t(`withdrawal_data_col4${sitePostfix}`),
      col3: "$100",
      col4: t(`withdrawal_data_col3_v1${sitePostfix}`),
    },
    {
      col1: (
        <>
          <span>{t("withdrawal_data_title2")}</span>
          <div className="table__img-wrapper">
            <img
              src={PAYMENT_SYSTEMS.skrill.logo}
              alt={PAYMENT_SYSTEMS.skrill.alt}
            />
            <img
              src={PAYMENT_SYSTEMS.neteller.logo}
              alt={PAYMENT_SYSTEMS.neteller.alt}
            />
          </div>
        </>
      ),
      col2: t(`withdrawal_data_col4${sitePostfix}`),
      col3: "$100",
      col4: t(`withdrawal_data_col3_v1${sitePostfix}`),
    },
    {
      col1: (
        <>
          <span>{t("withdrawal_data_title3")}</span>
          <div className="table__img-wrapper">
            <img
              src={PAYMENT_SYSTEMS.bankwire.logo}
              alt={PAYMENT_SYSTEMS.bankwire.alt}
            />
          </div>
        </>
      ),
      col2: t(`withdrawal_data_col2${sitePostfix}`),
      col3: "$100",
      col4: t(`withdrawal_data_col3_v2${sitePostfix}`),
    },
  ];
  return DATA_WITHDRAWAL;
};

export const WithdrawalDisclaimer = () => {
  const { t } = useTranslation();
  return isCySEC ? (
    <>
      <p className="notes-block__text">{t("withdrawal_disclaimer1")}</p>
      <p className="notes-block__text">{t("withdrawal_disclaimer2")}</p>
      <p className="notes-block__text">{t("withdrawal_disclaimer3_1")}</p>
      <p className="notes-block__text notes-block__text--pl">
        {t("withdrawal_disclaimer3_2")}
      </p>
      <p className="notes-block__text">{t("withdrawal_disclaimer4")}</p>
    </>
  ) : (
    <>
      <p className="notes-block__text">{t("withdrawal_disclaimer1-fsa")}</p>
      <p className="notes-block__text">{t("withdrawal_disclaimer2-fsa")}</p>
      <p className="notes-block__text">{t("withdrawal_disclaimer3-fsa")}</p>
    </>
  );
};
