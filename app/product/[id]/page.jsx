"use client";
import styles from "../../../styles/Product.module.css";
import pizza from "../../../public/img/pizza.png";
import pizzaSize from "../../../public/img/size.png";
import Image from "next/image";
import { useState } from "react";

export const pizzaObj = {
  id: 1,
  img: pizza,
  name: "DANITOLI",
  price: [20.0, 25.0, 30.0],
  desc: "La Daniloti es una pizza deliciosa creada con mucho amor por el chef Danilo. Cargada con queso derretido, peperoni y salchicha ranchera, cada bocado es una explosión de sabor. ¿Estás listo para probar la experiencia de Danilo? ¡Pide La Daniloti hoy mismo!",
};

const Product = () => {
  const [size, setSize] = useState(0);

 
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizzaObj.img}
            alt="pizza image"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizzaObj.name}</h1>
        <span className={styles.price}>${pizzaObj.price[size]}</span>
        <p className={styles.desc}>{pizzaObj.desc}</p>
        <h3 className={styles.choose}>Elije el tamaño</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src={pizzaSize} fill alt="Pizza image" />
            <span className={styles.number}>Pequeña</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src={pizzaSize} fill alt="Pizza image" />
            <span className={styles.number}>Mediana</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src={pizzaSize} fill alt="Pizza image" />
            <span className={styles.number}>Grande</span>
          </div>
        </div>
        <h3 className={styles.choose}>Selecciona ingredientes Adicionales</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Doble de ingredientes</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Salsa Picante</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra queso</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="mom"
              name="mom"
              className={styles.checkbox}
            />
            <label htmlFor="mom">La mama de Goez</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
