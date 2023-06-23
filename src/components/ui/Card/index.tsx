import Image from "next/image";
import React from "react";
import styles from "./style.module.sass";

interface props {
  src: string;
  title: string;
  desc: string;
}

const Card: React.FC<props> = ({ src, title, desc }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.card__img}
        src={src}
        width={340}
        height={340}
        alt="img"
      />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__desc}>{desc}</p>
        <button className={styles.card__btn}>Читать {`->`}</button>
      </div>
    </div>
  );
};

export default Card;
