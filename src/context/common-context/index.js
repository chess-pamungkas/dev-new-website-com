import React, { createContext, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../helpers/hooks/use-window-size";
import { isBrowser } from "../../helpers/services/is-browser";

const CommonContext = createContext({});

export const CommonProvider = ({ children }) => {
  const { width } = useWindowSize();
  const [sectionOptions, setSectionOptions] = useState(null);
  const [headerRef, setHeaderRef] = useState(useRef());
  const [isSearchBarAttached, setIsSearchBarAttached] = useState(true);

  useEffect(() => {
    if (isBrowser()) {
      let main = document.getElementById("main-container");
      if (main) main.style.marginTop = headerRef?.current?.offsetHeight + "px";
    }
  }, [headerRef, sectionOptions, width]);

  return (
    <CommonContext.Provider
      value={{
        sectionOptions,
        setSectionOptions,
        headerRef,
        setHeaderRef,
        isSearchBarAttached,
        setIsSearchBarAttached,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default CommonContext;
