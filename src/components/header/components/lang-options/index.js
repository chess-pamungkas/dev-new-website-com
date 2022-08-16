import React from 'react';
import cn from 'classnames';
import { LANG_SELECT_OPTIONS } from '../../../../helpers/config';

const LangSelectItem = ({icon, name}) => (
  <li className="lang-options__item">
    {icon}
    <span className="lang-options__name">{name}</span>
  </li>
);

const LangOptions = ({ className }) => {
  return (
    <div className={cn("lang-options", className)}>
      <h2 className="lang-options__title">Select Your Language</h2>

      <ul className="lang-options__list">
        {LANG_SELECT_OPTIONS.map(option => <LangSelectItem key={option.id} {...option} />)}
      </ul>
    </div>
  );
};

export default LangOptions;
