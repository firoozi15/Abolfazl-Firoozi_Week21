import { Link } from "react-router-dom";

import styles from "./Login_Register.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>بوت کمپ بوتواستارت</p>
      <div className={styles.card}>
        <img src="/icon/L-R.png" alt="logo" />
        <p>فرم ورود</p>
        <input type="text" placeholder="نام کاربری" />
        <input type="password" placeholder="رمز عبور" />
        <button type="submit">ورود</button>
        <div>
          <Link to="/register">ایجاد حساب کاربری!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
