import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { AngleDownIcon } from "../../../shared/icons";
import { ANGLE_ICON_COLOR } from "../../../../helpers/constants";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import NavbarSubItem from "../navbar-sub-item";

const NavbarItem = ({
  className,
  headerRef,
  title,
  subItems = [],
  isNested = false,
}) => {
  const { t } = useTranslation();

  return (
    <li className={cn("navbar-item", className)}>
      <span className="navbar-item__title">{t(title)}</span>

      <AngleDownIcon
        className="navbar-item__icon"
        color={ANGLE_ICON_COLOR.black}
      />

      {!!subItems.length && (
        <ul
          className={cn("navbar-item__dropdown", {
            "navbar-item__dropdown--nested": isNested,
          })}
          style={
            headerRef?.current
              ? { top: headerRef?.current.offsetHeight + "px" }
              : null
          }
        >
          {subItems.map((subItem, i) => (
            <NavbarSubItem
              key={`header-menu-${stringTransformToKebabCase(subItem.title)}`}
              subItem={subItem}
              className={isNested && i === 0 ? "dropdown-item--grow" : null}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
