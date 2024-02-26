import React from "react";
import cn from "classnames";
import CookiePolicySubItem from "../cookie-policy-subitem";

const CookiePolicyItem = ({ className, title, subItems }) => {
  return (
    <div className={cn("privacy-policy-item", className)}>
      <h2 className="privacy-policy-item__title">{title}</h2>
      {subItems &&
        subItems.map((subItem) => <CookiePolicySubItem {...subItem} />)}
    </div>
  );
};

export default CookiePolicyItem;
