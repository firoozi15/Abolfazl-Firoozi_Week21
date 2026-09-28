import styles from "../styles/Dashboard.module.css";

function LimitProductTable({ limitProduct, limitProductHandler }) {
  return (
    <div className={styles.buttons_limit}>
      <p
        onClick={() => limitProductHandler(10)}
        className={limitProduct === 10 ? styles.selectedlimit : null}
      >
        10
      </p>
      <p
        onClick={() => limitProductHandler(20)}
        className={limitProduct === 20 ? styles.selectedlimit : null}
      >
        20
      </p>
      <p
        onClick={() => limitProductHandler(50)}
        className={limitProduct === 50 ? styles.selectedlimit : null}
      >
        50
      </p>
      <p
        onClick={() => limitProductHandler(100)}
        className={limitProduct === 100 ? styles.selectedlimit : null}
      >
        100
      </p>
    </div>
  );
}

export default LimitProductTable;
