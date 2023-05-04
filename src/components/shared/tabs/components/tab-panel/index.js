import React, { memo } from "react";
import cn from "classnames";

const TabPanel = memo(({ children, isSelected, tabIndex }) => {
  return (
    <div
      className={cn("tabs__panel", { "tabs__panel--active": isSelected })}
      role="tabpanel"
      id={`panel-${tabIndex}`}
      aria-labelledby={`tab-${tabIndex}`}
    >
      {children}
    </div>
  );
});

export default TabPanel;
