import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import pizza from "../public/img/pizza.png";

const PizzaCard = ({navigate}) => {
  return (
    <div className={styles.container} onClick={navigate}>
      <Image src={pizza} alt="pizza" width={300} height={300} />
      <h1 className={styles.title}>LA DANITOLI</h1>
      <span className={styles.price}>$30.000</span>
      <p className={styles.desc}>
        La Daniloti es una pizza deliciosa creada con mucho amor por el chef
        Danilo. Cargada con queso derretido, peperoni y salchicha ranchera, cada
        bocado es una explosión de sabor. ¿Estás listo para probar la
        experiencia de Danilo? ¡Pide La Daniloti hoy mismo!
      </p>
    </div>
  );
};

export default PizzaCard;
