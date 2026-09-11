import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import styles from "../pages/Dashboard.module.css";

function ProductCard({ product, onDelete }) {
  const { id, name, price, quantity } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity.toLocaleString("fa-IR")}</td>
      <td>{price.toLocaleString("fa-IR")} تومان</td>
      <td>{id}</td>
      <td>
        <button className={styles.button_edit}>
          <BiEdit />
        </button>
        <button onClick={() => onDelete(id)} className={styles.button_delete}>
          <MdDeleteOutline />
        </button>
      </td>
    </tr>
  );
}

export default ProductCard;
