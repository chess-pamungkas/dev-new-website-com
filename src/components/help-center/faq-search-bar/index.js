import React, { useCallback, useState, useEffect } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {
  FAQ_ALL,
  FAQ_BEGINNERS,
  FSA_FAQ_MARKET,
  CYSEC_FAQ_MARKET,
  FAQ_QUICK_ANSWER,
} from "../../../helpers/faq";
import { debounce } from "lodash";
import { isCySEC } from "../../../helpers/entity-resolver";

const FaqSearchBar = ({ className, setSearchResults, setNoSearchResult }) => {
  const COUNT_OF_SEARCH_CHARS = 1;

  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const faqMarket = isCySEC ? CYSEC_FAQ_MARKET : FSA_FAQ_MARKET;

  const searchContent = [
    ...FAQ_QUICK_ANSWER,
    ...FAQ_ALL,
    ...faqMarket,
    ...FAQ_BEGINNERS,
  ];

  const handleSearchValue = (value) => {
    if (value.length >= COUNT_OF_SEARCH_CHARS) {
      const _value = value.toLowerCase();
      const contentDeepCopy = JSON.parse(JSON.stringify(searchContent));
      const results = contentDeepCopy.filter((topic) => {
        // check if maps with faq content contain the search query
        let includeTopic = false;
        let content = [];
        for (const item of topic.content.values()) {
          if (
            t(item.question).toLowerCase().includes(_value) ||
            item.answer.some((el) => t(el).toLowerCase().includes(_value))
          ) {
            includeTopic = true;
            content.push(item);
          }
        }
        topic.content = content;
        return includeTopic;
      });
      if (results.length === 0) {
        setNoSearchResult(true);
      }
      setSearchResults(results);
    } else if (value.length === 0) {
      setNoSearchResult(false);
      setSearchResults([]);
    }
  };

  // eslint-disable-next-line
  const debouncedHandleSearchValue = useCallback(
    debounce(handleSearchValue, 500, {}),
    []
  );

  const handleSearchInputChange = (e) => {
    setNoSearchResult(false);
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
