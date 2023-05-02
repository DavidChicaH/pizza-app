"use client";
import Image from "next/image";
//Style Sheet
import styles from "../styles/Navbar.module.css";
//images
import telephone from "../public/img/telephone.png";
import pizzaLogo from "../public/img/pizza_logo.png";
import cart from "../public/img/cart.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(`/${route}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={telephone} alt="telephone image" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>PIDE YA!</div>
          <div className={styles.text}>319 714 3593</div>
        </div>
      </div>
      <div className={styles.item}>
        <Image
          className={styles.logo}
          src={pizzaLogo}
          alt="logo"
          width={100}
          height={80}
          onClick={() => handleNavigation("")}
        />
        <ul className={styles.list}>
          <li className={styles.listItem} onClick={() => handleNavigation("")}>
            Inicio
          </li>
          <li className={styles.listItem}>Pizzas</li>
          <li className={styles.listItem}>Menus</li>
          <li className={styles.listItem}>Eventos</li>
          <li className={styles.listItem} onClick={() => handleNavigation("form")}>Contacto</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart} onClick={() => handleNavigation("cart")}>
          <Image src={cart} alt="logo" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
