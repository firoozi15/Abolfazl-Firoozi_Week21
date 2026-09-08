import styles from "./Dashboard.module.css";

import { CiSearch } from "react-icons/ci";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useEffect } from "react";
import { getProducts } from "../services/productService";

function Dashboard() {
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await getProducts();
      console.log(products);
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
            <h3>ابوالفضل فیروزی</h3>
            <p>مدیر</p>
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
            <tr>
              <td>تیشرت طرح انگولار</td>
              <td>120</td>
              <td>90 هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td>
                <button className={styles.button_edit}>
                  <BiEdit />
                </button>
                <button className={styles.button_delete}>
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
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
