import React, { useState, useEffect } from "react";
import cn from "classnames";
import PrivacyPolicyItem from "./privacy-policy-item";
import {
  PRIVACY_POLICY_CONTENT,
  PRIVACY_POLICY_CONTENT_FSA,
} from "../../../helpers/privacy-policy.config";
import { isCySEC } from "../../../helpers/entity-resolver";

const PrivacyPolicyContent = ({ className }) => {
  const policyContent = isCySEC
    ? PRIVACY_POLICY_CONTENT
    : PRIVACY_POLICY_CONTENT_FSA;

  return (
    <section className={cn("privacy-policy", className)}>
      <div className="privacy-policy__wrapper">
        <h2 className="privacy-policy__title">{"Privacy Policy"}</h2>
        {policyContent.map((item) => (
          <PrivacyPolicyItem {...item} />
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
