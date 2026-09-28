import { object, string, number } from "yup";

export const formProductSchema = object({
  name: string()
    .required("نام کالا اجباری است.")
    .min(3, "حداقل ۳ کاراکتر وارد کنید."),
  price: number()
    .min(100, "قیمت نمی‌تواند کمتر از ۱۰۰ تومان باشد.")
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .required("فقط عدد وارد کنید."),
  quantity: number()
    .min(1, "تعداد نمی‌تواند کمتر از ۱ باشد.")
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .required("فقط عدد وارد کنید."),
});
