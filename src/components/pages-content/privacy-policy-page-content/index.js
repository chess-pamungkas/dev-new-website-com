import React from "react";
import cn from "classnames";
import PrivacyPolicyItem from "./privacy-policy-item";
import { PRIVACY_POLICY_CONTENT } from "../../../helpers/privacy-policy.config";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import NotFoundContent from "../not-found-page-content";

const PrivacyPolicyContent = ({ className }) => {
  const { isCySEC } = useEntityPostfix();

  return (
    <>
      {isCySEC ? (
        <NotFoundContent />
      ) : (
        <section className={cn("privacy-policy", className)}>
          <div className="privacy-policy__wrapper">
            <h2 className="privacy-policy__title">{"Privacy Policy"}</h2>
            {PRIVACY_POLICY_CONTENT.map((item) => (
              <PrivacyPolicyItem {...item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default PrivacyPolicyContent;
