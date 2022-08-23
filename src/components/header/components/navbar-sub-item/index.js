import React from "react";
import cn from "classnames";
import { Link } from "gatsby";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";

const NavbarSubItem = ({ className, subItem = {} }) => {
  const { title, link, icon: Icon, description } = subItem;
  const isItemHasSubtitles =
    subItem.isSubtitle && subItem.subtitles && !!subItem.subtitles.length;

  return (
    <li className={cn("dropdown-item", className)}>
      <Link className="dropdown-item__link" to={link}>
        {Icon && <Icon className="dropdown-item__icon" />}

        <div className="dropdown-item__content">
          <span className="dropdown-item__title">{title}</span>

          {description && (
            <p className="dropdown-item__description">{description}</p>
          )}
        </div>
      </Link>

      {isItemHasSubtitles && (
        <ul className="dropdown-item__subtitles">
          {subItem.subtitles.map((subtitle) => (
            <li
              className="menu-column__item"
              key={`footer-menu-${stringTransformToKebabCase(subtitle.title)}`}
            >
              <Link className="menu-column__link" to={subtitle.link}>
                <span className="dropdown-item__title">{subtitle.title}</span>

                {subtitle.description && (
                  <p className="dropdown-item__description">
                    {subtitle.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarSubItem;
