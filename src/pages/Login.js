import Link from "next/link";
import { useForm } from "react-hook-form";

import { loginUser } from "../services/authService";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "../styles/Login_Register.module.css";
import { loginSchema } from "../schemas/FormSchema";

import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import GuestRoute from "../routes/GuestRoute";

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const submittingRef = useRef(false);

  const onSubmit = async (data) => {
    if (submittingRef.current) return;

    submittingRef.current = true;
    setIsSubmitting(true);
    try {
      const response = await loginUser(data.username, data.password);
      login(response.data.token, response.data.user);
      toast.success("با موفقیت وارد شدید.");
    } catch (error) {
      error.response?.status === 400
        ? toast.error("نام کاربری یا رمز نامعتبر است.")
        : toast.error("عملیات با خطا مواجه شد.");
    } finally {
      setIsSubmitting(false);
      submittingRef.current = false;
    }
  };

  return (
    <GuestRoute>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <div className={styles.card}>
          <img src="/icon/L-R.png" alt="logo" />
          <p>فرم ورود</p>
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
          <button type="submit">
            {isSubmitting ? "در حال برسی ..." : "ورود"}
          </button>
          <div>
            <Link href="/Register">ایجاد حساب کاربری!</Link>
          </div>
        </div>
      </form>
    </GuestRoute>
  );
}

export default Login;
