import React from "react";
import cn from "classnames";
import { FOOTER_MENU_ITEMS } from "../../../../helpers/footer.config";
import MenuColumn from "../menu-column";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";

const Menu = ({ className }) => {
  return (
    <div className={cn("menu", className)}>
      {Object.entries(FOOTER_MENU_ITEMS).map(([key, value]) => (
        <div
          key={`footer-menu-${stringTransformToKebabCase(key)}`}
          className="menu__wrapper"
        >
          <h4 className="menu__column-title">{key}</h4>
          <MenuColumn items={value} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
