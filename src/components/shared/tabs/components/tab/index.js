import React, { useEffect, memo } from "react";
import cn from "classnames";

const Tab = memo(({ children, isSelected, tabIndex, onTabClick }) => {
  return (
    <li
      className={cn("tabs__tab", { "tabs__tab--active": isSelected })}
      // eslint-disable-next-line
      role="tab"
      id={`tab-${tabIndex}`}
      aria-selected={isSelected}
      aria-controls={`panel-${tabIndex}`}
      tabIndex={tabIndex}
      onClick={onTabClick}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          onTabClick();
        }
      }}
    >
      {children}
    </li>
  );
});

export default Tab;
