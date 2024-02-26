import React from "react";
import cn from "classnames";
import CookiePolicyItem from "./cookie-policy-item";
import {
  COLUMN_COOKIES,
  DATA_COOKIES,
  COOKIES_POLICY_CONTENT,
} from "../../../helpers/cookie-policy.config";
import TableComponent from "../../shared/table";

const CookiePolicyContent = ({ className }) => {
  return (
    <section className={cn("privacy-policy", className)}>
      <div className="privacy-policy__wrapper">
        <h2 className="privacy-policy__title">{"Cookie Policy"}</h2>
        {COOKIES_POLICY_CONTENT.map((item) => (
          <CookiePolicyItem {...item} />
        ))}
        <TableComponent
          data={DATA_COOKIES}
          columns={COLUMN_COOKIES}
          className={cn("withdrawal-table", "withdrawal-table--wide")}
        />
      </div>
    </section>
  );
};

export default CookiePolicyContent;
