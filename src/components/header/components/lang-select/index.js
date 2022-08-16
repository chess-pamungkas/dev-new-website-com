import React, { useState } from 'react';
import cn from 'classnames';
import { FlagEnglishIcon, AngleDownIcon } from '../../../shared/icons';
import { ANGLE_ICON_COLOR } from '../../../../helpers/constants';
import { useModal } from '../../../../helpers/hooks/use-modal';
import Popup from '../../../shared/popup';

const LangSelect = ({ className, isHeader = false }) => {
  const { isShow, handleOpen, handleClose } = useModal();

  const [langSelected, setLangSelected] = useState(<FlagEnglishIcon />);
  // const [isExpanded, setIsExpanded] = useState(false);

  const onLangSelect = () => {
    handleOpen();
    // setLangSelected('FR');
    // setIsExpanded(false);
  };

  const setIconColor = isShow => {
    if (isHeader) {
      return isShow ? ANGLE_ICON_COLOR.RED : ANGLE_ICON_COLOR.WHITE;
    }

    return isShow ? ANGLE_ICON_COLOR.WHITE : ANGLE_ICON_COLOR.RED;
  };

  return (
    <>
      <button
        className={cn("lang-select", {"lang-select--active": isShow}, className)}
        type="button"
        onClick={onLangSelect}
      >
        {langSelected}

        <AngleDownIcon
          className={cn("lang-select__icon", {"lang-select__icon--up": isShow})}
          color={setIconColor(isShow)}
        />

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
        <div style={{background: '#fff', height: '300px'}}>Hello</div>
      </Popup>
    </>
  );
};

export default LangSelect;
