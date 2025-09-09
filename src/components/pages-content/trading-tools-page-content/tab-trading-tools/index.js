import React, { useState } from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import featuresIcon from "../../../../assets/images/icons/features.svg";

const TabTradingTools = ({ className }) => {
  const { isMobile } = useWindowSize();
  const { t } = useTranslationWithVariables();
  const [activeTab, setActiveTab] = useState("trading-calendar");

  const tabs = [
    {
      id: "trading-calendar",
      label: t("tab-trading-tools_trading-calendar"),
      icon: featuresIcon,
    },
    {
      id: "featured-ideas",
      label: t("tab-trading-tools_featured-ideas"),
      icon: featuresIcon,
    },
    {
      id: "market-buzz",
      label: t("tab-trading-tools_market-buzz"),
      icon: featuresIcon,
    },
    {
      id: "alpha-generation",
      label: t("tab-trading-tools_alpha-generation"),
      icon: featuresIcon,
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    // Add a small delay to ensure the element is available
    setTimeout(() => {
      const element = document.getElementById(tabId);
      console.log(`Looking for element with id: ${tabId}`, element);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.error(`Element with id "${tabId}" not found`);
      }
    }, 100);
  };

  return (
    <div className={`tab-trading-tools ${className || ""}`}>
      <div className="tab-trading-tools__container">
        <div className="tab-trading-tools__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-trading-tools__tab ${
                activeTab === tab.id ? "tab-trading-tools__tab--active" : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                className="tab-trading-tools__tab-icon"
              />
              <span className="tab-trading-tools__tab-text">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabTradingTools;
