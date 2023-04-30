"use client";
import Image from "next/image";
//StyleSheet
import styles from "../styles/Featured.module.css";
//images
import arrowLeft from "../public/img/arrowl.png";
import arrowRight from "../public/img/arrowr.png";
import pizza1 from "../public/img/featured1.png";
import pizza2 from "../public/img/featured2.png";
import pizza3 from "../public/img/featured3.png";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "1") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  const images = [pizza1, pizza2, pizza3];

  console.log(index); 
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("1")}
      >
        <Image src={arrowLeft} alt="Arrow left" fill style={{objectFit: "contain"}}/>
      </div>
      <div className={styles.wrapper} style={{transform: `translateX(${-100 * index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} key={i} fill alt="Hero Pizza image"/>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=> handleArrow("r")}>
        <Image src={arrowRight} alt="Arrow left" fill style={{objectFit: "contain"}}/>
      </div>
    </div>
  );
};

export default Featured;
