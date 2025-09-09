import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import MenuColumn from "../menu-column";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import { getMenuItems } from "../../../../helpers/menu.config";

const Menu = ({ className }) => {
  const { t } = useTranslationWithVariables();
  const menu = getMenuItems();

  // Process menu items for footer-specific changes
  const processMenuForFooter = (menuItems) => {
    return menuItems.map((item) => {
      if (item.title === "header-nav-tab-top-markets") {
        // For footer, change "Products" to "Top Markets"
        const processedItem = { ...item };
        if (processedItem.subItems) {
          // Move "All Market Overviews" to the bottom
          const allMarketsItem = processedItem.subItems.find(
            (subItem) =>
              subItem.title === "header-nav-tab-top-markets-allmarkets-title"
          );
          const otherItems = processedItem.subItems.filter(
            (subItem) =>
              subItem.title !== "header-nav-tab-top-markets-allmarkets-title"
          );

          processedItem.subItems = [
            ...otherItems,
            ...(allMarketsItem ? [allMarketsItem] : []),
          ];
        }
        return processedItem;
      }
      return item;
    });
  };

  const processedMenu = processMenuForFooter(menu);

  return (
    <div className={cn("menu", className)}>
      {processedMenu.length > 0 &&
        processedMenu.map((item) => {
          let translatedTitle = t(item.title);

          // Change "Products" to "Top Markets" only in footer
          if (item.title === "header-nav-tab-top-markets") {
            translatedTitle = t("footer-nav-tab-top-markets");
          }

          // Skip Partners section in footer
          if (item.title === "header-nav-tab-partners-fsa") return null;

          return (
            !item.mobileOnly && (
              <div
                key={`footer-menu-${stringTransformToKebabCase(item.title)}`}
                className="menu__wrapper"
              >
                <h4 className="menu__column-title">{translatedTitle}</h4>
                <MenuColumn items={item.subItems || []} />
              </div>
            )
          );
        })}
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};
export default Menu;
