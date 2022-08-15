import React, { useState } from 'react';
import cn from 'classnames';
import { FlagEnglishIcon, AngleDownIcon } from '../../../shared/icons';
import { ANGLE_ICON_COLOR } from '../../../../helpers/constants';
import { useModal } from '../../../../helpers/hooks/use-modal';
import Popup from '../../../shared/popup';

const LangSelect = ({ className }) => {
  const { isShow, handleOpen, handleClose } = useModal();

  const [langSelected, setLangSelected] = useState(<FlagEnglishIcon />);
  // const [isExpanded, setIsExpanded] = useState(false);

  const onLangSelect = () => {
    handleOpen();
    // setLangSelected('FR');
    // setIsExpanded(false);
  };

  return (
    <>
    <button
      className={cn("lang-select", className)}
      type="button"
      onClick={onLangSelect}
    >
      {langSelected}

      <AngleDownIcon color={ANGLE_ICON_COLOR.WHITE} />

      {/* {isExpanded && (
        <ul className="lang-select__dropdown">
          <li className="lang-select__item">
            <button type="button" onClick={onLangSelect}>EN</button>
          </li>
          <li className="lang-select__item">
            <button type="button" onClick={onLangSelect}>FR</button>
          </li>
        </ul>
      )} */}
    </button>

    <Popup
      isPopupOpen={isShow}
      handlePopupClose={handleClose}
    >
      <div>Hello</div>
    </Popup>
    </>
  );
};

export default LangSelect;
