import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import { LogoFull } from '../shared/icons';
import NavSection from './components/nav-section';

import './styles.scss';

const navSections = ['Top Markets', 'Trading', 'Company', 'Partners'];

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <LogoFull />
        <ul className="header__navigation">
          {navSections.map(section => <NavSection key={section} title={section} />)}
        </ul>
      </div>

      <div className="header__right">
        <button className="header__right_btn _lng _upcs" type="button">EN</button>
        <button className="header__right_btn" type="button">Sign In</button>
        <button className="header__right_btn _white _upcs" type="button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
