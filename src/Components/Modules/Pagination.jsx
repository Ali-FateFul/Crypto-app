import React from "react";

import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage }) => {
  const nextHandler = () => {
    if (page < 10) {
      setPage((page) => page + 1);
    }
  };
  const previousHandler = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };
  return (
    <div className={styles.pagination}>
      <button
        className={page === 1 ? styles.disabled : null}
        onClick={previousHandler}
      >
        Previous
      </button>
      <p className={page === 1 ? styles.selected : null}>1</p>
      <p className={page === 2 ? styles.selected : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page === 9 ? styles.selected : null}>9</p>
      <p className={page === 10 ? styles.selected : null}>10</p>
      <button
        className={page === 10 ? styles.disabled : null}
        onClick={nextHandler}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
