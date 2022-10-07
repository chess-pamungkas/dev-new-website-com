import React, { useCallback, useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {
  FAQ_ALL,
  FAQ_BEGINNERS,
  FAQ_MARKET,
  FAQ_QUICK_ANSWER,
} from "../../../helpers/faq";
import { debounce } from "lodash";

const FaqSearchBar = ({ className, setSearchResults }) => {
  const COUNT_OF_SEARCH_CHARS = 3;

  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const searchContent = [
    ...FAQ_QUICK_ANSWER,
    ...FAQ_ALL,
    ...FAQ_MARKET,
    ...FAQ_BEGINNERS,
  ];

  const handleSearchValue = (value) => {
    if (value.length >= COUNT_OF_SEARCH_CHARS) {
      const _value = value.toLowerCase();
      const results = searchContent.filter((topic) => {
        // check if maps with faq content contain the search query
        return (
          (topic.title && t(topic.title).toLowerCase().includes(_value)) ||
          topic.content.some(
            (item) =>
              t(item.question).toLowerCase().includes(_value) ||
              item.answer.some((el) => t(el).toLowerCase().includes(_value))
          )
        );
      });
      setSearchResults(results);
    } else if (value.length === 0) {
      setSearchResults([]);
    }
  };

  // eslint-disable-next-line
  const debouncedHandleSearchValue = useCallback(
    debounce(handleSearchValue, 500, {}),
    []
  );

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedHandleSearchValue(e.target.value);
  };

  return (
    <div className={cn("faq-search-bar", className)}>
      <p className="faq-search-bar__title">{t("faq_quick-searchbar-title")}</p>
      <input
        className={cn("faq-search-bar__input")}
        placeholder={t("faq_quick-searchbar-placeholder")}
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default FaqSearchBar;
