import { object, string, number } from "yup";

export const formProductSchema = object({
  name: string()
    .required("نام کالا اجباری است.")
    .min(3, "حداقل ۳ کاراکتر وارد کنید."),
  price: number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .required("فقط عدد وارد کنید."),
  quantity: number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .required("فقط عدد وارد کنید."),
});
