import React, { useEffect } from "react";
import styles from "./Tasks.module.css";
import clipboardIcon from "../../assets/img/clipboard.svg";
import trashIcon from "../../assets/img/trash.svg";
import { TasksContext } from "../Header/NewTaskForm";

const Tasks = () => {
  const emptyInfoDiv = React.useRef();

  const { taskList, setTaskList } = React.useContext(TasksContext);

  useEffect(() => {
    emptyInfoDiv.current.classList.add("hidden");
  }, [taskList]);

  return (
    <main className={styles.tasksContainer}>
      <h1>{typeof taskList}</h1>
      <header className={styles.tasksHeader}>
        <p className={styles.createdTasksInfo}>
          Tarefas criadas <span className={styles.counter}>{0}</span>
        </p>
        <p className={styles.finishedTasksInfo}>
          Concluídas <span className={styles.counter}>{0}</span>
        </p>
      </header>

      <section className={styles.tasks}>
        <div ref={emptyInfoDiv} className={styles.empty}>
          <img src={clipboardIcon} alt="" />
          <div className={styles.noTasksMessage}>
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>

        <div className={styles.task}>
          <div className={styles.checkboxDiv}>
            <input id={`check${1}`} type="checkbox" />
            <label className={styles.check} htmlFor={`check${1}`}></label>
          </div>
          <label htmlFor={`check${1}`} className={styles.taskText}>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </label>
          <button className={styles.trash}>
            <img src={trashIcon} alt="" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Tasks;
