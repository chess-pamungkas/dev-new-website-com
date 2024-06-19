import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import {
  LANG_SELECT_OPTIONS,
  SHOULD_BE_SMALLER_LANGUAGES,
} from "../../../../helpers/lang-options.config";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";

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
        onClick={() => {
          languageSelectHandler(language);
          document.documentElement.setAttribute("lang", language.id);
          //TODO Refactor and Consider using Gatsby's built-in language switching methods here
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

LangSelectItem.propTypes = {
  language: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.func,
    name: PropTypes.string.isRequired,
  }).isRequired,
  selectedLanguage: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  languageSelectHandler: PropTypes.func.isRequired,
};

const LangOptions = ({
  className,
  selectedLanguage,
  languageSelectHandler,
}) => {
  const { t } = useTranslationWithVariables();

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

LangOptions.propTypes = {
  className: PropTypes.string,
  selectedLanguage: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  languageSelectHandler: PropTypes.func.isRequired,
};

export default LangOptions;
