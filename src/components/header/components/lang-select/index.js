import React, { useContext } from "react";
import cn from "classnames";
import { AngleDownIcon } from "../../../shared/icons";
import { ANGLE_ICON_COLOR } from "../../../../helpers/constants";
import { useModal } from "../../../../helpers/hooks/use-modal";
import LanguageContext from "../../../../context/language-context";
import Popup from "../../../shared/popup";
import LangOptions from "../lang-options";
import { sendClickEventToGA } from "../../../../helpers/services/google-analytics-service";

const LangSelect = ({ className, isHeader = false, setIsLangPopupOpened }) => {
  const {
    selectedLanguage,
    selectedLanguage: { icon: Icon } = {},
    setSelectedLanguage,
  } = useContext(LanguageContext);
  const { isShow, handleOpen, handleClose } = useModal();

  const onLangSelect = (selected) => {
    setSelectedLanguage(selected);
    closePopup();
  };

  const setIconColor = (isShow) => {
    if (isHeader) {
      return isShow ? ANGLE_ICON_COLOR.red : ANGLE_ICON_COLOR.white;
    }

    return isShow ? ANGLE_ICON_COLOR.white : ANGLE_ICON_COLOR.red;
  };

  const closePopup = () => {
    setIsLangPopupOpened && setIsLangPopupOpened(false);
    handleClose();
  };

  return (
    <>
      <button
        className={cn(
          "lang-select",
          { "lang-select--active": isShow },
          className
        )}
        type="button"
        onClick={(e) => {
          handleOpen();
          setIsLangPopupOpened && setIsLangPopupOpened(true);
          sendClickEventToGA(e);
        }}
      >
        {Icon && <Icon className="lang-select__flag" />}

        <AngleDownIcon
          className={cn("lang-select__icon", {
            "lang-select__icon--up": isShow,
          })}
          color={setIconColor(isShow)}
        />
      </button>

      <Popup isPopupOpen={isShow} handlePopupClose={closePopup}>
        <LangOptions
          selectedLanguage={selectedLanguage}
          langugeSelectHandler={onLangSelect}
        />
      </Popup>
    </>
  );
};

export default LangSelect;
