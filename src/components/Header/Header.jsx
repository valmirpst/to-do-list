import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src="" alt="logo-icon" />
            <p className={styles.titleText}><span className={styles.to}>to</span><span className={styles.do}>do</span></p>
        </div>

        <form action="" className={styles.form}>
            <input className={styles.taskInput} type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">Criar</button>
        </form>
    </header>
    )
}

export default Header;