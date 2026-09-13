import styles from "../pages/Dashboard.module.css";

function Pagination({ totalPages, setPage, page }) {
  return (
    <div className={styles.pagination}>
      {page > 2 && (
        <>
          <span onClick={() => setPage(1)}>{(1).toLocaleString("fa-IR")}</span>
          ...
        </>
      )}
      {page > 1 && (
        <span onClick={() => setPage(page - 1)}>
          {(page - 1).toLocaleString("fa-IR")}
        </span>
      )}
      <span className={styles.page_selected}>
        {page.toLocaleString("fa-IR")}
      </span>
      {page < totalPages && (
        <span onClick={() => setPage(page + 1)}>
          {(page + 1).toLocaleString("fa-IR")}
        </span>
      )}
      {page !== totalPages && page < totalPages - 1 && (
        <>
          ...
          <span onClick={() => setPage(totalPages)}>
            {totalPages.toLocaleString("fa-IR")}
          </span>
        </>
      )}
    </div>
  );
}

export default Pagination;
