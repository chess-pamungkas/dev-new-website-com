import React from 'react';

const NavbarSubItem = ({subItem = {}}) => {
  const {title, link, icon, description} = subItem;

  return (
    <li className="header__navigation_subtitle">
      <a className="header__navigation_subtitle-link" href={link}>
        {icon ? icon : null}

        <div className="header__navigation_subtitle-content">
          <span className="header__navigation_subtitle-title">
            {title}
          </span>
          {description && (
            <p className="header__navigation_subtitle-description">
              {description}
            </p>
          )}
        </div>
      </a>
    </li>
  );
};

export default NavbarSubItem;
