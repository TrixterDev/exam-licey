"use client";

import { getData } from "@/api";
import React, { useEffect } from "react";
import Card from "../ui/Card";
import styles from "./style.module.sass";

const HomePage = () => {
  // useEffect(() => {
  //   getData().then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <div className={`${styles.home} container`}>
      <h1>Полезная информация</h1>
      <div className={styles.home__cards}>
        <Card
          src="/card.png"
          title="Входные двери в квартиру с порошковым напылением"
          desc="На смену Антикам пришли Муар, Шелк, Крокодил, имеющие удивительно красивые фактуры, напоминающие ткань и даже кожу пресмыкающихся."
        />
        <Card
          src="/card.png"
          title="Входные двери в квартиру с порошковым напылением"
          desc="На смену Антикам пришли Муар, Шелк, Крокодил, имеющие удивительно красивые фактуры, напоминающие ткань и даже кожу пресмыкающихся."
        />
        <Card
          src="/card.png"
          title="Входные двери в квартиру с порошковым напылением"
          desc="На смену Антикам пришли Муар, Шелк, Крокодил, имеющие удивительно красивые фактуры, напоминающие ткань и даже кожу пресмыкающихся."
        />
      </div>
    </div>
  );
};

export default HomePage;
