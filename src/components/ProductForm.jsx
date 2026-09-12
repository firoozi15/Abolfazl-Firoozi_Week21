import { useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { formProductSchema } from "../schemas/ProductSchema";

import styles from "./ProductForm.module.css";

function ProductForm({ closeForm, selectedProduct }) {
  const [isClosing, setisClosing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formProductSchema),
    defaultValues: {
      name: selectedProduct?.name ?? "",
      quantity: selectedProduct?.quantity ?? "",
      price: selectedProduct?.price ?? "",
    },
  });

  const closeHandler = () => {
    setisClosing(true);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onAnimationEnd={() => isClosing && closeForm()}
      className={`${isClosing && styles.hide} ${styles.container}`}
    >
      <div className={styles.form}>
        {selectedProduct ? <p>ویرایش اطلاعات</p> : <p>ایجاد محصول جدید</p>}
        <div className={styles.inputs}>
          <div>
            <label htmlFor="name">نام کالا</label>
            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="نام کالا"
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label htmlFor="quantity">تعداد موجودی</label>
            <input
              {...register("quantity")}
              id="quantity"
              type="number"
              placeholder="تعداد"
            />
            {errors.quantity && <span>{errors.quantity.message}</span>}
          </div>
          <div>
            <label htmlFor="price">قیمت</label>
            <input
              {...register("price")}
              id="price"
              type="number"
              placeholder="قیمت"
            />
            {errors.price && <span>{errors.price.message}</span>}
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.confirm}>
            {selectedProduct ? "ثبت اطلاعات جدید" : "ایجاد"}
          </button>
          <button type="button" onClick={() => closeHandler()}>
            انصراف
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
