import React from 'react';

const NavbarSubItem = ({subItem}) => {
  return (
    <li className="header__navigation_title">{subItem.title}</li>
  );
};

export default NavbarSubItem;
