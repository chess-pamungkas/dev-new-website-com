import React, { useRef, useContext } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { AngleDownIcon } from "../../../shared/icons";
import { ANGLE_ICON_COLOR } from "../../../../helpers/constants";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import NavbarSubItem from "../navbar-sub-item";
import CommonContext from "../../../../context/common-context";

const NavbarItem = ({ className, title, subItems = [] }) => {
  const { t } = useTranslation();
  const dropdownRef = useRef();
  const { heightOffset } = useContext(CommonContext);

  const hideDropdown = () => {
    if (dropdownRef?.current) {
      dropdownRef.current.style.visibility = "hidden";
      dropdownRef.current.style.opacity = "0";
    }
  };

  const showDropdown = () => {
    if (dropdownRef?.current) {
      dropdownRef.current.style.visibility = "visible";
      dropdownRef.current.style.opacity = "1";
    }
  };

  return (
    <li
      className={cn("navbar-item", className)}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <span className="navbar-item__title">{t(title)}</span>

      <AngleDownIcon
        className="navbar-item__icon"
        color={ANGLE_ICON_COLOR.black}
      />

      {!!subItems.length && (
        <ul
          ref={dropdownRef}
          className={cn("navbar-item__dropdown")}
          style={{ top: `${heightOffset}px` }}
        >
          {subItems.map((subItem, i) => (
            <NavbarSubItem
              key={`header-menu-${stringTransformToKebabCase(subItem.title)}`}
              subItem={subItem}
              onClick={hideDropdown}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
