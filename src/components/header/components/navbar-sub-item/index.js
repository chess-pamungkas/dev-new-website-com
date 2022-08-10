import React from 'react';

const NavbarSubItem = ({subItem = {}}) => {
  const {title, link, icon, description} = subItem;

  return (
    <li className="header__dropdown-item">
      <a className="header__dropdown-link" href={link}>
        {icon ? icon : null}

        <div className="header__dropdown-content">
          <span className="header__dropdown-title">
            {title}
          </span>
          {description && (
            <p className="header__dropdown-description">
              {description}
            </p>
          )}
        </div>
      </a>
    </li>
  );
};

export default NavbarSubItem;
