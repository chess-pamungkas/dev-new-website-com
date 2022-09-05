import React from "react";
import cn from "classnames";
import "regenerator-runtime";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import TableSearch from "./components/search";
import TablePagination from "./components/pagination";
import { TABLE_PAGE_SIZES } from "../../../helpers/constants";
import TableShowByDropdown from "./components/dropdown";
import { TableTip, TableTitle } from "./components/title";

// TODO: add localization to the component
const TableComponent = ({
  className,
  tableClassName,
  data,
  columns,
  isPagination,
  isSearch,
  isSorting,
  isWrapperPadding = false,
  title,
  subtitle,
  tip,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    globalFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    page,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        ...(isPagination ? { pageSize: TABLE_PAGE_SIZES[0] } : {}),
        ...(isSorting
          ? {
              sortBy: [
                {
                  // default sorting by first column
                  id: columns[0].accessor,
                  desc: false,
                },
              ],
            }
          : {}),
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const isGroupedHeader = () => Object.keys(headerGroups).length > 1;

  return (
    <div
      className={cn(
        "table-wrapper",
        {
          "table-wrapper--padding": !isSearch || isWrapperPadding,
        },
        className
      )}
    >
      {title && <TableTitle title={title} subtitle={subtitle} />}
      <div
        className={cn("table__tools", {
          "table__tools--single-block": !isPagination,
        })}
      >
        {isPagination && (
          <TableShowByDropdown state={state} setPageSize={setPageSize} />
        )}
        {isSearch && (
          <TableSearch
            setGlobalFilter={setGlobalFilter}
            globalFilter={globalFilter}
          />
        )}
      </div>
      <div
        className={cn("table-scroll", {
          "table-scroll--vertical": !isPagination,
        })}
      >
        <table
          className={cn(
            "table",
            {
              "table--small-padding": isGroupedHeader(),
            },
            tableClassName
          )}
          {...getTableProps()}
        >
          <thead className="table__head">
            {headerGroups.map((headerGroup, index) => (
              <tr
                key={headerGroup.id}
                className={cn("table__head-row", {
                  "table__head-row--grouped": isGroupedHeader(),
                })}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    key={`header-${column.render("id")}`}
                    className={cn("table__head-column", {
                      "table__head-column--grouped":
                        isGroupedHeader() && index === 0,
                      "table__head-column--empty":
                        isGroupedHeader() && column.render("Header") === "",
                    })}
                    {...column.getHeaderProps()}
                    {...(isSorting
                      ? column.getHeaderProps(column.getSortByToggleProps())
                      : {})}
                  >
                    {column.render("Header")}
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
        {tip && <TableTip tip={tip} />}
        {isPagination && (
          <TablePagination
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        )}
      </div>
    </div>
  );
};

export default TableComponent;
