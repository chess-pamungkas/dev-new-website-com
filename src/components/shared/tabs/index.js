import React, { useState } from "react";
import cn from "classnames";
import { stringTransformToKebabCase } from "../../../helpers/services/string-service";

const Tabs = ({ classname, tabList = [], activeTabIndex = 0 }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(activeTabIndex);

  const handleTabClick = (index) => {
    setCurrentTabIndex(index);
  };

  const Tab = ({ children, isSelected, tabIndex, onTabClick }) => {
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
  };

  const TabPanel = ({ children, isSelected, tabIndex }) => {
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
  };

  return (
    <div className={cn("tabs", classname)} data-tabs="true">
      <div className="tabs__tablist-wrapper">
        {/*eslint-disable-next-line*/}
        <ul role="tablist" className="tabs__tablist">
          {tabList.map(({ title }, tabIndex) => (
            <Tab
              key={`${stringTransformToKebabCase(title)}_tab`}
              tabIndex={tabIndex}
              isSelected={currentTabIndex === tabIndex}
              onTabClick={() => handleTabClick(tabIndex)}
            >
              {title}
            </Tab>
          ))}
        </ul>
      </div>
      <div className="tabs__panels">
        {tabList.map(({ content }, tabIndex) => (
          <TabPanel
            key={`${stringTransformToKebabCase(
              tabList[tabIndex].title
            )}_tabPanel`}
            tabIndex={tabIndex}
            isSelected={currentTabIndex === tabIndex}
          >
            {content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
