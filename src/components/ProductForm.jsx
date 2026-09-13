import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { formProductSchema } from "../schemas/ProductSchema";

import styles from "./ProductForm.module.css";
import { createProduct, updateProduct } from "../services/productService";
import { toast } from "react-toastify";

function ProductForm({ closeForm, selectedProduct, refreshProducts }) {
  const [isClosing, setisClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submittingRef = useRef(false);

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
    if (submittingRef.current) return;
    submittingRef.current = true;
    setIsSubmitting(true);
    try {
      if (selectedProduct) {
        await updateProduct(selectedProduct.id, data);
        toast.success("کالا با موفقیت تغییر یافت.");
      } else {
        await createProduct(data);
        toast.success("کالا با موفقیت ایجاد شد.");
      }

      await refreshProducts();
      closeHandler();
    } catch (error) {
      toast.error("عملیات با خطا مواجه شد.");
    } finally {
      setIsSubmitting(false);
    }
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
          <button
            disabled={isSubmitting}
            type="submit"
            className={styles.confirm}
          >
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
