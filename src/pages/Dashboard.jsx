import styles from "./Dashboard.module.css";

import { CiSearch } from "react-icons/ci";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await getProducts();
      setProducts(products.data);
    };
    getAllProducts();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.search}>
          <input type="text" placeholder="جستجو کالا" />
          <CiSearch />
        </div>
        <div className={styles.admin_details}>
          <img src="/icon/user.png" alt="admin icon" />
          <div>
            <h3>{user.username}</h3>
            <div>
              <p>مدیر</p>
              <button onClick={() => logout()}>خروج</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main_header}>
          <div>
            <AiOutlineAppstoreAdd />
            <h2>مدیریت کالا</h2>
          </div>
          <button>افزودن محصول</button>
        </div>
        <table className={styles.products_table}>
          <thead>
            <tr className={styles.table_haeder}>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <span className={styles.page_selected}>۱</span>
          <span>۲</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
