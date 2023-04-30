import Image from "next/image";
import styles from "../styles/Cart.module.css";
import pizza from "../public/img/pizza.png";

const CartTable = () => {
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.trTitle}>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Añadidos</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={pizza}
                  alt="pizza image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>DANITOLI</span>
            </td>
            <td>
              <span className={styles.extra}>Salsa Picante, extra queso</span>
            </td>
            <td>
              <span className={styles.price}>$20.000</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$60.000</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
