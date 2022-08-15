import React from "react";
import cn from "classnames";

const PlatformBlock = ({ className, icon, title }) => {
  return (
    <div className={cn("platform-block", className)}>
      <img src={icon} alt={title} className="platform-block__img" />
    </div>
  );
};

export default PlatformBlock;
