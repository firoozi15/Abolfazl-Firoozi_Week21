import styles from "./Products.module.css";
import ProductCard from "../components/ProductCardStore.jsx";

import { CiSearch } from "react-icons/ci";
import Pagination from "../components/Pagination.jsx";

function Products() {
  const products = [
    {
      id: 1,
      name: "توپ",
      price: 650000,
      quantity: 56,
    },
    {
      id: 2,
      name: "لپ تاپ",
      price: 45000000,
      quantity: 12,
    },
    {
      id: 3,
      name: "هدفون",
      price: 2500000,
      quantity: 30,
    },
    {
      id: 4,
      name: "کیبورد",
      price: 1200000,
      quantity: 20,
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/icon/L-R.png" alt="logo" />
        </div>
        <div className={styles.search}>
          <CiSearch />
          <input type="text" placeholder="جستجو" />
        </div>
        <div className={styles.user}>
          <button className={styles.login}>ورود</button>
          <button>ثبت نام</button>
        </div>
      </header>

      <div className={styles.categories}>
        <button className={styles.active}>همه</button>
        <button>دیجیتال</button>
        <button>پوشاک</button>
        <button>لوازم خانگی</button>
      </div>

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
