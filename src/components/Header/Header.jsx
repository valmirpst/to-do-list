import React from "react";
import styles from "./Header.module.css";
import RocketIcon from "../../assets/img/rocket.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={RocketIcon} alt="Rocket Icon" />
        <p className={styles.titleText}>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
