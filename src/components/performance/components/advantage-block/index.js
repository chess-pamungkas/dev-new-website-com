import React from "react";
import cn from "classnames";

const AdvantageBlock = (props) => {
  const { className, icon: Icon, text } = props;
  return (
    <div className={cn("advantage-block", className)}>
      <div className="advantage-block__icon-wrapper">
        <Icon className="advantage-block__icon" />
      </div>
      <p className="advantage-block__text">{text}</p>
    </div>
  );
};

export default AdvantageBlock;
