import styles from "../styles/Home.module.css";
import ProductCard from "../components/ProductCardStore.js";

import { CiSearch } from "react-icons/ci";
import Pagination from "../components/Pagination.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProducts } from "../services/productService.js";
import { AiOutlineLoading } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";

import { TbLogout2 } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { useRouter } from "next/router";

function Products() {
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getAllProducts = async () => {
    try {
      const products = await getProducts(page, 12, search);
      if (!products) return;
      console.log(products);
      setTotalPages(products.totalPages);
      setProducts(products.data);
    } catch (error) {
      toast.error("خطا در دریافت محصولات.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getAllProducts();
    }, 500);

    return () => clearTimeout(timer);
  }, [page, search]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/icon/L-R.png" alt="logo" />
        </div>
        <div className={styles.search}>
          {loading ? (
            <AiOutlineLoading className={styles.loading_animation} />
          ) : (
            <CiSearch />
          )}
          <input
            type="text"
            placeholder="جستجو"
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <div className={styles.user}>
          {!user ? (
            <>
              <button
                onClick={() => router.push("/Login")}
                className={styles.login}
              >
                ورود
              </button>
              <button onClick={() => router.push("/Register")}>ثبت نام</button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/Profile")}
                title="پروفایل"
                className={styles.button_icon}
              >
                <LuUser />
              </button>
              {user.isAdmin && (
                <button
                  onClick={() => router.push("/Dashboard")}
                  title="داشبورد"
                  className={`${styles.button_icon} ${styles.dashboard}`}
                >
                  <FiSettings />
                </button>
              )}
              <button
                onClick={() => {
                  logout();
                  toast.success("با موفقیت خارج شدید.");
                }}
                title="خروج"
                className={`${styles.button_icon} ${styles.logout}`}
              >
                <TbLogout2 />
              </button>
            </>
          )}
        </div>
      </header>

      <div className={styles.categories}>
        <button className={styles.active}>همه</button>
        <button>دیجیتال</button>
        <button>پوشاک</button>
        <button>لوازم خانگی</button>
      </div>

      <div className={styles.products}>
        {loading ? (
          <AiOutlineLoading className={styles.loading_animation} />
        ) : products.length === 0 ? (
          <div className={styles.empty}>داده‌ای یافت نشد.</div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </div>
  );
}

export default Products;
