import Dropdown from "../../../dropdown";
import React, { useState } from "react";
import { TABLE_PAGE_SIZES } from "../../../../../helpers/constants";

const TableShowByDropdown = ({ state, setPageSize }) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <div className="table__dropdown">
      <span className="table__dropdown-title">Display</span>
      <Dropdown
        className="table__dropdown-select"
        selectedItem={{
          title: state.pageSize,
          value: state.pageSize,
        }}
        items={TABLE_PAGE_SIZES.map((item) => {
          return {
            title: item,
            value: item,
          };
        })}
        setSelectedItem={({ value }) => {
          setPageSize(value);
        }}
        isDropdownShown
        isOpen={isDropdownOpened}
        setIsOpen={setIsDropdownOpened}
      />
    </div>
  );
};

export default TableShowByDropdown;
