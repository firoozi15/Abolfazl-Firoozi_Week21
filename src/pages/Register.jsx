import { Link } from "react-router-dom";

import styles from "./Login_Register.module.css";

function Register() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>بوت کمپ بوتواستارت</p>
      <div className={styles.card}>
        <img src="/icon/L-R.png" alt="logo" />
        <p>فرم ثبت نام</p>
        <input type="text" placeholder="نام کاربری" />
        <input type="password" placeholder="رمز عبور" />
        <input type="password" placeholder="تکرار رمز عبور" />
        <button type="submit">ثبت نام</button>
        <div>
          <Link to="/login">حساب کاربری دارید؟</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
