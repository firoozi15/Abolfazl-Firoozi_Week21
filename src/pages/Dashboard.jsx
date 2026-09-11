import styles from "./Dashboard.module.css";

import { CiSearch } from "react-icons/ci";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Pagination from "../components/Pagination";
import LimitProductTable from "../components/LimitProductTable";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limitProduct, setLimitProduct] = useState(10);
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await getProducts(page, limitProduct);
      setTotalPages(products.totalPages);
      setProducts(products.data);
    };
    getAllProducts();
  }, [page, limitProduct]);

  const deleteHandler = async (id) => {
    await deleteProduct(id);

    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const limitProductHandler = (number) => {
    setLimitProduct(number);
    setPage(1);
  };
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
        <LimitProductTable
          limitProduct={limitProduct}
          limitProductHandler={limitProductHandler}
        />
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
              <ProductCard
                key={product.id}
                product={product}
                onDelete={deleteHandler}
              />
            ))}
          </tbody>
        </table>
        <Pagination totalPages={totalPages} setPage={setPage} page={page} />
      </div>
    </div>
  );
}

export default Dashboard;
