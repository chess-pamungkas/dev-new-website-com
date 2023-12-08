import React, { useRef, useContext } from "react";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import { AngleDownIcon } from "../../../shared/icons";
import { ANGLE_ICON_COLOR } from "../../../../helpers/constants";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import NavbarSubItem from "../navbar-sub-item";
import CommonContext from "../../../../context/common-context";

const NavbarItem = ({ className, title, subItems = [] }) => {
  const { t } = useTranslationWithVariables();
  const dropdownRef = useRef();
  const { dropdownHeightOffset, isScrolled } = useContext(CommonContext);

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
      <span
        className={cn("navbar-item__title", {
          "navbar-item__title--black": isScrolled,
        })}
      >
        {t(title)}
      </span>

      <AngleDownIcon
        className="navbar-item__icon"
        color={isScrolled ? ANGLE_ICON_COLOR.black : ANGLE_ICON_COLOR.white}
      />

      {!!subItems.length && (
        <ul
          ref={dropdownRef}
          className={cn("navbar-item__dropdown")}
          style={{ top: `${dropdownHeightOffset}px` }}
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
