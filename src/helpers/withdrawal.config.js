import ButtonLink from "../components/shared/button-link";
import cn from "classnames";
import React from "react";
import { PAYMENT_SYSTEMS, REGISTRATION_LINK } from "./constants";

export const COLUMNS_DEPOSIT = [
  {
    accessor: "col1",
    Header: "Method",
  },
  {
    accessor: "col2",
    Header: "Processing Time",
  },
  {
    accessor: "col3",
    Header: "Min Deposit",
  },
  {
    accessor: "col4",
    Header: "Fees",
  },
  {
    accessor: "col5",
    Header: "Currency Accepted",
  },
  {
    accessor: "col6",
    Header: "",
  },
];

const DEPOSIT_COLUMNS_WITH_BTN = (
  <ButtonLink link={REGISTRATION_LINK} className={cn("withdrawal-table__btn")}>
    Deposit
  </ButtonLink>
);

export const DATA_DEPOSIT = [
  {
    col1: (
      <>
        <span>Credit Cards</span>
        <div className="table__img-wrapper">
          <img src={PAYMENT_SYSTEMS.visa.logo} alt={PAYMENT_SYSTEMS.visa.alt} />
          <img
            src={PAYMENT_SYSTEMS.masterCard.logo}
            alt={PAYMENT_SYSTEMS.masterCard.alt}
          />
          <img src={PAYMENT_SYSTEMS.wise.logo} alt={PAYMENT_SYSTEMS.wise.alt} />
          <img
            src={PAYMENT_SYSTEMS.revolut.logo}
            alt={PAYMENT_SYSTEMS.revolut.alt}
          />
        </div>
      </>
    ),
    col2: "Instant",
    col3: "$200",
    col4: "None",
    col5: "USD, BRL, EUR, AUD, CHE, JPY, CNY, CAD",
    col6: DEPOSIT_COLUMNS_WITH_BTN,
  },
  {
    col1: (
      <>
        <span>E-Wallet</span>
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
    col2: "Instant",
    col3: "$200",
    col4: "None",
    col5: "USD, BRL, EUR, AUD, CHE, JPY, CNY, CAD",
    col6: DEPOSIT_COLUMNS_WITH_BTN,
  },
  {
    col1: (
      <>
        <span>Bank Transfer</span>
        <div className="table__img-wrapper">
          <img
            src={PAYMENT_SYSTEMS.bankwire.logo}
            alt={PAYMENT_SYSTEMS.bankwire.alt}
          />
        </div>
      </>
    ),
    col2: "1-3 Days",
    col3: "$200",
    col4: "None",
    col5: "USD, BRL, EUR, AUD, CHE, JPY, CNY, CAD",
    col6: DEPOSIT_COLUMNS_WITH_BTN,
  },
];

export const COLUMNS_WITHDRAWAL = [
  {
    accessor: "col1",
    Header: "Method",
  },
  {
    accessor: "col2",
    Header: "Processing Time",
  },
  {
    accessor: "col3",
    Header: "Min Withdrawal",
  },
  {
    accessor: "col4",
    Header: "Fees",
  },
];

export const DATA_WITHDRAWAL = [
  {
    col1: (
      <>
        <span>Credit Cards</span>
        <div className="table__img-wrapper">
          <img src={PAYMENT_SYSTEMS.visa.logo} alt={PAYMENT_SYSTEMS.visa.alt} />
          <img
            src={PAYMENT_SYSTEMS.masterCard.logo}
            alt={PAYMENT_SYSTEMS.masterCard.alt}
          />
          <img src={PAYMENT_SYSTEMS.wise.logo} alt={PAYMENT_SYSTEMS.wise.alt} />
          <img
            src={PAYMENT_SYSTEMS.revolut.logo}
            alt={PAYMENT_SYSTEMS.revolut.alt}
          />
        </div>
      </>
    ),
    col2: "Same day*",
    col3: "$100",
    col4: "None",
  },
  {
    col1: (
      <>
        <span>E-Wallet</span>
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
    col2: "Same day*",
    col3: "$100",
    col4: "None",
  },
  {
    col1: (
      <>
        <span>Bank Transfer</span>
        <div className="table__img-wrapper">
          <img
            src={PAYMENT_SYSTEMS.bankwire.logo}
            alt={PAYMENT_SYSTEMS.bankwire.alt}
          />
        </div>
      </>
    ),
    col2: "1-3 Days",
    col3: "$100",
    col4: "None",
  },
];
