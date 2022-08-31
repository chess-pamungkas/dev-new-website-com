import cn from "classnames";
import React from "react";

const TablePagination = ({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
}) => {
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

export default TablePagination;
