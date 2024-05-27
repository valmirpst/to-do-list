import React from "react";
import styles from "./Tasks.module.css";
import clipboardIcon from "../../assets/img/clipboard.svg";
import trashIcon from "../../assets/img/trash.svg";
import NewTaskForm from "./NewTaskForm";

const Tasks = () => {
  const emptyInfoDiv = React.useRef();
  const [taskList, setTaskList] = React.useState([]);
  const [doneTasksCounter, setDoneTasksCounter] = React.useState(0);

  React.useEffect(() => {
    taskList.length > 0
      ? emptyInfoDiv.current.classList.add("hidden")
      : emptyInfoDiv.current.classList.remove("hidden");
  }, [taskList]);

  const handleCheckboxChange = (e, id) => {
    e.target.checked
      ? setDoneTasksCounter(prev => prev + 1)
      : setDoneTasksCounter(prev => prev - 1);
  };

  const handleTrashClick = (e, value) => {
    taskList.splice(taskList.indexOf(value), 1);
    setTaskList(prev => [...prev]);
  };

  return (
    <main className={styles.tasksContainer}>
      <NewTaskForm taskList={taskList} setTaskList={setTaskList} />

      <header className={styles.tasksHeader}>
        <p className={styles.createdTasksInfo}>
          Tarefas criadas
          <span className={styles.counter}>{taskList.length}</span>
        </p>
        <p className={styles.doneTasksInfo}>
          Concluídas
          <span className={styles.counter}>
            {doneTasksCounter} de {taskList.length}
          </span>
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

        {taskList.map((value, index) => {
          return (
            <div className={styles.task} key={`check_${value}`}>
              <div className={styles.checkboxDiv}>
                <input
                  onChange={handleCheckboxChange}
                  id={`check_${value}`}
                  type="checkbox"
                />
                <label
                  className={styles.check}
                  id={`check_${value}`}
                  htmlFor={`check_${value}`}
                ></label>
              </div>
              <label htmlFor={`check_${value}`} className={styles.taskText}>
                {value}
              </label>
              <button
                className={styles.trash}
                onClick={e => handleTrashClick(e, value)}
              >
                <img className={styles.trashImg} src={trashIcon} alt="" />
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Tasks;
