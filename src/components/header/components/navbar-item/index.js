import React from 'react';
import NavbarSubItem from '../navbar-sub-item';

const NavbarItem = ({className, title, subItems = []}) => {
  return (
    <li className={`${className}__navigation-item`}>
      <span className={`${className}__navigation-item-title`}>{title}</span>

      {!!subItems.length && (
        <ul className={`${className}__dropdown`}>
          {subItems.map(subItem => (
            <NavbarSubItem
              key={subItem.title}
              className={className}
              subItem={subItem}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
