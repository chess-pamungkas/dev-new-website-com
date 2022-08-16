import React from 'react';
import cn from 'classnames';
import { AngleDownIcon } from '../../../shared/icons';
import { ANGLE_ICON_COLOR } from '../../../../helpers/constants';
import NavbarSubItem from '../navbar-sub-item';

const NavbarItem = ({ className, title, subItems = [] }) => {
  return (
    <li className={cn("navbar-item", className)}>
      <span className="navbar-item__title">{title}</span>

      <AngleDownIcon className="navbar-item__icon" color={ANGLE_ICON_COLOR.BLACK} />

      {!!subItems.length && (
        <ul className="navbar-item__dropdown">
          {subItems.map(subItem => (
            <NavbarSubItem
              key={subItem.title}
              subItem={subItem}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
