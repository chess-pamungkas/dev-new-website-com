import React from "react";
import cn from "classnames";
import PrivacyPolicyItem from "./privacy-policy-item";
import { getPrivacyPolicyContent } from "../../../helpers/privacy-policy.config";

const PrivacyPolicyContent = ({ className }) => {
  const policyContent = getPrivacyPolicyContent();

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
