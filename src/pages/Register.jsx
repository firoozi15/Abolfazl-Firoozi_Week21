import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { registerUser } from "../services/authService";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./Login_Register.module.css";
import { registerSchema } from "../schemas/FormSchema";
import { toast } from "react-toastify";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data.username, data.password);
      console.log(response);
      toast.success("ثبت‌نام با موفقیت انجام شد.");
    } catch (error) {
      error.response?.status === 400
        ? toast.error("نام کاربری از قبل وجود دارد.")
        : toast.error("ساخت حساب با خطا مواجه شد.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.card}>
        <img src="/icon/L-R.png" alt="logo" />
        <p>فرم ثبت نام</p>
        <input {...register("username")} type="text" placeholder="نام کاربری" />
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
          <Link to="/login">حساب کاربری دارید؟</Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
