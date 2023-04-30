import styles from "../styles/Cart.module.css";
const CartBill = ({navigateHome}) => {
  return (
    <div>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal</b>$60.000
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Descuento: </b> $10.000
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b> $50.000
          </div>
          <button className={styles.button} onClick={navigateHome}>Ir a pagos</button>
        </div>
    </div>
  )
}

export default CartBill