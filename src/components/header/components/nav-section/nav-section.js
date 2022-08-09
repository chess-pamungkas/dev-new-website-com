import React from 'react';

import './styles.scss';

const NavSection = ({title}) => {
  return (
    <li className="header__navigation_section">{title}</li>
  );
};

export default NavSection;
