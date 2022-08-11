import React, {useState} from 'react';

const LangSelect = ({className}) => {
  const [langSelected, setLangSelected] = useState('EN');
  const [isExpanded, setIsExpanded] = useState(false);

  const onLangSelect = () => {
    setLangSelected('FR');
    setIsExpanded(false);
  };

  return (
    <div
      className={`${className}__lang-select`}
      role="button"
      tabIndex={0}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {langSelected}

      {isExpanded && (
        <ul className={`${className}__lang-select-dropdown`}>
          <li className={`${className}__lang-select-item`}>
            <button type="button" onClick={onLangSelect}>EN</button>
          </li>
          <li className={`${className}__lang-select-item`}>
            <button type="button" onClick={onLangSelect}>FR</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangSelect;
