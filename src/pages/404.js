import { useRouter } from "next/router";
import styles from "../styles/404.module.css";

function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>صفحه مورد نظر پیدا نشد</h2>
      <p>ممکن است آدرس وارد شده اشتباه باشد.</p>
      <button onClick={() => router.replace("/")}>بازگشت به فروشگاه</button>
    </div>
  );
}

export default NotFound;
