import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import { LogoFull } from '../shared/icons';
import NavbarItem from './components/navbar-item';

import './styles.scss';

const navItems = [
  {
    title: 'Top Markets',
    subItems: [
      {
        title: 'Crypto',
        link: '',
        iconSrc: '',
        description: ''
      },
      {
        title: 'Indices',
        link: '',
        iconSrc: '',
        description: ''
      },
      {
        title: 'Forex',
        link: '',
        iconSrc: '',
        description: ''
      },
      {
        title: 'Commodities',
        link: '',
        iconSrc: '',
        description: ''
      },
      {
        title: 'Shares',
        link: '',
        iconSrc: '',
        description: ''
      },
      {
        title: 'Energies',
        link: '',
        iconSrc: '',
        description: ''
      },
      {
        title: 'All Markets Overview',
        link: '',
        iconSrc: '',
        description: ''
      }
    ]
  },
  {
    title: 'Trading',
    subItems: []
  },
  {
    title: 'Company',
    subItems: []
  },
  {
    title: 'Partners',
    subItems: []
  }
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <LogoFull />
        <ul className="header__navigation">
          {navItems.map(({title, subItems}) => <NavbarItem key={title} title={title} subItems={subItems} />)}
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
