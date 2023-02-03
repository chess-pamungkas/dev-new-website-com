import React, { useState, useEffect } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {
  LANG_SELECT_OPTIONS,
  CYSEC_LANG_SELECT_OPTIONS,
  SHOULD_BE_SMALLER_LANGUAGES,
} from "../../../../helpers/lang-options.config";
import { sendClickEventToGA } from "../../../../helpers/services/google-analytics-service";
import { useEntityPostfix } from "../../../../helpers/use-entity-postfix";

const LangSelectItem = ({
  language: { id, icon: Icon, name } = {},
  language,
  selectedLanguage: { id: selectedId } = {},
  languageSelectHandler,
}) => (
  <li
    className={cn("lang-options__item", {
      "lang-options__item--selected": selectedId === id,
    })}
  >
    <button
      className="lang-options__select"
      type="button"
      onClick={(e) => {
        languageSelectHandler(language);
        document.documentElement.setAttribute("lang", language.id);
        sendClickEventToGA(e);
      }}
    >
      {Icon && <Icon className="lang-options__flag" />}

      <span
        className={
          SHOULD_BE_SMALLER_LANGUAGES.includes(name)
            ? "lang-options__name--small"
            : "lang-options__name"
        }
      >
        {name}
      </span>
    </button>
  </li>
);

const LangOptions = ({
  className,
  selectedLanguage,
  languageSelectHandler,
}) => {
  const { t } = useTranslation();
  const [langOptions, setLangOptions] = useState([]);
  const { isCySEC } = useEntityPostfix();

  useEffect(() => {
    setLangOptions(isCySEC ? CYSEC_LANG_SELECT_OPTIONS : LANG_SELECT_OPTIONS);
  }, [isCySEC]);

  return (
    <div className={cn("lang-options", className)}>
      <h2 className="lang-options__title">{t("lang-select-popup-title")}</h2>

      <ul className="lang-options__list">
        {langOptions.map((option) => (
          <LangSelectItem
            key={option.id}
            selectedLanguage={selectedLanguage}
            languageSelectHandler={languageSelectHandler}
            language={option}
          />
        ))}
      </ul>
    </div>
  );
};

export default LangOptions;
