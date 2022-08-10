import React, {useState} from 'react';

const LangSelect = () => {
  const [langSelected, setLangSelected] = useState('EN');
  const [isExpanded, setIsExpanded] = useState(false);

  const onLangSelect = () => {
    setLangSelected('FR');
    setIsExpanded(false);
  };

  return (
    <div
      className="header__lang-select"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {langSelected}

      {isExpanded && (
        <ul className="header__lang-select-dropdown">
          <li className="header__lang-select-item">
            <button type="button" onClick={onLangSelect}>EN</button>
          </li>
          <li className="header__lang-select-item">
            <button type="button" onClick={onLangSelect}>FR</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangSelect;
