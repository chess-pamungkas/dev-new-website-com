import React, { useEffect, memo } from "react";
import cn from "classnames";

const TabPanel = memo(({ children, isSelected, tabIndex }) => {
  useEffect(() => {
    console.log("MOUNT");

    return () => console.log("UNMOUNT");
  }, []);
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
