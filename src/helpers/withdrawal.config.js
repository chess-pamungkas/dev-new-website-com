import ButtonLink from "../components/shared/button-link";
import cn from "classnames";
import React from "react";
import {
  PAYMENT_SYSTEMS,
  GetDepositLink,
  GetWithdrawalLink,
} from "./constants";
import { useTranslationWithVariables } from "./hooks/use-translation-with-vars";
import { useWindowSize } from "./hooks/use-window-size";
// import depositArrow from "../assets/images/withdrawal/deposit.png";
// import withdrawArrow from "../assets/images/withdrawal/withdraw.png";

const PAYMENT_METHODS_COLUMNS_FSA = [
  {
    methodName: "withdrawal_data-method-card-fsa",
    depositCol2: "withdrawal_data_col-instant-fsa",
    depositCol3: "withdrawal_data_col-min-dep-fsa",
    depositCol4: "withdrawal_data_col-zero-fees-fsa",
    depositCol5: "withdrawal_data-method-card-currencies-fsa",
    withdrawCol2: "withdrawal_data_col-one-day-fsa",
    withdrawCol3: "withdrawal_data_col-zero-fees-fsa",
    withdrawCol4: "withdrawal_data-method-card-currencies-fsa",
  },
  {
    methodName: "withdrawal_data-method-crypto-fsa",
    depositCol2: "withdrawal_data_col-instant-fsa",
    depositCol3: "withdrawal_data_col-min-dep-fsa",
    depositCol4: "withdrawal_data_col-zero-fees-fsa",
    depositCol5: "withdrawal_data-method-crypto-currencies-fsa",
    withdrawCol2: "withdrawal_data_col-one-day-fsa",
    withdrawCol3: "withdrawal_data_col-zero-fees-fsa",
    withdrawCol4: "withdrawal_data-method-crypto-currencies-fsa",
  },
  {
    methodName: "withdrawal_data-method-int-bank-fsa",
    depositCol2: "withdrawal_data_col-few-days-fsa",
    depositCol3: "withdrawal_data_col-min-dep-fsa",
    depositCol4: "withdrawal_data_col-zero-fees-fsa",
    depositCol5: "withdrawal_data-method-int-bank-currencies-fsa",
    withdrawCol2: "withdrawal_data_col-one-day-fsa",
    withdrawCol3: "withdrawal_data_col-zero-fees-fsa",
    withdrawCol4: "withdrawal_data-method-int-bank-currencies-fsa",
  },
  {
    methodName: "withdrawal_data-method-uk-bank-fsa",
    depositCol2: "withdrawal_data_col-instant-if-fsa",
    depositCol3: "withdrawal_data_col-min-dep-fsa",
    depositCol4: "withdrawal_data_col-zero-fees-fsa",
    depositCol5: "withdrawal_data-method-uk-bank-currencies-fsa",
    withdrawCol2: "withdrawal_data_col-one-day-fsa",
    withdrawCol3: "withdrawal_data_col-zero-fees-fsa",
    withdrawCol4: "withdrawal_data-method-uk-bank-currencies-fsa",
  },
  {
    methodName: "withdrawal_data-method-local-bank-fsa",
    depositCol2: "withdrawal_data_col-minutes-if-fsa",
    depositCol3: "withdrawal_data_col-min-dep-fsa",
    depositCol4: "withdrawal_data_col-zero-fees-fsa",
    depositCol5: "withdrawal_data-method-local-bank-currencies-fsa",
    withdrawCol2: "withdrawal_data_col-one-day-fsa",
    withdrawCol3: "withdrawal_data_col-zero-fees-fsa",
    withdrawCol4: "withdrawal_data-method-local-bank-currencies-fsa",
  },
  {
    methodName: "withdrawal_data-method-sticpay-fsa",
    depositCol2: "withdrawal_data_col-instant-fsa",
    depositCol3: "withdrawal_data_col-min-dep-fsa",
    depositCol4: "withdrawal_data_col-zero-fees-fsa",
    depositCol5: "withdrawal_data-method-sticpay-currencies-fsa",
    withdrawCol2: "withdrawal_data_col-one-day-fsa",
    withdrawCol3: "withdrawal_data_col-zero-fees-fsa",
    withdrawCol4: "withdrawal_data-method-sticpay-currencies-fsa",
  },
  {
    methodName: "withdrawal_data-method-pix-fsa",
    depositCol2: "withdrawal_data_col-instant-fsa",
    depositCol3: "withdrawal_data_col-min-dep-fsa",
    depositCol4: "withdrawal_data_col-zero-fees-fsa",
    depositCol5: "withdrawal_data-method-pix-currencies-fsa",
    withdrawCol2: "withdrawal_data_col-one-day-fsa",
    withdrawCol3: "withdrawal_data_col-zero-fees-fsa",
    withdrawCol4: "withdrawal_data-method-pix-currencies-fsa",
  },
  {
    methodName: "withdrawal_data-method-e-wallet-fsa",
    depositCol2: "withdrawal_data_col-instant-fsa",
    depositCol3: "withdrawal_data_col-min-dep-fsa",
    depositCol4: "withdrawal_data_col-zero-fees-fsa",
    depositCol5: "withdrawal_data-method-e-wallet-currencies-fsa",
    withdrawCol2: "withdrawal_data_col-one-day-fsa",
    withdrawCol3: "withdrawal_data_col-zero-fees-fsa",
    withdrawCol4: "withdrawal_data-method-e-wallet-currencies-fsa",
  },
];

export const ColumnDepositFSA = () => {
  const { t } = useTranslationWithVariables();

  const COLUMNS_DEPOSIT = [
    {
      accessor: "col1",
      Header: t("deposit_column_title1-fsa"),
    },
    {
      accessor: "col2",
      Header: t("deposit_column_title2-fsa"),
    },
    {
      accessor: "col3",
      Header: t("deposit_column_title3-fsa"),
    },
    {
      accessor: "col4",
      Header: t("deposit_column_title4-fsa"),
    },
    {
      accessor: "col5",
      Header: t("deposit_column_title5-fsa"),
    },
    // {
    //   accessor: "col6",
    //   Header: "",
    // },
  ];
  return COLUMNS_DEPOSIT;
};

const DEPOSIT_COLUMNS_WITH_BTN = () => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();
  return isMobile ? (
    <a href={GetDepositLink()} target="_blank" rel="noreferrer">
      <img src={depositArrow} alt="deposit" />
    </a>
  ) : (
    <ButtonLink link={GetDepositLink()} className={cn("withdrawal-table__btn")}>
      {t("withdrawal_data_deposit-btn")}
    </ButtonLink>
  );
};

const WITHDRAWAL_COLUMNS_WITH_BTN = () => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();
  return isMobile ? (
    <a href={GetWithdrawalLink()} target="_blank" rel="noreferrer">
      <img src={withdrawArrow} alt="withdraw" />
    </a>
  ) : (
    <ButtonLink
      link={GetWithdrawalLink()}
      className={cn("withdrawal-table__btn")}
    >
      {t("withdrawal_data_withdrawal-btn")}
    </ButtonLink>
  );
};

export const DataDepositFSA = () => {
  const { t } = useTranslationWithVariables();
  const DATA_DEPOSIT = [
    ...PAYMENT_METHODS_COLUMNS_FSA.map((methodItem) => ({
      col1: (
        <>
          <span>{t(methodItem.methodName)}</span>
        </>
      ),
      col2: (
        <>
          <span>{t(methodItem.depositCol2)}</span>
        </>
      ),
      col3: (
        <>
          <span>{t(methodItem.depositCol3)}</span>
        </>
      ),
      col4: (
        <>
          <span>{t(methodItem.depositCol4)}</span>
        </>
      ),
      col5: (
        <>
          <span>{t(methodItem.depositCol5)}</span>
        </>
      ),
      // col6: DEPOSIT_COLUMNS_WITH_BTN(),
    })),
  ];
  return DATA_DEPOSIT;
};

export const ColumnWithdrawalFSA = () => {
  const { t } = useTranslationWithVariables();
  const COLUMNS_WITHDRAWAL = [
    {
      accessor: "col1",
      Header: t("withdrawal_column_title1-fsa"),
    },
    {
      accessor: "col2",
      Header: t("withdrawal_column_title2-fsa"),
    },
    {
      accessor: "col3",
      Header: t("withdrawal_column_title4-fsa"),
    },
    {
      accessor: "col4",
      Header: t("withdrawal_column_title5-fsa"),
    },
    {
      accessor: "col5",
    },
  ];
  return COLUMNS_WITHDRAWAL;
};

export const DataWithdrawalFSA = () => {
  const { t } = useTranslationWithVariables();
  const DATA_WITHDRAWAL = [
    ...PAYMENT_METHODS_COLUMNS_FSA.map((methodItem) => ({
      col1: (
        <>
          <span>{t(methodItem.methodName)}</span>
        </>
      ),
      col2: (
        <>
          <span>{t(methodItem.withdrawCol2)}</span>
        </>
      ),
      col3: (
        <>
          <span>{t(methodItem.withdrawCol3)}</span>
        </>
      ),
      col4: (
        <>
          <span>{t(methodItem.withdrawCol4)}</span>
        </>
      ),
      // col5: WITHDRAWAL_COLUMNS_WITH_BTN(),
    })),
  ];
  return DATA_WITHDRAWAL;
};

export const ColumnDeposit = () => {
  const { t } = useTranslationWithVariables();

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
    // {
    //   accessor: "col6",
    //   Header: "",
    // },
  ];
  return COLUMNS_DEPOSIT;
};

const CYSEC_CURRENCIES = "EUR, USD, GBP, CHF";

export const DataDeposit = () => {
  const { t } = useTranslationWithVariables();
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
      col2: (
        <>
          <span>{t("withdrawal_data_col1")}</span>&nbsp;
          <sup>{"1"}</sup>
        </>
      ),
      col3: "$200",
      col4: t("withdrawal_data_col3"),
      col5: CYSEC_CURRENCIES,
      // col6: DEPOSIT_COLUMNS_WITH_BTN(),
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
      col2: (
        <>
          <span>{t("withdrawal_data_col1")}</span>&nbsp;
          <sup>{"1"}</sup>
        </>
      ),
      col3: "$200",
      col4: t("withdrawal_data_col3"),
      col5: CYSEC_CURRENCIES,
      // col6: DEPOSIT_COLUMNS_WITH_BTN(),
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
      col2: t("withdrawal_data_col2"),
      col3: "$200",
      col4: (
        <>
          <span>{t("withdrawal_data_col3")}</span>&nbsp;
          <sup>{"2"}</sup>
        </>
      ),
      col5: CYSEC_CURRENCIES,
      // col6: DEPOSIT_COLUMNS_WITH_BTN(),
    },
  ];
  return DATA_DEPOSIT;
};

export const ColumnWithdrawal = () => {
  const { t } = useTranslationWithVariables();
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
  const { t } = useTranslationWithVariables();
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
      col2: (
        <>
          <span>{t(`withdrawal_data_col4-fsa`)}</span>&nbsp;
          <sup>{"1"}</sup>
        </>
      ),
      col3: "$100",
      col4: (
        <>
          <span>{t("withdrawal_data_col3")}</span>&nbsp;
          <sup>{"3"}</sup>
        </>
      ),
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
      col2: (
        <>
          <span>{t(`withdrawal_data_col4-fsa`)}</span>&nbsp;
          <sup>{"1"}</sup>
        </>
      ),
      col3: "$100",
      col4: (
        <>
          <span>{t("withdrawal_data_col3")}</span>&nbsp;
          <sup>{"3"}</sup>
        </>
      ),
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
      col2: (
        <>
          <span>{t(`withdrawal_data_col4-fsa`)}</span>&nbsp;
          <sup>{"2"}</sup>
        </>
      ),
      col3: "$100",
      col4: (
        <>
          <span>{t("withdrawal_data_col3")}</span>&nbsp;
          <sup>{"4"}</sup>
        </>
      ),
    },
  ];
  return DATA_WITHDRAWAL;
};

export const getDataDeposit = () => {
  return DataDepositFSA();
};

export const getColumnDeposit = () => {
  return ColumnDepositFSA();
};

export const getDataWithdrawal = () => {
  return isCySEC ? DataWithdrawalFSA() : DataWithdrawal();
};

export const getColumnWithdrawal = () => {
  return isCySEC ? ColumnWithdrawalFSA() : ColumnWithdrawal();
};

// New withdrawal data for Figma design
export const getWithdrawalDataForFigma = () => {
  const { t } = useTranslationWithVariables();
  return [
    {
      col1: t("funding_data_method_cards"),
      col2: t("funding_data_processing_one_day"),
      col3: t("funding_data_fees_zero"),
      col4: t("funding_data_currencies_usd_eur"),
    },
    {
      col1: t("funding_data_method_crypto"),
      col2: t("funding_data_processing_one_day"),
      col3: t("funding_data_fees_zero"),
      col4: t("funding_data_currencies_crypto"),
    },
    {
      col1: t("funding_data_method_int_bank"),
      col2: t("funding_data_processing_one_day"),
      col3: t("funding_data_fees_zero"),
      col4: t("funding_data_currencies_int_bank"),
    },
    {
      col1: t("funding_data_method_uk_bank"),
      col2: t("funding_data_processing_one_day"),
      col3: t("funding_data_fees_zero"),
      col4: t("funding_data_currencies_uk_bank"),
    },
    {
      col1: t("funding_data_method_local_bank"),
      col2: t("funding_data_processing_one_day"),
      col3: t("funding_data_fees_zero"),
      col4: t("funding_data_currencies_local"),
    },
    {
      col1: t("funding_data_method_sticpay"),
      col2: t("funding_data_processing_one_day"),
      col3: t("funding_data_fees_zero"),
      col4: t("funding_data_currencies_sticpay"),
    },
    {
      col1: t("funding_data_method_pix"),
      col2: t("funding_data_processing_one_day"),
      col3: t("funding_data_fees_zero"),
      col4: t("funding_data_currencies_pix"),
    },
    {
      col1: t("funding_data_method_ewallets"),
      col2: t("funding_data_processing_one_day"),
      col3: t("funding_data_fees_zero"),
      col4: t("funding_data_currencies_ewallets"),
    },
  ];
};

// New deposit data for Figma design
export const getDepositDataForFigma = () => {
  const { t } = useTranslationWithVariables();
  return [
    {
      col1: t("funding_data_method_cards"),
      col2: t("funding_data_processing_instant"),
      col3: t("funding_data_min_deposit"),
      col4: t("funding_data_fees_zero"),
      col5: t("funding_data_currencies_usd_eur"),
    },
    {
      col1: t("funding_data_method_crypto"),
      col2: t("funding_data_processing_instant"),
      col3: t("funding_data_min_deposit"),
      col4: t("funding_data_fees_zero"),
      col5: t("funding_data_currencies_crypto"),
    },
    {
      col1: t("funding_data_method_int_bank"),
      col2: t("funding_data_processing_3_5_days"),
      col3: t("funding_data_min_deposit"),
      col4: t("funding_data_fees_zero"),
      col5: t("funding_data_currencies_int_bank"),
    },
    {
      col1: t("funding_data_method_uk_bank"),
      col2: t("funding_data_processing_instant_uk"),
      col3: t("funding_data_min_deposit"),
      col4: t("funding_data_fees_zero"),
      col5: t("funding_data_currencies_uk_bank"),
    },
    {
      col1: t("funding_data_method_local_bank"),
      col2: t("funding_data_processing_10_minutes"),
      col3: t("funding_data_min_deposit"),
      col4: t("funding_data_fees_zero"),
      col5: t("funding_data_currencies_local"),
    },
    {
      col1: t("funding_data_method_sticpay"),
      col2: t("funding_data_processing_instant"),
      col3: t("funding_data_min_deposit"),
      col4: t("funding_data_fees_zero"),
      col5: t("funding_data_currencies_sticpay"),
    },
    {
      col1: t("funding_data_method_pix"),
      col2: t("funding_data_processing_instant"),
      col3: t("funding_data_min_deposit"),
      col4: t("funding_data_fees_zero"),
      col5: t("funding_data_currencies_pix"),
    },
    {
      col1: t("funding_data_method_ewallets"),
      col2: t("funding_data_processing_instant"),
      col3: t("funding_data_min_deposit"),
      col4: t("funding_data_fees_zero"),
      col5: t("funding_data_currencies_ewallets"),
    },
  ];
};

export const getWithdrawalColumnsForFigma = () => {
  const { t } = useTranslationWithVariables();
  return [
    {
      accessor: "col1",
      Header: t("withdrawal_column_title1-fsa"),
    },
    {
      accessor: "col2",
      Header: t("withdrawal_column_title2-fsa"),
    },
    {
      accessor: "col3",
      Header: t("withdrawal_column_title4-fsa"),
    },
    {
      accessor: "col4",
      Header: t("withdrawal_column_title5-fsa"),
    },
  ];
};

export const getDepositColumnsForFigma = () => {
  const { t } = useTranslationWithVariables();
  return [
    {
      accessor: "col1",
      Header: t("deposit_column_title1-fsa"),
    },
    {
      accessor: "col2",
      Header: t("deposit_column_title2-fsa"),
    },
    {
      accessor: "col3",
      Header: t("deposit_column_title3-fsa"),
    },
    {
      accessor: "col4",
      Header: t("deposit_column_title4-fsa"),
    },
    {
      accessor: "col5",
      Header: t("deposit_column_title5-fsa"),
    },
  ];
};

export const WithdrawalDisclaimer = () => {
  const { t } = useTranslationWithVariables();
  return (
    <div className="disclaimer">
      <p>
        <sup>1</sup> {t("withdrawal_disclaimer_text1")}
      </p>
      <p>
        <sup>2</sup> {t("withdrawal_disclaimer_text2")}
      </p>
      <p>
        <sup>3</sup> {t("withdrawal_disclaimer_text3")}
      </p>
      <p>
        <sup>4</sup> {t("withdrawal_disclaimer_text4")}
      </p>
    </div>
  );
};

export const DepositDisclaimer = () => {
  const { t } = useTranslationWithVariables();
  return (
    <div className="disclaimer">
      <p>
        <sup>1</sup> {t("deposit_disclaimer_text1")}
      </p>
      <p>
        <sup>2</sup> {t("deposit_disclaimer_text2")}
      </p>
      <p>
        <sup>3</sup> {t("deposit_disclaimer_text3")}
      </p>
    </div>
  );
};
