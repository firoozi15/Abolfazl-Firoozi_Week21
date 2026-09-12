import { useState } from "react";
import styles from "./ProductForm.module.css";

function ProductForm({ closeForm, selectedProduct }) {
  const [isClosing, setisClosing] = useState(false);
  const [product, setProduct] = useState(selectedProduct);

  const closeHandler = () => {
    setisClosing(true);
  };
  
  return (
    <div
      onAnimationEnd={() => isClosing && closeForm()}
      className={`${isClosing && styles.hide} ${styles.container}`}
    >
      <div className={styles.form}>
        {selectedProduct ? <p>ویرایش اطلاعات</p> : <p>ایجاد محصول جدید</p>}
        <div className={styles.inputs}>
          <div>
            <label htmlFor="name">نام کالا</label>
            {selectedProduct ? (
              <input
                onChange={(e) => setProduct.price(e.target.value)}
                id="name"
                type="text"
                placeholder="نام کالا"
                defaultValue={product.name}
              />
            ) : (
              <input
                onChange={(e) => setProduct.name(e.target.value)}
                id="name"
                type="text"
                placeholder="نام کالا"
              />
            )}
          </div>
          <div>
            <label htmlFor="quantity">تعداد موجودی</label>
            {selectedProduct ? (
              <input
                onChange={(e) => setProduct.quantity(e.target.value)}
                id="quantity"
                type="number"
                placeholder="تعداد موجودی"
                defaultValue={product.quantity}
              />
            ) : (
              <input
                onChange={(e) => setProduct.price(e.target.value)}
                id="quantity"
                type="number"
                placeholder="تعداد موجودی"
              />
            )}
          </div>
          <div>
            <label htmlFor="price">قیمت</label>
            {selectedProduct ? (
              <input
                onChange={(e) => setProduct.price(e.target.value)}
                id="price"
                type="number"
                placeholder="قیمت"
                defaultValue={product.price}
              />
            ) : (
              <input
                onChange={(e) => setProduct.price(e.target.value)}
                id="price"
                type="number"
                placeholder="قیمت"
              />
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.confirm}>
            {selectedProduct ? "ثبت اطلاعات جدید" : "ایجاد"}
          </button>
          <button onClick={() => closeHandler()}>انصراف</button>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
