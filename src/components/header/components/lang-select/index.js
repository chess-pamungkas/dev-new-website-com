import React, { useContext } from "react";
import cn from "classnames";
import { AngleDownIcon } from "../../../shared/icons";
import { ANGLE_ICON_COLOR } from "../../../../helpers/constants";
import { useModal } from "../../../../helpers/hooks/use-modal";
import LanguageContext from "../../../../context/language-context";
import Popup from "../../../shared/popup";
import LangOptions from "../lang-options";
import CookieContext from "../../../../context/cookie-context";
import { LAST_LANGUAGE_KEY, PERFORMANCE_COOKIE_KEY } from "../../../../helpers/gdpr-cookie.config";

const LangSelect = ({ className, isHeader = false }) => {
  const {
    selectedLanguage,
    selectedLanguage: { icon: Icon } = {},
    setSelectedLanguage,
  } = useContext(LanguageContext);
  const { isShow, handleOpen, handleClose } = useModal();
  const { setCookie } = useContext(CookieContext);

  const onLangSelect = (selected) => {
    setSelectedLanguage(selected);
    handleClose();
    setCookie(LAST_LANGUAGE_KEY, selected.id, PERFORMANCE_COOKIE_KEY);
  };

  const setIconColor = (isShow) => {
    if (isHeader) {
      return isShow ? ANGLE_ICON_COLOR.RED : ANGLE_ICON_COLOR.WHITE;
    }

    return isShow ? ANGLE_ICON_COLOR.WHITE : ANGLE_ICON_COLOR.RED;
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
        onClick={handleOpen}
      >
        {Icon && <Icon className="lang-select__flag" />}

        <AngleDownIcon
          className={cn("lang-select__icon", {
            "lang-select__icon--up": isShow,
          })}
          color={setIconColor(isShow)}
        />
      </button>

      <Popup isPopupOpen={isShow} handlePopupClose={handleClose}>
        <LangOptions
          selectedLanguage={selectedLanguage}
          langugeSelectHandler={onLangSelect}
        />
      </Popup>
    </>
  );
};

export default LangSelect;
