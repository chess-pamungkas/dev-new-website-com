import React from 'react';
import cn from 'classnames';
import NavbarSubItem from '../navbar-sub-item';

const NavbarItem = ({className, title, subItems = []}) => {
  return (
    <li className={cn("navbar-item", className)}>
      <span className="navbar-item__title">{title}</span>

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
