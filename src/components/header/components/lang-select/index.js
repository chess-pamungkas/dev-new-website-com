import React, {useState} from 'react';
import cn from 'classnames';

const LangSelect = ({className}) => {
  const [langSelected, setLangSelected] = useState('EN');
  const [isExpanded, setIsExpanded] = useState(false);

  const onLangSelect = () => {
    setLangSelected('FR');
    setIsExpanded(false);
  };

  return (
    <div
      className={cn("lang-select", className)}
      role="button"
      tabIndex={0}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {langSelected}

      {isExpanded && (
        <ul className="lang-select__dropdown">
          <li className="lang-select__item">
            <button type="button" onClick={onLangSelect}>EN</button>
          </li>
          <li className="lang-select__item">
            <button type="button" onClick={onLangSelect}>FR</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangSelect;
