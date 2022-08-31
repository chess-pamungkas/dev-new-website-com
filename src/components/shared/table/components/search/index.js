import React from "react";
import { useAsyncDebounce } from "react-table";
import SearchBar from "../../../../header/components/search-bar";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TableSearch = ({ globalFilter, setGlobalFilter }) => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="table__search">
      <SearchBar
        className="table__searchbar"
        value={value || ""}
        placeholder={t("table-search-placeholder")}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default TableSearch;