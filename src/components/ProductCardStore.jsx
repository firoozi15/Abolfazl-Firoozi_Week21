import styles from "./ProductCardStore.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={product.image || "/icon/product.png"} alt={product.name} />
      </div>

      <div className={styles.info}>
        <h3>{product.name}</h3>
        <p className={styles.price}>
          {product.price.toLocaleString("fa-IR")} تومان
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
