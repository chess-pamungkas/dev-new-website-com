import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import { LogoTextMain, Logo } from '../shared/icons';
import { useWindowSize } from '../helpers/useWindowSize';
import NavbarItem from './components/navbar-item';

import './styles.scss';

const navItems = [
  {
    title: 'Top Markets',
    subItems: [
      {
        title: 'Crypto',
        link: '',
        icon: <Logo className="header__navigation_subtitle-icon" />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        title: 'Indices',
        link: '',
        icon: <Logo className="header__navigation_subtitle-icon" />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        title: 'Forex',
        link: '',
        icon: <Logo className="header__navigation_subtitle-icon" />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        title: 'Commodities',
        link: '',
        icon: <Logo className="header__navigation_subtitle-icon" />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        title: 'Shares',
        link: '',
        icon: <Logo className="header__navigation_subtitle-icon" />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        title: 'Energies',
        link: '',
        icon: <Logo className="header__navigation_subtitle-icon" />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        title: 'All Markets Overview',
        link: '',
        icon: <Logo className="header__navigation_subtitle-icon" />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
  const {width} = useWindowSize();

  return (
    <header className="header">
      <div className="header__left">
        {width <= 1024 ? <Logo className="header__logo" /> : <LogoTextMain />}
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
