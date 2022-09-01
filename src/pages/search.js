import React from "react";
import { graphql, Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/shared/layout";
import SearchBar from "../components/header/components/search-bar";
import ButtonLink from "../components/shared/button-link";
import { Logo } from "../components/shared/icons";
import Seo from "../components/shared/seo";

// TODO: replace mocked data with actual search results
const mockedResult = {
  title: 'Lorem Ipsum',
  link: 'https://www.loremipsum.com/',
  text: 'Lorem ipsum dolor sit amet, consect adipiscing elit. Quisque non...',
  icon: Logo
};

const SearchPage = () => {
  const { t } = useTranslation();

  return (
  <Layout>
    <Seo title={t("page-search-title")} />
    <main className="search-page">
      <section className="search-page__container">
        <SearchBar className="search-page__search search-bar--inverted" />

        <ul className="search-page__results">
          {Array.from({length: 3}, _el => (mockedResult)).map((item, i) => (
            <li key={`search-page-${i}`} className="search-page__item">
              <Link to={item.link} className="search-page__link">
                <div className="search-page__icon-wrapper">
                  <Logo className="search-page__icon" />
                </div>

                <div className="search-page__caption">
                  <h2 className="search-page__title">{item.title}</h2>
                  <p className="search-page__ref">{item.link}</p>
                </div>
              </Link>

              <p className="search-page__text">{item.text}</p>

              <ButtonLink
                link={item.link}
                className="search-page__btn button-link--ghost-red"
              >
                {t("search-submit-btn")}
              </ButtonLink>
            </li>
          ))}
        </ul>
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
