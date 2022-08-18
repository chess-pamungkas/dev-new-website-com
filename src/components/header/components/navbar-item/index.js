import React from 'react';
import cn from 'classnames';
import { AngleDownIcon } from '../../../shared/icons';
import { ANGLE_ICON_COLOR } from '../../../../helpers/constants';
import { stringTransformToKebabCase } from '../../../../helpers/services/string-service';
import NavbarSubItem from '../navbar-sub-item';

const NavbarItem = ({ className, title, subItems = [], isNested = false }) => {
  return (
    <li className={cn("navbar-item", className)}>
      <span className="navbar-item__title">{title}</span>

      <AngleDownIcon className="navbar-item__icon" color={ANGLE_ICON_COLOR.BLACK} />

      {!!subItems.length && (
        <ul className={cn("navbar-item__dropdown", {"navbar-item__dropdown--nested": isNested})}>
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
