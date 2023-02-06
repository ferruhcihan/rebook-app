import React from "react";
import { PaginationType } from "../../models";

const Pagination = (props: PaginationType) => {
  const handlePagination = (current: number) => {
    props.pagination(current);
  };

  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex">
          <li
            className={`page-item ${
              props.current === 1 ? "disabled" : props.current > 1 ? "" : ""
            }`}
            onClick={() => handlePagination(props.current - 1)}
          >
            &laquo;
          </li>

          {props.total < 5 ? (
            <>
              {Array.apply(0, Array(props.total)).map((arr, i) => (
                <React.Fragment key={`first-link-${i}`}>
                  <li
                    key={i}
                    className={`page-item ${
                      props.current === i + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePagination(i + 1)}
                  >
                    {i + 1}
                  </li>
                </React.Fragment>
              ))}
            </>
          ) : props.current % 5 >= 0 &&
            props.current > 4 &&
            props.current + 2 < props.total ? (
            <>
              <li className="page-item" onClick={() => handlePagination(1)}>
                1
              </li>
              <li className="page-item disabled">...</li>
              <li
                className="page-item"
                onClick={() => handlePagination(props.current - 1)}
              >
                {props.current - 1}
              </li>
              <li
                className="page-item active"
                onClick={() => handlePagination(props.current)}
              >
                {props.current}
              </li>
              <li
                className="page-item"
                onClick={() => handlePagination(props.current + 1)}
              >
                {props.current + 1}
              </li>
              <li className="page-item disabled">...</li>
              <li
                className="page-item"
                onClick={() => handlePagination(props.total)}
              >
                {props.total}
              </li>
            </>
          ) : props.current % 5 >= 0 &&
            props.current > 4 &&
            props.current + 2 >= props.total ? (
            <>
              <li className="page-item" onClick={() => handlePagination(1)}>
                1
              </li>
              <li className="page-item disabled">...</li>
              <li
                className={`page-item ${
                  props.current === props.total - 3 ? "active" : ""
                }`}
                onClick={() => handlePagination(props.total - 3)}
              >
                {props.total - 3}
              </li>
              <li
                className={`page-item ${
                  props.current === props.total - 2 ? "active" : ""
                }`}
                onClick={() => handlePagination(props.total - 2)}
              >
                {props.total - 2}
              </li>
              <li
                className={`page-item ${
                  props.current === props.total - 1 ? "active" : ""
                }`}
                onClick={() => handlePagination(props.total - 1)}
              >
                {props.total - 1}
              </li>
              <li
                className={`page-item ${
                  props.current === props.total ? "active" : ""
                }`}
                onClick={() => handlePagination(props.total)}
              >
                {props.total}
              </li>
            </>
          ) : (
            <>
              {Array.apply(0, Array(5)).map((arr, i) => (
                <React.Fragment key={`second-link-${i}`}>
                  <li
                    className={`page-item ${
                      props.current === i + 1 ? "active" : ""
                    }`}
                    key={i}
                    onClick={() => handlePagination(i + 1)}
                  >
                    {i + 1}
                  </li>
                </React.Fragment>
              ))}
              <li className="page-item disabled">...</li>
              <li
                className="page-item"
                onClick={() => handlePagination(props.total)}
              >
                {props.total}
              </li>
            </>
          )}

          <li
            className={`page-item ${
              props.current === props.total
                ? "disabled"
                : props.current < props.total
                ? ""
                : ""
            }`}
            onClick={() => handlePagination(props.current + 1)}
          >
            &raquo;
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
