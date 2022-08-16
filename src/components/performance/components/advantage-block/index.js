import React from "react";
import cn from "classnames";

const AdvantageBlock = ({ className, icon, text }) => {
  return (
    <div className={cn("advantage-block", className)}>
      <div className="advantage-block__icon-wrapper">{icon}</div>
      <p className="advantage-block__text">{text}</p>
    </div>
  );
};

export default AdvantageBlock;
