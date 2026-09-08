import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { loginUser } from "../services/authService";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./Login_Register.module.css";
import { loginSchema } from "../schemas/FormSchema";
import { setAuthCookie } from "../utils/cookie";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data.username, data.password);
      setAuthCookie(response.data.token, response.data.user);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.card}>
        <img src="/icon/L-R.png" alt="logo" />
        <p>فرم ورود</p>
        <input {...register("username")} type="text" placeholder="نام کاربری" />
        {errors.username && <span>{errors.username.message}</span>}
        <input
          {...register("password")}
          type="password"
          placeholder="رمز عبور"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button type="submit">ورود</button>
        <div>
          <Link to="/register">ایجاد حساب کاربری!</Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
