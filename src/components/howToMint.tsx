import React from "react";
import styles from "./howtomint.module.css";

const HowToMint = () => {
  return (
    <div className={styles.MainContainer} id="howtobuy">
      <span>How to buy</span>
      <div className={styles.ContentContainer}>
        <img src="/mintSteps/1.png" alt="" />

        <img src="/mintSteps/2.png" alt="" />

        <img src="/mintSteps/3.png" alt="" />

        <img src="/mintSteps/4.png" alt="" />
      </div>
    </div>
  );
};

export default HowToMint;
