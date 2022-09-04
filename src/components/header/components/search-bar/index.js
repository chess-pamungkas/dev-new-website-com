import React, { useRef, useState } from "react";
import cn from "classnames";
import { Link, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useOnClickOutside } from "../../../../helpers/hooks/use-on-click-outside";
import {
  DROPDOWN_SEARCH_ITEMS_TO_SHOW,
  SEARCH_MIN_QUERY_LENGTH,
  INITIAL_SEARCH_STATE,
  SEARCH_PAGE_LINK,
  SEARCH_PARAM_NAME,
  LINK_TO_HIGHLIGHTED_TEXT_PARAM_NAME
} from "../../../../helpers/constants";
import { SearchIcon } from "../../../shared/icons";
import { useSearchData } from "../../../../helpers/hooks/use-search-data";

const SearchBar = ({
  className,
  isExpandable = false,
}) => {
  const { t } = useTranslation();
  const { getSearchResults } = useSearchData();

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

  const handleSearch = e => {
    const query = e.target.value;
    if (query.length >= SEARCH_MIN_QUERY_LENGTH) {
      const results = getSearchResults(query);
      setSearchState({ query, results });
    } else {
      setSearchState({ query, results: [] });
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
      onSubmit={(e => {
        e.preventDefault();
        navigate(`${SEARCH_PAGE_LINK}/?${SEARCH_PARAM_NAME}=${encodeURI(searchState.query)}`)
      })}
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
          onChange={handleSearch}
          value={searchState.query}
        />
        <button className="search-bar__submit" type="submit">
          {t("search-submit-btn")}
        </button>
      </div>

      {searchState.query && (
        <ul className="search-bar__results">
          {!!searchState.results.length ? (
            <>
              {searchState.results.slice(0, DROPDOWN_SEARCH_ITEMS_TO_SHOW).map((page, i) => (
                <li className="search-bar__results-item" key={`search-bar-${i}`}>
                  <Link
                    to={`${page.url}?${LINK_TO_HIGHLIGHTED_TEXT_PARAM_NAME}=${encodeURI(page.fullMatch)}`}
                    className="search-bar__results-link"
                  >
                    <SearchIcon className="search-bar__results-icon" />
                    <span className="search-bar__results-title">{page.content}</span>
                  </Link>
                </li>
              ))}

              {searchState.results.length > DROPDOWN_SEARCH_ITEMS_TO_SHOW && (
                <li className="search-bar__results-item">
                  <Link
                    to={`${SEARCH_PAGE_LINK}/?${SEARCH_PARAM_NAME}=${encodeURI(searchState.query)}`}
                    className="search-bar__results-link"
                  >
                    <span className="search-bar__results-title search-bar__results-title--bold">
                      {t("search-more-results")}
                    </span>
                  </Link>
                </li>
              )}
            </>
          ) : (
            <>
              {searchState.query.length >= SEARCH_MIN_QUERY_LENGTH ? (
                <li className="search-bar__results-item">
                  <span className="search-bar__results-title">
                    {t("search-no-results")}
                  </span>
                </li>
              ) : (
                <li className="search-bar__results-item">
                  <span className="search-bar__results-title">
                    {t("search-min-query-part1")}
                    {' '}{SEARCH_MIN_QUERY_LENGTH}{' '}
                    {t("search-min-query-part2")}
                  </span>
                </li>
              )}
            </>
          )}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
