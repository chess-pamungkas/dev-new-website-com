import React, { useContext, useRef, useState } from "react";
import cn from "classnames";
import { Link } from "gatsby";
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next";
import { useOnClickOutside } from "../../../../helpers/hooks/use-on-click-outside";
import {
  DROPDOWN_SEARCH_ITEMS_TO_SHOW,
  SEARCH_MIN_QUERY_LENGTH,
  INITIAL_SEARCH_STATE
} from "../../../../helpers/constants";
import { SearchIcon } from "../../../shared/icons";
import { useSiteMetadata } from "../../../../helpers/hooks/use-global-context";

const SearchBar = ({
  className,
  isExpandable = false,
}) => {
  const { t } = useTranslation();
  const { language } = useContext(I18nextContext);

  const { langGlobalContext } = useSiteMetadata();
  console.log(langGlobalContext[language])

  const [isActive, setIsActive] = useState(false);
  const [searchState, setSearchState] = useState(INITIAL_SEARCH_STATE);

  const searchInput = useRef();
  const searchBarRef = useRef();

  const onBarExpand = () => {
    setIsActive(true);
    searchInput.current.focus();
  };

  useOnClickOutside(searchBarRef, () => {
    setSearchState(INITIAL_SEARCH_STATE);
    if (!isExpandable) return;

    setIsActive(false);
  });

  const getSearchResults = query => {
    const index = window.__FLEXSEARCH__?.en?.index;
    const store = window.__FLEXSEARCH__?.en?.store;
    if (!query || !index) {
      return [];
    } else {
      let results = [];
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query));
      });

      results = Array.from(new Set(results));

      return store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node);
    }
  };

  const doSearch = e => {
    const query = e.target.value;
    if (searchState.query.length > SEARCH_MIN_QUERY_LENGTH) {
      const results = getSearchResults(query);
      setSearchState({ results, query });
    } else {
      setSearchState({ results: [], query });
    }
  };

  return (
    <form
      className={cn(
        "search-bar",
        { "search-bar--closed": isExpandable && !isActive },
        className
      )}
      ref={searchBarRef}
    >
      <button
        className="search-bar__expand"
        type="button"
        onClick={onBarExpand}
      >
        <SearchIcon />
      </button>

      <div className="search-bar__controls">
        <input
          className={cn("search-bar__input", {
            "search-bar__input--expandable": isExpandable,
          })}
          placeholder={t("search-placeholder")}
          ref={searchInput}
          onChange={doSearch}
          value={searchState.query}
        />
        <button className="search-bar__submit" type="button">
          {t("search-submit-btn")}
        </button>
      </div>

      {searchState.query && (
        <ul className="search-bar__results">
          {!!searchState.results.length ? (
            searchState.results.slice(0, DROPDOWN_SEARCH_ITEMS_TO_SHOW).map((page, i) => (
              <li className="search-bar__results-item" key={`search-bar-${i}`}>
                <Link to={page.url} className="search-bar__results-link">
                  <SearchIcon className="search-bar__results-icon" />
                  <span className="search-bar__results-title">{page.title}</span>
                </Link>
              </li>
            ))
          ) : searchState.query.length > SEARCH_MIN_QUERY_LENGTH ? (
              <li className="search-bar__results-item">
                <span className="search-bar__results-title">{t("search-no-results")}</span>
              </li>
            ) : (
              <li className="search-bar__results-item">
                <span className="search-bar__results-title">{t("search-min-query-required")}</span>
              </li>
            )}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
