import React from "react";
import styles from "./Tasks.module.css";
import clipboardIcon from "../../assets/img/clipboard.svg";
import NewTaskForm from "./NewTaskForm";

const Tasks = () => {
  const emptyInfoDiv = React.useRef();
  const [taskList, setTaskList] = React.useState(
    JSON.parse(localStorage.getItem("taskList"))
  );
  const [doneTasksCounter, setDoneTasksCounter] = React.useState(() => {
    let count = 0;
    JSON.parse(localStorage.getItem("taskList")).map(value => {
      if (value.isChecked) count += 1;
    });
    return count;
  });

  React.useEffect(() => {
    taskList.length > 0
      ? emptyInfoDiv.current.classList.add("hidden")
      : emptyInfoDiv.current.classList.remove("hidden");
  }, [taskList]);

  const handleCheckboxChange = (e, id, value) => {
    value.isChecked = !value.isChecked;
    localStorage.setItem("taskList", JSON.stringify(taskList));
    const element = document.getElementById(id);
    if (e.target.checked) {
      setDoneTasksCounter(prev => prev + 1);
      element.style.textDecoration = "line-through";
      element.style.color = "var(--gray-300)";
    } else {
      setDoneTasksCounter(prev => prev - 1);
      element.style.textDecoration = "none";
      element.style.color = "var(--gray-100)";
    }
  };

  const handleTrashClick = (e, value) => {
    const checkbox = document.querySelector(`input#check_${value.id}`);
    if (checkbox.checked) {
      checkbox.checked = false;
      setDoneTasksCounter(prev => prev - 1);
    }
    taskList.splice(taskList.indexOf(value), 1);
    setTaskList(prev => [...prev]);
  };

  return (
    <main className={styles.tasksContainer}>
      <NewTaskForm taskList={taskList} setTaskList={setTaskList} />

      <header className={styles.tasksHeader}>
        <p className={styles.createdTasksInfo}>
          {taskList.length > 0 ? "Tarefas criadas" : ""}
          <span className={styles.counter}>{taskList.length}</span>
        </p>
        <p className={styles.doneTasksInfo}>
          Concluídas
          <span className={styles.counter}>
            {taskList.length > 0
              ? `${doneTasksCounter} de ${taskList.length}`
              : doneTasksCounter}
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
            <div className={styles.task} key={`check_${value.id}`}>
              <div className={styles.checkboxDiv}>
                <input
                  onChange={e =>
                    handleCheckboxChange(e, `label_${value.id}`, value)
                  }
                  id={`check_${value.id}`}
                  type="checkbox"
                  checked={value.isChecked}
                />
                <label
                  className={styles.check}
                  id={`check_${value.id}`}
                  htmlFor={`check_${value.id}`}
                ></label>
              </div>
              <label
                htmlFor={`check_${value.id}`}
                className={styles.taskText}
                id={`label_${value.id}`}
              >
                {value.value}
              </label>
              <button
                className={styles.trash}
                onClick={e => handleTrashClick(e, value)}
              ></button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Tasks;
