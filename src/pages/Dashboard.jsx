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

import ConfirmModal from "../components/ConfirmModal";
import ProductForm from "../components/ProductForm";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limitProduct, setLimitProduct] = useState(10);

  const [showProductForm, setShowProductForm] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const closeModal = () => setShowConfirm(false);
  const showModal = () => setShowConfirm(true);

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await getProducts(page, limitProduct);
      if (!products) return;
      setTotalPages(products.totalPages);
      setProducts(products.data);
    };
    getAllProducts();
  }, [page, limitProduct]);

  const deleteHandler = async (id) => {
    await deleteProduct(id);
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    if (updatedProducts.length === 0 && page > 1) {
      setPage((prev) => prev - 1);
    }
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
          <button onClick={() => setShowProductForm(true)}>افزودن محصول</button>
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
            {products.length === 0 && (
              <tr>
                <td colSpan="5">داده ای یافت نشد.</td>
              </tr>
            )}
            {products.length > 0 &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  setDeleteId={setDeleteId}
                  showModal={showModal}
                />
              ))}
          </tbody>
        </table>
        <Pagination totalPages={totalPages} setPage={setPage} page={page} />
      </div>
      {showConfirm && (
        <ConfirmModal
          closeModal={closeModal}
          confirmMessage={"حذف"}
          cancelMessage={"لغو"}
          message={"آیا از حذف این محصول مطمئنید؟"}
          confirmFunction={() => {
            deleteHandler(deleteId);
          }}
        />
      )}
      {showProductForm && (
        <ProductForm closeForm={() => setShowProductForm(false)} />
      )}
    </div>
  );
}

export default Dashboard;
