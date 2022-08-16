import React from "react";
import cn from "classnames";
import { Link } from "../../../../../.cache/gatsby-browser-entry";
import {stringTransformToKebabCase} from "../../../../helpers/services/string-service";

const MenuColumn = ({ className, items }) => {
  return (
    <ul className={cn("menu-column", className)}>
      {items.map((item) => (
        <li className="menu-column__item" key={`footer-menu-${stringTransformToKebabCase(item.title)}`}>
          <Link
            className={cn("menu-column__link", {
              "menu-column__link--bold": item.isSubtitle,
            })}
            to={item.link}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuColumn;
