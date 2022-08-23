import React from "react";
import { Link } from "gatsby";
import Layout from "../components/shared/layout";
import SearchBar from "../components/header/components/search-bar";
import { Logo } from "../components/shared/icons";

const mockedResult = {
  title: 'Lorem Ipsum',
  link: 'https://www.loremipsum.com/',
  text: 'Lorem ipsum dolor sit amet, consect adipiscing elit. Quisque non...',
  icon: Logo
};

const SearchPage = () => (
  <Layout>
    <main className="search-page">
      <section className="search-page__container">
        <SearchBar className="search-page__search search-bar--inverted" />

        <ul className="search-page__results">
          {Array.from({length: 3}, _el => (mockedResult)).map((item, i) => (
            <li key={`search-page-${i}`}>
              <Link to={item.link}>
                <Logo />
                <h2>{item.title}</h2>
                <p href={item.link}>{item.link}</p>
              </Link>

              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </Layout>
);

export default SearchPage;

export const Head = () => <title>Search</title>;
