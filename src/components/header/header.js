import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import NavSection from './components/nav-section/nav-section';

import './styles.scss';

const navSections = ['Top Markets', 'Trading', 'Company', 'Partners'];

const Header = () => {
  return (
    <header className="header">
      <StaticImage src="" alt="OQtima Logo" />
      <ul className="header__navigation">
        {navSections.map(section => <NavSection title={section} />)}
      </ul>
    </header>
  );
};

export default Header;
