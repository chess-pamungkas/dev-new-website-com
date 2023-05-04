import React, { useState, useEffect } from "react";
import cn from "classnames";
import { stringTransformToKebabCase } from "../../../helpers/services/string-service";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import Dropdown from "../dropdown";
import Tab from "./components/tab";
import TabPanel from "./components/tab-panel";

const Tabs = ({
  classname,
  tabList = [],
  activeTabIndex = 0,
  isMobileDropdown = false,
}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(activeTabIndex);
  const { isTablet } = useWindowSize();

  const handleTabClick = (index) => {
    setCurrentTabIndex(index);
  };

  return (
    <div className={cn("tabs", classname)} data-tabs="true">
      <div className="tabs__tablist-wrapper">
        {isTablet && isMobileDropdown ? (
          <Dropdown
            className="tabs__dropdown"
            selectedItem={{
              title: tabList[currentTabIndex].title,
              value: currentTabIndex,
            }}
            items={tabList.map(({ id, title, onClick }, tabIndex) => {
              return {
                title: title,
                value: tabIndex,
                onClick: onClick,
              };
            })}
            setSelectedItem={({ value }) => {
              setCurrentTabIndex(value);
            }}
            isDropdownShown
          />
        ) : (
          // eslint-disable-next-line
          <ul role="tablist" className="tabs__tablist">
            {tabList.map(
              ({ title, isTitleWithIcon, icon, onClick }, tabIndex) => (
                <Tab
                  key={`${stringTransformToKebabCase(title)}_tab`}
                  tabIndex={tabIndex}
                  isSelected={currentTabIndex === tabIndex}
                  onTabClick={() => {
                    if (onClick) {
                      onClick();
                    }
                    handleTabClick(tabIndex);
                  }}
                >
                  {isTitleWithIcon && icon}
                  <span>{title}</span>
                </Tab>
              )
            )}
          </ul>
        )}
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
