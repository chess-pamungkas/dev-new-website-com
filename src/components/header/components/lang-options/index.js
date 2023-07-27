import React from "react";
import cn from "classnames";
import {
  LANG_SELECT_OPTIONS,
  SHOULD_BE_SMALLER_LANGUAGES,
} from "../../../../helpers/lang-options.config";
import { sendClickEventToGA } from "../../../../helpers/services/google-analytics-service";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";

const LangSelectItem = ({
  language: { id, icon: Icon, name } = {},
  language,
  selectedLanguage: { id: selectedId } = {},
  languageSelectHandler,
}) => {
  const { originalPath } = useI18next();

  return (
    <li
      className={cn("lang-options__item", {
        "lang-options__item--selected": selectedId === id,
      })}
    >
      <Link
        to={originalPath}
        language={language.id}
        className="lang-options__select"
        // type="button"
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
      </Link>
    </li>
  );
};

const LangOptions = ({
  className,
  selectedLanguage,
  languageSelectHandler,
}) => {
  const { t } = useTranslation();

  return (
    <div className={cn("lang-options", className)}>
      <h2 className="lang-options__title">{t("lang-select-popup-title")}</h2>

      <ul className="lang-options__list">
        {LANG_SELECT_OPTIONS.map((option) => (
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
