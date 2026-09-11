import { useState } from "react";
import styles from "./ProductForm.module.css";

function ProductForm({ closeForm }) {
  const [isClosing, setisClosing] = useState(false);
  const closeHandler = () => {
    setisClosing(true);
  };
  return (
    <div
      onAnimationEnd={() => isClosing && closeForm()}
      className={`${isClosing && styles.hide} ${styles.container}`}
    >
      <div className={styles.form}>
        <p>ایجاد محصول جدید</p>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="name">نام کالا</label>
            <input id="name" type="text" placeholder="نام کالا" />
          </div>
          <div>
            <label htmlFor="quantity">تعداد موجودی</label>
            <input id="quantity" type="number" placeholder="تعداد موجودی" />
          </div>
          <div>
            <label htmlFor="price">قیمت</label>
            <input id="price" type="text" placeholder="قیمت" />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.confirm}>ایجاد</button>
          <button onClick={() => closeHandler()}>انصراف</button>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
