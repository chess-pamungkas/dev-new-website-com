import React, { createContext, useState } from "react";
import { INITIAL_SEARCH_STATE } from "../../helpers/constants";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchState, setSearchState] = useState(INITIAL_SEARCH_STATE);

  return (
    <SearchContext.Provider
      value={{
        searchState,
        setSearchState
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;