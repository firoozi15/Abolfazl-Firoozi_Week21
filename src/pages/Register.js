import Link from "next/link";
import { useForm } from "react-hook-form";

import { loginUser, registerUser } from "../services/authService";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "../styles/Login_Register.module.css";
import { registerSchema } from "../schemas/FormSchema";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import GuestRoute from "../routes/GuestRoute";

function Register() {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      await registerUser(data.username, data.password);
      const response = await loginUser(data.username, data.password);
      login(response.data.token, response.data.user);
      toast.success("ثبت‌نام با موفقیت انجام شد.");
    } catch (error) {
      error.response?.status === 400
        ? toast.error("نام کاربری از قبل وجود دارد.")
        : toast.error("ساخت حساب با خطا مواجه شد.");
    }
  };

  return (
    <GuestRoute>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <div className={styles.card}>
          <img src="/icon/L-R.png" alt="logo" />
          <p>فرم ثبت نام</p>
          <input
            {...register("username")}
            type="text"
            placeholder="نام کاربری"
          />
          {errors.username && <span>{errors.username.message}</span>}
          <input
            {...register("password")}
            type="password"
            placeholder="رمز عبور"
          />
          {errors.password && <span>{errors.password.message}</span>}
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="تکرار رمز عبور"
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <button type="submit">ثبت نام</button>
          <div>
            <Link href="/Login">حساب کاربری دارید؟</Link>
          </div>
        </div>
      </form>
    </GuestRoute>
  );
}

export default Register;
