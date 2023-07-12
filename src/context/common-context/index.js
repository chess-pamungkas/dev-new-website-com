import React, { createContext, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../helpers/hooks/use-window-size";
import { isBrowser } from "../../helpers/services/is-browser";
import LanguageContext from "../language-context";
import { useContext } from "react";

const CommonContext = createContext({});

export const CommonProvider = ({ children }) => {
  const { width } = useWindowSize();
  const [sectionOptions, setSectionOptions] = useState(null);
  const [headerRef, setHeaderRef] = useState(useRef());
  const [isSearchBarAttached, setIsSearchBarAttached] = useState(true);
  const [heightOffset, setHeightOffset] = useState(0);
  const { selectedLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const updateOffset = () => {
      if (isBrowser() && headerRef?.current?.offsetHeight) {
        setHeightOffset(headerRef.current.offsetHeight);
      }
    };

    // workaround to actually update offset, doesn't work without timeout
    setTimeout(() => {
      updateOffset();
    }, 100);
  }, [headerRef, sectionOptions, width, selectedLanguage]);

  return (
    <CommonContext.Provider
      value={{
        sectionOptions,
        setSectionOptions,
        headerRef,
        setHeaderRef,
        isSearchBarAttached,
        setIsSearchBarAttached,
        heightOffset,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default CommonContext;
