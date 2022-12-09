import React from "react";
import { PaginationContainer } from "./pagination-styles";
import _ from "lodash";

function Pagination({ total_pages, page, setPage }) {
  const next = () => {
    if (page == total_pages) return null;
    else setPage(page + 1);
  };

  const pervious = () => {
    if (page == 1) return null;
    else setPage(page - 1);
  };

  return (
    <PaginationContainer>
      {total_pages !== 1 ? (
        <ul className="pagination">
          <li
            className={page == 1 ? " disabled arrow" : " arrow"}
            onClick={() => pervious()}
          >
            &laquo;
          </li>

          {[...Array(total_pages)].map((x, i) => (
            <li
              className={i + 1 == page ? "page-item active" : "page-item"}
              onClick={() => setPage(i + 1)}
              key={i}
            >
              {i + 1}
            </li>
          ))}

          <li
            className={page == total_pages ? "disabled arrow" : "arrow"}
            onClick={() => next()}
          >
            &raquo;
          </li>
        </ul>
      ) : null}
    </PaginationContainer>
  );
}

export default Pagination;
