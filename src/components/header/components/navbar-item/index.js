import React from 'react';
import NavbarSubItem from '../navbar-sub-item';

const NavbarItem = ({title, subItems}) => {
  return (
    <li className="header__navigation_title">
      {title}

      {!!subItems.length && (
        <ul className="header__navigation_dropdown">
          {subItems.map(subItem => <NavbarSubItem key={subItem.title} subItem={subItem} />)}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
