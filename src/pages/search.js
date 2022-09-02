import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useSearchData } from "../helpers/hooks/use-search-data";
import {
  HOME_PAGE_LINK,
  SEARCH_PARAM_NAME,
  SEARCH_MIN_QUERY_LENGTH
} from "../helpers/constants";
import { getUrlParamValue } from "../helpers/services/get-url-param-value";
import Layout from "../components/shared/layout";
import ButtonLink from "../components/shared/button-link";
import {
  Logo,
  SearchIcon,
  SearchNoResultsImg
} from "../components/shared/icons";
import Seo from "../components/shared/seo";

const SearchPage = () => {
  const { t } = useTranslation();
  const { getSearchResults } = useSearchData();

  const [searchState, setSearchState] = useState({
    query: "",
    results: [],
    noResultsFound: false
  });

  useEffect(() => {
    const searchParamValue = getUrlParamValue(SEARCH_PARAM_NAME);
    if (!searchParamValue) return;

    const results = getSearchResults(decodeURI(searchParamValue));
    setSearchState({
      query: searchParamValue,
      results,
      noResultsFound: !results.length
    });
  }, [getSearchResults]);

  const handleSearch = e => {
    const query = e.target.value;
    if (query.length >= SEARCH_MIN_QUERY_LENGTH) {
      const results = getSearchResults(query);
      setSearchState({
        query,
        results,
        noResultsFound: !results.length
      });
    } else {
      setSearchState({
        query,
        results: [],
        noResultsFound: false
      });
    }
  };

  return (
  <Layout isSearchBarAttached={false}>
    <Seo title={t("page-search-title")} />
    <main className="search-page">
      <section className="search-page__container">
        <form className="search-page__form">
          <SearchIcon className="search-page__form-icon" />

          <input
            className="search-page__form-input"
            placeholder={t("search-placeholder")}
            onChange={handleSearch}
            value={searchState.query}
          />
        </form>

        <div className="search-page__results">
          {searchState.noResultsFound ? (
            <div className="search-page__no-results">
              <SearchNoResultsImg className="search-page__no-results-img" />
              <h2 className="search-page__no-results-title">
                {t("search-no-results-title")}
              </h2>
              <p className="search-page__note">
                {t("search-no-results-text")}
              </p>
              <ButtonLink
                link={HOME_PAGE_LINK}
                className="button-link button-link--ghost-red search-page__no-results-btn"
              >
                {t("search-go-back-btn")}
              </ButtonLink>
            </div>
          ) : !!searchState.results.length ? (
            <ul className="search-page__results-list">
              {searchState.results.map((page, i) => (
                <li key={`search-page-${i}`} className="search-page__item">
                  <Link to={page.url} className="search-page__link">
                    <div className="search-page__icon-wrapper">
                      <Logo className="search-page__icon" />
                    </div>

                    <div className="search-page__caption">
                      <h2 className="search-page__title">{page.content}</h2>
                      <p className="search-page__ref">
                        {`${window.location.origin}${page.url}`}
                      </p>
                    </div>
                  </Link>

                  <p className="search-page__text">{page.content}</p>

                  <ButtonLink
                    link={page.url}
                    className="search-page__btn button-link--ghost-red"
                  >
                    {t("search-submit-btn")}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          ) : (
            <p className="search-page__note">
              {t("search-min-query-part1")}
              {' '}{SEARCH_MIN_QUERY_LENGTH}{' '}
              {t("search-min-query-part2")}
            </p>
          )}          
        </div>
      </section>
    </main>
  </Layout>
)};

export default SearchPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
