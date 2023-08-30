import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import MenuColumn from "../menu-column";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import { getMenuItems } from "../../../../helpers/menu.config";

const Menu = ({ className }) => {
  const { t } = useTranslation();
  const menu = getMenuItems();

  return (
    <div className={cn("menu", className)}>
      {menu.length > 0 &&
        menu.map(
          (item) =>
            !item.mobileOnly && (
              <div
                key={`footer-menu-${stringTransformToKebabCase(item.title)}`}
                className="menu__wrapper"
              >
                <h4 className="menu__column-title">{t(item.title)}</h4>
                <MenuColumn items={item.subItems} />
              </div>
            )
        )}
    </div>
  );
};

export default Menu;
