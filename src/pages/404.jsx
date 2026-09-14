import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>صفحه مورد نظر پیدا نشد</h2>
      <p>ممکن است آدرس وارد شده اشتباه باشد.</p>
      <button onClick={() => navigate("/")}>بازگشت به فروشگاه</button>
    </div>
  );
}

export default NotFound;
