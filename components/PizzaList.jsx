"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import { pizzaObj } from "@/app/product/[id]/page";
const PizzaList = () => {
  const router = useRouter();

  const handleRoute = () => router.push(`product/${pizzaObj.id}`);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LAS MEJORES PIZZAS DE MEDALLO</h1>
      <p className={styles.desc}>
        Disfruta de auténticas pizzas horneadas a la perfección en la comodidad
        de tu hogar. Realiza tu pedido en línea hoy mismo y saborea cada bocado
        de nuestras deliciosas opciones con ingredientes frescos y de alta
        calidad. Desde clásicas hasta opciones vegetarianas y sin gluten,
        ¡tenemos algo para todos los gustos!
      </p>
      <div className={styles.wrapper}>
        <PizzaCard navigate={handleRoute} />
        <PizzaCard navigate={handleRoute} />
        <PizzaCard navigate={handleRoute} />
        <PizzaCard navigate={handleRoute} />
        <PizzaCard navigate={handleRoute} />
        <PizzaCard navigate={handleRoute} />
        <PizzaCard navigate={handleRoute} />
        <PizzaCard navigate={handleRoute} />
      </div>
    </div>
  );
};

export default PizzaList;
