import React, { useRef, useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useOnClickOutside } from "../../../../helpers/hooks/use-on-click-outside";
import { SearchIcon } from "../../../shared/icons";

const SearchBar = ({
  className,
  isExpandable = false,
  placeholder,
  onChange = () => {},
  value,
}) => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(false);

  const searchInput = useRef();
  const searchBarRef = useRef();

  const onBarExpand = () => {
    setIsActive(true);
    searchInput.current.focus();
  };

  useOnClickOutside(searchBarRef, () => {
    if (!isExpandable) return;

    setIsActive(false);
    searchInput.current.value = "";
  });

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
          placeholder={placeholder ? placeholder : t("search-placeholder")}
          ref={searchInput}
          onChange={onChange}
          value={value || ""}
        />
        <button className="search-bar__submit" type="button">
          {t("search-submit-btn")}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
