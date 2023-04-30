"use client";
import styles from "../../styles/Cart.module.css";
import CartTable from "@/components/CartTable";
import CartBill from "@/components/CartBill";
import { useRouter } from "next/navigation";
const Cart = () => {

  const router = useRouter();

  const handleOrderNavigation = () => {
    router.push("/orders/1");
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CartTable />
        <CartTable />
      </div>
      <div className={styles.right}>
        <CartBill navigateHome={handleOrderNavigation}/>
      </div>
    </div>
  );
};

export default Cart;
