import React, { useState } from "react";
import cn from "classnames";
import {
  useAsyncDebounce,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import SearchBar from "../../header/components/search-bar";
import Dropdown from "../dropdown";

const TableComponent = ({
  className,
  tableClassName,
  data,
  columns,
  isPagination,
  isSearch,
}) => {
  const PAGE_SIZES = [5, 10, 15];
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    globalFilter,
    gotoPage,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    page,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        ...(isPagination ? { pageSize: PAGE_SIZES[0] } : {}),
        sortBy: [
          {
            // default sorting by first column
            id: columns[0].accessor,
            desc: false,
          },
        ],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const TableSearch = () => {
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);

    return (
      <div className="table__search">
        <SearchBar
          className="table__searchbar"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </div>
    );
  };

  const TableShowByDropdown = () => {
    return (
      <div className="table__dropdown">
        <span className="table__dropdown-title">Display</span>
        <Dropdown
          className="table__dropdown-select"
          selectedItem={{
            title: state.pageSize,
            value: state.pageSize,
          }}
          items={PAGE_SIZES.map((item) => {
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

  const TablePagination = () => {
    return (
      <div className="pagination">
        <button
          className={cn(
            "pagination",
            "pagination__btn",
            "pagination__btn--arrow",
            "pagination__btn--left"
          )}
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>
        <button
          className={cn("pagination", "pagination__btn")}
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          1
        </button>

        <button
          className={cn("pagination", "pagination__btn")}
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {pageCount}
        </button>
        <button
          className={cn(
            "pagination",
            "pagination__btn",
            "pagination__btn--arrow",
            "pagination__btn--right"
          )}
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <div className={cn("table-wrapper", className)}>
      <div className="table__tools">
        {isPagination && <TableShowByDropdown />}
        {isSearch && <TableSearch />}
      </div>
      <div className="table-scroll">
        <table className={cn("table", tableClassName)} {...getTableProps()}>
          <thead className="table__head">
            {headerGroups.map((headerGroup) => (
              <tr
                className="table__head-row"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    key={`header-${column.render("id")}`}
                    className="table__head-column"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {/* sort only by first column */}
                    {column.isSorted && column.id === columns[0].accessor && (
                      <span
                      /*className={cn("table__head-icon", {
                        "table__head-icon--desc": column.isSortedDesc,
                      })}*/
                      >
                        <span className="table__head-icon">
                          {column.isSortedDesc ? "🔽" : "🔼"}
                        </span>
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="table__body" {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="table__body-row">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="table__body-column"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={cn("table__tools", "table__tools--bottom")}>
        {isPagination && <TablePagination />}
      </div>
    </div>
  );
};

export default TableComponent;
