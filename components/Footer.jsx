import Image from "next/image";
import styles from "../styles/Footer.module.css";
import bg from "../public/img/bg.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src={bg}
          alt="footer background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            UNA BUENA PIZZA ES COMO UN ABRAZO EN FORMA DE COMIDA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>VISITA NUESTRO LOCAL</h1>
          <p className={styles.text}>
            San Javier - Calle 43B.
            <br /> Medellin
            <br /> 3197143593
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORARIO DE ATENCION</h1>
          <p className={styles.text}>
            LUNES A SABADO
            <br /> 9:00 a.m - 9:00 p.m
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
