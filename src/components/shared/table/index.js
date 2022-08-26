import React from "react";
import cn from "classnames";
import {
  useTable,
  useSortBy,
  useFilters,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";

import SearchBar from "../../header/components/search-bar";

const TableComponent = ({ className, tableClassName, data, columns }) => {
  const PAGE_SIZES = [5, 10, 15];

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
    pageSize,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: PAGE_SIZES[0],
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
      <div className="table__dropdown-wrapper">
        <span className="table__dropdown-title">Display</span>
        <select
          className="table__dropdown"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {PAGE_SIZES.map((pageSize) => (
            <option
              key={pageSize}
              value={pageSize}
              className="table__dropdown-option"
            >
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const TablePagination = () => {
    return (
      <div>
        <button
          className=""
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>
        <button
          className=""
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>
        <button className="" onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button
          className=""
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
    );
  };

  return (
    <div className={cn("table-wrapper", className)}>
      <div className="table__tools">
        <TableShowByDropdown />
        <TableSearch />
      </div>

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
                    <td className="table__body-column" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={cn("table__tools", "table__tools--bottom")}>
        <TablePagination />
      </div>
    </div>
  );
};

export default TableComponent;
