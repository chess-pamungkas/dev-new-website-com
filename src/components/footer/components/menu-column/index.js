import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import InternalLink from "../../../shared/internal-link";

const MenuColumn = ({ className, items }) => {
  const { t } = useTranslation();

  return (
    <ul className={cn("menu-column", className)}>
      {items.map((item) => {
        return (
          <li
            className="menu-column__item"
            key={`footer-menu-${stringTransformToKebabCase(item.title)}`}
          >
            <InternalLink className={cn("menu-column__link")} to={item.link}>
              {t(item.title)}
            </InternalLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuColumn;
