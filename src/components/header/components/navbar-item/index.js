import React from 'react';
import NavbarSubItem from '../navbar-sub-item';

const NavbarItem = ({title, subItems}) => {
  return (
    <li className="header__navigation-item">
      <span className="header__navigation-item-title">{title}</span>

      {!!subItems.length && (
        <ul className="header__dropdown">
          {subItems.map(subItem => <NavbarSubItem key={subItem.title} subItem={subItem} />)}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
