import React from "react";
import cn from "classnames";

const PrivacyPolicySubItem = ({ className, text, subItems }) => {
  return (
    <div className={cn("privacy-policy-subitem", className)}>
      <p className="privacy-policy-subitem__text">{text}</p>
      {subItems &&
        subItems.map((subItem) => (
          <p className="privacy-policy-subitem__subitem-text">{subItem.text}</p>
        ))}
    </div>
  );
};

export default PrivacyPolicySubItem;
