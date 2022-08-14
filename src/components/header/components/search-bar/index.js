import React from "react";
import cn from "classnames";
import { SearchIcon } from '../../../shared/icons';

const SearchBar = ({ className }) => {
  return (
    <form className={cn("search-bar", className)}>
      <SearchIcon />
      <input className="search-bar__input" placeholder="Search Bar: WIP" />
      <button className="search-bar__submit">
        Go
      </button>
    </form>
  );
};

export default SearchBar;
