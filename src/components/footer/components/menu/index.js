import React from "react";
import cn from "classnames";
import MenuColumn from "../menu-column";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import { MENU_ITEMS } from "../../../../helpers/menu.config";

const Menu = ({ className }) => {
  return (
    <div className={cn("menu", className)}>
      {MENU_ITEMS.map((item) => (
        <div
          key={`footer-menu-${stringTransformToKebabCase(item.title)}`}
          className="menu__wrapper"
        >
          <h4 className="menu__column-title">{item.title}</h4>
          <MenuColumn items={item.subItems} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
