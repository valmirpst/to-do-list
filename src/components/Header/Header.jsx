import React from "react";
import styles from "./Header.module.css";
import RocketIcon from "../../assets/img/rocket.svg";
import { NewTaskForm } from "./NewTaskForm";

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

      <NewTaskForm />
    </header>
  );
};

export default Header;
