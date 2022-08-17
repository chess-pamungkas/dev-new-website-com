import React from 'react';
import cn from 'classnames';
import { LANG_SELECT_OPTIONS } from '../../../../helpers/lang-options.config';

const LangSelectItem = ({
  language: { id, icon: Icon, name } = {},
  language,
  selectedLanguage: { id: selectedId } = {},
  langugeSelectHandler
}) => (
  <li className={cn("lang-options__item", {"lang-options__item--selected": selectedId === id})}>
    <button
      className="lang-options__select"
      type="button"
      onClick={() => langugeSelectHandler(language)}
    >
      {Icon && <Icon className="lang-options__flag" />}

      <span className="lang-options__name">{name}</span>
    </button>
  </li>
);

const LangOptions = ({ className, selectedLanguage, langugeSelectHandler }) => {
  return (
    <div className={cn("lang-options", className)}>
      <h2 className="lang-options__title">Select Your Language</h2>

      <ul className="lang-options__list">
        {LANG_SELECT_OPTIONS.map(option => (
          <LangSelectItem
            key={option.id}
            selectedLanguage={selectedLanguage}
            langugeSelectHandler={langugeSelectHandler}
            language={option}
          />
        ))}
      </ul>
    </div>
  );
};

export default LangOptions;
