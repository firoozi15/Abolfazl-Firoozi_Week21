import { object, string, ref } from "yup";

export const registerSchema = object({
  username: string()
    .required("نام کاربری اجباری است")
    .min(8, "حداقل ۸ کاراکتر وارد کنید."),
  password: string()
    .required("رمز عبور اجباری است")
    .min(8, "حداقل ۸ کاراکتر وارد کنید.")
    .matches(/[a-z]/, "رمز عبور باید ترکیبی از حروف کوچک، بزرگ و عدد باشد.")
    .matches(/[A-Z]/, "رمز عبور باید ترکیبی از حروف کوچک، بزرگ و عدد باشد.")
    .matches(/[0-9]/, "رمز عبور باید ترکیبی از حروف کوچک، بزرگ و عدد باشد."),
  confirmPassword: string()
    .required("تکرار رمز عبور اجباری است")
    .oneOf([ref("password")], "رمز عبور و تکرار آن یکسان نیست."),
});

export const loginSchema = object({
  username: string()
    .required("نام کاربری اجباری است")
    .min(8, "حداقل ۸ کاراکتر وارد کنید."),
  password: string()
    .required("رمز عبور اجباری است")
    .min(8, "حداقل ۸ کاراکتر وارد کنید.")
});
