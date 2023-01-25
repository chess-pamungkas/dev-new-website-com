import React from "react";
import cn from "classnames";
import PrivacyPolicySubItem from "../privacy-policy-subitem";

const PrivacyPolicyItem = ({ className, title, subItems }) => {
  return (
    <div className={cn("privacy-policy-item", className)}>
      <h2 className="privacy-policy-item__title">{title}</h2>
      {subItems &&
        subItems.map((subItem) => <PrivacyPolicySubItem {...subItem} />)}
    </div>
  );
};

export default PrivacyPolicyItem;
