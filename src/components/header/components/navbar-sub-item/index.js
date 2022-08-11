import React from 'react';

const NavbarSubItem = ({className, subItem = {}}) => {
  const {title, link, icon, description} = subItem;

  return (
    <li className={`${className}__dropdown-item`}>
      <a className={`${className}__dropdown-link`} href={link}>
        {icon ? icon : null}

        <div className={`${className}__dropdown-content`}>
          <span className={`${className}__dropdown-title`}>
            {title}
          </span>
          {description && (
            <p className={`${className}__dropdown-description`}>
              {description}
            </p>
          )}
        </div>
      </a>
    </li>
  );
};

export default NavbarSubItem;
