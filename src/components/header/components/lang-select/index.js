import React, { useState } from 'react';
import cn from 'classnames';
import { EnFlagIcon, AngleDownIcon } from '../../../shared/icons';
import { ANGLE_ICON_COLOR } from '../../../../helpers/constants';
import { useModal } from '../../../../helpers/hooks/use-modal';
import Popup from '../../../shared/popup';
import LangOptions from '../lang-options';

const LangSelect = ({ className, isHeader = false }) => {
  const { isShow, handleOpen, handleClose } = useModal();

  const [langSelected, setLangSelected] = useState(<EnFlagIcon />);

  const onLangSelect = () => {
    handleOpen();
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
      </button>

      <Popup
        isPopupOpen={isShow}
        handlePopupClose={handleClose}
      >
        <LangOptions />
      </Popup>
    </>
  );
};

export default LangSelect;
